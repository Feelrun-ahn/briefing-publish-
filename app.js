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
    today:'오늘', tomorrow:'내일', noItems:'항목이 없습니다',
    wxPm10:'미세먼지', wxPm25:'초미세먼지', wxRain:'강수확률', wxHum:'습도', wxUv:'자외선',
    wxSunrise:'일출', wxSunset:'일몰', uvVeryHigh:'매우높음', uvHigh:'높음', uvMid:'보통',
    wxLo:'최저', wxHi:'최고', wxLoHi:'최저 / 최고', wxTomorrow:'내일', wxNoData:'날씨 정보 없음',
    wxFail:'날씨를 불러오지 못했습니다. 인터넷 연결을 확인하고 오른쪽 위를 눌러 주세요.',
    wxRetry:'다시 시도', wxRefresh:'눌러서 새로고침', wxFeels:'체감',
    tdToday:'오늘', tdAll:'전체', tdDone:'완료', tdPlaceholder:'할 일을 적어 보세요',
    tdHintDate:'달력 아이콘을 누르면 날짜와 시각을 정할 수 있어요',
    tdSetOn:'{d}에 할 일', tdWillNotify:'알림 옴',
    tdEmptyToday:'오늘 할 일이 없습니다. 위에 적어 보세요.',
    tdEmptyAll:'할 일이 없습니다.', tdEmptyDone:'완료한 일이 없습니다.',
    tdLeft:'남은 일 {n}', tdLate:'{n}일 지남', tdTomorrow:'내일',
    calTitle:'달력', calToday:'오늘', calAdd:'+ 일정', calEmpty:'일정이 없습니다. + 버튼으로 추가하세요.',
    calAllDay:'종일', calRepeat:'반복',
    ddayHint:'달력에서 D-day를 추가해 보세요',
    quoteLab:'오늘의 한마디', foLabToday:'오늘의 운세', foLabTomorrow:'내일의 운세',
    newsLab:'뉴스 브리핑', newsFail:'헤드라인을 불러오지 못했습니다', newsTap:'눌러서 불러오기',
    sleepLab:'수면 점수', habitLab:'매일 루틴', waterLab:'물 마시기', ttLab:'오늘 시간표',
    examLab:'수행평가 알리미', bbLab:'야구',
    setTitle:'설정', close:'닫기',
    advHot:'반팔에 얇은 셔츠 한 장이면 충분합니다.', advWarm:'반팔, 저녁에는 가디건 한 장.',
    advMild:'긴팔 셔츠가 적당합니다.', advCool:'재킷은 꼭 챙기세요.', advCold:'코트와 목도리가 필요합니다.',
    advRainAt:'{r}에 비, 우산을 챙기세요.', advRain:'우산을 챙기세요.',
    dowSun:'일', dowMon:'월', dowTue:'화', dowWed:'수', dowThu:'목', dowFri:'금', dowSat:'토',
    dateFull:'{m}월 {d}일 {w}요일', ymLabel:'{y}년 {m}월', dayOfWeek:'{w}요일',
    ampmAM:'AM', ampmPM:'PM', wxPlace:'내 지역',
    tdDate:'날짜', tdTime:'시각', tdClear:'지우기',
    ddayLabel:'D-day', quoteTapHint:'',
    wClear:'맑음', wPartly:'구름 조금', wCloud:'흐림', wFog:'안개', wDrizzle:'이슬비',
    wRain:'비', wSnow:'눈', wShower:'소나기', wThunder:'천둥번개',
    aqGood:'좋음', aqMid:'보통', aqBad:'나쁨', aqWorst:'매우나쁨',
    wClear:'맑음', wPartly:'구름 조금', wCloud:'흐림', wFog:'안개', wDrizzle:'이슬비',
    wRain:'비', wSnow:'눈', wShower:'소나기', wThunder:'천둥번개',
    aqGood:'좋음', aqMid:'보통', aqBad:'나쁨', aqWorst:'매우나쁨'
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
    today:'Today', tomorrow:'Tomorrow', noItems:'Nothing here yet',
    wxPm10:'PM10', wxPm25:'PM2.5', wxRain:'Rain', wxHum:'Humidity', wxUv:'UV',
    wxSunrise:'Sunrise', wxSunset:'Sunset', uvVeryHigh:'very high', uvHigh:'high', uvMid:'moderate',
    wxLo:'Low', wxHi:'High', wxLoHi:'Low / High', wxTomorrow:'Tomorrow', wxNoData:'No forecast',
    wxFail:'Could not load the weather. Check your connection and tap the top right.',
    wxRetry:'Try again', wxRefresh:'tap to refresh', wxFeels:'Feels like',
    tdToday:'Today', tdAll:'All', tdDone:'Done', tdPlaceholder:'What needs doing?',
    tdHintDate:'Tap the calendar icon to set a date and time',
    tdSetOn:'Due {d}', tdWillNotify:'you\u2019ll be reminded',
    tdEmptyToday:'Nothing for today. Add something above.',
    tdEmptyAll:'No to-dos yet.', tdEmptyDone:'Nothing completed yet.',
    tdLeft:'{n} left', tdLate:'{n} days late', tdTomorrow:'Tomorrow',
    calTitle:'Calendar', calToday:'Today', calAdd:'+ Event', calEmpty:'Nothing planned. Tap + to add.',
    calAllDay:'All day', calRepeat:'repeats',
    ddayHint:'Add a D-day from the calendar',
    quoteLab:'Quote of the day', foLabToday:'Today\u2019s fortune', foLabTomorrow:'Tomorrow\u2019s fortune',
    newsLab:'News briefing', newsFail:'Could not load headlines', newsTap:'tap to load',
    sleepLab:'Sleep score', habitLab:'Daily habits', waterLab:'Water', ttLab:'Today\u2019s classes',
    examLab:'Assignments', bbLab:'Baseball',
    setTitle:'Settings', close:'Close',
    advHot:'A T-shirt is plenty today.', advWarm:'T-shirt, with a cardigan for the evening.',
    advMild:'A long-sleeve shirt works well.', advCool:'Bring a jacket.', advCold:'You will want a coat and scarf.',
    advRainAt:'Rain around {r} — take an umbrella.', advRain:'Take an umbrella.',
    dowSun:'Sun', dowMon:'Mon', dowTue:'Tue', dowWed:'Wed', dowThu:'Thu', dowFri:'Fri', dowSat:'Sat',
    dateFull:'{w}, {m}/{d}', ymLabel:'{m} {y}', dayOfWeek:'{w}',
    ampmAM:'AM', ampmPM:'PM', wxPlace:'My area',
    tdDate:'Date', tdTime:'Time', tdClear:'Clear',
    ddayLabel:'D-day', quoteTapHint:'',
    wClear:'Clear', wPartly:'Partly cloudy', wCloud:'Cloudy', wFog:'Fog', wDrizzle:'Drizzle',
    wRain:'Rain', wSnow:'Snow', wShower:'Showers', wThunder:'Thunderstorm',
    aqGood:'good', aqMid:'moderate', aqBad:'bad', aqWorst:'very bad'
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
    today:'今日', tomorrow:'明日', noItems:'項目がありません',
    wxPm10:'PM10', wxPm25:'PM2.5', wxRain:'降水確率', wxHum:'湿度', wxUv:'紫外線',
    wxSunrise:'日の出', wxSunset:'日の入り', uvVeryHigh:'非常に強い', uvHigh:'強い', uvMid:'普通',
    wxLo:'最低', wxHi:'最高', wxLoHi:'最低 / 最高', wxTomorrow:'明日', wxNoData:'予報がありません',
    wxFail:'天気を取得できませんでした。通信環境を確認して右上を押してください。',
    wxRetry:'再試行', wxRefresh:'押して更新', wxFeels:'体感',
    tdToday:'今日', tdAll:'すべて', tdDone:'完了', tdPlaceholder:'やることを書いてください',
    tdHintDate:'カレンダーのアイコンで日付と時刻を設定できます',
    tdSetOn:'{d} の予定', tdWillNotify:'通知します',
    tdEmptyToday:'今日のやることはありません。上に書いてみましょう。',
    tdEmptyAll:'やることがありません。', tdEmptyDone:'完了した項目はありません。',
    tdLeft:'残り {n}', tdLate:'{n}日 過ぎました', tdTomorrow:'明日',
    calTitle:'カレンダー', calToday:'今日', calAdd:'+ 予定', calEmpty:'予定がありません。+ で追加します。',
    calAllDay:'終日', calRepeat:'繰り返し',
    ddayHint:'カレンダーから Dデーを追加できます',
    quoteLab:'今日の一言', foLabToday:'今日の運勢', foLabTomorrow:'明日の運勢',
    newsLab:'ニュース', newsFail:'見出しを取得できませんでした', newsTap:'押して読み込み',
    sleepLab:'睡眠スコア', habitLab:'毎日の習慣', waterLab:'水を飲む', ttLab:'今日の時間割',
    examLab:'課題', bbLab:'野球',
    setTitle:'設定', close:'閉じる',
    advHot:'半袖一枚で十分です。', advWarm:'半袖に、夜はカーディガンを。',
    advMild:'長袖シャツがちょうどいいです。', advCool:'上着を持って出ましょう。', advCold:'コートとマフラーが必要です。',
    advRainAt:'{r} に雨。傘を持って行きましょう。', advRain:'傘を持って行きましょう。',
    dowSun:'日', dowMon:'月', dowTue:'火', dowWed:'水', dowThu:'木', dowFri:'金', dowSat:'土',
    dateFull:'{m}月{d}日（{w}）', ymLabel:'{y}年{m}月', dayOfWeek:'{w}曜日',
    ampmAM:'AM', ampmPM:'PM', wxPlace:'現在地',
    tdDate:'日付', tdTime:'時刻', tdClear:'消す',
    ddayLabel:'Dデー', quoteTapHint:'',
    wClear:'晴れ', wPartly:'晴れ時々曇り', wCloud:'曇り', wFog:'霧', wDrizzle:'霧雨',
    wRain:'雨', wSnow:'雪', wShower:'にわか雨', wThunder:'雷雨',
    aqGood:'良い', aqMid:'普通', aqBad:'悪い', aqWorst:'非常に悪い'
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
    today:'今天', tomorrow:'明天', noItems:'暂无内容',
    wxPm10:'PM10', wxPm25:'PM2.5', wxRain:'降水概率', wxHum:'湿度', wxUv:'紫外线',
    wxSunrise:'日出', wxSunset:'日落', uvVeryHigh:'很强', uvHigh:'强', uvMid:'中等',
    wxLo:'最低', wxHi:'最高', wxLoHi:'最低 / 最高', wxTomorrow:'明天', wxNoData:'暂无预报',
    wxFail:'无法获取天气。请检查网络后点击右上角。',
    wxRetry:'重试', wxRefresh:'点击刷新', wxFeels:'体感',
    tdToday:'今天', tdAll:'全部', tdDone:'已完成', tdPlaceholder:'写下要做的事',
    tdHintDate:'点击日历图标可设置日期和时间',
    tdSetOn:'{d} 到期', tdWillNotify:'会提醒你',
    tdEmptyToday:'今天没有待办。在上面添加吧。',
    tdEmptyAll:'还没有待办。', tdEmptyDone:'还没有完成的事项。',
    tdLeft:'剩余 {n}', tdLate:'已过 {n} 天', tdTomorrow:'明天',
    calTitle:'日历', calToday:'今天', calAdd:'+ 日程', calEmpty:'暂无日程。点击 + 添加。',
    calAllDay:'全天', calRepeat:'重复',
    ddayHint:'可在日历中添加倒数日',
    quoteLab:'每日一句', foLabToday:'今日运势', foLabTomorrow:'明日运势',
    newsLab:'新闻简报', newsFail:'无法获取标题', newsTap:'点击加载',
    sleepLab:'睡眠评分', habitLab:'每日习惯', waterLab:'喝水', ttLab:'今日课表',
    examLab:'作业提醒', bbLab:'棒球',
    setTitle:'设置', close:'关闭',
    advHot:'短袖就够了。', advWarm:'短袖，晚上带件开衫。',
    advMild:'长袖衬衫刚刚好。', advCool:'记得带外套。', advCold:'需要大衣和围巾。',
    advRainAt:'{r} 有雨，记得带伞。', advRain:'记得带伞。',
    dowSun:'日', dowMon:'一', dowTue:'二', dowWed:'三', dowThu:'四', dowFri:'五', dowSat:'六',
    dateFull:'{m}月{d}日 周{w}', ymLabel:'{y}年{m}月', dayOfWeek:'周{w}',
    ampmAM:'上午', ampmPM:'下午', wxPlace:'我的位置',
    tdDate:'日期', tdTime:'时间', tdClear:'清除',
    ddayLabel:'倒数日', quoteTapHint:'',
    wClear:'晴', wPartly:'多云转晴', wCloud:'阴', wFog:'雾', wDrizzle:'小雨',
    wRain:'雨', wSnow:'雪', wShower:'阵雨', wThunder:'雷雨',
    aqGood:'优', aqMid:'良', aqBad:'差', aqWorst:'很差'
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
       countdown:['Big D-day','The nearest D-day, large'],
       whitenoise:['Sleep sounds','White noise, rain and waves with a timer'] },
  ja:{ clock:['時計・日付','時刻と直近のDデー'], weather:['天気','気温・大気質・時間別・明日'],
       calendar:['カレンダー','予定・課題・Dデー'], todo:['やること','今日と明日を分けて'],
       exam:['課題','カレンダーの課題をまとめて'], baseball:['野球','応援チームの試合と結果'],
       news:['ニュース','分野ごとに1本'], fortune:['今日の運勢','生年月日から四柱推命（娯楽用）'],
       sleep:['睡眠スコア','ウォッチの点数と7日間の推移'], quote:['今日の一言','朝と夜で変わります'],
       habit:['毎日の習慣','チェックと連続日数'], water:['水を飲む','1日の目標杯数'],
       timetable:['時間割','今日の分だけ表示'], countdown:['大きなDデー','一番近いDデーを大きく'],
       whitenoise:['睡眠サウンド','ホワイトノイズ・雨・波'] },
  zh:{ clock:['时钟 · 日期','时间、日期与最近的倒数日'], weather:['天气','气温、空气质量、逐时与明天'],
       calendar:['日历','日程、作业与倒数日'], todo:['待办','今天与明天分开'],
       exam:['作业提醒','汇总日历中的作业'], baseball:['棒球','球队今日比赛与近期战绩'],
       news:['新闻简报','每个分类一条'], fortune:['今日运势','根据生日的四柱推算（娱乐向）'],
       sleep:['睡眠评分','记录手表评分与7天趋势'], quote:['每日一句','早晚各不同'],
       habit:['每日习惯','打卡与连续天数'], water:['喝水','完成每日杯数目标'],
       timetable:['今日课表','只显示今天'], countdown:['大倒数日','最近的倒数日'],
       whitenoise:['助眠音','白噪音·雨声·海浪'] }
};
function lang(){ return (C && C.lang) || 'ko'; }
function T(k, vars){
  let s = (I18N[lang()] && I18N[lang()][k]) || I18N.ko[k] || k;
  if(vars) for(const v in vars) s = s.replace('{'+v+'}', vars[v]);
  return s;
}
/* 소개 화면은 한국어로 고정되어 있어, 그 화면에서는 카드 이름도 한국어로 맞춘다 */
function inOnboard(){ return !!document.getElementById('briefApp'); }
function cardName(c){
  if(inOnboard()) return c.name;
  const m = CARD_I18N[lang()] && CARD_I18N[lang()][c.id];
  return m ? m[0] : c.name;
}
function cardDesc(c){
  if(inOnboard()) return c.desc || '';
  const m = CARD_I18N[lang()] && CARD_I18N[lang()][c.id];
  return m ? m[1] : (c.desc || '');
}
/* 첫 실행 언어
   앱의 소개 화면·운세·명언이 한국어로 되어 있어 한국어로 시작한다.
   기기가 일본어·중국어면 그쪽으로 맞추고, 언제든 설정에서 바꿀 수 있다. */
function detectLang(){
  const list = (navigator.languages && navigator.languages.length)
    ? navigator.languages : [navigator.language || 'ko'];
  let other = '';
  for(const raw of list){
    const l = String(raw).slice(0,2).toLowerCase();
    if(l === 'ko') return 'ko';
    if(!other && (l === 'ja' || l === 'zh')) other = l;
  }
  return other || 'ko';
}


/* 언어에 맞는 요일 이름 */
function dows(){ return [T('dowSun'),T('dowMon'),T('dowTue'),T('dowWed'),T('dowThu'),T('dowFri'),T('dowSat')]; }
/* 언어에 맞는 날짜 표기 */
function dateLabel(d){
  const w = dows()[d.getDay()];
  const M = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  if(lang() === 'en') return `${w}, ${M[d.getMonth()].slice(0,3)} ${d.getDate()}`;
  return T('dateFull', { m: d.getMonth()+1, d: d.getDate(), w });
}
function ymLabel(y, m){
  const M = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  if(lang() === 'en') return `${M[m]} ${y}`;
  return T('ymLabel', { y, m: m+1 });
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
  useWake:true, useOut:true, useBed:true,
  cardOrder:[], cardOff:[], cardCol:{}, layoutMode:'auto',
  events:[],   // {id,title,date,time,memo,type:'event'|'todo'|'exam'|'dday',repeat,done,anyday}
  todoMigrated:false,
  todos:[], todosNext:[],
  sleep:null, sleepHist:{},
  teamId:'', sdbKey:'', games:[], gamesAt:0, gamesErr:null,
  news:null, newsAt:0, newsTopics:['NATION','WORLD','SCIENCE'],
  habits:[], habitLog:{}, waterGoal:8, waterLog:{}, timetable:{},
  nzMin:30, nzVol:45, seenSplash:false,
  school:null, neisKey:'', ttCache:null,
  notifyOn:false, notifyDaily:'08:00', notifyPre:'21:00', notifyLead:10,
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
/* 하루의 기준
   - 취침 무렵(목표 취침 2시간 전, 최소 18시)부터 자정까지는 '내일' 정보를 본다
   - 자정을 넘기면 그 '내일'이 곧 오늘이므로 다시 오늘 정보를 본다
   - 아침·낮에는 언제나 오늘 */
function dayOff(){
  if(!isNight()) return 0;
  const h = now.getHours();
  if(h < 5) return 0;
  if(C.useBed === false) return h >= 21 ? 1 : 0;      // 취침 시각을 안 쓰면 21시 기준
  const bedM = mins(C.bed || '23:00');
  const start = Math.max(18*60, (bedM >= 300 ? bedM : bedM + 1440) - 120);
  return (h*60 + now.getMinutes()) >= start ? 1 : 0;
}
/* 지금 기준이 되는 날짜 */
const baseDate = () => dayOff() ? new Date(now.getTime() + 86400000) : now;
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
  /* 폴드처럼 정사각형에 가까운 화면은 2열이 더 자연스럽다 */
  const ratio = innerWidth / Math.max(1, innerHeight);
  const nCol = phone ? 1 : (ratio < 1.15 ? 2 : 3);
  grid.style.gridTemplateColumns = `repeat(${nCol},1fr)`;

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
    setTimeout(() => art.classList.add('settled'), 700 + idx*40);
  });
  cols.forEach(c => grid.appendChild(c.node));
  if(!phone) requestAnimationFrame(fitStage);
}

function paint(){
  applyTheme();
  Cards.enabled().forEach(c => { if(c._el && c.render) { try{ c.render(c._el); }catch(e){ console.warn(c.id, e); } } });
  paintHeader();
  if(!document.body.classList.contains('phone')) requestAnimationFrame(fitStage);
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
  const useBed = C.useBed !== false, useOut = C.useOut !== false;
  let txt = '';
  if(night && useBed)
    txt = (h < 5 ? T('bedPast',{t:C.bed}) : toBed <= 240 ? T('bedIn',{t:C.bed,d:fmt(toBed)}) : T('bedGoal',{t:C.bed}));
  else if(!night && useOut)
    txt = (toOut > 0 ? T('outIn',{t:C.out,d:fmt(toOut)}) : T('outPast',{t:C.out}));
  $('countdown').textContent = txt;
  $('countdown').hidden = !txt;
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
    $('stage').style.height = '';
  } else {
    document.body.classList.remove('showall');
    fitStage();
  }
  if(was !== phone) build();
}
/* 카드가 많아 한 화면을 넘치면 무대를 키우고 그만큼 축소해 전부 보이게 한다 */
function fitStage(){
  const st = $('stage');
  if(!st || document.body.classList.contains('phone')) return;

  /* ① 카드 수에 따라 밀도를 먼저 낮춘다 (내용을 줄여 잘림을 막음) */
  const n = Cards.enabled().length;
  const dens = n >= 12 ? 'tight' : n >= 9 ? 'compact' : '';
  document.body.dataset.density = dens;

  st.style.transform = 'none';
  st.style.height = '900px';

  /* ② 그래도 넘치면 무대를 늘리고 그만큼 축소 (글씨가 너무 작아지지 않게 한계를 둔다) */
  const cols = [...document.querySelectorAll('main > .col')];
  const need = cols.reduce((m, c) => Math.max(m, c.scrollHeight), 0);
  const view = cols.length ? cols[0].clientHeight : 0;
  const MAXH = 1500;
  let H = 900;
  if(need > view + 4) H = Math.min(MAXH, 900 + (need - view) + 4);
  st.style.height = H + 'px';
  st.style.transform = `scale(${Math.min(innerWidth/1440, innerHeight/H)})`;

  /* ③ 최대 높이로도 모자라면 각 열을 스크롤 가능하게 하고 안내를 띄운다 */
  requestAnimationFrame(() => {
    let over = false;
    cols.forEach(col => {
      const o = col.scrollHeight > col.clientHeight + 6;
      col.classList.toggle('over', o);
      if(o) over = true;
    });
    document.body.classList.toggle('cards-overflow', over);
  });
}

/* ── 일정 헬퍼 (캘린더·수행평가·D-day 공용) ── */
const EV = {
  all(){ return (C.events||[]); },
  /* 반복 일정을 실제 날짜로 펼침 */
  onDate(dateStr){
    const d = new Date(dateStr+'T00:00:00');
    return this.all().filter(e => {
      if(e.done) return false;
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
  { id:'todo',  name:'할 일',   color:'#7fa8e8' },
  { id:'exam',  name:'수행평가', color:'var(--violetRaw)' },
  { id:'dday',  name:'D-day',   color:'var(--amber)' }
];
const evColor = t => (EV_TYPES.find(x => x.id === t) || EV_TYPES[0]).color;

/* ── 자정 넘어가면 정리 ── */
/* 예전 버전의 할 일 목록을 일정으로 옮긴다 (한 번만) */
function migrateTodos(){
  if(C.todoMigrated) return;
  const t = today(), tm = ymd(new Date(Date.now()+86400000));
  (C.todos||[]).forEach(x => EV.add({ title:x.text, type:'todo', date:t, anyday:true, done:!!x.done }));
  (C.todosNext||[]).forEach(x => EV.add({ title:x.text, type:'todo', date:tm, done:!!x.done }));
  C.todos = []; C.todosNext = []; C.todoMigrated = true; save();
}
function rollover(){
  const t = today();
  if(C.day !== t){
    C.day = t;
    if(!(C.sleepHist||{})[t]) C.sleep = null;
    save();
  }
}


/* ══════ js/notify.js ══════ */

/* ═══════════ 알림 ═══════════
   기기 안에서 예약합니다(서버 없음). 앱이 열려 있거나 백그라운드에 살아 있을 때 울립니다.
   Capacitor로 감싸면 앱이 꺼져 있어도 울리도록 로컬 알림 플러그인으로 교체 예정. */
const Notify = {
  fired: {},                       // 같은 알림을 두 번 울리지 않도록
  async ask(){
    if(!('Notification' in window)) return 'unsupported';
    if(Notification.permission === 'granted') return 'granted';
    if(Notification.permission === 'denied') return 'denied';
    try{ return await Notification.requestPermission(); }catch(e){ return 'denied'; }
  },
  can(){ return ('Notification' in window) && Notification.permission === 'granted'; },
  show(title, body, tag){
    if(!this.can()) return;
    try{
      if(navigator.serviceWorker && navigator.serviceWorker.ready){
        navigator.serviceWorker.ready.then(r => r.showNotification(title, {
          body, tag, icon:'icon-192.png', badge:'icon-192.png', vibrate:[200,100,200]
        })).catch(() => new Notification(title, { body, tag, icon:'icon-192.png' }));
      } else new Notification(title, { body, tag, icon:'icon-192.png' });
    }catch(e){}
  },
  /* 1분마다 호출 — 오늘 할 일·일정 중 알림 시각이 된 것을 찾아 울린다 */
  tick(){
    if(!C.notifyOn || !this.can()) return;
    const t = today(), nowM = now.getHours()*60 + now.getMinutes();
    this.fired = this.fired[t] ? this.fired : { [t]: {} };
    const done = this.fired[t] = this.fired[t] || {};

    /* ① 시각이 정해진 일정·할 일 — 설정한 분 전에 */
    const lead = +(C.notifyLead || 10);
    EV.onDate(t).forEach(e => {
      if(!e.time || e.notify === false) return;
      const at = mins(e.time) - lead;
      const key = 'ev:' + e.id;
      if(done[key] || nowM < at || nowM > at + 3) return;
      done[key] = 1;
      const label = e.type === 'todo' ? '할 일' : e.type === 'exam' ? '수행평가' : '일정';
      this.show(`${label} · ${e.time}`, e.title + (lead ? ` (${lead}분 뒤)` : ''), key);
    });

    /* ② 시각이 없는 오늘 항목 — 아침 알림 시각에 한 번 모아서 */
    const dm = mins(C.notifyDaily || '08:00');
    if(!done['daily'] && nowM >= dm && nowM <= dm + 3){
      done['daily'] = 1;
      const list = EV.onDate(t).filter(e => !e.time);
      const exam = EV.upcoming('exam', 3).filter(e => dleft(e.date) <= 3);
      const parts = [];
      if(list.length) parts.push(list.slice(0,3).map(e => e.title).join(', ') + (list.length>3?` 외 ${list.length-3}건`:''));
      if(exam.length) parts.push(exam.map(e => `${e.title} ${dtxt(dleft(e.date))}`).join(', '));
      if(parts.length) this.show('오늘 할 일', parts.join(' · '), 'daily');
    }

    /* ③ 하루 전 알림 (수행평가·중요 일정) */
    if(!done['pre'] && nowM >= mins(C.notifyPre || '21:00') && nowM <= mins(C.notifyPre || '21:00') + 3){
      done['pre'] = 1;
      const tm = ymd(new Date(now.getTime() + 86400000));
      const list = EV.onDate(tm);
      if(list.length) this.show('내일 준비',
        list.slice(0,3).map(e => (e.time ? e.time+' ' : '') + e.title).join(', ')
        + (list.length>3 ? ` 외 ${list.length-3}건` : ''), 'pre');
    }
  }
};


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

/* ═══════════ 오류 제보 ═══════════
   Firestore의 reports 컬렉션에 남깁니다. 관리자 페이지(admin.html)에서 확인합니다. */
async function sendReport(body){
  if(!SYNC_CFG.project || !SYNC_CFG.apiKey) return false;
  try{
    if(!C.sync || !C.sync.uid || !C.sync.refresh) await anonLogin();
    const H = await authHeaders();
    const f = {
      kind:      { stringValue: body.kind || 'etc' },
      text:      { stringValue: (body.text || '').slice(0, 4000) },
      from:      { stringValue: (body.from || '').slice(0, 200) },
      diag:      { stringValue: body.diag ? JSON.stringify(body.diag).slice(0, 2000) : '' },
      at:        { integerValue: String(body.at || Date.now()) },
      uid:       { stringValue: (C.sync && C.sync.uid) || '' },
      done:      { booleanValue: false }
    };
    const r = await fetch(fsUrl('reports'), { method:'POST', headers:H, body: JSON.stringify({ fields:f }) });
    return r.ok;
  }catch(e){ return false; }
}


/* ══════ js/neis.js ══════ */

/* ═══════════ 나이스(NEIS) 교육정보 개방 포털 ═══════════
   학교 검색: schoolInfo · 중학교 시간표: misTimetable
   (초등 elsTimetable · 고등 hisTimetable 도 같은 방식)
   인증키는 open.neis.go.kr 에서 무료로 발급받아 설정에 넣습니다. */
const NEIS_BASE = 'https://open.neis.go.kr/hub/';
const NEIS_PROXIES = [
  u => u,
  u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u),
  u => 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(u),
  u => 'https://corsproxy.io/?' + encodeURIComponent(u)
];
/* 학교급에 따라 서비스 이름이 다르다 */
const NEIS_SVC = { els:'elsTimetable', mis:'misTimetable', his:'hisTimetable' };

async function neisFetch(path){
  const url = NEIS_BASE + path;
  let lastErr = '';
  for(const p of NEIS_PROXIES){
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), 11000);
    try{
      const r = await fetch(p(url), { signal: ac.signal });
      clearTimeout(to);
      if(!r.ok){ lastErr = 'HTTP ' + r.status; continue; }
      const txt = await r.text();
      let j = null;
      try{ j = JSON.parse(txt); }
      catch(e){
        const s = txt.indexOf('{'), e2 = txt.lastIndexOf('}');
        if(s >= 0 && e2 > s){ try{ j = JSON.parse(txt.slice(s, e2+1)); }catch(e3){} }
      }
      if(!j){ lastErr = '응답을 읽지 못했습니다'; continue; }
      /* 나이스는 결과가 없을 때도 200으로 코드만 담아 보낸다 */
      if(j.RESULT && j.RESULT.CODE && j.RESULT.CODE !== 'INFO-000'){
        return { err: neisMsg(j.RESULT.CODE, j.RESULT.MESSAGE) };
      }
      return { data: j };
    }catch(e){ clearTimeout(to); lastErr = '연결 실패'; }
  }
  return { err: lastErr || '연결 실패' };
}
function neisMsg(code, msg){
  if(code === 'INFO-200') return '해당 조건의 자료가 없습니다';
  if(code === 'ERROR-290' || code === 'ERROR-300') return '인증키가 올바르지 않습니다';
  if(code === 'ERROR-337') return '오늘 요청 한도를 넘었습니다';
  return msg || code;
}
function neisKey(){ return (C.neisKey || '').trim(); }
function neisRows(j, svc){
  const arr = j && j[svc];
  if(!arr || !arr[1] || !arr[1].row) return [];
  return arr[1].row;
}

/* 학교 검색 — 이름 일부로 찾는다 */
async function neisSchools(name){
  const q = `schoolInfo?Type=json&pIndex=1&pSize=20`
    + (neisKey() ? '&KEY=' + encodeURIComponent(neisKey()) : '')
    + '&SCHUL_NM=' + encodeURIComponent(name);
  const r = await neisFetch(q);
  if(r.err) return { err: r.err };
  return { list: neisRows(r.data, 'schoolInfo').map(s => ({
    office: s.ATPT_OFCDC_SC_CODE, officeName: s.ATPT_OFCDC_SC_NM,
    code: s.SD_SCHUL_CODE, name: s.SCHUL_NM,
    kind: s.SCHUL_KND_SC_NM || '', addr: (s.ORG_RDNMA || '').split(' ').slice(0,2).join(' ')
  })) };
}
/* 학교 종류 → 서비스 이름 */
function neisSvcOf(kind){
  if(/초등/.test(kind)) return NEIS_SVC.els;
  if(/고등/.test(kind)) return NEIS_SVC.his;
  return NEIS_SVC.mis;
}
/* 이번 주 시간표를 통째로 받아 요일별로 정리 */
async function neisTimetable(force){
  const s = C.school;
  if(!s || !s.code || !s.grade || !s.cls) return { err:'학교·학년·반을 먼저 설정해 주세요' };
  const cache = C.ttCache;
  const monday = (() => { const d = new Date(now); const w = d.getDay();
    d.setDate(d.getDate() - ((w + 6) % 7)); return ymd(d); })();
  if(!force && cache && cache.week === monday && cache.key === s.code + s.grade + s.cls)
    return { table: cache.table, cached: true };

  const sunday = (() => { const d = new Date(monday + 'T00:00:00'); d.setDate(d.getDate() + 6); return ymd(d); })();
  const svc = neisSvcOf(s.kind);
  const yy = now.getMonth() + 1 >= 3 ? now.getFullYear() : now.getFullYear() - 1;
  const sem = (now.getMonth() + 1 >= 3 && now.getMonth() + 1 <= 8) ? 1 : 2;
  const q = `${svc}?Type=json&pIndex=1&pSize=300`
    + (neisKey() ? '&KEY=' + encodeURIComponent(neisKey()) : '')
    + `&ATPT_OFCDC_SC_CODE=${encodeURIComponent(s.office)}`
    + `&SD_SCHUL_CODE=${encodeURIComponent(s.code)}`
    + `&AY=${yy}&SEM=${sem}`
    + `&TI_FROM_YMD=${monday.replace(/-/g,'')}&TI_TO_YMD=${sunday.replace(/-/g,'')}`
    + `&GRADE=${encodeURIComponent(s.grade)}&CLASS_NM=${encodeURIComponent(s.cls)}`;
  const r = await neisFetch(q);
  if(r.err) return { err: r.err };

  const rows = neisRows(r.data, svc);
  if(!rows.length) return { err:'이번 주 시간표가 등록되어 있지 않습니다' };
  const table = {};                       // { 요일(0~6): ['국어','수학',...] }
  rows.forEach(x => {
    const d = String(x.ALL_TI_YMD || '');
    if(d.length < 8) return;
    const dow = new Date(`${d.slice(0,4)}-${d.slice(4,6)}-${d.slice(6,8)}T00:00:00`).getDay();
    const no = parseInt(x.PERIO, 10);
    const subj = (x.ITRT_CNTNT || '').trim();
    if(!no || !subj) return;
    table[dow] = table[dow] || [];
    table[dow][no - 1] = subj;
  });
  for(const k in table) table[k] = table[k].map(v => v || '');
  C.ttCache = { week: monday, key: s.code + s.grade + s.cls, table, at: Date.now() };
  C.timetable = table;                    // 카드가 바로 쓰도록
  save();
  return { table };
}


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
    $('ckAP').textContent = h < 12 ? T('ampmAM') : T('ampmPM');
    $('ckDate').textContent = dateLabel(now);
    const dd = EV.all().filter(e => e.type === 'dday' && !e.repeat)
      .map(e => ({ n:e.title, l:dleft(e.date) }))
      .filter(x => x.l >= 0).sort((a,b) => a.l - b.l).slice(0,3);
    $('ckChips').innerHTML = dd.map((d,i) =>
      `<span class="ck-chip${i===0?' hot':''}">${dtxt(d.l)} ${esc(d.n)}</span>`).join('')
      || `<span class="tiny">${T('ddayHint')}</span>`;
  }
});


/* ══════ js/cards/weather.js ══════ */

/* 날씨 — Open-Meteo (키 불필요, 상업적 이용 허용 / 출처 표기) */
let WX_ERR = '';
const WICON = c => c===0?'☀':c<=2?'⛅':c===3?'☁':c<=48?'≡':c<=67?'☂':c<=77?'❄':c<=82?'☂':'⚡';
const WDESC = c => c===0?T('wClear'):c<=2?T('wPartly'):c===3?T('wCloud'):c<=48?T('wFog')
  :c<=55?T('wDrizzle'):c<=67?T('wRain'):c<=77?T('wSnow'):c<=82?T('wShower'):T('wThunder');
const pmGrade = (v, fine) => { const t = fine?[15,35,75]:[30,80,150];
  return v<=t[0]?[T('aqGood'),'var(--acc)']:v<=t[1]?[T('aqMid'),'var(--tx)']
       :v<=t[2]?[T('aqBad'),'var(--amber)']:[T('aqWorst'),'var(--rose)']; };

/* 비 오는 시간대를 '오후 3~6시' 형태로 */
function wetRanges(hs){
  if(!hs || !hs.length) return '';
  const s = [...new Set(hs)].sort((a,b)=>a-b), rs = [];
  let a = s[0], p = s[0];
  for(let i=1;i<=s.length;i++){
    if(s[i] != null && s[i]-p <= 2){ p = s[i]; continue; }
    rs.push([a,p]); a = s[i]; p = s[i];
  }
  const f = h => {
    if(lang() !== 'ko') return (h<10?'0':'') + h + ':00';
    return h===0 ? '자정' : h===12 ? '낮 12시' : (h<12?'오전 ':'오후 ') + (h%12) + '시';
  };
  return rs.slice(0,2).map(([x,y]) => x===y ? f(x) : `${f(x)}~${f(y)}`).join(', ');
}

async function loadWeather(force){
  const c = C.wx;
  if(c && !force && c.date === today() && Date.now() - c.at < 20*60*1000) return paint();
  try{
    /* 한반도 안이면 기상청 모델을 쓴다 (Open-Meteo가 KMA 예보를 그대로 제공) */
    const inKR = C.lat > 33 && C.lat < 39.5 && C.lon > 124 && C.lon < 132;
    const model = inKR ? '&models=kma_seamless' : '';
    const u1 = `https://api.open-meteo.com/v1/forecast?latitude=${C.lat}&longitude=${C.lon}`
      + `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code`
      + `&hourly=temperature_2m,weather_code,precipitation_probability`
      + `&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code,uv_index_max,sunrise,sunset`
      + `&timezone=Asia%2FSeoul&forecast_days=7` + model;
    const u2 = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${C.lat}&longitude=${C.lon}`
      + `&current=pm10,pm2_5&timezone=Asia%2FSeoul`;
    let j = await (await fetch(u1)).json();
    /* 기상청 모델에 값이 비면 기본 모델로 한 번 더 */
    if(model && (!j || !j.daily || j.daily.temperature_2m_max[0] == null))
      j = await (await fetch(u1.replace(model, ''))).json();
    const build = di => {
      const base = di*24, startH = di===0 ? now.getHours()+1 : 8, step = di===0 ? 2 : 3;
      const hourly = [];
      for(let i=0;i<6;i++){
        const k = base + startH + i*step;
        if(j.hourly.temperature_2m[k] == null) break;
        hourly.push({ t: pad((startH + i*step) % 24) + (lang()==='ko' ? '시' : ''), temp: Math.round(j.hourly.temperature_2m[k]), icon: WICON(j.hourly.weather_code[k]) });
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
    C.wx = { date: today(), at: Date.now(), live:true, model: !!model,
             today: build(0), tomorrow: build(1), days:{} };
    /* 날짜별 예보를 담아 달력에서 고른 날의 날씨를 보여준다 */
    const dayList = (j.daily && j.daily.time) || [];
    for(let i = 0; i < dayList.length && i < 7; i++){
      const d = dayList[i];
      if(d) C.wx.days[d] = {
        hi: Math.round(j.daily.temperature_2m_max[i]), lo: Math.round(j.daily.temperature_2m_min[i]),
        code: j.daily.weather_code[i], rain: j.daily.precipitation_probability_max[i],
        sunrise: (j.daily.sunrise[i]||'').slice(11), sunset: (j.daily.sunset[i]||'').slice(11),
        uv: Math.round(j.daily.uv_index_max[i]),
        wetH: build(i).wetH, hourly: build(i).hourly
      };
    }
    try{
      const a = await (await fetch(u2)).json();
      const p10 = a && a.current ? a.current.pm10 : null;
      const p25 = a && a.current ? a.current.pm2_5 : null;
      C.wx.air = {
        pm10: (p10 != null && isFinite(p10)) ? Math.round(p10) : null,
        pm25: (p25 != null && isFinite(p25)) ? Math.round(p25) : null
      };
    }catch(e){}
    save();
  }catch(e){
    WX_ERR = (e && e.message) ? e.message : '연결 실패';
    if(C.wx) C.wx.stale = true;
  }
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
    /* 달력에서 고른 날짜가 오늘이 아니면 그날 예보를 보여준다 */
    let sel = (typeof calSel === 'string') ? calSel : today();
    /* 달력에서 따로 고르지 않았고 취침 무렵이면 내일을 본다 */
    if(sel === today() && dayOff()) sel = ymd(new Date(now.getTime() + 86400000));
    const isToday = sel === today();
    const dayData = (C.wx && C.wx.days && C.wx.days[sel]) || null;
    const w = isToday ? (C.wx && C.wx.today) : dayData;

    const md = sel.slice(5).replace(/^0/,'').replace('-','월 ').replace(/-0?/,'') + '일';
    const tmr = ymd(new Date(now.getTime() + 86400000));
    const when = isToday ? T('today') : (sel === tmr ? T('tomorrow') : md);
    el.querySelector('#wxLab').textContent = (C.place || T('wxPlace')) + ' · ' + when;

    if(!isToday && !dayData){
      el.querySelector('.wx-main').hidden = true;
      el.querySelector('#wxStats').hidden = true;
      el.querySelector('#wxTmrw').hidden = true;
      el.querySelector('#wxHourly').hidden = true;
      el.querySelector('#wxSrc').textContent = '';
      el.querySelector('#wxAdv').innerHTML = `<span class="empty">${when} ${T('wxNoData')}<br>
        <span class="tiny">예보는 오늘부터 7일까지만 제공돼요.</span></span>`;
      return;
    }
    el.querySelector('.wx-main').hidden = !w;
    el.querySelector('#wxStats').hidden = !w;
    el.querySelector('#wxTmrw').hidden = !w;
    el.querySelector('#wxHourly').hidden = !w;
    if(!w){
      el.querySelector('#wxSrc').textContent = T('wxRetry');
      el.querySelector('#wxAdv').innerHTML = `<span class="empty">${T('wxFail')}</span>`;
      return;
    }
    el.querySelector('#wxSrc').textContent =
      (C.wx.stale ? '—' : (C.wx.model && lang()==='ko' ? '기상청 · Open-Meteo' : 'Open-Meteo')) + ' · ' + T('wxRefresh');
    el.querySelector('#wxIcon').textContent = WICON(w.code);
    el.querySelector('#wxDesc').textContent = WDESC(w.code);
    if(isToday){
      el.querySelector('#wxTemp').innerHTML = `${w.temp}°`;
      el.querySelector('#wxS1').textContent = `${T('wxFeels')} ${w.feels}°`;
      el.querySelector('#wxS2').textContent = `${T('wxHi')} ${w.hi}° / ${T('wxLo')} ${w.lo}°`;
    } else {
      el.querySelector('#wxTemp').innerHTML = `<span class="lo2">${w.lo}°</span><span class="slash">/</span>${w.hi}°`;
      el.querySelector('#wxS1').textContent = T('wxLoHi');
      el.querySelector('#wxS2').textContent = `${T('wxRain')} ${w.rain != null ? w.rain : '—'}%`;
    }

    el.querySelector('#wxTmrw').hidden = !isToday;
    const air = isToday ? ((C.wx && C.wx.air) || {}) : {};
    const st = [];
    const num = v => (v != null && isFinite(v)) ? Math.round(v) : null;
    const p10 = num(air.pm10), p25 = num(air.pm25);
    const rainRange = wetRanges(w.wetH);
    if(isToday){
      /* 오늘: 미세먼지·초미세먼지·강수·습도·자외선·일출 */
      if(p10 != null){ const g = pmGrade(p10,false); st.push([T('wxPm10'), p10+' '+g[0], g[1]]); }
      if(p25 != null){ const g = pmGrade(p25,true); st.push([T('wxPm25'), p25+' '+g[0], g[1]]); }
      st.push([T('wxRain'), (w.rain != null ? w.rain : '—')+'%', w.rain>=60?'var(--acc)':'var(--tx)', rainRange]);
      if(num(w.hum) != null) st.push([T('wxHum'), num(w.hum)+'%', 'var(--tx)']);
      st.push([T('wxUv'), w.uv>=8?w.uv+' '+T('uvVeryHigh'):w.uv>=6?w.uv+' '+T('uvHigh'):w.uv+' '+T('uvMid'), 'var(--tx)']);
      st.push([isNight()?T('wxSunrise'):T('wxSunset'), (isNight()?w.sunrise:w.sunset)||'—', 'var(--tx)']);
    } else {
      /* 다른 날: 습도·체감은 예보에 없으므로 세 칸만 */
      st.push([T('wxRain'), (w.rain != null ? w.rain : '—')+'%', w.rain>=60?'var(--acc)':'var(--tx)', rainRange]);
      st.push([T('wxUv'), w.uv>=8?w.uv+' '+T('uvVeryHigh'):w.uv>=6?w.uv+' '+T('uvHigh'):w.uv+' '+T('uvMid'), 'var(--tx)']);
      st.push([T('wxSunrise'), w.sunrise||'—', 'var(--tx)']);
    }
    el.querySelector('#wxStats').innerHTML = st.map(s =>
      `<div class="wx-stat"><i>${s[0]}</i><b style="color:${s[2]}">${s[1]}</b>`
      + (s[3] ? `<u>${esc(s[3])}</u>` : '') + `</div>`).join('');

    /* 조언 기준: 오늘은 현재 기온, 다른 날은 그날 최고 기온 */
    const t = (w.temp != null) ? w.temp : w.hi;
    const adv = t>=28 ? T('advHot') : t>=23 ? T('advWarm')
              : t>=17 ? T('advMild') : t>=10 ? T('advCool') : T('advCold');
    const rr = wetRanges(w.wetH);
    el.querySelector('#wxAdv').textContent = adv
      + (w.rain>=50 ? ' ' + (rr ? T('advRainAt',{r:rr}) : T('advRain')) : '');

    const tw = C.wx.tomorrow;
    el.querySelector('#wxTmrw').innerHTML = tw
      ? `<span class="lb">${T('wxTomorrow')}</span><span class="ic">${WICON(tw.code)}</span>`
        + `<span class="tp"><b>${tw.lo}°</b> / ${tw.hi}°</span>`
        + `<span class="rn">${WDESC(tw.code)}${tw.rain!=null?' · '+T('wxRain')+' <b>'+tw.rain+'%</b>':''}`
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
        <span class="clab">${T('calTitle')}</span>
        <div class="cal-nav">
          <button class="cbtn" data-go="-1">‹</button>
          <span class="cal-ym" id="calYM"></span>
          <button class="cbtn" data-go="1">›</button>
          <button class="cbtn" data-go="0">${T('calToday')}</button>
        </div>
      </div>
      <div class="cal-dow" id="calDow"></div>
      <div class="cal-grid" id="calGrid"></div>
      <div class="cal-day">
        <div class="cal-dhead"><span id="calDayLab"></span><button class="cbtn acc" id="calAdd">${T('calAdd')}</button></div>
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
      calSel = c.dataset.d;
      /* 화면 전체를 다시 그리지 않고 달력과 날씨만 갱신 */
      const cal = Cards.get('calendar'); if(cal && cal._el) cal.render(cal._el);
      const wx = Cards.get('weather'); if(wx && wx._el && Cards.isOn('weather')) wx.render(wx._el);
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
    el.querySelector('#calYM').textContent = ymLabel(y, m);
    el.querySelector('#calDow').innerHTML = dows().map((d,i) =>
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
      `${dateLabel(sd)} <i class="tiny">${calSel===t?T('calToday'):dtxt(dl)}</i>`;
    const list = EV.onDate(calSel);
    el.querySelector('#calList').innerHTML = list.length ? list.map(e => `
      <div class="cal-ev" data-ev="${e.id}">
        <i class="bar" style="background:${evColor(e.type)}"></i>
        <span class="tm">${e.time || T('calAllDay')}</span>
        <span class="tt">${esc(e.title)}${e.repeat && e.repeat.type ? ' <i class="rp">반복</i>' : ''}
          ${e.type === 'todo' ? '<i class="rp">할 일</i>' : ''}</span>
        ${e.time && e.notify !== false ? '<i class="rp">🔔</i>' : ''}
      </div>`).join('') : `<div class="empty">${T('calEmpty')}</div>`;
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
      <div class="dowpick" id="evDow">${dows().map((x,i) =>
        `<button data-d="${i}" class="${(rep.days||[]).includes(i)?'on':''}">${x}</button>`).join('')}</div>
      <input id="evUntil" type="date" value="${rep.until||''}" placeholder="종료일">
      <span class="hint">종료일을 비우면 계속 반복됩니다.</span>
    </div>
    <div class="fld"><label>메모 (선택)</label><textarea id="evM">${esc(e ? e.memo : '')}</textarea></div>
    <label class="chk"><input type="checkbox" id="evN" ${(!e || e.notify !== false) ? 'checked' : ''}>
      <span>알림 받기 <i class="hint">시각을 정하면 그 시각 전에, 시각이 없으면 아침에 알려 줍니다.</i></span></label>`;

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
    notify: $('evN') ? $('evN').checked : true,
    repeat: repType ? {
      type: repType,
      days: repType === 'weekly' ? [...$('evDow').querySelectorAll('.on')].map(b => +b.dataset.d) : [],
      until: $('evUntil') ? $('evUntil').value : ''
    } : null
  };
  if(patch.repeat && patch.repeat.type === 'weekly' && !patch.repeat.days.length)
    patch.repeat.days = [new Date(patch.date+'T00:00:00').getDay()];
  if(editingId) EV.update(editingId, patch); else EV.add(patch);
  if(patch.notify) Notify.ask();
  calSel = patch.date;
  closeEvent(); paint();
}


/* ══════ js/cards/todo.js ══════ */

/* 할 일 — 달력 일정과 하나로 통합 (type:'todo')
   날짜를 비우면 '언제든', 날짜를 넣으면 달력에 함께 표시되고 알림도 갑니다. */
let todoFilter = 'today';   // today | all | done
Cards.register({
  id:'todo', name:'할 일', size:'M', grow:true,
  desc:'날짜·시각을 붙이면 달력에 뜨고 알림도 옵니다',
  init(el){
    el.innerHTML = `
      <div class="chead">
        <div class="tabs" id="tdTabs">
          <button class="on" data-k="today">${T('tdToday')}</button>
          <button data-k="all">${T('tdAll')}</button>
          <button data-k="done">${T('tdDone')}</button>
        </div>
        <span class="cmeta" id="tdCount"></span>
      </div>
      <div class="td-add">
        <span>+</span>
        <input id="tdIn" maxlength="90" placeholder="${T('tdPlaceholder')}">
        <button class="td-when" id="tdWhen" title="날짜·시각"></button>
        <button class="td-ok" id="tdOk" title="추가" hidden>✓</button>
      </div>
      <div class="td-hint" id="tdHint"></div>
      <div class="td-opt" id="tdOpt" hidden>
        <label class="td-lb">${T('tdDate')}</label><input type="date" id="tdDate">
        <label class="td-lb">${T('tdTime')}</label><input type="time" id="tdTime">
        <button class="btn" id="tdClear">${T('tdClear')}</button>
      </div>
      <div class="td-list" id="tdList"></div>`;

    const inp = el.querySelector('#tdIn');
    const opt = el.querySelector('#tdOpt');
    const ok  = el.querySelector('#tdOk');
    const hint = el.querySelector('#tdHint');
    const syncHint = () => {
      const d = el.querySelector('#tdDate').value, tm = el.querySelector('#tdTime').value;
      hint.textContent = d
        ? (T('tdSetOn', { d: d.slice(5).replace('-','/') }) + (tm ? ' ' + tm : '') + (tm ? ' · ' + T('tdWillNotify') : ''))
        : T('tdHintDate');
      ok.hidden = !inp.value.trim();
    };
    el._syncHint = syncHint;
    el.querySelector('#tdWhen').onclick = () => {
      opt.hidden = !opt.hidden;
      if(!opt.hidden && !el.querySelector('#tdDate').value) el.querySelector('#tdDate').value = today();
      syncHint();
    };
    el.querySelector('#tdDate').addEventListener('change', syncHint);
    el.querySelector('#tdTime').addEventListener('change', syncHint);
    inp.addEventListener('input', syncHint);
    el.querySelector('#tdClear').onclick = () => {
      el.querySelector('#tdDate').value = ''; el.querySelector('#tdTime').value = '';
      opt.hidden = true; inp.focus(); syncHint();
    };
    const add = () => {
      const v = inp.value.trim(); if(!v) return;
      const d = el.querySelector('#tdDate').value;
      const tm = el.querySelector('#tdTime').value;
      EV.add({ title:v, type:'todo', date: d || today(), time: tm || '',
               anyday: !d, done:false });
      inp.value = ''; el.querySelector('#tdDate').value = ''; el.querySelector('#tdTime').value = '';
      opt.hidden = true; paint();
      if(tm) Notify.ask();
      syncHint();
    };
    inp.addEventListener('keydown', e => { if(e.key === 'Enter') add(); });
    ok.onclick = add;

    el.querySelector('#tdTabs').onclick = e => {
      const b = e.target.closest('button'); if(!b) return;
      todoFilter = b.dataset.k;
      [...b.parentNode.children].forEach(x => x.classList.toggle('on', x === b));
      const c = Cards.get('todo'); c.render(c._el);
    };
    el.querySelector('#tdList').onclick = e => {
      const row = e.target.closest('[data-ev]'); if(!row) return;
      const id = row.dataset.ev, a = e.target.dataset.a;
      if(a === 'del'){ EV.remove(id); paint(); }
      else if(a === 'tog'){
        const ev = EV.all().find(x => x.id === id);
        if(ev){ EV.update(id, { done: !ev.done }); paint(); }
      }
      else openEvent(id);
    };
  },
  render(el){
    if(el._syncHint) el._syncHint();
    const t = today();
    let list = EV.all().filter(e => e.type === 'todo');
    if(todoFilter === 'today') list = list.filter(e => !e.done && (e.anyday || e.date <= t));
    else if(todoFilter === 'done') list = list.filter(e => e.done);
    else list = list.filter(e => !e.done);
    list.sort((a,b) => (a.date+(a.time||'99:99')).localeCompare(b.date+(b.time||'99:99')));

    const left = EV.all().filter(e => e.type === 'todo' && !e.done && (e.anyday || e.date <= t)).length;
    el.querySelector('#tdCount').textContent = left ? T('tdLeft', { n: left }) : '';

    el.querySelector('#tdList').innerHTML = list.length ? list.map(e => {
      const dl = e.anyday ? null : dleft(e.date);
      const late = dl != null && dl < 0 && !e.done;
      const when = e.anyday ? '' :
        (dl === 0 ? (e.time || T('tdToday')) :
         dl === 1 ? T('tdTomorrow') + (e.time ? ' '+e.time : '') :
         late ? T('tdLate', { n: -dl }) :
         `${e.date.slice(5).replace('-','/')}${e.time ? ' '+e.time : ''}`);
      return `<div class="td ${e.done?'done':''}" data-ev="${e.id}">
        <button class="ck" data-a="tog"></button>
        <span class="tx" data-a="tog">${esc(e.title)}</span>
        ${when ? `<span class="when ${late?'late':''} ${dl===0?'now':''}">${when}</span>` : ''}
        ${e.time ? '<i class="bell" title="알림">🔔</i>' : ''}
        <button class="rm" data-a="del">×</button>
      </div>`;
    }).join('') : `<div class="empty">${
      todoFilter === 'done' ? T('tdEmptyDone') :
      todoFilter === 'all' ? T('tdEmptyAll') : T('tdEmptyToday')}</div>`;
  }
});


/* ══════ js/cards/exam.js ══════ */

/* 수행평가 — 달력의 '수행평가' 종류 일정을 모아 보여줌 */
Cards.register({
  id:'exam', name:'수행평가 알리미', size:'S', def:false, tag:'학생', tone:'violet',
  desc:'달력에 수행평가로 넣은 일정만 모아 D-day로 표시',
  init(el){
    el.innerHTML = `
      <div class="chead"><span class="clab">${T('examLab')}</span>
        <button class="cbtn" id="exAdd">+ 추가</button></div>
      <div class="ex-list" id="exList"></div>`;
    el.querySelector('#exAdd').onclick = () => openEvent(null, today());
    el.querySelector('#exList').onclick = e => {
      const r = e.target.closest('[data-ev]'); if(r) openEvent(r.dataset.ev);
    };
  },
  render(el){
    const list = EV.upcoming('exam', 4).filter(x => !x.done);
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
  const push = arr => (arr||[]).forEach(e => list.push(e));
  try{
    const [nx, lt] = await Promise.all([
      sdbFetch('eventsnext.php?id='+C.teamId).catch(() => null),
      sdbFetch('eventslast.php?id='+C.teamId).catch(() => null)
    ]);
    if(nx) push(nx.events);
    if(lt) push(lt.results || lt.events);

    /* 끝난 경기가 3개에 못 미치면 시즌 전체에서 보충한다
       (eventslast 는 요청 시점에 따라 1~2건만 주는 경우가 있음) */
    const t = ymd(now);
    const done = list.filter(e => {
      const d = String(e.gameDate || e.dateEvent || '').replace(/\D/g,'').slice(0,8);
      const ds = d.length === 8 ? `${d.slice(0,4)}-${d.slice(4,6)}-${d.slice(6,8)}` : '';
      const a = e.intHomeScore, b2 = e.intAwayScore;
      return ds && ds < t && a != null && a !== '' && b2 != null && b2 !== '';
    }).length;

    if(!list.length || done < 3){
      const s = await sdbFetch(`eventsseason.php?id=${KBO_LEAGUE}&s=${now.getFullYear()}`).catch(() => null);
      if(s) (s.events||[]).forEach(e => {
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
    const seen = {};
    C.games = C.games.filter(g => { const k = g.date + '|' + g.opp;
      return seen[k] ? false : (seen[k] = 1); });
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
    el.querySelector('#bbLab').textContent = (team ? team.kr : '야구') + (dayOff() ? ' · 내일' : '');
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
    const t = ymd(baseDate());
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
        `<div class="bb-head sm">${dayOff() ? '내일은' : '오늘은'} 경기가 없습니다</div>` +
        (next ? `<div class="bb-chips"><span class="lc">다음 ${next.date.slice(5).replace('-','/')} · ${next.home ? esc(next.opp)+' vs '+team.s : team.s+' vs '+esc(next.opp)} ${next.time}</span></div>` : '');
    }
    const past = games.filter(x => x.date < today() && x.my != null && x.op != null && (x.my + x.op) > 0).slice(-3);
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
/* 구글 뉴스 RSS는 CORS 헤더가 없어 직접 호출이 막힌다.
   프록시를 순서대로 시도한다. (Capacitor로 감싸면 첫 번째가 바로 통과) */
const NEWS_PROXIES = [
  { n:'직접',       f: u => u },
  { n:'allorigins', f: u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u) },
  { n:'codetabs',   f: u => 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(u) },
  { n:'corsproxy',  f: u => 'https://corsproxy.io/?url=' + encodeURIComponent(u) },
  { n:'jina',       f: u => 'https://r.jina.ai/' + u },
  { n:'thingproxy', f: u => 'https://thingproxy.freeboard.io/fetch/' + u }
];
let NEWS_ERR = '';
async function rssFirst(url){
  const errs = [];
  for(const p of NEWS_PROXIES){
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), 9000);
    try{
      const r = await fetch(p.f(url), { signal: ac.signal });
      clearTimeout(to);
      if(!r.ok){ errs.push(p.n+':'+r.status); continue; }
      const text = await r.text();
      let xml = new DOMParser().parseFromString(text, 'text/xml');
      let it = xml.querySelector('item');
      if(!it){                                   // 텍스트로 감싸 오는 프록시 대비
        const s = text.indexOf('<item');
        if(s < 0){ errs.push(p.n+':형식'); continue; }
        xml = new DOMParser().parseFromString(text.slice(text.indexOf('<')), 'text/xml');
        it = xml.querySelector('item');
        if(!it){ errs.push(p.n+':형식'); continue; }
      }
      const raw = (it.querySelector('title') || {}).textContent || '';
      if(!raw.trim()){ errs.push(p.n+':빈값'); continue; }
      const m = raw.match(/^(.*?)\s+-\s+([^-]+)$/);
      return { text: (m ? m[1] : raw).trim(), src: m ? m[2].trim() : '',
               url: ((it.querySelector('link') || {}).textContent || '').trim() };
    }catch(e){ clearTimeout(to); errs.push(p.n+':차단'); }
  }
  NEWS_ERR = errs.slice(0,3).join(' · ');
  return null;
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
    return g ? Object.assign({ tag:t.name }, g) : { tag:t.name, text:T('newsFail'), src:'', url:'' };
  }));
  C.news = out; C.newsAt = Date.now(); save(); paint();
}
Cards.register({
  id:'news', name:'뉴스 브리핑', size:'M', def:false,
  desc:'분야별 헤드라인 한 줄씩. 누르면 기사로 이동',
  init(el){
    el.innerHTML = `
      <div class="chead"><span class="clab">${T('newsLab')}</span>
        <span class="cmeta" id="nwSrc">눌러서 새로고침</span></div>
      <div class="nw-list" id="nwList"></div>`;
    el.querySelector('#nwSrc').onclick = () => { el.querySelector('#nwSrc').textContent = '불러오는 중…'; loadNews(true); };
  },
  render(el){
    const list = C.news || [];
    el.querySelector('#nwSrc').textContent = list.length && list.some(x => x.url)
      ? 'Google News' : (NEWS_ERR ? NEWS_ERR + ' · ' + T('wxRetry') : T('newsTap'));
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
      <div class="chead"><span class="clab" id="foLab">${T('foLabToday')}</span><span class="cmeta" id="foWho"></span></div>
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
    const bd = baseDate();
    try{ f = fortune(C.birth, C.birthTime, new Date(bd.getFullYear(), bd.getMonth(), bd.getDate())); }catch(e){ return; }
    const lab = el.querySelector('#foLab');
    if(lab) lab.textContent = dayOff() ? T('foLabTomorrow') : T('foLabToday');
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
    el.querySelector('#foHead').textContent = (dayOff() ? '내일은 ' : '') + SS_TEXT[f.ss] + (f.rel[2] ? ' ' + f.rel[2] + '.' : '')
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
      <div class="chead"><span class="clab">${T('sleepLab')}</span><span class="cmeta" id="slMeta"></span></div>
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


/* ══════ js/cards/whitenoise.js ══════ */

/* 수면 유도음 — 백색소음·빗소리·파도를 브라우저에서 직접 생성 (파일 없음) */
let NZ = { ctx:null, src:null, gain:null, filt:null, lfo:null, playing:'', timer:null, endAt:0 };
const NZ_KINDS = [
  { id:'white', name:'백색소음', desc:'고른 쉬익 소리' },
  { id:'pink',  name:'핑크노이즈', desc:'낮고 부드러운 소리' },
  { id:'rain',  name:'빗소리',   desc:'잔잔한 비' },
  { id:'wave',  name:'파도',     desc:'밀려왔다 빠지는 소리' }
];
function nzBuffer(ctx, kind){
  const len = ctx.sampleRate * 4;
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  if(kind === 'pink' || kind === 'rain' || kind === 'wave'){
    let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
    for(let i=0;i<len;i++){
      const w = Math.random()*2-1;
      b0=0.99886*b0+w*0.0555179; b1=0.99332*b1+w*0.0750759; b2=0.96900*b2+w*0.1538520;
      b3=0.86650*b3+w*0.3104856; b4=0.55000*b4+w*0.5329522; b5=-0.7616*b5-w*0.0168980;
      d[i]=(b0+b1+b2+b3+b4+b5+b6+w*0.5362)*0.11; b6=w*0.115926;
    }
  } else {
    for(let i=0;i<len;i++) d[i] = Math.random()*2-1;
  }
  return buf;
}
function nzStop(){
  if(NZ.src){ try{ NZ.src.stop(); }catch(e){} NZ.src.disconnect(); NZ.src = null; }
  if(NZ.lfo){ try{ NZ.lfo.stop(); }catch(e){} NZ.lfo = null; }
  NZ.playing = ''; NZ.endAt = 0;
  clearInterval(NZ.timer); NZ.timer = null;
  const c = Cards.get('whitenoise'); if(c && c._el) c.render(c._el);
}
function nzPlay(kind, minutes){
  nzStop();
  NZ.ctx = NZ.ctx || new (window.AudioContext || window.webkitAudioContext)();
  const ctx = NZ.ctx;
  if(ctx.state === 'suspended') ctx.resume();
  const src = ctx.createBufferSource();
  src.buffer = nzBuffer(ctx, kind); src.loop = true;
  const filt = ctx.createBiquadFilter();
  filt.type = 'lowpass';
  filt.frequency.value = kind === 'rain' ? 1800 : kind === 'wave' ? 900 : kind === 'pink' ? 3200 : 12000;
  const gain = ctx.createGain();
  const vol = (C.nzVol != null ? C.nzVol : 45) / 100;
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.001, vol * 0.5), ctx.currentTime + 1.2);
  if(kind === 'wave'){                       // 파도: 천천히 부풀었다 가라앉게
    const lfo = ctx.createOscillator(), lg = ctx.createGain();
    lfo.frequency.value = 0.09; lg.gain.value = vol * 0.28;
    lfo.connect(lg); lg.connect(gain.gain); lfo.start(); NZ.lfo = lfo;
  }
  src.connect(filt); filt.connect(gain); gain.connect(ctx.destination);
  src.start();
  NZ.src = src; NZ.gain = gain; NZ.filt = filt; NZ.playing = kind;
  if(minutes){
    NZ.endAt = Date.now() + minutes*60000;
    NZ.timer = setInterval(() => {
      const left = NZ.endAt - Date.now();
      if(left <= 0) return nzStop();
      if(left < 20000 && NZ.gain)              // 끝나기 전 서서히 줄이기
        NZ.gain.gain.setTargetAtTime(0.0001, ctx.currentTime, 6);
      const c = Cards.get('whitenoise'); if(c && c._el) c.render(c._el);
    }, 1000);
  }
  const c = Cards.get('whitenoise'); if(c && c._el) c.render(c._el);
}
Cards.register({
  id:'whitenoise', name:'수면 유도음', size:'S', def:false,
  desc:'백색소음·빗소리·파도. 타이머를 걸면 알아서 꺼집니다',
  init(el){
    el.innerHTML = `
      <div class="chead"><span class="clab">수면 유도음</span><span class="cmeta" id="nzMeta"></span></div>
      <div class="nz-kinds" id="nzKinds"></div>
      <div class="nz-timer" id="nzTimer"></div>
      <div class="nz-vol"><span class="tiny">음량</span>
        <input type="range" min="5" max="100" id="nzVol"></div>`;
    el.querySelector('#nzKinds').onclick = e => {
      const b = e.target.closest('[data-k]'); if(!b) return;
      if(NZ.playing === b.dataset.k) nzStop();
      else nzPlay(b.dataset.k, C.nzMin || 30);
    };
    el.querySelector('#nzTimer').onclick = e => {
      const b = e.target.closest('[data-m]'); if(!b) return;
      C.nzMin = +b.dataset.m; save();
      if(NZ.playing) nzPlay(NZ.playing, C.nzMin);
      else { const c = Cards.get('whitenoise'); c.render(c._el); }
    };
    el.querySelector('#nzVol').addEventListener('input', e => {
      C.nzVol = +e.target.value; save();
      if(NZ.gain) NZ.gain.gain.setTargetAtTime(Math.max(0.001, C.nzVol/100*0.5), NZ.ctx.currentTime, 0.2);
    });
  },
  render(el){
    const mins = C.nzMin || 30;
    el.querySelector('#nzKinds').innerHTML = NZ_KINDS.map(k =>
      `<button class="nz ${NZ.playing===k.id?'on':''}" data-k="${k.id}">
        <b>${k.name}</b><i>${k.desc}</i></button>`).join('');
    el.querySelector('#nzTimer').innerHTML = [15,30,60,120].map(m =>
      `<button class="${mins===m?'on':''}" data-m="${m}">${m>=60?(m/60)+'시간':m+'분'}</button>`).join('');
    el.querySelector('#nzVol').value = C.nzVol != null ? C.nzVol : 45;
    const left = NZ.endAt ? Math.max(0, NZ.endAt - Date.now()) : 0;
    el.querySelector('#nzMeta').textContent = NZ.playing
      ? (left ? `${Math.ceil(left/60000)}분 남음` : '재생 중')
      : '';
  }
});


/* ══════ js/cards/quote.js ══════ */

/* 오늘의 한마디 */
const Q_DAY = [
 ['하루하루가 작은 일생이다.','쇼펜하우어'],['시작이 반이다.','아리스토텔레스'],
 ['천천히 가더라도 멈추지 않으면 된다.','공자'],['아침을 지배하면 하루를 지배한다.','속담'],
 ['할 수 있다고 믿는 사람은 그렇게 된다.','베르길리우스'],['오늘 걷지 않으면 내일은 뛰어야 한다.','속담'],
 ['준비되지 않은 기회는 그냥 지나가는 소음이다.',''],['꾸준함은 재능을 이긴다.',''],
 ['좋은 질문은 좋은 답보다 멀리 간다.',''],['오늘의 나는 어제 내가 한 선택의 결과다.',''],
 ['가장 큰 위험은 위험을 감수하지 않는 것이다.','마크 저커버그'],
 ['계획 없는 목표는 그저 소원일 뿐이다.','생텍쥐페리'],
 ['배움에는 끝이 없고, 그래서 지루할 틈도 없다.',''],
 ['어제보다 한 걸음이면 충분하다.',''],['잘하는 것보다 계속하는 것이 어렵다.',''],
 ['실수는 배우는 중이라는 증거다.',''],['모르는 것을 모른다고 말하는 것이 앎의 시작이다.','공자'],
 ['위대한 일은 작은 일들이 모여 이루어진다.','반 고흐'],
 ['행동은 모든 성공의 기초다.','파블로 피카소'],['시간은 가장 공평한 자원이다.',''],
 ['하기 싫은 일부터 해치우면 하루가 가벼워진다.',''],
 ['완벽한 때는 오지 않는다. 지금이 그때다.',''],
 ['집중은 무엇을 할지가 아니라 무엇을 안 할지 정하는 것이다.','스티브 잡스'],
 ['오늘 할 수 있는 일에 전부를 쏟아라.','뉴턴'],
 ['어려움 한가운데 기회가 있다.','아인슈타인'],
 ['성공은 열정을 잃지 않고 실패를 거듭하는 능력이다.','처칠'],
 ['운은 준비가 기회를 만났을 때 생긴다.','세네카'],
 ['남과 비교하는 순간 행복은 사라진다.',''],
 ['읽지 않은 책은 나무토막과 같다.',''],['생각은 크게, 시작은 작게.',''],
 ['오늘의 노력은 내일의 여유다.',''],['질문하지 않으면 답도 없다.',''],
 ['길을 잃는 것도 길을 아는 방법이다.',''],['쉬는 것도 하루의 일이다.',''],
 ['가장 좋은 시작은 지금 시작하는 것이다.','']
];
const Q_NIGHT = [
 ['잠은 최고의 명상이다.','달라이 라마'],['오늘 못 한 일은 내일의 나에게 맡기자.',''],
 ['하루를 잘 보낸 사람에게 밤은 짧다.','속담'],['내일의 나는 오늘 잔 만큼이다.',''],
 ['저녁이 되어서야 하루가 무슨 날이었는지 알 수 있다.','괴테'],['가장 어두운 시간은 해 뜨기 직전이다.','속담'],
 ['오늘의 나를 칭찬하고 자는 것도 실력이다.',''],['내일 걱정은 내일의 몫으로 남겨 두자.',''],
 ['하루를 접는 방식이 다음 하루를 만든다.',''],
 ['잘 자는 것은 게으름이 아니라 준비다.',''],
 ['오늘 한 일을 세어 보면 생각보다 많다.',''],
 ['피곤한 몸에게도 고맙다고 말해 주자.',''],
 ['어둠은 별을 보게 해 준다.',''],['후회는 짧게, 정리는 확실하게.',''],
 ['조용한 밤은 생각을 정리하기 좋은 시간이다.',''],
 ['내일 아침의 나를 위해 오늘 밤을 정리하자.',''],
 ['모든 하루는 다시 오지 않는다. 그래서 소중하다.',''],
 ['쉼표가 있어야 문장이 읽힌다.',''],['오늘 하루도 잘 버텼다.',''],
 ['내일은 오늘보다 조금 더 나을 것이다.',''],
 ['걱정으로 밤을 채우면 잠 잘 자리가 없다.',''],
 ['하루의 끝에서 가장 좋았던 순간 하나만 떠올려 보자.',''],
 ['깊이 잔 사람만이 멀리 갈 수 있다.',''],['불을 끄면 생각도 쉰다.',''],
 ['내일의 계획은 오늘 밤에 세울 때 가장 선명하다.','']
];
const Q_EN_DAY = [
 ['Each day is a small lifetime.','Schopenhauer'],['Well begun is half done.','Aristotle'],
 ['It does not matter how slowly you go, so long as you do not stop.','Confucius'],
 ['Win the morning and you win the day.',''],['Consistency beats talent.',''],
 ['A good question travels further than a good answer.',''],
 ['The biggest risk is not taking any risk.','Mark Zuckerberg'],
 ['A goal without a plan is just a wish.','Saint-Exupéry'],
 ['Great things are done by a series of small things.','Van Gogh'],
 ['Action is the foundational key to all success.','Picasso'],
 ['In the middle of difficulty lies opportunity.','Einstein'],
 ['Focus is deciding what not to do.','Steve Jobs'],
 ['Mistakes are proof that you are trying.',''],['Think big, start small.',''],
 ['The best time to start is now.','']
];
const Q_EN_NIGHT = [
 ['Sleep is the best meditation.','Dalai Lama'],['Leave what is left to tomorrow\u2019s you.',''],
 ['The night is short for those who spent the day well.',''],
 ['Darkness lets you see the stars.',''],['You made it through today.',''],
 ['Tidy the night for the morning you.',''],['Rest is part of the work.',''],
 ['Tomorrow will be a little better than today.','']
];
const Q_JA_DAY = [['一日一日が小さな人生だ。','ショーペンハウアー'],['始めは半ば。','アリストテレス'],
 ['ゆっくりでも止まらなければいい。','孔子'],['朝を制する者が一日を制する。',''],
 ['続けることは才能に勝る。',''],['小さな積み重ねが大きなことをつくる。','ゴッホ']];
const Q_JA_NIGHT = [['睡眠は最高の瞑想である。','ダライ・ラマ'],['今日できなかったことは明日の自分に。',''],
 ['暗いからこそ星が見える。',''],['今日もよく頑張った。','']];
const Q_ZH_DAY = [['每一天都是一段小小的人生。','叔本华'],['好的开始是成功的一半。','亚里士多德'],
 ['走得慢没关系，只要不停下。','孔子'],['赢得清晨，就赢得一天。',''],
 ['坚持胜过天赋。',''],['伟大源于点滴积累。','梵高']];
const Q_ZH_NIGHT = [['睡眠是最好的冥想。','达赖喇嘛'],['今天没做完的，交给明天的自己。',''],
 ['黑夜才让我们看见星星。',''],['今天也辛苦了。','']];
function quoteList(night){
  const l = lang();
  if(l === 'en') return night ? Q_EN_NIGHT : Q_EN_DAY;
  if(l === 'ja') return night ? Q_JA_NIGHT : Q_JA_DAY;
  if(l === 'zh') return night ? Q_ZH_NIGHT : Q_ZH_DAY;
  return night ? Q_NIGHT : Q_DAY;
}
let quoteSeed = 0;
Cards.register({
  id:'quote', name:'오늘의 한마디', size:'S',
  desc:'아침·밤에 맞춘 문장 하나',
  init(el){
    el.innerHTML = `<p class="qt" id="qtText"></p><span class="qtsrc" id="qtSrc"></span>`;
    el.style.cursor = 'pointer';
    el.onclick = () => { quoteSeed++; const c = Cards.get('quote'); c.render(c._el); };
  },
  render(){
    /* 날짜 + 새로고침 횟수로 고르므로, 새로고침할 때마다 새 문장이 나온다 */
    const list = quoteList(isNight());
    const seed = jdn(now.getFullYear(), now.getMonth()+1, now.getDate()) + quoteSeed;
    const q = list[Math.abs(seed) % list.length];
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
      <div class="chead"><span class="clab">${T('habitLab')}</span><span class="cmeta" id="hbMeta"></span></div>
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
      <div class="chead"><span class="clab">${T('waterLab')}</span><span class="cmeta" id="wtMeta"></span></div>
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

/* 시간표 — 나이스 자동 연동 + 직접 입력(일주일치) */
Cards.register({
  id:'timetable', name:'오늘 시간표', size:'S', def:false, tag:'학생',
  desc:'학교를 연결하면 자동으로, 직접 일주일치를 넣을 수도 있어요',
  init(el){
    el.innerHTML = `
      <div class="chead"><span class="clab">${T('ttLab')}</span>
        <span class="cmeta" id="ttMeta"></span></div>
      <div class="tt-list" id="ttList"></div>`;
    el.querySelector('#ttMeta').onclick = () => {
      if(C.school && C.school.code) ttRefresh(true);
      else openSettings('cards');
    };
  },
  render(el){
    const dow = now.getDay();
    const list = (C.timetable || {})[dow] || [];
    const auto = !!(C.school && C.school.code);
    el.querySelector('#ttMeta').textContent = auto
      ? (C.school.name + ' ' + C.school.grade + '-' + C.school.cls)
      : (list.length ? '' : '설정에서 넣기');
    el.querySelector('#ttList').innerHTML = list.length
      ? list.map((s,i) => s
          ? `<div class="tt"><span class="no">${i+1}</span><span class="sj">${esc(s)}</span></div>`
          : `<div class="tt empty-p"><span class="no">${i+1}</span><span class="sj">—</span></div>`).join('')
      : `<div class="empty">${
          dow === 0 || dow === 6 ? (lang()==='ko' ? '주말이에요. 시간표가 없습니다.' : '—')
          : auto ? '오늘 시간표가 없습니다. 눌러서 다시 불러오세요.'
          : '설정 → 카드 구성에서 학교를 연결하거나 직접 넣어 보세요.'}</div>`;
  }
});

/* 시간표 새로 불러오기 */
async function ttRefresh(force){
  const c = Cards.get('timetable');
  const meta = c && c._el && c._el.querySelector('#ttMeta');
  if(meta) meta.textContent = '불러오는 중…';
  const r = await neisTimetable(force);
  if(r.err && meta) meta.textContent = r.err;
  paint();
  return r;
}


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


/* ══════ js/onboard.js ══════ */

/* ═══════════ 시작 화면 · 소개 (새 디자인 연동) ═══════════ */
const OB = {
  root:null, app:null, step:1, MAX:6, cards:[], geoT:null, myPos:null, joined:false,

  start(){
    this.app  = document.getElementById('briefApp');
    this.root = document.getElementById('obRoot');
    if(!this.app || !this.root) return;

    /* 테마는 앱과 동일한 규칙(5시~18시 아침) */
    this.syncTheme();

    /* 스플래시 → 소개 */
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wait = C.onboarded ? (reduce ? 150 : 900) : (reduce ? 300 : 2000);
    setTimeout(() => {
      if(C.onboarded){ this.finish(true); return; }   // 이미 마친 사람은 스플래시만
      this.app.setAttribute('data-view','onboard');
      this.go(1);
    }, wait);

    this.buildCards();
    this.bind();
  },

  syncTheme(){
    const night = (now.getHours() >= 18 || now.getHours() < 5);
    const r = document.documentElement.classList;
    r.remove('theme-day','theme-night');
    r.add(night ? 'theme-night' : 'theme-day');
  },

  /* ── 카드 선택 ── */
  buildCards(){
    const grid = document.getElementById('obCards');
    if(!grid) return;
    const ICON = {
      weather:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
      todo:'<path d="M9 11l3 3 8-8"/><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/>',
      fortune:'<path d="M12 3l2.2 5.6L20 9.2l-4.2 3.9L17 19l-5-3-5 3 1.2-5.9L4 9.2l5.8-.6z"/>',
      clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
      calendar:'<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M3 9h18M8 2v4M16 2v4"/>',
      exam:'<path d="M4 4h13l3 3v13H4z"/><path d="M8 10h8M8 14h5"/>',
      baseball:'<circle cx="12" cy="12" r="9"/><path d="M5 6c3 3 3 9 0 12M19 6c-3 3-3 9 0 12"/>',
      news:'<rect x="3" y="5" width="15" height="14" rx="2"/><path d="M18 8h3v9a2 2 0 0 1-2 2M7 9h7M7 13h7M7 17h4"/>',
      sleep:'<path d="M3 17l5-6 4 4 5-7 4 5"/>',
      whitenoise:'<path d="M11 5L6 9H3v6h3l5 4zM16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/>',
      quote:'<path d="M8 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3M18 7h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3"/>',
      habit:'<path d="M20 6L9 17l-5-5"/><path d="M4 20h16"/>',
      water:'<path d="M12 3s6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 6-10 6-10z"/>',
      timetable:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 10h18M9 10v11M15 10v11"/>',
      countdown:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>'
    };
    grid.innerHTML = '';
    Cards.list.filter(c => !c.fixed).forEach(c => {
      const on = Cards.isOn(c.id);
      const el = document.createElement('div');
      el.className = 'pick';
      el.setAttribute('role','button');
      el.setAttribute('aria-pressed', on ? 'true' : 'false');
      el.dataset.card = c.id;
      el.innerHTML =
        `<span class="p-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON[c.id]||ICON.clock}</svg></span>`
        + `<span class="p-tx"><b>${cardName(c)}</b><span>${cardDesc(c)}</span></span>`
        + `<span class="p-sw"></span>`;
      el.addEventListener('click', () => {
        Cards.toggle(c.id);
        el.setAttribute('aria-pressed', Cards.isOn(c.id) ? 'true' : 'false');
        this.count();
      });
      grid.appendChild(el);
    });
    this.count();
  },
  count(){
    const n = Cards.list.filter(c => !c.fixed && Cards.isOn(c.id)).length;
    const el = document.getElementById('obCnt');
    if(el) el.textContent = n;
  },

  /* ── 지역 검색 (앱과 같은 방식, 가까운 순) ── */
  bindGeo(){
    const q = document.getElementById('obGeoQ');
    const res = document.getElementById('obGeoRes');
    const btn = document.getElementById('obGeoBtn');
    if(!q || q.dataset.bound) return;
    q.dataset.bound = '1';
    q.value = C.place || '';

    if(navigator.geolocation) navigator.geolocation.getCurrentPosition(
      p => { this.myPos = [p.coords.latitude, p.coords.longitude]; }, () => {},
      { enableHighAccuracy:false, timeout:8000, maximumAge:600000 });

    const dist = (a,b,c,d) => {
      const R=6371, rad=x=>x*Math.PI/180;
      const dLa=rad(c-a), dLo=rad(d-b);
      const h=Math.sin(dLa/2)**2+Math.cos(rad(a))*Math.cos(rad(c))*Math.sin(dLo/2)**2;
      return 2*R*Math.asin(Math.sqrt(h));
    };
    const fmt = k => k<1 ? '바로 여기' : k<100 ? Math.round(k)+'km' : Math.round(k/10)*10+'km';

    const draw = list => {
      res.innerHTML = list.map((r,i) => `
        <div class="result" data-lat="${r.latitude}" data-lon="${r.longitude}" data-nm="${esc(r.name)}"
             aria-selected="${i===0?'true':'false'}">
          <span class="r-main">${esc(r.name)}</span>
          <span class="r-sub">${esc([r.admin2, r.admin1].filter(Boolean).join(' ') || r.country || '')} · ${fmt(r._d)}</span>
          <svg class="r-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
               stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-11"/></svg>
        </div>`).join('') || '<div class="result"><span class="r-main">결과가 없습니다</span></div>';
    };

    const search = async v => {
      const url = n => `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(n)}&count=20&language=ko&format=json`;
      let list = [];
      try{ list = ((await (await fetch(url(v))).json()).results) || []; }catch(e){}
      if(list.length < 3 && !/[동구시군읍면]$/.test(v)){
        for(const suf of ['동','시','구']){
          try{ list = list.concat(((await (await fetch(url(v+suf))).json()).results) || []); }catch(e){}
          if(list.length >= 6) break;
        }
      }
      const seen = {};
      list = list.filter(r => { const k=r.latitude.toFixed(3)+','+r.longitude.toFixed(3);
        return seen[k] ? false : (seen[k]=1); });
      const base = this.myPos || [C.lat, C.lon];
      list.forEach(r => { r._d = dist(base[0], base[1], r.latitude, r.longitude);
        r._kr = (r.country_code === 'KR') ? 0 : 1; });
      list.sort((a,b) => a._kr-b._kr || a._d-b._d);
      draw(list.slice(0,5));
    };

    q.addEventListener('input', () => {
      clearTimeout(this.geoT);
      const v = q.value.trim();
      if(v.length < 2){ res.innerHTML = ''; return; }
      res.innerHTML = '<div class="result"><span class="r-main">찾는 중…</span></div>';
      this.geoT = setTimeout(() => search(v), 350);
    });
    res.addEventListener('click', e => {
      const r = e.target.closest('[data-lat]'); if(!r) return;
      res.querySelectorAll('.result').forEach(x => x.setAttribute('aria-selected','false'));
      r.setAttribute('aria-selected','true');
      C.place = r.dataset.nm; C.lat = +r.dataset.lat; C.lon = +r.dataset.lon;
      C.wx = null; save();
    });
    if(btn) btn.addEventListener('click', () => {
      if(!navigator.geolocation) return;
      btn.classList.add('busy');
      const ok = p => {
        this.myPos = [p.coords.latitude, p.coords.longitude];
        C.lat = +p.coords.latitude.toFixed(4); C.lon = +p.coords.longitude.toFixed(4);
        C.wx = null; save();
        btn.classList.remove('busy');
        res.innerHTML = `<div class="result" aria-selected="true"><span class="r-main">현재 위치</span>
          <span class="r-sub">${C.lat}, ${C.lon}</span>
          <svg class="r-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
               stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-11"/></svg></div>`;
      };
      navigator.geolocation.getCurrentPosition(ok,
        () => navigator.geolocation.getCurrentPosition(ok,
          () => { btn.classList.remove('busy'); },
          { enableHighAccuracy:true, timeout:30000, maximumAge:3600000 }),
        { enableHighAccuracy:false, timeout:15000, maximumAge:3600000 });
    });
  },

  /* ── 기기 연결 ── */
  deviceKind(){
    const ua = navigator.userAgent || '';
    const w = Math.min(screen.width, screen.height);
    if(/iPad/.test(ua) || (/Macintosh/.test(ua) && 'ontouchend' in document)) return 'tablet';
    if(/Android/.test(ua) && !/Mobile/.test(ua)) return 'tablet';
    if(/iPhone|Android.*Mobile|Windows Phone/.test(ua)) return 'phone';
    return w >= 700 ? 'tablet' : 'phone';
  },
  otherName(){ return this.deviceKind() === 'tablet' ? '휴대폰' : '태블릿'; },
  myName(){ return this.deviceKind() === 'tablet' ? '태블릿' : '휴대폰'; },

  async bindLink(){
    const pick = document.getElementById('lkPick');
    if(!pick || pick.dataset.bound) return;
    pick.dataset.bound = '1';

    const me = this.myName(), other = this.otherName();
    const T = document.getElementById('lkTitle');
    const S = document.getElementById('lkSub');
    if(T) T.textContent = `${other}과 연결할까요?`;
    if(S) S.textContent = `지금 보고 있는 ${me}의 일정과 할 일이 ${other}에서도 똑같이 보여요. 나중에 설정에서 해도 됩니다.`;
    const ht = document.getElementById('lkHostT'), hs = document.getElementById('lkHostS');
    const gt = document.getElementById('lkGuestT'), gs = document.getElementById('lkGuestS');
    if(ht) ht.textContent = `${me}에서 코드 만들기`;
    if(hs) hs.textContent = `${other}로 QR을 찍거나 코드를 입력해요`;
    if(gt) gt.textContent = `${other}에서 받은 코드 넣기`;
    if(gs) gs.textContent = `${other}에서 먼저 코드를 만들었다면`;

    const host = document.getElementById('lkHost');
    const guest = document.getElementById('lkGuest');

    pick.addEventListener('click', e => {
      const b = e.target.closest('[data-mode]'); if(!b) return;
      [...pick.children].forEach(x => x.setAttribute('aria-selected', x === b ? 'true' : 'false'));
      const isHost = b.dataset.mode === 'host';
      host.hidden = !isHost; guest.hidden = isHost;
      if(isHost) this.makeCode(); else setTimeout(() => guest.querySelector('input').focus(), 120);
    });

    /* 안내 문구 */
    const steps = document.getElementById('lkSteps');
    if(steps) steps.innerHTML = [
      `${other}에서 이 앱을 엽니다`,
      `카메라로 위 QR을 찍거나, 소개 화면의 <b>받은 코드 넣기</b>에 코드를 입력합니다`,
      `연결되면 두 기기의 일정·할 일이 같아집니다`
    ].map(s => `<li>${s}</li>`).join('');
    const steps2 = document.getElementById('lkSteps2');
    if(steps2) steps2.innerHTML = [
      `${other}에서 <b>${other}에서 코드 만들기</b>를 누릅니다`,
      `화면에 나온 6자리 코드를 위에 입력합니다`
    ].map(s => `<li>${s}</li>`).join('');

    /* 코드 입력 */
    const inputs = [...guest.querySelectorAll('input')];
    const msg = document.getElementById('lkMsg');
    const tryJoin = async () => {
      const v = inputs.map(i => i.value).join('').toUpperCase();
      if(v.length < 6) return;
      msg.textContent = '연결하는 중…'; msg.className = 'lk-msg';
      try{
        await syncJoin(v);
        this.joined = true;
        msg.textContent = `연결됐어요. ${this.otherName()}의 내용을 가져왔습니다.`;
        msg.className = 'lk-msg ok';
        build(); paint();
      }catch(e){
        msg.textContent = e.message || '코드를 찾지 못했어요. 다시 확인해 주세요.';
        msg.className = 'lk-msg err';
        document.getElementById('obCode').classList.add('err');
        setTimeout(() => document.getElementById('obCode').classList.remove('err'), 900);
      }
    };
    inputs.forEach((inp,i) => {
      inp.addEventListener('input', () => {
        inp.value = inp.value.replace(/[^0-9A-Za-z]/g,'').toUpperCase();
        if(inp.value && inputs[i+1]) inputs[i+1].focus();
        tryJoin();
      });
      inp.addEventListener('keydown', e => {
        if(e.key === 'Backspace' && !inp.value && inputs[i-1]) inputs[i-1].focus();
      });
      inp.addEventListener('paste', e => {
        const t = (e.clipboardData || window.clipboardData).getData('text').replace(/[^0-9A-Za-z]/g,'').toUpperCase();
        if(t.length >= 6){ e.preventDefault(); inputs.forEach((x,k) => x.value = t[k] || ''); tryJoin(); }
      });
    });

    /* 기본은 코드 만들기 */
    pick.querySelector('[data-mode="host"]').click();
  },

  async makeCode(){
    const qr = document.getElementById('obQR');
    const note = document.getElementById('obQRNote');
    const big = document.getElementById('obCodeBig');
    if(!qr || qr.dataset.made) return;
    qr.dataset.made = '1';
    try{
      const c = (C.sync && C.sync.on && C.sync.code) ? C.sync.code : await syncCreate();
      const url = joinLink(c);
      qr.innerHTML = QR.svg(url, 150);
      if(note) note.remove();
      if(big) big.textContent = c;
      const cp = document.getElementById('lkCopy');
      if(cp) cp.onclick = async () => {
        try{ await navigator.clipboard.writeText(url); cp.textContent = '복사했어요'; }
        catch(e){ cp.textContent = c; }
      };
    }catch(e){
      qr.dataset.made = '';
      if(note) note.textContent = '연결 준비 실패';
      if(big) big.textContent = '나중에 설정에서';
    }
  },

  /* ── 단계 이동 ── */
  go(step){
    step = Math.max(1, Math.min(this.MAX, step));
    this.collect();
    this.step = step;
    this.root.setAttribute('data-step', step);
    if(step === 4) this.bindGeo();
    if(step === 5) this.buildCards();
    if(step === 6) this.bindLink();
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    setTimeout(() => this.mark(), reduce ? 0 : 260);
  },
  mark(){
    const slides = this.root.querySelectorAll('.slide');
    slides.forEach(s => s.classList.remove('is-active'));
    void this.root.querySelector('.track').offsetWidth;
    const cur = slides[this.step-1];
    if(cur) cur.classList.add('is-active');
    const prev = this.root.querySelector('[data-action="prev"]');
    const next = this.root.querySelector('[data-action="next"]');
    if(prev) prev.disabled = this.step <= 1;
    if(next){
      const last = this.step >= this.MAX;
      const lb = next.querySelector('.next-label');
      const ic = next.querySelector('.next-ic');
      if(lb) lb.textContent = last ? '시작하기' : '다음';
      if(ic) ic.style.display = last ? 'none' : '';
    }
    const pb = this.root.querySelector('.progress');
    if(pb) pb.setAttribute('aria-valuenow', this.step);
  },
  collect(){
    const n = document.getElementById('ob-name');
    const b = document.getElementById('ob-birth');
    const t = document.getElementById('ob-time');
    if(n) C.name = n.value.trim();
    if(b && b.value) C.birth = b.value;
    if(t) C.birthTime = t.value;
    save();
  },

  bind(){
    const prev = this.root.querySelector('[data-action="prev"]');
    const next = this.root.querySelector('[data-action="next"]');
    if(prev) prev.addEventListener('click', () => this.go(this.step - 1));
    if(next) next.addEventListener('click', () => {
      if(this.step >= this.MAX){ this.collect(); this.finish(); return; }
      this.go(this.step + 1);
    });
    this.root.querySelectorAll('.opt-card').forEach(o => {
      o.addEventListener('click', () => {
        this.root.querySelectorAll('.opt-card').forEach(x => x.setAttribute('aria-selected','false'));
        o.setAttribute('aria-selected','true');
      });
    });
    /* 생일 기본값 비우기 (디자인의 예시값 제거) */
    const b = document.getElementById('ob-birth');
    if(b && !C.birth) b.value = '';
    else if(b) b.value = C.birth;
    const n = document.getElementById('ob-name');
    if(n) n.value = C.name || '';
  },

  finish(silent){
    C.onboarded = true; save();
    this.app.classList.add('is-done');
    const enter = () => {
      document.getElementById('stage').classList.add('entering');
      setTimeout(() => document.getElementById('stage').classList.remove('entering'), 700);
      build(); paint(); loadWeather(true);
    };
    if(silent){
      setTimeout(() => { this.app.remove(); enter(); }, 420);
      return;
    }
    /* 소개를 막 마친 사람에게만 환영 화면을 한 번 보여준다 */
    const wc = document.getElementById('welcome');
    const night = (now.getHours() >= 18 || now.getHours() < 5);
    setTimeout(() => {
      this.app.remove();
      if(!wc){ enter(); return; }
      wc.hidden = false;
      document.getElementById('wcName').textContent = C.name ? C.name + '님' : '반가워요';
      document.getElementById('wcHi').textContent = night ? '오늘 하루 수고했어요' : '준비됐어요';
      const on = Cards.enabled().length;
      document.getElementById('wcSub').textContent =
        `카드 ${on}개로 시작합니다` + (this.joined ? ' · 기기 연결됨' : '');
      requestAnimationFrame(() => wc.classList.add('show'));
      setTimeout(() => {
        wc.classList.add('out');
        wc.style.pointerEvents = 'none';
        enter();
        setTimeout(() => { if(wc.parentNode) wc.remove(); }, 700);
      }, 2100);
    }, 480);
  }
};


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
      </select><span class="hint">화면 문구와 카드 이름에 적용됩니다. 운세·명언과 첫 소개 화면은 한국어로 표시됩니다.</span></div>

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
      <div id="ttSetting" ${Cards.isOn('timetable')?'':'hidden'}>
        <h3 class="sectitle" style="margin-top:26px">시간표 설정</h3>
        <p class="sechelp">학교를 연결하면 나이스(교육정보 개방 포털)에서 일주일치를 자동으로 가져옵니다.
          연결하지 않으면 직접 넣을 수 있어요.</p>
        <div class="segbar" id="ttMode">
          <button class="${C.school&&C.school.code?'on':''}" data-tt="auto">학교 연결</button>
          <button class="${C.school&&C.school.code?'':'on'}" data-tt="manual">직접 넣기</button>
        </div>

        <div id="ttAuto" ${C.school&&C.school.code?'':'hidden'}>
          <div class="fld"><label>학교 검색</label>
            <input id="ttQ" placeholder="학교 이름 (예: 목운중학교)" value="${esc((C.school&&C.school.name)||'')}">
            <div class="searchres" id="ttRes"></div></div>
          <div class="row2">
            <div class="fld"><label>학년</label><input data-k="__grade" id="ttGrade" type="number" min="1" max="6" value="${(C.school&&C.school.grade)||''}"></div>
            <div class="fld"><label>반</label><input data-k="__cls" id="ttCls" type="number" min="1" max="20" value="${(C.school&&C.school.cls)||''}"></div>
          </div>
          <div class="fld"><label>나이스 인증키 (선택)</label>
            <input id="ttKey" value="${esc(C.neisKey||'')}" placeholder="비워 두면 제한된 횟수로 조회합니다">
            <span class="hint">open.neis.go.kr 에서 무료로 발급받아 넣으면 더 안정적입니다.</span></div>
          <button class="btn primary" id="ttFetch">시간표 가져오기</button>
          <div class="lk-msg" id="ttMsg"></div>
        </div>

        <div id="ttManual" ${C.school&&C.school.code?'hidden':''}>
          <p class="sechelp">쉼표로 구분해 과목을 적으세요. 없는 교시는 비워 두면 됩니다.</p>
          <div id="ttWeek"></div>
          <button class="btn primary" id="ttSave">일주일치 저장</button>
          <div class="lk-msg" id="ttMsg2"></div>
        </div>
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
    /* ── 시간표 설정 ── */
    const ttMode = B.querySelector('#ttMode');
    if(ttMode) ttMode.onclick = e => {
      const btn = e.target.closest('[data-tt]'); if(!btn) return;
      [...ttMode.children].forEach(x => x.classList.toggle('on', x === btn));
      const auto = btn.dataset.tt === 'auto';
      B.querySelector('#ttAuto').hidden = !auto;
      B.querySelector('#ttManual').hidden = auto;
      if(!auto){ C.school = null; save(); drawWeek(); }
    };
    const drawWeek = () => {
      const box = B.querySelector('#ttWeek'); if(!box) return;
      const t = C.timetable || {};
      box.innerHTML = [1,2,3,4,5].map(d =>
        `<div class="fld"><label>${DAYS_KR[d]}요일</label>
          <input data-dow="${d}" value="${esc((t[d]||[]).join(', '))}" placeholder="국어, 수학, 영어"></div>`).join('');
    };
    drawWeek();
    const ttSave = B.querySelector('#ttSave');
    if(ttSave) ttSave.onclick = () => {
      const t = {};
      B.querySelectorAll('#ttWeek [data-dow]').forEach(inp => {
        const list = inp.value.split(',').map(x => x.trim()).filter(Boolean);
        if(list.length) t[+inp.dataset.dow] = list;
      });
      C.timetable = t; C.ttCache = null; save(); paint();
      B.querySelector('#ttMsg2').textContent = '저장했어요.';
      B.querySelector('#ttMsg2').className = 'lk-msg ok';
    };
    const ttQ = B.querySelector('#ttQ');
    if(ttQ){
      let tq = null;
      ttQ.addEventListener('input', () => {
        clearTimeout(tq);
        const v = ttQ.value.trim();
        const res = B.querySelector('#ttRes');
        if(v.length < 2){ res.innerHTML = ''; return; }
        res.innerHTML = '<span class="hint">찾는 중…</span>';
        tq = setTimeout(async () => {
          const r = await neisSchools(v);
          if(r.err){ res.innerHTML = `<span class="hint">${esc(r.err)}</span>`; return; }
          res.innerHTML = r.list.length ? r.list.map(s =>
            `<button data-code="${esc(s.code)}" data-office="${esc(s.office)}" data-nm="${esc(s.name)}" data-kind="${esc(s.kind)}">
              <b>${esc(s.name)}</b><span class="tiny">${esc(s.addr)} · ${esc(s.kind)}</span></button>`).join('')
            : '<span class="hint">검색 결과가 없습니다.</span>';
        }, 400);
      });
      B.querySelector('#ttRes').onclick = e => {
        const btn = e.target.closest('[data-code]'); if(!btn) return;
        C.school = Object.assign({}, C.school, {
          code: btn.dataset.code, office: btn.dataset.office,
          name: btn.dataset.nm, kind: btn.dataset.kind
        });
        save();
        ttQ.value = btn.dataset.nm;
        B.querySelector('#ttRes').innerHTML = `<span class="hint">선택: <b>${esc(btn.dataset.nm)}</b></span>`;
      };
    }
    const ttFetch = B.querySelector('#ttFetch');
    if(ttFetch) ttFetch.onclick = async () => {
      const msg = B.querySelector('#ttMsg');
      const g = B.querySelector('#ttGrade').value.trim();
      const cl = B.querySelector('#ttCls').value.trim();
      C.neisKey = B.querySelector('#ttKey').value.trim();
      if(!C.school || !C.school.code){ msg.textContent = '학교를 먼저 골라 주세요.'; msg.className='lk-msg err'; return; }
      if(!g || !cl){ msg.textContent = '학년과 반을 넣어 주세요.'; msg.className='lk-msg err'; return; }
      C.school = Object.assign({}, C.school, { grade:g, cls:cl });
      save();
      msg.textContent = '가져오는 중…'; msg.className = 'lk-msg';
      const r = await neisTimetable(true);
      if(r.err){ msg.textContent = r.err; msg.className = 'lk-msg err'; }
      else {
        const days = Object.keys(r.table).length;
        msg.textContent = `${days}일치를 가져왔어요.`;
        msg.className = 'lk-msg ok';
        paint();
      }
    };

    const segs = B.querySelector('.segbar:not(#ttMode)');
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
        <div class="fld"><label>기상</label>
          <input data-k="wake" type="time" value="${C.wake}" ${C.useWake===false?'disabled':''}>
          <label class="chk sm"><input type="checkbox" id="offWake" ${C.useWake===false?'checked':''}>
            <span>사용 안 함</span></label></div>
        <div class="fld"><label>외출 · 등교</label>
          <input data-k="out" type="time" value="${C.out}" ${C.useOut===false?'disabled':''}>
          <label class="chk sm"><input type="checkbox" id="offOut" ${C.useOut===false?'checked':''}>
            <span>사용 안 함</span></label></div>
        <div class="fld"><label>목표 취침</label>
          <input data-k="bed" type="time" value="${C.bed}" ${C.useBed===false?'disabled':''}>
          <label class="chk sm"><input type="checkbox" id="offBed" ${C.useBed===false?'checked':''}>
            <span>사용 안 함</span></label></div>
      </div>
      <p class="sechelp">사용 안 함으로 두면 헤더의 남은 시간 표시가 나타나지 않습니다.</p>
      <h3 class="sectitle" style="margin-top:26px">화면</h3>
      <p class="sechelp">아침 5시부터 밝은 화면, 저녁 6시부터 어두운 화면으로 자동 전환됩니다. 헤더 버튼으로 직접 바꿔도 다음 전환 시각에 자동으로 돌아옵니다.</p>`;
    ['offWake','offOut','offBed'].forEach(id => {
      const el = B.querySelector('#'+id); if(!el) return;
      el.onchange = () => {
        C[{offWake:'useWake', offOut:'useOut', offBed:'useBed'}[id]] = !el.checked;
        save(); renderSettings(); paintHeader();
      };
    });
  }
  else if(setTab === 'notify'){
    const perm = ('Notification' in window) ? Notification.permission : 'unsupported';
    B.innerHTML = `
      <h3 class="sectitle">알림</h3>
      <p class="sechelp">할 일과 일정에 시각을 정하면 그 시각 전에 알려 줍니다.
        시각이 없는 항목은 아침에 한 번 모아서 알려 줍니다.</p>
      <div class="cardrow" style="margin-bottom:16px">
        <span class="nm"><b>알림 사용</b><i>${
          perm === 'granted' ? '이 기기에서 알림이 허용되어 있습니다' :
          perm === 'denied' ? '브라우저에서 알림이 차단되어 있습니다. 사이트 설정에서 허용해 주세요' :
          perm === 'unsupported' ? '이 브라우저는 알림을 지원하지 않습니다' :
          '켜면 알림 권한을 요청합니다'}</i></span>
        <button class="sw ${C.notifyOn && perm==='granted' ? 'on':''}" id="ntSw"></button>
      </div>
      <div class="row2">
        <div class="fld"><label>아침 알림 시각</label><input data-k="notifyDaily" type="time" value="${C.notifyDaily||'08:00'}">
          <span class="hint">그날 할 일을 모아서 알려 줍니다.</span></div>
        <div class="fld"><label>전날 밤 알림</label><input data-k="notifyPre" type="time" value="${C.notifyPre||'21:00'}">
          <span class="hint">내일 일정을 미리 알려 줍니다.</span></div>
      </div>
      <div class="fld"><label>시각 있는 항목은 몇 분 전에</label>
        <select data-k="notifyLead">
          ${[0,5,10,15,30,60].map(m => `<option value="${m}"${+C.notifyLead===m?' selected':''}>${m?m+'분 전':'정각'}</option>`).join('')}
        </select></div>
      <button class="btn" id="ntTest">알림 미리 보기</button>
      <p class="sechelp" style="margin-top:18px">앱을 완전히 종료하면 알림이 오지 않을 수 있습니다.
        홈 화면에 설치해 두고, 기기 설정에서 이 앱의 배터리 최적화를 해제하면 더 잘 옵니다.</p>`;
    B.querySelector('#ntSw').onclick = async () => {
      if(!C.notifyOn){
        const r = await Notify.ask();
        C.notifyOn = (r === 'granted');
        if(r === 'denied') alert('브라우저에서 알림이 차단되어 있어요.\n주소창 왼쪽 자물쇠 → 권한 → 알림에서 허용해 주세요.');
      } else C.notifyOn = false;
      save(); renderSettings();
    };
    B.querySelector('#ntTest').onclick = async () => {
      const r = await Notify.ask();
      if(r !== 'granted') return alert('알림 권한이 필요해요.');
      Notify.show('알림 미리 보기', '이렇게 알려 드릴게요 · 할 일과 일정', 'test');
    };
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
      <button class="btn primary" id="fbSend">보내기</button>
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
      <p class="sechelp"><a href="privacy.html" target="_blank" rel="noopener" style="color:var(--acc)">개인정보처리방침</a><br><br>
        버전 ${BUILD}<br>
        날씨·대기질 Open-Meteo.com · 경기 데이터 TheSportsDB.com · 뉴스 Google News</p>`;

    let fbKind = 'bug';
    B.querySelector('#fbKind').onclick = e => {
      const btn = e.target.closest('[data-k]'); if(!btn) return;
      fbKind = btn.dataset.k;
      [...btn.parentNode.children].forEach(x => x.classList.toggle('on', x === btn));
    };
    const diag = () => ({
      build: BUILD, screen: innerWidth + 'x' + innerHeight, lang: lang(),
      cards: Cards.enabled().map(c => c.id).join(','), ua: navigator.userAgent
    });
    B.querySelector('#fbSend').onclick = async () => {
      const text = B.querySelector('#fbBody').value.trim();
      const msg = B.querySelector('#fbMsg');
      if(!text){ msg.textContent = '내용을 적어 주세요.'; return; }
      msg.textContent = '보내는 중…';
      const body = {
        kind: fbKind, text,
        from: B.querySelector('#fbFrom').value.trim(),
        diag: B.querySelector('#fbDiag').checked ? diag() : null,
        at: Date.now()
      };
      const ok = await sendReport(body);
      if(ok){
        msg.textContent = '보냈어요. 읽고 반영할게요. 고맙습니다.';
        msg.className = 'lk-msg ok';
        B.querySelector('#fbBody').value = '';
      } else {
        msg.innerHTML = '전송에 실패했어요. 메일로 보낼까요? '
          + `<a href="mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent('[Briefing] 제보')}&body=${encodeURIComponent(text)}">메일 열기</a>`;
        msg.className = 'lk-msg err';
      }
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
  migrateTodos();
  rollover();
  /* 화면 회전·창 크기 변경에 안정적으로 대응 */
  let fitT = null;
  const refit = () => { clearTimeout(fitT); fitT = setTimeout(() => { fit(); paint(); }, 120); };
  addEventListener('resize', refit);
  addEventListener('orientationchange', () => { refit(); setTimeout(refit, 400); });
  if(screen.orientation && screen.orientation.addEventListener)
    screen.orientation.addEventListener('change', refit);
  fit(); build(); paint();
  loadWeather(false);
  loadGames(false);
  loadNews(false);

  const joined = await handleJoinLink();
  OB.start();

  setInterval(() => {
    now = new Date();
    if(modeOverride){
      const natural = (now.getHours() >= 18 || now.getHours() < 5) ? 'night' : 'day';
      if(overrideBase && natural !== overrideBase){ modeOverride = null; overrideBase = null; }
    }
    paintHeader();
    if(now.getSeconds() === 0){ paint(); Notify.tick(); }
    if(now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() < 2){ rollover(); paint(); }
  }, 1000);
  setInterval(() => loadWeather(false), 15*60*1000);
  if(C.notifyOn) Notify.ask().then(() => Notify.tick());
  setInterval(() => loadGames(false), 60*60*1000);
  setInterval(() => loadNews(false), 60*60*1000);
  if(Cards.isOn('timetable') && C.school && C.school.code) ttRefresh(false);
  setInterval(() => { if(syncReady()) syncPull(); }, 45000);

  try{ if('wakeLock' in navigator) await navigator.wakeLock.request('screen'); }catch(e){}
  if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js', {updateViaCache:'none'}).catch(()=>{});
}

/* 이벤트 바인딩 */
$('setBtn').onclick = () => openSettings();
$('refreshBtn').onclick = async () => {
  const btn = $('refreshBtn');
  btn.classList.add('spin');
  C.wx = null; C.news = null; C.newsAt = 0; C.gamesAt = 0;
  await Promise.all([loadWeather(true), loadGames(true), loadNews(true)]);
  if(syncReady()) await syncPull(true);
  paint();
  setTimeout(() => btn.classList.remove('spin'), 400);
};
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
document.addEventListener('keydown', e => {
  if(e.key !== 'Escape') return;
  if($('evEdit').classList.contains('show')) closeEvent();
  else if($('settings').classList.contains('show')) closeSettings();
});

try{ new Function('let a=1?.x; let b=1??2;'); }catch(e){ $('oldBrowser').style.display = 'block'; }
boot();
