"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8603],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(r),f=i,u=m["".concat(o,".").concat(f)]||m[f]||k[f]||n;return r?a.createElement(u,l(l({ref:t},d),{},{components:r})):a.createElement(u,l({ref:t},d))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=f;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const n={id:"pixi_core.BatchGeometry",title:"Class: BatchGeometry",sidebar_label:"BatchGeometry",custom_edit_url:null},l=void 0,p={unversionedId:"api/classes/pixi_core.BatchGeometry",id:"api/classes/pixi_core.BatchGeometry",title:"Class: BatchGeometry",description:"@pixi/core.BatchGeometry",source:"@site/docs/api/classes/pixi_core.BatchGeometry.md",sourceDirName:"api/classes",slug:"/api/classes/pixi_core.BatchGeometry",permalink:"/api/classes/pixi_core.BatchGeometry",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_core.BatchGeometry",title:"Class: BatchGeometry",sidebar_label:"BatchGeometry",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"BatchDrawCall",permalink:"/api/classes/pixi_core.BatchDrawCall"},next:{title:"BatchRenderer",permalink:"/api/classes/pixi_core.BatchRenderer"}},o={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"attributes",id:"attributes",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"buffers",id:"buffers",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"disposeRunner",id:"disposerunner",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"glVertexArrayObjects",id:"glvertexarrayobjects",level:3},{value:"Index signature",id:"index-signature-1",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"id",id:"id",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"indexBuffer",id:"indexbuffer",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"instanceCount",id:"instancecount",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"instanced",id:"instanced",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"refCount",id:"refcount",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"Methods",id:"methods",level:2},{value:"addAttribute",id:"addattribute",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"addIndex",id:"addindex",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"clone",id:"clone",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"destroy",id:"destroy",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"getAttribute",id:"getattribute",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"getBuffer",id:"getbuffer",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-15",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"getIndex",id:"getindex",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-16",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"getSize",id:"getsize",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-17",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"interleave",id:"interleave",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-18",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"merge",id:"merge",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Inherited from",id:"inherited-from-19",level:4},{value:"Defined in",id:"defined-in-20",level:4}],d={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/pixi_core"},"@pixi/core"),".BatchGeometry"),(0,i.kt)("p",null,"Geometry used to batch standard PIXI content (e.g. Mesh, Sprite, Graphics objects)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,i.kt)("p",null,"PIXI"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},(0,i.kt)("inlineCode",{parentName:"a"},"Geometry"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"BatchGeometry"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new BatchGeometry"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"_static?"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_static?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optimization flag, where ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," is updated every frame, ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," doesn't change frame-to-frame.")))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/batch/BatchGeometry.ts#L27"},"pixijs/packages/core/src/batch/BatchGeometry.ts:27")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"attributes"},"attributes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"attributes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"index-signature"},"Index signature"),(0,i.kt)("p",null,"\u25aa ","[key: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Attribute"},(0,i.kt)("inlineCode",{parentName:"a"},"Attribute"))),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#attributes"},"attributes")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L47"},"pixijs/packages/core/src/geometry/Geometry.ts:47")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"buffers"},"buffers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"buffers"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Buffer"},(0,i.kt)("inlineCode",{parentName:"a"},"Buffer")),"[]"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#buffers"},"buffers")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L45"},"pixijs/packages/core/src/geometry/Geometry.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"disposerunner"},"disposeRunner"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"disposeRunner"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Runner"},(0,i.kt)("inlineCode",{parentName:"a"},"Runner"))),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#disposerunner"},"disposeRunner")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L64"},"pixijs/packages/core/src/geometry/Geometry.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"glvertexarrayobjects"},"glVertexArrayObjects"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"glVertexArrayObjects"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"A map of renderer IDs to webgl VAOs"),(0,i.kt)("h4",{id:"index-signature-1"},"Index signature"),(0,i.kt)("p",null,"\u25aa ","[key: ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]",": { ",(0,i.kt)("inlineCode",{parentName:"p"},"[key: string]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLVertexArrayObject"),";  }"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#glvertexarrayobjects"},"glVertexArrayObjects")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L63"},"pixijs/packages/core/src/geometry/Geometry.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#id"},"id")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L48"},"pixijs/packages/core/src/geometry/Geometry.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"indexbuffer"},"indexBuffer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"indexBuffer"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Buffer"},(0,i.kt)("inlineCode",{parentName:"a"},"Buffer"))),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#indexbuffer"},"indexBuffer")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L46"},"pixijs/packages/core/src/geometry/Geometry.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instancecount"},"instanceCount"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"instanceCount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Number of instances in this geometry, pass it to ",(0,i.kt)("inlineCode",{parentName:"p"},"GeometrySystem.draw()"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default"))),(0,i.kt)("p",null,"1"),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#instancecount"},"instanceCount")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L57"},"pixijs/packages/core/src/geometry/Geometry.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instanced"},"instanced"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"instanced"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether the geometry is instanced."),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#instanced"},"instanced")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L51"},"pixijs/packages/core/src/geometry/Geometry.ts:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"refcount"},"refCount"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"refCount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Count of existing (not destroyed) meshes that reference this geometry."),(0,i.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#refcount"},"refCount")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L67"},"pixijs/packages/core/src/geometry/Geometry.ts:67")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"addattribute"},"addAttribute"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addAttribute"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"buffer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"size?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"normalized?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stride?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"start?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"instance?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.BatchGeometry"},(0,i.kt)("inlineCode",{parentName:"a"},"BatchGeometry"))),(0,i.kt)("p",null,"Adds an attribute to the geometry\nNote: ",(0,i.kt)("inlineCode",{parentName:"p"},"stride")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," should be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," if you dont know them, not 0!"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"the name of the attribute (matching up to a shader)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"buffer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"),"[] ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Uint32Array")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Float32Array")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/api/classes/pixi_core.Buffer"},(0,i.kt)("inlineCode",{parentName:"a"},"Buffer"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"size")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"normalized")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"should the data be normalized.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/api/enums/pixi_core.TYPES"},(0,i.kt)("inlineCode",{parentName:"a"},"TYPES"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"what type of number is the attribute. Check {PIXI.TYPES} to see the ones available")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stride?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"How far apart, in bytes, the start of each value is. (used for interleaving data)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"start?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"How far into the array to start reading values (used for interleaving data)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"instance")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Instancing flag")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.BatchGeometry"},(0,i.kt)("inlineCode",{parentName:"a"},"BatchGeometry"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns self, useful for chaining.")),(0,i.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#addattribute"},"addAttribute")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L106"},"pixijs/packages/core/src/geometry/Geometry.ts:106")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"addindex"},"addIndex"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addIndex"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"buffer?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},(0,i.kt)("inlineCode",{parentName:"a"},"Geometry"))),(0,i.kt)("p",null,"Adds an index buffer to the geometry\nThe index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, \u2026). There is only ONE index buffer."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"buffer?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"),"[] ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/api/interfaces/pixi_core.IArrayBuffer"},(0,i.kt)("inlineCode",{parentName:"a"},"IArrayBuffer"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/api/classes/pixi_core.Buffer"},(0,i.kt)("inlineCode",{parentName:"a"},"Buffer"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},(0,i.kt)("inlineCode",{parentName:"a"},"Geometry"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns self, useful for chaining.")),(0,i.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#addindex"},"addIndex")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L181"},"pixijs/packages/core/src/geometry/Geometry.ts:181")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"clone"},"clone"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"clone"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},(0,i.kt)("inlineCode",{parentName:"a"},"Geometry"))),(0,i.kt)("p",null,"Returns a clone of the geometry."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},(0,i.kt)("inlineCode",{parentName:"a"},"Geometry"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A new clone of this geometry.")),(0,i.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#clone"},"clone")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L298"},"pixijs/packages/core/src/geometry/Geometry.ts:298")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"destroy"},"destroy"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"destroy"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Destroys the geometry."),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#destroy"},"destroy")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L285"},"pixijs/packages/core/src/geometry/Geometry.ts:285")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dispose"},"dispose"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Disposes WebGL resources that are connected to this geometry."),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#dispose"},"dispose")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L279"},"pixijs/packages/core/src/geometry/Geometry.ts:279")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getattribute"},"getAttribute"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getAttribute"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"): ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Attribute"},(0,i.kt)("inlineCode",{parentName:"a"},"Attribute"))),(0,i.kt)("p",null,"Returns the requested attribute."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the attribute required")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Attribute"},(0,i.kt)("inlineCode",{parentName:"a"},"Attribute"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The attribute requested.")),(0,i.kt)("h4",{id:"inherited-from-14"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#getattribute"},"getAttribute")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L159"},"pixijs/packages/core/src/geometry/Geometry.ts:159")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getbuffer"},"getBuffer"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getBuffer"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"): ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Buffer"},(0,i.kt)("inlineCode",{parentName:"a"},"Buffer"))),(0,i.kt)("p",null,"Returns the requested buffer."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the buffer required.")))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Buffer"},(0,i.kt)("inlineCode",{parentName:"a"},"Buffer"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The buffer requested.")),(0,i.kt)("h4",{id:"inherited-from-15"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#getbuffer"},"getBuffer")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L169"},"pixijs/packages/core/src/geometry/Geometry.ts:169")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getindex"},"getIndex"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getIndex"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Buffer"},(0,i.kt)("inlineCode",{parentName:"a"},"Buffer"))),(0,i.kt)("p",null,"Returns the index buffer"),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Buffer"},(0,i.kt)("inlineCode",{parentName:"a"},"Buffer"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The index buffer.")),(0,i.kt)("h4",{id:"inherited-from-16"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#getindex"},"getIndex")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L210"},"pixijs/packages/core/src/geometry/Geometry.ts:210")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getsize"},"getSize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getSize"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Get the size of the geometries, in vertices."),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-17"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#getsize"},"getSize")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L265"},"pixijs/packages/core/src/geometry/Geometry.ts:265")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"interleave"},"interleave"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"interleave"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},(0,i.kt)("inlineCode",{parentName:"a"},"Geometry"))),(0,i.kt)("p",null,"This function modifies the structure so that all current attributes become interleaved into a single buffer\nThis can be useful if your model remains static as it offers a little performance boost"),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},(0,i.kt)("inlineCode",{parentName:"a"},"Geometry"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns self, useful for chaining.")),(0,i.kt)("h4",{id:"inherited-from-18"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#interleave"},"interleave")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L220"},"pixijs/packages/core/src/geometry/Geometry.ts:220")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"merge"},"merge"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"merge"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"geometries"),"): ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},(0,i.kt)("inlineCode",{parentName:"a"},"Geometry"))),(0,i.kt)("p",null,"Merges an array of geometries into a new single one."),(0,i.kt)("p",null,"Geometry attribute styles must match for this operation to work."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"geometries")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/api/classes/pixi_core.Geometry"},(0,i.kt)("inlineCode",{parentName:"a"},"Geometry")),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"array of geometries to merge")))),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},(0,i.kt)("inlineCode",{parentName:"a"},"Geometry"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shiny new geometry!")),(0,i.kt)("h4",{id:"inherited-from-19"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry"},"Geometry"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Geometry#merge"},"merge")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/geometry/Geometry.ts#L338"},"pixijs/packages/core/src/geometry/Geometry.ts:338")))}m.isMDXComponent=!0}}]);