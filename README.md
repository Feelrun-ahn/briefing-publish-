# Briefing (가칭)

앱 `https://feelrun-ahn.github.io/briefing-publish-/` ·
관리자 `.../admin.html` · 방침 `.../privacy.html` · 문의 `feelrun@kakao.com`

## 업로드 파일 (11개)
index.html · app.css · onboard.css · app.js · manifest.json · sw.js ·
admin.html · privacy.html · icon-192/512/maskable-512.png

## 카드에서 원문 열기 (v27)

`js/links.js` — 카드 오른쪽 위의 작은 링크 버튼.

| 카드 | 열리는 곳 |
|---|---|
| 날씨 | 네이버 날씨 (설정한 지역으로 검색) |
| 야구 | 네이버 스포츠 (응원 팀 경기일정) |
| 뉴스 | 네이버 뉴스 |
| 운세 | 네이버 '오늘의 운세' |
| 시간표 | 나이스 |

카드 전체가 아니라 **버튼**으로 분리했습니다. 카드 안에 버튼이 많아
전체를 누르게 하면 오작동이 잦습니다. 새 카드에 링크를 붙이려면
`OpenLink.url()`과 `label()`에 추가하세요.

## 날씨 카드 배치

다른 날짜(최저/최고)를 볼 때는 `.wx-main.pair`가 붙어
**설명이 큰 숫자 위로 올라가고** 오른쪽 글자가 눌리지 않습니다.

## 배치
자동 배치는 **큰 카드부터** 채웁니다(LPT). 열 길이 차이 60~120px.
카드는 내용 높이만 갖고, `grow`로 늘어나지 않습니다.

## 절대 규칙
목록 `max-height` 없음, `line-clamp` 없음, `.card{overflow:visible}`.
넘치면 페이지가 아래로 스크롤됩니다.

## 입력 안정성
`typing()` 중 갱신 정지 · `refit()`은 폭 변화 24px 이상일 때만 ·
설정은 즉시 저장(`bindLiveSave`).

## 남은 작업
- [ ] 나이스 인증키 발급
- [ ] Firebase 로그인 2종 켜고 규칙 게시
- [ ] 앱 이름 → 패키지 ID
- [ ] Capacitor 패키징 (뉴스·나이스 CORS 해결)
- [ ] 폐쇄 테스트 12명 × 14일
