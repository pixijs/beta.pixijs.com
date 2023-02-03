"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[12123],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>k});var s=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,s,a=function(e,r){if(null==e)return{};var t,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=s.createContext({}),p=function(e){var r=s.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},d=function(e){var r=p(e.components);return s.createElement(l.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},m=s.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return t?s.createElement(k,n(n({ref:r},d),{},{components:t})):s.createElement(k,n({ref:r},d))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,n=new Array(i);n[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[c]="string"==typeof e?e:a,n[1]=o;for(var p=2;p<i;p++)n[p]=t[p];return s.createElement.apply(null,n)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59012:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var s=t(87462),a=(t(67294),t(3905));const i={id:"pixi_basis.BasisParser",title:"Class: BasisParser",sidebar_label:"BasisParser",custom_edit_url:null},n=void 0,o={unversionedId:"api/classes/pixi_basis.BasisParser",id:"api/classes/pixi_basis.BasisParser",title:"Class: BasisParser",description:"@pixi/basis.BasisParser",source:"@site/docs/api/classes/pixi_basis.BasisParser.md",sourceDirName:"api/classes",slug:"/api/classes/pixi_basis.BasisParser",permalink:"/api/classes/pixi_basis.BasisParser",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_basis.BasisParser",title:"Class: BasisParser",sidebar_label:"BasisParser",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Resolver",permalink:"/api/classes/pixi_assets.Resolver"},next:{title:"TranscoderWorker",permalink:"/api/classes/pixi_basis.TranscoderWorker"}},l={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"TranscoderWorker",id:"transcoderworker",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"basisBinding",id:"basisbinding",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Accessors",id:"accessors",level:2},{value:"TRANSCODER_WORKER_POOL_LIMIT",id:"transcoder_worker_pool_limit",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:p};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/pixi_basis"},"@pixi/basis"),".BasisParser"),(0,a.kt)("p",null,"Loader plugin for handling BASIS supercompressed texture files."),(0,a.kt)("p",null,"To use this loader, you must bind the basis_universal WebAssembly transcoder. There are two ways of\ndoing this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Adding a ","<","script",">"," tag to your HTML page to the transcoder bundle in this package, and serving\nthe WASM binary from the same location.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Copy ./node_modules/@pixi/basis/assets/basis_.wasm into your assets directory\n    as well, so it is served from the same folder as the JavaScript! --\x3e\n<script src="./node_modules/@pixi/basis/assets/basis_transcoder.js"><\/script>\n')),(0,a.kt)("p",null,"NOTE: ",(0,a.kt)("inlineCode",{parentName:"p"},"basis_transcoder.js")," expects the WebAssembly binary to be named ",(0,a.kt)("inlineCode",{parentName:"p"},"basis_transcoder.wasm"),".\nNOTE-2: This method supports transcoding on the main-thread. Only use this if you have 1 or 2 *.basis\nfiles."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Loading the transcoder source from a URL.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Use this if you to use the default CDN url for @pixi/basis\nBasisParser.loadTranscoder();\n\n// Use this if you want to serve the transcoder on your own\nBasisParser.loadTranscoder('./basis_transcoder.js', './basis_transcoder.wasm');\n")),(0,a.kt)("p",null,"NOTE: This can only be used with web-workers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,a.kt)("p",null,"PIXI"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Implements"))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new BasisParser"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"transcoderworker"},"TranscoderWorker"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"TranscoderWorker"),": typeof ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/pixi_basis.TranscoderWorker"},(0,a.kt)("inlineCode",{parentName:"a"},"TranscoderWorker"))," = ",(0,a.kt)("inlineCode",{parentName:"p"},"TranscoderWorker")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/basis/src/loader/BasisParser.ts#L419"},"pixijs/packages/basis/src/loader/BasisParser.ts:419")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"basisbinding"},"basisBinding"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"basisBinding"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BasisBinding")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/basis/src/loader/BasisParser.ts#L54"},"pixijs/packages/basis/src/loader/BasisParser.ts:54")),(0,a.kt)("h2",{id:"accessors"},"Accessors"),(0,a.kt)("h3",{id:"transcoder_worker_pool_limit"},"TRANSCODER","_","WORKER","_","POOL","_","LIMIT"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"TRANSCODER_WORKER_POOL_LIMIT"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/basis/src/loader/BasisParser.ts#L421"},"pixijs/packages/basis/src/loader/BasisParser.ts:421")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," ",(0,a.kt)("strong",{parentName:"p"},"TRANSCODER_WORKER_POOL_LIMIT"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"limit"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"limit")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/basis/src/loader/BasisParser.ts#L426"},"pixijs/packages/basis/src/loader/BasisParser.ts:426")))}c.isMDXComponent=!0}}]);