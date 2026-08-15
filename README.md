# Briefing (가칭)

아침·밤 두 얼굴을 가진 개인 대시보드. 플레이스토어 출시용 소스.

## 업로드할 파일 (11개)

```
index.html   app.css   onboard.css   app.js   manifest.json   sw.js
admin.html   privacy.html
icon-192.png   icon-512.png   icon-maskable-512.png
```

## 하루의 기준 (중요)

`dayOff()` — 지금이 '오늘'인지 '내일'인지 판단합니다.

| 시각 | 보여주는 날 |
|---|---|
| 아침·낮 | 오늘 |
| 저녁 ~ 취침 2시간 전 | 오늘 |
| **취침 2시간 전 ~ 자정** | **내일** (기본 취침 23:00 → 21:00부터) |
| 자정 ~ 새벽 5시 | 오늘 (그 '내일'이 곧 오늘이므로) |

날씨·운세·야구 카드가 이 기준을 따릅니다. 새 카드도 `baseDate()`를 쓰세요.

## 카드가 많을 때

`body[data-density]`가 자동 전환 (8개 이하 기본 / 9~11 compact / 12+ tight).
새 카드를 만들면 `app.css`의 `tight` 블록에 **접을 부분**을 추가하세요.

## 외부 통신 주의

- **날씨** — 한반도 좌표면 `&models=kma_seamless`(기상청 모델)를 붙입니다. 값이 비면 기본 모델로 재시도
- **`daily=`에 `time`을 넣으면 400 오류** (자동 포함됨)
- **야구** — `eventslast`가 1~2건만 줄 때가 있어, 끝난 경기가 3개 미만이면 `eventsseason`에서 보충
- **뉴스·나이스** — CORS가 없어 프록시 체인을 거침
- 대기질 값은 숫자 확인 후 표시 (NaN 방지)

## 시간표 (나이스)

`js/neis.js` — 학교 검색 `schoolInfo`, 시간표 `misTimetable`(중)/`elsTimetable`(초)/`hisTimetable`(고).
인증키 없으면 5건만 나오므로 **키가 사실상 필수**. 발급법은 `SETUP-SYNC.md`.

## CSS 규칙

- `onboard.css` 변수는 전부 `--ob-` 접두사
- 전체 화면 오버레이에 `display:flex`를 줄 때는 `[hidden]{display:none!important}` 필수

## 남은 작업

- [ ] 나이스 인증키 발급 → 설정에 입력 → 실제 조회 확인
- [ ] Firebase 익명·이메일 로그인 켜기, 규칙 게시
- [ ] 앱 이름 확정 → 패키지 ID 결정
- [ ] Capacitor 패키징
- [ ] 폐쇄 테스트 12명 × 14일
