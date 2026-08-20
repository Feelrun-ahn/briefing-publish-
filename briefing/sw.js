/* Briefing 서비스워커
   코드(HTML·CSS·JS·JSON)는 네트워크 우선 — 새로 올린 파일이 바로 반영됩니다.
   이미지만 캐시 우선. */
const CACHE = 'briefing-v34';
const SHELL = ['./', './index.html', './app.css?v=34','./onboard.css?v=34', './app.js?v=34', './manifest.json','./privacy.html',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('message', e => { if(e.data === 'skipWaiting') self.skipWaiting(); });

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type:'window', includeUncontrolled:true }).then(list => {
    for(const c of list) if('focus' in c) return c.focus();
    if(clients.openWindow) return clients.openWindow('./');
  }));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if(url.origin !== location.origin) return;          // 외부 API는 건드리지 않음

  const isImage = /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(url.pathname);

  if(!isImage){
    // 코드 파일은 항상 네트워크 우선
    e.respondWith(
      fetch(e.request, { cache:'no-store' })
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }
  // 이미지는 캐시 우선
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }))
  );
});
