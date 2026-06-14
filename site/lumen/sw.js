/* ================================================================
   LUMEN — Service Worker
   Stratégie : Cache-First pour toutes les ressources locales.
   La caméra (getUserMedia) est gérée par le navigateur, pas le SW.
   ================================================================ */

var CACHE_NAME = 'lumen-v2-cache';

/* Ressources à pré-cacher à l'installation */
var PRECACHE_URLS = [
  './index.html',
  './manifest.webmanifest'
];

/* ----------------------------------------------------------------
   INSTALL — pré-cache des ressources essentielles
---------------------------------------------------------------- */
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return Promise.all(
        PRECACHE_URLS.map(function (url) {
          return cache.add(url).catch(function (err) {
            /* Ignorer les erreurs individuelles pour ne pas bloquer l'install */
            console.warn('[Lumen SW] Pré-cache échoué pour ' + url + ':', err);
          });
        })
      );
    }).then(function () {
      /* Prendre le contrôle immédiatement sans attendre de rechargement */
      return self.skipWaiting();
    }).catch(function (err) {
      console.warn('[Lumen SW] Erreur install:', err);
    })
  );
});

/* ----------------------------------------------------------------
   ACTIVATE — nettoyer les anciens caches
---------------------------------------------------------------- */
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key) { return caches.delete(key).catch(function () {}); })
      );
    }).then(function () {
      /* Prendre le contrôle de tous les clients ouverts */
      return self.clients.claim();
    }).catch(function (err) {
      console.warn('[Lumen SW] Erreur activate:', err);
    })
  );
});

/* ----------------------------------------------------------------
   FETCH — Cache-First avec fallback réseau
   Seulement pour les requêtes same-origin GET.
   Les requêtes caméra (getUserMedia) ne passent pas par le SW.
---------------------------------------------------------------- */
self.addEventListener('fetch', function (event) {
  /* Ne gérer que les requêtes GET same-origin */
  var url;
  try { url = new URL(event.request.url); } catch (e) { return; }

  if (event.request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;

  /* Exclure les requêtes non-HTTP (ex: chrome-extension://) */
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) {
        /* Ressource en cache : la retourner immédiatement */
        /* En arrière-plan, tenter une mise à jour du cache */
        var fetchUpdate = fetch(event.request).then(function (response) {
          if (response && response.ok) {
            try {
              caches.open(CACHE_NAME).then(function (cache) {
                cache.put(event.request, response.clone()).catch(function () {});
              });
            } catch (e) {}
          }
          return response;
        }).catch(function () { return null; });

        return cached;
      }

      /* Pas en cache : aller chercher en réseau et mettre en cache */
      return fetch(event.request).then(function (response) {
        if (!response || !response.ok) return response;
        try {
          var toCache = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, toCache).catch(function () {});
          });
        } catch (e) {}
        return response;
      }).catch(function (err) {
        /* Hors-ligne et pas de cache : retourner une réponse d'erreur propre */
        console.warn('[Lumen SW] Ressource non disponible hors-ligne :', event.request.url, err);
        return new Response(
          '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>Hors-ligne</title></head>' +
          '<body style="font-family:sans-serif;padding:40px;text-align:center;">' +
          '<h1 style="color:#0F4C81">Lumen</h1>' +
          '<p>Cette ressource n\'est pas disponible hors-ligne.</p>' +
          '<p><a href="./index.html">Retour à l\'application</a></p>' +
          '</body></html>',
          { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 503 }
        );
      });
    }).catch(function (err) {
      console.warn('[Lumen SW] Erreur fetch handler:', err);
      return fetch(event.request).catch(function () {
        return new Response('', { status: 503 });
      });
    })
  );
});

/* ----------------------------------------------------------------
   MESSAGE — communication avec la page
---------------------------------------------------------------- */
self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports && event.ports[0] && event.ports[0].postMessage({ version: CACHE_NAME });
  }
});
