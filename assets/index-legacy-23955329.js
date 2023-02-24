!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,c=[],l=!0,p=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(u){p=!0,a=u}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(p)throw a}}return c}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,n||"default");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./vendor-legacy-c815e054.js"],(function(e,n){"use strict";var a,o,i,c,l,p,u,s,d,f,b,m,v,g,y,T,h,A=document.createElement("style");return A.textContent=":root{background-color:#fff}@media (prefers-color-scheme: dark){:root{background-color:#1a202c;color:#fff}}html{height:100%}body{margin:0;overflow:hidden;height:100%;width:100%;padding:env(safe-area-inset-top,20px) env(safe-area-inset-right,20px) env(safe-area-inset-bottom,20px) env(safe-area-inset-left,20px)}div#root{height:100%;width:100%}*{box-sizing:border-box}\n",document.head.appendChild(A),{setters:[function(e){a=e.c,o=e.n,i=e.a,c=e.b,l=e.u,p=e.d,u=e.R,s=e.e,d=e.r,f=e.f,b=e.g,m=e.j,v=e.P,g=e.C,y=e.h,T=e.i,h=e.k}],execute:function(){var A=a({name:"app",initialState:{isShowMenu:!0,openedTabs:[],activeTab:void 0},reducers:{toggleMenu:function(e){e.isShowMenu=!e.isShowMenu},setOpenedTabs:function(e,t){e.openedTabs=t.payload},updateTabUrl:function(e,t){var n=t.payload,a=n.id,o=n.url;e.openedTabs=e.openedTabs.map((function(e){return e.id===a?r(r({},e),{},{url:o}):e}))},setActiveTab:function(e,t){e.activeTab=t.payload},openApp:function(e,t){var n=t.payload,r=e.openedTabs.find((function(t){return t.id===e.activeTab})),a=e.openedTabs.find((function(e){return e.app===n}));if((null==r?void 0:r.app)===n);else if(a)e.activeTab=a.id;else{var i=o();e.openedTabs.push({id:i,app:n}),e.activeTab=i}},openAppInNew:function(e,t){var n=o();e.openedTabs.push({id:n,app:t.payload}),e.activeTab=n},closeTab:function(e,t){var n=t.payload,r=e.openedTabs.filter((function(e){return e.id!==n}));if(0===r.length)e.openedTabs=[],e.activeTab=void 0,e.isShowMenu=!0;else if(e.activeTab===n){var a=e.openedTabs.findIndex((function(e){return e.id===n}));e.openedTabs=r,e.activeTab=r[Math.min(a,r.length-1)].id}else e.openedTabs=r}}}),w=A.actions,O=w.toggleMenu,S=w.setOpenedTabs,E=w.updateTabUrl,P=w.setActiveTab,_=w.openApp,j=w.openAppInNew,D=w.closeTab;e({t:O,s:P,d:_,o:j,c:D});var I=A.reducer,N=i(),R=c({reducer:{app:I},middleware:function(e){return e().prepend(N.middleware)}}),G=(e("u",(function(){return l()})),e("a",p),N.startListening);window.rmgStore=R;var M=e("b",{rmg:{name:"Rail Map Generator",allowedEnvs:[u.DEV,u.UAT,u.PRD],allowMultiInstances:!0},rmp:{name:"Rail Map Painter",allowedEnvs:[u.DEV,u.UAT,u.PRD]},"rmg-palette":{name:"Palette",allowedEnvs:[u.DEV,u.UAT,u.PRD]},"rmg-components":{name:"Components",allowedEnvs:[u.DEV,u.UAT]},"rmg-templates":{name:"RMG Templates",allowedEnvs:[u.DEV,u.UAT,u.PRD]},"seed-project":{name:"Seed Project",allowedEnvs:[u.DEV,u.UAT]},"rmg-translate":{name:"Translate",allowedEnvs:[u.DEV,u.UAT]}}),U=e("g",(function(e){return Object.entries(M).filter((function(n){var r=t(n,2);r[0];return r[1].allowedEnvs.includes(e)})).map((function(e){return t(e,1)[0]}))})),C=function(e){return e.OPENED_TABS="rmg-home__openedTabs",e.ACTIVE_TAB="rmg-home__activeTab",e}(C||{}),L=(e("m",{GitHub:"GitHub Pages",GitLab:"GitLab Pages",Bitbucket:"Bitbucket Cloud",localhost:"localhost",unknown:"unknown"}),e("e",(function(e,t){return"https://".concat(t===u.PRD?"":"uat-","railmapgen.").concat(e===s.GITLAB?"gitlab":"github",".io")})),e("E",function(e){return e.APP_LOAD="APP_LOAD",e.OPEN_APP="OPEN_APP",e.CLOSE_APP="CLOSE_APP",e.TOGGLE_NAV_MENU="TOGGLE_NAV_MENU",e.CHANGE_LANGUAGE="CHANGE_LANGUAGE",e.SWITCH_MIRROR="SWITCH_MIRROR",e}(L||{}))),V=e("F","rmg-home:frame-"),k=function(e){try{var t=window.localStorage.getItem(C.OPENED_TABS),n=window.localStorage.getItem("rmg-home__openedApps");if(t){var r=JSON.parse(t);Array.isArray(r)?e.dispatch(S(r)):console.warn("initOpenedTabs():: Cannot parse invalid opened tabs state from local storage")}else if(n){var a=JSON.parse(n);if(Array.isArray(a)&&"string"==typeof a[0]){var i=a.map((function(e){return{id:o(),app:e}}));e.dispatch(S(i))}else console.warn("initOpenedTabs():: cannot parse invalid opened apps state from local storage")}}catch(c){console.warn("initOpenedTabs():: cannot parse opened apps state from local storage",c)}},x=function(e){var t,n=window.localStorage.getItem(C.ACTIVE_TAB),r=e.getState().app.openedTabs;n&&r.some((function(e){return e.id===n}))?e.dispatch(P(n)):e.dispatch(P(null===(t=r[0])||void 0===t?void 0:t.id))};var B=d.lazy((function(){return function(){return n.import("./app-root-legacy-c13c3278.js")}()}));f.ready().then((function(){!function(e){k(e),x(e),G({predicate:function(e,t,n){return JSON.stringify(t.app.openedTabs)!==JSON.stringify(n.app.openedTabs)},effect:function(e,t){window.localStorage.setItem(C.OPENED_TABS,JSON.stringify(t.getState().app.openedTabs))}}),G({predicate:function(e,t,n){return t.app.activeTab!==n.app.activeTab},effect:function(e,t){var n=t.getState().app.activeTab;void 0!==n&&window.localStorage.setItem(C.ACTIVE_TAB,n)}})}(R),b(document.getElementById("root")).render(m(d.StrictMode,{children:m(v,{store:R,children:m(g,{theme:y,children:m(T,{suspenseFallback:m(h,{isIndeterminate:!0}),allowReset:!0,children:m(B,{})})})})})),f.onAppOpen((function(e){U(f.getEnv()).includes(e)&&R.dispatch(_(e))})),f.onUrlUpdate((function(e,t){if(t){var n=t.slice(V.length);console.log("Received URL update for frame=".concat(n,", url=").concat(e)),R.dispatch(E({id:n,url:e}))}})),f.event(L.APP_LOAD,{openedApps:R.getState().app.openedTabs.map((function(e){return e.app}))})}))}}}))}();
