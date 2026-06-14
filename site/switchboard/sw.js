/* SwitchBoard — Service Worker v1.0 — cache-first, offline-first */
'use strict';

const CACHE = 'switchboard-v1';
const ASSETS = [
  './index.html',
  './manifest.webmanifest'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE).then(cache => {
      try { return cache.addAll(ASSETS); } catch(e) { return Promise.resolve(); }
    }).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).catch(() => {})
  );
  self.clients.claim();
});

self.addEventListener('fetch', evt => {
  if (evt.request.method !== 'GET') return;
  evt.respondWith(
    caches.match(evt.request).then(cached => {
      if (cached) return cached;
      return fetch(evt.request).then(resp => {
        try {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(evt.request, clone)).catch(() => {});
        } catch(e) {}
        return resp;
      }).catch(() => caches.match('./index.html').then(r => r || new Response('Hors-ligne', {status: 503})));
    }).catch(() => new Response('Hors-ligne', {status: 503}))
  );
});
