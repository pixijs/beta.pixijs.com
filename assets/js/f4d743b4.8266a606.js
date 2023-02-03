"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[14554],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(a),c=n,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:n,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const i={id:"pixi_core.TextureMatrix",title:"Class: TextureMatrix",sidebar_label:"TextureMatrix",custom_edit_url:null},l=void 0,p={unversionedId:"api/classes/pixi_core.TextureMatrix",id:"api/classes/pixi_core.TextureMatrix",title:"Class: TextureMatrix",description:"@pixi/core.TextureMatrix",source:"@site/docs/api/classes/pixi_core.TextureMatrix.md",sourceDirName:"api/classes",slug:"/api/classes/pixi_core.TextureMatrix",permalink:"/api/classes/pixi_core.TextureMatrix",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_core.TextureMatrix",title:"Class: TextureMatrix",sidebar_label:"TextureMatrix",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"TextureGCSystem",permalink:"/api/classes/pixi_core.TextureGCSystem"},next:{title:"TextureSystem",permalink:"/api/classes/pixi_core.TextureSystem"}},s={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_texture",id:"_texture",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"clampMargin",id:"clampmargin",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"clampOffset",id:"clampoffset",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"isSimple",id:"issimple",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"mapCoord",id:"mapcoord",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"uClampFrame",id:"uclampframe",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"uClampOffset",id:"uclampoffset",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"Accessors",id:"accessors",level:2},{value:"texture",id:"texture",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"Methods",id:"methods",level:2},{value:"multiplyUvs",id:"multiplyuvs",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-11",level:4}],u={toc:o};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/pixi_core"},"@pixi/core"),".TextureMatrix"),(0,n.kt)("p",null,"Class controls uv mapping from Texture normal space to BaseTexture normal space."),(0,n.kt)("p",null,"Takes ",(0,n.kt)("inlineCode",{parentName:"p"},"trim")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"rotate")," into account. May contain clamp settings for Meshes and TilingSprite."),(0,n.kt)("p",null,"Can be used in Texture ",(0,n.kt)("inlineCode",{parentName:"p"},"uvMatrix")," field, or separately, you can use different clamp settings on the same texture.\nIf you want to add support for texture region of certain feature or filter, that's what you're looking for."),(0,n.kt)("p",null,"Takes track of Texture changes through ",(0,n.kt)("inlineCode",{parentName:"p"},"_lastTextureID")," private field.\nUse ",(0,n.kt)("inlineCode",{parentName:"p"},"update()")," method call to track it from outside."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"See"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PIXI.Texture"),(0,n.kt)("li",{parentName:"ul"},"PIXI.Mesh"),(0,n.kt)("li",{parentName:"ul"},"PIXI.TilingSprite")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,n.kt)("p",null,"PIXI"),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new TextureMatrix"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"texture"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"clampMargin?"),")"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"texture")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/classes/pixi_core.Texture"},(0,n.kt)("inlineCode",{parentName:"a"},"Texture")),"<",(0,n.kt)("a",{parentName:"td",href:"/api/classes/pixi_core.Resource"},(0,n.kt)("inlineCode",{parentName:"a"},"Resource")),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"observed texture")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"clampMargin?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Changes frame clamping, 0.5 by default. Use -0.5 for extra border.")))),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/textures/TextureMatrix.ts#L79"},"pixijs/packages/core/src/textures/TextureMatrix.ts:79")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"_texture"},"_","texture"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"_","texture"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Texture"},(0,n.kt)("inlineCode",{parentName:"a"},"Texture")),"<",(0,n.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Resource"},(0,n.kt)("inlineCode",{parentName:"a"},"Resource")),">"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/textures/TextureMatrix.ts#L66"},"pixijs/packages/core/src/textures/TextureMatrix.ts:66")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"clampmargin"},"clampMargin"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"clampMargin"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Changes frame clamping\nWorks with TilingSprite and Mesh\nChange to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Default"))),(0,n.kt)("p",null,"0.5"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/textures/TextureMatrix.ts#L44"},"pixijs/packages/core/src/textures/TextureMatrix.ts:44")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"clampoffset"},"clampOffset"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"clampOffset"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Changes frame clamping\nWorks with TilingSprite and Mesh\nChange to 1.5 if you texture has repeated right and bottom lines, that leads to smoother borders"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Default"))),(0,n.kt)("p",null,"0"),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/textures/TextureMatrix.ts#L36"},"pixijs/packages/core/src/textures/TextureMatrix.ts:36")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"issimple"},"isSimple"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"isSimple"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"If texture size is the same as baseTexture."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Default"))),(0,n.kt)("p",null,"false"),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/textures/TextureMatrix.ts#L73"},"pixijs/packages/core/src/textures/TextureMatrix.ts:73")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mapcoord"},"mapCoord"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"mapCoord"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Matrix"},(0,n.kt)("inlineCode",{parentName:"a"},"Matrix"))),(0,n.kt)("p",null,"Matrix operation that converts texture region coords to texture coords"),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/textures/TextureMatrix.ts#L28"},"pixijs/packages/core/src/textures/TextureMatrix.ts:28")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"uclampframe"},"uClampFrame"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"uClampFrame"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Float32Array")),(0,n.kt)("p",null,"Clamp region for normalized coords, left-top pixel center in xy , bottom-right in zw.\nCalculated based on clampOffset."),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/textures/TextureMatrix.ts#L50"},"pixijs/packages/core/src/textures/TextureMatrix.ts:50")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"uclampoffset"},"uClampOffset"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"uClampOffset"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Float32Array")),(0,n.kt)("p",null,"Normalized clamp offset. Calculated based on clampOffset."),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/textures/TextureMatrix.ts#L53"},"pixijs/packages/core/src/textures/TextureMatrix.ts:53")),(0,n.kt)("h2",{id:"accessors"},"Accessors"),(0,n.kt)("h3",{id:"texture"},"texture"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"texture"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Texture"},(0,n.kt)("inlineCode",{parentName:"a"},"Texture")),"<",(0,n.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Resource"},(0,n.kt)("inlineCode",{parentName:"a"},"Resource")),">"),(0,n.kt)("p",null,"Texture property."),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Texture"},(0,n.kt)("inlineCode",{parentName:"a"},"Texture")),"<",(0,n.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Resource"},(0,n.kt)("inlineCode",{parentName:"a"},"Resource")),">"),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/textures/TextureMatrix.ts#L95"},"pixijs/packages/core/src/textures/TextureMatrix.ts:95")),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"set")," ",(0,n.kt)("strong",{parentName:"p"},"texture"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/classes/pixi_core.Texture"},(0,n.kt)("inlineCode",{parentName:"a"},"Texture")),"<",(0,n.kt)("a",{parentName:"td",href:"/api/classes/pixi_core.Resource"},(0,n.kt)("inlineCode",{parentName:"a"},"Resource")),">")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/textures/TextureMatrix.ts#L100"},"pixijs/packages/core/src/textures/TextureMatrix.ts:100")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"multiplyuvs"},"multiplyUvs"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"multiplyUvs"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"uvs"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"out?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Float32Array")),(0,n.kt)("p",null,"Multiplies uvs array to transform"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"uvs")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Float32Array")),(0,n.kt)("td",{parentName:"tr",align:"left"},"mesh uvs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"out?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Float32Array")),(0,n.kt)("td",{parentName:"tr",align:"left"},"output")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Float32Array")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"output")),(0,n.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/textures/TextureMatrix.ts#L112"},"pixijs/packages/core/src/textures/TextureMatrix.ts:112")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"update"},"update"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"update"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"forceUpdate?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"Updates matrices if texture was changed."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"forceUpdate?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},"if true, matrices will be updated any case")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Whether or not it was updated")),(0,n.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/textures/TextureMatrix.ts#L138"},"pixijs/packages/core/src/textures/TextureMatrix.ts:138")))}d.isMDXComponent=!0}}]);