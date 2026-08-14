/* Briefing — 전체 스크립트 번들 */


/* ══════ js/i18n.js ══════ */

/* ═══════════ 다국어 ═══════════ */
const LANGS = [
  { id:'ko', name:'한국어' },
  { id:'en', name:'English' },
  { id:'ja', name:'日本語' },
  { id:'zh', name:'中文(简体)' }
];
const I18N = {
  ko:{
    morning:'MORNING', night:'NIGHT',
    greetDawn:'이제 하루를 접을 시간이에요', greetEve:'오늘 하루 수고했어요',
    greetAm:'좋은 아침이에요', greetNoon:'오전이 지나가요', greetPm:'좋은 오후예요',
    settings:'설정', dayScreen:'☀ 아침 화면', nightScreen:'☾ 밤 화면',
    showAll:'전체 보기', showLess:'간단히 보기',
    bedIn:'취침 {t}까지 {d}', bedPast:'취침 {t} 지남', bedGoal:'취침 목표 {t}',
    outIn:'외출 {t}까지 {d}', outPast:'외출 {t} 지남',
    hour:'시간', minute:'분',
    tabGeneral:'일반', tabCards:'카드 구성', tabTime:'시간', tabLink:'기기 연결', tabData:'데이터', tabHelp:'도움말',
    save:'저장', cancel:'취소', delete:'삭제', add:'추가', edit:'편집', close:'닫기',
    today:'오늘', tomorrow:'내일', noItems:'항목이 없습니다'
  },
  en:{
    morning:'MORNING', night:'NIGHT',
    greetDawn:'Time to wrap up the day', greetEve:'Nice work today',
    greetAm:'Good morning', greetNoon:'The morning is passing', greetPm:'Good afternoon',
    settings:'Settings', dayScreen:'☀ Day', nightScreen:'☾ Night',
    showAll:'Show all', showLess:'Show less',
    bedIn:'{d} until bed ({t})', bedPast:'Past bedtime {t}', bedGoal:'Bedtime {t}',
    outIn:'{d} until {t}', outPast:'Past {t}',
    hour:'h', minute:'m',
    tabGeneral:'General', tabCards:'Cards', tabTime:'Times', tabLink:'Devices', tabData:'Data', tabHelp:'Help',
    save:'Save', cancel:'Cancel', delete:'Delete', add:'Add', edit:'Edit', close:'Close',
    today:'Today', tomorrow:'Tomorrow', noItems:'Nothing here yet'
  },
  ja:{
    morning:'MORNING', night:'NIGHT',
    greetDawn:'そろそろ一日を終える時間です', greetEve:'今日もお疲れさまでした',
    greetAm:'おはようございます', greetNoon:'午前が過ぎています', greetPm:'こんにちは',
    settings:'設定', dayScreen:'☀ 朝の画面', nightScreen:'☾ 夜の画面',
    showAll:'すべて表示', showLess:'簡易表示',
    bedIn:'就寝 {t} まで {d}', bedPast:'就寝 {t} を過ぎました', bedGoal:'就寝目標 {t}',
    outIn:'外出 {t} まで {d}', outPast:'外出 {t} を過ぎました',
    hour:'時間', minute:'分',
    tabGeneral:'一般', tabCards:'カード', tabTime:'時刻', tabLink:'端末連携', tabData:'データ', tabHelp:'ヘルプ',
    save:'保存', cancel:'キャンセル', delete:'削除', add:'追加', edit:'編集', close:'閉じる',
    today:'今日', tomorrow:'明日', noItems:'項目がありません'
  },
  zh:{
    morning:'MORNING', night:'NIGHT',
    greetDawn:'该结束今天了', greetEve:'今天辛苦了',
    greetAm:'早上好', greetNoon:'上午即将过去', greetPm:'下午好',
    settings:'设置', dayScreen:'☀ 白天', nightScreen:'☾ 夜间',
    showAll:'显示全部', showLess:'简洁显示',
    bedIn:'距离就寝 {t} 还有 {d}', bedPast:'已过就寝 {t}', bedGoal:'就寝目标 {t}',
    outIn:'距离 {t} 还有 {d}', outPast:'已过 {t}',
    hour:'小时', minute:'分',
    tabGeneral:'常规', tabCards:'卡片', tabTime:'时间', tabLink:'设备连接', tabData:'数据', tabHelp:'帮助',
    save:'保存', cancel:'取消', delete:'删除', add:'添加', edit:'编辑', close:'关闭',
    today:'今天', tomorrow:'明天', noItems:'暂无内容'
  }
};
/* 카드 이름·설명 번역 (없으면 한국어) */
const CARD_I18N = {
  en:{ clock:['Clock · Date','Time, date and upcoming D-days'],
       weather:['Weather','Temperature, air quality, hourly and tomorrow'],
       calendar:['Calendar','Month view with events, exams and D-days'],
       todo:['To-do','Today and tomorrow, separately'],
       exam:['Assignments','Due dates pulled from the calendar'],
       baseball:['Baseball','Your team\u2019s game today and recent results'],
       news:['News briefing','One headline per topic'],
       fortune:['Daily fortune','Saju reading from your birth date (for fun)'],
       sleep:['Sleep score','Log your watch score and see the 7-day trend'],
       quote:['Quote of the day','A line for morning or night'],
       habit:['Daily habits','Check off habits and track your streak'],
       water:['Water','Fill up your daily cup goal'],
       timetable:['Timetable','Shows only today\u2019s classes'],
       countdown:['Big D-day','The nearest D-day, large'] },
  ja:{ clock:['時計・日付','時刻と直近のDデー'], weather:['天気','気温・大気質・時間別・明日'],
       calendar:['カレンダー','予定・課題・Dデー'], todo:['やること','今日と明日を分けて'],
       exam:['課題','カレンダーの課題をまとめて'], baseball:['野球','応援チームの試合と結果'],
       news:['ニュース','分野ごとに1本'], fortune:['今日の運勢','生年月日から四柱推命（娯楽用）'],
       sleep:['睡眠スコア','ウォッチの点数と7日間の推移'], quote:['今日の一言','朝と夜で変わります'],
       habit:['毎日の習慣','チェックと連続日数'], water:['水を飲む','1日の目標杯数'],
       timetable:['時間割','今日の分だけ表示'], countdown:['大きなDデー','一番近いDデーを大きく'] },
  zh:{ clock:['时钟 · 日期','时间、日期与最近的倒数日'], weather:['天气','气温、空气质量、逐时与明天'],
       calendar:['日历','日程、作业与倒数日'], todo:['待办','今天与明天分开'],
       exam:['作业提醒','汇总日历中的作业'], baseball:['棒球','球队今日比赛与近期战绩'],
       news:['新闻简报','每个分类一条'], fortune:['今日运势','根据生日的四柱推算（娱乐向）'],
       sleep:['睡眠评分','记录手表评分与7天趋势'], quote:['每日一句','早晚各不同'],
       habit:['每日习惯','打卡与连续天数'], water:['喝水','完成每日杯数目标'],
       timetable:['今日课表','只显示今天'], countdown:['大倒数日','最近的倒数日'] }
};
function lang(){ return (C && C.lang) || 'ko'; }
function T(k, vars){
  let s = (I18N[lang()] && I18N[lang()][k]) || I18N.ko[k] || k;
  if(vars) for(const v in vars) s = s.replace('{'+v+'}', vars[v]);
  return s;
}
function cardName(c){ const m = CARD_I18N[lang()] && CARD_I18N[lang()][c.id]; return m ? m[0] : c.name; }
function cardDesc(c){ const m = CARD_I18N[lang()] && CARD_I18N[lang()][c.id]; return m ? m[1] : (c.desc||''); }
function detectLang(){
  const l = (navigator.language || 'ko').slice(0,2).toLowerCase();
  return LANGS.some(x => x.id === l) ? l : 'en';
}


/* ══════ js/qr.js ══════ */

/* ═══════════ QR 코드 생성 ═══════════
   외부 라이브러리 없이 QR Model 2를 직접 생성합니다.
   바이트 모드 + 오류정정 레벨 M, 버전 자동 선택(1~10). */
const QR = (function(){
  /* 갈루아 필드 */
  const EXP = new Array(512), LOG = new Array(256);
  (function(){ let x = 1;
    for(let i = 0; i < 255; i++){ EXP[i] = x; LOG[x] = i; x <<= 1; if(x & 0x100) x ^= 0x11d; }
    for(let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
  })();
  const gmul = (a,b) => (a === 0 || b === 0) ? 0 : EXP[LOG[a] + LOG[b]];

  function rsPoly(n){
    let p = [1];
    for(let i = 0; i < n; i++){
      const q = [1, EXP[i]], r = new Array(p.length + 1).fill(0);
      for(let j = 0; j < p.length; j++)
        for(let k = 0; k < 2; k++) r[j+k] ^= gmul(p[j], q[k]);
      p = r;
    }
    return p;
  }
  function rsEncode(data, ecLen){
    const gen = rsPoly(ecLen), res = new Array(ecLen).fill(0);
    for(const d of data){
      const f = d ^ res[0];
      res.shift(); res.push(0);
      if(f !== 0) for(let i = 0; i < ecLen; i++) res[i] ^= gmul(gen[i+1], f);
    }
    return res;
  }

  /* 버전별 (총 코드워드, EC 코드워드/블록, 블록수) — 레벨 M */
  const VER = {
    1:[26,10,1], 2:[44,16,1], 3:[70,26,1], 4:[100,18,2], 5:[134,24,2],
    6:[172,16,4], 7:[196,18,4], 8:[242,22,4], 9:[292,22,5], 10:[346,26,5]
  };
  const ALIGN = { 1:[], 2:[6,18], 3:[6,22], 4:[6,26], 5:[6,30],
                  6:[6,34], 7:[6,22,38], 8:[6,24,42], 9:[6,26,46], 10:[6,28,50] };

  function capacity(v){ const [t,ec,b] = VER[v]; return t - ec*b; }

  function make(text){
    const bytes = new TextEncoder().encode(text);
    let ver = 0;
    for(let v = 1; v <= 10; v++){
      const need = 4 + (v < 10 ? 8 : 16) + bytes.length*8;
      if(need <= capacity(v)*8){ ver = v; break; }
    }
    if(!ver) return null;
    const [total, ecLen, blocks] = VER[ver];
    const dataLen = capacity(ver);

    /* 비트 스트림 */
    const bits = [];
    const push = (val, len) => { for(let i = len-1; i >= 0; i--) bits.push((val >> i) & 1); };
    push(4, 4);                                   // 바이트 모드
    push(bytes.length, ver < 10 ? 8 : 16);
    bytes.forEach(b => push(b, 8));
    for(let i = 0; i < 4 && bits.length < dataLen*8; i++) bits.push(0);
    while(bits.length % 8) bits.push(0);
    const dw = [];
    for(let i = 0; i < bits.length; i += 8){
      let v = 0; for(let j = 0; j < 8; j++) v = (v << 1) | bits[i+j];
      dw.push(v);
    }
    const PADS = [0xEC, 0x11]; let pi = 0;
    while(dw.length < dataLen) dw.push(PADS[pi++ % 2]);

    /* 블록 분할 + 오류정정 */
    const per = Math.floor(dataLen / blocks), extra = dataLen % blocks;
    const dBlocks = [], eBlocks = [];
    let p = 0;
    for(let i = 0; i < blocks; i++){
      const n = per + (i >= blocks - extra ? 1 : 0);
      const blk = dw.slice(p, p+n); p += n;
      dBlocks.push(blk); eBlocks.push(rsEncode(blk, ecLen));
    }
    const finalDW = [];
    const maxD = Math.max(...dBlocks.map(b => b.length));
    for(let i = 0; i < maxD; i++) dBlocks.forEach(b => { if(i < b.length) finalDW.push(b[i]); });
    for(let i = 0; i < ecLen; i++) eBlocks.forEach(b => finalDW.push(b[i]));

    /* 모듈 배치 */
    const size = ver*4 + 17;
    const m = Array.from({length:size}, () => new Array(size).fill(null));
    const setF = (r,c,v) => { if(r >= 0 && r < size && c >= 0 && c < size) m[r][c] = v; };

    const finder = (r,c) => {
      for(let i = -1; i <= 7; i++) for(let j = -1; j <= 7; j++){
        const on = (i >= 0 && i <= 6 && (j === 0 || j === 6)) ||
                   (j >= 0 && j <= 6 && (i === 0 || i === 6)) ||
                   (i >= 2 && i <= 4 && j >= 2 && j <= 4);
        setF(r+i, c+j, on ? 1 : 0);
      }
    };
    finder(0,0); finder(0,size-7); finder(size-7,0);
    for(let i = 8; i < size-8; i++){ m[6][i] = i % 2 === 0 ? 1 : 0; m[i][6] = i % 2 === 0 ? 1 : 0; }
    const al = ALIGN[ver];
    for(const r of al) for(const c of al){
      if((r <= 8 && c <= 8) || (r <= 8 && c >= size-9) || (r >= size-9 && c <= 8)) continue;
      for(let i = -2; i <= 2; i++) for(let j = -2; j <= 2; j++)
        m[r+i][c+j] = (Math.abs(i) === 2 || Math.abs(j) === 2 || (i === 0 && j === 0)) ? 1 : 0;
    }
    m[size-8][8] = 1;                              // 다크 모듈
    for(let i = 0; i < 9; i++){                    // 포맷 자리 예약
      if(m[8][i] === null) m[8][i] = 0;
      if(m[i][8] === null) m[i][8] = 0;
    }
    for(let i = 0; i < 8; i++){
      if(m[8][size-1-i] === null) m[8][size-1-i] = 0;
      if(m[size-1-i][8] === null) m[size-1-i][8] = 0;
    }

    /* 데이터 채우기 (마스크 0) */
    const reserved = m.map(row => row.map(v => v !== null));
    let bi = 0, up = true;
    const allBits = [];
    finalDW.forEach(d => { for(let i = 7; i >= 0; i--) allBits.push((d >> i) & 1); });
    for(let col = size-1; col > 0; col -= 2){
      if(col === 6) col--;
      for(let k = 0; k < size; k++){
        const row = up ? size-1-k : k;
        for(let c = 0; c < 2; c++){
          const cc = col - c;
          if(reserved[row][cc]) continue;
          let b = bi < allBits.length ? allBits[bi++] : 0;
          if((row + cc) % 2 === 0) b ^= 1;         // 마스크 0
          m[row][cc] = b;
        }
      }
      up = !up;
    }

    /* 포맷 정보 (레벨 M = 00, 마스크 0) */
    let fmt = 0b00 << 3 | 0;
    let d = fmt << 10, g = 0b10100110111;
    for(let i = 4; i >= 0; i--) if(d & (1 << (i+10))) d ^= g << i;
    let bitsF = ((fmt << 10) | d) ^ 0b101010000010010;
    const put = (r,c,v) => { m[r][c] = v; };
    for(let i = 0; i <= 5; i++) put(8, i, (bitsF >> i) & 1);
    put(8, 7, (bitsF >> 6) & 1); put(8, 8, (bitsF >> 7) & 1); put(7, 8, (bitsF >> 8) & 1);
    for(let i = 9; i <= 14; i++) put(14 - i, 8, (bitsF >> i) & 1);
    for(let i = 0; i <= 7; i++) put(size-1-i, 8, (bitsF >> i) & 1);
    for(let i = 8; i <= 14; i++) put(8, size-15+i, (bitsF >> i) & 1);
    m[size-8][8] = 1;

    return { size, modules: m };
  }

  /* SVG 문자열로 반환 */
  function svg(text, px){
    const q = make(text);
    if(!q) return '';
    const n = q.size, pad = 2, total = n + pad*2, s = (px || 200) / total;
    let path = '';
    for(let r = 0; r < n; r++) for(let c = 0; c < n; c++)
      if(q.modules[r][c]) path += `M${(c+pad)*s},${(r+pad)*s}h${s}v${s}h${-s}z`;
    return `<svg viewBox="0 0 ${px||200} ${px||200}" width="${px||200}" height="${px||200}" xmlns="http://www.w3.org/2000/svg">`
      + `<rect width="100%" height="100%" fill="#fff" rx="${s*2}"/>`
      + `<path d="${path}" fill="#0b0e18"/></svg>`;
  }
  return { make, svg };
})();


/* ══════ js/saju.js ══════ */

/* 명리(사주) 엔진 — 절기표는 태양 황경 계산으로 산출(2000~2050, KST) */
const TERMS={2000:'042136051537042027051346051757070413071401071655080832071142072243060956',2001:'040326052127050217051936052346071002071949072244081422071732070433051547',2002:'040916060317050805060124060533071549080137080432082010072321071023052136',2003:'041504060905051353060711061121072136080724081019090157080509071612060325',2004:'042053051453041941051258051707070322071310071606080744071056072200060914',2005:'040241052041050128051845052253070909071857072152081331071643070348051502',2006:'040828060228050715060031060439071454080042080338081918072230070935052049',2007:'041415060815051301060617061025072040080628080924090104080417071523060237',2008:'042003051402041848051203051611070225071214071510080651071004072110060824',2009:'040150051949050035051750052157070812071800072057081238071552070257051412',2010:'040739060137050623052337060344071359072348080245081826072141070846052000',2011:'041328060726051211060525060932071946080535080833090015080330071435060150',2012:'041918051316041800051114051521070135071124071422080605070920072024060739',2013:'040108051906042350051704052110070724071714072012081155071511070215051330',2014:'040659060057050541052254060300071314072304080202081746072102070806051921',2015:'041251060649051132060445060850071905080454080753082337080253071357060113',2016:'041843051240041723051036051441070055071045071344080528070845071949060705',2017:'040034051832042314051626052031070645071635071934081119071436070141051256',2018:'040626060023050505052217060221071235072224080124081709072027070732051848',2019:'041217060613051055060406060810071824080413080713082259080217071323060039',2020:'041807051203041644050955051359070012071002071302080447070806071913060629',2021:'032356051752042233051543051946070559071549071849081035071354070102051219',2022:'040545052340050420052130060133071146072136080036081623071942070651051807',2023:'041133060528051008060317060719071732080322080623082210080129071239052355',2024:'041720051115041554050903051305062318070908071209080356070716071827060543',2025:'032307051702042141051449051851070503071453071755080942071303070014051130',2026:'040455052249050327052035060036071049072039072341081529071850070601051718',2027:'041042060436050914060222060622071635080225080527082116080037071148052305',2028:'041630051024041501050808051209062221070812071114080304070625071736060453',2029:'032219051612042049051356051756070408071359071702080852071214062325051042',2030:'040408052201050238051945052345070957071947072251081441071804070514051631',2031:'040958060351050828060134060534071545080136080440082031072354071104052222',2032:'041549050942041418050724051123062135070726071030080221070545071655060412',2033:'032140051533042009051314051713070325071316071621080812071136062246051004',2034:'040332052124050200051905052304070915071907072211081403071728070437051556',2035:'040924060316050751060056060454071506080057080402081954072319071029052147',2036:'041516050907041342050646051044062056070647070952080145070510071621060339',2037:'032107051458041933051236051634070245071237071542080735071100062212050930',2038:'040257052048050122051825052223070834071825072131081324071650070403051521',2039:'040847060238050711060014060411071422080013080319081913072239070952052111',2040:'041436050827041300050602050958062009070600070906080100070427071542060300',2041:'032024051415041847051149051545070155071147071453080647071015062130050849',2042:'040212052002050034051735052131070741071733072039081234071602070318051437',2043:'040800060149050621052321060317071327072318080225081820072148070905052024',2044:'041347050736041207050507050902061912070504070811080007070335071452060211',2045:'031934051323041754051053051448070058071050071357080553070922062040050759',2046:'040122051910042341051640052034070644071636071944081141071510070227051346',2047:'040710060058050528052227060221071231072223080131081729072058070815051935',2048:'041259050647041117050415050809061818070411070719072317070248071404060124',2049:'031849051236041706051004051357070007070959071308080507070837061953050713',2050:'040039051827042256051553051947070556071549071858081057071428070144051304'};
const GAN=['갑','을','병','정','무','기','경','신','임','계'];
const GANH=['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const JI=['자','축','인','묘','진','사','오','미','신','유','술','해'];
const JIH=['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const G_OH=['목','목','화','화','토','토','금','금','수','수'];
const J_OH=['수','토','목','목','토','화','화','토','금','금','토','수'];
const SAENG={목:'화',화:'토',토:'금',금:'수',수:'목'};
const GEUK={목:'토',화:'금',토:'수',금:'목',수:'화'};
const JIJANG=[['계'],['기','계','신'],['갑','병','무'],['을'],['무','을','계'],['병','경','무'],
              ['정','기'],['기','정','을'],['경','임','무'],['신'],['무','신','정'],['임','갑']];
function jdn(y,m,d){const a=Math.floor((14-m)/12),y2=y+4800-a,m2=m+12*a-3;
  return d+Math.floor((153*m2+2)/5)+365*y2+Math.floor(y2/4)-Math.floor(y2/100)+Math.floor(y2/400)-32045;}
function termsOf(y){
  const s=TERMS[y]; if(!s) return null;
  const mon=[2,3,4,5,6,7,8,9,10,11,12,1], out=[];
  for(let i=0;i<12;i++){
    const d=+s.substr(i*6,2),h=+s.substr(i*6+2,2),mi=+s.substr(i*6+4,2);
    out.push(new Date(y+(mon[i]===1?1:0),mon[i]-1,d,h,mi));
  } return out;
}
function yearMonthPillar(dt){
  const y=dt.getFullYear(); let t=termsOf(y), sy=y;
  if(!t) return {yg:0,yb:0,mg:0,mb:0,solarYear:y};
  if(dt<t[0]){ sy=y-1; t=termsOf(sy)||t; }
  let mi=0; for(let i=0;i<12;i++) if(dt>=t[i]) mi=i;
  const yg=((sy-4)%10+10)%10, yb=((sy-4)%12+12)%12;
  const head=[2,4,6,8,0][yg%5];
  return {yg,yb,mg:(head+mi)%10,mb:(2+mi)%12,solarYear:sy};
}
function dayPillar(dt){const j=jdn(dt.getFullYear(),dt.getMonth()+1,dt.getDate());return {dg:(j+9)%10,db:(j+1)%12};}
function hourPillar(dg,dt){
  const t=new Date(dt.getTime()-32*60000);
  const idx=Math.floor(((t.getHours()*60+t.getMinutes())+60)/120)%12;
  return {hg:([0,2,4,6,8][dg%5]+idx)%10,hb:idx};
}
function pillars(dISO,tStr){
  const [Y,M,D]=dISO.split('-').map(Number), has=!!tStr;
  const [hh,mm]=has?tStr.split(':').map(Number):[12,0];
  const dt=new Date(Y,M-1,D,hh,mm);
  const o={...yearMonthPillar(dt),...(has&&(hh*60+mm)>=23*60+28?dayPillar(new Date(Y,M-1,D+1)):dayPillar(dt))};
  if(has) Object.assign(o,hourPillar(o.dg,dt));
  o.hasTime=has; return o;
}
function sipsin(my,other){
  const a=G_OH[my],b=G_OH[other],same=(my%2)===(other%2);
  if(a===b) return same?'비견':'겁재';
  if(SAENG[a]===b) return same?'식신':'상관';
  if(GEUK[a]===b) return same?'편재':'정재';
  if(GEUK[b]===a) return same?'편관':'정관';
  return same?'편인':'정인';
}
const SS_GROUP={비견:'비겁',겁재:'비겁',식신:'식상',상관:'식상',편재:'재성',정재:'재성',편관:'관성',정관:'관성',편인:'인성',정인:'인성'};
const YUKHAP={0:1,1:0,2:11,11:2,3:10,10:3,4:9,9:4,5:8,8:5,6:7,7:6};
const SAMHAP=[[8,0,4,'수'],[11,3,7,'목'],[2,6,10,'화'],[5,9,1,'금']];
const HAE={0:7,7:0,1:6,6:1,2:5,5:2,3:4,4:3,8:11,11:8,9:10,10:9};
function jiRel(a,b){
  if(a===b) return ['비화',3,'같은 기운이 겹쳐 고집이 세지는 날'];
  if((a+6)%12===b) return ['충',-14,'충(沖) — 계획이 흔들리고 부딪히기 쉬운 날'];
  if(YUKHAP[a]===b) return ['육합',10,'육합(合) — 맞물려 술술 풀리는 날'];
  for(const s of SAMHAP) if(s.slice(0,3).includes(a)&&s.slice(0,3).includes(b)) return ['삼합',12,`삼합(${s[3]}) — 사람과 일이 모이는 날`];
  const H=[[2,5],[5,8],[2,8],[1,10],[10,7],[1,7],[0,3],[3,0]];
  for(const h of H) if((h[0]===a&&h[1]===b)||(h[1]===a&&h[0]===b)) return ['형',-9,'형(刑) — 마찰과 잔실수가 생기는 날'];
  if(HAE[a]===b) return ['해',-5,'해(害) — 사소하게 어긋나는 날'];
  return ['평',0,''];
}
const MUNCHANG={0:5,1:6,2:8,3:9,4:8,5:9,6:11,7:0,8:2,9:3};
const CHEONEUL={0:[1,7],4:[1,7],6:[1,7],1:[0,8],5:[0,8],2:[11,9],3:[11,9],7:[6,2],8:[3,5],9:[3,5]};
function analyze(p){
  const cnt={목:0,화:0,토:0,금:0,수:0}, add=(o,w)=>cnt[o]+=w;
  add(G_OH[p.yg],1); add(G_OH[p.mg],1.2); add(G_OH[p.dg],1.5); if(p.hasTime) add(G_OH[p.hg],1);
  [[p.yb,1],[p.mb,1.8],[p.db,1.3]].concat(p.hasTime?[[p.hb,1]]:[]).forEach(([b,w])=>{
    JIJANG[b].forEach((g,i)=>add(G_OH[GAN.indexOf(g)],w*(i===0?0.7:0.25)));
  });
  const me=G_OH[p.dg];
  const inseong=Object.keys(SAENG).find(k=>SAENG[k]===me);
  const total=Object.values(cnt).reduce((a,b)=>a+b,0);
  const ratio=(cnt[me]+cnt[inseong])/total, strong=ratio>=0.42;
  const siksang=SAENG[me], jaeseong=GEUK[me], gwan=Object.keys(GEUK).find(k=>GEUK[k]===me);
  return {cnt,strong,ratio,me,inseong,siksang,jaeseong,gwan,
    yong: strong?[siksang,jaeseong,gwan]:[inseong,me],
    gi:   strong?[inseong,me]:[gwan,jaeseong]};
}
const OH_COLOR={목:'초록·청록',화:'빨강·주황',토:'노랑·베이지',금:'흰색·은색',수:'검정·남색'};
const OH_DIR={목:'동쪽',화:'남쪽',토:'중앙',금:'서쪽',수:'북쪽'};
const OH_NUM={목:[3,8],화:[2,7],토:[5,10],금:[4,9],수:[1,6]};
const OH_ITEM={목:'책·나무 소재',화:'따뜻한 음료',토:'노트·도자기 컵',금:'금속 펜·시계',수:'텀블러·검정 가방'};
const JI_TIME=['23~01시','01~03시','03~05시','05~07시','07~09시','09~11시','11~13시','13~15시','15~17시','17~19시','19~21시','21~23시'];
const SS_TEXT={
  정인:'정인(正印)이 드는 날입니다. 배우고 정리하는 데 힘이 실립니다. 새로 벌이기보다 읽고 외우고 노트를 다듬을 때 성과가 남습니다.',
  편인:'편인(偏印)의 날입니다. 생각이 깊어지는 대신 결정이 늦어집니다. 혼자 고민을 오래 끌지 말고 한 명에게 물어보면 빨리 정리됩니다.',
  비견:'비견(比肩)의 날입니다. 고집과 추진력이 같이 올라갑니다. 내 방식대로 밀어붙여도 되지만, 친구와 의견이 갈리면 한 발 물러서세요.',
  겁재:'겁재(劫財)가 드는 날입니다. 경쟁 상황과 지출이 겹치기 쉽습니다. 남의 부탁에 돈이나 시간을 크게 쓰지 않는 편이 좋습니다.',
  식신:'식신(食神)의 날입니다. 말과 표현이 술술 풀립니다. 발표·낭독·영상 촬영처럼 내보내는 일에 가장 좋은 날입니다.',
  상관:'상관(傷官)의 날입니다. 아이디어와 말이 빨라지는 대신 한마디가 세게 나갈 수 있습니다. 윗사람 앞에서는 톤을 한 단계 낮추세요.',
  정재:'정재(正財)의 날입니다. 꾸준히 쌓아온 것이 결과로 나옵니다. 계획표대로 착실히 처리하면 그대로 점수가 됩니다.',
  편재:'편재(偏財)의 날입니다. 기회와 사람이 넓게 들어옵니다. 벌여둔 일이 많다면 오늘은 하나만 골라 끝내는 게 이득입니다.',
  정관:'정관(正官)의 날입니다. 규칙과 책임이 나를 세워 줍니다. 맡은 자리에서 정석대로 움직이면 평가가 올라갑니다.',
  편관:'편관(偏官)의 날입니다. 압박과 마감이 몰릴 수 있습니다. 미리 30분 당겨서 움직이면 대부분 막을 수 있습니다.'
};
const SS_ACT={ 정인:'복습·암기', 편인:'자료 정리', 비견:'혼자 하는 과제', 겁재:'지출 점검', 식신:'발표·낭독',
  상관:'창작·기획', 정재:'계획표 실행', 편재:'사람 만나기', 정관:'맡은 일 마무리', 편관:'미리 준비' };
function fortune(birth,btime,dateObj){
  const me=pillars(birth,btime||null), A=analyze(me);
  const tp={...yearMonthPillar(dateObj),...dayPillar(dateObj)};
  const ss=sipsin(me.dg,tp.dg), grp=SS_GROUP[ss], rel=jiRel(me.db,tp.db);
  let sc=50;
  sc+={정인:10,편인:3,정관:9,편관:-5,정재:10,편재:6,식신:11,상관:-2,비견:4,겁재:-5}[ss];
  const helps=['인성','비겁'], drains=['식상','재성','관성'];
  sc += A.strong ? (drains.includes(grp)?6:-6) : (helps.includes(grp)?6:-6);
  sc += rel[1];
  const oG=G_OH[tp.dg], oJ=J_OH[tp.db];
  if(A.yong.includes(oG)) sc+=9; else if(A.gi.includes(oG)) sc-=6;
  if(A.yong.includes(oJ)) sc+=7; else if(A.gi.includes(oJ)) sc-=5;
  const mun=MUNCHANG[me.dg]===tp.db, che=(CHEONEUL[me.dg]||[]).includes(tp.db);
  if(mun) sc+=6; if(che) sc+=6;
  sc=Math.max(32,Math.min(96,Math.round(sc)));
  const cl=v=>Math.max(28,Math.min(98,Math.round(v)));
  const study=cl(sc+(grp==='인성'?10:0)+(grp==='식상'?7:0)+(mun?13:0)+(rel[0]==='충'?-7:0));
  const rela =cl(sc+(che?11:0)+(['육합','삼합'].includes(rel[0])?9:0)+(grp==='관성'?5:0)+(rel[0]==='형'?-8:0));
  const money=cl(sc+(grp==='재성'?12:0)+(ss==='겁재'?-11:0)+(rel[0]==='충'?-6:0));
  const body =cl(sc+(A.strong?(drains.includes(grp)?5:-4):(helps.includes(grp)?7:-5))+(['충','형'].includes(rel[0])?-7:0));
  const good=[],bad=[];
  for(let b=0;b<12;b++){ const r=jiRel(me.db,b);
    const night=(b<=2||b===11);                       // 21시~05시는 제외
    if(['육합','삼합'].includes(r[0])&&!night) good.push(JI_TIME[b]);
    if(r[0]==='충') bad.push(JI_TIME[b]); }
  const y=A.yong[0];
  return {me,A,tp,ss,grp,rel,mun,che,score:sc,study,rela,money,body,
    color:OH_COLOR[y],dir:OH_DIR[y],num:OH_NUM[y],item:OH_ITEM[y],yong:y,
    goodTime:good.sort((a,b)=>{const dh=x=>{const s=+x.slice(0,2);return (s>=8&&s<=20)?0:1;};return dh(a)-dh(b);}).slice(0,2).join(', '),badTime:bad[0]||'—'};
}


/* ══════ js/core.js ══════ */

/* ═══════════ 코어 ═══════════ */
const BUILD = 'v1.0.0 · 2026-08-14';
const KEY = 'briefing.v1';

/* ── 저장소 ── */
let _mem = null;
const Store = {
  async load(){
    try{ if(window.storage && window.storage.get){ const r = await window.storage.get(KEY); return r && r.value ? JSON.parse(r.value) : null; } }catch(e){}
    try{ const s = localStorage.getItem(KEY); if(s) return JSON.parse(s); }catch(e){}
    return _mem;
  },
  async save(o){
    const s = JSON.stringify(o); _mem = o;
    try{ if(window.storage && window.storage.set){ await window.storage.set(KEY, s); return; } }catch(e){}
    try{ localStorage.setItem(KEY, s); }catch(e){}
  }
};

/* ── 기본 상태 (개인 정보 없음 — 온보딩에서 채움) ── */
const DEFAULTS = {
  onboarded:false, lang:'',
  name:'', birth:'', birthTime:'',
  place:'서울', lat:37.5665, lon:126.9780,
  wake:'07:00', out:'08:00', bed:'23:00',
  cardOrder:[], cardOff:[], cardCol:{}, layoutMode:'auto',
  events:[],            // {id,title,date,time,memo,type:'event'|'exam'|'dday',repeat,color}
  todos:[], todosNext:[],
  sleep:null, sleepHist:{},
  teamId:'', sdbKey:'', games:[], gamesAt:0, gamesErr:null,
  news:null, newsAt:0, newsTopics:['NATION','WORLD','SCIENCE'],
  habits:[], habitLog:{}, waterGoal:8, waterLog:{}, timetable:{},
  sync:{ on:false, uid:'', code:'', at:0 },
  wx:null, phoneAll:true, day:''
};
let C = JSON.parse(JSON.stringify(DEFAULTS));
let save = function(){ Store.save(C); };

/* ── 유틸 ── */
const $ = id => document.getElementById(id);
const el = (tag, cls, html) => { const e = document.createElement(tag); if(cls) e.className = cls; if(html != null) e.innerHTML = html; return e; };
const pad = n => String(n).padStart(2,'0');
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const mins = s => { const p = (s||'00:00').split(':'); return (+p[0])*60 + (+p[1]); };
const DAYS_KR = ['일','월','화','수','목','금','토'];
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,7);
let now = new Date();
const today = () => ymd(now);
function dleft(dateStr){
  const t = new Date(today()+'T00:00:00');
  return Math.round((new Date(dateStr+'T00:00:00') - t) / 86400000);
}
const dtxt = n => n === 0 ? 'D-DAY' : n > 0 ? 'D-'+n : 'D+'+Math.abs(n);

/* ── 테마 ── */
const THEME = {
  night:{'--bg':'#080a14','--tx':'#e8ecf6','--tx2':'rgba(232,236,246,.62)','--tx3':'rgba(232,236,246,.4)',
    '--card':'rgba(255,255,255,.055)','--cardSoft':'rgba(255,255,255,.04)',
    '--cardAcc':'linear-gradient(155deg,rgba(110,231,212,.13),rgba(255,255,255,.04))',
    '--bd':'rgba(255,255,255,.1)','--bd2':'rgba(255,255,255,.16)','--chip':'rgba(255,255,255,.06)',
    '--acc':'#6ee7d4','--accSoft':'rgba(110,231,212,.14)','--accBd':'rgba(110,231,212,.32)',
    '--track':'rgba(255,255,255,.08)','--barIdle':'rgba(255,255,255,.34)',
    '--barFill':'linear-gradient(90deg,#6ee7d4,#8b7cf6)',
    '--violet':'linear-gradient(155deg,rgba(139,124,246,.17),rgba(255,255,255,.035))',
    '--violetBd':'rgba(139,124,246,.26)','--violetTx':'#c3b9ff','--violetRaw':'#8b7cf6',
    '--amber':'#f2b544','--rose':'#f2748c',
    '--blob1':'radial-gradient(circle,rgba(110,231,212,.28),transparent 62%)',
    '--blob2':'radial-gradient(circle,rgba(139,124,246,.32),transparent 62%)',
    '--scrim':'rgba(6,8,16,.86)','--modal':'linear-gradient(160deg,#141826,#0b0e18)','--rootBg':'#080a14'},
  day:{'--bg':'#f6f4ee','--tx':'#161b24','--tx2':'rgba(22,27,36,.68)','--tx3':'rgba(22,27,36,.5)',
    '--card':'rgba(255,255,255,.72)','--cardSoft':'rgba(255,255,255,.58)',
    '--cardAcc':'linear-gradient(155deg,rgba(20,160,140,.14),rgba(255,255,255,.7))',
    '--bd':'rgba(22,27,36,.1)','--bd2':'rgba(22,27,36,.16)','--chip':'rgba(22,27,36,.05)',
    '--acc':'#0f8f7c','--accSoft':'rgba(15,143,124,.12)','--accBd':'rgba(15,143,124,.3)',
    '--track':'rgba(22,27,36,.09)','--barIdle':'rgba(22,27,36,.3)',
    '--barFill':'linear-gradient(90deg,#0f8f7c,#6f66d8)',
    '--violet':'linear-gradient(155deg,rgba(111,102,216,.14),rgba(255,255,255,.65))',
    '--violetBd':'rgba(111,102,216,.26)','--violetTx':'#5b52c4','--violetRaw':'#6f66d8',
    '--amber':'#c98a10','--rose':'#c9455f',
    '--blob1':'radial-gradient(circle,rgba(255,206,140,.55),transparent 62%)',
    '--blob2':'radial-gradient(circle,rgba(150,205,235,.55),transparent 62%)',
    '--scrim':'rgba(246,244,238,.86)','--modal':'linear-gradient(160deg,#ffffff,#f1eee6)','--rootBg':'#f6f4ee'}
};
let modeOverride = null, overrideBase = null;
const isNight = () => modeOverride ? modeOverride === 'night' : (now.getHours() >= 18 || now.getHours() < 5);
function applyTheme(){
  const t = THEME[isNight() ? 'night' : 'day'], r = document.documentElement.style;
  for(const k in t) r.setProperty(k, t[k]);
  const m = document.querySelector('meta[name=theme-color]');
  if(m) m.setAttribute('content', t['--rootBg']);
}

/* ═══════════ 카드 레지스트리 ═══════════ */
const Cards = {
  list: [],
  register(def){ this.list.push(def); },
  get(id){ return this.list.find(c => c.id === id); },
  /* 사용자가 정한 순서 + 신규 카드는 뒤에 자동 추가 */
  ordered(){
    const order = C.cardOrder && C.cardOrder.length ? C.cardOrder.slice() : this.list.map(c => c.id);
    this.list.forEach(c => { if(!order.includes(c.id)) order.push(c.id); });
    return order.map(id => this.get(id)).filter(Boolean);
  },
  enabled(){
    return this.ordered().filter(c => c.fixed || !(C.cardOff||[]).includes(c.id));
  },
  isOn(id){ const c = this.get(id); return !!c && (c.fixed || !(C.cardOff||[]).includes(id)); },
  toggle(id){
    const c = this.get(id); if(!c || c.fixed) return;
    C.cardOff = C.cardOff || [];
    const i = C.cardOff.indexOf(id);
    if(i >= 0) C.cardOff.splice(i,1); else C.cardOff.push(id);
    save(); build(); paint();
  },
  setCol(id, col){
    C.cardCol = C.cardCol || {};
    if(col == null) delete C.cardCol[id]; else C.cardCol[id] = col;
    save(); build(); paint();
  },
  move(id, dir){
    const order = this.ordered().map(c => c.id);
    const i = order.indexOf(id), j = i + dir;
    if(i < 0 || j < 0 || j >= order.length) return;
    order.splice(j, 0, order.splice(i,1)[0]);
    C.cardOrder = order; save(); build(); paint();
  }
};

/* ── 레이아웃: 순서를 지키면서 3열에 무게가 고르게 차도록 배치 ── */
const WEIGHT = { S:1, M:2, L:3 };
function build(){
  const grid = $('grid');
  grid.innerHTML = '';
  const cards = Cards.enabled();
  const phone = document.body.classList.contains('phone');
  const nCol = phone ? 1 : 3;
  grid.style.gridTemplateColumns = phone ? '1fr' : 'repeat(3,1fr)';

  const cols = Array.from({length:nCol}, () => ({ w:0, node: el('div','col') }));
  const manual = C.layoutMode === 'manual';
  cards.forEach((c, idx) => {
    let t = 0;
    if(nCol > 1){
      if(manual && C.cardCol && C.cardCol[c.id] != null){
        t = Math.max(0, Math.min(nCol-1, +C.cardCol[c.id]));
      } else {
        t = idx < nCol ? idx : cols.reduce((m, x, i) => cols[m].w <= x.w ? m : i, 0);
      }
    }
    const art = el('article','card' + (c.tone ? ' ' + c.tone : ''));
    art.dataset.id = c.id;
    art.style.animationDelay = (idx * 0.04) + 's';
    if(c.grow) art.classList.add('grow');
    cols[t].node.appendChild(art);
    cols[t].w += WEIGHT[c.size] || 2;
    c._el = art;
    if(c.init) c.init(art);
  });
  cols.forEach(c => grid.appendChild(c.node));
}

function paint(){
  applyTheme();
  Cards.enabled().forEach(c => { if(c._el && c.render) { try{ c.render(c._el); }catch(e){ console.warn(c.id, e); } } });
  paintHeader();
}

function paintHeader(){
  const night = isNight(), h = now.getHours();
  $('brandLabel').textContent = night ? T('night') : T('morning');
  const nm = C.name ? ', ' + C.name : '';
  $('greeting').textContent = (night
      ? (h >= 22 || h < 5 ? T('greetDawn') : T('greetEve'))
      : (h < 9 ? T('greetAm') : h < 12 ? T('greetNoon') : T('greetPm'))) + nm;
  $('modeBtn').textContent = night ? T('dayScreen') : T('nightScreen');
  $('setBtn').textContent = T('settings');

  const nowM = h*60 + now.getMinutes();
  let toBed = mins(C.bed) - nowM; if(toBed < 0) toBed += 1440;
  const toOut = mins(C.out) - nowM;
  const fmt = m => (Math.floor(m/60) ? Math.floor(m/60)+T('hour')+' ' : '') + (m%60) + T('minute');
  $('countdown').textContent = night
    ? (h < 5 ? T('bedPast',{t:C.bed}) : toBed <= 240 ? T('bedIn',{t:C.bed,d:fmt(toBed)}) : T('bedGoal',{t:C.bed}))
    : (toOut > 0 ? T('outIn',{t:C.out,d:fmt(toOut)}) : T('outPast',{t:C.out}));
}

/* ── 화면 맞춤 ── */
function fit(){
  const phone = innerWidth < 760;
  const was = document.body.classList.contains('phone');
  document.body.classList.toggle('phone', phone);
  /* 스크롤 잠금/해제를 html 클래스로 확실히 제어 */
  document.documentElement.classList.toggle('scrollable', phone);
  document.documentElement.classList.toggle('fixed', !phone);
  $('allBtn').hidden = !phone;
  if(phone){
    document.body.classList.toggle('showall', !!C.phoneAll);
    $('allBtn').textContent = C.phoneAll ? '간단히 보기' : '전체 보기';
    $('stage').style.transform = 'none';
  } else {
    document.body.classList.remove('showall');
    $('stage').style.transform = `scale(${Math.min(innerWidth/1440, innerHeight/900)})`;
  }
  if(was !== phone) build();
}

/* ── 일정 헬퍼 (캘린더·수행평가·D-day 공용) ── */
const EV = {
  all(){ return (C.events||[]); },
  /* 반복 일정을 실제 날짜로 펼침 */
  onDate(dateStr){
    const d = new Date(dateStr+'T00:00:00');
    return this.all().filter(e => {
      if(e.date === dateStr) return true;
      if(!e.repeat || !e.repeat.type) return false;
      if(dateStr < e.date) return false;
      if(e.repeat.until && dateStr > e.repeat.until) return false;
      const s = new Date(e.date+'T00:00:00');
      if(e.repeat.type === 'weekly') return (e.repeat.days||[]).includes(d.getDay());
      if(e.repeat.type === 'monthly') return d.getDate() === s.getDate();
      if(e.repeat.type === 'yearly') return d.getMonth() === s.getMonth() && d.getDate() === s.getDate();
      return false;
    }).sort((a,b) => (a.time||'99:99').localeCompare(b.time||'99:99'));
  },
  upcoming(type, limit){
    const t = today();
    return this.all()
      .filter(e => (!type || e.type === type) && !e.repeat && e.date >= t)
      .sort((a,b) => a.date.localeCompare(b.date))
      .slice(0, limit || 99);
  },
  add(e){ C.events = C.events || []; C.events.push(Object.assign({id:uid(), type:'event'}, e)); save(); },
  update(id, patch){ const e = this.all().find(x => x.id === id); if(e) Object.assign(e, patch); save(); },
  remove(id){ C.events = this.all().filter(x => x.id !== id); save(); }
};
const EV_TYPES = [
  { id:'event', name:'일정',    color:'var(--acc)' },
  { id:'exam',  name:'수행평가', color:'var(--violetRaw)' },
  { id:'dday',  name:'D-day',   color:'var(--amber)' }
];
const evColor = t => (EV_TYPES.find(x => x.id === t) || EV_TYPES[0]).color;

/* ── 자정 넘어가면 정리 ── */
function rollover(){
  const t = today();
  if(C.day !== t){
    C.day = t;
    C.todos = (C.todosNext||[]).concat((C.todos||[]).filter(x => !x.done));
    C.todosNext = [];
    if(!(C.sleepHist||{})[t]) C.sleep = null;
    save();
  }
}


/* ══════ js/sync.js ══════ */

/* ═══════════ 기기 연결 ═══════════
   같은 계정 공간을 두 기기가 공유합니다.
   태블릿에서 연결 코드를 만들고, 폰에서 그 코드를 넣으면 끝.
   동기화 대상: 달력 일정 · 할 일 · 루틴 · 시간표 · 카드 구성 */
const SYNC_KEYS = ['events','todos','todosNext','habits','habitLog','waterLog','timetable','cardOrder','cardOff'];
const SYNC_CFG = {
  project: 'morning-public',
  apiKey:  'AIzaSyCJP05vT5vuWeNaoy-AQrYx8kLzkx0JjOE'
};
let syncTimer = null, syncBusy = false;
let idToken = '', tokenAt = 0, refreshToken = '';

function syncReady(){ return !!(SYNC_CFG.project && SYNC_CFG.apiKey && C.sync && C.sync.on && C.sync.uid); }
function fsUrl(path){
  return `https://firestore.googleapis.com/v1/projects/${SYNC_CFG.project}/databases/(default)/documents/${path}?key=${SYNC_CFG.apiKey}`;
}
/* 인증 토큰을 붙여야 규칙의 request.auth 가 채워진다 */
async function authHeaders(){
  await ensureToken();
  return idToken ? { 'Content-Type':'application/json', 'Authorization':'Bearer '+idToken }
                 : { 'Content-Type':'application/json' };
}
async function ensureToken(){
  if(idToken && Date.now() - tokenAt < 50*60*1000) return idToken;
  if(C.sync && C.sync.refresh){
    try{
      const r = await fetch(`https://securetoken.googleapis.com/v1/token?key=${SYNC_CFG.apiKey}`,
        { method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'},
          body:`grant_type=refresh_token&refresh_token=${encodeURIComponent(C.sync.refresh)}` });
      if(r.ok){ const j = await r.json();
        idToken = j.id_token; tokenAt = Date.now();
        C.sync.uid = j.user_id || C.sync.uid; return idToken; }
    }catch(e){}
  }
  return idToken;
}
function makeCode(){
  const s = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let out = ''; for(let i=0;i<6;i++) out += s[Math.floor(Math.random()*s.length)];
  return out;
}
/* 익명 로그인 → uid 확보 */
async function anonLogin(){
  const r = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${SYNC_CFG.apiKey}`,
    { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ returnSecureToken:true }) });
  if(!r.ok) throw new Error('로그인에 실패했습니다');
  const j = await r.json();
  idToken = j.idToken; tokenAt = Date.now();
  C.sync = Object.assign({}, C.sync, { uid: j.localId, refresh: j.refreshToken });
  return j.localId;
}
/* 태블릿: 연결 코드 발급 */
async function syncCreate(){
  if(!SYNC_CFG.project) throw new Error('배포 설정이 아직 준비되지 않았습니다');
  const uid = (C.sync && C.sync.uid && C.sync.refresh) ? (await ensureToken(), C.sync.uid) : await anonLogin();
  const code = makeCode();
  const H = await authHeaders();
  // 공간을 먼저 만들어 members 에 본인을 넣는다
  const data = {}; SYNC_KEYS.forEach(k => data[k] = C[k]);
  let r = await fetch(fsUrl('spaces/'+uid), { method:'PATCH', headers:H,
    body: JSON.stringify({ fields:{
      owner:{stringValue:uid},
      members:{arrayValue:{values:[{stringValue:uid}]}},
      data:{stringValue:JSON.stringify(data)}, at:{integerValue:String(Date.now())} } }) });
  if(!r.ok) throw new Error('공간을 만들지 못했습니다');
  r = await fetch(fsUrl('links/'+code), { method:'PATCH', headers:H,
    body: JSON.stringify({ fields:{ uid:{stringValue:uid}, at:{integerValue:String(Date.now())} } }) });
  if(!r.ok) throw new Error('코드를 만들지 못했습니다');
  C.sync = Object.assign({}, C.sync, { on:true, uid, code, at:Date.now() });
  save();
  return code;
}
/* 폰: 코드로 합류 */
async function syncJoin(code){
  if(!SYNC_CFG.project) throw new Error('배포 설정이 아직 준비되지 않았습니다');
  const cd = code.toUpperCase().trim();
  const me = (C.sync && C.sync.uid && C.sync.refresh) ? (await ensureToken(), C.sync.uid) : await anonLogin();
  const H = await authHeaders();
  const r = await fetch(fsUrl('links/'+cd), { headers:H });
  if(!r.ok) throw new Error('코드를 찾을 수 없습니다');
  const j = await r.json();
  const owner = j.fields && j.fields.uid && j.fields.uid.stringValue;
  if(!owner) throw new Error('코드가 올바르지 않습니다');
  // 공간의 members 에 나를 추가
  const sr = await fetch(fsUrl('spaces/'+owner), { headers:H });
  if(!sr.ok) throw new Error('연결에 실패했습니다');
  const sj = await sr.json();
  const cur = ((sj.fields && sj.fields.members && sj.fields.members.arrayValue.values) || [])
    .map(v => v.stringValue);
  if(!cur.includes(me)) cur.push(me);
  await fetch(fsUrl('spaces/'+owner)+'&updateMask.fieldPaths=members', { method:'PATCH', headers:H,
    body: JSON.stringify({ fields:{ members:{arrayValue:{values:cur.map(u => ({stringValue:u}))}} } }) });
  C.sync = Object.assign({}, C.sync, { on:true, uid:owner, me, code:cd, at:0 });
  save(); await syncPull(true);
  return true;
}
function syncOff(){
  const keep = C.sync || {};
  C.sync = { on:false, uid:'', code:'', at:0, refresh:keep.refresh || '' };
  save();
}

async function syncPush(force){
  if(!syncReady() || syncBusy) return;
  syncBusy = true;
  const at = Date.now();
  const data = {}; SYNC_KEYS.forEach(k => data[k] = C[k]);
  try{
    const H = await authHeaders();
    await fetch(fsUrl('spaces/'+C.sync.uid)+'&updateMask.fieldPaths=data&updateMask.fieldPaths=at',
      { method:'PATCH', headers:H,
        body: JSON.stringify({ fields:{ data:{stringValue:JSON.stringify(data)}, at:{integerValue:String(at)} } }) });
    C.sync.at = at; save();
  }catch(e){}
  syncBusy = false;
}
async function syncPull(force){
  if(!syncReady() || syncBusy) return;
  syncBusy = true;
  try{
    const H = await authHeaders();
    const r = await fetch(fsUrl('spaces/'+C.sync.uid), { headers:H });
    if(r.ok){
      const j = await r.json();
      const at = +((j.fields && j.fields.at && j.fields.at.integerValue) || 0);
      if(at > (C.sync.at||0) || force){
        const d = JSON.parse(j.fields.data.stringValue);
        SYNC_KEYS.forEach(k => { if(d[k] !== undefined) C[k] = d[k]; });
        C.sync.at = at; save(); build(); paint();
      }
    }
  }catch(e){}
  syncBusy = false;
}
function syncSoon(){ if(!syncReady()) return; clearTimeout(syncTimer); syncTimer = setTimeout(() => syncPush(), 1200); }

/* 저장할 때마다 동기화 예약 */
const _save = save;
save = function(){ _save(); syncSoon(); };


/* ══════ js/cards/clock.js ══════ */

/* 시계 · 날짜 · D-day */
Cards.register({
  id:'clock', name:'시계 · 날짜', size:'S', fixed:true,
  desc:'현재 시각, 날짜, 다가오는 D-day',
  init(el){
    el.innerHTML = `
      <div class="ck-top"><span class="ck-hm big" id="ckHM">00:00</span><span class="ck-ap" id="ckAP">AM</span></div>
      <div class="ck-bot"><span class="ck-date" id="ckDate"></span><div class="ck-chips" id="ckChips"></div></div>`;
  },
  render(){
    const h = now.getHours();
    $('ckHM').textContent = pad(h)+':'+pad(now.getMinutes());
    $('ckAP').textContent = h < 12 ? 'AM' : 'PM';
    $('ckDate').textContent = `${now.getMonth()+1}월 ${now.getDate()}일 ${DAYS_KR[now.getDay()]}요일`;
    const dd = EV.all().filter(e => e.type === 'dday' && !e.repeat)
      .map(e => ({ n:e.title, l:dleft(e.date) }))
      .filter(x => x.l >= 0).sort((a,b) => a.l - b.l).slice(0,3);
    $('ckChips').innerHTML = dd.map((d,i) =>
      `<span class="ck-chip${i===0?' hot':''}">${dtxt(d.l)} ${esc(d.n)}</span>`).join('')
      || `<span class="tiny">달력에서 D-day를 추가해 보세요</span>`;
  }
});


/* ══════ js/cards/weather.js ══════ */

/* 날씨 — Open-Meteo (키 불필요, 상업적 이용 허용 / 출처 표기) */
const WICON = c => c===0?'☀':c<=2?'⛅':c===3?'☁':c<=48?'≡':c<=67?'☂':c<=77?'❄':c<=82?'☂':'⚡';
const WDESC = c => c===0?'맑음':c<=2?'구름 조금':c===3?'흐림':c<=48?'안개':c<=55?'이슬비':c<=67?'비':c<=77?'눈':c<=82?'소나기':'천둥번개';
const pmGrade = (v, fine) => { const t = fine?[15,35,75]:[30,80,150];
  return v<=t[0]?['좋음','var(--acc)']:v<=t[1]?['보통','var(--tx)']:v<=t[2]?['나쁨','var(--amber)']:['매우나쁨','var(--rose)']; };

/* 비 오는 시간대를 '오후 3~6시' 형태로 */
function wetRanges(hs){
  if(!hs || !hs.length) return '';
  const s = [...new Set(hs)].sort((a,b)=>a-b), rs = [];
  let a = s[0], p = s[0];
  for(let i=1;i<=s.length;i++){
    if(s[i] != null && s[i]-p <= 2){ p = s[i]; continue; }
    rs.push([a,p]); a = s[i]; p = s[i];
  }
  const f = h => h===0 ? '자정' : h===12 ? '낮 12시' : (h<12?'오전 ':'오후 ') + (h%12) + '시';
  return rs.slice(0,2).map(([x,y]) => x===y ? f(x) : `${f(x)}~${f(y)}`).join(', ');
}

async function loadWeather(force){
  const c = C.wx;
  if(c && !force && c.date === today() && Date.now() - c.at < 20*60*1000) return paint();
  try{
    const u1 = `https://api.open-meteo.com/v1/forecast?latitude=${C.lat}&longitude=${C.lon}`
      + `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code`
      + `&hourly=temperature_2m,weather_code,precipitation_probability`
      + `&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code,uv_index_max,sunrise,sunset`
      + `&timezone=Asia%2FSeoul&forecast_days=2`;
    const u2 = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${C.lat}&longitude=${C.lon}`
      + `&current=pm10,pm2_5&timezone=Asia%2FSeoul`;
    const j = await (await fetch(u1)).json();
    const build = di => {
      const base = di*24, startH = di===0 ? now.getHours()+1 : 8, step = di===0 ? 2 : 3;
      const hourly = [];
      for(let i=0;i<6;i++){
        const k = base + startH + i*step;
        if(j.hourly.temperature_2m[k] == null) break;
        hourly.push({ t: pad((startH + i*step) % 24)+'시', temp: Math.round(j.hourly.temperature_2m[k]), icon: WICON(j.hourly.weather_code[k]) });
      }
      const wetH = [];
      for(let h=0;h<24;h++){
        const code = j.hourly.weather_code[base+h], pop = j.hourly.precipitation_probability ? j.hourly.precipitation_probability[base+h] : 0;
        if((code != null && code >= 51) || pop >= 60) wetH.push(h);
      }
      return { hourly, wetH,
        temp: di===0 ? Math.round(j.current.temperature_2m) : null,
        feels: di===0 ? Math.round(j.current.apparent_temperature) : null,
        hum: j.current.relative_humidity_2m,
        code: di===0 ? j.current.weather_code : j.daily.weather_code[1],
        hi: Math.round(j.daily.temperature_2m_max[di]), lo: Math.round(j.daily.temperature_2m_min[di]),
        rain: j.daily.precipitation_probability_max[di], uv: Math.round(j.daily.uv_index_max[di]),
        sunrise: (j.daily.sunrise[di]||'').slice(11), sunset: (j.daily.sunset[di]||'').slice(11) };
    };
    C.wx = { date: today(), at: Date.now(), live:true, today: build(0), tomorrow: build(1) };
    try{
      const a = await (await fetch(u2)).json();
      C.wx.air = { pm10: Math.round(a.current.pm10), pm25: Math.round(a.current.pm2_5) };
    }catch(e){}
    save();
  }catch(e){ if(C.wx) C.wx.stale = true; }
  paint();
}

Cards.register({
  id:'weather', name:'날씨', size:'L', grow:true,
  desc:'현재 기온, 미세먼지, 시간대별 예보, 내일 요약',
  init(el){
    el.innerHTML = `
      <div class="chead"><span class="clab" id="wxLab">날씨</span><span class="cmeta" id="wxSrc">불러오는 중</span></div>
      <div class="wx-main">
        <span class="wx-icon" id="wxIcon">⛅</span>
        <span class="wx-temp big" id="wxTemp">--°</span>
        <div class="wx-col">
          <span class="wx-desc" id="wxDesc">—</span>
          <span class="sub" id="wxS1"></span>
          <span class="sub" id="wxS2"></span>
        </div>
      </div>
      <div class="wx-stats" id="wxStats"></div>
      <p class="wx-adv" id="wxAdv"></p>
      <div class="wx-tmrw" id="wxTmrw"></div>
      <div class="wx-hourly" id="wxHourly"></div>`;
    el.querySelector('#wxSrc').onclick = () => loadWeather(true);
  },
  render(el){
    const w = C.wx && C.wx.today;
    el.querySelector('#wxLab').textContent = (C.place || '내 지역') + ' · 오늘';
    el.querySelector('.wx-main').hidden = !w;
    el.querySelector('#wxStats').hidden = !w;
    el.querySelector('#wxTmrw').hidden = !w;
    el.querySelector('#wxHourly').hidden = !w;
    if(!w){
      el.querySelector('#wxSrc').textContent = '다시 시도';
      el.querySelector('#wxAdv').innerHTML = `<span class="empty">날씨를 불러오지 못했습니다. 인터넷 연결을 확인하고 오른쪽 위를 눌러 주세요.</span>`;
      return;
    }
    el.querySelector('#wxSrc').textContent = (C.wx.stale ? '이전 기록' : 'Open-Meteo') + ' · 눌러서 새로고침';
    el.querySelector('#wxIcon').textContent = WICON(w.code);
    el.querySelector('#wxDesc').textContent = WDESC(w.code);
    el.querySelector('#wxTemp').innerHTML = `${w.temp}°`;
    el.querySelector('#wxS1').textContent = `체감 ${w.feels}°`;
    el.querySelector('#wxS2').textContent = `최고 ${w.hi}° / 최저 ${w.lo}°`;

    const air = (C.wx && C.wx.air) || {};
    const st = [];
    if(air.pm10 != null){ const g = pmGrade(air.pm10,false); st.push(['미세먼지', air.pm10+' '+g[0], g[1]]); }
    if(air.pm25 != null){ const g = pmGrade(air.pm25,true); st.push(['초미세먼지', air.pm25+' '+g[0], g[1]]); }
    st.push(['강수확률' + (wetRanges(w.wetH) ? ' · '+wetRanges(w.wetH) : ''), (w.rain ?? '—')+'%', w.rain>=60?'var(--acc)':'var(--tx)']);
    st.push(['습도', w.hum+'%', 'var(--tx)']);
    st.push(['자외선', w.uv>=8?w.uv+' 매우높음':w.uv>=6?w.uv+' 높음':w.uv+' 보통', 'var(--tx)']);
    st.push([isNight()?'일출':'일몰', (isNight()?w.sunrise:w.sunset)||'—', 'var(--tx)']);
    el.querySelector('#wxStats').innerHTML = st.map(s =>
      `<div class="wx-stat"><i>${s[0]}</i><b style="color:${s[2]}">${s[1]}</b></div>`).join('');

    const t = w.temp;
    el.querySelector('#wxAdv').textContent =
      (t>=28?'반팔에 얇은 셔츠 한 장이면 충분합니다.':t>=23?'반팔, 저녁에는 가디건 한 장.':
       t>=17?'긴팔 셔츠가 적당합니다.':t>=10?'재킷은 꼭 챙기세요.':'코트와 목도리가 필요합니다.')
      + (w.rain>=50 ? (wetRanges(w.wetH) ? ` ${wetRanges(w.wetH)}에 비, 우산을 챙기세요.` : ' 우산을 챙기세요.') : '');

    const tw = C.wx.tomorrow;
    el.querySelector('#wxTmrw').innerHTML = tw
      ? `<span class="lb">내일</span><span class="ic">${WICON(tw.code)}</span>`
        + `<span class="tp"><b>${tw.lo}°</b> / ${tw.hi}°</span>`
        + `<span class="rn">${WDESC(tw.code)}${tw.rain!=null?' · 강수 <b>'+tw.rain+'%</b>':''}`
        + `${wetRanges(tw.wetH)?' · '+wetRanges(tw.wetH):''}</span>`
      : '';
    el.querySelector('#wxHourly').innerHTML = w.hourly.map(x =>
      `<div class="wx-h"><span class="t">${x.t}</span><span class="i">${x.icon}</span><span class="v">${x.temp}°</span></div>`).join('');
  }
});


/* ══════ js/cards/calendar.js ══════ */

/* 달력 — 월 격자 + 일정 추가/편집/반복 */
let calYM = null;        // {y,m} 보고 있는 달
let calSel = null;       // 선택한 날짜 (YYYY-MM-DD)

function calInit(){
  if(!calYM) calYM = { y: now.getFullYear(), m: now.getMonth() };
  if(!calSel) calSel = today();
}

Cards.register({
  id:'calendar', name:'달력', size:'L', grow:true,
  desc:'월 달력, 일정·수행평가·D-day 표시, 날짜를 눌러 추가',
  init(el){
    calInit();
    el.innerHTML = `
      <div class="chead">
        <span class="clab">달력</span>
        <div class="cal-nav">
          <button class="cbtn" data-go="-1">‹</button>
          <span class="cal-ym" id="calYM"></span>
          <button class="cbtn" data-go="1">›</button>
          <button class="cbtn" data-go="0">오늘</button>
        </div>
      </div>
      <div class="cal-dow" id="calDow"></div>
      <div class="cal-grid" id="calGrid"></div>
      <div class="cal-day">
        <div class="cal-dhead"><span id="calDayLab"></span><button class="cbtn acc" id="calAdd">+ 일정</button></div>
        <div class="cal-list" id="calList"></div>
      </div>`;
    el.querySelector('.cal-nav').onclick = e => {
      const b = e.target.closest('[data-go]'); if(!b) return;
      const g = +b.dataset.go;
      if(g === 0){ calYM = { y: now.getFullYear(), m: now.getMonth() }; calSel = today(); }
      else { let m = calYM.m + g, y = calYM.y;
        if(m < 0){ m = 11; y--; } if(m > 11){ m = 0; y++; }
        calYM = { y, m }; }
      paint();
    };
    el.querySelector('#calGrid').onclick = e => {
      const c = e.target.closest('[data-d]'); if(!c) return;
      calSel = c.dataset.d; paint();
    };
    el.querySelector('#calAdd').onclick = () => openEvent(null, calSel);
    el.querySelector('#calList').onclick = e => {
      const r = e.target.closest('[data-ev]'); if(!r) return;
      openEvent(r.dataset.ev);
    };
  },
  render(el){
    calInit();
    const { y, m } = calYM;
    el.querySelector('#calYM').textContent = `${y}년 ${m+1}월`;
    el.querySelector('#calDow').innerHTML = DAYS_KR.map((d,i) =>
      `<span class="${i===0?'sun':i===6?'sat':''}">${d}</span>`).join('');

    const first = new Date(y, m, 1), start = first.getDay();
    const last = new Date(y, m+1, 0).getDate();
    const prevLast = new Date(y, m, 0).getDate();
    const cells = [];
    for(let i=start-1;i>=0;i--) cells.push({ d: prevLast-i, out:true, ym:[y, m-1] });
    for(let d=1;d<=last;d++) cells.push({ d, out:false, ym:[y, m] });
    while(cells.length % 7) cells.push({ d: cells.length-start-last+1, out:true, ym:[y, m+1] });

    const t = today();
    el.querySelector('#calGrid').innerHTML = cells.map(c => {
      let yy = c.ym[0], mm = c.ym[1];
      if(mm < 0){ mm = 11; yy--; } if(mm > 11){ mm = 0; yy++; }
      const ds = `${yy}-${pad(mm+1)}-${pad(c.d)}`;
      const evs = c.out ? [] : EV.onDate(ds);
      const dots = [...new Set(evs.map(e => e.type))].slice(0,3)
        .map(tp => `<i style="background:${evColor(tp)}"></i>`).join('');
      const dow = new Date(ds+'T00:00:00').getDay();
      return `<button class="cal-c${c.out?' out':''}${ds===t?' today':''}${ds===calSel?' sel':''}" data-d="${ds}">
        <span class="n${dow===0?' sun':dow===6?' sat':''}">${c.d}</span>
        <span class="dots">${dots}</span></button>`;
    }).join('');

    const sd = new Date(calSel+'T00:00:00');
    const dl = dleft(calSel);
    el.querySelector('#calDayLab').innerHTML =
      `${sd.getMonth()+1}월 ${sd.getDate()}일 ${DAYS_KR[sd.getDay()]}요일 <i class="tiny">${calSel===t?'오늘':dtxt(dl)}</i>`;
    const list = EV.onDate(calSel);
    el.querySelector('#calList').innerHTML = list.length ? list.map(e => `
      <div class="cal-ev" data-ev="${e.id}">
        <i class="bar" style="background:${evColor(e.type)}"></i>
        <span class="tm">${e.time || '종일'}</span>
        <span class="tt">${esc(e.title)}${e.repeat && e.repeat.type ? ' <i class="rp">반복</i>' : ''}</span>
      </div>`).join('') : `<div class="empty">일정이 없습니다. + 버튼으로 추가하세요.</div>`;
  }
});

/* ── 일정 편집 모달 ── */
let editingId = null;
function openEvent(id, dateStr){
  editingId = id;
  const e = id ? EV.all().find(x => x.id === id) : null;
  const d = e ? e.date : (dateStr || today());
  $('evTitle').textContent = e ? '일정 편집' : '일정 추가';
  $('evDelete').hidden = !e;
  const rep = (e && e.repeat) || { type:'', days:[], until:'' };
  $('evBody').innerHTML = `
    <div class="fld"><label>제목</label><input id="evT" value="${esc(e ? e.title : '')}" placeholder="예: 국어 발표 대본"></div>
    <div class="row2">
      <div class="fld"><label>날짜</label><input id="evD" type="date" value="${d}"></div>
      <div class="fld"><label>시각 (선택)</label><input id="evTm" type="time" value="${e && e.time ? e.time : ''}"></div>
    </div>
    <div class="fld"><label>종류</label>
      <div class="pickgrid" id="evType">${EV_TYPES.map(t =>
        `<button class="pick${(e ? e.type : 'event') === t.id ? ' on' : ''}" data-t="${t.id}">
          <b><i style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${t.color};margin-right:6px"></i>${t.name}</b>
          <i>${t.id==='exam'?'수행평가 카드에 표시':t.id==='dday'?'시계 카드에 D-day로':'일반 일정'}</i></button>`).join('')}</div>
    </div>
    <div class="fld"><label>반복</label>
      <select id="evRep">
        <option value="">반복 안 함</option>
        <option value="weekly"${rep.type==='weekly'?' selected':''}>매주</option>
        <option value="monthly"${rep.type==='monthly'?' selected':''}>매월 같은 날</option>
        <option value="yearly"${rep.type==='yearly'?' selected':''}>매년</option>
      </select>
    </div>
    <div class="fld" id="evWeekWrap" ${rep.type==='weekly'?'':'hidden'}>
      <label>요일</label>
      <div class="dowpick" id="evDow">${DAYS_KR.map((x,i) =>
        `<button data-d="${i}" class="${(rep.days||[]).includes(i)?'on':''}">${x}</button>`).join('')}</div>
      <input id="evUntil" type="date" value="${rep.until||''}" placeholder="종료일">
      <span class="hint">종료일을 비우면 계속 반복됩니다.</span>
    </div>
    <div class="fld"><label>메모 (선택)</label><textarea id="evM">${esc(e ? e.memo : '')}</textarea></div>`;

  $('evType').onclick = ev => {
    const b = ev.target.closest('[data-t]'); if(!b) return;
    [...$('evType').children].forEach(x => x.classList.toggle('on', x === b));
  };
  $('evRep').onchange = ev => { $('evWeekWrap').hidden = ev.target.value !== 'weekly'; };
  $('evDow').onclick = ev => { const b = ev.target.closest('[data-d]'); if(b) b.classList.toggle('on'); };
  $('evEdit').classList.add('show');
  setTimeout(() => $('evT').focus(), 100);
}
function closeEvent(){
  if(typeof closeModal === 'function') closeModal($('evEdit'), () => { editingId = null; });
  else { $('evEdit').classList.remove('show'); editingId = null; }
}

function saveEvent(){
  const title = $('evT').value.trim();
  if(!title){ $('evT').focus(); return; }
  const type = ($('evType').querySelector('.on') || {}).dataset ? $('evType').querySelector('.on').dataset.t : 'event';
  const repType = $('evRep').value;
  const patch = {
    title, date: $('evD').value || today(), time: $('evTm').value || '',
    type, memo: $('evM').value.trim(),
    repeat: repType ? {
      type: repType,
      days: repType === 'weekly' ? [...$('evDow').querySelectorAll('.on')].map(b => +b.dataset.d) : [],
      until: $('evUntil') ? $('evUntil').value : ''
    } : null
  };
  if(patch.repeat && patch.repeat.type === 'weekly' && !patch.repeat.days.length)
    patch.repeat.days = [new Date(patch.date+'T00:00:00').getDay()];
  if(editingId) EV.update(editingId, patch); else EV.add(patch);
  calSel = patch.date;
  closeEvent(); paint();
}


/* ══════ js/cards/todo.js ══════ */

/* 할 일 — 오늘 / 내일 탭 */
let todoTab = 'todos';
Cards.register({
  id:'todo', name:'할 일', size:'M', grow:true,
  desc:'오늘·내일 할 일. 내일 목록은 자정에 오늘로 넘어옵니다',
  init(el){
    el.innerHTML = `
      <div class="chead">
        <div class="tabs" id="tdTabs"><button class="on" data-k="todos">오늘</button><button data-k="todosNext">내일</button></div>
        <span class="cmeta" id="tdCount"></span>
      </div>
      <div class="td-add"><span>+</span><input id="tdIn" maxlength="90" placeholder="할 일을 적고 Enter"></div>
      <div class="td-list" id="tdList"></div>`;
    el.querySelector('#tdTabs').onclick = e => {
      const b = e.target.closest('button'); if(!b) return;
      todoTab = b.dataset.k;
      [...b.parentNode.children].forEach(x => x.classList.toggle('on', x === b));
      paint(); el.querySelector('#tdIn').focus();
    };
    el.querySelector('#tdIn').addEventListener('keydown', e => {
      if(e.key !== 'Enter') return;
      const v = e.target.value.trim(); if(!v) return;
      C[todoTab] = (C[todoTab]||[]).concat([{ text:v, done:false }]);
      e.target.value = ''; save(); paint();
    });
    el.querySelector('#tdList').onclick = e => {
      const row = e.target.closest('[data-i]'); if(!row) return;
      const i = +row.dataset.i, a = e.target.dataset.a, arr = (C[todoTab]||[]).slice();
      if(a === 'del') arr.splice(i,1);
      else if(a === 'tog') arr[i] = { text: arr[i].text, done: !arr[i].done };
      else return;
      C[todoTab] = arr; save(); paint();
    };
  },
  render(el){
    const list = C[todoTab] || [];
    el.querySelector('#tdIn').placeholder = todoTab === 'todosNext' ? '내일 할 일을 적고 Enter' : '할 일을 적고 Enter';
    el.querySelector('#tdCount').textContent = list.length ? `${list.filter(x=>!x.done).length} / ${list.length}` : '';
    el.querySelector('#tdList').innerHTML = list.length ? list.map((t,i) => `
      <div class="td ${t.done?'done':''}" data-i="${i}">
        <button class="ck" data-a="tog"></button>
        <span class="tx" data-a="tog">${esc(t.text)}</span>
        <button class="rm" data-a="del">×</button>
      </div>`).join('')
      : `<div class="empty">${todoTab==='todosNext'?'내일 할 일을 적어 두면 아침에 자동으로 넘어옵니다.':'적어 둔 할 일이 없습니다.'}</div>`;
  }
});


/* ══════ js/cards/exam.js ══════ */

/* 수행평가 — 달력의 '수행평가' 종류 일정을 모아 보여줌 */
Cards.register({
  id:'exam', name:'수행평가 알리미', size:'S', def:false, tag:'학생', tone:'violet',
  desc:'달력에 수행평가로 넣은 일정만 모아 D-day로 표시',
  init(el){
    el.innerHTML = `
      <div class="chead"><span class="clab">수행평가 알리미</span>
        <button class="cbtn" id="exAdd">+ 추가</button></div>
      <div class="ex-list" id="exList"></div>`;
    el.querySelector('#exAdd').onclick = () => openEvent(null, today());
    el.querySelector('#exList').onclick = e => {
      const r = e.target.closest('[data-ev]'); if(r) openEvent(r.dataset.ev);
    };
  },
  render(el){
    const list = EV.upcoming('exam', 4);
    el.querySelector('#exList').innerHTML = list.length ? list.map(e => {
      const dl = dleft(e.date);
      return `<div class="ex" data-ev="${e.id}">
        <span class="d ${dl<=2?'hot':''}">${dtxt(dl)}</span>
        <span class="m"><b>${esc(e.title)}</b><i>${e.date.slice(5).replace('-','/')}${e.memo?' · '+esc(e.memo):''}</i></span>
      </div>`;
    }).join('') : `<div class="empty">등록된 수행평가가 없습니다. 달력에서 종류를 '수행평가'로 넣으면 여기에 모입니다.</div>`;
  }
});


/* ══════ js/cards/baseball.js ══════ */

/* 야구 — TheSportsDB 공개 API (KBO 리그 id 4830)
   크라우드소싱 개방형 스포츠 DB. 무료 키로 정식 이용.
   데이터 출처 표기: TheSportsDB.com */
const KBO_LEAGUE = '4830';
const KBO_TEAMS = [
  { id:'139825', kr:'삼성 라이온즈', s:'삼성',  en:'Samsung Lions' },
  { id:'139820', kr:'LG 트윈스',    s:'LG',    en:'LG Twins' },
  { id:'139822', kr:'두산 베어스',   s:'두산',  en:'Doosan Bears' },
  { id:'139824', kr:'KIA 타이거즈',  s:'KIA',   en:'Kia Tigers' },
  { id:'139821', kr:'롯데 자이언츠', s:'롯데',  en:'Lotte Giants' },
  { id:'139826', kr:'한화 이글스',   s:'한화',  en:'Hanwha Eagles' },
  { id:'139828', kr:'SSG 랜더스',    s:'SSG',   en:'SSG Landers' },
  { id:'139819', kr:'NC 다이노스',   s:'NC',    en:'NC Dinos' },
  { id:'139827', kr:'KT 위즈',       s:'KT',    en:'KT Wiz' },
  { id:'139823', kr:'키움 히어로즈', s:'키움',  en:'Kiwoom Heroes' }
];
const VENUE_KR = {
  'Daegu Samsung Lions Park':'대구 라이온즈파크', 'Jamsil':'잠실', 'Gocheok':'고척',
  'Incheon SSG Landers Field':'인천 랜더스필드', 'Suwon':'수원', 'Hanwha Life Eagles Park':'대전',
  'Daejeon':'대전', 'Sajik':'사직', 'Changwon NC Park':'창원', 'Gwangju-Kia Champions Field':'광주',
  'Ulsan':'울산', 'Pohang':'포항', 'Cheongju':'청주'
};
const venueKR = v => { if(!v) return '';
  for(const k in VENUE_KR) if(v.indexOf(k) >= 0 || v.indexOf(k.split(' ')[0]) >= 0) return VENUE_KR[k];
  return v; };
const teamShort = en => { const t = KBO_TEAMS.find(x => en && en.indexOf(x.en.split(' ')[0]) >= 0); return t ? t.s : (en||''); };

/* UTC 타임스탬프 → 현지 날짜·시각 */
function toLocal(ev){
  const ts = ev.strTimestamp || (ev.dateEvent && ev.strTime ? ev.dateEvent+' '+ev.strTime : null);
  if(!ts) return { date: ev.dateEvent || '', time: '' };
  const d = new Date(ts.replace(' ','T') + (/[Zz]|\+/.test(ts) ? '' : 'Z'));
  if(isNaN(d)) return { date: ev.dateEvent || '', time: '' };
  return { date: ymd(d), time: pad(d.getHours())+':'+pad(d.getMinutes()) };
}

async function sdbFetch(path){
  const key = (C.sdbKey || '123').trim();
  const url = `https://www.thesportsdb.com/api/v1/json/${encodeURIComponent(key)}/${path}`;
  const ac = new AbortController(); const to = setTimeout(() => ac.abort(), 12000);
  try{ const r = await fetch(url, { signal: ac.signal }); clearTimeout(to);
       if(!r.ok) throw new Error('HTTP '+r.status);
       return await r.json(); }
  catch(e){ clearTimeout(to); throw e; }
}

async function loadGames(force){
  if(!Cards.isOn('baseball') || !C.teamId) return;
  if(!force && C.games && Date.now() - (C.gamesAt||0) < 3*3600000) return;
  const list = [];
  let err = null;
  try{
    const [nx, lt] = await Promise.all([
      sdbFetch('eventsnext.php?id='+C.teamId).catch(() => null),
      sdbFetch('eventslast.php?id='+C.teamId).catch(() => null)
    ]);
    const push = arr => (arr||[]).forEach(e => list.push(e));
    if(nx) push(nx.events);
    if(lt) push(lt.results || lt.events);
    if(!list.length){
      // 폴백: 시즌 전체를 한 번 받아 내 팀 경기만 추림
      const s = await sdbFetch(`eventsseason.php?id=${KBO_LEAGUE}&s=${now.getFullYear()}`);
      (s.events||[]).forEach(e => {
        if(e.idHomeTeam === C.teamId || e.idAwayTeam === C.teamId) list.push(e);
      });
    }
  }catch(e){ err = e.message || '연결 실패'; }

  if(list.length){
    C.games = list.map(e => {
      const L = toLocal(e);
      const home = e.idHomeTeam === C.teamId;
      const my = home ? e.intHomeScore : e.intAwayScore;
      const op = home ? e.intAwayScore : e.intHomeScore;
      return { date:L.date, time:L.time, home,
        opp: teamShort(home ? e.strAwayTeam : e.strHomeTeam),
        venue: venueKR(e.strVenue || ''),
        my: my == null || my === '' ? null : +my,
        op: op == null || op === '' ? null : +op };
    }).filter(g => g.date)
      .sort((a,b) => a.date.localeCompare(b.date));
    // 중복 제거
    const seen = {}; C.games = C.games.filter(g => seen[g.date+g.opp] ? false : (seen[g.date+g.opp] = 1));
    C.gamesAt = Date.now(); C.gamesErr = null;
  } else C.gamesErr = err || '경기 정보를 찾지 못했습니다';
  save(); paint();
}

Cards.register({
  id:'baseball', name:'야구 경기', size:'S', def:false, tag:'스포츠',
  desc:'응원 팀의 오늘 경기와 최근 결과 (KBO)',
  init(el){
    el.innerHTML = `
      <div class="chead"><span class="clab" id="bbLab">야구</span>
        <span class="cmeta" id="bbSrc"></span></div>
      <div id="bbBody"></div>
      <div class="bb-recent" id="bbRecent"></div>`;
    el.querySelector('#bbSrc').onclick = () => { el.querySelector('#bbSrc').textContent = '불러오는 중…'; loadGames(true); };
  },
  render(el){
    const team = KBO_TEAMS.find(t => t.id === C.teamId);
    el.querySelector('#bbLab').textContent = team ? team.kr : '야구';
    if(!C.teamId){
      el.querySelector('#bbSrc').textContent = '';
      el.querySelector('#bbBody').innerHTML = `<div class="empty">설정 → 카드 구성에서 응원 팀을 골라 주세요.</div>`;
      el.querySelector('#bbRecent').innerHTML = ''; return;
    }
    const games = C.games || [];
    if(!games.length){
      el.querySelector('#bbSrc').textContent = '눌러서 다시';
      el.querySelector('#bbBody').innerHTML = `<div class="empty">${esc(C.gamesErr || '불러오는 중…')}</div>`;
      el.querySelector('#bbRecent').innerHTML = ''; return;
    }
    el.querySelector('#bbSrc').textContent = 'TheSportsDB';
    const t = today();
    const g = games.find(x => x.date === t), next = games.find(x => x.date > t);
    if(g){
      el.querySelector('#bbBody').innerHTML =
        `<div class="bb-head">${g.home ? esc(g.opp)+' vs '+team.s : team.s+' vs '+esc(g.opp)}</div>
         <div class="bb-chips">
           <span class="lc acc">${g.home ? '홈' : '원정'}${g.venue ? ' · '+esc(g.venue) : ''}</span>
           ${g.time ? `<span class="lc">${g.time}</span>` : ''}
           ${g.my != null && g.op != null && (g.my+g.op) > 0 ? `<span class="lc">${g.my} : ${g.op}</span>` : ''}
         </div>`;
    } else {
      el.querySelector('#bbBody').innerHTML =
        `<div class="bb-head sm">오늘은 경기가 없습니다</div>` +
        (next ? `<div class="bb-chips"><span class="lc">다음 ${next.date.slice(5).replace('-','/')} · ${next.home ? esc(next.opp)+' vs '+team.s : team.s+' vs '+esc(next.opp)} ${next.time}</span></div>` : '');
    }
    const past = games.filter(x => x.date < t && x.my != null && x.op != null && (x.my + x.op) > 0).slice(-3);
    if(past.length){
      let w=0,l=0,d=0;
      const cells = past.map(x => {
        const r = x.my > x.op ? '승' : x.my < x.op ? '패' : '무';
        r === '승' ? w++ : r === '패' ? l++ : d++;
        return `<span class="g">${x.date.slice(5).replace('-','/')} ${esc(x.opp)} <b class="${r==='승'?'w':r==='패'?'l':''}">${x.my}:${x.op} ${r}</b></span>`;
      }).join('');
      el.querySelector('#bbRecent').innerHTML = `<span class="hd">최근 ${past.length}경기</span>${cells}<span class="hd rt">${w}승${d?d+'무':''}${l}패</span>`;
    } else el.querySelector('#bbRecent').innerHTML = '';
  }
});


/* ══════ js/cards/news.js ══════ */

/* 뉴스 — 구글 뉴스 토픽 RSS (제목·출처·링크만, 본문 저장 안 함) */
const NEWS_TOPICS = [
  { id:'NATION',   name:'국내',   q:'대한민국 주요 뉴스' },
  { id:'WORLD',    name:'세계',   q:'국제 정세' },
  { id:'SCIENCE',  name:'과학',   q:'과학 기술 연구' },
  { id:'TECHNOLOGY', name:'기술', q:'IT 기술' },
  { id:'BUSINESS', name:'경제',   q:'경제 시장' },
  { id:'SPORTS',   name:'스포츠', q:'스포츠 소식' },
  { id:'ENTERTAINMENT', name:'연예', q:'연예 소식' }
];
async function rssFirst(url){
  const ac = new AbortController(); const to = setTimeout(() => ac.abort(), 11000);
  try{
    const r = await fetch(url, { signal: ac.signal }); clearTimeout(to);
    if(!r.ok) throw 0;
    const xml = new DOMParser().parseFromString(await r.text(), 'text/xml');
    const it = xml.querySelector('item'); if(!it) throw 0;
    const raw = (it.querySelector('title')||{}).textContent || '';
    const m = raw.match(/^(.*?)\s+-\s+([^-]+)$/);
    return { text: (m ? m[1] : raw).trim(), src: m ? m[2].trim() : '',
             url: ((it.querySelector('link')||{}).textContent||'').trim() };
  }catch(e){ clearTimeout(to); return null; }
}
async function loadNews(force){
  if(!Cards.isOn('news')) return;
  if(!force && C.news && Date.now() - (C.newsAt||0) < 2*3600000) return;
  const picks = (C.newsTopics && C.newsTopics.length ? C.newsTopics : ['NATION','WORLD','SCIENCE'])
    .map(id => NEWS_TOPICS.find(t => t.id === id)).filter(Boolean);
  const base = 'https://news.google.com/rss';
  const out = await Promise.all(picks.map(async t => {
    let g = await rssFirst(`${base}/search?q=${encodeURIComponent(t.q)}&hl=ko&gl=KR&ceid=KR:ko`);
    if(!g) g = await rssFirst(`${base}/headlines/section/topic/${t.id}?hl=ko&gl=KR&ceid=KR:ko`);
    return g ? Object.assign({ tag:t.name }, g) : { tag:t.name, text:'헤드라인을 불러오지 못했습니다', src:'', url:'' };
  }));
  C.news = out; C.newsAt = Date.now(); save(); paint();
}
Cards.register({
  id:'news', name:'뉴스 브리핑', size:'M', def:false,
  desc:'분야별 헤드라인 한 줄씩. 누르면 기사로 이동',
  init(el){
    el.innerHTML = `
      <div class="chead"><span class="clab">뉴스 브리핑</span>
        <span class="cmeta" id="nwSrc">눌러서 새로고침</span></div>
      <div class="nw-list" id="nwList"></div>`;
    el.querySelector('#nwSrc').onclick = () => { el.querySelector('#nwSrc').textContent = '불러오는 중…'; loadNews(true); };
  },
  render(el){
    const list = C.news || [];
    el.querySelector('#nwSrc').textContent = list.length ? 'Google News' : '눌러서 불러오기';
    el.querySelector('#nwList').innerHTML = list.length ? list.map(n => `
      <a class="nw" ${n.url?`href="${esc(n.url)}" target="_blank" rel="noopener"`:''}>
        <span class="tg">${n.tag}</span>
        <span class="tt">${esc(n.text)}</span>
        ${n.src?`<span class="sc">${esc(n.src)}</span>`:''}
      </a>`).join('') : `<div class="empty">헤드라인을 불러오려면 오른쪽 위를 눌러 주세요.</div>`;
  }
});


/* ══════ js/cards/fortune.js ══════ */

/* 오늘의 운세 — 사주 명리 계산 (외부 통신 없음) */
Cards.register({
  id:'fortune', name:'오늘의 운세', size:'L', grow:true, tone:'accent',
  desc:'생년월일로 절기·일진·십신을 계산한 사주 운세 (재미로 보는 참고용)',
  init(el){
    el.innerHTML = `
      <div class="chead"><span class="clab">오늘의 운세</span><span class="cmeta" id="foWho"></span></div>
      <div class="fo-score"><b class="big" id="foScore">--</b><i id="foGrade"></i></div>
      <div class="fo-badges" id="foBadges"></div>
      <p class="fo-head" id="foHead"></p>
      <div class="fo-bars" id="foBars"></div>
      <div class="fo-act" id="foAct"></div>
      <div class="fo-lucky" id="foLucky"></div>
      <span class="tiny fo-disc">사주 명리 계산에 따른 참고용이며 재미로 보는 콘텐츠입니다.</span>`;
  },
  render(el){
    if(!C.birth){
      el.querySelector('#foHead').innerHTML = `<span class="empty">설정에서 생년월일을 넣으면 운세가 계산됩니다.</span>`;
      return;
    }
    let f = null;
    try{ f = fortune(C.birth, C.birthTime, new Date(now.getFullYear(), now.getMonth(), now.getDate())); }catch(e){ return; }
    const g = f.score>=90?'대길(大吉)':f.score>=75?'길(吉)':f.score>=62?'소길(小吉)':f.score>=52?'평(平)':'신중(愼)';
    const col = v => v>=78?'var(--acc)':v>=60?'var(--amber)':'var(--rose)';
    const b = now.getFullYear() - new Date(C.birth+'T00:00:00').getFullYear();
    el.querySelector('#foScore').textContent = f.score;
    el.querySelector('#foGrade').textContent = g;
    el.querySelector('#foWho').textContent = `일진 ${GANH[f.tp.dg]}${JIH[f.tp.db]}`;
    el.querySelector('#foBadges').innerHTML = [
      [f.ss,'good'],
      f.rel[0] !== '평' ? [f.rel[0], ['육합','삼합'].includes(f.rel[0])?'good':'warn'] : null,
      f.mun ? ['문창귀인','good'] : null,
      f.che ? ['천을귀인','good'] : null,
      ['일간 '+GANH[f.me.dg]+f.A.me+' · '+(f.A.strong?'신강':'신약'),'']
    ].filter(Boolean).map(x => `<span class="${x[1]}">${x[0]}</span>`).join('');
    el.querySelector('#foHead').textContent = SS_TEXT[f.ss] + (f.rel[2] ? ' ' + f.rel[2] + '.' : '')
      + (f.mun ? ' 문창귀인이 들어 암기와 글쓰기가 잘 붙습니다.' : '')
      + (f.che ? ' 천을귀인이 들어 도와주는 사람이 붙습니다.' : '');
    el.querySelector('#foBars').innerHTML = [['공부',f.study],['사람',f.rela],['건강',f.body],['행운',f.score]]
      .map(x => `<div class="fo-bar"><span>${x[0]}</span><div class="tr"><i style="width:${x[1]}%;background:${col(x[1])}"></i></div><b>${x[1]}</b></div>`).join('');
    el.querySelector('#foAct').innerHTML = [['오늘 할 일',SS_ACT[f.ss]],['좋은 시간',(f.goodTime||'—').split(',')[0]],['피할 시간',f.badTime||'—']]
      .map(x => `<div><i>${x[0]}</i><b>${x[1]}</b></div>`).join('');
    el.querySelector('#foLucky').innerHTML = [['행운의 색',f.color],['숫자',f.num.join('·')],['방향',f.dir]]
      .map(x => `<div><i>${x[0]}</i><b>${x[1]}</b></div>`).join('');
  }
});


/* ══════ js/cards/sleep.js ══════ */

/* 수면 점수 (수동 기록) */
Cards.register({
  id:'sleep', name:'수면 점수', size:'S', def:false,
  desc:'스마트워치 수면 점수를 옮겨 적고 7일 흐름 보기',
  init(el){
    el.innerHTML = `
      <div class="chead"><span class="clab">수면 점수</span><span class="cmeta" id="slMeta"></span></div>
      <div id="slFull" hidden>
        <div class="sl-num"><b class="big" id="slScore">--</b><i id="slWord"></i></div>
        <div class="sl-bars" id="slBars"></div>
        <input type="range" min="0" max="100" id="slRange">
      </div>
      <div id="slEmpty">
        <p class="empty" id="slAsk">어젯밤 점수가 아직 없습니다.</p>
        <div class="sl-act">
          <input id="slNum" type="number" min="0" max="100" placeholder="점수" inputmode="numeric">
          <button class="btn" id="slSave">기록</button>
        </div>
      </div>
      <span class="tiny" id="slTip"></span>`;
    const put = v => {
      if(isNaN(v) || v < 0 || v > 100) return;
      C.sleep = v; C.sleepHist = C.sleepHist || {}; C.sleepHist[today()] = v; save(); paint();
    };
    el.querySelector('#slSave').onclick = () => put(parseInt(el.querySelector('#slNum').value,10));
    el.querySelector('#slNum').addEventListener('keydown', e => { if(e.key === 'Enter') put(parseInt(e.target.value,10)); });
    el.querySelector('#slRange').addEventListener('input', e => put(parseInt(e.target.value,10)));
  },
  render(el){
    const has = C.sleep != null;
    el.querySelector('#slFull').hidden = !has;
    el.querySelector('#slEmpty').hidden = has;
    const days = []; for(let i=6;i>=0;i--){ const d = new Date(); d.setDate(d.getDate()-i); days.push(ymd(d)); }
    const vals = days.map((d,i) => i === 6 ? C.sleep : ((C.sleepHist||{})[d] ?? null));
    const rec = vals.filter(v => v != null);
    const avg = rec.length ? Math.round(rec.reduce((a,b)=>a+b,0)/rec.length) : null;
    el.querySelector('#slMeta').textContent = avg != null ? `7일 평균 ${avg}` : '';
    if(has){
      el.querySelector('#slScore').textContent = C.sleep;
      el.querySelector('#slWord').textContent = C.sleep>=85?'아주 좋음':C.sleep>=70?'양호':C.sleep>=55?'보통':'부족';
      el.querySelector('#slRange').value = C.sleep;
      el.querySelector('#slBars').innerHTML = vals.map((v,i) =>
        `<div class="${i===6?'now':''}" style="height:${v==null?3:Math.max(5,Math.round(v*.32))}px;opacity:${v==null?0.35:1}"></div>`).join('');
    } else {
      el.querySelector('#slAsk').textContent = isNight()
        ? '오늘 밤 기록은 내일 아침에 워치에서 확인하세요.'
        : '어젯밤 점수가 아직 없습니다. 워치 기록을 보고 숫자만 옮겨 적으세요.';
    }
    let rb = mins(C.wake||'07:00') - 480; if(rb < 0) rb += 1440;
    const diff = has && avg != null ? C.sleep - avg : 0;
    el.querySelector('#slTip').textContent = !has
      ? `8시간을 자려면 ${pad(Math.floor(rb/60))}:${pad(rb%60)}에는 누워야 해요.`
      : rec.length < 2 ? '며칠 쌓이면 평균과 비교해 드릴게요.'
      : diff >= 3 ? `평균보다 ${diff}점 높아요. 컨디션 좋은 날입니다.`
      : diff <= -3 ? `평균보다 ${Math.abs(diff)}점 낮아요. 오늘은 일찍 자 보세요.`
      : '최근 흐름과 비슷합니다.';
  }
});


/* ══════ js/cards/quote.js ══════ */

/* 오늘의 한마디 */
const Q_DAY = [
 ['하루하루가 작은 일생이다.','쇼펜하우어'],['시작이 반이다.','아리스토텔레스'],
 ['천천히 가더라도 멈추지 않으면 된다.','공자'],['아침을 지배하면 하루를 지배한다.','속담'],
 ['할 수 있다고 믿는 사람은 그렇게 된다.','베르길리우스'],['오늘 걷지 않으면 내일은 뛰어야 한다.','속담'],
 ['준비되지 않은 기회는 그냥 지나가는 소음이다.',''],['꾸준함은 재능을 이긴다.',''],
 ['좋은 질문은 좋은 답보다 멀리 간다.',''],['오늘의 나는 어제 내가 한 선택의 결과다.','']
];
const Q_NIGHT = [
 ['잠은 최고의 명상이다.','달라이 라마'],['오늘 못 한 일은 내일의 나에게 맡기자.',''],
 ['하루를 잘 보낸 사람에게 밤은 짧다.','속담'],['내일의 나는 오늘 잔 만큼이다.',''],
 ['저녁이 되어서야 하루가 무슨 날이었는지 알 수 있다.','괴테'],['가장 어두운 시간은 해 뜨기 직전이다.','속담'],
 ['오늘의 나를 칭찬하고 자는 것도 실력이다.',''],['내일 걱정은 내일의 몫으로 남겨 두자.','']
];
Cards.register({
  id:'quote', name:'오늘의 한마디', size:'S',
  desc:'아침·밤에 맞춘 문장 하나',
  init(el){ el.innerHTML = `<p class="qt" id="qtText"></p><span class="qtsrc" id="qtSrc"></span>`; },
  render(){
    const seed = jdn(now.getFullYear(), now.getMonth()+1, now.getDate());
    const list = isNight() ? Q_NIGHT : Q_DAY;
    const q = list[seed % list.length];
    $('qtText').textContent = '“' + q[0] + '”';
    $('qtSrc').textContent = q[1] ? '— ' + q[1] : '';
  }
});


/* ══════ js/cards/habit.js ══════ */

/* 루틴 — 매일 반복하는 습관 체크 */
const DEFAULT_HABITS = ['물 한 잔','스트레칭','가방 확인'];
Cards.register({
  id:'habit', name:'매일 루틴', size:'S', def:false,
  desc:'매일 반복하는 습관을 체크. 연속 달성 일수도 함께',
  init(el){
    el.innerHTML = `
      <div class="chead"><span class="clab">매일 루틴</span><span class="cmeta" id="hbMeta"></span></div>
      <div class="hb-list" id="hbList"></div>
      <div class="hb-add"><input id="hbIn" maxlength="20" placeholder="+ 루틴 추가"></div>`;
    el.querySelector('#hbIn').addEventListener('keydown', e => {
      if(e.key !== 'Enter') return;
      const v = e.target.value.trim(); if(!v) return;
      C.habits = (C.habits && C.habits.length ? C.habits : DEFAULT_HABITS.slice()).concat([v]);
      e.target.value = ''; save(); paint();
    });
    el.querySelector('#hbList').onclick = e => {
      const row = e.target.closest('[data-h]'); if(!row) return;
      const name = row.dataset.h;
      if(e.target.dataset.rm){
        C.habits = (C.habits||DEFAULT_HABITS).filter(x => x !== name); save(); paint(); return;
      }
      C.habitLog = C.habitLog || {};
      const d = C.habitLog[today()] = C.habitLog[today()] || [];
      const i = d.indexOf(name); i >= 0 ? d.splice(i,1) : d.push(name);
      save(); paint();
    };
  },
  render(el){
    const habits = (C.habits && C.habits.length) ? C.habits : DEFAULT_HABITS;
    const done = (C.habitLog||{})[today()] || [];
    el.querySelector('#hbMeta').textContent = `${done.length} / ${habits.length}`;
    const streak = name => {
      let n = 0; const d = new Date();
      for(;;){ const k = ymd(d); const l = (C.habitLog||{})[k] || [];
        if(l.includes(name)) n++; else if(k !== today()) break; else { d.setDate(d.getDate()-1); continue; }
        d.setDate(d.getDate()-1); if(n > 400) break; }
      return n;
    };
    el.querySelector('#hbList').innerHTML = habits.map(h => {
      const on = done.includes(h), s = streak(h);
      return `<button class="hb ${on?'on':''}" data-h="${esc(h)}">
        <i class="bx"></i><span class="nm">${esc(h)}</span>
        ${s>1?`<span class="st">${s}일째</span>`:''}
        <i class="rm" data-rm="1">×</i></button>`;
    }).join('') || `<div class="empty">아래에 루틴을 적어 보세요.</div>`;
  }
});


/* ══════ js/cards/water.js ══════ */

/* 물 마시기 */
Cards.register({
  id:'water', name:'물 마시기', size:'S', def:false,
  desc:'하루 목표 잔 수를 채워 가며 기록',
  init(el){
    el.innerHTML = `
      <div class="chead"><span class="clab">물 마시기</span><span class="cmeta" id="wtMeta"></span></div>
      <div class="wt-cups" id="wtCups"></div>
      <div class="wt-row">
        <button class="btn" id="wtMinus">−</button>
        <span class="wt-num big" id="wtNum">0</span>
        <button class="btn primary" id="wtPlus">+ 한 잔</button>
      </div>`;
    const set = n => {
      C.waterLog = C.waterLog || {};
      C.waterLog[today()] = Math.max(0, Math.min(20, n));
      save(); paint();
    };
    el.querySelector('#wtPlus').onclick = () => set(((C.waterLog||{})[today()]||0) + 1);
    el.querySelector('#wtMinus').onclick = () => set(((C.waterLog||{})[today()]||0) - 1);
    el.querySelector('#wtCups').onclick = e => {
      const c = e.target.closest('[data-i]'); if(c) set(+c.dataset.i + 1);
    };
  },
  render(el){
    const goal = +(C.waterGoal || 8);
    const n = (C.waterLog||{})[today()] || 0;
    el.querySelector('#wtMeta').textContent = `목표 ${goal}잔`;
    el.querySelector('#wtNum').textContent = n;
    el.querySelector('#wtCups').innerHTML = Array.from({length:goal}, (_,i) =>
      `<i class="cup ${i < n ? 'on':''}" data-i="${i}"></i>`).join('');
  }
});


/* ══════ js/cards/timetable.js ══════ */

/* 시간표 — 요일별 과목 */
Cards.register({
  id:'timetable', name:'오늘 시간표', size:'S', def:false, tag:'학생',
  desc:'요일별 시간표를 넣어 두면 오늘 것만 보여줍니다',
  init(el){
    el.innerHTML = `
      <div class="chead"><span class="clab">오늘 시간표</span>
        <button class="cbtn" id="ttEdit">편집</button></div>
      <div class="tt-list" id="ttList"></div>`;
    el.querySelector('#ttEdit').onclick = () => {
      const dow = now.getDay();
      const cur = ((C.timetable||{})[dow] || []).join(', ');
      const v = prompt(`${DAYS_KR[dow]}요일 시간표를 쉼표로 구분해 적어 주세요.\n예: 국어, 수학, 영어, 과학, 체육`, cur);
      if(v == null) return;
      C.timetable = C.timetable || {};
      C.timetable[dow] = v.split(',').map(x => x.trim()).filter(Boolean);
      save(); paint();
    };
  },
  render(el){
    const dow = now.getDay();
    const list = (C.timetable||{})[dow] || [];
    el.querySelector('#ttList').innerHTML = list.length
      ? list.map((s,i) => `<div class="tt"><span class="no">${i+1}</span><span class="sj">${esc(s)}</span></div>`).join('')
      : `<div class="empty">${DAYS_KR[dow]}요일 시간표가 없습니다. 편집을 눌러 넣어 주세요.</div>`;
  }
});


/* ══════ js/cards/countdown.js ══════ */

/* 큰 D-day — 가장 가까운 하나를 크게 */
Cards.register({
  id:'countdown', name:'큰 D-day', size:'S', def:false,
  desc:'가장 가까운 D-day 하나를 크게 표시',
  init(el){ el.innerHTML = `<div class="cd" id="cdBody"></div>`; },
  render(el){
    const dd = EV.all().filter(e => e.type === 'dday' && !e.repeat)
      .map(e => ({ n:e.title, l:dleft(e.date), d:e.date }))
      .filter(x => x.l >= 0).sort((a,b) => a.l - b.l)[0];
    el.querySelector('#cdBody').innerHTML = dd
      ? `<span class="lb">${esc(dd.n)}</span>
         <span class="num big">${dd.l === 0 ? 'D-DAY' : 'D-'+dd.l}</span>
         <span class="dt">${dd.d.replace(/-/g,'.')}</span>`
      : `<div class="empty">달력에서 종류를 'D-day'로 넣으면 여기에 크게 표시됩니다.</div>`;
  }
});


/* ══════ js/boot.js ══════ */

const FEEDBACK_EMAIL = 'feelrun.ahn@gmail.com';   // 배포 전 확인
const APP_PKG   = 'io.github.feelrun.briefing';   // 배포 시 확정
const APP_STORE = 'https://play.google.com/store/apps/details?id=' + APP_PKG;
const APP_WEB   = location.origin + location.pathname;   // 웹으로 여는 주소
/* 앱이 깔려 있으면 앱으로, 없으면 스토어로 보내는 링크 */
function joinLink(code){
  return APP_WEB + '?join=' + encodeURIComponent(code);
}

/* ═══════════ 설정 ═══════════ */
let setTab = 'general';
function openSettings(tab){
  setTab = tab || 'general';
  [...document.querySelectorAll('.setnav [data-tab]')].forEach(b => b.classList.toggle('on', b.dataset.tab === setTab));
  $('buildTag').textContent = BUILD;
  renderSettings();
  $('settings').classList.add('show');
}
function closeModal(el, after){
  el.classList.add('closing');
  setTimeout(() => { el.classList.remove('show','closing'); if(after) after(); }, 200);
}
function closeSettings(){
  saveSettingsInputs();
  closeModal($('settings'), () => { build(); paint(); loadWeather(true); loadGames(false); loadNews(false); });
}
function saveSettingsInputs(){
  document.querySelectorAll('#setBody [data-k]').forEach(inp => {
    const k = inp.dataset.k;
    if(k === 'lat' || k === 'lon') C[k] = parseFloat(inp.value) || DEFAULTS[k];
    else C[k] = inp.value;
  });
  save();
}
function renderSettings(){
  const B = $('setBody');
  if(setTab === 'general'){
    B.innerHTML = `
      <h3 class="sectitle">언어</h3>
      <div class="fld"><select data-k="lang" id="langSel">
        ${LANGS.map(l => `<option value="${l.id}"${lang()===l.id?' selected':''}>${l.name}</option>`).join('')}
      </select><span class="hint">화면 문구와 카드 이름에 적용됩니다. 운세·명언은 한국어로 표시됩니다.</span></div>

      <h3 class="sectitle" style="margin-top:26px">내 정보</h3>
      <div class="row2">
        <div class="fld"><label>이름</label><input data-k="name" value="${esc(C.name)}" placeholder="표시할 이름"></div>
        <div class="fld"><label>생년월일 (양력)</label><input data-k="birth" type="date" value="${C.birth}"></div>
      </div>
      <div class="fld"><label>태어난 시각 (선택)</label><input data-k="birthTime" type="time" value="${C.birthTime}">
        <span class="hint">운세를 사주 네 기둥으로 계산합니다. 모르면 비워 두세요 — 세 기둥으로 봅니다.</span></div>

      <h3 class="sectitle" style="margin-top:26px">위치</h3>
      <p class="sechelp">날씨를 가져올 지역입니다. 도시 이름으로 검색하거나 현재 위치를 쓸 수 있어요.</p>
      <div class="fld"><label>지역 이름</label><input data-k="place" value="${esc(C.place)}"></div>
      <div class="row2">
        <div class="fld"><label>위도</label><input data-k="lat" value="${C.lat}"></div>
        <div class="fld"><label>경도</label><input data-k="lon" value="${C.lon}"></div>
      </div>
      <div class="fld"><input id="geoQ" placeholder="도시 이름으로 검색 (예: 목동, 대구, Seoul)">
        <div class="searchres" id="geoRes"></div></div>
      <button class="btn" id="geoBtn">현재 위치로 맞추기</button>`;
    bindGeo(B);
    const ls = B.querySelector('#langSel');
    if(ls) ls.onchange = () => { C.lang = ls.value; save(); build(); paint(); renderSettings(); };
  }
  else if(setTab === 'cards'){
    const manual = C.layoutMode === 'manual';
    B.innerHTML = `
      <h3 class="sectitle">카드 구성</h3>
      <p class="sechelp">필요한 카드만 켜고 순서를 바꾸세요. 배치를 <b>직접 지정</b>으로 두면 카드마다 왼쪽·가운데·오른쪽 열을 고를 수 있어요.</p>
      <div class="segbar">
        <button class="${manual?'':'on'}" data-lay="auto">자동 배치</button>
        <button class="${manual?'on':''}" data-lay="manual">직접 지정</button>
      </div>
      <div class="cardlist" id="cardList">
        ${Cards.ordered().map(c => `
          <div class="cardrow ${Cards.isOn(c.id)?'':'off'}" data-id="${c.id}">
            <div class="ord">
              <button data-mv="-1" title="위로">▲</button>
              <button data-mv="1" title="아래로">▼</button>
            </div>
            <span class="nm"><b>${cardName(c)}${c.tag?` <i class="tag">${c.tag}</i>`:''}</b><i>${cardDesc(c)}</i></span>
            ${manual && Cards.isOn(c.id) ? `<div class="colpick">
              ${[0,1,2].map(i => `<button data-col="${i}" class="${(C.cardCol||{})[c.id]===i?'on':''}">${['좌','중','우'][i]}</button>`).join('')}
              <button data-col="auto" class="${(C.cardCol||{})[c.id]==null?'on':''}">자동</button>
            </div>` : ''}
            ${c.fixed ? '<span class="tiny">항상 표시</span>'
                      : `<button class="sw ${Cards.isOn(c.id)?'on':''}" data-sw="1"></button>`}
          </div>`).join('')}
      </div>
      <div id="nwSetting" ${Cards.isOn('news')?'':'hidden'}>
        <h3 class="sectitle" style="margin-top:26px">뉴스 카드 설정</h3>
        <p class="sechelp">보고 싶은 분야를 고르세요 (최대 4개).</p>
        <div class="pickgrid">${NEWS_TOPICS.map(t =>
          `<button class="pick sm ${(C.newsTopics||[]).includes(t.id)?'on':''}" data-nw="${t.id}"><b>${t.name}</b></button>`).join('')}</div>
      </div>
      <div id="wtSetting" ${Cards.isOn('water')?'':'hidden'}>
        <h3 class="sectitle" style="margin-top:26px">물 마시기 설정</h3>
        <div class="fld"><label>하루 목표 (잔)</label><input data-k="waterGoal" type="number" min="1" max="20" value="${C.waterGoal||8}"></div>
      </div>
      <div id="bbSetting" ${Cards.isOn('baseball')?'':'hidden'}>
        <h3 class="sectitle" style="margin-top:26px">야구 카드 설정</h3>
        <div class="fld"><label>응원 팀</label>
          <select data-k="teamId">
            <option value="">선택 안 함</option>
            ${KBO_TEAMS.map(t => `<option value="${t.id}"${C.teamId===t.id?' selected':''}>${t.kr}</option>`).join('')}
          </select></div>
        <div class="fld"><label>TheSportsDB API 키 (선택)</label>
          <input data-k="sdbKey" value="${esc(C.sdbKey)}" placeholder="비워 두면 공용 테스트 키를 씁니다">
          <span class="hint">공용 키는 여러 사람이 함께 써서 느릴 수 있어요.
            thesportsdb.com에서 무료로 발급받아 넣으면 더 안정적입니다.</span></div>
        <p class="sechelp">경기 데이터 제공: TheSportsDB.com (크라우드소싱 개방형 DB)</p>
      </div>`;
    $('setBody').querySelectorAll('[data-k]').forEach(inp => inp.addEventListener('change', () => {
      saveSettingsInputs(); C.games = []; C.gamesAt = 0; loadGames(true);
    }));
    const segs = B.querySelector('.segbar');
    if(segs) segs.onclick = e => {
      const btn = e.target.closest('[data-lay]'); if(!btn) return;
      C.layoutMode = btn.dataset.lay; save(); build(); paint(); renderSettings();
    };
    const nwPick = $('setBody').querySelector('[data-nw]');
    if(nwPick) nwPick.parentNode.onclick = e => {
      const btn = e.target.closest('[data-nw]'); if(!btn) return;
      C.newsTopics = C.newsTopics || [];
      const id = btn.dataset.nw, i = C.newsTopics.indexOf(id);
      if(i >= 0) C.newsTopics.splice(i,1);
      else { if(C.newsTopics.length >= 4) return; C.newsTopics.push(id); }
      btn.classList.toggle('on', C.newsTopics.includes(id));
      save(); C.news = null; C.newsAt = 0; loadNews(true);
    };
    $('cardList').onclick = e => {
      const row = e.target.closest('[data-id]'); if(!row) return;
      const id = row.dataset.id;
      if(e.target.dataset.sw){ Cards.toggle(id); renderSettings(); }
      else if(e.target.dataset.mv){ Cards.move(id, +e.target.dataset.mv); renderSettings(); }
      else if(e.target.dataset.col){
        const v = e.target.dataset.col;
        Cards.setCol(id, v === 'auto' ? null : +v); renderSettings();
      }
    };
  }
  else if(setTab === 'schedule'){
    B.innerHTML = `
      <h3 class="sectitle">하루 시각</h3>
      <p class="sechelp">헤더의 남은 시간 표시와 수면 안내에 쓰입니다.</p>
      <div class="row3">
        <div class="fld"><label>기상</label><input data-k="wake" type="time" value="${C.wake}"></div>
        <div class="fld"><label>외출 · 등교</label><input data-k="out" type="time" value="${C.out}"></div>
        <div class="fld"><label>목표 취침</label><input data-k="bed" type="time" value="${C.bed}"></div>
      </div>
      <h3 class="sectitle" style="margin-top:26px">화면</h3>
      <p class="sechelp">아침 5시부터 밝은 화면, 저녁 6시부터 어두운 화면으로 자동 전환됩니다. 헤더 버튼으로 직접 바꿔도 다음 전환 시각에 자동으로 돌아옵니다.</p>`;
  }
  else if(setTab === 'link'){
    B.innerHTML = `
      <h3 class="sectitle">기기 연결</h3>
      <p class="sechelp">태블릿과 휴대폰이 같은 일정·할 일을 보게 합니다.<br>
        연결되는 정보: 달력 일정, 할 일, 루틴, 시간표, 카드 구성. 날씨와 운세는 기기마다 따로 계산됩니다.</p>
      <div class="linkbox"></div>`;
    renderLinkBox(B.querySelector('.linkbox'));
  }
  else if(setTab === 'help'){
    B.innerHTML = `
      <h3 class="sectitle">도움말 · 문의</h3>
      <p class="sechelp">문제가 생겼거나 있으면 좋겠는 기능이 떠오르면 알려 주세요. 개발자가 직접 읽습니다.</p>

      <div class="fld"><label>어떤 이야기인가요?</label>
        <div class="segbar wide" id="fbKind">
          <button class="on" data-k="bug">오류 제보</button>
          <button data-k="idea">기능 제안</button>
          <button data-k="etc">기타 문의</button>
        </div></div>
      <div class="fld"><label>내용</label>
        <textarea id="fbBody" placeholder="예: 날씨가 계속 안 나와요 / 시험 D-day를 위젯으로 보고 싶어요"></textarea></div>
      <div class="fld"><label>답장 받을 곳 (선택)</label>
        <input id="fbFrom" placeholder="이메일이나 연락처"></div>
      <label class="chk"><input type="checkbox" id="fbDiag" checked>
        <span>기기 정보 함께 보내기 <i class="hint">기종·화면 크기·앱 버전·켜 둔 카드 목록. 개인 일정이나 할 일 내용은 포함되지 않습니다.</i></span></label>
      <div class="lk-btns">
        <button class="btn primary" id="fbSend">메일로 보내기</button>
        <button class="btn" id="fbCopy">내용 복사</button>
      </div>
      <div class="lk-msg" id="fbMsg"></div>

      <h3 class="sectitle" style="margin-top:30px">자주 묻는 것</h3>
      <div class="faq">
        <details><summary>날씨가 안 나와요</summary>
          <p>인터넷 연결을 확인하고 날씨 카드 오른쪽 위를 눌러 다시 불러오세요. 지역이 비어 있으면 설정 → 일반에서 도시를 검색해 지정해 주세요.</p></details>
        <details><summary>휴대폰과 어떻게 연결하나요?</summary>
          <p>설정 → 기기 연결에서 한쪽 기기가 6자리 코드를 만들고, 다른 기기에서 그 코드를 넣으면 됩니다. 일정·할 일·루틴·시간표가 함께 보입니다.</p></details>
        <details><summary>운세는 어떤 기준인가요?</summary>
          <p>생년월일로 절기·일진·십신을 계산하는 사주 명리 방식입니다. 무작위가 아니지만 재미로 보는 참고용 콘텐츠입니다.</p></details>
        <details><summary>내 정보는 어디에 저장되나요?</summary>
          <p>기본적으로 이 기기 안에만 저장됩니다. 기기 연결을 켠 경우에만 본인 공간에 동기화됩니다.</p></details>
      </div>

      <h3 class="sectitle" style="margin-top:30px">정보</h3>
      <p class="sechelp">버전 ${BUILD}<br>
        날씨·대기질 Open-Meteo.com · 경기 데이터 TheSportsDB.com · 뉴스 Google News</p>`;

    let fbKind = 'bug';
    B.querySelector('#fbKind').onclick = e => {
      const btn = e.target.closest('[data-k]'); if(!btn) return;
      fbKind = btn.dataset.k;
      [...btn.parentNode.children].forEach(x => x.classList.toggle('on', x === btn));
    };
    const compose = () => {
      const kindName = { bug:'오류 제보', idea:'기능 제안', etc:'기타 문의' }[fbKind];
      let body = `[${kindName}]\n\n${B.querySelector('#fbBody').value.trim()}\n\n`;
      const from = B.querySelector('#fbFrom').value.trim();
      if(from) body += `답장 받을 곳: ${from}\n`;
      if(B.querySelector('#fbDiag').checked){
        body += `\n--- 기기 정보 ---\n앱 ${BUILD}\n화면 ${innerWidth}x${innerHeight}\n언어 ${lang()}\n`
              + `켜 둔 카드 ${Cards.enabled().map(c => c.id).join(', ')}\n기기 ${navigator.userAgent}\n`;
      }
      return { subject:`[Briefing] ${kindName}`, body };
    };
    B.querySelector('#fbSend').onclick = () => {
      const t = B.querySelector('#fbBody').value.trim();
      if(!t){ B.querySelector('#fbMsg').textContent = '내용을 적어 주세요.'; return; }
      const m = compose();
      location.href = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(m.subject)}&body=${encodeURIComponent(m.body)}`;
      B.querySelector('#fbMsg').textContent = '메일 앱이 열리지 않으면 아래 복사 버튼을 쓰세요.';
    };
    B.querySelector('#fbCopy').onclick = async () => {
      const m = compose();
      try{ await navigator.clipboard.writeText(m.subject + '\n\n' + m.body);
           B.querySelector('#fbMsg').textContent = `복사했습니다. ${FEEDBACK_EMAIL} 로 붙여넣어 보내 주세요.`; }
      catch(e){ B.querySelector('#fbMsg').textContent = FEEDBACK_EMAIL + ' 로 보내 주세요.'; }
    };
  }
  else if(setTab === 'data'){
    const n = EV.all().length, td = (C.todos||[]).length + (C.todosNext||[]).length;
    B.innerHTML = `
      <h3 class="sectitle">저장된 내용</h3>
      <p class="sechelp">모든 정보는 이 기기 안에만 저장됩니다. 서버로 전송되지 않습니다.</p>
      <div class="fld"><span class="hint">일정 ${n}개 · 할 일 ${td}개 · 수면 기록 ${Object.keys(C.sleepHist||{}).length}일</span></div>
      <div style="display:flex;gap:9px;flex-wrap:wrap">
        <button class="btn" id="expBtn">내보내기 (백업)</button>
        <button class="btn" id="impBtn">불러오기</button>
        <button class="btn danger" id="rstBtn">전체 초기화</button>
      </div>
      <input type="file" id="impFile" accept="application/json" hidden>
      <h3 class="sectitle" style="margin-top:26px">출처</h3>
      <p class="sechelp">날씨 · 대기질 데이터 제공: Open-Meteo.com (CC BY 4.0)<br>운세는 사주 명리 계산에 따른 참고용 콘텐츠입니다.</p>`;
    $('expBtn').onclick = () => {
      const blob = new Blob([JSON.stringify(C,null,1)], {type:'application/json'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = `briefing-backup-${today()}.json`; a.click();
    };
    $('impBtn').onclick = () => $('impFile').click();
    $('impFile').onchange = e => {
      const f = e.target.files[0]; if(!f) return;
      const r = new FileReader();
      r.onload = () => { try{ C = Object.assign(JSON.parse(JSON.stringify(DEFAULTS)), JSON.parse(r.result)); save(); location.reload(); }catch(err){ alert('파일을 읽지 못했습니다.'); } };
      r.readAsText(f);
    };
    $('rstBtn').onclick = () => {
      if(!confirm('저장된 일정·할 일·설정이 모두 지워집니다. 계속할까요?')) return;
      C = JSON.parse(JSON.stringify(DEFAULTS)); save(); location.reload();
    };
  }
}

/* 지역 검색 (Open-Meteo 지오코딩, 키 불필요) */
function bindGeo(root){
  const R = root || document;
  const q = R.querySelector('#geoQ'), res = R.querySelector('#geoRes');
  if(!q || !res) return;
  let t = null, myPos = null;

  /* 두 좌표 사이 거리(km) */
  const dist = (a,b,c,d) => {
    const R = 6371, rad = x => x*Math.PI/180;
    const dLat = rad(c-a), dLon = rad(d-b);
    const h = Math.sin(dLat/2)**2 + Math.cos(rad(a))*Math.cos(rad(c))*Math.sin(dLon/2)**2;
    return 2*R*Math.asin(Math.sqrt(h));
  };
  const fmtKm = k => k < 1 ? '바로 여기' : k < 100 ? Math.round(k)+'km' : Math.round(k/10)*10+'km';

  /* 기준 좌표: 기기 위치 > 저장된 지역 */
  const baseLL = () => myPos || [C.lat, C.lon];
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      p => { myPos = [p.coords.latitude, p.coords.longitude]; },
      () => {}, { enableHighAccuracy:false, timeout:8000, maximumAge:600000 });
  }

  async function search(v){
    const url = n => `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(n)}&count=20&language=ko&format=json`;
    let list = [];
    try{ list = ((await (await fetch(url(v))).json()).results) || []; }catch(e){}
    /* 결과가 적으면 '동/구/시'를 붙여 한 번 더 (예: 목동 → 목1동) */
    if(list.length < 3 && !/[동구시군읍면]$/.test(v)){
      for(const suf of ['동','시','구']){
        try{
          const more = ((await (await fetch(url(v+suf))).json()).results) || [];
          list = list.concat(more);
          if(list.length >= 6) break;
        }catch(e){}
      }
    }
    /* 중복 제거 */
    const seen = {};
    list = list.filter(r => { const k = r.latitude.toFixed(3)+','+r.longitude.toFixed(3);
      return seen[k] ? false : (seen[k] = 1); });
    /* 한국 먼저, 그 안에서 가까운 순 */
    const [bx, by] = baseLL();
    list.forEach(r => { r._d = dist(bx, by, r.latitude, r.longitude);
      r._kr = (r.country_code === 'KR' || r.country === '대한민국') ? 0 : 1; });
    list.sort((a,b) => a._kr - b._kr || a._d - b._d);
    return list.slice(0, 8);
  }

  q.addEventListener('input', () => {
    clearTimeout(t);
    const v = q.value.trim();
    if(v.length < 2){ res.innerHTML = ''; return; }
    res.innerHTML = '<span class="hint">찾는 중…</span>';
    t = setTimeout(async () => {
      const list = await search(v);
      res.innerHTML = list.length ? list.map(r => {
        const where = [r.admin2, r.admin1].filter(Boolean).join(' ') || r.country || '';
        return `<button data-lat="${r.latitude}" data-lon="${r.longitude}" data-nm="${esc(r.name)}">
          <b>${esc(r.name)}</b>
          <span class="tiny">${esc(where)}</span>
          <i class="km">${fmtKm(r._d)}</i></button>`;
      }).join('') : '<span class="hint">결과가 없습니다. 가까운 동네나 구 이름으로 검색해 보세요.</span>';
    }, 350);
  });

  res.onclick = e => {
    const btn = e.target.closest('[data-lat]'); if(!btn) return;
    C.place = btn.dataset.nm; C.lat = +btn.dataset.lat; C.lon = +btn.dataset.lon;
    C.wx = null; save();
    const p = R.querySelector('#obPlace'); if(p) p.textContent = C.place;
    if($('setBody') && $('setBody').contains(res)) renderSettings();
    else { res.innerHTML = `<span class="hint">선택: <b>${esc(C.place)}</b></span>`; }
    loadWeather(true);
  };

  const gb = R.querySelector('#geoBtn');
  if(gb) gb.onclick = () => {
    if(!navigator.geolocation) return alert('이 기기에서는 위치를 쓸 수 없어요.');
    gb.textContent = '찾는 중…';
    const ok = p => {
      myPos = [p.coords.latitude, p.coords.longitude];
      C.lat = +p.coords.latitude.toFixed(4); C.lon = +p.coords.longitude.toFixed(4);
      C.wx = null; save();
      gb.textContent = '현재 위치로 맞췄어요';
      const pl = R.querySelector('#obPlace'); if(pl) pl.textContent = C.place || '현재 위치';
      loadWeather(true);
    };
    navigator.geolocation.getCurrentPosition(ok,
      () => navigator.geolocation.getCurrentPosition(ok,
        () => { gb.textContent = '위치를 찾지 못했어요 · 다시 시도'; },
        { enableHighAccuracy:true, timeout:30000, maximumAge:3600000 }),
      { enableHighAccuracy:false, timeout:15000, maximumAge:3600000 });
  };
}

/* ═══════════ 소개 · 시작하기 ═══════════ */
let obStep = 0;
const OB_STEPS = 6;
function renderOnboard(){
  $('obDots').innerHTML = Array.from({length:OB_STEPS}, (_,i) => `<i class="${i<=obStep?'on':''}"></i>`).join('');
  const B = $('obBody');
  const back = $('obBack'), next = $('obNext');
  back.style.visibility = obStep === 0 ? 'hidden' : 'visible';
  next.textContent = obStep === OB_STEPS-1 ? '시작하기' : '다음';

  if(obStep === 0){
    B.innerHTML = `
      <div class="ob-hero">
        <div class="ob-mark"><i></i></div>
        <h2>하루를 한 화면에</h2>
        <p class="lead">아침에 켜면 오늘 필요한 것이, 밤에 켜면 내일 준비할 것이 보여요.<br>
          필요한 카드만 골라서 나만의 화면을 만들 수 있어요.</p>
        <div class="ob-feats">
          <div><b>날씨</b><i>기온 · 미세먼지 · 비 오는 시간</i></div>
          <div><b>달력</b><i>일정 · 수행평가 · D-day</i></div>
          <div><b>할 일</b><i>오늘과 내일을 따로</i></div>
          <div><b>운세</b><i>생년월일로 보는 사주</i></div>
        </div>
      </div>`;
    back.style.visibility = 'hidden';
    next.textContent = '시작하기';
  }
  else if(obStep === 1){
    B.innerHTML = `<h2>어떻게 부를까요?</h2>
      <p class="lead">인사말에만 쓰여요. 비워 둬도 괜찮아요.</p>
      <div class="fld"><label>이름</label><input id="obName" value="${esc(C.name)}" placeholder="예: 태현"></div>`;
  }
  else if(obStep === 2){
    B.innerHTML = `<h2>생년월일</h2>
      <p class="lead">운세를 계산하는 데만 쓰이고, 이 기기 안에만 저장돼요.</p>
      <div class="fld"><label>생년월일 (양력)</label><input id="obBirth" type="date" value="${C.birth}"></div>
      <div class="fld"><label>태어난 시각 (선택)</label><input id="obBTime" type="time" value="${C.birthTime}">
        <span class="hint">알면 더 정확해지고, 몰라도 괜찮아요.</span></div>`;
  }
  else if(obStep === 3){
    B.innerHTML = `<h2>어디에 사세요?</h2>
      <p class="lead">날씨를 가져올 지역이에요.</p>
      <div class="fld"><input id="geoQ" placeholder="도시나 동네 이름 (예: 목동, 대구)">
        <div class="searchres" id="geoRes"></div></div>
      <div class="fld"><span class="hint">지금 선택: <b id="obPlace">${esc(C.place)}</b></span></div>
      <button class="btn" id="geoBtn">현재 위치로 맞추기</button>`;
    bindGeo(B);
  }
  else if(obStep === 4){
    B.innerHTML = `<h2>어떤 카드를 볼까요?</h2>
      <p class="lead">나중에 설정에서 언제든 켜고 끌 수 있어요.</p>
      <div class="pickgrid ob-cards">
        ${Cards.list.filter(c => !c.fixed).map(c => `
          <button class="pick ${Cards.isOn(c.id)?'on':''}" data-c="${c.id}">
            <b>${cardName(c)}${c.tag?` <i class="tag">${c.tag}</i>`:''}</b><i>${cardDesc(c)}</i></button>`).join('')}
      </div>`;
    B.querySelector('.pickgrid').onclick = e => {
      const btn = e.target.closest('[data-c]'); if(!btn) return;
      Cards.toggle(btn.dataset.c);
      btn.classList.toggle('on', Cards.isOn(btn.dataset.c));
    };
  }
  else {
    B.innerHTML = `<h2>다른 기기와 연결</h2>
      <p class="lead">태블릿에서 적은 일정과 할 일을 휴대폰에서도 볼 수 있어요.<br>지금 안 해도 되고, 나중에 설정에서 할 수 있어요.</p>
      <div class="linkbox"></div>`;
    renderLinkBox(B.querySelector('.linkbox'));
  }
}
function obCollect(){
  if($('obName')) C.name = $('obName').value.trim();
  if($('obBirth')) C.birth = $('obBirth').value;
  if($('obBTime')) C.birthTime = $('obBTime').value;
  save();
}

/* ── 기기 연결 UI (온보딩·설정 공용) ──
   같은 화면이 두 곳에 들어가므로 id 대신 클래스를 쓰고 box 안에서만 찾는다 */
function renderLinkBox(box){
  if(!box) return;
  const q = s => box.querySelector(s);
  const linked = C.sync && C.sync.on && C.sync.uid;

  if(linked){
    const url = joinLink(C.sync.code || '');
    box.innerHTML = `
      <div class="lk-done">
        <div class="lk-share">
          ${C.sync.code ? `<div class="lk-qr">${QR.svg(url, 150)}</div>` : ''}
          <div class="lk-qrtxt">
            <span class="lb">연결됨</span>
            <div class="lk-code sm">${esc(C.sync.code || '연결됨')}</div>
            <p class="hint">다른 기기에서 이 QR을 찍거나 코드를 넣으면 같은 내용을 봅니다.</p>
          </div>
        </div>
        <div class="lk-btns">
          <button class="btn lk-sync">지금 맞추기</button>
          <button class="btn danger lk-off">연결 해제</button>
        </div>
        <div class="lk-msg"></div>
      </div>`;
    q('.lk-sync').onclick = async () => {
      q('.lk-msg').textContent = '맞추는 중…';
      await syncPull(true); await syncPush(true);
      q('.lk-msg').textContent = '최신 상태로 맞췄어요.';
      paint();
    };
    q('.lk-off').onclick = () => {
      if(confirm('연결을 해제할까요? 이 기기의 내용은 그대로 남습니다.')){ syncOff(); renderLinkBox(box); }
    };
    return;
  }

  box.innerHTML = `
    <div class="lk-two">
      <button class="lk-card lk-new">
        <b>이 기기가 주 화면이에요</b>
        <i>QR과 연결 코드를 만들어 다른 기기에 보여줍니다</i>
      </button>
      <button class="lk-card lk-join">
        <b>다른 기기에서 코드를 받았어요</b>
        <i>코드를 넣어 같은 내용을 봅니다</i>
      </button>
    </div>
    <div class="lk-panel"></div>`;

  q('.lk-new').onclick = async () => {
    const P = q('.lk-panel');
    P.innerHTML = `<div class="lk-load">코드를 만드는 중…</div>`;
    try{
      const code = await syncCreate();
      const url = joinLink(code);
      P.innerHTML = `
        <div class="lk-done">
          <div class="lk-share">
            <div class="lk-qr">${QR.svg(url, 160)}</div>
            <div class="lk-qrtxt">
              <span class="lb">휴대폰 카메라로 찍으세요</span>
              <div class="lk-code sm">${code}</div>
              <p class="hint">찍으면 바로 연결됩니다.<br>
                카메라가 안 되면 휴대폰에서 <b>설정 → 기기 연결</b>에 이 코드를 넣어도 돼요.</p>
              <button class="btn lk-copy">링크 복사</button>
            </div>
          </div>
        </div>`;
      P.querySelector('.lk-copy').onclick = async ev => {
        try{ await navigator.clipboard.writeText(url); ev.target.textContent = '복사했어요'; }
        catch(e){ ev.target.textContent = url; }
      };
    }catch(e){
      P.innerHTML = `<div class="lk-err">${esc(e.message || '연결을 준비하지 못했습니다')}<br>
        <span class="hint">인터넷 연결을 확인하고 다시 시도해 주세요.</span></div>`;
    }
  };

  q('.lk-join').onclick = () => {
    const P = q('.lk-panel');
    P.innerHTML = `
      <div class="fld"><label>연결 코드 6자리</label>
        <input class="lk-input lk-in" maxlength="6" placeholder="ABC123" autocapitalize="characters"></div>
      <button class="btn primary lk-go">연결하기</button>
      <div class="lk-msg"></div>`;
    const go = async () => {
      const v = P.querySelector('.lk-in').value.trim();
      if(v.length < 6){ P.querySelector('.lk-msg').textContent = '6자리를 모두 넣어 주세요.'; return; }
      P.querySelector('.lk-msg').textContent = '연결하는 중…';
      try{ await syncJoin(v); renderLinkBox(box); build(); paint(); }
      catch(e){ P.querySelector('.lk-msg').textContent = e.message || '연결에 실패했습니다'; }
    };
    P.querySelector('.lk-go').onclick = go;
    P.querySelector('.lk-in').addEventListener('keydown', e => { if(e.key === 'Enter') go(); });
    P.querySelector('.lk-in').focus();
  };
}

/* ═══════════ 부팅 ═══════════ */
/* 링크·QR로 들어온 경우: ?join=코드 */
async function handleJoinLink(){
  const m = location.search.match(/[?&]join=([A-Za-z0-9]{6})/);
  if(!m) return false;
  const code = m[1].toUpperCase();
  history.replaceState(null, '', location.pathname);
  $('onboard').classList.remove('show');
  const box = $('joinAuto');
  box.innerHTML = `<div class="mbox ob"><div class="ob-hero">
      <div class="ob-mark"><i></i></div>
      <h2>기기 연결 중</h2>
      <p class="lead">코드 <b>${code}</b> 로 연결하고 있어요…</p>
      <div class="lk-msg" id="jaMsg"></div>
    </div></div>`;
  box.classList.add('show');
  try{
    await syncJoin(code);
    C.onboarded = true; save();
    box.querySelector('h2').textContent = '연결됐어요';
    box.querySelector('.lead').innerHTML = '이제 두 기기가 같은 일정과 할 일을 봅니다.';
    setTimeout(() => { box.classList.remove('show'); build(); paint(); }, 1400);
  }catch(e){
    box.querySelector('h2').textContent = '연결하지 못했어요';
    box.querySelector('.lead').textContent = e.message || '코드를 다시 확인해 주세요.';
    box.querySelector('#jaMsg').innerHTML = `<button class="btn primary" onclick="document.getElementById('joinAuto').classList.remove('show')">닫기</button>`;
  }
  return true;
}

async function boot(){
  const saved = await Store.load();
  if(saved) C = Object.assign(JSON.parse(JSON.stringify(DEFAULTS)), saved);
  if(!C.cardOff.length && !C.cardOrder.length){
    C.cardOff = Cards.list.filter(c => c.def === false).map(c => c.id);   // 기본 꺼짐 카드
  }
  if(!C.lang) C.lang = detectLang();
  rollover();
  addEventListener('resize', fit);
  fit(); build(); paint();
  loadWeather(false);
  loadGames(false);
  loadNews(false);

  const joined = await handleJoinLink();
  if(!C.onboarded && !joined){ obStep = 0; renderOnboard(); $('onboard').classList.add('show'); }

  setInterval(() => {
    now = new Date();
    if(modeOverride){
      const natural = (now.getHours() >= 18 || now.getHours() < 5) ? 'night' : 'day';
      if(overrideBase && natural !== overrideBase){ modeOverride = null; overrideBase = null; }
    }
    paintHeader();
    if(now.getSeconds() === 0) paint();
    if(now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() < 2){ rollover(); paint(); }
  }, 1000);
  setInterval(() => loadWeather(false), 15*60*1000);
  setInterval(() => loadGames(false), 60*60*1000);
  setInterval(() => loadNews(false), 60*60*1000);
  setInterval(() => { if(syncReady()) syncPull(); }, 45000);

  try{ if('wakeLock' in navigator) await navigator.wakeLock.request('screen'); }catch(e){}
  if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js', {updateViaCache:'none'}).catch(()=>{});
}

/* 이벤트 바인딩 */
$('setBtn').onclick = () => openSettings();
$('setClose').onclick = closeSettings;
document.querySelector('.setnav').onclick = e => {
  const b = e.target.closest('[data-tab]'); if(!b) return;
  saveSettingsInputs();
  setTab = b.dataset.tab;
  [...b.parentNode.querySelectorAll('[data-tab]')].forEach(x => x.classList.toggle('on', x === b));
  renderSettings();
};
$('modeBtn').onclick = () => {
  overrideBase = (now.getHours() >= 18 || now.getHours() < 5) ? 'night' : 'day';
  modeOverride = isNight() ? 'day' : 'night';
  paint();
};
$('allBtn').onclick = () => {
  const on = document.body.classList.toggle('showall');
  C.phoneAll = on; save();
  $('allBtn').textContent = on ? '간단히 보기' : '전체 보기';
  build(); paint(); scrollTo({top:0, behavior:'smooth'});
};
$('evSave').onclick = saveEvent;
$('evCancel').onclick = closeEvent;
$('evClose').onclick = closeEvent;
$('evDelete').onclick = () => { if(editingId && confirm('이 일정을 삭제할까요?')){ EV.remove(editingId); closeEvent(); paint(); } };
$('obNext').onclick = () => {
  obCollect();
  if(obStep < OB_STEPS-1){ obStep++; renderOnboard(); }
  else { C.onboarded = true; save(); $('onboard').classList.remove('show'); build(); paint(); loadWeather(true); }
};
$('obBack').onclick = () => { obCollect(); if(obStep > 0){ obStep--; renderOnboard(); } };
document.addEventListener('keydown', e => {
  if(e.key !== 'Escape') return;
  if($('evEdit').classList.contains('show')) closeEvent();
  else if($('settings').classList.contains('show')) closeSettings();
});

try{ new Function('let a=1?.x; let b=1??2;'); }catch(e){ $('oldBrowser').style.display = 'block'; }
boot();
