"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[4918],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,f=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return t?n.createElement(f,o(o({ref:r},s),{},{components:t})):n.createElement(f,o({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},22057:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={id:"ITypedArray.pixi_core",title:"Interface: ITypedArray",sidebar_label:"ITypedArray",custom_edit_url:null},o=void 0,p={unversionedId:"api/interfaces/ITypedArray.pixi_core",id:"api/interfaces/ITypedArray.pixi_core",title:"Interface: ITypedArray",description:"@pixi/core.ITypedArray",source:"@site/docs/api/interfaces/ITypedArray.pixi_core.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/ITypedArray.pixi_core",permalink:"/api/interfaces/ITypedArray.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ITypedArray.pixi_core",title:"Interface: ITypedArray",sidebar_label:"ITypedArray",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"ITextureBorders",permalink:"/api/interfaces/ITextureBorders.pixi_core"},next:{title:"LoaderParser",permalink:"/api/interfaces/LoaderParser.pixi_assets"}},l={},c=[{value:"Extends",id:"extends",level:2}],s={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".ITypedArray"),(0,a.kt)("p",null,"PixiJS classes use this type instead of ArrayBuffer and typed arrays to support expressions like ",(0,a.kt)("inlineCode",{parentName:"p"},"geometry.buffers[0].data[0] = position.x"),"."),(0,a.kt)("p",null,"Gives access to indexing and ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," field"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@","popelyshev",":"," If data is actually ArrayBuffer and throws Exception on indexing - its user problem ",":",")")),(0,a.kt)("p",null,"// TODO: @see"),(0,a.kt)("h2",{id:"extends"},"Extends"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IArrayBuffer")))}u.isMDXComponent=!0}}]);