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
