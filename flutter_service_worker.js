'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "48dd2b90278713847c6ba1932eb57596",
"assets/AssetManifest.bin.json": "196da63d2fe2dfbbbbed146ab98cc520",
"assets/AssetManifest.json": "7b51fd56886d11770541972520d21501",
"assets/assets/cesium_3d_map.html": "b0c3ac997452adb9348923b00b249971",
"assets/assets/icons/apple-logo.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/assets/icons/email.png": "d36f7a6dce6ceb8cdcd93cc92db7cf87",
"assets/assets/icons/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/icons/mashawer_motorcycle_topdown.jpg": "d03b5bb6aaf8d9c289dc41762412c249",
"assets/assets/icons/real_motorcycle_rider_3d.png": "3cbc61cb0bf56c84b7c18af0eaa8fcde",
"assets/assets/icons/real_motorcycle_rider_side.png": "032f27a35e15e5feaec5c33a8b3b3ae2",
"assets/assets/logo/10.jpg": "5b8dc8446dc65e20e6cdbd4c731fd4ab",
"assets/assets/logo/11.jpg": "8ae8a7d12f4745d3d2b9c23cbe6ce08f",
"assets/assets/logo/12.jpg": "5b8dc8446dc65e20e6cdbd4c731fd4ab",
"assets/assets/logo/13.jpg": "bd999aa5609090d85f00a3522c36e216",
"assets/assets/logo/2.png": "290c40e20d21d3af4da2b0f57ea693ae",
"assets/assets/logo/3.png": "44a765b297d7f2772bc24fc1e36a2f1d",
"assets/assets/logo/4.png": "b7b8801ec01df135bee6835dba175764",
"assets/assets/logo/5.png": "678426184b1110a1d96dc81457970d36",
"assets/assets/logo/6.png": "8ba631f54e0db48ea910d0fccf3d11d0",
"assets/assets/logo/7.jpg": "98f174ac08edd3655459726f6ba342a8",
"assets/assets/logo/8.jpg": "f03a2d477eab9dff74b69c3c48015e86",
"assets/assets/logo/9.jpeg": "2f37cabfece65a76691eff8b21b28581",
"assets/assets/logo/image%25201.png": "17505d08430972c7832abba660b6ab8e",
"assets/assets/logo/image2.png": "954ab92518aecf879ba64368806b5796",
"assets/assets/logo/launcher_foreground.png": "edccb87e572f2ae5a32e9a4749bb81fc",
"assets/assets/logo/launcher_master.png": "37982e73755d1d46650fd71aa082ea01",
"assets/assets/logo/launcher_master_original_backup.png": "6941e418e6af8c514c2a39e7846fef6b",
"assets/assets/logo/Logo%2520mashawer.png": "4ca6fa52c199b63d7d2d722ba4ea3c4b",
"assets/assets/logo/logo_mashawerrr.png": "8413a62407845482916e11b0474ed903",
"assets/assets/logo/Mashawer-en%2520(1).png": "8b0dd90046e26713a39d5a1ef48f9986",
"assets/assets/logo/Mashawer-en%2520(2).png": "e87bf57bf929a496ff0a2cc0860d3aa6",
"assets/assets/logo/Mashawer-en(3).png": "545cfc914dd5216101a43f0ec65b8c57",
"assets/assets/logo/mashawerr.png": "fbdaa4c94ef326f6fdde73e77e78ee93",
"assets/assets/logo/mashwer-removebg-preview.png": "eda163d171e5a35b2ee4ffbfde857cc2",
"assets/assets/logo/Spalsh.mp4": "b99a324e4c5c61e60cea9925386f7973",
"assets/assets/logo/splash.png": "6e02c4db812d492aa8a7a20d215a2101",
"assets/assets/map_style_gray.json": "46cceb24201b979c448299e398381f00",
"assets/assets/map_style_night.json": "cd9e068b27865a156a23d484181252d2",
"assets/assets/sounds/order_waiting_tone.wav": "4fead8e895f00e8634210cd07b2a2a9a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "f3c877aee4c12845c2eec2acb3033418",
"assets/NOTICES": "97de7edd6e1179145b10e6bc5825d4c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "9b9790893c5e1b77df70c3128768dba2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ad5c351ae7c1ee4a7203d707809e0aa3",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "116cac6c8a7efcb10f1d93acb1a290df",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "2b77a2587eb1a3ab4e872f262a64cfa4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5fb03afad8c0b43a5d4455ce89d19587",
"/": "5fb03afad8c0b43a5d4455ce89d19587",
"logo.png": "eda163d171e5a35b2ee4ffbfde857cc2",
"main.dart.js": "148b2b0035391d73c9097219065b2654",
"manifest.json": "aff410566bb9da24043d7ddd53b7551e",
"version.json": "7b75545b52b6ede5d0aeed5ff7c6fc64"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
