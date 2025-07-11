// sw.js executes code in its own worker or thread
const appShellAssets = [
  '/',
  '/index.html',
  '/assets/index.js',
  '/assets/index.css',
  '/icons/favicon.png',
  '/icons/apple-180.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
]

// Installs the Service Worker and caches the app shell assets
self.addEventListener('install', (event) => {
  console.log('Service worker installed')

  let cacheUrls = async () => {
    const cache = await caches.open('mypwa-v1')
    return cache.addAll(appShellAssets)
  }
  event.waitUntil(cacheUrls())
})

self.addEventListener('activate', (event) => {
  console.log('Service worker activated')
})

// Provide offline support by serving cached assets using
// a "Stale While Revalidate" strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          // update the cache with a clone of the network response
          const responseClone = response.clone()
          caches.open('requests').then((cache) => {
            cache.put(event.request, responseClone)
          })
          return response
        })
        .catch(function (reason) {
          console.error('ServiceWorker fetch failed: ', reason)
        })
      // prioritize cached response over network
      return cachedResponse || networkFetch
    })
  )
})
