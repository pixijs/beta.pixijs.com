"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[80451],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),u=s(r),c=a,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return r?n.createElement(k,l(l({ref:t},o),{},{components:r})):n.createElement(k,l({ref:t},o))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[u]="string"==typeof e?e:a,l[1]=d;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},83926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"pixi_core.RenderTextureSystem",title:"Class: RenderTextureSystem",sidebar_label:"RenderTextureSystem",custom_edit_url:null},l=void 0,d={unversionedId:"api/classes/pixi_core.RenderTextureSystem",id:"api/classes/pixi_core.RenderTextureSystem",title:"Class: RenderTextureSystem",description:"@pixi/core.RenderTextureSystem",source:"@site/docs/api/classes/pixi_core.RenderTextureSystem.md",sourceDirName:"api/classes",slug:"/api/classes/pixi_core.RenderTextureSystem",permalink:"/api/classes/pixi_core.RenderTextureSystem",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_core.RenderTextureSystem",title:"Class: RenderTextureSystem",sidebar_label:"RenderTextureSystem",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"RenderTexturePool",permalink:"/api/classes/pixi_core.RenderTexturePool"},next:{title:"Renderer",permalink:"/api/classes/pixi_core.Renderer"}},p={},s=[{value:"Frames",id:"frames",level:3},{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"current",id:"current",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"defaultMaskStack",id:"defaultmaskstack",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"destinationFrame",id:"destinationframe",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"sourceFrame",id:"sourceframe",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"viewportFrame",id:"viewportframe",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Methods",id:"methods",level:2},{value:"bind",id:"bind",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"clear",id:"clear",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"destroy",id:"destroy",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"reset",id:"reset",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"resize",id:"resize",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-10",level:4}],o={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/pixi_core"},"@pixi/core"),".RenderTextureSystem"),(0,a.kt)("p",null,"System plugin to the renderer to manage render textures."),(0,a.kt)("p",null,"Should be added after FramebufferSystem"),(0,a.kt)("h3",{id:"frames"},"Frames"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"RenderTextureSystem")," holds a sourceFrame \u2192 destinationFrame projection. The following table explains the different\ncoordinate spaces used:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Frame"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Coordinate System"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sourceFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"The rectangle inside of which display-objects are being rendered"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"World Space"),": The origin on the top-left")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"destinationFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"The rectangle in the render-target (canvas or texture) into which contents should be rendered"),(0,a.kt)("td",{parentName:"tr",align:null},"If rendering to the canvas, this is in screen space and the origin is on the top-left. If rendering to a render-texture, this is in its base-texture's space with the origin on the bottom-left.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"viewportFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"The framebuffer viewport corresponding to the destination-frame"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Window Coordinates"),": The origin is always on the bottom-left.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,a.kt)("p",null,"PIXI"),(0,a.kt)("h2",{id:"implements"},"Implements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/interfaces/pixi_core.ISystem"},(0,a.kt)("inlineCode",{parentName:"a"},"ISystem")))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new RenderTextureSystem"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"renderer"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"renderer")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/api/classes/pixi_core.Renderer"},(0,a.kt)("inlineCode",{parentName:"a"},"Renderer"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The renderer this System works for.")))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/renderTexture/RenderTextureSystem.ts#L85"},"pixijs/packages/core/src/renderTexture/RenderTextureSystem.ts:85")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"current"},"current"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"current"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.RenderTexture"},(0,a.kt)("inlineCode",{parentName:"a"},"RenderTexture"))),(0,a.kt)("p",null,"Render texture currently bound. {@code null} if rendering to the canvas."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/renderTexture/RenderTextureSystem.ts#L57"},"pixijs/packages/core/src/renderTexture/RenderTextureSystem.ts:57")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"defaultmaskstack"},"defaultMaskStack"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"defaultMaskStack"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.MaskData"},(0,a.kt)("inlineCode",{parentName:"a"},"MaskData")),"[]"),(0,a.kt)("p",null,"List of masks for the PIXI.StencilSystem."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/renderTexture/RenderTextureSystem.ts#L51"},"pixijs/packages/core/src/renderTexture/RenderTextureSystem.ts:51")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"destinationframe"},"destinationFrame"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"destinationFrame"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Rectangle"},(0,a.kt)("inlineCode",{parentName:"a"},"Rectangle"))),(0,a.kt)("p",null,"The destination frame for the render-target's projection mapping."),(0,a.kt)("p",null,"See PIXI.Projection#destinationFrame for more details."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/renderTexture/RenderTextureSystem.ts#L71"},"pixijs/packages/core/src/renderTexture/RenderTextureSystem.ts:71")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sourceframe"},"sourceFrame"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"sourceFrame"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Rectangle"},(0,a.kt)("inlineCode",{parentName:"a"},"Rectangle"))),(0,a.kt)("p",null,"The source frame for the render-target's projection mapping."),(0,a.kt)("p",null,"See PIXI.ProjectionSystem#sourceFrame for more details"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/renderTexture/RenderTextureSystem.ts#L64"},"pixijs/packages/core/src/renderTexture/RenderTextureSystem.ts:64")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"viewportframe"},"viewportFrame"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"viewportFrame"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Rectangle"},(0,a.kt)("inlineCode",{parentName:"a"},"Rectangle"))),(0,a.kt)("p",null,"The viewport frame for the render-target's viewport binding. This is equal to the destination-frame\nfor render-textures, while it is y-flipped when rendering to the screen (i.e. its origin is always on\nthe bottom-left)."),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/renderTexture/RenderTextureSystem.ts#L78"},"pixijs/packages/core/src/renderTexture/RenderTextureSystem.ts:78")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"bind"},"bind"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"bind"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"renderTexture?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sourceFrame?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"destinationFrame?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Bind the current render texture."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"renderTexture")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/api/classes/pixi_core.RenderTexture"},(0,a.kt)("inlineCode",{parentName:"a"},"RenderTexture"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"null")),(0,a.kt)("td",{parentName:"tr",align:"left"},"RenderTexture to bind, by default its ",(0,a.kt)("inlineCode",{parentName:"td"},"null")," - the screen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"sourceFrame?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/api/classes/pixi_core.Rectangle"},(0,a.kt)("inlineCode",{parentName:"a"},"Rectangle"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Part of world that is mapped to the renderTexture.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"destinationFrame?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/api/classes/pixi_core.Rectangle"},(0,a.kt)("inlineCode",{parentName:"a"},"Rectangle"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Part of renderTexture, by default it has the same size as sourceFrame.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/renderTexture/RenderTextureSystem.ts#L102"},"pixijs/packages/core/src/renderTexture/RenderTextureSystem.ts:102")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"clear"},"clear"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"clear"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"clearColor?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mask?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Erases the render texture and fills the drawing area with a colour."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"clearColor?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"),"[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The color as rgba, default to use the renderer backgroundColor")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"mask?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/api/enums/pixi_core.BUFFER_BITS"},(0,a.kt)("inlineCode",{parentName:"a"},"BUFFER_BITS"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/renderTexture/RenderTextureSystem.ts#L195"},"pixijs/packages/core/src/renderTexture/RenderTextureSystem.ts:195")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"destroy"},"destroy"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"destroy"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Generic destroy methods to be overridden by the subclass"),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/pixi_core.ISystem"},"ISystem"),".",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/pixi_core.ISystem#destroy"},"destroy")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/renderTexture/RenderTextureSystem.ts#L245"},"pixijs/packages/core/src/renderTexture/RenderTextureSystem.ts:245")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"reset"},"reset"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Resets render-texture state."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/renderTexture/RenderTextureSystem.ts#L240"},"pixijs/packages/core/src/renderTexture/RenderTextureSystem.ts:240")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resize"},"resize"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"resize"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/renderTexture/RenderTextureSystem.ts#L233"},"pixijs/packages/core/src/renderTexture/RenderTextureSystem.ts:233")))}u.isMDXComponent=!0}}]);