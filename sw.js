const CACHE_NAME = 'pcb-calc-v1';
const ASSETS = ['./index.html', './manifest.json'];

// Instalar y guardar en caché
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

// Responder desde el caché si no hay internet
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});