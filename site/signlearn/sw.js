'use strict';

const CACHE_NAME = 'signlearn-v2';
const ASSETS = [
  './index.html',
  './manifest.webmanifest',
  './sw.js'
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
