/**
 * Register the Service Worker
 */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js', {scope: '/'}).then(function(registration) {
    console.log('Service worker registration complete!');
  }).catch((error) => {
    console.log('Service worker registration failed:', error);
  });
}