
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('Mydata').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.htm',
          '/style.css',
        ]);
      })
    );
   });

   
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   
    event.respondWith(
      caches.open('Mydata').then(function(cache){
        return cache.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
      })
     
    );
   });