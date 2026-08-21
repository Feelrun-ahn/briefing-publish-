# Briefing (v41) — 서버 연결 완료

| | |
|---|---|
| 앱 | `https://feelrun-ahn.github.io/briefing-publish-/` |
| **서버** | **`https://briefing-api.feelrun.workers.dev`** |
| 상태 보기 | `.../admin?key=내가정한비밀번호` |
| 문의 | `feelrun@kakao.com` |

## 이번 판에서 바뀐 것

`js/neis.js` 의 `API_BASE` 에 서버 주소를 넣었습니다. **이 한 줄이 전부입니다.**

```js
let API_BASE = 'https://briefing-api.feelrun.workers.dev';
```

이제 이렇게 동작합니다.

| | 어디를 거치나 |
|---|---|
| 시간표 · 학교 검색 | **서버** (인증키가 서버에만 있음) |
| 야구 | **서버** (사용자끼리 한도를 나누지 않음) |
| 뉴스 | **서버** (공개 프록시를 쓰지 않음) |
| 날씨 | 앱에서 직접 (부하가 분산되어 이쪽이 안전) |

## 올린 뒤 확인할 것

1. 설정 → 카드 구성에서 **시간표** 켜기
2. 설정 → 카드 설정 → 시간표 → **학교 연결**
3. `목운중` 검색 → 목운중학교 선택 → 학년 `3`, 반 `15`
4. **시간표 가져오기**

시간표가 뜨면 서버가 제대로 붙은 것입니다.

## 서버 상태 보기

```
https://briefing-api.feelrun.workers.dev/admin?key=비밀번호
```

오늘 나이스 호출 수, 캐시로 아낀 비율, 막은 요청 수를 볼 수 있습니다.
나중에 나이스에 증설을 요청할 때 이 숫자가 근거가 됩니다.

## 다음에 할 것

- [ ] 급식 카드 (`/meal` 추가 + 카드 하나) — 시간표 확인되면 바로
- [ ] Capacitor 패키징 (`android-setup/`)
- [ ] 알림을 Capacitor Local Notifications 로
- [ ] Firebase 충돌 처리 (`updatedAt` 비교)
- [ ] 폐쇄 테스트 12명 × 14일

## 절대 어기면 안 되는 규칙

- 위치는 `Geo.set()` 으로만 바꿀 것
- `innerHTML =` 대신 `setHTML()`
- body 에 `overflow-x:hidden` 금지
- 목록 `max-height` · `line-clamp` 금지
- 1초 주기에서 `paint()` 금지 → `paintTick()`
- 수동 배치일 때 자동 재배치 금지
- 오류 문구에 추측을 넣지 말 것
- 새 문구는 4개 언어 모두에
