# 기기 연결 켜는 법 (개발자용)

앱에는 기기 연결 UI가 이미 들어 있지만, **Firebase 값을 넣기 전에는 동작하지 않습니다.**
사용자에게는 "배포 설정이 아직 준비되지 않았습니다"로 안내되고 앱의 다른 기능은 정상입니다.

## 1. Firebase 프로젝트 준비

1. `console.firebase.google.com` → 프로젝트 생성
2. **빌드 → Authentication → 시작하기 → 익명(Anonymous)** 사용 설정
3. **빌드 → Firestore Database → 만들기** (위치 `asia-northeast3`, 프로덕션 모드)

## 2. 보안 규칙

Firestore → 규칙에 붙여넣고 게시:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // 연결 코드: 만든 사람만 쓰고, 로그인한 사람은 읽을 수 있음
    match /links/{code} {
      allow read: if request.auth != null;
      allow create, update: if request.auth != null
        && request.resource.data.uid == request.auth.uid;
    }

    // 데이터 공간: 코드로 합류한 사람만 접근하도록 members 배열로 관리
    match /spaces/{uid} {
      allow read, write: if request.auth != null;
    }
  }
}
```

> 위 규칙은 **로그인한 사용자면 spaces를 읽을 수 있는** 느슨한 형태입니다.
> 정식 출시 전에는 spaces 문서에 `members` 배열을 두고
> `request.auth.uid in resource.data.members` 로 조이는 것을 권장합니다.

## 3. 앱에 값 넣기

`js/sync.js` 맨 위:

```js
const SYNC_CFG = {
  project: '내-프로젝트-ID',
  apiKey:  'AIza...'      // 프로젝트 설정 → 일반 → 웹 API 키
};
```

## 4. 동작 방식

- 앱을 처음 연결할 때 **익명 로그인**이 자동으로 됩니다 (사용자는 아무것도 안 함)
- 태블릿에서 "이 기기가 주 화면이에요" → **6자리 코드** 발급
- 휴대폰에서 "코드를 받았어요" → 코드 입력 → 같은 공간 공유
- 변경이 생기면 1.2초 뒤 업로드, 다른 기기는 45초마다 확인

## 동기화되는 것

달력 일정 · 할 일 · 루틴 기록 · 물 기록 · 시간표 · 카드 구성

날씨·운세·수면 점수는 기기마다 따로 계산·기록됩니다.
