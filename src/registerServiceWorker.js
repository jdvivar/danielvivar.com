/* eslint-env worker, serviceworker */

console.log('v0.3');

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log("App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB");
    },
    registered (registration) {
      registration.skipWaiting();
      console.log('Service worker has been registered.')
    },
    cached(registration) {
      registration.skipWaiting();
      console.log("Content has been cached for offline use.");
    },
    updatefound (registration) {
      console.log('New content is downloading.')
    },
    updated(registration) {
      registration.skipWaiting()
      console.log("New content is available; please refresh.");
    },
    offline() {
      console.log("No internet connection found. App is running in offline mode.");
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    }
  });
}
