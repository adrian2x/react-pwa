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
    const cache = await caches.open('assets')
    return cache.addAll(appShellAssets)
  }
  event.waitUntil(cacheUrls())
})

self.addEventListener('activate', (event) => {
  console.log('Service worker activated')
})

// Provide offline support by serving cached assets as a fallback
self.addEventListener('fetch', (event) => {
  // You could also use staleWhileRevalidate instead of networkFirst
  event.respondWith(networkFirst(event.request))
})

// Returns the cached response, using network to update cache
function staleWhileRevalidate(request) {
  return caches.match(request).then((cachedResponse) => {
    const networkFetch = fetch(request)
      .then((response) => {
        // update the cache with a clone of the network response
        const responseClone = response.clone()
        caches.open('requests').then((cache) => {
          cache.put(request, responseClone)
        })
        return response
      })
      .catch(function (reason) {
        console.error('ServiceWorker fetch failed: ', reason)
      })
    // prioritize cached response over network
    return cachedResponse || networkFetch
  })
}

// Returns the network response, using cached response as fallback
function networkFirst(request) {
  // Open the cache
  return caches.open('requests').then((cache) => {
    // Go to the network first
    return fetch(request).then((response) => {
      cache.put(request, response.clone())
      return response
    }).catch((error) => {
      console.error('ServiceWorker fetch failed: ', error)
      return cache.match(request)
    })
  })
}
