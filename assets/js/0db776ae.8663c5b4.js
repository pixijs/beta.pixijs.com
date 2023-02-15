"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,k=p["".concat(i,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={id:"PIXI.CanvasContextSystem.pixi_canvas_renderer",title:"Class: PIXI.CanvasContextSystem",sidebar_label:"PIXI.CanvasContextSystem",custom_edit_url:null},o=void 0,s={unversionedId:"api/classes/PIXI.CanvasContextSystem.pixi_canvas_renderer",id:"api/classes/PIXI.CanvasContextSystem.pixi_canvas_renderer",title:"Class: PIXI.CanvasContextSystem",description:"@pixi/canvas-renderer.CanvasContextSystem",source:"@site/docs/api/classes/PIXI.CanvasContextSystem.pixi_canvas_renderer.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.CanvasContextSystem.pixi_canvas_renderer",permalink:"/api/classes/PIXI.CanvasContextSystem.pixi_canvas_renderer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.CanvasContextSystem.pixi_canvas_renderer",title:"Class: PIXI.CanvasContextSystem",sidebar_label:"PIXI.CanvasContextSystem",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.Cache",permalink:"/api/classes/PIXI.Cache.pixi_assets"},next:{title:"PIXI.CanvasExtract",permalink:"/api/classes/PIXI.CanvasExtract.pixi_canvas_extract"}},i={},d=[{value:"new PIXI.CanvasContextSystem: <span><code>(renderer: CanvasRenderer) </code></span>",id:"new-pixicanvascontextsystem-renderer-canvasrenderer-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"_projTransform: <span><code>Matrix</code></span>",id:"_projtransform-matrix",level:3},{value:"activeContext: <span><code>CrossPlatformCanvasRenderingContext2D</code></span>",id:"activecontext-crossplatformcanvasrenderingcontext2d",level:3},{value:"blendModes: <span><code>string[]</code></span>",id:"blendmodes-string",level:3},{value:"rootContext: <span><code>CrossPlatformCanvasRenderingContext2D</code></span>",id:"rootcontext-crossplatformcanvasrenderingcontext2d",level:3},{value:"smoothProperty: <span><code>SmoothingEnabledProperties</code></span>",id:"smoothproperty-smoothingenabledproperties",level:3},{value:"Methods",id:"methods",level:2},{value:"clear: <span><code>(clearColor: string, alpha: number) -&gt; void</code></span>",id:"clear-clearcolor-string-alpha-number---void",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"init: <span><code>() -&gt; void</code></span>",id:"init----void",level:3},{value:"invalidateBlendMode: <span><code>() -&gt; void</code></span>",id:"invalidateblendmode----void",level:3},{value:"setBlendMode: <span><code>(blendMode: number, readyForOuterBlend: boolean) -&gt; void</code></span>",id:"setblendmode-blendmode-number-readyforouterblend-boolean---void",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"setContextTransform: <span><code>(transform: Matrix, roundPixels: boolean, localResolution: number) -&gt; void</code></span>",id:"setcontexttransform-transform-matrix-roundpixels-boolean-localresolution-number---void",level:3},{value:"Parameters:",id:"parameters-3",level:4}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/pixi_canvas_renderer"},"@pixi/canvas-renderer"),".CanvasContextSystem"),(0,r.kt)("p",null,"System that manages the canvas ",(0,r.kt)("inlineCode",{parentName:"p"},"2d")," contexts"),(0,r.kt)("p",null,"// TODO: @see"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"new-pixicanvascontextsystem-renderer-canvasrenderer-"},"new PIXI.CanvasContextSystem: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(renderer",":"," CanvasRenderer) "))),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"renderer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"CanvasRenderer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null)),(0,r.kt)("td",{parentName:"tr",align:null},"A reference to the current renderer"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"_projtransform-matrix"},"_projTransform: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"Matrix"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,"undefined"))),(0,r.kt)("p",null,"Projection transform, passed in render() stored here")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"activecontext-crossplatformcanvasrenderingcontext2d"},"activeContext: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"CrossPlatformCanvasRenderingContext2D"))),(0,r.kt)("p",null,"The currently active canvas 2d context (could change with renderTextures)")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"blendmodes-string"},"blendModes: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"string[]"))),(0,r.kt)("p",null,"Tracks the blend modes useful for this renderer.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"rootcontext-crossplatformcanvasrenderingcontext2d"},"rootContext: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"CrossPlatformCanvasRenderingContext2D"))),(0,r.kt)("p",null,"The root canvas 2d context that everything is drawn with.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"smoothproperty-smoothingenabledproperties"},"smoothProperty: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"SmoothingEnabledProperties"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,r.kt)("code",null,'"imageSmoothingEnabled"'))),(0,r.kt)("p",null,"The canvas property used to set the canvas smoothing property.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"clear-clearcolor-string-alpha-number---void"},"clear: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(clearColor",":"," string, alpha",":"," number) -",">"," void"))),(0,r.kt)("p",null,"Clear the canvas of renderer."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clearColor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Clear the canvas with this color, except the canvas is transparent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alpha"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Alpha to apply to the background fill color."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"init----void"},"init: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"() -",">"," void"))),(0,r.kt)("p",null,"initiates the system")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"invalidateblendmode----void"},"invalidateBlendMode: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"() -",">"," void"))),(0,r.kt)("p",null,"Checks if blend mode has changed.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"setblendmode-blendmode-number-readyforouterblend-boolean---void"},"setBlendMode: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(blendMode",":"," number, readyForOuterBlend",":"," boolean) -",">"," void"))),(0,r.kt)("p",null,"Sets the blend mode of the renderer."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blendMode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"../enums/PIXI.BLEND_MODES.pixi_constants"},"PIXI.BLEND_MODES")," for valid values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readyForOuterBlend"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Some blendModes are dangerous, they affect outer space of sprite. Pass ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," only if you are ready to use them."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"setcontexttransform-transform-matrix-roundpixels-boolean-localresolution-number---void"},"setContextTransform: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(transform",":"," Matrix, roundPixels",":"," boolean, localResolution",":"," number) -",">"," void"))),(0,r.kt)("p",null,"Sets matrix of context. called only from render() methods takes care about resolution"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transform"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Matrix")),(0,r.kt)("td",{parentName:"tr",align:null},"world matrix of current element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"roundPixels"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"whether to round (tx,ty) coords")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"localResolution"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"If specified, used instead of ",(0,r.kt)("inlineCode",{parentName:"td"},"renderer.resolution")," for local scaling"))))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);