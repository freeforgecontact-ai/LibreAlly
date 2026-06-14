/* CalmSpace Service Worker — v1.0
   Cache-first stratégie pour fonctionnement 100 % hors-ligne.
   Aucune donnée émotionnelle n'est jamais transmise à un serveur.
*/
const CACHE_NAME = 'calmspace-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './sw.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Ignorer les requêtes non-GET et les extensions de navigateur
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Hors-ligne et pas en cache : renvoie la page principale
        return caches.match('./index.html');
      });
    })
  );
});
