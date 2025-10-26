// service-worker.js
self.addEventListener("install", (event) => {
  self.skipWaiting(); // active immédiatement le SW
});

self.addEventListener("activate", (event) => {
  clients.claim(); // prend le contrôle des pages ouvertes
});
