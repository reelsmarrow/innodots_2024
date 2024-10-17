'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3b8c7accd088b71c05115737ac7b2881",
"assets/AssetManifest.bin.json": "7878098a2204bb026cca78c9fb5863a1",
"assets/AssetManifest.json": "3fdf5218b0ebe868d370d4df2e90c319",
"assets/assets/fonts/HelveticaforTarget-Bold.ttf": "1a2617e694ef7b17b983a0f568697f26",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/icons/facebook.svg": "6292aeccbede66d5a893ca45804e3e1c",
"assets/assets/icons/forward_icon.svg": "149b95d990f5c6aa3145f2fc15ac6c2c",
"assets/assets/icons/insta.svg": "228880020192255f7640d285bc9e2f91",
"assets/assets/icons/linkedin.svg": "267ba494abec1111527f038b2ff8d898",
"assets/assets/icons/whatsapp.svg": "aeb59bb3ef1609bec56fb8c9dc882901",
"assets/assets/images/alan.jpeg": "d19e38cb2b5c04854e6f08f5c28b5391",
"assets/assets/images/alan.jpg": "395ac0631acbb7fe985e8429f261e2ba",
"assets/assets/images/alan.png": "95d6e20e5071f7fde7ac2f3c7def33e7",
"assets/assets/images/albert.jpg": "7498db5a16298436720a8beacf88c27f",
"assets/assets/images/ali.jpg": "3f7b61d55f8ea137d65676e32ca1b2c9",
"assets/assets/images/ali_group.jpg": "52c2643b9dea77401ea54a5628096739",
"assets/assets/images/anu.png": "215f5ef03657e139f3e3a3f4a5391497",
"assets/assets/images/anurag.jpg": "af729e85f1a450d45fd00d936ced166e",
"assets/assets/images/aromal.jpg": "2a24886101b70221113733ba929f4a89",
"assets/assets/images/banner.gif": "7d368d30263eeba4d51bc99c83e308e1",
"assets/assets/images/banner_video.gif": "b1afda80303ea64136702cac01d8aa21",
"assets/assets/images/bhavan.jpg": "84607cf69524033a8d46ee036546d067",
"assets/assets/images/branding.jpg": "c233f8427a5d090b538aa0f1f3a554be",
"assets/assets/images/case_banner.jpg": "663175783cbcc7be57a74dcecd35d31c",
"assets/assets/images/catalyst_banner.jpg": "84926cd02e1b76e4c19c8417b70a94c5",
"assets/assets/images/dana.jpeg": "31694946686ce5685b6fa70ec14a0529",
"assets/assets/images/danielberg.jpg": "97963fc42c87f598b22966993ee9424f",
"assets/assets/images/delenut.png": "cfc687239c392c8648316f05f730f007",
"assets/assets/images/design.jpg": "2ae3068929773df8b49e7e65aaac76be",
"assets/assets/images/digital.jpg": "4b1ea248f81341aee1d5f7227eeb9cac",
"assets/assets/images/digital_security.jpg": "e37afa863e9ada44969720e70ac89b23",
"assets/assets/images/directors.jpg": "50b1c2ae86e5a0c554c1c4a910cb9716",
"assets/assets/images/dreality.jpg": "e0750d2d857277feaad48b5b1868b6ed",
"assets/assets/images/dreality_banner.jpg": "97b795af5f2ae243daae48ce70080044",
"assets/assets/images/firmware.jpg": "5b5c160f17b64d8230975a41e86a2add",
"assets/assets/images/gokul.jpg": "cc5fe72ef74c0aebd92e3a79fd64b724",
"assets/assets/images/group.jpg": "a751c54567eaf5f180956e84814d07a2",
"assets/assets/images/hebin.jpg": "014d8b06bc1eeae780e8efaf4787a446",
"assets/assets/images/hebi_group.jpg": "b638a0f5c4ff9d4929b1acf55ea9ebc7",
"assets/assets/images/ideas.jpg": "eeffccfb319f5f026df931e772cd628c",
"assets/assets/images/IMG.png": "6ead71779959e75649cced2be199f150",
"assets/assets/images/innodots%2520catalyst%25201.jpg": "7f058a10a6da30e849d101dcc871e18a",
"assets/assets/images/innodots%2520catalyst%25202.jpg": "d2788c141fded98465a0251c16b1ce29",
"assets/assets/images/innodots%2520catalyst%25203.jpg": "0147c5b14b5459a12c48f1fae28cb7d4",
"assets/assets/images/innodots%2520catalyst%25204.jpg": "9a684ed662b8919a274733cd63ec465d",
"assets/assets/images/innodots%2520catalyst%25205.jpg": "40f0d57fd1d3c920d08ad91da541672d",
"assets/assets/images/innodots%2520catalyst%25206.jpg": "19c825761d90730ff0b2e875cfc8534c",
"assets/assets/images/innodots%2520catalyst%25207.jpg": "e8b08fe4cd850d270a3e74a97dc5ab3d",
"assets/assets/images/innodots%2520catalyst%25208.jpg": "36fdb3653f96998338a9567a8fb5e076",
"assets/assets/images/innodots%2520dreality%25201.jpg": "9742955f71dd5518bfd9c3cc8eec25c4",
"assets/assets/images/innodots%2520dreality%25202.jpg": "eac182a9c9092f8a87ddd737d9855b72",
"assets/assets/images/innodots%2520dreality%25203.jpg": "233f2bcda2416213ef4c0ae380d803b0",
"assets/assets/images/innodots%2520dreality%25204.jpg": "757426cef3ba16db27ba0a72a9fdf139",
"assets/assets/images/innodots%2520dreality%25205.jpg": "327d74013f7ecaa0c53d95e47df58fe5",
"assets/assets/images/innodots%2520dreality%25206.jpg": "6e1df23004efa19eea41bcacdb71af86",
"assets/assets/images/innodots%2520dreality%25207.jpg": "9b45bf0ae197460a5860461a878f2a1d",
"assets/assets/images/innodots%2520dreality.jpg": "c9d29969e19a9e536e20054758b6f0d9",
"assets/assets/images/Innodots_logo.jpg": "c07437434ef06627147165848736faae",
"assets/assets/images/karthik.jpg": "448efac120a123e1a9636df792d92ff7",
"assets/assets/images/katha.png": "964e29088178f599975e6c5ee7c603c0",
"assets/assets/images/Kimsat.png": "05a02d2c6ba52376df69808649885508",
"assets/assets/images/kimsat1.png": "1443bccb8c3a353288ae968fb2efcf7f",
"assets/assets/images/kimsat_case.jpeg": "9c0e7a38be2a2edf5fe24de83625d9b8",
"assets/assets/images/kimsat_case_study.jpg": "62203cac03f77266de227412e2bd134f",
"assets/assets/images/logo%2520(1).png": "6ead71779959e75649cced2be199f150",
"assets/assets/images/logo.png": "ef3d3af3a03ff6fba7982dbcd4a78a81",
"assets/assets/images/lucky.jpeg": "6db33fd8a4d0dab2bc8a21fa06ae4f79",
"assets/assets/images/mathrubhoomi.png": "baec55700899c7feae55ef23e7947553",
"assets/assets/images/mobile_applications.jpg": "9e2118f91008e45eaa4d32892f0932db",
"assets/assets/images/muktha.png": "96feb77e0ec67a8f379dc8d1c1f22c98",
"assets/assets/images/perfect.jpg": "b02057aeb19bd6257671735946d0098b",
"assets/assets/images/process_automation.jpg": "1974cd6d5ee6be94b2a41921871a966b",
"assets/assets/images/ramli.jpeg": "e4ed6688b2be861ad7ee0948c7c16d83",
"assets/assets/images/reelsmarrow.png": "5843f606337fc44b482cedc42d64e1c8",
"assets/assets/images/robotics.jpg": "0dbd2f94b6c6bfd6ef52c867e7611c76",
"assets/assets/images/romana.png": "7c99f45b4680957e89899208f1a6567a",
"assets/assets/images/romeo.jpg": "728684138cd7b424242b86582e3834ea",
"assets/assets/images/rpa.jpg": "87493b80ef9936639f2086d176d3203a",
"assets/assets/images/seo.jpg": "01ae0239c8756dee8e6baebde584c7d6",
"assets/assets/images/squas.jpg": "3d801a048bec83af8c7c9ed6f55d77d3",
"assets/assets/images/sushith.jpg": "1aba1995626ed6f2695bcc6808b155b2",
"assets/assets/images/team_table.jpg": "4eac1b10a3bb3ef39b81b62662f1ceb3",
"assets/assets/images/totalcare.jpg": "a4a4197749fb009d564343bb8af25a14",
"assets/assets/images/touchq.jpg": "2b7ec05896cd56d726966bfc1f07a5e9",
"assets/assets/images/ui_ux.jpg": "83f6404e42fc3e6beb8f04cd141d6c7d",
"assets/assets/images/valiant.jpg": "fbfb5a0b4f499de507fec55402eab4f7",
"assets/assets/images/wedland.png": "de809e537ad3f1c6cda986350faa0da7",
"assets/FontManifest.json": "7f1bb90f8e750a97469ab5d4b303a712",
"assets/fonts/MaterialIcons-Regular.otf": "b180d45547ef65e683c917f78de30c7f",
"assets/NOTICES": "79cc55acdf21f6384108f6ba18105f9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c7186fb225cd7087ebaf668355d040fb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "ef3d3af3a03ff6fba7982dbcd4a78a81",
"index.html": "5f56d4fcc175760f6d06a3ab6b9212c2",
"/": "5f56d4fcc175760f6d06a3ab6b9212c2",
"main.dart.js": "13fa077831b2dae6cd4f4a532ed8d4d7",
"manifest.json": "519a0a3d271061a7096c741d8839ee1c",
"version.json": "f204b9cfda948fb1bb50ba4fb3c79f6c"};
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
