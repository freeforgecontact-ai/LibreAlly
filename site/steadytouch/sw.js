/* ================================================================
   SteadyTouch — Service Worker (cache-first, hors-ligne total)
   Version bump = CACHE_NAME suffix pour forcer le rafraîchissement
   ================================================================ */
'use strict';

const CACHE_NAME = 'steadytouch-v1';
const ASSETS = [
  './index.html',
  './manifest.webmanifest',
  './sw.js'
];

/* ---- INSTALL : mise en cache des ressources statiques ---- */
self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(ASSETS);
      } catch (err) {
        console.warn('[SW] install cache failed:', err);
      }
      await self.skipWaiting();
    })()
  );
});

/* ---- ACTIVATE : suppression des anciens caches ---- */
self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(
          keys
            .filter(k => k !== CACHE_NAME)
            .map(k => caches.delete(k))
        );
      } catch (err) {
        console.warn('[SW] activate cleanup failed:', err);
      }
      await self.clients.claim();
    })()
  );
});

/* ---- FETCH : cache-first avec fallback réseau ---- */
self.addEventListener('fetch', event => {
  /* On ne gère que les requêtes GET vers notre propre origine */
  if (event.request.method !== 'GET') return;

  event.respondWith(
    (async () => {
      try {
        const cached = await caches.match(event.request);
        if (cached) return cached;

        /* Pas en cache : on essaie le réseau puis on met en cache */
        try {
          const response = await fetch(event.request);
          if (response && response.status === 200) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(event.request, response.clone()).catch(() => {});
          }
          return response;
        } catch (_) {
          /* Hors-ligne et pas en cache — réponse d'erreur gracieuse */
          return new Response(
            '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>Hors-ligne</title></head>' +
            '<body style="font-family:system-ui;padding:2rem;background:#0F4C81;color:#fff;text-align:center">' +
            '<h1>SteadyTouch</h1><p>Cette ressource n\'est pas disponible hors-ligne.</p>' +
            '<a href="./index.html" style="color:#F4B81C">Retour à l\'accueil</a></body></html>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        }
      } catch (err) {
        console.warn('[SW] fetch handler error:', err);
      }
    })()
  );
});
