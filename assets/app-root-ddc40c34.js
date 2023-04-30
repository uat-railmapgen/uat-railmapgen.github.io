import{n as k,o as i,V as ze,H as se,j as o,p as ue,q as _,T as S,g as d,B as Q,s as re,F as Ae,t as I,v as Ne,w as _e,x as de,y as P,z as B,M as He,A as Ge,C as Ve,D as pe,E as Ee,r as f,G,J as V,K as W,L as D,N as K,O as F,Q as $,S as A,U as We,W as De,X as Fe,Y as Pe,Z as Re,_ as $e,$ as O,a0 as g,a1 as v,a2 as q,a3 as J,a4 as j,a5 as Ye,a6 as qe,a as ee,a7 as Je,a8 as Qe,a9 as Ke,aa as Xe,ab as Ze,ac as et}from"./vendor-ebcc79a8.js";import{F as tt,u as le,a as Oe,s as nt,b as oe,o as rt,c as ot,t as Te,E as N,d as at,e as it,g as st,m as fe,f as lt}from"./index-56bc09fb.js";const ct="/assets/rmp-logo512-652b509a.png",ht={flex:1,justifyContent:"center",mb:10,"& > div":{mb:3},"& img":{w:120,p:2,backgroundColor:"white",borderRadius:12}};function ut(){const{t:e}=k();return i(ze,{sx:ht,children:[i(se,{spacing:3,children:[o(ue,{src:"/logo512.png"}),o(ue,{src:ct,backgroundColor:"white"})]}),o(_,{children:e("Welcome to Rail Map Toolkit")}),o(S,{fontSize:"lg",textAlign:"center",children:e("Select an app to start your own rail map design!")})]})}function dt(e){var t;const{tab:n,isActive:a}=e,[r]=d.useState((t=n.url)!=null?t:"/"+n.app+"/");return o(Q,{display:a?"block":"none",flex:1,children:o("iframe",{id:tt+n.id,src:r,loading:"lazy",title:n.app,width:"100%",height:"100%"})})}/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function H(){return H=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},H.apply(this,arguments)}var T;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(T||(T={}));const me="popstate";function pt(e){e===void 0&&(e={});function n(r,t){let{pathname:s,search:l,hash:c}=r.location;return ae("",{pathname:s,search:l,hash:c},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function a(r,t){return typeof t=="string"?t:Ie(t)}return mt(n,a,null,e)}function L(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ft(){return Math.random().toString(36).substr(2,8)}function ge(e,n){return{usr:e.state,key:e.key,idx:n}}function ae(e,n,a,r){return a===void 0&&(a=null),H({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?X(n):n,{state:a,key:n&&n.key||r||ft()})}function Ie(e){let{pathname:n="/",search:a="",hash:r=""}=e;return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function X(e){let n={};if(e){let a=e.indexOf("#");a>=0&&(n.hash=e.substr(a),e=e.substr(0,a));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function mt(e,n,a,r){r===void 0&&(r={});let{window:t=document.defaultView,v5Compat:s=!1}=r,l=t.history,c=T.Pop,h=null,p=m();p==null&&(p=0,l.replaceState(H({},l.state,{idx:p}),""));function m(){return(l.state||{idx:null}).idx}function b(){c=T.Pop;let u=m(),w=u==null?null:u-p;p=u,h&&h({action:c,location:M.location,delta:w})}function C(u,w){c=T.Push;let x=ae(M.location,u,w);a&&a(x,u),p=m()+1;let Z=ge(x,p),Y=M.createHref(x);try{l.pushState(Z,"",Y)}catch(gn){t.location.assign(Y)}s&&h&&h({action:c,location:M.location,delta:1})}function U(u,w){c=T.Replace;let x=ae(M.location,u,w);a&&a(x,u),p=m();let Z=ge(x,p),Y=M.createHref(x);l.replaceState(Z,"",Y),s&&h&&h({action:c,location:M.location,delta:0})}function R(u){let w=t.location.origin!=="null"?t.location.origin:t.location.href,x=typeof u=="string"?u:Ie(u);return L(w,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,w)}let M={get action(){return c},get location(){return e(t,l)},listen(u){if(h)throw new Error("A history only accepts one active listener");return t.addEventListener(me,b),h=u,()=>{t.removeEventListener(me,b),h=null}},createHref(u){return n(t,u)},createURL:R,encodeLocation(u){let w=R(u);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:C,replace:U,go(u){return l.go(u)}};return M}var ve;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ve||(ve={}));function gt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let a=n.endsWith("/")?n.length-1:n.length,r=e.charAt(a);return r&&r!=="/"?null:e.slice(a)||"/"}function vt(e,n){n===void 0&&(n="/");let{pathname:a,search:r="",hash:t=""}=typeof e=="string"?X(e):e;return{pathname:a?a.startsWith("/")?a:yt(a,n):n,search:Mt(r),hash:xt(t)}}function yt(e,n){let a=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(t=>{t===".."?a.length>1&&a.pop():t!=="."&&a.push(t)}),a.length>1?a.join("/"):"/"}function te(e,n,a,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wt(e){return e.filter((n,a)=>a===0||n.route.path&&n.route.path.length>0)}function bt(e,n,a,r){r===void 0&&(r=!1);let t;typeof e=="string"?t=X(e):(t=H({},e),L(!t.pathname||!t.pathname.includes("?"),te("?","pathname","search",t)),L(!t.pathname||!t.pathname.includes("#"),te("#","pathname","hash",t)),L(!t.search||!t.search.includes("#"),te("#","search","hash",t)));let s=e===""||t.pathname==="",l=s?"/":t.pathname,c;if(r||l==null)c=a;else{let b=n.length-1;if(l.startsWith("..")){let C=l.split("/");for(;C[0]==="..";)C.shift(),b-=1;t.pathname=C.join("/")}c=b>=0?n[b]:"/"}let h=vt(t,c),p=l&&l!=="/"&&l.endsWith("/"),m=(s||l===".")&&a.endsWith("/");return!h.pathname.endsWith("/")&&(p||m)&&(h.pathname+="/"),h}const Ct=e=>e.join("/").replace(/\/\/+/g,"/"),Mt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xt=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,St=["post","put","patch","delete"];[...St];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kt(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}const zt=typeof Object.is=="function"?Object.is:kt,{useState:At,useEffect:Et,useLayoutEffect:Pt,useDebugValue:Rt}=re;function Ot(e,n,a){const r=n(),[{inst:t},s]=At({inst:{value:r,getSnapshot:n}});return Pt(()=>{t.value=r,t.getSnapshot=n,ne(t)&&s({inst:t})},[e,r,n]),Et(()=>(ne(t)&&s({inst:t}),e(()=>{ne(t)&&s({inst:t})})),[e]),Rt(r),r}function ne(e){const n=e.getSnapshot,a=e.value;try{const r=n();return!zt(a,r)}catch(r){return!0}}function Tt(e,n,a){return n()}const It=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bt=!It,Lt=Bt?Tt:Ot;"useSyncExternalStore"in re&&(e=>e.useSyncExternalStore)(re);const Be=d.createContext(null),ce=d.createContext(null),Ut=d.createContext({outlet:null,matches:[]});function he(){return d.useContext(ce)!=null}function Le(){return he()||L(!1),d.useContext(ce).location}function jt(){he()||L(!1);let{basename:e,navigator:n}=d.useContext(Be),{matches:a}=d.useContext(Ut),{pathname:r}=Le(),t=JSON.stringify(wt(a).map(c=>c.pathnameBase)),s=d.useRef(!1);return d.useEffect(()=>{s.current=!0}),d.useCallback(function(c,h){if(h===void 0&&(h={}),!s.current)return;if(typeof c=="number"){n.go(c);return}let p=bt(c,JSON.parse(t),r,h.relative==="path");e!=="/"&&(p.pathname=p.pathname==="/"?e:Ct([e,p.pathname])),(h.replace?n.replace:n.push)(p,h.state,h)},[e,n,t,r])}var ye;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(ye||(ye={}));var we;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(we||(we={}));function Nt(e){let{basename:n="/",children:a=null,location:r,navigationType:t=T.Pop,navigator:s,static:l=!1}=e;he()&&L(!1);let c=n.replace(/^\/*/,"/"),h=d.useMemo(()=>({basename:c,navigator:s,static:l}),[c,s,l]);typeof r=="string"&&(r=X(r));let{pathname:p="/",search:m="",hash:b="",state:C=null,key:U="default"}=r,R=d.useMemo(()=>{let M=gt(p,c);return M==null?null:{pathname:M,search:m,hash:b,state:C,key:U}},[c,p,m,b,C,U]);return R==null?null:d.createElement(Be.Provider,{value:h},d.createElement(ce.Provider,{children:a,value:{location:R,navigationType:t}}))}var be;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(be||(be={}));new Promise(()=>{});/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ie(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,a)=>{let r=e[a];return n.concat(Array.isArray(r)?r.map(t=>[a,t]):[[a,r]])},[]))}function _t(e,n){let a=ie(e);if(n)for(let r of n.keys())a.has(r)||n.getAll(r).forEach(t=>{a.append(r,t)});return a}function Ht(e){let{basename:n,children:a,window:r}=e,t=d.useRef();t.current==null&&(t.current=pt({window:r,v5Compat:!0}));let s=t.current,[l,c]=d.useState({action:s.action,location:s.location});return d.useLayoutEffect(()=>s.listen(c),[s]),d.createElement(Nt,{basename:n,children:a,location:l.location,navigationType:l.action,navigator:s})}var Ce;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Ce||(Ce={}));var Me;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Me||(Me={}));function Gt(e){let n=d.useRef(ie(e)),a=d.useRef(!1),r=Le(),t=d.useMemo(()=>_t(r.search,a.current?null:n.current),[r.search]),s=jt(),l=d.useCallback((c,h)=>{const p=ie(typeof c=="function"?c(t):c);a.current=!0,s("?"+p,h)},[s,t]);return[t,l]}function Vt(){const{openedTabs:e,activeTab:n}=le(t=>t.app),[a,r]=Gt();return d.useEffect(()=>{var t;if(n){const s=(t=e.find(l=>l.id===n))==null?void 0:t.app;r(s?{app:s}:{})}else r({})},[n]),e.length===0?o(ut,{}):o(Ae,{children:e.map(t=>o(dt,{tab:t,isActive:n===t.id},t.id))})}var Ue={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xe=I.createContext&&I.createContext(Ue),E=globalThis&&globalThis.__assign||function(){return E=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},E.apply(this,arguments)},Wt=globalThis&&globalThis.__rest||function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};function je(e){return e&&e.map(function(n,a){return I.createElement(n.tag,E({key:a},n.attr),je(n.child))})}function z(e){return function(n){return I.createElement(Dt,E({attr:E({},e.attr)},n),je(e.child))}}function Dt(e){var n=function(a){var r=e.attr,t=e.size,s=e.title,l=Wt(e,["attr","size","title"]),c=t||a.size||"1em",h;return a.className&&(h=a.className),e.className&&(h=(h?h+" ":"")+e.className),I.createElement("svg",E({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,r,l,{className:h,style:E(E({color:e.color||a.color},a.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&I.createElement("title",null,s),e.children)};return xe!==void 0?I.createElement(xe.Consumer,null,function(a){return n(a)}):n(Ue)}function Ft(e){return z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}}]})(e)}function $t(e){return z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(e)}function y(e){return z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(e)}function Yt(e){return z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"}}]})(e)}function qt(e){return z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(e)}function Jt(e){return z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"}}]})(e)}function Se(e){return z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(e)}function Qt(e){return z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}}]})(e)}function Kt(e){return z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(e)}function Xt(e){return z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}}]})(e)}const ke={"& button:first-of-type":{w:"100%",overflow:"hidden",justifyContent:"flex-start",textOverflow:"ellipsis",textAlign:"start","& span.chakra-button__icon":{ml:-1,color:"orange.300",'[data-theme="dark"] &':{color:"orange.200"}}},'&[aria-current="true"] > button':{bg:"primary.50",_hover:{bg:"primary.100"},'[data-theme="dark"] &':{bg:"primary.700",_hover:{bg:"primary.600"}}}};function Zt(e){var M;const{appId:n,onAboutOpen:a}=e,{t:r}=k(),t=Oe(),s=Ne(`(min-width: ${_e.breakpoints.sm})`),{activeTab:l,openedTabs:c}=le(u=>u.app),h=oe[n],p=h.name.split(" - ").map(r).join(" - "),m=c.some(u=>u.app===n),b=!h.allowMultiInstances&&((M=c.find(u=>u.id===l))==null?void 0:M.app)===n,C=u=>{t(u?rt(n):ot(n)),s[0]||t(Te()),f.event(N.OPEN_APP,{appId:n,isOpenInNew:u})},U=u=>{t(at(u)),f.event(N.CLOSE_APP,{app:n})},R=u=>{t(it(u)),f.event(N.CLOSE_APP,{app:u})};return i(Ae,{children:[i(de,{variant:b?"solid":"ghost",size:"md",isAttached:!0,"aria-current":b,sx:ke,children:[o(P,{onClick:()=>C(!1),title:p+(m?" - "+r("Running"):""),leftIcon:m?o(Jt,{}):o(Q,{w:4}),children:p}),h.allowMultiInstances&&o(B,{"aria-label":r("New tab"),icon:o(qt,{}),onClick:()=>C(!0)}),i(He,{children:[o(Ge,{as:B,icon:o(Kt,{}),"aria-label":r("More"),title:r("More")}),i(Ve,{children:[m&&o(pe,{icon:o(Se,{}),onClick:()=>R(n),children:h.allowMultiInstances?r("Close all tabs"):r("Close app")}),o(pe,{icon:o($t,{}),onClick:a,children:r("About")})]})]})]}),h.allowMultiInstances&&c.filter(u=>u.app===n).map((u,w)=>{const x=u.id===l;return i(de,{variant:x?"solid":"ghost",size:"sm",ml:8,mr:1,isAttached:!0,"aria-current":x,sx:ke,children:[i(P,{onClick:()=>t(nt(u.id)),children:[o(Ee,{mr:2,children:w+1}),r("Tab")+" "+(w+1).toString()+" - "+p]}),o(B,{"aria-label":r("Close tab"),title:r("Close tab"),icon:o(Se,{}),onClick:()=>U(u.id)})]},u.id)})]})}const en=async e=>{const n=`/${e}/info.json`;try{return(await(await fetch(n)).json()).version}catch(a){return console.log(`Failed to get version for ${e}`),"unknown"}};function tn(e){var c,h,p;const{appId:n,onClose:a}=e,{t:r}=k(),[t,s]=d.useState("Unknown"),l=n?(p=(h=(c=oe[n])==null?void 0:c.url)==null?void 0:h.split("/"))==null?void 0:p[1]:void 0;return d.useEffect(()=>{l?en(l).then(m=>s(m)):s("Unknown")},[l]),i(G,{isOpen:!!n,onClose:a,size:"xl",scrollBehavior:"inside",children:[o(V,{}),i(W,{children:[i(D,{children:[r("About")+" "+(n?oe[n].name.split(" - ").map(r).join(" - "):""),o(Ee,{ml:1,children:t})]}),o(K,{}),o(F,{}),o($,{children:o(P,{colorScheme:"primary",onClick:()=>window.open("https://github.com/railmapgen/"+l,"_blank"),children:r("Visit GitHub")})})]})]})}const nn={flexDirection:"column","& h5":{mx:1,my:2},"& > div":{flexDirection:"column"}};function rn(){const{t:e}=k(),[n,a]=d.useState(),r=st(f.getEnv());return i(A,{sx:nn,children:[o(_,{as:"h5",size:"sm",children:e("Apps")}),o(A,{children:r.map(t=>o(Zt,{appId:t,onAboutOpen:()=>a(t)},t))}),o(tn,{appId:n,onClose:()=>a(void 0)})]})}const on={flexDirection:"column","& h5":{mx:1,my:2},"& > div":{px:2}};function an(){const{t:e}=k(),{setColourMode:n}=We(),a={light:e("Light"),dark:e("Dark"),system:e("System")},r=[{type:"select",label:e("Language"),value:f.getLanguage(),options:De.reduce((t,s)=>({...t,[s]:Fe[s][s]}),{}),onChange:t=>{const s=t;f.setLanguage(s),f.getI18nInstance().changeLanguage(s),f.event(N.CHANGE_LANGUAGE,{language:s})}},{type:"select",label:e("Appearance"),value:f.getColourMode(),options:a,onChange:t=>n(t)}];return i(A,{sx:on,children:[o(_,{as:"h5",size:"sm",children:e("Settings")}),o(Q,{children:o(Pe,{fields:r})})]})}function sn(e){const{isOpen:n,onClose:a}=e,{t:r}=k(),t=Re("primary.500","primary.300");return i(G,{isOpen:n,onClose:a,size:"xl",scrollBehavior:"inside",children:[o(V,{}),i(W,{children:[o(D,{children:r("Terms and conditions")}),o(K,{}),o(F,{children:i($e,{children:[i(O,{children:["The layout of the elements on the signage or rail map, is designed by"," ",i(g,{color:t,href:"https://www.gzmtr.com/",isExternal:!0,children:["Guangzhou Metro Group ",o(v,{as:y})]}),", ",i(g,{color:t,href:"https://www.mtr.com.hk/",isExternal:!0,children:["MTR Corporation ",o(v,{as:y})]})," or ",i(g,{color:t,href:"https://www.shmetro.com/",isExternal:!0,children:["Shanghai Shentong Metro Group ",o(v,{as:y})]}),", depending on your selection. You shall grant appropriate permit or license from the relevant company above before using the generated images for commercial purposes, if it is required to do so.",o("br",{}),"標誌版或路線圖之元素之佈局，基於你所選擇之風格，為",i(g,{color:t,href:"https://www.gzmtr.com/",isExternal:!0,children:["廣州地鐵集團公司 ",o(v,{as:y})]}),"，",i(g,{color:t,href:"https://www.mtr.com.hk/",isExternal:!0,children:["港鐵公司 ",o(v,{as:y})]}),"或",i(g,{color:t,href:"https://www.shmetro.com/",isExternal:!0,children:["上海申通地鐵集團 ",o(v,{as:y})]}),"所設計。在產生之圖像用作商業用途前，你應向相關公司取得適當之許可證或授權。"]}),i(O,{children:["The elements including shapes and lines on the image are drawn by"," ",i(g,{color:t,href:"https://www.github.com/wongchito",isExternal:!0,children:["Chito Wong ",o(v,{as:y})]})," and ",i(g,{color:t,href:"https://www.github.com/thekingofcity",isExternal:!0,children:["thekingofcity ",o(v,{as:y})]}),", based on the design standards or rules of the companies listed above. You may use them for any purposes, but it is recommended to state the name and the link of software alongside.",o("br",{}),"圖像之元素，包括圖形及線條，均由",i(g,{color:t,href:"https://www.github.com/wongchito",isExternal:!0,children:["Chito Wong ",o(v,{as:y})]}),"及",i(g,{color:t,href:"https://www.github.com/thekingofcity",isExternal:!0,children:["thekingofcity ",o(v,{as:y})]}),"基於上述公司之設計標準或準則繪製。你可將其用於任何目的，但我們建議你於使用同時附以我們之名字以及該軟件之連結。"]}),i(O,{children:["Due to copyright, licensing and other legal restrictions, Rail Map Generator uses"," ",i(g,{color:t,href:"https://github.com/ButTaiwan/genyo-font",isExternal:!0,children:["GenYoMin provided by ButTaiwan ",o(v,{as:y})]}),", and Vegur instead of MTRSung and Myriad Pro respectively to display and generate MTR-style signage. You shall grant appropriate permit or license from the manufacturers before using those generated images for commercial purposes.",o("br",{}),"由於著作權及其他法律限制，鐵路路線圖產生器使用",i(g,{color:t,href:"https://github.com/ButTaiwan/genyo-font",isExternal:!0,children:["由ButTaiwan提供之源樣明體 ",o(v,{as:y})]}),"，以及Vegur，以代替港鐵樣式標誌牌所使用之地鐵宋及Myriad Pro。在產生之圖像用作商業用途前，你應向字型生產廠商取得適當之許可證或授權。"]}),i(O,{children:["The exported images in PNG or SVG format may be modified, published, or used for other purposes, under the conditions above.",o("br",{}),"輸出之PNG或SVG種類之圖像可基於上述條款，用於修改、發行或其他用途。"]}),i(O,{children:["All flag emojis shown on Windows platforms are designed by"," ",i(g,{color:t,href:"https://openmoji.org/",isExternal:!0,children:["OpenMoji ",o(v,{as:y})]})," ","– the open-source emoji and icon project. License:",i(g,{color:t,href:"https://creativecommons.org/licenses/by-sa/4.0/",isExternal:!0,children:["CC BY-SA 4.0 ",o(v,{as:y})]}),o("br",{}),"於Windows作業系統上顯示之旗幟Emoji為",i(g,{color:t,href:"https://openmoji.org/",isExternal:!0,children:["OpenMoji ",o(v,{as:y})]}),"所設計。許可證：",i(g,{color:t,href:"https://creativecommons.org/licenses/by-sa/4.0/",isExternal:!0,children:["CC BY-SA 4.0 ",o(v,{as:y})]})]}),i(O,{children:["We reserve the rights, without prior notice, to modify, add, or remove these terms. The Chinese translation is for reference only. In case of any discrepancy between the English version and the Chinese version, the English version shall prevail.",o("br",{}),"我們保留修改、新增或移除上述條款之權利，而無需另行通知。中文譯本僅供參考，文義如與英文有歧異，概以英文本為準。"]})]})}),o($,{children:o(P,{colorScheme:"teal",onClick:()=>window.open("https://github.com/railmapgen/rmg","_blank"),children:r("Visit GitHub")})})]})]})}const ln=["52PD","linchen1965"],cn=["jealousyge","Jay20081229","clearng-kly","Dingdong2334","C1P918R","AnDanJuneUnderline","GrassRabbit1410","xiany114514","Andy1782010","Thomastzc","Tianxiu11111"];function hn(e){const{isOpen:n,onClose:a}=e,{t:r}=k();return i(G,{isOpen:n,onClose:a,size:"xl",scrollBehavior:"inside",children:[o(V,{}),i(W,{children:[o(D,{children:r("Contributors")}),o(K,{}),i(F,{children:[o(_,{as:"h6",size:"xs",my:1,children:r("Core contributors")}),i(ze,{children:[i(q,{size:"lg",minW:"80%",onClick:()=>window.open("https://github.com/wongchito","_blank"),cursor:"pointer",children:[o(J,{src:"https://github.com/wongchito.png",size:"lg",my:2,ml:-1,mr:2}),i(j,{display:"block",children:[o(S,{fontSize:"lg",fontWeight:"bold",mb:1,children:"Chito Wong"}),o(S,{fontSize:"sm",children:"Project initiator"}),o(S,{fontSize:"sm",children:"Author of MTR and Guangzhou Metro styles"})]})]}),i(q,{size:"lg",minW:"80%",onClick:()=>window.open("https://github.com/thekingofcity","_blank"),cursor:"pointer",children:[o(J,{src:"https://github.com/thekingofcity.png",size:"lg",my:2,ml:-1,mr:2}),i(j,{display:"block",children:[o(S,{fontSize:"lg",fontWeight:"bold",mb:1,children:"thekingofcity"}),o(S,{fontSize:"sm",children:"Author of Shanghai Metro style"}),o(S,{fontSize:"sm",children:"Desktop version (Electron) maintainer"})]})]})]}),o(_,{as:"h6",size:"xs",my:1,children:r("Resource contributors")}),i(A,{wrap:"wrap",children:[ln.map(t=>i(q,{size:"lg",mb:1,mr:1,flex:"100%",onClick:()=>window.open(`https://github.com/railmapgen/rmg/issues?q=is:issue+author:${t}`,"_blank"),cursor:"pointer",children:[o(J,{src:`https://github.com/${t}.png`,size:"xs",ml:-1,mr:2}),o(j,{children:t}),o(j,{flexGrow:1}),o(j,{children:o(S,{fontSize:"sm",children:r("Resource Administrator")})})]},t)),cn.map(t=>i(q,{size:"lg",mb:1,mr:1,onClick:()=>window.open(`https://github.com/railmapgen/rmg/issues?q=is:issue+author:${t}`,"_blank"),cursor:"pointer",children:[o(J,{src:`https://github.com/${t}.png`,size:"xs",ml:-1,mr:2}),o(j,{children:t})]},t))]})]}),o($,{children:o(P,{colorScheme:"primary",onClick:()=>window.open("https://github.com/railmapgen/rmg/wiki/How-to-add-color-palette-and-line-templates","_blank"),children:r("Contribution Wiki")})})]})]})}function un(e){const{isOpen:n,onClose:a}=e,{t:r}=k(),[t,s]=d.useState(f.isAllowAnalytics()),[l,c]=d.useState();d.useEffect(()=>{n||c(void 0)},[n]);const h=[{type:"switch",label:r("Allow cookies to help improve our website"),isChecked:t,onChange:s,oneLine:!0}],p=()=>{f.allowAnalytics(t).refreshRequired?c("Refreshing is required for changes to take effect."):a()};return i(G,{isOpen:n,onClose:a,children:[o(V,{}),i(W,{children:[l&&i(Ye,{status:"info",variant:"solid",size:"xs",children:[o(qe,{}),r(l)]}),i(Q,{position:"relative",children:[o(D,{children:r("Privacy settings")}),o(K,{})]}),o(F,{children:o(Pe,{fields:h})}),o($,{children:o(P,{colorScheme:"primary",isDisabled:!!l,onClick:p,children:r("Save")})})]})]})}function dn(){const{t:e}=k(),n=Re("primary.500","primary.300"),[a,r]=d.useState(!1),[t,s]=d.useState(!1),[l,c]=d.useState(!1),h=f.getInstance(),p=h===ee.GITHUB?ee.GITLAB:ee.GITHUB,m=fe[h],b=()=>{const C=lt(p,f.getEnv());window.open(C,"_blank"),f.event(N.SWITCH_MIRROR,{mirrorUrl:C})};return i(A,{direction:"column",children:[i(S,{fontSize:"sm",textAlign:"center",width:"100%",children:[i(Je,{i18nKey:"NavMenuFooter.currentMirror",mirror:m,children:["You're on ",{mirror:m}," mirror"]}),o("br",{}),e("Switch to")+" ",i(g,{color:n,onClick:b,children:[fe[p]," ",o(v,{as:y})]})]}),o(Qe,{}),i(se,{justifyContent:"center",children:[o(B,{variant:"ghost",size:"sm","aria-label":e("Contributor"),title:e("Contributor"),icon:o(Xt,{}),onClick:()=>r(!0)}),o(B,{variant:"ghost",size:"sm","aria-label":e("Terms and conditions"),title:e("Terms and conditions"),icon:o(Ft,{}),onClick:()=>s(!0)}),o(B,{variant:"ghost",size:"sm","aria-label":e("Privacy settings"),title:e("Privacy settings"),icon:o(Yt,{}),onClick:()=>c(!0)})]}),o(hn,{isOpen:a,onClose:()=>r(!1)}),o(sn,{isOpen:t,onClose:()=>s(!1)}),o(un,{isOpen:l,onClose:()=>c(!1)})]})}const pn={flexShrink:0,flexDirection:"column",overflow:"hidden",alignItems:"flex-end",transition:"0.3s ease-in-out",maxW:0,visibility:"hidden",boxShadow:"lg",zIndex:100,".show-menu &":{maxW:{base:"100%",sm:360},w:{base:"100%",sm:"unset"},visibility:"initial"},"& > div":{flexDirection:"column",h:"100%",w:{base:"100vw",sm:360},"& > div:nth-of-type(1)":{flex:0,flexDirection:"row",alignItems:"center",minHeight:10,pl:12},"& > div:nth-of-type(2)":{flexDirection:"column",flex:1,overflowY:"auto"}}};function fn(){const{t:e}=k();return o(A,{as:"section",sx:pn,children:i(A,{children:[i(A,{children:[o(_,{as:"h4",size:"md",children:e("Rail Map Toolkit")}),o(Ke,{environment:f.getEnv(),version:f.getAppVersion()})]}),i(A,{children:[o(rn,{}),o(an,{})]}),o(dn,{})]})})}function mn(e){const{isOpen:n,onClose:a}=e,{t:r}=k(),t=d.useRef(null),s=()=>{f.allowAnalytics(!0),a()},l=()=>{f.allowAnalytics(!1).refreshRequired?window.location.reload():a()};return i(G,{initialFocusRef:t,isOpen:n,onClose:()=>{},children:[o(V,{}),i(W,{children:[o(D,{children:r("CookiesModal.header")}),i(F,{children:[o(S,{children:r("CookiesModal.text1")}),o(S,{mt:2,children:r("CookiesModal.text2")}),o(Xe,{children:i(O,{children:[" ",r("CookiesModal.item1")]})}),o(S,{mt:2,children:r("CookiesModal.text3")})]}),o($,{children:i(se,{children:[o(P,{variant:"ghost",onClick:l,children:r("CookiesModal.reject")}),o(P,{ref:t,colorScheme:"primary",onClick:s,children:r("CookiesModal.accept")})]})})]})]})}function wn(){const{t:e}=k(),n=Oe(),a=le(l=>l.app.isShowMenu),[r,t]=d.useState(!1);d.useEffect(()=>{f.isAnalyticsQADone()||t(!0)},[]);const s=()=>{n(Te()),f.event(N.TOGGLE_NAV_MENU,{})};return o(Ht,{basename:"/",children:i(Ze,{className:a?"show-menu":"",children:[o(B,{variant:a?"ghost":"solid",colorScheme:a?void 0:"primary",size:"md","aria-label":e("Toggle menu"),title:e("Toggle menu"),icon:o(Qt,{}),position:"absolute",zIndex:110,borderRadius:0,onClick:s}),i(et,{sx:{flexDirection:"row"},children:[o(fn,{}),o(Vt,{})]}),o(mn,{isOpen:r,onClose:()=>t(!1)})]})})}export{wn as default};
