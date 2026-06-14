/* DayFlow Service Worker v2 — cache-first, 100 % hors-ligne */
'use strict';

const CACHE = 'dayflow-v2';
const ASSETS = [
  './index.html',
  './manifest.webmanifest',
  './sw.js'
];

/* ── INSTALL : pré-cache de la coquille ── */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[DayFlow SW] install error:', err))
  );
});

/* ── ACTIVATE : nettoyage des anciens caches ── */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
      .catch(err => console.warn('[DayFlow SW] activate error:', err))
  );
});

/* ── FETCH : cache-first avec réseau en secours ── */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin) &&
      !e.request.url.startsWith('data:')) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (!resp || resp.status !== 200 || resp.type === 'opaque') return resp;
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone)).catch(() => {});
        return resp;
      }).catch(() => caches.match('./index.html'));
    })
  );
});

/* ── MESSAGES : notifications planifiées ── */
self.addEventListener('message', e => {
  if (!e.data || e.data.type !== 'SCHEDULE_NOTIF') return;

  const { title, body, tag, delay } = e.data;
  if (typeof delay !== 'number' || delay < 0) return;

  setTimeout(() => {
    self.registration.showNotification(title, {
      body,
      tag,
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3E%3Crect width='192' height='192' rx='32' fill='%230F4C81'/%3E%3Crect x='20' y='48' width='152' height='120' rx='16' fill='%23F4B81C'/%3E%3Crect x='60' y='20' width='16' height='40' rx='8' fill='%230F4C81'/%3E%3Crect x='116' y='20' width='16' height='40' rx='8' fill='%230F4C81'/%3E%3C/svg%3E",
      badge: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' rx='20' fill='%230F4C81'/%3E%3C/svg%3E",
      vibrate: [200, 100, 200],
      requireInteraction: false,
      silent: false
    }).catch(err => console.warn('[DayFlow SW] notification error:', err));
  }, delay);
});

/* ── NOTIFICATION CLICK ── */
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
      const existing = clients.find(c => c.url.includes('dayflow'));
      if (existing) return existing.focus();
      return self.clients.openWindow('./index.html');
    })
  );
});
