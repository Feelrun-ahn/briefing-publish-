# Briefing (가칭)

앱 `https://feelrun-ahn.github.io/briefing-publish-/` ·
관리자 `.../admin.html` · 방침 `.../privacy.html` · 문의 `feelrun@kakao.com`

## 업로드 파일 (11개)
index.html · app.css · onboard.css · app.js · manifest.json · sw.js ·
admin.html · privacy.html · icon-192/512/maskable-512.png

## 절대 규칙 — 내용을 자르지 않는다 (v24)

예전에는 한 화면에 밀어넣으려고 목록에 `max-height`를 걸고 문장을 `line-clamp` 로
잘랐습니다. 그래서 운세가 두 줄에서 끊기고 루틴 목록이 잘렸습니다.

지금은 **아무것도 자르지 않고, 넘치면 페이지가 아래로 스크롤**됩니다.

- `.card{overflow:visible}` · 목록의 `max-height` 없음 · `line-clamp` 없음
- `fitStage()`는 밀도(여백)만 조정하고 열을 고르게 나눌 뿐, 크기를 줄이지 않음
- 새 카드를 만들 때 **높이를 제한하는 CSS를 넣지 말 것**

## 입력 안정성

- `typing()` — 입력 중이면 `paint`·`fitStage`·`rebalance`·주기 갱신·동기화 모두 건너뜀
- `refit()` — 폭이 24px 이상 바뀐 경우에만 다시 그림 (키보드 높이 변화 무시)
- 포커스가 있는 카드는 다시 그리지 않고, 저장 직후에만 직접 갱신 후 포커스 복원
- 엔터가 페이지를 벗어나지 않도록 온보딩·앱 모두 차단

## 카드 배치

`js/drag.js` — 카드 제목을 **길게 눌러(320ms) 끌면** 옮겨집니다. 홈 화면 위젯과 같은 방식.
설정의 좌·중·우 버튼은 없앴고, **자동 배치로 되돌리기** 버튼만 남았습니다.

## 뉴스와 CORS

구글 뉴스 RSS는 CORS 헤더가 없어 **브라우저에서는 프록시를 거쳐야** 합니다.
`NEWS_SOURCES`: rss2json → 직접 → allorigins → codetabs → corsproxy → jina.

**Capacitor로 감싸 스토어에 올리면 이 문제는 사라집니다.**
네이티브 앱의 요청은 브라우저 보안 정책(CORS)을 적용받지 않아
`news.google.com`을 직접 부를 수 있습니다. 나이스 API도 마찬가지입니다.

## 다국어
4개 언어 330여 문구. 새 문구는 네 언어 모두에 추가.

## 남은 작업
- [ ] 나이스 인증키 발급
- [ ] Firebase 로그인 2종 켜고 규칙 게시
- [ ] 앱 이름 → 패키지 ID
- [ ] Capacitor 패키징 (뉴스·나이스 CORS 해결)
- [ ] 폐쇄 테스트 12명 × 14일
