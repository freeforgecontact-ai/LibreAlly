/* CaptiLive — Service Worker (cache-first) */
const CACHE = 'captilive-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE);
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
        await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
      } catch (err) {
        console.warn('[SW] activate cleanup failed:', err);
      }
    })()
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    (async () => {
      try {
        const cached = await caches.match(e.request);
        if (cached) return cached;
        const resp = await fetch(e.request);
        if (resp && resp.status === 200 && resp.type !== 'opaque') {
          try {
            const cache = await caches.open(CACHE);
            cache.put(e.request, resp.clone());
          } catch (_) {}
        }
        return resp;
      } catch (err) {
        const cached = await caches.match(e.request);
        if (cached) return cached;
        return new Response('Hors-ligne — ressource non disponible', { status: 503 });
      }
    })()
  );
});
