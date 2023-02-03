"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[39710],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=m(a),k=n,u=d["".concat(s,".").concat(k)]||d[k]||c[k]||i;return a?r.createElement(u,l(l({ref:t},o),{},{components:a})):r.createElement(u,l({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:n,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},11507:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const i={id:"pixi_core.ISystem",title:"Interface: ISystem<INIT_OPTIONS, DESTROY_OPTIONS>",sidebar_label:"ISystem",custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/pixi_core.ISystem",id:"api/interfaces/pixi_core.ISystem",title:"Interface: ISystem<INIT_OPTIONS, DESTROY_OPTIONS>",description:"@pixi/core.ISystem",source:"@site/docs/api/interfaces/pixi_core.ISystem.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/pixi_core.ISystem",permalink:"/api/interfaces/pixi_core.ISystem",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_core.ISystem",title:"Interface: ISystem<INIT_OPTIONS, DESTROY_OPTIONS>",sidebar_label:"ISystem",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"ISupportDict",permalink:"/api/interfaces/pixi_core.ISupportDict"},next:{title:"ITypedArray",permalink:"/api/interfaces/pixi_core.ITypedArray"}},s={},m=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Implemented by",id:"implemented-by",level:2},{value:"Methods",id:"methods",level:2},{value:"destroy",id:"destroy",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"init",id:"init",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],o={toc:m};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/pixi_core"},"@pixi/core"),".ISystem"),(0,n.kt)("p",null,"Interface for systems used by the PIXI.Renderer."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,n.kt)("p",null,"PIXI"),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"INIT_OPTIONS")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"DESTROY_OPTIONS")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null"))))),(0,n.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.BackgroundSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"BackgroundSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.BatchSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"BatchSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.BufferSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"BufferSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.ContextSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"ContextSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.FilterSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"FilterSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.FramebufferSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"FramebufferSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.GenerateTextureSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"GenerateTextureSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.GeometrySystem"},(0,n.kt)("inlineCode",{parentName:"a"},"GeometrySystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.MaskSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"MaskSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.MultisampleSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"MultisampleSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.ObjectRenderer"},(0,n.kt)("inlineCode",{parentName:"a"},"ObjectRenderer"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.ObjectRendererSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"ObjectRendererSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.PluginSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"PluginSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.ProjectionSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"ProjectionSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.RenderTextureSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"RenderTextureSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.ShaderSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"ShaderSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.StartupSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"StartupSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.StateSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"StateSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.TextureGCSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"TextureGCSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.TextureSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"TextureSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.TransformFeedbackSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"TransformFeedbackSystem"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/pixi_core.ViewSystem"},(0,n.kt)("inlineCode",{parentName:"a"},"ViewSystem")))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"destroy"},"destroy"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"destroy"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Generic destroy methods to be overridden by the subclass"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"DESTROY_OPTIONS"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/system/ISystem.ts#L11"},"pixijs/packages/core/src/system/ISystem.ts:11")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"init"},"init"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"init"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"INIT_OPTIONS"))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/system/ISystem.ts#L9"},"pixijs/packages/core/src/system/ISystem.ts:9")))}d.isMDXComponent=!0}}]);