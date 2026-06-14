/* ================================================================
   ColorAide — Service Worker (cache-first, offline-first)
   Version : 1.0.0
   ================================================================ */

'use strict';

const CACHE_NAME = 'coloraide-v1';

/* Fichiers à mettre en cache immédiatement */
const PRECACHE_URLS = [
  './index.html',
  './manifest.webmanifest'
];

/* ---- INSTALL : pré-cache les ressources statiques ---- */
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(PRECACHE_URLS);
      } catch (err) {
        /* Echec silencieux : l'appli fonctionne quand même en ligne */
        console.warn('[SW] Pré-cache partiel :', err);
      }
      /* Activation immédiate sans attendre l'onglet existant */
      await self.skipWaiting();
    })()
  );
});

/* ---- ACTIVATE : nettoyage des anciens caches ---- */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(
          keys
            .filter((k) => k !== CACHE_NAME)
            .map((k) => caches.delete(k))
        );
      } catch (err) {
        console.warn('[SW] Nettoyage cache :', err);
      }
      /* Prend le contrôle de tous les onglets ouverts */
      await self.clients.claim();
    })()
  );
});

/* ---- FETCH : cache-first avec repli réseau ---- */
self.addEventListener('fetch', (event) => {
  /* On ne gère que les requêtes GET de même origine
     et on ne tente jamais d'intercepter la caméra/getUserMedia */
  const url = new URL(event.request.url);

  /* Exclure : requêtes cross-origin, non-GET, data URIs */
  if (
    event.request.method !== 'GET' ||
    (url.origin !== self.location.origin && !url.href.startsWith('data:'))
  ) {
    return; /* laisser passer sans interception */
  }

  event.respondWith(
    (async () => {
      try {
        /* 1. Chercher dans le cache */
        const cached = await caches.match(event.request, { ignoreSearch: false });
        if (cached) return cached;

        /* 2. Sinon tenter le réseau */
        try {
          const networkResponse = await fetch(event.request);
          /* Mettre en cache uniquement les réponses valides de même origine */
          if (
            networkResponse.ok &&
            url.origin === self.location.origin
          ) {
            try {
              const cache = await caches.open(CACHE_NAME);
              cache.put(event.request, networkResponse.clone());
            } catch (_) {/* cache plein ou quota dépassé, ignorer */}
          }
          return networkResponse;
        } catch (networkErr) {
          /* Réseau indisponible et ressource non cachée */
          /* Pour les pages HTML on renvoie index.html si disponible */
          if (event.request.headers.get('accept')?.includes('text/html')) {
            const fallback = await caches.match('./index.html');
            if (fallback) return fallback;
          }
          /* Sinon réponse d'erreur minimale */
          return new Response('Hors-ligne — ressource non disponible', {
            status: 503,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          });
        }
      } catch (err) {
        console.warn('[SW] Fetch handler error :', err);
        return new Response('Erreur service worker', { status: 500 });
      }
    })()
  );
});

/* ---- MESSAGE : permet à la page de forcer une mise à jour ---- */
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
