# 기기 연결 설정 (완료됨)

Firebase 값은 `js/sync.js`에 이미 들어가 있습니다.
아래 **두 가지만 Firebase 콘솔에서 확인**하면 동작합니다.

프로젝트: `morning-public`

---

## 1. 익명 로그인 켜기

**빌드 → Authentication → 시작하기 → Sign-in method → 익명(Anonymous) → 사용 설정**

이게 꺼져 있으면 연결 코드가 만들어지지 않습니다.

## 2. Firestore 규칙 (출시용 · 강화판)

**빌드 → Firestore Database → 규칙**에 아래를 붙여넣고 **게시**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // 연결 코드 — 로그인한 사람만 읽고, 자기 uid로만 만들 수 있음
    match /links/{code} {
      allow read: if request.auth != null;
      allow create, update: if request.auth != null
        && request.resource.data.uid == request.auth.uid;
      allow delete: if false;
    }

    // 오류 제보 — 누구나 남길 수 있고, 관리자만 읽는다
    match /reports/{id} {
      allow create: if request.auth != null
        && request.resource.data.text is string
        && request.resource.data.text.size() < 5000;
      allow read, update: if request.auth != null
        && request.auth.token.email == 'feelrun.ahn@gmail.com';   // ← 관리자 이메일로 바꾸세요
      allow delete: if request.auth != null
        && request.auth.token.email == 'feelrun.ahn@gmail.com';
    }

    // 데이터 공간 — 소유자이거나 members 에 들어 있는 사람만
    match /spaces/{uid} {
      allow create: if request.auth != null
        && request.auth.uid == uid
        && request.resource.data.owner == request.auth.uid;

      allow read: if request.auth != null
        && (request.auth.uid == uid
            || request.auth.uid in resource.data.members);

      // 내용 수정: 이미 members 인 사람만
      allow update: if request.auth != null
        && (request.auth.uid == uid
            || request.auth.uid in resource.data.members)
        && request.resource.data.owner == resource.data.owner;

      allow delete: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

### 이 규칙이 막아 주는 것

- 로그인하지 않은 요청은 전부 차단
- 남의 uid를 알아내도 **members 에 없으면 읽기 불가**
- 코드로 합류할 때만 members 에 추가됨 (앱이 자동 처리)
- 소유자(owner) 필드는 바꿔치기 불가

---

## 동작 방식

1. 앱이 처음 연결할 때 **익명 로그인** (사용자는 아무것도 안 함)
2. 태블릿: "이 기기가 주 화면이에요" → 공간 생성 + **6자리 코드** 발급
3. 휴대폰: 코드 입력 → 본인 uid가 members 에 추가됨 → 같은 공간 공유
4. 변경 시 1.2초 뒤 업로드, 다른 기기는 45초마다 확인
5. 토큰은 refresh token 으로 자동 갱신 (재로그인 불필요)

## 동기화되는 것

달력 일정 · 할 일 · 루틴 기록 · 물 기록 · 시간표 · 카드 구성

날씨 · 운세 · 수면 점수는 기기마다 따로 계산·기록됩니다.

## 개인정보처리방침에 넣을 문장

> 기기 연결 기능을 사용하는 경우, 이용자가 입력한 일정·할 일·루틴·시간표 정보가
> Google Firebase(Firestore)에 저장됩니다. 계정은 익명으로 생성되며 이름·이메일 등
> 개인 식별 정보는 수집하지 않습니다. 기기 연결을 사용하지 않으면 모든 정보는
> 이용자의 기기 안에만 저장됩니다.


---

## 관리자 페이지 (admin.html)

앱에서 들어온 오류 제보와 기능 제안을 확인하는 페이지입니다.

### 준비

1. **Firebase 콘솔 → Authentication → Sign-in method → 이메일/비밀번호 사용 설정**
2. **Users 탭 → 사용자 추가**로 관리자 계정을 하나 만듭니다
3. Firestore 규칙의 `reports` 항목에서 이메일을 그 계정으로 바꾸고 게시합니다

### 사용

`https://<주소>/admin.html` 로 접속해 관리자 계정으로 로그인하면
제보 목록이 최신순으로 보입니다.

- 처리 전 / 전체 / 오류 / 제안 으로 걸러 보기
- **처리 완료** 버튼으로 표시 (되돌리기 가능)
- 기기 정보는 접힌 상태로, 눌러서 펼쳐 봅니다

`admin.html`에는 `noindex`가 걸려 있어 검색에 잡히지 않지만
주소를 아는 사람은 접근할 수 있으므로 **보안은 로그인과 Firestore 규칙이 담당합니다.**
규칙을 반드시 게시하세요.

---

## 개인정보처리방침 (privacy.html)

플레이스토어 등록 시 방침 URL이 필요합니다.
`https://<주소>/privacy.html` 을 쓰면 됩니다.

앱 안에서는 설정 → 도움말에서 링크로 열 수 있습니다.


---

## 시간표 자동 연동 (나이스)

앱은 나이스 교육정보 개방 포털의 **중학교시간표(misTimetable)** 를 사용합니다.
(초등 `elsTimetable`, 고등 `hisTimetable` 도 학교 종류에 따라 자동 선택)

### 인증키 발급 (선택이지만 권장)

1. `open.neis.go.kr` 접속 → 회원가입 → 로그인
2. **마이페이지 → 인증키 발급**
3. 앱에서 **설정 → 카드 구성 → 시간표 설정 → 나이스 인증키**에 붙여넣기

키 없이도 조회되지만 횟수 제한이 빡빡합니다.

### 쓰는 법

설정 → 카드 구성 → 시간표 설정에서

- **학교 연결** — 학교 이름 검색 → 선택 → 학년·반 입력 → "시간표 가져오기"
  일주일치를 한 번에 받아 요일별로 저장합니다. 매주 자동으로 새로 받습니다.
- **직접 넣기** — 월~금 다섯 칸에 과목을 쉼표로 구분해 입력

### 참고

- 학교가 나이스에 시간표를 올리지 않았거나, 방학·주말이면
  "이번 주 시간표가 등록되어 있지 않습니다"가 뜹니다
- 2023학년도 8월 ~ 2024학년도 자료는 API로 조회되지 않습니다 (제공처 안내)
- 나이스는 CORS를 열어두지 않을 수 있어 프록시 체인을 거칩니다.
  Capacitor로 감싸면 직접 호출이 바로 통과합니다
