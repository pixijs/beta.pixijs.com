"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[72909],{3905:(e,t,i)=>{i.d(t,{Zo:()=>o,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},o=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(i),d=n,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return i?r.createElement(m,l(l({ref:t},o),{},{components:i})):r.createElement(m,l({ref:t},o))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<a;p++)l[p]=i[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},76283:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=i(87462),n=(i(67294),i(3905));const a={id:"pixi_accessibility.IAccessibleHTMLElement",title:"Interface: IAccessibleHTMLElement",sidebar_label:"IAccessibleHTMLElement",custom_edit_url:null},l=void 0,c={unversionedId:"api/interfaces/pixi_accessibility.IAccessibleHTMLElement",id:"api/interfaces/pixi_accessibility.IAccessibleHTMLElement",title:"Interface: IAccessibleHTMLElement",description:"@pixi/accessibility.IAccessibleHTMLElement",source:"@site/docs/api/interfaces/pixi_accessibility.IAccessibleHTMLElement.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/pixi_accessibility.IAccessibleHTMLElement",permalink:"/api/interfaces/pixi_accessibility.IAccessibleHTMLElement",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_accessibility.IAccessibleHTMLElement",title:"Interface: IAccessibleHTMLElement",sidebar_label:"IAccessibleHTMLElement",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"CanvasRenderTarget",permalink:"/api/classes/pixi_utils.CanvasRenderTarget"},next:{title:"IAccessibleTarget",permalink:"/api/interfaces/pixi_accessibility.IAccessibleTarget"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"displayObject",id:"displayobject",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-1",level:4}],o={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/pixi_accessibility"},"@pixi/accessibility"),".IAccessibleHTMLElement"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"HTMLElement")),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"IAccessibleHTMLElement"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"displayobject"},"displayObject"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"displayObject"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"DisplayObject")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/accessibility/src/accessibleTarget.ts#L32"},"pixijs/packages/accessibility/src/accessibleTarget.ts:32")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"type"},"type"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/accessibility/src/accessibleTarget.ts#L31"},"pixijs/packages/accessibility/src/accessibleTarget.ts:31")))}u.isMDXComponent=!0}}]);