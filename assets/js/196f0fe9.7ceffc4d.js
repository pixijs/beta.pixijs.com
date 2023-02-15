"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[395],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,m=c["".concat(p,".").concat(d)]||c[d]||k[d]||l;return a?n.createElement(m,i(i({ref:t},o),{},{components:a})):n.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},66472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={id:"PIXI.Ticker.pixi_ticker",title:"Class: PIXI.Ticker",sidebar_label:"PIXI.Ticker",custom_edit_url:null},i=void 0,s={unversionedId:"api/classes/PIXI.Ticker.pixi_ticker",id:"api/classes/PIXI.Ticker.pixi_ticker",title:"Class: PIXI.Ticker",description:"@pixi/ticker.Ticker",source:"@site/docs/api/classes/PIXI.Ticker.pixi_ticker.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.Ticker.pixi_ticker",permalink:"/api/classes/PIXI.Ticker.pixi_ticker",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.Ticker.pixi_ticker",title:"Class: PIXI.Ticker",sidebar_label:"PIXI.Ticker",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.TextureUvs",permalink:"/api/classes/PIXI.TextureUvs.pixi_core"},next:{title:"PIXI.TickerPlugin",permalink:"/api/classes/PIXI.TickerPlugin.pixi_ticker"}},p={},u=[{value:"new PIXI()",id:"new-pixi",level:3},{value:"Members",id:"members",level:2},{value:"shared: <span><code>PIXI.Ticker</code></span>",id:"shared-pixiticker",level:3},{value:"system: <span><code>PIXI.Ticker</code></span>",id:"system-pixiticker",level:3},{value:"targetFPMS: <span><code>number</code></span>",id:"targetfpms-number",level:3},{value:"autoStart: <span><code>boolean</code></span>",id:"autostart-boolean",level:3},{value:"count: <span><code>number</code></span>",id:"count-number",level:3},{value:"deltaMS: <span><code>number</code></span>",id:"deltams-number",level:3},{value:"deltaTime: <span><code>number</code></span>",id:"deltatime-number",level:3},{value:"elapsedMS: <span><code>number</code></span>",id:"elapsedms-number",level:3},{value:"FPS: <span><code>number</code></span>",id:"fps-number",level:3},{value:"lastTime: <span><code>number</code></span>",id:"lasttime-number",level:3},{value:"maxFPS: <span><code>number</code></span>",id:"maxfps-number",level:3},{value:"minFPS: <span><code>number</code></span>",id:"minfps-number",level:3},{value:"speed: <span><code>number</code></span>",id:"speed-number",level:3},{value:"started: <span><code>boolean</code></span>",id:"started-boolean",level:3},{value:"Methods",id:"methods",level:2},{value:"add: <span><code>(fn: TickerCallback&lt;T&gt;, context: T, priority: number) -&gt; this</code></span>",id:"add-fn-tickercallbackt-context-t-priority-number---this",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"addOnce: <span><code>(fn: TickerCallback&lt;T&gt;, context: T, priority: number) -&gt; this</code></span>",id:"addonce-fn-tickercallbackt-context-t-priority-number---this",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"destroy: <span><code>() -&gt; void</code></span>",id:"destroy----void",level:3},{value:"remove: <span><code>(fn: TickerCallback&lt;T&gt;, context: T) -&gt; this</code></span>",id:"remove-fn-tickercallbackt-context-t---this",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-2",level:4},{value:"start: <span><code>() -&gt; void</code></span>",id:"start----void",level:3},{value:"stop: <span><code>() -&gt; void</code></span>",id:"stop----void",level:3},{value:"update: <span><code>(currentTime: number) -&gt; void</code></span>",id:"update-currenttime-number---void",level:3},{value:"Parameters:",id:"parameters-3",level:4}],o={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/pixi_ticker"},"@pixi/ticker"),".Ticker"),(0,r.kt)("p",null,"A Ticker class that runs an update loop that other objects listen to.\nThis class is composed around listeners meant for execution on the next requested animation frame. Animation frames are requested only when necessary, e.g. When the ticker is started and the emitter has listeners."),(0,r.kt)("p",null,"// TODO: @see"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"new-pixi"},"new PIXI()")),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"shared-pixiticker"},"shared: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"PIXI.Ticker"))),(0,r.kt)("p",null,"The shared ticker instance used by ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.AnimatedSprite.pixi_sprite_animated"},"PIXI.AnimatedSprite")," and by ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.VideoResource.pixi_core"},"PIXI.VideoResource")," to update animation frames / video textures."),(0,r.kt)("p",null,"It may also be used by ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Application.pixi_app"},"PIXI.Application")," if created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sharedTicker")," option property set to true."),(0,r.kt)("p",null,"The property ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#autoStart"},"PIXI.Ticker#autoStart")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," for this instance. Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"}," import { Ticker } from 'pixi.js';\n\n const ticker = Ticker.shared;\n // Set this to prevent starting this ticker when listeners are added.\n // By default this is true only for the PIXI.Ticker.shared instance.\n ticker.autoStart = false;\n\n // FYI, call this to ensure the ticker is stopped. It should be stopped\n // if you have not attempted to render anything yet.\n ticker.stop();\n\n // Call this when you are ready for a running shared ticker.\n ticker.start();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"}," import { autoDetectRenderer, Container } from 'pixi.js';\n\n // You may use the shared ticker to render...\n const renderer = autoDetectRenderer();\n const stage = new Container();\n document.body.appendChild(renderer.view);\n ticker.add((time) => renderer.render(stage));\n\n // Or you can just update it manually.\n ticker.autoStart = false;\n ticker.stop();\n const animate = (time) => {\n     ticker.update(time);\n     renderer.render(stage);\n     requestAnimationFrame(animate);\n };\n animate(performance.now());\n"))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"system-pixiticker"},"system: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"PIXI.Ticker"))),(0,r.kt)("p",null,"The system ticker instance used by ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.BasePrepare.pixi_prepare"},"PIXI.BasePrepare")," for core timing functionality that shouldn't usually need to be paused, unlike the ",(0,r.kt)("inlineCode",{parentName:"p"},"shared"),"ticker which drives visual animations and rendering which may want to be paused."),(0,r.kt)("p",null,"The property ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#autoStart"},"PIXI.Ticker#autoStart")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," for this instance.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"targetfpms-number"},"targetFPMS: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"0.06"))),(0,r.kt)("p",null,"Target frames per millisecond.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"autostart-boolean"},"autoStart: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"boolean"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"false"))),(0,r.kt)("p",null,"Whether or not this ticker should invoke the method ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#start"},"PIXI.Ticker#start")," automatically when a listener is added.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"count-number"},"count: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("p",null,"The number of listeners on this ticker, calculated by walking through linked list")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"deltams-number"},"deltaMS: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"16.66"))),(0,r.kt)("p",null,"Scaler time elapsed in milliseconds from last frame to this frame. This value is capped by setting ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#minFPS"},"PIXI.Ticker#minFPS")," and is scaled with ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#speed"},"PIXI.Ticker#speed"),".",(0,r.kt)("strong",{parentName:"p"},"Note",":")," The cap may be exceeded by scaling. If the platform supports DOMHighResTimeStamp, this value will have a precision of 1 \xb5s. Defaults to target frame time")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"deltatime-number"},"deltaTime: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"1"))),(0,r.kt)("p",null,"Scalar time value from last frame to this frame. This value is capped by setting ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#minFPS"},"PIXI.Ticker#minFPS")," and is scaled with ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#speed"},"PIXI.Ticker#speed"),".",(0,r.kt)("strong",{parentName:"p"},"Note",":")," The cap may be exceeded by scaling.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"elapsedms-number"},"elapsedMS: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"16.66"))),(0,r.kt)("p",null,"Time elapsed in milliseconds from last frame to this frame. Opposed to what the scalar ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#deltaTime"},"PIXI.Ticker#deltaTime")," is based, this value is neither capped nor scaled. If the platform supports DOMHighResTimeStamp, this value will have a precision of 1 \xb5s. Defaults to target frame time")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"fps-number"},"FPS: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("p",null,"The frames per second at which this ticker is running. The default is approximately 60 in most modern browsers.",(0,r.kt)("strong",{parentName:"p"},"Note",":")," This does not factor in the value of ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#speed"},"PIXI.Ticker#speed"),", which is specific to scaling ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#deltaTime"},"PIXI.Ticker#deltaTime"),".")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"lasttime-number"},"lastTime: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"-1"))),(0,r.kt)("p",null,"The last time ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#update"},"PIXI.Ticker#update")," was invoked. This value is also reset internally outside of invoking update, but only when a new animation frame is requested. If the platform supports DOMHighResTimeStamp, this value will have a precision of 1 \xb5s.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"maxfps-number"},"maxFPS: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"0"))),(0,r.kt)("p",null,"Manages the minimum amount of milliseconds required to elapse between invoking ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#update"},"PIXI.Ticker#update"),". This will effect the measured value of ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#FPS"},"PIXI.Ticker#FPS"),". If it is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", then there is no limit; PixiJS will render as many frames as it can. Otherwise it will be at least ",(0,r.kt)("inlineCode",{parentName:"p"},"minFPS"))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"minfps-number"},"minFPS: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"10"))),(0,r.kt)("p",null,"Manages the maximum amount of milliseconds allowed to elapse between invoking ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#update"},"PIXI.Ticker#update"),". This value is used to cap ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#deltaTime"},"PIXI.Ticker#deltaTime"),", but does not effect the measured value of ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#FPS"},"PIXI.Ticker#FPS"),". When setting this property it is clamped to a value between",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ticker.targetFPMS * 1000"),".")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"speed-number"},"speed: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"1"))),(0,r.kt)("p",null,"Factor of current ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#deltaTime"},"PIXI.Ticker#deltaTime"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Scales ticker.deltaTime to what would be\n// the equivalent of approximately 120 FPS\nticker.speed = 2;\n"))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"started-boolean"},"started: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"boolean"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"false"))),(0,r.kt)("p",null,"Whether or not this ticker has been started.",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#start"},"PIXI.Ticker#start")," has been called.",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#stop"},"PIXI.Ticker#stop")," has been called. While ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", this value may change to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in the event of ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#autoStart"},"PIXI.Ticker#autoStart")," being ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"and a listener is added.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"add-fn-tickercallbackt-context-t-priority-number---this"},"add: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(fn",":"," TickerCallback","<","T",">",", context",":"," T, priority",":"," number) -",">"," this"))),(0,r.kt)("p",null,"Register a handler for tick events. Calls continuously unless it is removed or the ticker is stopped."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fn"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"TickerCallback","<","T",">")),(0,r.kt)("td",{parentName:"tr",align:null},"The listener function to be added for updates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"T")),(0,r.kt)("td",{parentName:"tr",align:null},"The listener context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priority"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The priority for emitting")))),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"This instance of a ticker"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"addonce-fn-tickercallbackt-context-t-priority-number---this"},"addOnce: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(fn",":"," TickerCallback","<","T",">",", context",":"," T, priority",":"," number) -",">"," this"))),(0,r.kt)("p",null,"Add a handler for the tick event which is only execute once."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fn"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"TickerCallback","<","T",">")),(0,r.kt)("td",{parentName:"tr",align:null},"The listener function to be added for one update")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"T")),(0,r.kt)("td",{parentName:"tr",align:null},"The listener context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priority"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The priority for emitting")))),(0,r.kt)("h4",{id:"returns-1"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"This instance of a ticker"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"destroy----void"},"destroy: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"() -",">"," void"))),(0,r.kt)("p",null,"Destroy the ticker and don't use after this. Calling this method removes all references to internal events.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"remove-fn-tickercallbackt-context-t---this"},"remove: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(fn",":"," TickerCallback","<","T",">",", context",":"," T) -",">"," this"))),(0,r.kt)("p",null,"Removes any handlers matching the function and context parameters. If no handlers are left after removing, then it cancels the animation frame."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fn"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"TickerCallback","<","T",">")),(0,r.kt)("td",{parentName:"tr",align:null},"The listener function to be removed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"T")),(0,r.kt)("td",{parentName:"tr",align:null},"The listener context to be removed")))),(0,r.kt)("h4",{id:"returns-2"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"This instance of a ticker"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"start----void"},"start: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"() -",">"," void"))),(0,r.kt)("p",null,"Starts the ticker. If the ticker has listeners a new animation frame is requested at this point.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"stop----void"},"stop: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"() -",">"," void"))),(0,r.kt)("p",null,"Stops the ticker. If the ticker has requested an animation frame it is canceled at this point.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"update-currenttime-number---void"},"update: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(currentTime",":"," number) -",">"," void"))),(0,r.kt)("p",null,"Triggers an update. An update entails setting the current ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#elapsedMS"},"PIXI.Ticker#elapsedMS"),", the current ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#deltaTime"},"PIXI.Ticker#deltaTime"),", invoking all listeners with current deltaTime, and then finally setting ",(0,r.kt)("a",{parentName:"p",href:"../classes/PIXI.Ticker.pixi_ticker#lastTime"},"PIXI.Ticker#lastTime")," with the value of currentTime that was provided. This method will be called automatically by animation frame callbacks if the ticker instance has been started and listeners are added."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentTime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"the current time of execution"))))),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);