import{o as ge,j as e,R as me,y as f,U as xe,V as te,W as se,X as Y,Y as z,l as x,Z as T,_ as b,x as je,K as ve,$ as K,n as j,z as R,a0 as fe,a1 as be,a2 as ze,a3 as Q,B as ae,a4 as w,M as L,a5 as M,h as C,i as B,k as H,m as A,a6 as I,q as G,r as W,a7 as oe,a8 as ie,a9 as _,aa as D,ab as ke,ac as we,ad as S,L as P,t as Me,ae as Ce,af as He}from"./chakra-a52e8981.js";import{r as p,u as m,k as re,B as ye}from"./react-82cad4c9.js";import{R as Ae,a as Se,b as Re,c as Ie,d as Te,F as Le,u as V,e as le,f as y,r as h,E as k,o as _e,g as De,t as N,s as Ee,h as Oe,i as Pe,j as Ne,k as Be,m as Ge,l as We,n as Ve,p as Ue,q as Fe,v as E,w as $e}from"./index-66cc8a6f.js";var qe=["en","zh-Hans","zh-Hant"],Ye=["ja","ko"],J={ar:{ar:"العربية",en:"Arabic",ko:"아랍어","zh-Hans":"阿拉伯文","zh-Hant":"阿拉伯文"},az:{az:"Azərbaycanca",en:"Azerbaijani",ko:"아제르바이잔어","zh-Hans":"阿塞拜疆文","zh-Hant":"阿塞拜疆文"},ca:{ca:"Català",en:"Catalan",ko:"카탈루냐어","zh-Hans":"加泰罗尼亚文","zh-Hant":"加泰隆尼亞文"},da:{da:"Dansk",en:"Danish",ko:"덴마크어","zh-Hans":"丹麦文","zh-Hant":"丹麥文"},de:{de:"Deutsch",en:"German",ko:"독일어","zh-Hans":"德文","zh-Hant":"德文"},el:{el:"Ελληνικά",en:"Greek",ko:"그리스어","zh-Hans":"希腊文","zh-Hant":"希臘文"},en:{en:"English",ja:"英語",ko:"영어","zh-Hans":"英文","zh-Hant":"英文"},es:{en:"Spanish",es:"Español",ko:"스페인어","zh-Hans":"西班牙文","zh-Hant":"西班牙文"},fa:{en:"Persian",fa:"فارسی",ko:"페르시아어","zh-Hans":"波斯文","zh-Hant":"波斯文"},fr:{en:"French",fr:"Français",ko:"프랑스어","zh-Hans":"法文","zh-Hant":"法文"},ga:{en:"Irish",ga:"Gaeilge",ko:"아일랜드어","zh-Hans":"爱尔兰文","zh-Hant":"愛爾蘭文"},gd:{en:"Scottish Gaelic",gd:"Gàidhlig",ko:"스코틀랜드 게일어","zh-Hans":"苏格兰盖尔文","zh-Hant":"蘇格蘭蓋爾文"},hi:{en:"Hindi",hi:"हिन्दी",ko:"힌디어","zh-Hans":"印地文","zh-Hant":"印地文"},hu:{en:"Hungarian",hu:"Magyar",ko:"헝가리어","zh-Hans":"匈牙利文","zh-Hant":"匈牙利文"},id:{en:"Indoesian",id:"Bahasa Indonesia",ko:"인도네시아어","zh-Hans":"印尼文","zh-Hant":"印尼文"},it:{en:"Italian",it:"Italiano",ko:"이탈리아어","zh-Hans":"意大利文","zh-Hant":"意大利文"},ja:{en:"Japanese",ja:"日本語",ko:"일본어","zh-Hans":"日文","zh-Hant":"日文"},kk:{en:"Kazakh",kk:"Қазақша",ko:"카자흐어","zh-Hans":"哈萨克文","zh-Hant":"哈薩克文"},ko:{en:"Korean",ja:"韓国語",ko:"한국어","zh-Hans":"韩文","zh-Hant":"韓文"},ms:{en:"Malay",ko:"말레이어",ms:"Bahasa Melayu","zh-Hans":"马来文","zh-Hant":"馬來文"},no:{en:"Norwegian",ko:"노르웨이어",no:"Norsk","zh-Hans":"挪威文","zh-Hant":"挪威文"},pl:{en:"Polish",ko:"폴란드어",pl:"Polski","zh-Hans":"波兰文","zh-Hant":"波蘭文"},pt:{en:"Portuguese",ko:"포르투갈어",pt:"Português","zh-Hans":"葡萄牙文","zh-Hant":"葡萄牙文"},ro:{en:"Romanian",ko:"루마니아어",ro:"Română","zh-Hans":"罗马尼亚文","zh-Hant":"羅馬尼亞文"},ru:{en:"Russian",ko:"러시아어",ru:"Русский","zh-Hans":"俄文","zh-Hant":"俄文"},sv:{en:"Swedish",ko:"스웨덴어",sv:"Svenska","zh-Hans":"瑞典文","zh-Hant":"瑞典文"},th:{en:"Thai",ko:"태국어",th:"ภาษาไทย","zh-Hans":"泰文","zh-Hant":"泰文"},tr:{en:"Turkish",ko:"튀르키예어",tr:"Türkçe","zh-Hans":"土耳其文","zh-Hant":"土耳其文"},uk:{en:"Ukrainian",ko:"우크라이나어",uk:"Українська","zh-Hans":"乌克兰文","zh-Hant":"烏克蘭文"},ur:{en:"Urdo",ko:"우르두어",ur:"اردو","zh-Hans":"乌尔都文","zh-Hant":"烏爾都文"},uz:{en:"Uzbek",ko:"우즈베크어",uz:"Oʻzbekcha","zh-Hans":"乌兹别克文","zh-Hant":"烏茲別克文"},vi:{en:"Vietnamese",ko:"베트남어",vi:"Tiếng Việt","zh-Hans":"越南文","zh-Hant":"越南文"},"zh-Hans":{en:"Simplified Chinese",ja:"中国語（簡体字）",ko:"중국어 간체자","zh-Hans":"简体中文","zh-Hant":"簡體中文"},"zh-Hant":{en:"Traditional Chinese",ja:"中国語（繁体字）",ko:"중국어 정체자","zh-Hans":"繁体中文","zh-Hant":"繁體中文"}},Ke=function(n){var s=n.children,i=n.noWrap,t=ge("RmgOutput",{noWrap:i});return e.jsx(me.output,{sx:t,children:s})};function ce(n){var s=n.fields,i=n.noLabel,t=n.minW;return e.jsx(f,{wrap:"wrap",children:s.map(function(a,c){if(a.hidden)return e.jsx(p.Fragment,{},c);var r=a.minW||t,l=r==="full";return e.jsx(Ae,{className:l?"mw-full":"",label:a.label,flex:l?void 0:1,minW:l?void 0:r,noLabel:i,oneLine:a.oneLine,children:function(o){switch(o.type){case"input":return e.jsx(Te,{placeholder:o.placeholder,defaultValue:o.value,type:o.variant,validator:o.validator,onDebouncedChange:o.onChange,delay:o.debouncedDelay,optionList:o.optionList,isDisabled:o.isDisabled});case"output":return e.jsx(Ke,{noWrap:!0,children:o.value});case"textarea":return e.jsx(Ie,{placeholder:o.placeholder,defaultValue:o.value,onDebouncedChange:o.onChange,isDisabled:o.isDisabled});case"slider":return e.jsx(Re,{defaultValue:o.value,min:o.min,max:o.max,step:o.step,onThrottledChange:o.onChange,leftIcon:o.leftIcon,rightIcon:o.rightIcon,isDisabled:o.isDisabled});case"select":return e.jsx(Se,{defaultValue:o.value,onChange:function(d){var g,v=d.target.value;return(g=o.onChange)===null||g===void 0?void 0:g.call(o,typeof o.value=="number"?Number(v):v.toString())},options:o.options,disabledOptions:o.disabledOptions,isInvalid:o.isInvalid,isDisabled:o.isDisabled});case"switch":return e.jsx(xe,{isChecked:o.isChecked,isDisabled:o.isDisabled,onChange:function(d){var g,v=d.target.checked;return(g=o.onChange)===null||g===void 0?void 0:g.call(o,v)}});case"custom":return o.component;default:return e.jsx("div",{})}}(a)},c)})})}const Qe="/assets/rmp-logo512-652b509a.png",Je={flex:1,justifyContent:"center",mb:10,"& > div":{mb:3},"& img":{w:120,p:2,backgroundColor:"white",borderRadius:12}};function Xe(){const{t:n}=m();return e.jsxs(te,{sx:Je,children:[e.jsxs(se,{spacing:3,children:[e.jsx(Y,{src:"/logo512.png"}),e.jsx(Y,{src:Qe,backgroundColor:"white"})]}),e.jsx(z,{children:n("Welcome to Rail Map Toolkit")}),e.jsx(x,{fontSize:"lg",textAlign:"center",children:n("Select an app to start your own rail map design!")})]})}function Ze(n){var a;const{tab:s,isActive:i}=n,[t]=p.useState((a=s.url)!=null?a:"/"+s.app+"/");return e.jsx(T,{display:i?"block":"none",flex:1,children:e.jsx("iframe",{id:Le+s.id,src:t,loading:"lazy",title:s.app,width:"100%",height:"100%"})})}function en(){const{openedTabs:n,activeTab:s}=V(a=>a.app),[i,t]=re();return p.useEffect(()=>{var a;if(s){const c=(a=n.find(r=>r.id===s))==null?void 0:a.app;t(c?{app:c}:{})}else t({})},[s]),n.length===0?e.jsx(Xe,{}):e.jsx(e.Fragment,{children:n.map(a=>e.jsx(Ze,{tab:a,isActive:s===a.id},a.id))})}function nn(n){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(n)}function tn(n){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"}}]})(n)}function sn(n){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(n)}function an(n){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"}}]})(n)}function X(n){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(n)}function on(n){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}}]})(n)}function rn(n){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(n)}function ln(n){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}}]})(n)}function cn(n){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"}}]})(n)}const Z={"& button:first-of-type":{w:"100%",overflow:"hidden",justifyContent:"flex-start",textOverflow:"ellipsis",textAlign:"start","& span.chakra-button__icon":{ml:-1,color:"orange.300",'[data-theme="dark"] &':{color:"orange.200"}}},'&[aria-current="true"] > button':{bg:"primary.50",_hover:{bg:"primary.100"},'[data-theme="dark"] &':{bg:"primary.700",_hover:{bg:"primary.600"}}}};function hn(n){var F;const{appId:s,onAboutOpen:i}=n,{t}=m(),a=le(),c=je(`(min-width: ${ve.breakpoints.sm})`),{activeTab:r,openedTabs:l}=V(u=>u.app),o=y[s],d=o.name.split(" - ").map(u=>t(u)).join(" - "),g=l.some(u=>u.app===s),v=!o.allowMultiInstances&&((F=l.find(u=>u.id===r))==null?void 0:F.app)===s,U=u=>{g||h.event(k.OPEN_APP,{appId:s,isOpenInNew:u}),a(u?_e(s):De({appId:s})),c[0]||(a(N()),h.toggleNavMenu(!1))},de=u=>{a(Ee(u)),c[0]||(a(N()),h.toggleNavMenu(!1))},ue=u=>{a(Oe(u)),h.event(k.CLOSE_APP,{app:s})},pe=u=>{a(Pe(u)),h.event(k.CLOSE_APP,{app:u})};return e.jsxs(e.Fragment,{children:[e.jsxs(K,{variant:v?"solid":"ghost",size:"md",isAttached:!0,"aria-current":v,sx:Z,children:[e.jsx(j,{onClick:()=>U(!1),leftIcon:g?e.jsx(an,{title:t("Running")}):e.jsx(T,{w:4}),children:d}),o.allowMultiInstances&&e.jsx(R,{"aria-label":t("New tab"),title:t("New tab"),icon:e.jsx(sn,{}),onClick:()=>U(!0)}),e.jsxs(fe,{children:[e.jsx(be,{as:R,icon:e.jsx(rn,{}),"aria-label":t("More"),title:t("More")}),e.jsxs(ze,{children:[g&&e.jsx(Q,{icon:e.jsx(X,{}),onClick:()=>pe(s),children:o.allowMultiInstances?t("Close all tabs"):t("Close app")}),e.jsx(Q,{icon:e.jsx(nn,{}),onClick:i,children:t("About")})]})]})]}),o.allowMultiInstances&&l.filter(u=>u.app===s).map((u,$)=>{const q=u.id===r;return e.jsxs(K,{variant:q?"solid":"ghost",size:"sm",ml:8,mr:1,isAttached:!0,"aria-current":q,sx:Z,children:[e.jsxs(j,{onClick:()=>de(u.id),children:[e.jsx(ae,{mr:2,children:$+1}),t("Tab")+" "+($+1).toString()+" - "+d]}),e.jsx(R,{"aria-label":t("Close tab"),title:t("Close tab"),icon:e.jsx(X,{}),onClick:()=>ue(u.id)})]},u.id)})]})}const dn=async n=>{const s=`/${n}/info.json`;try{return(await(await fetch(s)).json()).version}catch(i){return console.log(`Failed to get version for ${n}`),"unknown"}},un=async(n,s)=>{const i=`/${n}/legacy-contributor-list.txt`;return(await(await fetch(i,{signal:s})).text()).split(`
`)};function pn(n){var l,o,d;const{appId:s,onClose:i}=n,{t}=m(),[a,c]=p.useState("Unknown"),r=s?(d=(o=(l=y[s])==null?void 0:l.url)==null?void 0:o.split("/"))==null?void 0:d[1]:void 0;return p.useEffect(()=>{r?dn(r).then(g=>c(g)):c("Unknown")},[r]),e.jsxs(w,{isOpen:!!s,onClose:i,size:"xl",scrollBehavior:"inside",children:[e.jsx(L,{}),e.jsxs(M,{children:[e.jsxs(C,{children:[t("About")+" "+(s?y[s].name.split(" - ").map(g=>t(g)).join(" - "):""),e.jsx(ae,{ml:1,children:a})]}),e.jsx(B,{}),e.jsx(H,{}),e.jsx(A,{children:e.jsx(j,{colorScheme:"primary",onClick:()=>window.open("https://github.com/railmapgen/"+r,"_blank"),children:t("Visit GitHub")})})]})]})}const gn={flexDirection:"column","& h4":{mx:3,my:2},"& > div":{flexDirection:"column"}};function mn(){const{t:n}=m(),[s,i]=p.useState(),t=Ne(h.getEnv());return e.jsxs(f,{sx:gn,children:[e.jsx(z,{as:"h4",size:"md",children:n("Apps")}),e.jsx(f,{children:t.map(a=>e.jsx(hn,{appId:a,onAboutOpen:()=>i(a)},a))}),e.jsx(pn,{appId:s,onClose:()=>i(void 0)})]})}const xn={flexDirection:"column",py:1,"& h4":{mx:3,my:2},"& > div":{px:2}};function jn(){const{t:n}=m(),{setColourMode:s}=Be(),i={light:n("Light"),dark:n("Dark"),system:n("System")},a=h.getInstance()==="GitHub"?"GitLab":"GitHub",c=()=>{const l=We(a,h.getEnv());window.open(l,"_blank"),h.event(k.SWITCH_MIRROR,{mirrorUrl:l})},r=[{type:"select",label:n("Language"),value:h.getLanguage(),options:{[n("Main languages")]:qe.reduce((l,o)=>({...l,[o]:J[o][o]}),{}),[n("Other languages")]:Ye.reduce((l,o)=>({...l,[o]:J[o][o]}),{})},onChange:l=>{const o=l;h.setLanguage(o),h.getI18nInstance().changeLanguage(o),h.event(k.CHANGE_LANGUAGE,{language:o})}},{type:"select",label:n("Appearance"),value:h.getColourMode(),options:i,onChange:l=>s(l)},{type:"custom",label:n("Switch to")+" "+Ge[a],component:e.jsx(j,{size:"xs",onClick:c,children:n("Switch")}),minW:"full",oneLine:!0}];return e.jsxs(f,{sx:xn,children:[e.jsx(z,{as:"h4",size:"md",children:n("Settings")}),e.jsx(T,{children:e.jsx(ce,{fields:r})})]})}function he(n){const{login:s,urlRepo:i,...t}=n,a=i?`https://github.com/railmapgen/${i}/issues?q=is:issue+author:${s}`:`https://github.com/${s}`;return e.jsx(I,{name:s,title:s,src:`https://github.com/${s}.png`,loading:"lazy",onClick:()=>window.open(a,"_blank"),cursor:"pointer",...t})}const O={},vn=async(n,s)=>{if(n in O)return O[n];const t=await(await fetch(n,s)).json();return O[n]=t,t},fn=async(n,s,i)=>{const t=`https://api.github.com/repos/railmapgen/${n}/contributors`,a=new URLSearchParams({per_page:"100",page:s.toString()});return(await vn(t+"?"+a.toString(),{signal:i})).map(r=>r.login)};function bn(n){const[s,i]=p.useState(n!=null?n:[]);return[s,a=>{i(c=>{const r=new Set(c?c.concat(a):a);return Array.from(r)})}]}const zn=["","wongchito","thekingofcity","github-actions[bot]"],ee=n=>!zn.includes(n);function kn(n){const[s,i]=bn(),[t,a]=p.useState(!0),[c,r]=p.useState(!1),l=p.useRef(),o=async()=>{var g;let d=1;for(;;){l.current=new AbortController;const v=await fn(n,d,(g=l.current)==null?void 0:g.signal);if(i(v.filter(ee)),v.length<100)break;d++}};return p.useEffect(()=>(o().then(()=>{var d;return y[n].legacyContributors?(l.current=new AbortController,un(n,(d=l.current)==null?void 0:d.signal)):[]}).then(d=>i(d.filter(ee))).catch(d=>{console.error("[rmt] unable to fetch contributors for:",n,d),r(!0)}).finally(()=>a(!1)),()=>{var d;(d=l.current)==null||d.abort(),a(!0),r(!1)}),[n]),{contributors:s,isLoading:t,isError:c}}const wn={position:"relative",minH:20,"& .chakra-alert":{flexDirection:"column"},"& .chakra-alert__icon":{boxSize:7,mr:0,mb:1}};function Mn(n){const{appId:s}=n,{t:i}=m(),{contributors:t,isLoading:a,isError:c}=kn(s);return e.jsxs(f,{sx:wn,children:[a&&e.jsx(Ve,{isIndeterminate:!0}),c&&e.jsxs(G,{status:"warning",children:[e.jsx(W,{}),i("Unable to load contributors")]}),!c&&t&&e.jsx(oe,{spacing:1.5,children:t==null?void 0:t.map(r=>e.jsx(ie,{children:e.jsx(he,{login:r,urlRepo:s,size:"sm"})},r))})]})}const Cn=["52PD","linchen1965"],Hn={"& h5":{mt:6,mb:4,"&:first-of-type":{mt:0}},"& h6":{mt:5,mb:2,"&:first-of-type":{mt:0}},"& .dev-team-stack":{"& > span":{minW:"75%",borderRadius:"lg",cursor:"pointer","& > span:last-of-type":{display:"block"},"& p":{fontSize:"sm","&:first-of-type":{fontSize:"lg",fontWeight:"bold",mb:1}}},"& .chakra-avatar":{ml:1,mr:3,my:4}},"& i":{mt:3,fontSize:"xs"}};function yn(n){const{isOpen:s,onClose:i}=n,{t}=m();return e.jsxs(w,{isOpen:s,onClose:i,size:"xl",scrollBehavior:"inside",children:[e.jsx(L,{}),e.jsxs(M,{children:[e.jsx(C,{children:t("Contributors")}),e.jsx(B,{}),e.jsxs(H,{sx:Hn,children:[e.jsx(z,{as:"h5",size:"sm",children:t("Developer team")}),e.jsxs(te,{className:"dev-team-stack",children:[e.jsxs(_,{size:"lg",onClick:()=>window.open("https://github.com/wongchito","_blank"),children:[e.jsx(I,{src:"https://github.com/wongchito.png",size:"lg"}),e.jsxs(D,{children:[e.jsx(x,{children:"Chito Wong"}),e.jsx(x,{children:"Author of Rail Map Toolkit platform"}),e.jsx(x,{children:"Author of Rail Map Generator"})]})]}),e.jsxs(_,{size:"lg",onClick:()=>window.open("https://github.com/thekingofcity","_blank"),children:[e.jsx(I,{src:"https://github.com/thekingofcity.png",size:"lg"}),e.jsxs(D,{children:[e.jsx(x,{children:"thekingofcity"}),e.jsx(x,{children:"Author of Rail Map Painter"}),e.jsx(x,{children:"Author of RMG (Shanghai Metro style)"})]})]}),e.jsxs(_,{size:"lg",onClick:()=>window.open("https://github.com/langonginc","_blank"),children:[e.jsx(I,{src:"https://github.com/langonginc.png",size:"lg"}),e.jsxs(D,{children:[e.jsx(x,{children:"5+1"}),e.jsx(x,{children:"Author of RMP2RMG conversion"})]})]})]}),e.jsx(z,{as:"h5",size:"sm",children:t("Resource administrators")}),e.jsx(oe,{spacing:1.5,children:Cn.map(a=>e.jsx(ie,{children:e.jsx(he,{login:a,size:"md"})},a))}),e.jsx(z,{as:"h5",size:"sm",children:t("Resource contributors")}),Object.entries(y).filter(([a,c])=>c.showContributors).map(([a,c])=>e.jsxs(p.Fragment,{children:[e.jsx(z,{as:"h6",size:"xs",mt:5,mb:2,children:t(c.name)}),e.jsx(Mn,{appId:a},a)]},a)),e.jsx(x,{as:"i",children:t("Notes: Contributors are sorted by number of commits and commit time.")})]}),e.jsx(A,{children:e.jsx(j,{colorScheme:"primary",onClick:()=>window.open("https://github.com/railmapgen/rmg/wiki/How-to-add-color-palette-and-line-templates","_blank"),children:t("Contribution Wiki")})})]})]})}function An(n){const{isOpen:s,onClose:i}=n,{t}=m(),[a,c]=p.useState(h.isAllowAnalytics()),[r,l]=p.useState();p.useEffect(()=>{s||l(void 0)},[s]);const o=[{type:"switch",label:t("Allow cookies to help improve our website"),isChecked:a,onChange:c,oneLine:!0}],d=()=>{h.allowAnalytics(a).refreshRequired?l("Refreshing is required for changes to take effect."):i()};return e.jsxs(w,{isOpen:s,onClose:i,children:[e.jsx(L,{}),e.jsxs(M,{children:[r&&e.jsxs(G,{status:"info",variant:"solid",size:"xs",children:[e.jsx(W,{}),t(r)]}),e.jsxs(T,{position:"relative",children:[e.jsx(C,{children:t("Privacy settings")}),e.jsx(B,{})]}),e.jsx(H,{children:e.jsx(ce,{fields:o})}),e.jsx(A,{children:e.jsx(j,{colorScheme:"primary",isDisabled:!!r,onClick:d,children:t("Save")})})]})]})}function Sn(n){return b({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M126.12 315.1A47.06 47.06 0 1179.06 268h47.06zm23.72 0a47.06 47.06 0 0194.12 0v117.84a47.06 47.06 0 11-94.12 0zm47.06-188.98A47.06 47.06 0 11244 79.06v47.06zm0 23.72a47.06 47.06 0 010 94.12H79.06a47.06 47.06 0 010-94.12zm188.98 47.06a47.06 47.06 0 1147.06 47.1h-47.06zm-23.72 0a47.06 47.06 0 01-94.12 0V79.06a47.06 47.06 0 1194.12 0zM315.1 385.88a47.06 47.06 0 11-47.1 47.06v-47.06zm0-23.72a47.06 47.06 0 010-94.12h117.84a47.06 47.06 0 110 94.12z"}}]})(n)}function Rn(){const{t:n}=m(),[s,i]=p.useState(!1),[t,a]=p.useState(!1);return e.jsxs(f,{direction:"column",children:[e.jsx(ke,{}),e.jsxs(we,{templateColumns:"repeat(4, auto)",children:[e.jsx(S,{children:e.jsx(j,{as:P,variant:"ghost",size:"sm",w:"100%",leftIcon:e.jsx(Sn,{}),target:"_blank",href:"https://join.slack.com/t/railmapgenerator/shared_invite/zt-1odhhta3n-DdZF~fnVwo_q0S0RJmgV8A",children:"Slack"})}),e.jsx(S,{children:e.jsx(j,{variant:"ghost",size:"sm",w:"100%",leftIcon:e.jsx(ln,{}),onClick:()=>i(!0),children:n("Contributors")})}),e.jsx(S,{children:e.jsx(j,{variant:"ghost",size:"sm",w:"100%",leftIcon:e.jsx(tn,{}),onClick:()=>a(!0),children:n("Privacy")})}),e.jsx(S,{children:e.jsx(j,{as:P,variant:"ghost",size:"sm",w:"100%",leftIcon:e.jsx(cn,{}),target:"_blank",href:"https://rmttutorial.wordpress.com",children:n("Tutorial")})})]}),e.jsx(yn,{isOpen:s,onClose:()=>i(!1)}),e.jsx(An,{isOpen:t,onClose:()=>a(!1)})]})}const ne=420,In={flexShrink:0,flexDirection:"column",overflow:"hidden",alignItems:"flex-end",transition:"0.3s ease-in-out",maxW:0,visibility:"hidden",boxShadow:"lg",zIndex:100,".show-menu &":{maxW:{base:"100%",md:ne},w:{base:"100%",md:"unset"},visibility:"initial"},"& > div":{flexDirection:"column",h:"100%",w:{base:"100vw",md:ne},"& .nav-menu__header":{flex:0,flexDirection:"row",alignItems:"center",minHeight:10,pl:12},"& .nav-menu__body":{flexDirection:"column",flex:1,overflow:"hidden","& > div:first-of-type":{flex:1,overflowY:"auto"}}},"& .chakra-alert":{flexGrow:0,pl:3,pr:2,py:2,"& a":{fontWeight:"bold",textDecoration:"underline","&:hover, &:focus":{textDecoration:"none"}}}};function Tn(){const{t:n}=m(),[s]=re(),i=(h.getInstance()==="GitLab"?"https://railmapgen.gitlab.io/":"https://railmapgen.github.io/")+"?"+s.toString();return e.jsx(f,{as:"section",sx:In,children:e.jsxs(f,{children:[e.jsxs(f,{className:"nav-menu__header",children:[e.jsx(z,{as:"h4",size:"md",children:n("Rail Map Toolkit")}),e.jsx(Ue,{environment:h.getEnv(),version:h.getAppVersion()})]}),h.getEnv()!=="PRD"&&e.jsxs(G,{status:"warning",children:[e.jsx(W,{}),e.jsxs(Me,{children:[n("You're currently viewing a testing environment.")," ",e.jsx(P,{href:i,isExternal:!0,children:n("Back to production environment")})]})]}),e.jsxs(f,{className:"nav-menu__body",children:[e.jsx(mn,{}),e.jsx(jn,{})]}),e.jsx(Rn,{})]})})}function Ln(n){const{isOpen:s,onClose:i}=n,{t}=m(),a=p.useRef(null),c=()=>{h.allowAnalytics(!0),i()},r=()=>{h.allowAnalytics(!1).refreshRequired?window.location.reload():i()};return e.jsxs(w,{initialFocusRef:a,isOpen:s,onClose:()=>{},children:[e.jsx(L,{}),e.jsxs(M,{children:[e.jsx(C,{children:t("CookiesModal.header")}),e.jsxs(H,{children:[e.jsx(x,{children:t("CookiesModal.text1")}),e.jsx(x,{mt:2,children:t("CookiesModal.text2")}),e.jsx(Ce,{children:e.jsxs(He,{children:[" ",t("CookiesModal.item1")]})}),e.jsx(x,{mt:2,children:t("CookiesModal.text3")})]}),e.jsx(A,{children:e.jsxs(se,{children:[e.jsx(j,{variant:"ghost",onClick:r,children:t("CookiesModal.reject")}),e.jsx(j,{ref:a,colorScheme:"primary",onClick:c,children:t("CookiesModal.accept")})]})})]})]})}const _n=()=>{};function Dn(){const{t:n}=m(),[s,i]=p.useState(!1),t=()=>{i(!0),Fe(),setTimeout(()=>{window.location.reload()},1e3)};return e.jsx(w,{isOpen:!0,onClose:_n,children:e.jsxs(M,{children:[e.jsx(C,{children:n("Rail Map Toolkit is opened in another window")}),e.jsx(H,{children:n("You cannot open multiple Rail Map Toolkit at the same time. Please close this window.")}),e.jsx(A,{children:e.jsx(j,{colorScheme:"primary",onClick:t,isLoading:s,children:n("Restart RMT in this window")})})]})})}const En=()=>{};function On(){const{t:n}=m();return e.jsx(w,{isOpen:!0,onClose:En,children:e.jsxs(M,{children:[e.jsx(C,{children:n("Rail Map Toolkit is opened in another window")}),e.jsx(H,{children:n("Current session has been terminated. Please close this window.")})]})})}function Gn(){const{t:n}=m(),s=le(),{isPrimary:i,isTerminated:t,isShowMenu:a}=V(o=>o.app),[c,r]=p.useState(!1);p.useEffect(()=>{h.isAnalyticsQADone()||r(!0)},[]);const l=()=>{h.toggleNavMenu(!a),s(N()),h.event(k.TOGGLE_NAV_MENU,{})};return t?e.jsx(E,{children:e.jsx(On,{})}):i===!1?e.jsx(E,{children:e.jsx(Dn,{})}):e.jsx(ye,{basename:"/",children:e.jsxs(E,{className:a?"show-menu":"",children:[e.jsx(R,{variant:a?"ghost":"solid",colorScheme:a?void 0:"primary",size:"md","aria-label":n("Toggle menu"),title:n("Toggle menu"),icon:e.jsx(on,{}),position:"absolute",zIndex:110,borderRadius:0,onClick:l}),e.jsxs($e,{sx:{flexDirection:"row"},children:[e.jsx(Tn,{}),e.jsx(en,{})]}),e.jsx(Ln,{isOpen:c,onClose:()=>r(!1)})]})})}export{Gn as default};
