"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[73199],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=o(r),k=a,f=u["".concat(p,".").concat(k)]||u[k]||c[k]||i;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},81246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={id:"pixi_assets.ResolveURLParser",title:"Interface: ResolveURLParser",sidebar_label:"ResolveURLParser",custom_edit_url:null},s=void 0,l={unversionedId:"api/interfaces/pixi_assets.ResolveURLParser",id:"api/interfaces/pixi_assets.ResolveURLParser",title:"Interface: ResolveURLParser",description:"@pixi/assets.ResolveURLParser",source:"@site/docs/api/interfaces/pixi_assets.ResolveURLParser.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/pixi_assets.ResolveURLParser",permalink:"/api/interfaces/pixi_assets.ResolveURLParser",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_assets.ResolveURLParser",title:"Interface: ResolveURLParser",sidebar_label:"ResolveURLParser",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"ResolveAsset",permalink:"/api/interfaces/pixi_assets.ResolveAsset"},next:{title:"ResolverBundle",permalink:"/api/interfaces/pixi_assets.ResolverBundle"}},p={},o=[{value:"Properties",id:"properties",level:2},{value:"config",id:"config",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"parse",id:"parse",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"test",id:"test",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:o};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/pixi_assets"},"@pixi/assets"),".ResolveURLParser"),(0,a.kt)("p",null,"Format for url parser, will test a string and if it pass will then parse it, turning it into an ResolveAsset"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,a.kt)("p",null,"PIXI"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"config"},"config"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"config"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("p",null,"A config to adjust the parser"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/assets/src/resolver/types.ts#L61"},"pixijs/packages/assets/src/resolver/types.ts:61")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"extension"},"extension"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"extension"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtensionMetadata")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/assets/src/resolver/types.ts#L59"},"pixijs/packages/assets/src/resolver/types.ts:59")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"parse"},"parse"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"parse"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/pixi_assets.ResolveAsset"},(0,a.kt)("inlineCode",{parentName:"a"},"ResolveAsset"))),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/pixi_assets.ResolveAsset"},(0,a.kt)("inlineCode",{parentName:"a"},"ResolveAsset"))),(0,a.kt)("p",null,"the function that will convert the url into an object"),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"value")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/pixi_assets.ResolveAsset"},(0,a.kt)("inlineCode",{parentName:"a"},"ResolveAsset"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/assets/src/resolver/types.ts#L65"},"pixijs/packages/assets/src/resolver/types.ts:65")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"test"},"test"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"test"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"url"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"url"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"the test to perform on the url to determin if it should be parsed"),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"url")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/assets/src/resolver/types.ts#L63"},"pixijs/packages/assets/src/resolver/types.ts:63")))}u.isMDXComponent=!0}}]);