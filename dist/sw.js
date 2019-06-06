importScripts("precache-manifest.d532c083e0377b4723446ec59a3e747c.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp("https://kaizengami.github.io/react-forms/build/"),
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

