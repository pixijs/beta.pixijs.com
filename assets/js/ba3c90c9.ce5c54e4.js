"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[23434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,p[1]=o;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={id:"pixi_core.UPDATE_PRIORITY",title:"Enumeration: UPDATE_PRIORITY",sidebar_label:"UPDATE_PRIORITY",custom_edit_url:null},p=void 0,o={unversionedId:"api/enums/pixi_core.UPDATE_PRIORITY",id:"api/enums/pixi_core.UPDATE_PRIORITY",title:"Enumeration: UPDATE_PRIORITY",description:"@pixi/core.UPDATEPRIORITY",source:"@site/docs/api/enums/pixi_core.UPDATE_PRIORITY.md",sourceDirName:"api/enums",slug:"/api/enums/pixi_core.UPDATE_PRIORITY",permalink:"/api/enums/pixi_core.UPDATE_PRIORITY",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_core.UPDATE_PRIORITY",title:"Enumeration: UPDATE_PRIORITY",sidebar_label:"UPDATE_PRIORITY",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"TYPES",permalink:"/api/enums/pixi_core.TYPES"},next:{title:"WRAP_MODES",permalink:"/api/enums/pixi_core.WRAP_MODES"}},l={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"HIGH",id:"high",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"LOW",id:"low",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"NORMAL",id:"normal",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"UTILITY",id:"utility",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/pixi_core"},"@pixi/core"),".UPDATE_PRIORITY"),(0,i.kt)("p",null,"Represents the update priorities used by internal PIXI classes when registered with\nthe PIXI.Ticker object. Higher priority items are updated first and lower\npriority items, such as render, should go later."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Static"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Name"))),(0,i.kt)("p",null,"UPDATE_PRIORITY"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,i.kt)("p",null,"PIXI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Property"))),(0,i.kt)("p",null,"High priority updating, PIXI.VideoBaseTexture and PIXI.AnimatedSprite"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Property"))),(0,i.kt)("p",null,"Default priority for ticker events, see PIXI.Ticker#add."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Property"))),(0,i.kt)("p",null,"Low priority used for PIXI.Application rendering."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Property"))),(0,i.kt)("p",null,"Lowest priority used for PIXI.BasePrepare utility."),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"high"},"HIGH"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"HIGH")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"25")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/ticker/src/const.ts#L17"},"pixijs/packages/ticker/src/const.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"low"},"LOW"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"LOW")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"-25")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/ticker/src/const.ts#L19"},"pixijs/packages/ticker/src/const.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"normal"},"NORMAL"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"NORMAL")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/ticker/src/const.ts#L18"},"pixijs/packages/ticker/src/const.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"utility"},"UTILITY"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"UTILITY")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"-50")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/ticker/src/const.ts#L20"},"pixijs/packages/ticker/src/const.ts:20")))}u.isMDXComponent=!0}}]);