/**
 * Adding the files into an array so they can be cached.
 */
const cacheFiles = [
	"/",
	'/index.html',
	'/restaurant.html',
	'/css/styles.css',
	'/css/styles-medium.css',
	'/css/styles-large.css',
	'/data/restaurants.json',
	'/js/dbhelper.js',
	'/js/main.js',
	'/js/restaurant_info.js',
	'/img/1.jpg',
	'/img/2.jpg',
	'/img/3.jpg',
	'/img/4.jpg',
	'/img/5.jpg',
	'/img/6.jpg',
	'/img/7.jpg',
	'/img/8.jpg',
	'/img/9.jpg',
	'/img/10.jpg'
];
/**
 * Creating the cache.
 */
self.addEventListener ('install', (event) => {
	event.waitUntil (
		caches.open('restaurant-review-static').then((cache) => {
			return cache.addAll(cacheFiles);
		}).catch((error) => {
			console.log ('Caches open failed: ' + error);
		})
	);
});
/**
 * Show code while offline. I decided to use this code as it is simple and it works. I updated it to es6 with arrow functions as well as added the functionality for restaurant.html to load properly. 
 * See code documentation at:
 * https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network
 * https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
 * https://developer.mozilla.org/en-US/docs/Web/API/Location
 */
self.addEventListener('fetch', (event) => {
	// creating a variable for the requested URL. This is to be able to load the restaurants' info pages.
	//this bypasses the parameter or key that should appear after /restaurant.html which allows the correct page to load based on the cached files and the code.
	const requestUrl = new URL(event.request.url);
	if (requestUrl.pathname.startsWith('/restaurant.html')) {
      event.respondWith(caches.match('/restaurant.html'));
    }
    //this allows for index.html to load but if there isn't a cache stored aleady, the page will try to fetch the contect through the network.
	event.respondWith(caches.match(event.request).then((response) => {
		return response || fetch(event.request);
	})) 
});
