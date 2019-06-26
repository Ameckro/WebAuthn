var CACHE_NAME = 'cache';
var urlsToCache = [
  '/',
  '/bundle.js',
  '/bundle.css',
  '/index.html',
  '/manifest.json',
  '/img/pwa.svg',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
         /* if (response) {
            return response;
          }*/
          return fetch(event.request);
        }
      )
    );
  });