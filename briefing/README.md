# Briefing (가칭)

앱 `https://feelrun-ahn.github.io/briefing-publish-/` ·
관리자 `.../admin.html` · 방침 `.../privacy.html` · 문의 `feelrun@kakao.com`

## 업로드 파일 (11개)
index.html · app.css · onboard.css · app.js · manifest.json · sw.js ·
admin.html · privacy.html · icon-192/512/maskable-512.png

---

# 타일 배치 (v34에서 전면 개편)

## 배치 상태는 한 곳에서만 — `js/layout.js`

```js
C.layout = { weather: { x:1, y:0, w:1 }, ... }
C.layoutMode = 'auto' | 'manual'
```

- `x` 열 번호, `y` 그 열 안의 순서, `w` 는 항상 1
- **높이·너비는 저장하지 않습니다.** 높이를 고정하면 내용이 잘리고,
  너비를 여러 열로 늘리면 열마다 높이가 다른 이 구조에서 카드가 겹칩니다
- 화면이 좁아 열이 줄면 `x` 를 그 범위로 접습니다 (폰 1열 ↔ 태블릿 3열 호환)

예전에는 `cardOrder`(순서)와 `cardCol`(열)로 **나뉘어 있었고**,
드래그는 DOM 을 직접 옮긴 뒤 DOM 에서 위치를 역산해 저장했습니다.
그래서 다시 그릴 때마다 값이 어긋났습니다. 지금은 그 둘을 쓰지 않습니다.

## 자동과 수동을 완전히 분리 — `js/core.js`

| | |
|---|---|
| `buildAuto()` | 열마다 높이를 맞춰 채움 (예전 방식) |
| `buildManual()` | 저장된 x·y 그대로 |
| `applyManual()` | 카드를 다시 만들지 않고 자리만 옮김 |

**수동 모드에서는 `rebalance()`와 `fitStage()`의 자동 재배치가 실행되지 않습니다.**
(자동 배치가 사용자가 정한 자리를 덮어쓰던 것이 예전 불안정의 핵심 원인)

## 편집 흐름 — `js/drag.js`

```
평소 → 카드 길게 누르기(0.45초) → 편집 모드(흔들림)
     → 끌기 → 놓일 자리 미리보기 → 손 떼면 확정·저장 → 완료
```

- 평소에는 드래그가 **없습니다.** 클릭·스크롤·입력을 방해하지 않습니다
- 버튼·입력칸 위에서는 길게 눌러도 편집으로 가지 않습니다
- 편집 전 손가락이 10px 이상 움직이면 스크롤로 봅니다
- 포인터 이벤트 하나로 마우스·터치·펜 처리, `setPointerCapture` 로
  손가락이 카드 밖으로 나가도 끊기지 않습니다
- 편집 모드 카드에 `touch-action:none` — 브라우저 스크롤과 충돌하지 않습니다
- `pointercancel` 에서 원래 배치로 되돌립니다

## 드래그 중에는 저장하지 않습니다

```
pointerdown → base = 지금 배치 (기준)
pointermove → preview = Layout.place(base, id, x, y)  ← 화면만
pointerup   → Layout.set(preview)                     ← 여기서 한 번만 저장
```

`Layout.place()` 는 열 안의 순서를 다시 세워 넣으므로 **겹침이 구조적으로 불가능**합니다.

## 크기 변경은 넣지 않았습니다

열마다 높이가 다른 이 구조(잘림 없는 배치)에서 카드를 2~3열로 넓히면
아래 카드와 겹쳐 클릭이 막힙니다. 실제로 구현해 보고 확인했습니다.
크기 변경을 넣으려면 격자 전체를 고정 행 높이로 바꿔야 하는데,
그러면 내용이 잘립니다. 잘리지 않는 쪽을 택했습니다.

---

## 렌더링 (`js/render.js`)
`setHTML`/`setText`/`setValue`/`setHidden` — 값이 같으면 DOM 을 건드리지 않습니다.
`paintTick`(매초·시계만) / `paintCard`(카드 하나) / `paint`(전체 재계산).

## 그 밖의 규칙
- body 에 `overflow-x:hidden` 금지 (세로 스크롤이 막힘)
- 목록 `max-height` · `line-clamp` 금지
- 새 문구는 4개 언어 모두에

## 남은 작업
- [ ] 나이스 인증키 · Firebase 설정 · 패키지 ID
- [ ] Capacitor 패키징 · Cloudflare Workers 중계
- [ ] 폐쇄 테스트 12명 × 14일
