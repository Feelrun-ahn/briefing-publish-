/* ═══════════ Briefing 중계 서버 (Cloudflare Workers) ═══════════

   앱 → 이 서버 → 나이스

   이 서버가 하는 일
     ① 인증키를 감춘다 — 키는 서버에만 있고 앱에는 없다
     ② 같은 요청을 묶는다 — 같은 학교·학년·반·주간을 여러 사람이 동시에 물어도
        나이스에는 한 번만 간다 (in-flight deduplication)
     ③ 잠깐 저장한다 — 방금 받은 답은 캐시에서 바로 준다
     ④ 한도에 걸리면 그대로 알린다 — 다른 우회로를 찾지 않는다
     ⑤ CORS 를 허용한다 — 앱에서 바로 부를 수 있다

   배포 (PC 에서)
     npm i -g wrangler
     wrangler login
     wrangler secret put NEIS_KEY      ← 나이스에서 받은 키를 여기에
     wrangler deploy
*/

const NEIS = 'https://open.neis.go.kr/hub';

/* 지금 진행 중인 요청 — 같은 키는 하나로 묶는다 */
const inflight = new Map();

/* ── 사용량 집계 ──
   나이스는 남은 한도를 알려 주지 않는다. 그래서 서버가 직접 센다.
   KV 를 붙이면 서버가 바뀌어도 숫자가 남고, 없으면 이 서버가 살아 있는 동안만 센다. */
const usage = { day:'', neis:0, cacheHit:0, sports:0, news:0, blocked:0, byPath:{} };

function today() {
  return new Date(Date.now() + 9*3600*1000).toISOString().slice(0, 10);   // 한국 날짜
}
function bump(kind, path) {
  const d = today();
  if (usage.day !== d) {
    usage.day = d; usage.neis = 0; usage.cacheHit = 0;
    usage.sports = 0; usage.news = 0; usage.blocked = 0; usage.byPath = {};
  }
  usage[kind] = (usage[kind] || 0) + 1;
  if (path) usage.byPath[path] = (usage.byPath[path] || 0) + 1;
}

/* KV 가 붙어 있으면 하루치를 저장해 둔다 (선택) */
async function saveUsage(env, ctx) {
  if (!env.USAGE) return;
  ctx.waitUntil(env.USAGE.put('u:' + usage.day, JSON.stringify(usage), { expirationTtl: 90*86400 }));
}
async function loadUsage(env, day) {
  if (!env.USAGE) return null;
  const s = await env.USAGE.get('u:' + day);
  return s ? JSON.parse(s) : null;
}

/* ── 요청 제한 ──
   한 사람(IP)이 지나치게 많이 부르면 막는다.
   무료 한도는 하루 10만이라, 봇 하나가 두들기면 모두가 못 쓰게 된다.
   Worker 는 요청 사이에 기억이 남지 않을 수 있으므로
   같은 서버(아이솔레이트)가 살아 있는 동안만이라도 막아 준다. */
const hits = new Map();
const RATE = { max: 60, win: 60_000 };      // 1분에 60번

function rateLimited(req) {
  const ip = req.headers.get('CF-Connecting-IP') || 'unknown';
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.at > RATE.win) {
    hits.set(ip, { n: 1, at: now });
    if (hits.size > 5000) {                  // 오래된 기록 정리
      for (const [k, v] of hits) if (now - v.at > RATE.win) hits.delete(k);
    }
    return false;
  }
  rec.n++;
  return rec.n > RATE.max;
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);

    if (req.method === 'OPTIONS') return cors(new Response(null, { status: 204 }));

    if (rateLimited(req)) {
      bump('blocked');
      return cors(json({ error: '잠시 후 다시 시도해 주세요', retry: true }, 429,
        { 'Retry-After': '60' }));
    }

    /* 살아 있는지 확인용 */
    if (url.pathname === '/health') return cors(json({ ok: true }));

    /* ── 개발자 페이지 ──
       /stats?key=<ADMIN_KEY>  숫자만 (JSON)
       /admin?key=<ADMIN_KEY>  보기 좋게 (HTML) */
    if (url.pathname === '/stats' || url.pathname === '/admin') {
      const k = url.searchParams.get('key') || '';
      if (!env.ADMIN_KEY || k !== env.ADMIN_KEY)
        return cors(json({ error: '권한이 없습니다' }, 403));
      bump('noop');
      const d = today();
      const saved = await loadUsage(env, url.searchParams.get('day') || d);
      const cur = (usage.day === d) ? usage : { day: d, neis:0, cacheHit:0, sports:0, news:0, blocked:0, byPath:{} };
      const data = saved && saved.day !== d ? saved : cur;
      await saveUsage(env, ctx);
      if (url.pathname === '/stats') return cors(json(data));
      return cors(new Response(statsPage(data), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      }));
    }

    /* 학교 검색 — /school?q=목운중 */
    if (url.pathname === '/school') {
      const q = (url.searchParams.get('q') || '').trim();
      if (q.length < 2) return cors(json({ error: '두 글자 이상 입력해 주세요' }, 400));
      return cors(await dedup(`school:${q}`, () => callNeis(env, 'schoolInfo', {
        SCHUL_NM: q, pSize: '20'
      }), ctx, 86400));         // 학교 목록은 하루 저장
    }

    /* 시간표 — /timetable?office=B10&school=7010084&grade=3&class=15&from=20260817&to=20260823&kind=중학교 */
    if (url.pathname === '/timetable') {
      const p = url.searchParams;
      const need = ['office', 'school', 'grade', 'class', 'from', 'to'];
      for (const k of need) if (!p.get(k)) return cors(json({ error: `${k} 없음` }, 400));

      const svc = svcOf(p.get('kind') || '');
      const key = `tt:${p.get('office')}:${p.get('school')}:${p.get('grade')}:${p.get('class')}:${p.get('from')}`;
      /* 이번 주 시간표는 30분, 지난 주는 하루 저장
         (오늘 것은 바뀔 수 있으므로 짧게 둔다) */
      const ttl = isThisWeek(p.get('from')) ? 1800 : 86400;

      return cors(await dedup(key, () => callNeis(env, svc, {
        ATPT_OFCDC_SC_CODE: p.get('office'),
        SD_SCHUL_CODE: p.get('school'),
        GRADE: p.get('grade'),
        CLASS_NM: p.get('class'),
        TI_FROM_YMD: p.get('from'),
        TI_TO_YMD: p.get('to'),
        AY: p.get('ay') || '',
        SEM: p.get('sem') || '',
        pSize: '300'
      }), ctx, ttl));
    }

    /* 야구 — /sports?path=eventsnext.php%3Fid%3D139825
       키가 서버에만 있으므로 사용자끼리 한도를 나눠 쓰지 않는다 */
    if (url.pathname === '/sports') {
      const path = url.searchParams.get('path') || '';
      if (!/^[a-z]+\.php\?[\w=&%.-]+$/i.test(path))
        return cors(json({ error: '잘못된 요청' }, 400));
      const key = env.SDB_KEY || '123';
      const ttl = path.includes('season') ? 21600 : 1800;   // 시즌 6시간, 그 외 30분
      bump('sports');
      return cors(await dedup('sdb:' + path, async () => {
        const r = await timed(`https://www.thesportsdb.com/api/v1/json/${key}/${path}`);
        if (!r.ok) return json({ error: '경기 정보를 받지 못했습니다' }, 502);
        return json(await r.json());
      }, ctx, ttl));
    }

    /* 뉴스 — /news?url=<구글 뉴스 RSS 주소>
       RSS 를 JSON 으로 바꿔 돌려준다. 공개 프록시가 필요 없어진다 */
    if (url.pathname === '/news') {
      const target = url.searchParams.get('url') || '';
      if (!/^https:\/\/news\.google\.com\//.test(target))
        return cors(json({ error: '허용되지 않은 주소' }, 400));
      bump('news');
      return cors(await dedup('news:' + target, async () => {
        const r = await timed(target, { 'User-Agent': 'Mozilla/5.0 (compatible; Briefing/1.0)' });
        if (!r.ok) return json({ error: '뉴스를 받지 못했습니다' }, 502);
        const xml = await r.text();
        const items = [];
        const re = /<item>([\s\S]*?)<\/item>/g;
        let m, n = 0;
        while ((m = re.exec(xml)) && n < 5) {
          const g = t => {
            const x = new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`).exec(m[1]);
            if (!x) return '';
            return x[1].replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim();
          };
          const title = g('title');
          if (title) { items.push({ title, link: g('link') }); n++; }
        }
        return json({ items });
      }, ctx, 1800));
    }

    return cors(json({ error: '없는 주소' }, 404));
  }
};

/* ── 같은 요청 묶기 + 캐시 ── */
async function dedup(key, run, ctx, ttl) {
  const cache = caches.default;
  const cacheKey = new Request('https://cache.local/' + encodeURIComponent(key));

  const hit = await cache.match(cacheKey);
  if (hit) { bump('cacheHit'); return hit; }

  if (inflight.has(key)) {
    const shared = await inflight.get(key);
    return shared.clone();
  }

  const p = (async () => {
    const res = await run();
    if (res.status === 200) {
      const store = new Response(res.clone().body, res);
      store.headers.set('Cache-Control', `public, max-age=${ttl}`);
      ctx.waitUntil(cache.put(cacheKey, store));
    }
    return res;
  })();

  inflight.set(key, p);
  try { return (await p).clone(); }
  finally { inflight.delete(key); }
}

/* ── 나이스 부르기 ── */
async function callNeis(env, service, params) {
  bump('neis', service);          // 나이스를 실제로 부를 때만 센다
  const q = new URLSearchParams({ Type: 'json', pIndex: '1', KEY: env.NEIS_KEY });
  for (const k in params) if (params[k]) q.set(k, params[k]);

  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 9000);
  let r;
  try {
    r = await fetch(`${NEIS}/${service}?${q}`, { signal: ac.signal });
  } catch (e) {
    clearTimeout(t);
    return json({ error: '나이스에 연결하지 못했습니다', retry: true }, 503);
  }
  clearTimeout(t);

  let data;
  try { data = await r.json(); } catch (e) { return json({ error: '형식 오류' }, 502); }

  /* 나이스가 알려 주는 상태 */
  const code = data?.RESULT?.CODE || data?.[service]?.[0]?.head?.[1]?.RESULT?.CODE;
  if (code === 'INFO-200') return json({ rows: [] });              // 자료 없음
  if (code === 'INFO-300' || code === 'ERROR-337')
    return json({ error: '오늘 조회 한도에 도달했습니다', limit: true }, 429);
  if (code && code.startsWith('ERROR'))
    return json({ error: '나이스 응답 오류', code }, 502);

  const rows = data?.[service]?.[1]?.row || [];
  return json({ rows });
}

/* 시간 제한을 건 fetch */
async function timed(url, headers) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 9000);
  try { return await fetch(url, { signal: ac.signal, headers: headers || {} }); }
  catch (e) { return { ok: false }; }
  finally { clearTimeout(t); }
}

function svcOf(kind) {
  if (kind.includes('초')) return 'elsTimetable';
  if (kind.includes('고')) return 'hisTimetable';
  return 'misTimetable';
}

function isThisWeek(ymd) {
  const d = new Date(`${ymd.slice(0,4)}-${ymd.slice(4,6)}-${ymd.slice(6,8)}T00:00:00`);
  const now = new Date();
  const mon = new Date(now); mon.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  mon.setHours(0,0,0,0);
  return d >= mon;
}

function json(o, status, extra) {
  return new Response(JSON.stringify(o), {
    status: status || 200,
    headers: Object.assign(
      { 'Content-Type': 'application/json; charset=utf-8' }, extra || {})
  });
}

/* 보기 좋은 한 장짜리 화면 */
function statsPage(u) {
  const total = u.neis + u.cacheHit;
  const rate = total ? Math.round(u.cacheHit / total * 100) : 0;
  const rows = Object.keys(u.byPath || {})
    .map(k => `<tr><td>${k}</td><td>${u.byPath[k]}</td></tr>`).join('') ||
    '<tr><td colspan="2" class="dim">아직 없음</td></tr>';
  return `<!doctype html><html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Briefing 서버 상태</title><style>
:root{color-scheme:dark}
body{margin:0;padding:28px 20px;background:#0b0e18;color:#e8ecf5;
  font:15px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}
.wrap{max-width:640px;margin:0 auto}
h1{font-size:20px;margin:0 0 4px;font-weight:600}
.day{color:#7c8798;font-size:13px;margin-bottom:24px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:24px}
.card{background:#141926;border:1px solid #232c3f;border-radius:16px;padding:16px 18px}
.card i{display:block;font-style:normal;font-size:12.5px;color:#7c8798;margin-bottom:6px}
.card b{font-size:28px;font-weight:600;letter-spacing:-.02em}
.card .sub{font-size:12px;color:#7c8798;margin-top:4px}
.ok{color:#7fe7c4}.warn{color:#f2c14e}.bad{color:#f2857a}
table{width:100%;border-collapse:collapse;background:#141926;
  border:1px solid #232c3f;border-radius:16px;overflow:hidden}
th,td{padding:11px 16px;text-align:left;font-size:13.5px;border-bottom:1px solid #1c2434}
th{color:#7c8798;font-weight:500;font-size:12px}
tr:last-child td{border-bottom:none}
.dim{color:#5b6577}
.note{margin-top:20px;font-size:12.5px;color:#7c8798;line-height:1.7}
</style></head><body><div class="wrap">
<h1>Briefing 서버 상태</h1>
<div class="day">${u.day} · 한국 시간 기준</div>

<div class="grid">
  <div class="card"><i>나이스 실제 호출</i>
    <b class="${u.neis > 8000 ? 'bad' : u.neis > 4000 ? 'warn' : 'ok'}">${u.neis.toLocaleString()}</b>
    <div class="sub">오늘 나이스로 나간 요청</div></div>
  <div class="card"><i>저장해 둔 것으로 처리</i>
    <b class="ok">${u.cacheHit.toLocaleString()}</b>
    <div class="sub">나이스를 부르지 않고 답한 횟수</div></div>
  <div class="card"><i>아낀 비율</i>
    <b class="${rate >= 50 ? 'ok' : 'warn'}">${rate}%</b>
    <div class="sub">전체 ${total.toLocaleString()}건 중</div></div>
  <div class="card"><i>야구</i><b>${(u.sports||0).toLocaleString()}</b>
    <div class="sub">TheSportsDB</div></div>
  <div class="card"><i>뉴스</i><b>${(u.news||0).toLocaleString()}</b>
    <div class="sub">구글 뉴스</div></div>
  <div class="card"><i>막은 요청</i>
    <b class="${u.blocked > 100 ? 'warn' : ''}">${(u.blocked||0).toLocaleString()}</b>
    <div class="sub">너무 자주 불러서 거절</div></div>
</div>

<table><tr><th>나이스 종류</th><th>횟수</th></tr>${rows}</table>

<p class="note">
나이스는 남은 한도를 알려 주지 않아 서버가 직접 셉니다.<br>
KV 를 붙이지 않으면 서버가 새로 뜰 때 숫자가 0 부터 다시 시작합니다.<br>
Cloudflare 무료 한도는 하루 10만 요청이며, 넘으면 멈출 뿐 요금이 청구되지 않습니다.
</p>
</div></body></html>`;
}

function cors(res) {
  const h = new Headers(res.headers);
  h.set('Access-Control-Allow-Origin', '*');
  h.set('Access-Control-Allow-Methods', 'GET,OPTIONS');
  h.set('Access-Control-Allow-Headers', 'Content-Type');
  return new Response(res.body, { status: res.status, headers: h });
}
