(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{6964:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(1024),i=n(8533),o=i._(n(2265)),u=r._(n(4887)),a=r._(n(9232)),l=n(3655),s=n(6921),c=n(8143);n(7707);let f=n(7650),d=r._(n(5324)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,n,r,i,o){let u=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===u)return;e["data-loaded-src"]=u;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function g(e){let[t,n]=o.version.split("."),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:u,width:a,decoding:l,className:s,style:c,fetchPriority:f,placeholder:d,loading:p,unoptimized:h,fill:y,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:_,setShowAltText:S,onLoad:w,onError:E,...O}=e;return o.default.createElement("img",{...O,...g(f),loading:p,width:a,height:u,decoding:l,"data-nimg":y?"fill":"1",className:s,style:c,sizes:i,srcSet:r,src:n,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&m(e,d,b,v,_,h))},[n,d,b,v,_,E,h,t]),onLoad:e=>{let t=e.currentTarget;m(t,d,b,v,_,h)},onError:e=>{S(!0),"empty"!==d&&_(!0),E&&E(e)}})});function y(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t&&u.default.preload?(u.default.preload(n.src,r),null):o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let b=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(f.RouterContext),r=(0,o.useContext)(c.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=p||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:u,onLoadingComplete:a}=e,m=(0,o.useRef)(u);(0,o.useEffect)(()=>{m.current=u},[u]);let g=(0,o.useRef)(a);(0,o.useEffect)(()=>{g.current=a},[a]);let[b,v]=(0,o.useState)(!1),[_,S]=(0,o.useState)(!1),{props:w,meta:E}=(0,l.getImgProps)(e,{defaultLoader:d.default,imgConf:i,blurComplete:b,showAltText:_});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...w,unoptimized:E.unoptimized,placeholder:E.placeholder,fill:E.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:S,ref:t}),E.priority?o.default.createElement(y,{isAppRouter:!n,imgAttributes:w}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6948:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let r=n(1024),i=r._(n(2265)),o=i.default.createContext({})},8827:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},3655:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(7707);let r=n(8932),i=n(6921);function o(e){return void 0!==e.default}function u(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,l,s,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:b,fill:v=!1,style:_,onLoad:S,onLoadingComplete:w,placeholder:E="empty",blurDataURL:O,fetchPriority:j,layout:P,objectFit:C,objectPosition:x,lazyBoundary:z,lazyRoot:I,...M}=e,{imgConf:k,showAltText:R,blurComplete:A,defaultLoader:D}=t,U=k||i.imageConfigDefault;if("allSizes"in U)a=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t);a={...U,allSizes:e,deviceSizes:t}}let L=M.loader||D;delete M.loader,delete M.srcSet;let T="__next_img_default"in L;if(T){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:n,...r}=t;return e(r)}}if(P){"fill"===P&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!f&&(f=t)}let N="",F=u(y),W=u(b);if("object"==typeof(n=c)&&(o(n)||void 0!==n.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,s=e.blurHeight,O=O||e.blurDataURL,N=e.src,!v){if(F||W){if(F&&!W){let t=F/e.width;W=Math.round(e.height*t)}else if(!F&&W){let t=W/e.height;F=Math.round(e.width*t)}}else F=e.width,W=e.height}}let V=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:N)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,V=!1),a.unoptimized&&(d=!0),T&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(d=!0),p&&(j="high");let B=u(h),G=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:x}:{},R?{}:{color:"transparent"},_),q=A||"empty"===E?null:"blur"===E?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:W,blurWidth:l,blurHeight:s,blurDataURL:O||"",objectFit:G.objectFit})+'")':'url("'+E+'")',$=q?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},H=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:u,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,u),c=l.length-1;return{sizes:u||"w"!==s?u:"100vw",srcSet:l.map((e,r)=>a({config:t,src:n,quality:o,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:a({config:t,src:n,quality:o,width:l[c]})}}({config:a,src:c,unoptimized:d,width:F,quality:B,sizes:f,loader:L}),Y={...M,loading:V?"lazy":m,fetchPriority:j,width:F,height:W,decoding:"async",className:g,style:{...G,...$},sizes:H.sizes,srcSet:H.srcSet,src:H.src},J={unoptimized:d,priority:p,placeholder:E,fill:v};return{props:Y,meta:J}}},9232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return c},default:function(){return m}});let r=n(1024),i=n(8533),o=i._(n(2265)),u=r._(n(5184)),a=n(6948),l=n(3305),s=n(8827);function c(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(7707);let d=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,u=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){u=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=d.length;e<t;e++){let t=d[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!u)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(u.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8932:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:u}=e,a=r?40*r:t,l=i?40*i:n,s=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===u?"xMidYMid":"cover"===u?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},8143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return u}});let r=n(1024),i=r._(n(2265)),o=n(6921),u=i.default.createContext(o.imageConfigDefault)},6921:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},2597:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},unstable_getImgProps:function(){return l}});let r=n(1024),i=n(3655),o=n(7707),u=n(6964),a=r._(n(5324)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},s=u.Image},5324:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},7650:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return o}});let r=n(1024),i=r._(n(2265)),o=i.default.createContext(null)},5184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(8533),i=r._(n(2265)),o=i.useLayoutEffect,u=i.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),u(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7707:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:s,ref:c,props:o,_owner:a.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},7437:function(e,t,n){"use strict";e.exports=n(622)},6691:function(e,t,n){e.exports=n(2597)},1853:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,u=r.useEffect,a=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return a(function(){i.value=n,i.getSnapshot=t,s(i)&&c({inst:i})},[e,n,t]),u(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},8704:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),i=n(6272),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=i.useSyncExternalStore,a=r.useRef,l=r.useEffect,s=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var f=a(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var p=u(e,(f=s(function(){function e(e){if(!l){if(l=!0,u=e,e=r(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return a=t}return a=e}if(t=a,o(u,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(u=e,a=n)}var u,a,l=!1,s=void 0===n?null:n;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,n,r,i]))[0],f[1]);return l(function(){d.hasValue=!0,d.value=p},[p]),c(p),p}},6272:function(e,t,n){"use strict";e.exports=n(1853)},5401:function(e,t,n){"use strict";e.exports=n(8704)},4660:function(e,t,n){"use strict";n.d(t,{Ue:function(){return d}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=r?r:"object"!=typeof i||null===i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,o={setState:r,getState:i,getInitialState:()=>u,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,o);return o},i=e=>e?r(e):r;var o=n(2265),u=n(5401);let{useDebugValue:a}=o,{useSyncExternalStoreWithSelector:l}=u,s=!1,c=e=>e,f=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?i(e):e,n=(e,n)=>(function(e,t=c,n){n&&!s&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),s=!0);let r=l(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return a(r),r})(t,e,n);return Object.assign(n,t),n},d=e=>e?f(e):f}}]);