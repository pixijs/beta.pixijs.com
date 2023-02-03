"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[94351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},94672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={hide_table_of_contents:!0},s="Background Load",c={unversionedId:"examples/assets/background",id:"examples/assets/background",title:"Background Load",description:"",source:"@site/docs/examples/assets/background.md",sourceDirName:"examples/assets",slug:"/examples/assets/background",permalink:"/examples/assets/background",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/assets/background.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Load Multiple",permalink:"/examples/assets/multiple"},next:{title:"Bundles",permalink:"/examples/assets/bundle"}},i={},p=[],l={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"background-load"},"Background Load"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ background: '#1099bb', resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// Add the assets to load\nPIXI.Assets.add('flowerTop', 'https://v2-pixijs.com/assets/flowerTop.png');\nPIXI.Assets.add('eggHead', 'https://v2-pixijs.com/assets/eggHead.png');\n\n// Allow the assets to load in the background\nPIXI.Assets.backgroundLoad(['flowerTop', 'eggHead']);\n\n// If the background load hasn't loaded this asset yet, calling load forces this asset to load now.\nPIXI.Assets.load('eggHead').then((texture) => {\n    // auxiliar flag for toggling the texture\n    let isEggHead = true;\n\n    // create a new Sprite from the resolved loaded texture\n    const character = new PIXI.Sprite(texture);\n    character.anchor.set(0.5);\n    character.x = app.screen.width / 2;\n    character.y = app.screen.height / 2;\n    character.interactive = true;\n    character.cursor = 'pointer';\n\n    app.stage.addChild(character);\n\n    character.on('pointertap', async () => {\n        isEggHead = !isEggHead;\n        // These promise are already resolved in the cache.\n        character.texture = await PIXI.Assets.load(isEggHead ? 'eggHead' : 'flowerTop');\n    });\n});\n")))}d.isMDXComponent=!0}}]);