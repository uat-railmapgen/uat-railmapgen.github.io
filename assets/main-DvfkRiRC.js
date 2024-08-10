const __vite__fileDeps=["assets/app-root-DaK__e7x.js","assets/chakra-DfZKn_--.js","assets/react-CYUv4v4k.js","assets/index-CJIIdY0f.js","assets/index-Bb8_fFLS.css","assets/rmg-fields-Do-CSbtP.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as d,l as u,c as ee,R as te,a as oe,b as ae}from"./index-CJIIdY0f.js";import{j as T}from"./chakra-DfZKn_--.js";import{i as ne,d as I,e as H,f as se,h as ie,j as re,u as ce,k as le,l as D,r as x,P as pe,I as de}from"./react-CYUv4v4k.js";function va(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}const ue="modulepreload",me=function(e){return"/"+e},L={},he=function(t,o,a){let n=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.all(o.map(r=>{if(r=me(r),r in L)return;L[r]=!0;const l=r.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector('link[href="'.concat(r,'"]').concat(c)))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":ue,l||(p.as="script",p.crossOrigin=""),p.href=r,s&&p.setAttribute("nonce",s),document.head.appendChild(p),l)return new Promise((v,k)=>{p.addEventListener("load",v),p.addEventListener("error",()=>k(new Error("Unable to preload CSS for ".concat(r))))})}))}return n.then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})},ge="操作",fe="应用程序",Te="黑",Se="取消",we="城市",be="组件",ve="确定",ke="继续",Re="复制",Ae="编辑",ye="语言/Language",Ce="理由",Me="名称",$e="下一步",Oe="打开",Pe="调色板",Le="上一步",Ee="删除",_e="重置",Ge="设置",Ie="提交",He="翻译",De="上传",xe="白",Ne={Action:ge,Apps:fe,"Back to list":"返回列表","Background colour":"背景色",Black:Te,Cancel:Se,City:we,Components:be,"Configuration file":"配置文件",Confirm:ve,Continue:ke,"Country/Region":"国家/地区",Copy:Re,Edit:Ae,"Foreground colour":"前景色","Go back":"返回",Language:ye,Justification:Ce,Name:Me,Next:$e,Open:Oe,Palette:Pe,"Please select...":"请选择...",Previous:Le,"Rail Map Generator":"铁路线路图生成器","Rail Map Painter":"地铁线路图绘制器","Rail Map Toolkit":"线路图工具包",Remove:Ee,Reset:_e,"RMG Templates":"RMG 模板","RMP Gallery":"RMP 画廊","Seed Project":"种子项目",Settings:Ge,Submit:Ie,Translate:He,Upload:De,White:xe},Ue="動作",Fe="應用程式",je="黑",Be="取消",Ve="城市",We="元件",Je="確定",qe="繼續",ze="複製",Ye="編輯",Ke="語言/Language",Qe="理由",Xe="名稱",Ze="下一步",et="開啟",tt="調色盤",ot="上一步",at="移除",nt="重設",st="設定",it="提交",rt="翻譯",ct="上載",lt="白",pt={Action:Ue,Apps:Fe,"Back to list":"返回列表","Background colour":"背景色",Black:je,Cancel:Be,City:Ve,Components:We,"Configuration file":"設定檔",Confirm:Je,Continue:qe,Copy:ze,"Country/Region":"國家/地區",Edit:Ye,"Foreground colour":"前景色","Go back":"返回",Language:Ke,Justification:Qe,Name:Xe,Next:Ze,Open:et,Palette:tt,"Please select...":"請選擇...",Previous:ot,"Rail Map Generator":"鐵路路綫圖產生器","Rail Map Painter":"地鐵路綫圖繪製器","Rail Map Toolkit":"路綫圖工具組",Remove:at,Reset:nt,"RMG Templates":"RMG 範本","RMP Gallery":"RMP 畫廊","Seed Project":"種子項目",Settings:st,Submit:it,Translate:rt,Upload:ct,White:lt},dt="言語/Language",ut="パレット",mt="削除",ht={Language:dt,Palette:ut,"Rail Map Generator":"鉄道路線図ジェネレータ","Rail Map Toolkit":"路線図ツールキット",Remove:mt,"RMG Templates":"RMG テンプレート"},gt="조작",ft="앱",Tt="블랙",St="취소",wt="도시",bt="요소",vt="확인",kt="복사",Rt="편집",At="언어/Language",yt="이유",Ct="명칭",Mt="다음",$t="열기",Ot="팔레트",Pt="나아가",Lt="삭제",Et="리셋",_t="설치",Gt="제출",It="번역",Ht="업로드",Dt="화이트",xt={Action:gt,Apps:ft,"Back to list":"다시 목록으로","Background colour":"배경색",Black:Tt,Cancel:St,City:wt,Components:bt,"Configuration file":"환경 설정 파일",Confirm:vt,Copy:kt,"Country/Region":"국가/지역",Edit:Rt,"Foreground colour":"전경색","Go back":"되돌아가",Language:At,Justification:yt,Name:Ct,Next:Mt,Open:$t,Palette:Ot,"Please select...":"선택해주세요",Previous:Pt,"Rail Map Generator":"철도 노선도 생성기","Rail Map Painter":"지하철 노선도 그리기","Rail Map Toolkit":"노선도 툴킷",Remove:Lt,Reset:Et,"RMG Templates":"RMG 템플릿","RMP Gallery":"RMP 갤러리","Seed Project":"종자 프로젝트",Settings:_t,Submit:Gt,Translate:It,Upload:Ht,White:Dt};var Nt={en:{},"zh-Hans":Ne,"zh-Hant":pt,ja:ht,ko:xt};const Ut={header:"Cookies on this website",text1:"At RMG we use cookies to help ensure that our website and services are able to function properly. These cookies are necessary and so are set automatically.",text2:"We would also like to use some cookies to:",item1:"improve our website based on how you use it",text3:"These cookies are optional. If you'd like to accept all optional cookies, select 'Accept all cookies'. If you'd like to reject them, select 'Reject'.",accept:"Accept all cookies",reject:"Reject"},Ft={text1:"The fonts below used in your projects were loaded from our server instead of your device.",text2:"This may cause unnecessary network traffic and slowness especially if your connection is unstable.",text3:"You can download and install these open source and free fonts to get a better experience.",safari:"This is not applicable to Safari users. ☹️"},jt={CookiesModal:Ut,FontsSection:Ft},Bt={header:"本网站的 Cookies",text1:"在 RMG，我们使用 Cookies 来确保本网站及服务可以正常运作。这些 Cookies 是必需的，因此已默认启动。",text2:"我们也会以 Cookies 的方式：",item1:"分析您的使用模式，用来改进本网站",text3:"这些 Cookies 是可选的。如果您想允许所有可选 Cookies，请选择“接受所有 Cookies”。如果您想禁用 Cookies，请选择“拒绝”。",accept:"接受所有 Cookies",reject:"拒绝"},Vt={text1:"您的项目使用的下列字体，是从我们的服务器而不是您的设备加载。",text2:"这可能导致非必要的网络流量，如您的连接不稳定，还会造成加载缓慢。",text3:"您可以下载和安装这些开源免费字体，以提升使用体验。",safari:"不适用于 Safari ☹️"},Wt="关于",Jt="外观",qt="贡献者",zt="深色",Yt="开发者工具",Kt="捐赠者",Qt="浅色",Xt="更多",Zt="好",eo="正在运行",to="保存",oo="切换",ao="跟随系统",no="标签页",so="使用教程",io={CookiesModal:Bt,FontsSection:Vt,About:Wt,"Allow cookies to help improve our website":"允许用 Cookies 帮助改进本网站",Appearance:Jt,"Back to production environment":"返回生产环境","Close all tabs":"关闭所有标签页","Close app":"关闭应用程序","Close current tab":"关闭当前标签页","Close tab":"关闭标签页","Contribution Wiki":"贡献者指南",Contributors:qt,"Current session has been terminated. Please close this window.":"当前会话已被终止，请关闭此窗口。",Dark:zt,"Developer team":"开发者团队",Devtools:Yt,Donators:Kt,"Don't show again":"不再显示","Download desktop app":"下载桌面应用程序","Fonts are slow to load? Learn how to speed it up!":"字体加载太慢？看看如何提速！","GitHub Pages mirror":"GitHub Pages 镜像","GitLab Pages mirror":"GitLab Pages 镜像","Happy Chinese New Year!":"新年快乐！","Help & support":"帮助与支持","Join us on Slack":"加入我们的 Slack 群组",Light:Qt,"Main languages":"主要语言",More:Xt,"More mirrors":"更多镜像","New tab":"新标签页","Notes: Contributors are sorted by number of commits and commit time.":"注：贡献者名单按提交次数和时间排序。",OK:Zt,"Other languages":"其他语言","Pro tip":"提示","Rail Map Toolkit is opened in another window":"线路图工具包已在另一窗口中打开","Raise an Issue on GitHub":"在 GitHub 提交一个 Issue","Refreshing is required for changes to take effect.":"刷新页面后变更才会生效","Resource administrators":"资源管理员","Resource contributors":"资源贡献者","Restart RMT in this window":"在此窗口重新启动工具包",Running:eo,Save:to,"Select an app to start your own rail map design!":"选择一个应用程序来开始你的线路图设计！","Show dev tools for 1 day":"显示开发者工具 1 天",Switch:oo,"Switch to":"切换至",System:ao,Tab:no,"Terms and conditions":"条款与细则",Tutorial:so,"Unable to load contributors":"无法加载贡献者名单","Useful links":"实用链接","Visit GitHub":"访问 GitHub","Web fonts":"网络字体","Welcome to Rail Map Toolkit":"欢迎使用线路图工具包","You cannot open multiple Rail Map Toolkit at the same time. Please close this window.":"您不能同时打开多个线路图工具包，请关闭当前窗口。","You're currently viewing a testing environment.":"您正在浏览测试环境。"},ro={header:"本網站的 Cookies",text1:"在 RMG，我們使用 Cookies 以確保本網站及服務可以正常運作。這些 Cookies 是必需的，因此已預設啟用。",text2:"我們亦會以 Cookies 的方式：",item1:"分析閣下的使用模式，用來改進本網站",text3:"這些 Cookies 是可選的。如果閣下想容許所有可選 Cookies，請選擇「接受所有 Cookies」。如果閣下想禁用 Cookies，請選擇「拒絕」。",accept:"接受所有 Cookies",reject:"拒絕"},co={text1:"你的專案使用的下列字型，是從我們的伺服器而非你的裝置載入。",text2:"這可能導致非必要的網絡流量，如你的連線不穩，還會造成載入緩慢。",text3:"你可以下載及安裝這些開源免費字型，以提升使用體驗。",safari:"不適用於 Safari ☹️"},lo="關於",po="外觀",uo="貢獻者",mo="深色",ho="開發人員工具",go="捐贈者",fo="淺色",To="更多",So="好",wo="運行中",bo="儲存",vo="切換",ko="跟隨系統",Ro="分頁",Ao="使用指南",yo={CookiesModal:ro,FontsSection:co,About:lo,"Allow cookies to help improve our website":"容許以 Cookies 幫助改進本網站",Appearance:po,"Back to production environment":"返回生產環境","Close all tabs":"關閉所有分頁","Close app":"關閉應用程式","Close current tab":"關閉當前分頁","Close tab":"關閉分頁","Contribution Wiki":"貢獻者指南",Contributors:uo,"Current session has been terminated. Please close this window.":"當前工作階段已被終止，請關閉該視窗。",Dark:mo,"Developer team":"開發人員團隊",Devtools:ho,Donators:go,"Don't show again":"不再顯示","Download desktop app":"下載桌面應用程式","Fonts are slow to load? Learn how to speed it up!":"字型載入太慢？看看如何提速！","GitHub Pages mirror":"GitHub Pages 鏡像","GitLab Pages mirror":"GitLab Pages 鏡像","Happy Chinese New Year!":"新年快樂！","Help & support":"幫助及支援","Join us on Slack":"加入我們的 Slack 羣組",Light:fo,"Main languages":"主要語言",More:To,"More mirrors":"更多鏡像","New tab":"新分頁","Notes: Contributors are sorted by number of commits and commit time.":"註：貢獻者列表按提交次數及時間排序。",OK:So,"Other languages":"其他語言","Pro tip":"小貼士","Rail Map Toolkit is opened in another window":"路綫圖工具組已於另一視窗中開啟","Raise an Issue on GitHub":"於 GitHub 提交一個 Issue","Refreshing is required for changes to take effect.":"重新整理頁面後變更才會生效","Resource administrators":"資源管理員","Resource contributors":"資源貢獻者","Restart RMT in this window":"於該視窗重新啟動工具組",Running:wo,Save:bo,"Select an app to start your own rail map design!":"選擇一個應用程式以開始你的路綫圖設計！","Show dev tools for 1 day":"顯示開發人員工具 1 日",Switch:vo,"Switch to":"切換至",System:ko,Tab:Ro,"Terms and conditions":"條款及細則",Tutorial:Ao,"Unable to load contributors":"無法載入貢獻者列表","Useful links":"實用連結","Visit GitHub":"造訪 GitHub","Web fonts":"網絡字型","Welcome to Rail Map Toolkit":"歡迎使用路綫圖工具組","You cannot open multiple Rail Map Toolkit at the same time. Please close this window.":"你不能同時開啟多個路綫圖工具組，請關閉當前視窗。","You're currently viewing a testing environment.":"你正在檢視測試環境。"},Co="貢献者",Mo="タブ",$o={Contributors:Co,"Happy Chinese New Year!":"旧正月おめでとう！","Main languages":"主要言語",Tab:Mo,"Welcome to Rail Map Toolkit":"路線図ツールキットへようこそ"},Oo={header:"이 웹 사이트의 쿠키",text1:"RMG에서는 쿠키를 사용하여 웹 사이트 및 서비스가 제대로 작동하는지 확인합니다.이러한 쿠키는 필수이므로 기본적으로 시작됩니다.",text2:"저희도 쿠키 방식으로：",item1:"당신의 사용 패턴을 분석하여, 본 사이트를 개선합니다",text3:"이 쿠키들은 선택 사항입니다.모든 선택 가능한 쿠키를 허용하려면 '모든 쿠키 허용'을 선택하십시오.쿠키를 사용하지 않으려면 '거부'를 선택하십시오.",accept:"모든 쿠키 허용",reject:"거부"},Po="관한",Lo="화면 스타일",Eo="기여자",_o="다크 모드",Go="라이트 모드",Io="저장",Ho="시스템 모드",Do={CookiesModal:Oo,About:Po,"Allow cookies to help improve our website":"쿠키를 사용하여 이 웹 사이트를 개선할 수 있도록 허용",Appearance:Lo,"Contribution Wiki":"기여자 안내",Contributors:Eo,"Core contributors":"핵심 기여자",Dark:_o,"Happy Chinese New Year!":"새해 복 많이 받으세요!",Light:Go,"Refreshing is required for changes to take effect.":"페이지를 새로 고친 후에만 변경 가능","Resource administrators":"자원 관리자","Resource contributors":"자원 기여자",Save:Io,"Select an app to start your own rail map design!":"응용 프로그램을 선택하여 노선도 설계를 시작하십시오.","Switch to":"곳으로 전환",System:Ho,"Terms and conditions":"조항과 세칙","Visit GitHub":"GitHub 방문하기","Welcome to Rail Map Toolkit":"노선도 툴킷에 오신 것을 환영합니다"},xo=new d.I18nBuilder().use(ne).withAppName("Rail Map Toolkit").withLng(d.getLanguage()).withDefaultResource(Nt).withResource("en",jt).withResource("zh-Hans",io).withResource("zh-Hant",yo).withResource("ja",$o).withResource("ko",Do).build(),No=()=>{document.querySelector('link[rel="canonical"]').setAttribute("href",window.location.origin)};No();var h=(e=>(e.OPENED_TABS="rmg-home__openedTabs",e.ACTIVE_TAB="rmg-home__activeTab",e.LAST_SHOW_DEVTOOLS="lastShowDevtools",e.SHOW_FONT_ADVICE="showFontAdvice",e.ACCOUNT="rmg-home__account",e))(h||{}),N=(e=>(e.APP_LOAD="APP_LOAD",e.OPEN_APP="OPEN_APP",e.CLOSE_APP="CLOSE_APP",e.OPEN_LINK="OPEN_LINK",e.TOGGLE_NAV_MENU="TOGGLE_NAV_MENU",e.CHANGE_LANGUAGE="CHANGE_LANGUAGE",e.SHOW_DEVTOOLS="SHOW_DEVTOOLS",e.RAISE_ISSUE="RAISE_ISSUE",e.JOIN_SLACK="JOIN_SLACK",e.DOWNLOAD_FONT="DOWNLOAD_FONT",e))(N||{});const E="rmg-home:frame-",C={APP:"app",SEARCH_PARAMS:"searchParams",HASH_PARAMS:"hashParams"};var b=(e=>(e.AUTH_REGISTER="/auth/register",e.AUTH_LOGIN="/auth/login",e.AUTH_SEND_VERIFICATION_EMAIL="/auth/send-verification-email",e.AUTH_SEND_RESET_PASSWORD_EMAIL="/auth/forgot-password",e.AUTH_RESET_PASSWORD="/auth/reset-password",e.AUTH_REFRESH="/auth/refresh-tokens",e.AUTH_LOGOUT="/auth/logout",e.SUBSCRIPTION="/subscription",e.SUBSCRIPTION_REDEEM="/subscription/redeem",e.SAVES="/saves",e))(b||{});const y="https://railmapgen.org/v1";var U=(e=>(e.RMP="rmp__param",e))(U||{});const Uo=e=>new Promise(t=>{setTimeout(t,e,"Timeout after ".concat(e/1e3," seconds"))}),Fo=()=>{const e=navigator.userAgent;return e.includes("Safari")&&!e.includes("Chrome")},R=(e,t,o)=>{const a=new URL(e,window.location.href);return a.search=t!=null?t:a.search,a.hash=o!=null?o:a.hash,a.pathname+a.search+a.hash},F=async(e,t,o,a)=>{const n={accept:"application/json","Content-Type":"application/json"},i=structuredClone(n);o&&(i.Authorization="Bearer ".concat(o));const s=await fetch("".concat(y).concat(e),{headers:i,...t});if(s.status!==401)return{rep:s,token:o,refreshToken:a};if(!a)return{rep:s,token:o,refreshToken:void 0};const r=await fetch("".concat(y).concat(b.AUTH_REFRESH),{method:"POST",headers:n,body:JSON.stringify({refreshToken:a})});if(r.status!==200)return{rep:s,token:o,refreshToken:void 0};const l=await r.json(),c=l.access.token;return n.Authorization="Bearer ".concat(c),{rep:await fetch("".concat(y).concat(e),{headers:n,...t}),token:c,refreshToken:l.refresh.token}},jo=async(e,t="SHA-256")=>{const a=new TextEncoder().encode(e),n=await crypto.subtle.digest(t,a);return Array.from(new Uint8Array(n)).map(s=>s.toString(16).padStart(2,"0")).join("")},$={RMP_CLOUD:!1,RMP_EXPORT:!1},Bo={isLoggedIn:!1,name:"",email:void 0,token:void 0,refreshToken:void 0,activeSubscriptions:$,currentSaveId:void 0,saves:[]},w=I("account/getSaveList",async(e,{getState:t,dispatch:o,rejectWithValue:a})=>{const{token:n,refreshToken:i}=t().account;n||a("No token.");const{rep:s,token:r,refreshToken:l}=await F(b.SAVES,{},n,i);return(!r||!l)&&(o(V()),a("Can not recover from expired refresh token.")),o(W({access:r,refresh:l})),s.status!==200&&a(s.text),await s.json()}),ya=I("account/fetchLogin",async(e,{dispatch:t})=>{const{email:o,password:a}=e,n=await fetch(y+b.AUTH_LOGIN,{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:o,password:a})});if(n.status!==200)return{error:await n.text(),username:void 0};const{user:{name:i},tokens:{access:{token:s},refresh:{token:r}}}=await n.json();return t(B({name:i,email:o,token:s,refreshToken:r})),t(w()),{error:void 0,username:i}}),j=H({name:"account",initialState:Bo,reducers:{login:(e,t)=>{e.isLoggedIn=!0,e.name=t.payload.name,e.email=t.payload.email,e.token=t.payload.token,e.refreshToken=t.payload.refreshToken,e.activeSubscriptions=$,e.currentSaveId=void 0,e.saves=[]},logout:e=>{e.isLoggedIn=!1,e.name=void 0,e.email=void 0,e.token=void 0,e.refreshToken=void 0,e.activeSubscriptions=$,e.currentSaveId=void 0,e.saves=[]},setToken:(e,t)=>{e.token=t.payload.access,e.refreshToken=t.payload.refresh},setActiveSubscriptions:(e,t)=>{e.activeSubscriptions=t.payload}},extraReducers:e=>{e.addCase(w.fulfilled,(t,o)=>{t.currentSaveId=o.payload.currentSaveId,t.saves=o.payload.saves}).addCase(w.rejected,(t,o)=>{console.log(t,o.payload)})}}),{login:B,logout:V,setActiveSubscriptions:Ca,setToken:W}=j.actions,Vo=j.reducer,O=e=>e?["app","devtool"]:["app"],Wo=()=>{const e="https://mirror.ghproxy.com/https://github.com/railmapgen/railmapgen.github.io/releases/download",t=new Date,o="".concat(t.getFullYear()).concat(String(t.getMonth()+1).padStart(2,"0"),"01"),a="".concat(String(t.getFullYear()).slice(-2),".").concat(t.getMonth()+1,".1"),n=navigator.platform,i=n.includes("Linux")?"amd64.deb":n.includes("Mac")?"x64.dmg":"x64-setup.exe";return e+"/tauri-".concat(o,"/railmapgen_").concat(a,"_").concat(i)},g={rmg:{name:"Rail Map Generator",url:"/rmg/",assetType:"app",allowMultiInstances:!0},rmp:{name:"Rail Map Painter",url:"/rmp/",assetType:"app"},"rmg-palette":{name:"Palette",url:"/rmg-palette/",assetType:"app",showContributors:!0,legacyContributors:"legacy-contributor-list.txt"},"rmg-palette-upload":{name:"Palette - Upload",url:"/rmg-palette/#/new",assetType:"app"},"rmg-templates":{name:"RMG Templates",url:"/rmg-templates/",assetType:"app",showContributors:!0,legacyContributors:"legacy-contributor-list.txt",allowedInstances:["Org","GitHub","GitLab","Tauri","localhost","unknown"]},"rmg-templates-upload":{name:"RMG Templates - Upload",url:"/rmg-templates/#/new",assetType:"app",allowedInstances:["Org","GitHub","GitLab","Tauri","localhost","unknown"]},"rmp-gallery":{name:"RMP Gallery",url:"/rmp-gallery/",assetType:"app",showContributors:!0,showDonators:!0,allowedInstances:["Org","GitHub","GitLab","Tauri","localhost","unknown"]},"rmp-designer":{name:"RMP Designer",url:"/rmp-designer/",assetType:"app"},"rmg-components":{name:"Components",url:"/rmg-components/",assetType:"devtool",allowedInstances:["Org","GitHub","GitLab","localhost","unknown"]},"svg-assets":{name:"SVG Assets",url:"/svg-assets/",assetType:"devtool",allowedInstances:["Org","GitHub","GitLab","localhost","unknown"]},"rmg-translate":{name:"Translate",url:"/rmg-translate/",assetType:"devtool",allowedInstances:["Org","GitHub","GitLab","localhost","unknown"]},"seed-project":{name:"Seed Project",url:"/seed-project/",assetType:"devtool",allowedInstances:["Org","GitHub","GitLab","localhost","unknown"]},"rmg-runtime":{name:"Runtime Documentation",url:"/rmg-runtime/",assetType:"devtool",allowedInstances:["Org","GitHub","GitLab","localhost","unknown"]},"runtime-demo":{name:"Runtime Demo",url:"/runtime-demo/",assetType:"devtool",allowedInstances:["Org","GitHub","GitLab","localhost","unknown"],allowMultiInstances:!0},tutorial:{name:"Tutorial",url:"https://rmttutorial.wordpress.com",assetType:"link"},"github-pages":{name:"GitHub Pages mirror",url:"https://railmapgen.github.io",assetType:"link",allowedInstances:["Org","GitLab","localhost","unknown"]},"gitlab-pages":{name:"GitLab Pages mirror",url:"https://railmapgen.gitlab.io",assetType:"link",allowedInstances:["Org","GitHub","localhost","unknown"]},tauri:{name:"Download desktop app",url:Wo(),assetType:"link",allowedInstances:["Org","GitHub","GitLab","localhost","unknown"]},busLineDesigner:{name:"Bus Line Designer",url:"https://buslinedesigner.bobliu.tech",assetType:"link",allowedInstances:["Org","GitHub","GitLab","Tauri","localhost","unknown"]},linesPaper:{name:"LinesPaper线图荟",url:"https://space.bilibili.com/3546659889875715",assetType:"link",allowedInstances:["Org","GitHub","GitLab","Tauri","localhost","unknown"]}},J=(e,t,o)=>Object.entries(g).filter(([,a])=>{const n=a.assetType===e,i=!a.allowedEnvs||a.allowedEnvs.includes(t),s=!a.allowedInstances||a.allowedInstances.includes(o);return n&&i&&s}).map(([a])=>a),Ma="never",Jo={isShowMenu:!0,menuView:"main",refreshRequired:!1,lastShowDevtools:0,openedTabs:[],activeTab:void 0,remoteFonts:{},showFontAdvice:"hide"},q=H({name:"app",initialState:Jo,reducers:{setIsPrimary:(e,t)=>{e.isPrimary=t.payload},terminateSession:e=>{e.isTerminated=!0},toggleMenu:e=>{e.isShowMenu=!e.isShowMenu},setMenuView:(e,t)=>{e.menuView=t.payload},requireRefresh:e=>{e.refreshRequired=!0},showDevtools:(e,t)=>{const o=Date.now();t.payload?t.payload<o&&(e.lastShowDevtools=t.payload):e.lastShowDevtools=o},hideDevtools:e=>{e.lastShowDevtools=0},setOpenedTabs:(e,t)=>{e.openedTabs=t.payload},updateTabUrl:(e,t)=>{const{id:o,url:a}=t.payload;e.openedTabs=e.openedTabs.map(n=>n.id===o?{...n,url:a}:n)},setActiveTab:(e,t)=>{e.activeTab=t.payload},openApp:(e,t)=>{var l;const{appId:o,search:a,hash:n}=t.payload,i=e.openedTabs.find(({id:c})=>c===e.activeTab),s=e.openedTabs.find(({app:c})=>c===o),r=(l=g[o].allowMultiInstances)!=null?l:!1;if(a!==void 0||n!==void 0)if(r||!s){const c=crypto.randomUUID();e.openedTabs.push({id:c,app:o,url:R(g[o].url,a,n)}),e.activeTab=c}else e.openedTabs=e.openedTabs.map(c=>{var p;return c.id===s.id?{...c,url:R((p=c.url)!=null?p:g[c.app].url,a,n)}:c}),e.activeTab=s.id;else if(s)(i==null?void 0:i.app)!==o&&(e.activeTab=s.id);else{const c=crypto.randomUUID();e.openedTabs.push({id:c,app:o,url:R(g[o].url)}),e.activeTab=c}},openAppInNew:(e,t)=>{const o=crypto.randomUUID();e.openedTabs.push({id:o,app:t.payload}),e.activeTab=o},closeTab:(e,t)=>{var n;const o=t.payload,a=e.openedTabs.slice().sort((i,s)=>{const r=Object.keys(g);return r.indexOf(i.app)-r.indexOf(s.app)});if(e.openedTabs=e.openedTabs.filter(i=>i.id!==o),e.activeTab===o){const i=a.findIndex(s=>s.id===o);e.activeTab=(n=a.filter(s=>s.id!==o)[Math.max(0,i-1)])==null?void 0:n.id}},closeApp:(e,t)=>{var s,r;const o=t.payload;if(!e.openedTabs.some(l=>l.app===o))return;const a=Object.keys(g).filter(l=>e.openedTabs.some(c=>c.app===l)),n=(s=e.openedTabs.find(l=>l.id===e.activeTab))==null?void 0:s.app,i=e.openedTabs.filter(l=>l.app!==o);if(e.openedTabs=i,n===o){const l=a.findIndex(c=>c===o);e.activeTab=(r=i.find(c=>c.app===a[Math.max(0,l-1)]))==null?void 0:r.id}},updateTabMetadata:(e,t)=>{const{id:o,title:a,search:n,hash:i}=t.payload;e.openedTabs=e.openedTabs.map(s=>{var r;return s.id===o?{...s,title:a!=null?a:s.title,url:R((r=s.url)!=null?r:g[s.app].url,n,i)}:s})},addRemoteFont:(e,t)=>{const{family:o,config:a}=t.payload;o in e.remoteFonts||(e.remoteFonts[o]=a,e.showFontAdvice==="hide"&&(e.showFontAdvice="show"))},hideFontAdvice:e=>{e.showFontAdvice="hide"},neverShowFontAdvice:e=>{e.showFontAdvice="never"}}}),P=e=>{const t=Date.now();return e+864e5>=t},{setIsPrimary:qo,terminateSession:zo,toggleMenu:$a,setMenuView:Oa,requireRefresh:Pa,showDevtools:Yo,hideDevtools:La,setOpenedTabs:Ko,updateTabUrl:Qo,setActiveTab:_,openApp:z,openAppInNew:Ea,closeTab:_a,closeApp:Xo,updateTabMetadata:Zo,addRemoteFont:ea,hideFontAdvice:Ga,neverShowFontAdvice:ta}=q.actions,oa=q.reducer,aa=se({app:oa,account:Vo}),Y=ie(),na=(e={})=>re({reducer:aa,middleware:t=>t().prepend(Y.middleware),preloadedState:e}),m=na(),Ia=()=>ce(),Ha=le,A=Y.startListening;window.rmgStore=m;const sa="rmt-instance-checker",K="ping",Q="pong",X="restart",f=new BroadcastChannel(sa),Z=e=>{e.data===K&&(u.info("Received ping from another RMT instance."),f.postMessage(Q))};f.addEventListener("message",Z);f.addEventListener("message",e=>{e.data===X&&(u.info("Received restart from another RMT instance. Closing current session..."),f.close(),m.dispatch(zo()),m.dispatch(D()))});const Da=()=>{f.postMessage(X)},ia=async()=>{let e=!0;f.addEventListener("message",o=>{o.data===Q&&(u.warn("Received pong from another RMT instance. This instance is not primary."),e=!1,f.removeEventListener("message",Z))}),f.postMessage(K);let t=5;for(;t--;)if(await Uo(500),!e)return!1;return u.info("This instance is primary."),!0},ra=e=>{const t=Number(d.storage.get(h.LAST_SHOW_DEVTOOLS));t&&e.dispatch(Yo(t))},ca=e=>{try{const t=window.localStorage.getItem(h.OPENED_TABS);if(t){const o=JSON.parse(t);if(Array.isArray(o)){const a=O(P(e.getState().app.lastShowDevtools)),n=o.filter(i=>a.includes(g[i.app].assetType));e.dispatch(Ko(n))}else u.warn("initOpenedTabs(), Cannot parse invalid opened tabs state from local storage")}}catch(t){u.warn("initOpenedTabs(), cannot parse opened apps state from local storage",t)}},la=e=>{var a;const t=window.localStorage.getItem(h.ACTIVE_TAB),o=e.getState().app.openedTabs;t&&o.some(({id:n})=>n===t)?e.dispatch(_(t)):e.dispatch(_((a=o[0])==null?void 0:a.id))},pa=e=>{var r,l,c;const t=new URLSearchParams(window.location.search),o=(r=t.get(C.APP))!=null?r:"",a=(l=t.get(C.SEARCH_PARAMS))!=null?l:void 0,n=(c=t.get(C.HASH_PARAMS))!=null?c:void 0;u.info("openSearchedApp(), searchParams app=".concat(o,", extraSearchParams are [").concat(a,"], extraHashParams are [").concat(n,"]")),O(P(e.getState().app.lastShowDevtools)).map(p=>J(p,d.getEnv(),d.getInstance())).flat().includes(o)?e.dispatch(z({appId:o,search:a,hash:n})):u.warn("openSearchedApp(), app ".concat(o," not found"))},da=e=>{const t=window.localStorage.getItem(h.ACCOUNT);if(t){const o=JSON.parse(t);u.debug("Get account data from local storage: ".concat(o)),e.dispatch(B(o))}};function ua(e){ra(e),ca(e),la(e),da(e),(Fo()||d.storage.get(h.SHOW_FONT_ADVICE)==="never")&&e.dispatch(ta()),A({predicate:(t,o,a)=>o.app.lastShowDevtools!==a.app.lastShowDevtools,effect:(t,o)=>{d.storage.set(h.LAST_SHOW_DEVTOOLS,o.getState().app.lastShowDevtools.toString())}}),A({predicate:(t,o,a)=>JSON.stringify(o.app.openedTabs)!==JSON.stringify(a.app.openedTabs),effect:(t,o)=>{window.localStorage.setItem(h.OPENED_TABS,JSON.stringify(o.getState().app.openedTabs))}}),A({predicate:(t,o,a)=>o.app.activeTab!==a.app.activeTab,effect:(t,o)=>{const a=o.getState().app.activeTab;a!==void 0&&window.localStorage.setItem(h.ACTIVE_TAB,a)}}),A({predicate:(t,o,a)=>o.account.isLoggedIn!==a.account.isLoggedIn,effect:(t,o)=>{const{isLoggedIn:a,name:n,email:i,token:s,refreshToken:r}=o.getState().account;a?window.localStorage.setItem(h.ACCOUNT,JSON.stringify({name:n,email:i,token:s,refreshToken:r})):(u.debug("Remove account from local storage due to logout."),window.localStorage.removeItem(h.ACCOUNT))}}),pa(e),ia().then(t=>{e.dispatch(qo(t)),t||e.dispatch(D())})}const ma=async e=>{const t=localStorage.getItem(e);if(!t)return;const o=await jo(t);return{data:t,hash:o}},xa=(e,t)=>{localStorage.setItem(e,t)},ha="rmt-save-manager",S=new BroadcastChannel(ha),Na=()=>{S.postMessage({type:"SAVE_CHANGED",key:U.RMP,from:"rmt"})};let M;const ga=3*1e3,fa=e=>{const t=async o=>{M||(M=window.setTimeout(async()=>{const{isLoggedIn:a,currentSaveId:n,token:i,refreshToken:s}=e.getState().account;if(!a||!n||!i||!s)return;const{type:r,key:l,from:c}=o.data;if(r==="SAVE_CHANGED"&&c==="rmp"&&(u.info("Received save changed event on key: ".concat(l)),a&&n)){u.info("Update remote save id: ".concat(n," with local key: ").concat(l));const{rep:p,token:v,refreshToken:k}=await Ta(n,i,s,l);if(!k||!v){e.dispatch(V());return}if(e.dispatch(W({access:v,refresh:k})),p.status!==200)return;e.dispatch(w())}M=void 0},ga))};S.addEventListener("message",t)},Ta=async(e,t,o,a)=>{const n=await ma(a);if(!n)return{rep:void 0,token:void 0,refreshToken:void 0};const{data:i,hash:s}=n;return await F(b.SAVES+"/"+e,{method:"PATCH",body:JSON.stringify({data:i,hash:s})},t,o)},Sa=e=>{const t=async o=>{const{type:a,from:n}=o.data;if(a==="TOKEN_REQUEST"&&n==="rmp"){u.info("Received token request event from: ".concat(n));const{isLoggedIn:i,token:s,refreshToken:r}=e.getState().account;if(!i||!s||!r){S.postMessage({type:"TOKEN_REQUEST",token:void 0,from:"rmt"});return}e.dispatch(w());const{isLoggedIn:l,token:c,refreshToken:p}=e.getState().account;if(!l||!c||!p){S.postMessage({type:"TOKEN_REQUEST",token:void 0,from:"rmt"});return}S.postMessage({type:"TOKEN_REQUEST",token:c,from:"rmt"})}};S.addEventListener("message",t)};let G;const wa=x.lazy(()=>he(()=>import("./app-root-DaK__e7x.js"),__vite__mapDeps([0,1,2,3,4,5]))),ba=()=>{G=ee(document.getElementById("root")),G.render(T.jsx(x.StrictMode,{children:T.jsx(pe,{store:m,children:T.jsx(de,{i18n:xo,children:T.jsx(te,{children:T.jsx(oe,{suspenseFallback:T.jsx(ae,{isIndeterminate:!0}),allowReset:!0,children:T.jsx(wa,{})})})})})}))};d.ready().then(()=>{ua(m),ba(),d.onAppOpen(e=>{O(P(m.getState().app.lastShowDevtools)).map(a=>J(a,d.getEnv(),d.getInstance())).flat().includes(e.appId)&&m.dispatch(z(e))}),d.onAppClose(e=>{m.dispatch(Xo(e))}),d.onAppMetadataUpdate((e,t)=>{if(t){const o=t.slice(E.length);u.info("Received metadata update for frame=".concat(o,", metadata is"),e),m.dispatch(Zo({...e,id:o}))}}),d.onUrlUpdate((e,t)=>{if(t){const o=t.slice(E.length);u.info("Received URL update for frame=".concat(o,", url=").concat(e)),m.dispatch(Qo({id:o,url:e}))}}),d.onRemoteFontLoaded(({family:e,definition:{displayName:t,url:o}})=>{m.dispatch(ea({family:e,config:{displayName:t,url:o}}))}),d.event(N.APP_LOAD,{openedApps:m.getState().app.openedTabs.map(e=>e.app)}),fa(m),Sa(m)});export{b as A,La as B,Pa as C,Da as D,N as E,E as F,h as L,Ma as N,U as S,va as __vite_legacy_guard,Ia as a,F as b,xa as c,Oa as d,y as e,w as f,ma as g,ya as h,$ as i,Ca as j,g as k,V as l,z as m,Na as n,Ea as o,_ as p,_a as q,Xo as r,W as s,$a as t,Ha as u,J as v,Ga as w,ta as x,P as y,Yo as z};
