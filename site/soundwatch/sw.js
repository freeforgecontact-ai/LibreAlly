/* SoundWatch — Service Worker cache-first (hors-ligne) */
'use strict';

const CACHE_NAME = 'soundwatch-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
    }).catch(function (err) {
      console.warn('[SW] install cache failed', err);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_NAME; })
            .map(function (k) { return caches.delete(k); })
      );
    }).catch(function (err) {
      console.warn('[SW] activate cleanup failed', err);
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function (cached) {
      if (cached) return cached;
      return fetch(e.request).then(function (response) {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        try {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(e.request, clone).catch(function () {});
          });
        } catch (err) { /* silencieux */ }
        return response;
      }).catch(function () {
        return caches.match('./index.html');
      });
    }).catch(function () {
      return fetch(e.request);
    })
  );
});
