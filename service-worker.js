"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["0.ad7ba24ed276fe396453.worker.js","74f5ab6ce4c4b39c931f88a76aa0888b"],["ad7ba24ed276fe396453.worker.js","dab43d82c2d0001897e172e38cf52c4c"],["static/js/0.f1916b78f1d038707901.js","e86f2a4a2876f34c6ccf46cc6e6e0da2"],["static/js/1.dce8b7fd3a14bb31bf6f.js","4eb66d77f9573e2018b705544a28dd8e"],["static/js/10.17288e2e738e9b41fb03.js","fe98d79433f7fd17f5e1a3e646696a4a"],["static/js/11.a1fc2daf2de19b77d027.js","3cf86d06f53db67946572fec923a14ea"],["static/js/12.5b26c2fe84b19696db87.js","46e25f7319277b4e2b10d60524f29972"],["static/js/14.80d5c448d0da0fae299f.js","03d206ee4d56210fc0ed4129b51e4ae8"],["static/js/15.cca59fc063b0a7557a7f.js","a2980128851102e2cc4a1f67730f3c12"],["static/js/16.356d77f53a0c3516aae0.js","b56e422e8abce27b3b0796977bd37a65"],["static/js/17.097b3f1e6d67c79450da.js","b75c332b0e67bf7a0b8017e1db1a8918"],["static/js/18.0efce8e805b91c470ec7.js","e55fe70c52b1872aa1a52a4dd9f2c5ca"],["static/js/19.4911bf70430d0906e676.js","0b516fbfd2bce85ed9e56b572f5dab2a"],["static/js/2.de48579ed0fa1d5220b7.js","c2d9fdf35796287334a2f527ea7a6e6b"],["static/js/20.788322d0884e0bda930c.js","cb37de8e02a5e6c82603eb34f992f050"],["static/js/21.8ec89f45770d6989c5e4.js","eb4fb98e0944f7549f62f68ab2e05dec"],["static/js/22.36bfdf4e7e9af89cdebf.js","57bf081b22c90045d8fd0b6ddfc0093a"],["static/js/23.2ccbc4ca018bf48f11eb.js","cc440330850c6ab0f8e128282c7cdbc4"],["static/js/24.20a1ddf37dbee06d2492.js","a47ef1eddb6938f8a725ca38c495f499"],["static/js/25.56c8fd4d413fd9c0e269.js","3e22a4c2ce49d8544ff293a44ccd24af"],["static/js/26.fd55a66e7d66a0a6be02.js","7de21b4de65c95d3e705c439d9ab6140"],["static/js/27.e9103c3bb5f88fe462dd.js","37fe8d3c397de86b5a4176f8fb4dcfea"],["static/js/28.b1e46be32938499d4bd9.js","1530e389413953a8dc1feaae242b7d4e"],["static/js/29.45fcfb08d3c6de5884c1.js","4f92e276486bb3a79d86b6175a63c977"],["static/js/3.74a7e26c2dcdcf1cdea7.js","da7e6749079a053d4634cfc3a2077fdc"],["static/js/30.2f42b48e0d594f7e5e49.js","86799a90f086430819d882efb2deb5ea"],["static/js/4.a551d8a178305074d2ab.js","f3aab5a8324b9553733d63f8591685a9"],["static/js/5.d3bd0c807788ca4b708f.js","38a50dee6d3c8e623c8ebd0ae59a217e"],["static/js/6.94c6435a438fd558ff63.js","7d9c638fd4951269626584751a303ba1"],["static/js/7.56b3d3986dc3f1dd0f8e.js","5c6c3ca26dd602d3aeb830ec1ee97448"],["static/js/8.26b03ca7161b7b10dc69.js","174fcdc42495e79ae54b1c8ca000f6e1"],["static/js/9.6b498c8a2b4145d860ce.js","507baeecf153539eb4018b8a3b0a3719"],["static/js/app.b32adcc3737d897736f9.js","4555014c75d2855e4cb486fcb6b78e7a"],["static/js/vendor.0d96224c4c914224e5ed.js","3907c001d1637372fb8e610beb1d6b0e"]],cacheName="sw-precache-v3-oax-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var i="function"==typeof require&&require;if(!s&&i)return i(c,!0);if(a)return a(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var a="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function a(e,t,n){var o=e.url,a=n.maxAgeSeconds,c=n.maxEntries,s=n.name,i=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+a),u.getDb(s).then(function(e){return u.setTimestampForUrl(e,o,i)}).then(function(e){return u.expireEntries(e,c,a,i)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function c(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var s,i=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||i.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||i.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=a.bind(null,e,t,n);s=s?s.then(r):r()}(e,n,r)})}),r.clone()})},openCache:o,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return o(t).then(function(t){return t.add(e)})},uncache:function(e,t){return o(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||c(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:c,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",o=1,a="store",c="url",s="timestamp",i={};t.exports={getDb:function(e){return e in i||(i[e]=function(e){return new Promise(function(t,n){var i=indexedDB.open(r+e,o);i.onupgradeneeded=function(){i.result.createObjectStore(a,{keyPath:c}).createIndex(s,s,{unique:!1})},i.onsuccess=function(){t(i.result)},i.onerror=function(){n(i.error)}})}(e)),i[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,o){var c=e.transaction(a,"readwrite");c.objectStore(a).put({url:t,timestamp:n}),c.oncomplete=function(){r(e)},c.onabort=function(){o(c.error)}})},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,u=[],f=e.transaction(a,"readwrite"),h=f.objectStore(a);h.index(s).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[s]){var r=t.value[c];u.push(r),h.delete(r),t.continue()}},f.oncomplete=function(){r(u)},f.onabort=o}):Promise.resolve([])}(e,n,r).then(function(n){return function(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(a,"readwrite"),u=i.objectStore(a),f=u.index(s),h=f.count();f.count().onsuccess=function(){var e=h.result;e>t&&(f.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var a=r.value[c];o.push(a),u.delete(a),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){e("serviceworker-cache-polyfill");var r=e("./helpers"),o=e("./router"),a=e("./options");t.exports={fetchListener:function(e){var t=o.match(e.request);t?e.respondWith(t(e.request)):o.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(o.default(e.request))},activateListener:function(e){r.debug("activate event fired");var t=a.cache.name+"$$$inactive$$$";e.waitUntil(r.renameCache(t,a.cache.name))},installListener:function(e){var t=a.cache.name+"$$$inactive$$$";r.debug("install event fired"),r.debug("creating cache ["+t+"]"),e.waitUntil(r.openCache({cache:{name:t}}).then(function(e){return Promise.all(a.preCacheItems).then(function(e){return e.reduce(function(e,t){return e.concat(t)},[])}).then(r.validatePrecacheInput).then(function(t){return r.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,o=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),o=e("./helpers"),a=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),c.prototype.add=function(e,t,n,a){a=a||{};var c;t instanceof RegExp?c=RegExp:(c=a.origin||self.location.origin,c=c instanceof RegExp?c.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(c)),e=e.toLowerCase();var s=new r(e,t,n,a);this.routes.has(c)||this.routes.set(c,new Map);var i=this.routes.get(c);i.has(e)||i.set(e,new Map);var u=i.get(e),f=s.regexp||s.fullUrlRegExp;u.has(f.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,s)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,a(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],c=o&&o.get(e.toLowerCase());if(c){var s=a(c,n);if(s.length>0)return s[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){var a=n.cache||r.cache,c=Date.now();return o.isResponseFresh(t,a.maxAgeSeconds,c)?t:o.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,a=Date.now();if(o.isResponseFresh(e,t.maxAgeSeconds,a))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),o=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(a,c){var s=!1,i=[],u=function(e){i.push(e.toString()),s?c(new Error('Both cache and network failed: "'+i.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?a(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),o(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||r.successResponses,c=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",n),o.openCache(n).then(function(t){var s,i,u=[];if(c){var f=new Promise(function(a){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,c=Date.now(),s=t.maxAgeSeconds;o.isResponseFresh(e,s,c)&&a(e)})},1e3*c)});u.push(f)}var h=o.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),a.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(h),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),c=e("./strategies"),s=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,c=0,s="",i=t&&t.delimiter||"/";null!=(n=h.exec(e));){var u=n[0],f=n[1],d=n.index;if(s+=e.slice(c,d),c=d+u.length,f)s+=f[1];else{var l=e[c],p=n[2],b=n[3],m=n[4],g=n[5],v=n[6],w=n[7];s&&(r.push(s),s="");var x=null!=p&&null!=l&&l!==p,y="+"===v||"*"===v,j="?"===v||"*"===v,E=n[2]||i,R=m||g;r.push({name:b||o++,prefix:p||"",delimiter:E,optional:j,repeat:y,partial:x,asterisk:!!w,pattern:R?function(e){return e.replace(/([=!:$\/()])/g,"\\$1")}(R):w?".*":"[^"+a(E)+"]+?"})}}return c<e.length&&(s+=e.substr(c)),s&&r.push(s),r}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},c=(r||{}).pretty?function(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}:encodeURIComponent,s=0;s<e.length;s++){var i=e[s];if("string"!=typeof i){var u,h=a[i.name];if(null==h){if(i.optional){i.partial&&(o+=i.prefix);continue}throw new TypeError('Expected "'+i.name+'" to be defined')}if(f(h)){if(!i.repeat)throw new TypeError('Expected "'+i.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(i.optional)continue;throw new TypeError('Expected "'+i.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(u=c(h[d]),!t[s].test(u))throw new TypeError('Expected all "'+i.name+'" to match "'+i.pattern+'", but received `'+JSON.stringify(u)+"`");o+=(0===d?i.prefix:i.delimiter)+u}}else{if(u=i.asterisk?function(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}(h):c(h),!t[s].test(u))throw new TypeError('Expected "'+i.name+'" to match "'+i.pattern+'", but received "'+u+'"');o+=i.prefix+u}}else o+=i}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function c(e,t){return e.keys=t,e}function s(e){return e.sensitive?"":"i"}function i(e,t,n){f(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,i="",u=0;u<e.length;u++){var h=e[u];if("string"==typeof h)i+=a(h);else{var d=a(h.prefix),l="(?:"+h.pattern+")";t.push(h),h.repeat&&(l+="(?:"+d+l+")*"),i+=l=h.optional?h.partial?d+"("+l+")?":"(?:"+d+"("+l+"))?":d+"("+l+")"}}var p=a(n.delimiter||"/"),b=i.slice(-p.length)===p;return r||(i=(b?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&b?"":"(?="+p+"|$)",c(new RegExp("^"+i,s(n)),t)}function u(e,t,n){return f(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return c(e,t)}(e,t):f(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(u(e[o],t,n).source);return c(new RegExp("(?:"+r.join("|")+")",s(n)),t)}(e,t,n):function(e,t,n){return i(r(e,n),t,n)}(e,t,n)}var f=e("isarray");t.exports=u,t.exports.parse=r,t.exports.compile=function(e,t){return o(r(e,t))},t.exports.tokensToFunction=o,t.exports.tokensToRegExp=i;var h=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/^https:\/\/fonts\.googleapis\.com\//,toolbox.cacheFirst,{}),toolbox.router.get(/^https:\/\/fonts\.gstatic\.com\//,toolbox.cacheFirst,{}),toolbox.router.get(/^https:\/\/.*\//,toolbox.networkFirst,{});