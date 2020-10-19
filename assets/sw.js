const VERSION = 'v1'
self.addEventListener('install', event => {
  event.waitUntil(precache())
})

self.addEventListener('fetch', event =>{
  const request = event.request
  // solo queremos los request tipo GET
  if (request.method !== 'GET') {
    return
  }
  //ahora queremos buscar en el cache si ya tenemos este recurso
  event.respondWith(cachedResponse(request))

  // si un recurso camba (producción) nos gustaría actualizar el caché
  event.waitUntil(updateCache(request))
})


async function precache () {
  const cache = await caches.open(VERSION)
  return cache.addAll([
    // './',
    // './index.html',
    // './assets/index.js',
    // './assets/MediaPlayer.js',
    // './assets/plugins/AutoPlay.js',
    // './assets/plugins/AutoPause.ts',
    // './assets/index.css',
    // './assets/BigBuckBunny.mp4',
    // se comenta porque con el parcel, las rutas ya son distintas. NO bota error porque al igual la cache se actualiza con updateCache.
  ]);
}

async function cachedResponse(request) {
  // primero abro el cache. Esta es una respuesta async
  const cache = await caches.open(VERSION)
  // ahora preguntamos si ya tenemos esta request en el objeto cache
  const response = await cache.match(request)
  return response || fetch(request)
}
async function updateCache(request) {
  // primero abro el cache. Esta es una respuesta async
  const cache = await caches.open(VERSION)
  // ahora actualizamos la caché
  const response = await fetch(request)
  return cache.put(request, response)
}