/* =============================================
   GazeType — Service Worker (cache-first)
   NE cache PAS les ressources MediaPipe CDN
   (trop lourdes ; elles restent dans le cache HTTP navigateur)
   ============================================= */

'use strict';

const CACHE_NAME = 'gazetype-v1';

/* Ressources locales a mettre en cache */
const PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
];

/* Domaines a ne JAMAIS intercepter (MediaPipe CDN) */
const CDN_BYPASS = [
  'cdn.jsdelivr.net',
  'storage.googleapis.com',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      try {
        return cache.addAll(PRECACHE);
      } catch (e) {
        console.warn('[SW] Precache partiel :', e);
        return Promise.resolve();
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  var url;
  try { url = new URL(event.request.url); } catch (_) { return; }

  /* Bypass CDN MediaPipe : laisser le navigateur gerer */
  if (CDN_BYPASS.some(function(d) { return url.hostname === d; })) {
    return; /* pas d'interception */
  }

  /* Requetes non-GET : laisser passer */
  if (event.request.method !== 'GET') return;

  /* Cache-first pour tout le reste */
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;
      return fetch(event.request).then(function(response) {
        /* Ne mettre en cache que les reponses valides */
        if (response && response.status === 200 && response.type !== 'opaque') {
          try {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              try { cache.put(event.request, clone); } catch (_) {}
            });
          } catch (_) {}
        }
        return response;
      }).catch(function() {
        /* Hors-ligne et pas en cache : retourner page principale si possible */
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
        return new Response('', { status: 503, statusText: 'Service Unavailable' });
      });
    })
  );
});
