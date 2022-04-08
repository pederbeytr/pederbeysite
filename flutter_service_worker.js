'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "52141851c781a710381fd025933935e3",
"assets/assets/images/adre.PNG": "ac81fbb8a61977ab7f5b4bdbed32683a",
"assets/assets/images/apple.jpg": "e6b86fa36ef39367d41ad16f4dddd75f",
"assets/assets/images/argan.jpg": "01fe1143404b99a82450f99cfcab47cd",
"assets/assets/images/b12.png": "97a32c3804708200c66ab41e768a2b94",
"assets/assets/images/barfix.jpg": "cd5b98592c7dd651f8921abc2973822b",
"assets/assets/images/basket.jpg": "e933b52c3e2fb3403de451bb82c6de68",
"assets/assets/images/bisiklet.jpg": "5f2e12cf0960b0bbf8566a6e81d21fba",
"assets/assets/images/cadir.jpg": "0b6f3b4163c7a04aadc0ec9362866065",
"assets/assets/images/casper.png": "88e4d1d037322ceb2f57304938b4f19d",
"assets/assets/images/cay.jpg": "ad9e864eb44a63262282aa6942955173",
"assets/assets/images/cs.jpg": "3b95e24aeb9ad689e4b5c7344e309bc9",
"assets/assets/images/csgo.jpg": "eb0c9b697cd1ced1a0aae77efb2b396c",
"assets/assets/images/cvit.png": "ab94c8314a45a26da0ba13943cbec12a",
"assets/assets/images/deneme1.jpg": "28a1b5700b357f53ec7d54a605a7892a",
"assets/assets/images/direnc.jpg": "9959e3854fabb519c1ba11b82071cb46",
"assets/assets/images/epi.jpg": "37aa385ed0cb9b95bb3092033069862c",
"assets/assets/images/erikli.jpg": "a1bc6003c588d46adbc3044af63d8100",
"assets/assets/images/eset.jpg": "df7d43ca06bb9541ceb3a275d26f2384",
"assets/assets/images/far.PNG": "55a20ca4c38f93856ed817925a1017ad",
"assets/assets/images/fatura.png": "d04d891e39e98d2b36117bfafcd20cef",
"assets/assets/images/geri.png": "ba6cb19569c5d90403d005d05674dba6",
"assets/assets/images/golge.PNG": "914cf2b485bf5afe49d40cc76110a49f",
"assets/assets/images/gucci1.jpg": "45aa2b200419ada7b73b0a362dd75d4e",
"assets/assets/images/gucci1.PNG": "880c6b86ef7b97c59af8fb389a761b88",
"assets/assets/images/honor.jpg": "cbf7b1bd86b0827be998b182a29e61e9",
"assets/assets/images/ilac.jpg": "f3c08d947dfc322cda15db591159a176",
"assets/assets/images/jet.jpg": "86bda2694c5d6f7045ed7f10d4a1b396",
"assets/assets/images/kek.jpg": "09489fd62809988bd3709d55ad5e29a9",
"assets/assets/images/keko1.jpg": "ca678ec2f49cf763c5403fed4bd52076",
"assets/assets/images/keko1.PNG": "d0d052e0fa4dee430effaf471fc4f4dd",
"assets/assets/images/keko2.jpg": "c7ad1241a476f09bb5b2492f3cb4b14e",
"assets/assets/images/keko2.PNG": "e1029ab183220b5e7ad34510ba73b63f",
"assets/assets/images/kop.PNG": "abc5da049d918774e8ed49787742ddcf",
"assets/assets/images/kozmetik.png": "ebfe9efc66c69cbeba9d09f9dc4c1de4",
"assets/assets/images/lc1.jpg": "3fcb113a9b555e44a33d2f6b313b7074",
"assets/assets/images/lc1.PNG": "a1a2ab4bad02a9dc4fefdabe84ced40f",
"assets/assets/images/lc2.jpg": "4e463d157993f2037f1d55ea83da9e7e",
"assets/assets/images/lc2.PNG": "8e6d142be64ae3ed7f5017b9f7d185b2",
"assets/assets/images/lc3.jpg": "47bcfea4ed048a67463547c3372a84c4",
"assets/assets/images/lc3.PNG": "0aee873e4f2319f90738ac9fb98d67a8",
"assets/assets/images/lenova.jpg": "9533554b00654805089b8f44ace9b258",
"assets/assets/images/lenova.PNG": "44cba40071784054bd2d9d27100d77e2",
"assets/assets/images/logo.PNG": "d24ab1bf06a532bf47be6cd7e85583e6",
"assets/assets/images/logo2.png": "5e3d34ee244e9d17e8969d4d3049daad",
"assets/assets/images/lol.jpeg": "71630514989c0b14e56356934c5ad87e",
"assets/assets/images/macbookm.jpeg": "da259d2b162b7650015279e8b6c02100",
"assets/assets/images/macbookpro.jpg": "b897eaf26fd039a8a5f0cde8ae168407",
"assets/assets/images/market.jpg": "3fa68843b37125a40505953dceb12b11",
"assets/assets/images/maskara.PNG": "e7eae357a3b80072ab0cea53c24c35a2",
"assets/assets/images/monster.jpg": "76bb7978b0b361bdbd5539fea788e8b1",
"assets/assets/images/mont1.jpg": "47f864a0806d95c3febe27cf9bcd99ee",
"assets/assets/images/mont1.PNG": "2fc974d610d8f5b670caf8d318994d52",
"assets/assets/images/morf.jpg": "93a0dc8c3c41f594761dc9aff259f915",
"assets/assets/images/msi.jpg": "a8311a1be46be8a852717f7bbc1e0c73",
"assets/assets/images/nude1.PNG": "d9b85988049ec5dac1f492fc0196886f",
"assets/assets/images/olta.jpg": "2aab164c297f550162c7cd4cc196ca26",
"assets/assets/images/palet.PNG": "f80c00c86a4cb325338578e2c7b5ea3d",
"assets/assets/images/parol.jpg": "5c0e4b8e25e988683bbed8a457d08d87",
"assets/assets/images/pro2.jpg": "e8370f74b551798252e27933d3da9546",
"assets/assets/images/protein.jpg": "542e9d5d26889c87dc9ca33aafacb091",
"assets/assets/images/ps.jpg": "7ed553047163a198d05cd85550a71efa",
"assets/assets/images/rainbow.PNG": "307b923e75bd5d1ff7ca653eb4a1c617",
"assets/assets/images/raptor.jpg": "1d5f61cadf6c1b71ade2d6ede19c6349",
"assets/assets/images/roac.jpg": "8f7afdbc5b07f662a7014360633e59d8",
"assets/assets/images/rolly.jpg": "e6f710fdba840a527efac23cf7f44731",
"assets/assets/images/ru.PNG": "147ff531160608332bbab7dcb28ba5ad",
"assets/assets/images/salca.jpg": "3c9e4b0939c1afbc2d1c11d1d5356e5d",
"assets/assets/images/samp.PNG": "0e2c33de28711663a95536ef466f91a1",
"assets/assets/images/sucuk.jpg": "e765ccd5bebf25b4135a35115c80a513",
"assets/assets/images/tesla.png": "7468fb4833a8afa28b157978d26cfdd0",
"assets/assets/images/top.jpg": "759fbff75385f37a23b809db6eb91597",
"assets/assets/images/top.PNG": "a51ed957d001fabcba8934f525ef9bfe",
"assets/assets/images/top2.jpg": "c68229ea1fcf5d093752cde6672edb5c",
"assets/assets/images/toshiba.jpg": "fa990dd0e16eb41e551c2489e1add22e",
"assets/assets/images/tras.PNG": "801a5480b2a0d3c7597d765d9380b45a",
"assets/assets/images/ulker.jpg": "e0590ffc341462cc92d15e14aba992a2",
"assets/assets/images/valo.jpg": "63b7a30ba114e3a0a2aafa2585358de1",
"assets/assets/images/vergi.jpg": "823b61e042711594c7fac9617329ac67",
"assets/assets/images/win11.jpeg": "97085b926726fee03b273cb51dd613d5",
"assets/assets/images/xanax.jpg": "d0c615e3068134f18aa9e2729169d126",
"assets/assets/images/yat.jpg": "94a576598266fbf5bddba71110e274f5",
"assets/assets/images/zara.jpg": "17a8439649c0957b4326e4fe5bf2a0fe",
"assets/assets/images/zara1.png": "306bcaca652e3097a0bae9708b684b87",
"assets/assets/images/zara2.jpg": "df4c203af15ae78fff108e74fd1d7129",
"assets/assets/images/zara3.jpg": "5fa7d9484e4071d7a3c42cae7471dc80",
"assets/assets/images/zara5.jpg": "1d87554245329dfea4b35e233ca6c46d",
"assets/assets/images/zara6.jpg": "d486763020d584b4538314d077eb60d0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2ceedb153a9ddf191c47e7cb8b46fda6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf8726a71e8307ef69a351a848b4ba08",
"/": "bf8726a71e8307ef69a351a848b4ba08",
"main.dart.js": "ce7dd1dfcd7943cbe49723bcfacbe667",
"manifest.json": "697125ec2b8fcaf223041c9510567692",
"version.json": "91f2c5a24f0070c8ac38651418da804f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
