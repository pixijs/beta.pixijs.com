"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[57871],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),o=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=o(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(r),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||n;return r?i.createElement(f,p(p({ref:t},c),{},{components:r})):i.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,p=new Array(n);p[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,p[1]=s;for(var o=2;o<n;o++)p[o]=r[o];return i.createElement.apply(null,p)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>o});var i=r(87462),a=(r(67294),r(3905));const n={id:"pixi_spritesheet.ISpritesheetData",title:"Interface: ISpritesheetData",sidebar_label:"ISpritesheetData",custom_edit_url:null},p=void 0,s={unversionedId:"api/interfaces/pixi_spritesheet.ISpritesheetData",id:"api/interfaces/pixi_spritesheet.ISpritesheetData",title:"Interface: ISpritesheetData",description:"@pixi/spritesheet.ISpritesheetData",source:"@site/docs/api/interfaces/pixi_spritesheet.ISpritesheetData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/pixi_spritesheet.ISpritesheetData",permalink:"/api/interfaces/pixi_spritesheet.ISpritesheetData",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_spritesheet.ISpritesheetData",title:"Interface: ISpritesheetData",sidebar_label:"ISpritesheetData",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"FrameObject",permalink:"/api/interfaces/pixi_sprite_animated.FrameObject"},next:{title:"ISpritesheetFrameData",permalink:"/api/interfaces/pixi_spritesheet.ISpritesheetFrameData"}},l={},o=[{value:"Properties",id:"properties",level:2},{value:"animations",id:"animations",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"frames",id:"frames",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"meta",id:"meta",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:o};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/pixi_spritesheet"},"@pixi/spritesheet"),".ISpritesheetData"),(0,a.kt)("p",null,"Atlas format."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"animations"},"animations"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"animations"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Dict"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/spritesheet/src/Spritesheet.ts#L31"},"pixijs/packages/spritesheet/src/Spritesheet.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"frames"},"frames"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"frames"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Dict"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/pixi_spritesheet.ISpritesheetFrameData"},(0,a.kt)("inlineCode",{parentName:"a"},"ISpritesheetFrameData")),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/spritesheet/src/Spritesheet.ts#L30"},"pixijs/packages/spritesheet/src/Spritesheet.ts:30")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"meta"},"meta"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"meta"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"related_multi_packs?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"scale")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/spritesheet/src/Spritesheet.ts#L32"},"pixijs/packages/spritesheet/src/Spritesheet.ts:32")))}d.isMDXComponent=!0}}]);