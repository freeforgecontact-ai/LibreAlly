/* VoxRead Service Worker — cache offline-first */
'use strict';

var CACHE = 'voxread-v1';
var ASSETS = [
  './index.html',
  './manifest.webmanifest',
  './vendor/tesseract.min.js',
  './vendor/worker.min.js',
  './vendor/tesseract-core-lstm.wasm.js',
  './vendor/tesseract-core-lstm.wasm',
  './vendor/tesseract-core-simd-lstm.wasm.js',
  './vendor/tesseract-core-simd-lstm.wasm',
  './vendor/tesseract-core-relaxedsimd-lstm.wasm.js',
  './vendor/tesseract-core-relaxedsimd-lstm.wasm',
  './vendor/fra.traineddata.gz'
];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      /* Cache index.html and manifest unconditionally; vendor files only if they exist */
      var must = ['./index.html', './manifest.webmanifest'];
      var optional = ASSETS.filter(function(a) { return must.indexOf(a) === -1; });
      return cache.addAll(must).then(function() {
        return Promise.all(optional.map(function(url) {
          return cache.add(url).catch(function() { /* vendor file absent — skip */ });
        }));
      });
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e) {
  /* Only handle GET requests to same origin */
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(resp) {
        if (!resp || !resp.ok) return resp;
        var clone = resp.clone();
        caches.open(CACHE).then(function(cache) { cache.put(e.request, clone); });
        return resp;
      });
    }).catch(function() {
      return caches.match('./index.html');
    })
  );
});
