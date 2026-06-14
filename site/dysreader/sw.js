/* ================================================================
   DysReader — Service Worker v3.0
   Cache-first · 100 % hors-ligne
================================================================ */
'use strict';

var CACHE_NAME = 'dysreader-v3';
var ASSETS = [
  './index.html',
  './manifest.webmanifest'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    }).then(function() {
      return self.skipWaiting();
    }).catch(function(err) {
      console.warn('[SW] Erreur installation:', err);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys
          .filter(function(k) { return k !== CACHE_NAME; })
          .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    }).catch(function(err) {
      console.warn('[SW] Erreur activation:', err);
    })
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  try {
    var url = new URL(e.request.url);
    if (url.origin !== self.location.origin) return;
  } catch(err) { return; }

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(response) {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        var toCache = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(e.request, toCache);
        }).catch(function() {});
        return response;
      }).catch(function() {
        /* Hors-ligne et ressource non en cache */
        return new Response('Ressource non disponible hors-ligne.', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });
    }).catch(function(err) {
      console.warn('[SW] Erreur fetch:', err);
    })
  );
});
