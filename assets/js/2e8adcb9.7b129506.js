"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[25109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,p[1]=o;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={id:"pixi_constants.WRAP_MODES",title:"Enumeration: WRAP_MODES",sidebar_label:"WRAP_MODES",custom_edit_url:null},p=void 0,o={unversionedId:"api/enums/pixi_constants.WRAP_MODES",id:"api/enums/pixi_constants.WRAP_MODES",title:"Enumeration: WRAP_MODES",description:"@pixi/constants.WRAPMODES",source:"@site/docs/api/enums/pixi_constants.WRAP_MODES.md",sourceDirName:"api/enums",slug:"/api/enums/pixi_constants.WRAP_MODES",permalink:"/api/enums/pixi_constants.WRAP_MODES",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_constants.WRAP_MODES",title:"Enumeration: WRAP_MODES",sidebar_label:"WRAP_MODES",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"TYPES",permalink:"/api/enums/pixi_constants.TYPES"},next:{title:"ALPHA_MODES",permalink:"/api/enums/pixi_core.ALPHA_MODES"}},l={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"CLAMP",id:"clamp",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"MIRRORED_REPEAT",id:"mirrored_repeat",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"REPEAT",id:"repeat",level:3},{value:"Defined in",id:"defined-in-2",level:4}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/pixi_constants"},"@pixi/constants"),".WRAP_MODES"),(0,i.kt)("p",null,"The wrap modes that are supported by pixi."),(0,i.kt)("p",null,"The wrap mode affects the default wrapping mode of future operations.\nIt can be re-assigned to either CLAMP or REPEAT, depending upon suitability.\nIf the texture is non power of two then clamp will be used regardless as WebGL can\nonly use REPEAT if the texture is po2."),(0,i.kt)("p",null,"This property only affects WebGL."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Name"))),(0,i.kt)("p",null,"WRAP_MODES"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,i.kt)("p",null,"PIXI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Static"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Property"))),(0,i.kt)("p",null,"The textures uvs are clamped"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Property"))),(0,i.kt)("p",null,"The texture uvs tile and repeat"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Property"))),(0,i.kt)("p",null,"The texture uvs tile and repeat with mirroring"),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"clamp"},"CLAMP"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"CLAMP")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"33071")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/constants/src/index.ts#L332"},"pixijs/packages/constants/src/index.ts:332")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mirrored_repeat"},"MIRRORED","_","REPEAT"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"MIRRORED","_","REPEAT")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"33648")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/constants/src/index.ts#L334"},"pixijs/packages/constants/src/index.ts:334")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"repeat"},"REPEAT"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"REPEAT")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"10497")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/constants/src/index.ts#L333"},"pixijs/packages/constants/src/index.ts:333")))}c.isMDXComponent=!0}}]);