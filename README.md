# Briefing (가칭)

아침·밤에 필요한 것만 한 화면에 모으는 대시보드. **플레이스토어 출시용 소스**입니다.

## 구조

```
index.html        앱 셸
app.css           스타일 (아침/밤 테마 토큰)
js/
 ├ i18n.js        다국어 (한국어 · English · 日本語 · 中文)
 ├ saju.js        명리 엔진 (절기·일진·십신, 외부 통신 없음)
 ├ core.js        저장소·상태·카드 레지스트리·레이아웃 엔진·테마
 ├ sync.js        기기 연결 (익명 로그인 + 6자리 코드)
 ├ boot.js        소개 화면·설정·도움말·부팅
 └ cards/         카드 모듈 14개
    clock · weather · calendar · todo · exam · baseball · news
    fortune · sleep · quote · habit · water · timetable · countdown
```

### 카드 추가하는 법

`js/cards/새카드.js`를 만들고 `index.html`에 script 한 줄 추가:

```js
Cards.register({
  id:'mycard', name:'내 카드', size:'M',  // S/M/L — 자동 배치 무게
  def:false,      // 기본 꺼짐이면 false
  grow:true,      // 남는 높이를 채울지
  tone:'accent',  // accent | violet (선택)
  tag:'학생',      // 배지 (선택)
  desc:'설정 화면에 보일 한 줄 설명',
  init(el){ el.innerHTML = '...'; },  // 최초 1회 (이벤트 바인딩)
  render(el){ /* 갱신마다 */ }
});
```
번역이 필요하면 `js/i18n.js`의 `CARD_I18N`에 `id: ['이름','설명']`을 추가합니다.

## 배치

- **자동**: 순서대로 놓되 열의 무게가 고르게 차도록 분배
- **직접 지정**: 카드마다 좌 · 중 · 우 열을 선택 (설정 → 카드 구성)
- 폰에서는 언제나 1열, 순서만 반영

## 외부 통신

| 대상 | 용도 | 키 |
|---|---|---|
| api.open-meteo.com | 날씨 예보 | 불필요 |
| air-quality-api.open-meteo.com | 미세먼지 | 불필요 |
| geocoding-api.open-meteo.com | 지역 검색 | 불필요 |
| thesportsdb.com | KBO 경기 일정·결과 | 공용 테스트 키 (개인 키 입력 가능) |
| news.google.com | 뉴스 헤드라인 RSS | 불필요 |
| firestore · identitytoolkit | 기기 연결 (선택) | Firebase 설정 시에만 |

사용자 데이터는 기기 안(localStorage)에 저장되며, 기기 연결을 켠 경우에만 본인 공간에 동기화됩니다.

## 데이터 출처 표기 (스토어 등록 정보에 포함)

- 날씨·대기질: Open-Meteo.com (CC BY 4.0)
- 경기 데이터: TheSportsDB.com
- 뉴스 헤드라인: Google News RSS (제목·출처·링크만 표시)
- 운세: 앱 내부 사주 명리 계산 (재미로 보는 참고용)

## 남은 작업

- [ ] `js/boot.js`의 `FEEDBACK_EMAIL` 확인 (문의 받을 주소)
- [ ] 앱 이름 확정 → 패키지 ID 결정
- [ ] `SETUP-SYNC.md`대로 Firebase 값 입력 (기기 연결 활성화)
- [ ] Capacitor 패키징 (`npx cap add android`)
- [ ] 취침 전 로컬 알림
- [ ] 개인정보처리방침 페이지
- [ ] 폐쇄 테스트 12명 × 14일
