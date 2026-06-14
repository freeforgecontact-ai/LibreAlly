'use strict';

const CACHE_NAME = 'signlearn-v3';
const ASSETS = [
  './index.html',
  './manifest.webmanifest',
  './sw.js',
  './letters/A.png',
  './letters/B.png',
  './letters/C.png',
  './letters/D.png',
  './letters/E.png',
  './letters/F.png',
  './letters/G.png',
  './letters/H.png',
  './letters/I.png',
  './letters/J.png',
  './letters/K.png',
  './letters/L.png',
  './letters/M.png',
  './letters/N.png',
  './letters/O.png',
  './letters/P.png',
  './letters/Q.png',
  './letters/R.png',
  './letters/S.png',
  './letters/T.png',
  './letters/U.png',
  './letters/V.png',
  './letters/W.png',
  './letters/X.png',
  './letters/Y.png',
  './letters/Z.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(ASSETS);
      } catch (err) {
        console.warn('[SW] install cache failed:', err);
      }
    })()
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(
          keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
        );
      } catch (err) {
        console.warn('[SW] activate cleanup failed:', err);
      }
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    (async () => {
      try {
        const cached = await caches.match(e.request);
        if (cached) return cached;
        const response = await fetch(e.request);
        if (response && response.status === 200) {
          try {
            const cache = await caches.open(CACHE_NAME);
            cache.put(e.request, response.clone());
          } catch (_) {}
        }
        return response;
      } catch (err) {
        const cached = await caches.match(e.request);
        if (cached) return cached;
        return new Response('Hors-ligne — contenu non disponible.', {
          status: 503,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      }
    })()
  );
});
