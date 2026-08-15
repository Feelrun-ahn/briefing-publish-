# Briefing (가칭)

아침·밤 두 얼굴을 가진 개인 대시보드. 플레이스토어 출시용 소스.

## 업로드할 파일 (11개)

```
index.html   app.css   onboard.css   app.js   manifest.json   sw.js
admin.html   privacy.html
icon-192.png   icon-512.png   icon-maskable-512.png
```

## 다국어

`js/i18n.js` — 한국어·English·日本語·中文 4개 언어, 문구 124개.
**새 문구를 넣을 때는 네 언어 모두에 넣어야** 합니다. 확인 방법:

```js
const ko = Object.keys(I18N.ko);
['en','ja','zh'].forEach(l => console.log(l, ko.filter(k => !(k in I18N[l]))));
```

날짜·요일은 `dateLabel()` / `ymLabel()` / `dows()`를 쓰세요.
소개 화면 마크업은 한국어 고정이라 그 안에서는 카드 이름도 한국어로 강제합니다(`inOnboard()`).
운세 본문과 명언은 언어별 목록을 따로 둡니다.

## 하루의 기준

`dayOff()` — 취침 2시간 전(기본 21:00)부터 자정까지는 '내일',
자정~새벽 5시와 낮에는 '오늘'. 새 카드는 `baseDate()`를 쓰세요.
기상·외출·취침은 설정에서 각각 **사용 안 함**으로 끌 수 있습니다(`useWake/useOut/useBed`).

## 화면 대응

- 열 수: 폰 1열 / 폴드처럼 정사각형에 가까우면 2열 / 그 외 3열
- 카드가 많으면 `body[data-density]`가 compact → tight로 바뀌며 덜 중요한 부분을 접음
- 가로 스와이프는 `touch-action:pan-y`와 `overscroll-behavior-x:none`으로 차단
- 380px 이하(플립 커버 등) 전용 보정 있음

## 외부 통신 주의

- **날씨** — 한반도면 `&models=kma_seamless`(기상청). `daily=`에 `time`을 넣으면 400 오류
- **야구** — `eventslast`가 부족하면 `eventsseason`에서 보충
- **뉴스** — CORS가 없어 프록시 6단계. 실패하면 어느 단계에서 막혔는지 카드에 표시
- **나이스** — 인증키 없으면 5건 제한
- 대기질은 숫자 확인 후 표시 (NaN 방지)

## CSS 규칙

- `onboard.css` 변수는 전부 `--ob-` 접두사
- 전체 화면 오버레이에 `display:flex`를 줄 때는 `[hidden]{display:none!important}` 필수

## 남은 작업

- [ ] 나이스 인증키 발급 → 설정 입력 → 실제 조회 확인
- [ ] Firebase 익명·이메일 로그인 켜기, 규칙 게시 (관리자 feelrun@kakao.com)
- [ ] 앱 이름 확정 → 패키지 ID 결정
- [ ] Capacitor 패키징
- [ ] 폐쇄 테스트 12명 × 14일
