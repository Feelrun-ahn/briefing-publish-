# Android 패키징 (PC 에서)

## 1. 준비

```bash
mkdir briefing-android && cd briefing-android
npm init -y
npm i @capacitor/core @capacitor/android @capacitor/local-notifications @capacitor/app @capacitor/keyboard @capacitor/status-bar
npm i -D @capacitor/cli
npx cap init Briefing io.github.feelrun.briefing --web-dir=www
```

`capacitor.config.json` 을 이 폴더의 것으로 바꾸세요.

## 2. 웹 파일 넣기

`www/` 폴더에 배포 파일 11개를 그대로 복사합니다.
(index.html · app.css · onboard.css · app.js · manifest.json · sw.js ·
 admin.html · privacy.html · 아이콘 3개)

**`admin.html` 은 앱에 넣지 마세요.** 관리자 화면은 웹에만 두면 됩니다.

## 3. 안드로이드 프로젝트 만들기

```bash
npx cap add android
npx cap sync android
npx cap open android      # Android Studio 가 열립니다
```

## 4. Android Studio 에서 확인할 것

`android/app/build.gradle`

```gradle
android {
    compileSdk 36
    defaultConfig {
        applicationId "io.github.feelrun.briefing"
        minSdk 23
        targetSdk 36
        versionCode 1
        versionName "1.0.0"
    }
}
```

- **아이콘** — `res/mipmap-*` 에 적응형 아이콘(전경 + 배경) 넣기
- **뒤로 가기** — 설정·모달이 열려 있으면 닫고, 아니면 앱 종료
- **가장자리까지** — `android:windowLayoutInDisplayCutoutMode="shortEdges"`
- **키보드** — `windowSoftInputMode="adjustResize"` 를 쓰면 화면 높이가 바뀝니다.
  앱은 폭이 바뀔 때만 다시 그리므로 문제없지만, 직접 확인하세요

## 5. 서명하고 올리기

```bash
keytool -genkey -v -keystore briefing.keystore -alias briefing \
  -keyalg RSA -keysize 2048 -validity 10000
```

**이 파일과 비밀번호를 잃어버리면 앱을 영영 갱신할 수 없습니다.** 따로 백업하세요.

Android Studio → Build → Generate Signed Bundle → **AAB**

## 6. 알림

지금은 웹 알림(Notification API)을 씁니다. 안드로이드에서는
`@capacitor/local-notifications` 로 바꾸는 것이 앱이 꺼져 있어도 잘 옵니다.

`js/notify.js` 의 `Notify.show()` 안에서 갈라 쓰면 됩니다.

```js
if (window.Capacitor && Capacitor.isNativePlatform()) {
  // LocalNotifications.schedule(...)
} else {
  // new Notification(...)
}
```

**두 방식이 동시에 뜨지 않도록 반드시 한쪽만 실행하세요.**

## 7. 뉴스·시간표

네이티브 앱에서는 CORS 가 없어 `news.google.com` 을 직접 부를 수 있습니다.
`NEWS_SOURCES` 의 첫 번째(직접 호출)가 바로 통과합니다.
시간표는 중계 서버(`server/worker.js`)를 그대로 씁니다.
