# Briefing (가칭)

앱 `https://feelrun-ahn.github.io/briefing-publish-/` ·
관리자 `.../admin.html` · 방침 `.../privacy.html` · 문의 `feelrun@kakao.com`

## 업로드 파일 (11개)
index.html · app.css · onboard.css · app.js · manifest.json · sw.js ·
admin.html · privacy.html · icon-192/512/maskable-512.png

## 배치 (v26에서 크게 바뀜)

- **카드는 내용 높이만** 갖습니다. `grow`로 늘어나지 않으므로 카드 안에 빈 공간이 생기지 않습니다
- **자동 배치는 큰 카드부터** 채웁니다(LPT). 순서대로 넣으면 큰 카드가 한 열에 몰려
  열 길이가 400px 넘게 벌어졌습니다. 지금은 60~120px 수준
- 열 안에서는 원래 순서를 지킵니다. **직접 조절 모드에서는 순서를 그대로** 씁니다
- 재배치는 카드 높이가 자리 잡은 뒤 400ms 후 한 번 더 실행합니다

## 절대 규칙 — 내용을 자르지 않는다
목록 `max-height` 없음, `line-clamp` 없음, `.card{overflow:visible}`.
넘치면 페이지가 아래로 스크롤됩니다.

## 입력 안정성
`typing()` 중에는 갱신 정지 · `refit()`은 폭 변화 24px 이상일 때만 ·
설정은 `bindLiveSave()`로 즉시 저장.

## 하루의 기준
설정 → 시간 → **내일 정보로 바뀌는 시각** (auto / 18~23시 / 끄기).
도움말 FAQ 5번에 설명.

## 남은 작업
- [ ] 나이스 인증키 발급
- [ ] Firebase 로그인 2종 켜고 규칙 게시
- [ ] 앱 이름 → 패키지 ID
- [ ] Capacitor 패키징 (뉴스·나이스 CORS 해결)
- [ ] 폐쇄 테스트 12명 × 14일
