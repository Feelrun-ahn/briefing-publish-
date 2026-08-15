# Briefing (가칭)

아침·밤 두 얼굴을 가진 개인 대시보드. 플레이스토어 출시용 소스.

## 업로드할 파일 (9개)

```
index.html          앱 셸 + 시작화면/소개 마크업
app.css             앱 본체 스타일
onboard.css         시작화면·소개 스타일
app.js              전체 스크립트 (아래 순서로 합쳐진 번들)
manifest.json       앱 설치 정보
sw.js               오프라인 캐시 (코드는 네트워크 우선)
icon-192.png / icon-512.png / icon-maskable-512.png
```

`js-원본소스/`는 참고용입니다. 업로드하지 않아도 됩니다.

## app.js 안의 순서

```
i18n     다국어 (한국어 · English · 日本語 · 中文)
qr       QR 생성기 (외부 라이브러리 없음)
saju     명리 엔진 (절기·일진·십신, 외부 통신 없음)
core     저장소·상태·카드 레지스트리·레이아웃 엔진·테마
notify   알림 예약 (아침 요약 / 시각 전 / 전날 밤)
sync     기기 연결 (익명 로그인 + 6자리 코드)
cards    clock weather calendar todo exam baseball news
         fortune sleep whitenoise quote habit water timetable countdown
onboard  시작화면·소개 6단계 컨트롤러
boot     설정·도움말·부팅
```

## CSS 규칙

`onboard.css`의 변수는 모두 `--ob-` 접두사를 씁니다.
앱 본체(`app.css`)와 이름이 겹치면 값이 덮여 색이 사라지므로,
온보딩 스타일을 고칠 때는 반드시 `--ob-` 접두사를 유지하세요.

## 주요 기능

- **아침/밤 자동 전환** — 5시~18시 아침, 그 외 밤. 데이터는 자정 기준으로만 바뀜
- **카드 15종** — 설정에서 켜고 끄고 순서·열 지정 가능
- **할 일 = 일정** — 할 일에 날짜·시각을 붙이면 달력에 뜨고 알림도 옴
- **알림** — 시각 있는 항목은 N분 전, 없는 항목은 아침에, 내일 일정은 전날 밤에
- **기기 연결** — QR 또는 6자리 코드
- **운세** — 절기·일진·십신 계산 (재미로 보는 참고용, 외부 통신 없음)

## 외부 통신

| 대상 | 용도 | 키 |
|---|---|---|
| api.open-meteo.com | 날씨 | 불필요 |
| air-quality-api.open-meteo.com | 미세먼지 | 불필요 |
| geocoding-api.open-meteo.com | 지역 검색 | 불필요 |
| thesportsdb.com | KBO 경기 | 공용 키 (개인 키 입력 가능) |
| news.google.com | 뉴스 RSS | 불필요 |
| firestore · identitytoolkit | 기기 연결 | Firebase (morning-public) |

기기 연결을 켜지 않으면 모든 데이터는 기기 안에만 저장됩니다.

## 데이터 출처 표기 (스토어 등록 정보에 포함)

- 날씨·대기질: Open-Meteo.com (CC BY 4.0)
- 경기 데이터: TheSportsDB.com
- 뉴스 헤드라인: Google News RSS (제목·출처·링크만 표시)
- 운세: 앱 내부 사주 명리 계산 (재미로 보는 참고용)

## 남은 작업

- [ ] Firebase 콘솔에서 익명 로그인 켜기 + 규칙 게시 → `SETUP-SYNC.md`
- [ ] `app.js`의 `FEEDBACK_EMAIL` 확인
- [ ] 앱 이름 확정 → 패키지 ID 결정
- [ ] Capacitor 패키징 (앱 종료 상태에서도 알림 받으려면 필요)
- [ ] 개인정보처리방침 페이지
- [ ] 폐쇄 테스트 12명 × 14일
