"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=o(r),c=a,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return r?n.createElement(k,u(u({ref:t},s),{},{components:r})):n.createElement(k,u({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,u[1]=i;for(var o=2;o<l;o++)u[o]=r[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},48182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const l={id:"PIXI.TextureSystem.pixi_core",title:"Class: PIXI.TextureSystem",sidebar_label:"PIXI.TextureSystem",custom_edit_url:null},u=void 0,i={unversionedId:"api/classes/PIXI.TextureSystem.pixi_core",id:"api/classes/PIXI.TextureSystem.pixi_core",title:"Class: PIXI.TextureSystem",description:"@pixi/core.TextureSystem",source:"@site/docs/api/classes/PIXI.TextureSystem.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.TextureSystem.pixi_core",permalink:"/api/classes/PIXI.TextureSystem.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.TextureSystem.pixi_core",title:"Class: PIXI.TextureSystem",sidebar_label:"PIXI.TextureSystem",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.TextureMatrix",permalink:"/api/classes/PIXI.TextureMatrix.pixi_core"},next:{title:"PIXI.TextureUvs",permalink:"/api/classes/PIXI.TextureUvs.pixi_core"}},p={},o=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"boundTextures",id:"boundtextures",level:3},{value:"currentLocation",id:"currentlocation",level:3},{value:"managedTextures",id:"managedtextures",level:3},{value:"hasIntegerTextures",id:"hasintegertextures",level:3},{value:"unknownTexture",id:"unknowntexture",level:3},{value:"Methods",id:"methods",level:2},{value:"bind",id:"bind",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"contextChange",id:"contextchange",level:3},{value:"ensureSamplerType",id:"ensuresamplertype",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"reset",id:"reset",level:3},{value:"unbind",id:"unbind",level:3},{value:"Parameters:",id:"parameters-3",level:4}],s={toc:o};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"package-name"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".TextureSystem")),(0,a.kt)("p",null,"System plugin to the renderer to manage textures."),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"constructor"},"Constructor:"),(0,a.kt)("h4",null,(0,a.kt)("code",null,"new PIXI.TextureSystem(renderer: Renderer) ")),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"renderer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Renderer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:null},"The renderer this system works for."))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"boundtextures"},"boundTextures"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"BaseTexture[]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Bound textures.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"currentlocation"},"currentLocation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Current location.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"managedtextures"},"managedTextures"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"Array","<","BaseTexture",">")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," List of managed textures.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"hasintegertextures"},"hasIntegerTextures"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Whether glTexture with int/uint sampler type was uploaded.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"unknowntexture"},"unknownTexture"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"BaseTexture")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," BaseTexture value that shows that we don't know what is bound.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"bind"},"bind"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(texture",":"," Texture ","|"," BaseTexture, location",":"," number) -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Bind a texture to a specific location\nIf you want to unbind something, please use ",(0,a.kt)("inlineCode",{parentName:"p"},"unbind(texture)")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"bind(null, textureLocation)")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"texture"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Texture ","|"," BaseTexture")),(0,a.kt)("td",{parentName:"tr",align:null},"Texture to bind")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"location"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"Location to bind at"))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"contextchange"},"contextChange"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"() -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Sets up the renderer context and necessary buffers.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"ensuresamplertype"},"ensureSamplerType"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(maxTextures",":"," number) -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Ensures that current boundTextures all have FLOAT sampler type, see ",(0,a.kt)("a",{parentName:"p",href:"../enums/PIXI.SAMPLER_TYPES.pixi_constants"},"PIXI.SAMPLER_TYPES")," for explanation."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maxTextures"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"number of locations to check"))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"reset"},"reset"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"() -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Resets texture location and bound textures Actual ",(0,a.kt)("inlineCode",{parentName:"p"},"bind(null, i)")," calls will be performed at next ",(0,a.kt)("inlineCode",{parentName:"p"},"unbind()")," call")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"unbind"},"unbind"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(texture",":"," BaseTexture) -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Unbind a texture."),(0,a.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"texture"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"BaseTexture")),(0,a.kt)("td",{parentName:"tr",align:null},"Texture to bind"))))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);