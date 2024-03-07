!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t||self).Swup=e()}(this,function(){const t=new WeakMap;function e(e,n,o,r){if(!e&&!t.has(n))return!1;const i=t.get(n)??new WeakMap;t.set(n,i);const s=i.get(o)??new Set;i.set(o,s);const a=s.has(r);return e?s.add(r):s.delete(r),a&&e}const n=(t,e)=>String(t).toLowerCase().replace(/[\s/_.]+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,"")||e||"",o=function(t){let{hash:e}=void 0===t?{}:t;return window.location.pathname+window.location.search+(e?window.location.hash:"")},r=function(t,e){void 0===t&&(t=null),void 0===e&&(e={}),t=t||o({hash:!0});const n={...window.history.state||{},url:t,random:Math.random(),source:"swup",...e};window.history.replaceState(n,"",t)},i=(t,n,o,r)=>{const i=new AbortController;return function(t,n,o,r={}){const{signal:i,base:s=document}=r;if(i?.aborted)return;const{once:a,...c}=r,l=s instanceof Document?s.documentElement:s,u=Boolean("object"==typeof r?r.capture:r),h=r=>{const i=function(t,e){let n=t.target;if(n instanceof Text&&(n=n.parentElement),n instanceof Element&&t.currentTarget instanceof Element){const o=n.closest(e);if(o&&t.currentTarget.contains(o))return o}}(r,t);if(i){const t=Object.assign(r,{delegateTarget:i});o.call(l,t),a&&(l.removeEventListener(n,h,c),e(!1,l,o,d))}},d=JSON.stringify({selector:t,type:n,capture:u});e(!0,l,o,d)||l.addEventListener(n,h,c),i?.addEventListener("abort",()=>{e(!1,l,o,d)})}(t,n,o,r={...r,signal:i.signal}),{destroy:()=>i.abort()}};class s extends URL{constructor(t,e){void 0===e&&(e=document.baseURI),super(t.toString(),e),Object.setPrototypeOf(this,s.prototype)}get url(){return this.pathname+this.search}static fromElement(t){const e=t.getAttribute("href")||t.getAttribute("xlink:href")||"";return new s(e)}static fromUrl(t){return new s(t)}}const a=function(t,e){void 0===e&&(e={});try{const o=this;function n(n){const{status:i,url:a}=h;return Promise.resolve(h.text()).then(function(n){if(500===i)throw o.hooks.call("fetch:error",r,{status:i,response:h,url:a}),new c(`Server error: ${a}`,{status:i,url:a});if(!n)throw new c(`Empty response: ${a}`,{status:i,url:a});const{url:l}=s.fromUrl(a),u={url:l,html:n};return!r.cache.write||e.method&&"GET"!==e.method||t!==l||o.cache.set(u.url,u),u})}t=s.fromUrl(t).url;const{visit:r=o.visit}=e,i={...o.options.requestHeaders,...e.headers},a=e.timeout??o.options.timeout,l=new AbortController,{signal:u}=l;e={...e,headers:i,signal:u};let h,d=!1,f=null;a&&a>0&&(f=setTimeout(()=>{d=!0,l.abort("timeout")},a));const m=function(n,i){try{var s=Promise.resolve(o.hooks.call("fetch:request",r,{url:t,options:e},(t,e)=>{let{url:n,options:o}=e;return fetch(n,o)})).then(function(t){h=t,f&&clearTimeout(f)})}catch(t){return i(t)}return s&&s.then?s.then(void 0,i):s}(0,function(e){if(d)throw o.hooks.call("fetch:timeout",r,{url:t}),new c(`Request timed out: ${t}`,{url:t,timedOut:d});if("AbortError"===e?.name||u.aborted)throw new c(`Request aborted: ${t}`,{url:t,aborted:!0});throw e});return Promise.resolve(m&&m.then?m.then(n):n())}catch(p){return Promise.reject(p)}};class c extends Error{constructor(t,e){super(t),this.url=void 0,this.status=void 0,this.aborted=void 0,this.timedOut=void 0,this.name="FetchError",this.url=e.url,this.status=e.status,this.aborted=e.aborted||!1,this.timedOut=e.timedOut||!1}}class l{constructor(t){this.swup=void 0,this.pages=new Map,this.swup=t}get size(){return this.pages.size}get all(){const t=new Map;return this.pages.forEach((e,n)=>{t.set(n,{...e})}),t}has(t){return this.pages.has(this.resolve(t))}get(t){const e=this.pages.get(this.resolve(t));return e?{...e}:e}set(t,e){t=this.resolve(t),e={...e,url:t},this.pages.set(t,e),this.swup.hooks.callSync("cache:set",void 0,{page:e})}update(t,e){t=this.resolve(t);const n={...this.get(t),...e,url:t};this.pages.set(t,n)}delete(t){this.pages.delete(this.resolve(t))}clear(){this.pages.clear(),this.swup.hooks.callSync("cache:clear",void 0,void 0)}prune(t){this.pages.forEach((e,n)=>{t(n,e)&&this.delete(n)})}resolve(t){const{url:e}=s.fromUrl(t);return this.swup.resolveUrl(e)}}const u=function(t,e){return void 0===e&&(e=document),e.querySelector(t)},h=function(t,e){return void 0===e&&(e=document),Array.from(e.querySelectorAll(t))},d=()=>new Promise(t=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{t()})})});function f(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}const m=t=>window.CSS&&window.CSS.escape?CSS.escape(t):t,p=t=>1e3*Number(t.slice(0,-1).replace(",","."));class v{constructor(t){this.swup=void 0,this.swupClasses=["to-","is-changing","is-rendering","is-popstate","is-animating","is-leaving"],this.swup=t}get selectors(){const{scope:t}=this.swup.visit.animation;return"containers"===t?this.swup.visit.containers:"html"===t?["html"]:Array.isArray(t)?t:[]}get selector(){return this.selectors.join(",")}get targets(){return this.selector.trim()?h(this.selector):[]}add(){this.targets.forEach(t=>t.classList.add(...[].slice.call(arguments)))}remove(){this.targets.forEach(t=>t.classList.remove(...[].slice.call(arguments)))}clear(){this.targets.forEach(t=>{const e=t.className.split(" ").filter(t=>this.isSwupClass(t));t.classList.remove(...e)})}isSwupClass(t){return this.swupClasses.some(e=>t.startsWith(e))}}class g{constructor(t,e){this.id=void 0,this.state=void 0,this.from=void 0,this.to=void 0,this.containers=void 0,this.animation=void 0,this.trigger=void 0,this.cache=void 0,this.history=void 0,this.scroll=void 0;const{to:n,from:o=t.currentPageUrl,hash:r,el:i,event:s}=e;this.id=Math.random(),this.state=1,this.from={url:o},this.to={url:n,hash:r},this.containers=t.options.containers,this.animation={animate:!0,wait:!1,name:void 0,native:t.options.native,scope:t.options.animationScope,selector:t.options.animationSelector},this.trigger={el:i,event:s},this.cache={read:t.options.cache,write:t.options.cache},this.history={action:"push",popstate:!1,direction:void 0},this.scroll={reset:!0,target:void 0}}advance(t){this.state<t&&(this.state=t)}abort(){this.state=8}get done(){return this.state>=7}}function w(t){return new g(this,t)}const y="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function P(t,e,n){if(!t.s){if(n instanceof k){if(!n.s)return void(n.o=P.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(P.bind(null,t,e),P.bind(null,t,2));t.s=e,t.v=n;const o=t.o;o&&o(t)}}const k=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){const o=new t,r=this.s;if(r){const t=1&r?e:n;if(t){try{P(o,1,t(this.v))}catch(t){P(o,2,t)}return o}return this}return this.o=function(t){try{const r=t.v;1&t.s?P(o,1,e?e(r):r):n?P(o,1,n(r)):P(o,2,r)}catch(t){P(o,2,t)}},o},t}();function b(t){return t instanceof k&&1&t.s}class S{constructor(t){this.swup=void 0,this.registry=new Map,this.hooks=["animation:out:start","animation:out:await","animation:out:end","animation:in:start","animation:in:await","animation:in:end","animation:skip","cache:clear","cache:set","content:replace","content:scroll","enable","disable","fetch:request","fetch:error","fetch:timeout","history:popstate","link:click","link:self","link:anchor","link:newtab","page:load","page:view","scroll:top","scroll:anchor","visit:start","visit:transition","visit:abort","visit:end"],this.swup=t,this.init()}init(){this.hooks.forEach(t=>this.create(t))}create(t){this.registry.has(t)||this.registry.set(t,new Map)}exists(t){return this.registry.has(t)}get(t){const e=this.registry.get(t);if(e)return e;console.error(`Unknown hook '${t}'`)}clear(){this.registry.forEach(t=>t.clear())}on(t,e,n){void 0===n&&(n={});const o=this.get(t);if(!o)return console.warn(`Hook '${t}' not found.`),()=>{};const r=o.size+1,i={...n,id:r,hook:t,handler:e};return o.set(e,i),()=>this.off(t,e)}before(t,e,n){return void 0===n&&(n={}),this.on(t,e,{...n,before:!0})}replace(t,e,n){return void 0===n&&(n={}),this.on(t,e,{...n,replace:!0})}once(t,e,n){return void 0===n&&(n={}),this.on(t,e,{...n,once:!0})}off(t,e){const n=this.get(t);n&&e?n.delete(e)||console.warn(`Handler for hook '${t}' not found.`):n&&n.clear()}call(t,e,n,o){try{const r=this,[i,s,a]=r.parseCallArgs(t,e,n,o),{before:c,handler:l,after:u}=r.getHandlers(t,a);return Promise.resolve(r.run(c,i,s)).then(function(){return Promise.resolve(r.run(l,i,s,!0)).then(function(e){let[n]=e;return Promise.resolve(r.run(u,i,s)).then(function(){return r.dispatchDomEvent(t,i,s),n})})})}catch(t){return Promise.reject(t)}}callSync(t,e,n,o){const[r,i,s]=this.parseCallArgs(t,e,n,o),{before:a,handler:c,after:l}=this.getHandlers(t,s);this.runSync(a,r,i);const[u]=this.runSync(c,r,i,!0);return this.runSync(l,r,i),this.dispatchDomEvent(t,r,i),u}parseCallArgs(t,e,n,o){return e instanceof g||"object"!=typeof e&&"function"!=typeof n?[e,n,o]:[void 0,e,n]}run(t,e,n,o){void 0===o&&(o=!1);try{let r;const i=this;void 0===e&&(e=i.swup.visit);const s=[],a=function(t,e,n){if("function"==typeof t[y]){var o,r,i,s=t[y]();if(function t(a){try{for(;!((o=s.next()).done||n&&n());)if((a=e(o.value))&&a.then){if(!b(a))return void a.then(t,i||(i=P.bind(null,r=new k,2)));a=a.v}r?P(r,1,a):r=a}catch(t){P(r||(r=new k),2,t)}}(),s.return){var a=function(t){try{o.done||s.return()}catch(t){}return t};if(r&&r.then)return r.then(a,function(t){throw a(t)});a()}return r}if(!("length"in t))throw new TypeError("Object is not iterable");for(var c=[],l=0;l<t.length;l++)c.push(t[l]);return function(t,e,n){var o,r,i=-1;return function s(a){try{for(;++i<t.length&&(!n||!n());)if((a=e(i))&&a.then){if(!b(a))return void a.then(s,r||(r=P.bind(null,o=new k,2)));a=a.v}o?P(o,1,a):o=a}catch(t){P(o||(o=new k),2,t)}}(),o}(c,function(t){return e(c[t])},n)}(t,function(t){let{hook:r,handler:a,defaultHandler:c,once:l}=t;if(!e?.done)return l&&i.off(r,a),function(t,o){try{var r=Promise.resolve(function(t,e){return void 0===e&&(e=[]),new Promise((n,o)=>{const r=t(...e);f(r)?r.then(n,o):n(r)})}(a,[e,n,c])).then(function(t){s.push(t)})}catch(t){return o(t)}return r&&r.then?r.then(void 0,o):r}(0,function(t){if(o)throw t;console.error(`Error in hook '${r}':`,t)})},function(){return r});return Promise.resolve(a&&a.then?a.then(function(t){return r?t:s}):r?a:s)}catch(t){return Promise.reject(t)}}runSync(t,e,n,o){void 0===e&&(e=this.swup.visit),void 0===o&&(o=!1);const r=[];for(const{hook:i,handler:s,defaultHandler:a,once:c}of t)if(!e?.done){c&&this.off(i,s);try{const t=s(e,n,a);r.push(t),f(t)&&console.warn(`Swup will not await Promises in handler for synchronous hook '${i}'.`)}catch(t){if(o)throw t;console.error(`Error in hook '${i}':`,t)}}return r}getHandlers(t,e){const n=this.get(t);if(!n)return{found:!1,before:[],handler:[],after:[],replaced:!1};const o=Array.from(n.values()),r=this.sortRegistrations,i=o.filter(t=>{let{before:e,replace:n}=t;return e&&!n}).sort(r),s=o.filter(t=>{let{replace:e}=t;return e}).filter(t=>!0).sort(r),a=o.filter(t=>{let{before:e,replace:n}=t;return!e&&!n}).sort(r),c=s.length>0;let l=[];if(e&&(l=[{id:0,hook:t,handler:e}],c)){const n=s.length-1,o=t=>{const n=s[t-1];return n?(e,r)=>n.handler(e,r,o(t-1)):e};l=[{id:0,hook:t,handler:s[n].handler,defaultHandler:o(n)}]}return{found:!0,before:i,handler:l,after:a,replaced:c}}sortRegistrations(t,e){return(t.priority??0)-(e.priority??0)||t.id-e.id||0}dispatchDomEvent(t,e,n){if(e?.done)return;const o={hook:t,args:n,visit:e||this.swup.visit};document.dispatchEvent(new CustomEvent("swup:any",{detail:o,bubbles:!0})),document.dispatchEvent(new CustomEvent(`swup:${t}`,{detail:o,bubbles:!0}))}}const E=t=>{if(t&&"#"===t.charAt(0)&&(t=t.substring(1)),!t)return null;const e=decodeURIComponent(t);let n=document.getElementById(t)||document.getElementById(e)||u(`a[name='${m(t)}']`)||u(`a[name='${m(e)}']`);return n||"top"!==t||(n=document.body),n},U=function(t){let{elements:e,selector:n}=t;try{if(!1===n&&!e)return Promise.resolve();let t=[];if(e)t=Array.from(e);else if(n&&(t=h(n,document.body),!t.length))return console.warn(`[swup] No elements found matching animationSelector \`${n}\``),Promise.resolve();const o=t.map(t=>function(t){const{type:e,timeout:n,propCount:o}=function(t,e){const n=window.getComputedStyle(t),o=$(n,`${C}Delay`),r=$(n,`${C}Duration`),i=A(o,r),s=$(n,`${x}Delay`),a=$(n,`${x}Duration`),c=A(s,a);let l=null,u=0,h=0;return e===C?i>0&&(l=C,u=i,h=r.length):e===x?c>0&&(l=x,u=c,h=a.length):(u=Math.max(i,c),l=u>0?i>c?C:x:null,h=l?l===C?r.length:a.length:0),{type:l,timeout:u,propCount:h}}(t);return!(!e||!n)&&new Promise(r=>{const i=`${e}end`,s=performance.now();let a=0;const c=()=>{t.removeEventListener(i,l),r()},l=e=>{if(e.target===t){if(!function(t){return[`${C}end`,`${x}end`].includes(t.type)}(e))throw new Error("Not a transition or animation event.");(performance.now()-s)/1e3<e.elapsedTime||++a>=o&&c()}};setTimeout(()=>{a<o&&c()},n+1),t.addEventListener(i,l)})}(t));return o.filter(Boolean).length>0?Promise.resolve(Promise.all(o)).then(function(){}):(n&&console.warn(`[swup] No CSS animation duration defined on elements matching \`${n}\``),Promise.resolve())}catch(t){return Promise.reject(t)}},C="transition",x="animation";function $(t,e){return(t[e]||"").split(", ")}function A(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((e,n)=>p(e)+p(t[n])))}const H=function(t,e){void 0===e&&(e={});try{let s;const a=this;function i(i){if(s)return i;a.navigating=!0,a.visit=t;const{el:c}=t.trigger;e.referrer=e.referrer||a.currentPageUrl,!1===e.animate&&(t.animation.animate=!1),t.animation.animate||a.classes.clear();const l=e.history||c?.getAttribute("data-swup-history")||void 0;l&&["push","replace"].includes(l)&&(t.history.action=l);const u=e.animation||c?.getAttribute("data-swup-animation")||void 0;return u&&(t.animation.name=u),"object"==typeof e.cache?(t.cache.read=e.cache.read??t.cache.read,t.cache.write=e.cache.write??t.cache.write):void 0!==e.cache&&(t.cache={read:!!e.cache,write:!!e.cache}),delete e.cache,function(i,s){try{var c=function(i,s){try{var c=Promise.resolve(a.hooks.call("visit:start",t,void 0)).then(function(){function i(){if(!t.done)return Promise.resolve(a.hooks.call("visit:transition",t,void 0,function(){try{let n;function e(e){return n?e:(t.advance(4),Promise.resolve(a.animatePageOut(t)).then(function(){function e(){return Promise.resolve(a.animatePageIn(t)).then(function(){})}const n=function(){if(t.animation.native&&document.startViewTransition)return Promise.resolve(document.startViewTransition(function(){try{const e=a.renderPage;return Promise.resolve(s).then(function(n){return Promise.resolve(e.call(a,t,n))})}catch(t){return Promise.reject(t)}}).finished).then(function(){});{const e=a.renderPage;return Promise.resolve(s).then(function(n){return Promise.resolve(e.call(a,t,n)).then(function(){})})}}();return n&&n.then?n.then(e):e()}))}const o=function(){if(!t.animation.animate)return Promise.resolve(a.hooks.call("animation:skip",void 0)).then(function(){const e=a.renderPage;return Promise.resolve(s).then(function(o){return Promise.resolve(e.call(a,t,o)).then(function(){n=1})})})}();return Promise.resolve(o&&o.then?o.then(e):e(o))}catch(r){return Promise.reject(r)}})).then(function(){if(!t.done)return Promise.resolve(a.hooks.call("visit:end",t,void 0,()=>a.classes.clear())).then(function(){t.state=7,a.navigating=!1,a.onVisitEnd&&(a.onVisitEnd(),a.onVisitEnd=void 0)})})}t.state=3;const s=a.hooks.call("page:load",t,{options:e},function(t,e){try{function n(t){return e.page=t,e.cache=!!o,e.page}let o;return t.cache.read&&(o=a.cache.get(t.to.url)),Promise.resolve(o?n(o):Promise.resolve(a.fetchPage(t.to.url,e.options)).then(n))}catch(r){return Promise.reject(r)}});if(s.then(e=>{let{html:n}=e;t.advance(5),t.to.html=n,t.to.document=(new DOMParser).parseFromString(n,"text/html")}),!t.history.popstate){const e=t.to.url+t.to.hash;"replace"===t.history.action||t.to.url===a.currentPageUrl?r(e):(a.currentHistoryIndex++,function(t,e){void 0===e&&(e={});const n={url:t=t||o({hash:!0}),random:Math.random(),source:"swup",...e};window.history.pushState(n,"",t)}(e,{index:a.currentHistoryIndex}))}a.currentPageUrl=o(),t.history.popstate&&a.classes.add("is-popstate"),t.animation.name&&a.classes.add(`to-${n(t.animation.name)}`);const c=function(){if(t.animation.wait)return Promise.resolve(s).then(function(){})}();return c&&c.then?c.then(i):i()})}catch(t){return s(t)}return c&&c.then?c.then(void 0,s):c}(0,function(e){e&&!e?.aborted?(t.state=9,console.error(e),a.options.skipPopStateHandling=()=>(window.location.assign(t.to.url+t.to.hash),!0),window.history.back()):t.state=8})}catch(t){return s(!0,t)}return c&&c.then?c.then(s.bind(null,!1),s.bind(null,!0)):s(!1,c)}(0,function(e,n){if(delete t.to.document,e)throw n;return n})}const c=function(){if(a.navigating)return function(){if(!(a.visit.state>=6))return Promise.resolve(a.hooks.call("visit:abort",a.visit,void 0)).then(function(){delete a.visit.to.document,a.visit.state=8});t.state=2,a.onVisitEnd=()=>a.performNavigation(t,e),s=1}()}();return Promise.resolve(c&&c.then?c.then(i):i(c))}catch(l){return Promise.reject(l)}};function T(t,e,n){if(void 0===e&&(e={}),void 0===n&&(n={}),"string"!=typeof t)throw new Error("swup.navigate() requires a URL parameter");if(this.shouldIgnoreVisit(t,{el:n.el,event:n.event}))return void window.location.assign(t);const{url:o,hash:r}=s.fromUrl(t),i=this.createVisit({...n,to:o,hash:r});this.performNavigation(i,e)}const j=function(t){try{const e=this;return Promise.resolve(e.hooks.call("animation:out:start",t,void 0,()=>{e.classes.add("is-changing","is-animating","is-leaving")})).then(function(){return Promise.resolve(e.hooks.call("animation:out:await",t,{skip:!1},(t,n)=>{let{skip:o}=n;if(!o)return e.awaitAnimations({selector:t.animation.selector})})).then(function(){return Promise.resolve(e.hooks.call("animation:out:end",t,void 0)).then(function(){})})})}catch(t){return Promise.reject(t)}},L=function(t){const e=t.to.document;if(!e)return!1;const n=e.querySelector("title")?.innerText||"";document.title=n;const o=h('[data-swup-persist]:not([data-swup-persist=""])'),r=t.containers.map(t=>{const n=document.querySelector(t),o=e.querySelector(t);return n&&o?(n.replaceWith(o.cloneNode(!0)),!0):(n||console.warn(`[swup] Container missing in current document: ${t}`),o||console.warn(`[swup] Container missing in incoming document: ${t}`),!1)}).filter(Boolean);return o.forEach(t=>{const e=t.getAttribute("data-swup-persist"),n=u(`[data-swup-persist="${e}"]`);n&&n!==t&&n.replaceWith(t)}),r.length===t.containers.length},q=function(t){const e={behavior:"auto"},{target:n,reset:o}=t.scroll,r=n??t.to.hash;let i=!1;return r&&(i=this.hooks.callSync("scroll:anchor",t,{hash:r,options:e},(t,e)=>{let{hash:n,options:o}=e;const r=this.getAnchorElement(n);return r&&r.scrollIntoView(o),!!r})),o&&!i&&(i=this.hooks.callSync("scroll:top",t,{options:e},(t,e)=>{let{options:n}=e;return window.scrollTo({top:0,left:0,...n}),!0})),i},V=function(t){try{const e=this;if(t.done)return Promise.resolve();const n=e.hooks.call("animation:in:await",t,{skip:!1},(t,n)=>{let{skip:o}=n;if(!o)return e.awaitAnimations({selector:t.animation.selector})});return Promise.resolve(d()).then(function(){return Promise.resolve(e.hooks.call("animation:in:start",t,void 0,()=>{e.classes.remove("is-animating")})).then(function(){return Promise.resolve(n).then(function(){return Promise.resolve(e.hooks.call("animation:in:end",t,void 0)).then(function(){})})})})}catch(t){return Promise.reject(t)}},I=function(t,e){try{const i=this;if(t.done)return Promise.resolve();t.advance(6);const{url:s}=e;return i.isSameResolvedUrl(o(),s)||(r(s),i.currentPageUrl=o(),t.to.url=i.currentPageUrl),Promise.resolve(i.hooks.call("content:replace",t,{page:e},(t,e)=>{if(i.classes.remove("is-leaving"),t.animation.animate&&i.classes.add("is-rendering"),!i.replaceContent(t))throw new Error("[swup] Container mismatch, aborting");t.animation.animate&&(i.classes.add("is-changing","is-animating","is-rendering"),t.animation.name&&i.classes.add(`to-${n(t.animation.name)}`))})).then(function(){return Promise.resolve(i.hooks.call("content:scroll",t,void 0,()=>i.scrollToContent(t))).then(function(){return Promise.resolve(i.hooks.call("page:view",t,{url:i.currentPageUrl,title:document.title})).then(function(){})})})}catch(t){return Promise.reject(t)}},R=function(t){var e;if(e=t,Boolean(e?.isSwupPlugin)){if(t.swup=this,!t._checkRequirements||t._checkRequirements())return t._beforeMount&&t._beforeMount(),t.mount(),this.plugins.push(t),this.plugins}else console.error("Not a swup plugin instance",t)};function N(t){const e=this.findPlugin(t);if(e)return e.unmount(),e._afterUnmount&&e._afterUnmount(),this.plugins=this.plugins.filter(t=>t!==e),this.plugins;console.error("No such plugin",e)}function D(t){return this.plugins.find(e=>e===t||e.name===t||e.name===`Swup${String(t)}`)}function M(t){if("function"!=typeof this.options.resolveUrl)return console.warn("[swup] options.resolveUrl expects a callback function."),t;const e=this.options.resolveUrl(t);return e&&"string"==typeof e?e.startsWith("//")||e.startsWith("http")?(console.warn("[swup] options.resolveUrl needs to return a relative url"),t):e:(console.warn("[swup] options.resolveUrl needs to return a url"),t)}function O(t,e){return this.resolveUrl(t)===this.resolveUrl(e)}const W={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',animationScope:"html",cache:!0,containers:["#swup"],ignoreVisit:function(t,e){let{el:n}=void 0===e?{}:e;return!!n?.closest("[data-no-swup]")},linkSelector:"a[href]",linkToSelf:"scroll",native:!1,plugins:[],resolveUrl:t=>t,requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},skipPopStateHandling:t=>"swup"!==t.state?.source,timeout:0};return class{constructor(t){void 0===t&&(t={}),this.version="4.6.0",this.options=void 0,this.defaults=W,this.plugins=[],this.visit=void 0,this.cache=void 0,this.hooks=void 0,this.classes=void 0,this.currentPageUrl=o(),this.currentHistoryIndex=void 0,this.clickDelegate=void 0,this.navigating=!1,this.onVisitEnd=void 0,this.use=R,this.unuse=N,this.findPlugin=D,this.log=()=>{},this.navigate=T,this.performNavigation=H,this.createVisit=w,this.delegateEvent=i,this.fetchPage=a,this.awaitAnimations=U,this.renderPage=I,this.replaceContent=L,this.animatePageIn=V,this.animatePageOut=j,this.scrollToContent=q,this.getAnchorElement=E,this.getCurrentUrl=o,this.resolveUrl=M,this.isSameResolvedUrl=O,this.options={...this.defaults,...t},this.handleLinkClick=this.handleLinkClick.bind(this),this.handlePopState=this.handlePopState.bind(this),this.cache=new l(this),this.classes=new v(this),this.hooks=new S(this),this.visit=this.createVisit({to:""}),this.currentHistoryIndex=window.history.state?.index??1,this.checkRequirements()&&this.enable()}checkRequirements(){return"undefined"!=typeof Promise||(console.warn("Promise is not supported"),!1)}enable(){try{const t=this,{linkSelector:e}=t.options;return t.clickDelegate=t.delegateEvent(e,"click",t.handleLinkClick),window.addEventListener("popstate",t.handlePopState),t.options.animateHistoryBrowsing&&(window.history.scrollRestoration="manual"),t.options.native=t.options.native&&!!document.startViewTransition,t.options.plugins.forEach(e=>t.use(e)),"swup"!==window.history.state?.source&&r(null,{index:t.currentHistoryIndex}),Promise.resolve(d()).then(function(){return Promise.resolve(t.hooks.call("enable",void 0,void 0,()=>{const e=document.documentElement;e.classList.add("swup-enabled"),e.classList.toggle("swup-native",t.options.native)})).then(function(){})})}catch(t){return Promise.reject(t)}}destroy(){try{const t=this;return t.clickDelegate.destroy(),window.removeEventListener("popstate",t.handlePopState),t.cache.clear(),t.options.plugins.forEach(e=>t.unuse(e)),Promise.resolve(t.hooks.call("disable",void 0,void 0,()=>{const t=document.documentElement;t.classList.remove("swup-enabled"),t.classList.remove("swup-native")})).then(function(){t.hooks.clear()})}catch(t){return Promise.reject(t)}}shouldIgnoreVisit(t,e){let{el:n,event:o}=void 0===e?{}:e;const{origin:r,url:i,hash:a}=s.fromUrl(t);return r!==window.location.origin||!(!n||!this.triggerWillOpenNewWindow(n))||!!this.options.ignoreVisit(i+a,{el:n,event:o})}handleLinkClick(t){const e=t.delegateTarget,{href:n,url:o,hash:i}=s.fromElement(e);if(this.shouldIgnoreVisit(n,{el:e,event:t}))return;if(this.navigating&&o===this.visit.to.url)return void t.preventDefault();const a=this.createVisit({to:o,hash:i,el:e,event:t});t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?this.hooks.callSync("link:newtab",a,{href:n}):0===t.button&&this.hooks.callSync("link:click",a,{el:e,event:t},()=>{const e=a.from.url??"";t.preventDefault(),o&&o!==e?this.isSameResolvedUrl(o,e)||this.performNavigation(a):i?this.hooks.callSync("link:anchor",a,{hash:i},()=>{r(o+i),this.scrollToContent(a)}):this.hooks.callSync("link:self",a,void 0,()=>{"navigate"===this.options.linkToSelf?this.performNavigation(a):(r(o),this.scrollToContent(a))})})}handlePopState(t){const e=t.state?.url??window.location.href;if(this.options.skipPopStateHandling(t))return;if(this.isSameResolvedUrl(o(),this.currentPageUrl))return;const{url:n,hash:r}=s.fromUrl(e),i=this.createVisit({to:n,hash:r,event:t});i.history.popstate=!0;const a=t.state?.index??0;a&&a!==this.currentHistoryIndex&&(i.history.direction=a-this.currentHistoryIndex>0?"forwards":"backwards",this.currentHistoryIndex=a),i.animation.animate=!1,i.scroll.reset=!1,i.scroll.target=!1,this.options.animateHistoryBrowsing&&(i.animation.animate=!0,i.scroll.reset=!0),this.hooks.callSync("history:popstate",i,{event:t},()=>{this.performNavigation(i)})}triggerWillOpenNewWindow(t){return!!t.matches('[download], [target="_blank"]')}}});
//# sourceMappingURL=Swup.umd.js.map