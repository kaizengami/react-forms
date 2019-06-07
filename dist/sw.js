importScripts("precache-manifest.4dd7970775530d4d2f0ffd4669d1b4da.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp("https://kaizengami.github.io/react-forms/dist/"),
  new workbox.strategies.StaleWhileRevalidate()
);

self.addEventListener("push", event => {
  const title = "Get Started With Workbox";
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

workbox.precaching.precacheAndRoute(self.__precacheManifest);

