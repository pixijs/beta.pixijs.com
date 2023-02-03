"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[90630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={hide_table_of_contents:!0},s="Basic",l={unversionedId:"examples/tilemaps/basic",id:"examples/tilemaps/basic",title:"Basic",description:"",source:"@site/docs/examples/tilemaps/basic.md",sourceDirName:"examples/tilemaps",slug:"/examples/tilemaps/basic",permalink:"/examples/tilemaps/basic",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/tilemaps/basic.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"GSAP 3 Tint",permalink:"/examples/gsap3-interaction/gsap3-tint"}},o={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic"},"Basic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst renderer = PIXI.autoDetectRenderer({\n    antialias: true,\n    autoDensity: true,\n});\n\nlet stage;\nlet tilemap;\nlet frame = 0;\n\n\nPIXI.Assets.add('atlas', 'https://v2-pixijs.com/assets/tilemaps/atlas.json');\nPIXI.Assets.add('button', 'https://v2-pixijs.com/assets/tilemaps/button.png');\nPIXI.Assets.load(['atlas', 'button']).then(() => {\n    // Setup tilemap scene\n    stage = new PIXI.Container();\n    tilemap = new PIXI.tilemap.CompositeTilemap();\n    stage.addChild(tilemap);\n\n    // Setup rendering loop\n    PIXI.Ticker.shared.add(() => renderer.render(stage));\n\n    makeTilemap();\n    setInterval(() => {\n        // Animate the chest tile textures. Since they are placed in 1 row\n        // only, we only need to update tileAnim[0] (for x) and not\n        // tileAnim[1] (for y).\n        renderer.plugins.tilemap.tileAnim[0] = frame++;\n    }, 400);\n});\n\nfunction makeTilemap() {\n    // Clear the tilemap, in case it is being reused.\n    tilemap.clear();\n\n    const size = 32;\n\n    // Calculate the dimensions of the tilemap to build\n    const pxW = renderer.screen.width;\n    const pxH = renderer.screen.height;\n    const tileW = pxW / size;\n    const tileH = pxH / size;\n    const wallBoundary = 2 + Math.floor(tileH / 2);\n\n    // Fill the scene with grass and sparse rocks on top and chests on\n    // the bottom. Some chests are animated between two tile textures\n    // (so they flash red).\n    for (let i = 0; i < tileW; i++) {\n        for (let j = 0; j < tileH; j++) {\n            tilemap.tile(\n                (j < tileH / 2) && (i % 2 === 1) && (j % 2 === 1)\n                    ? 'tough.png'\n                    : 'grass.png',\n                i * size,\n                j * size,\n            );\n\n            if (j === wallBoundary) {\n                tilemap.tile('brick_wall.png', i * size, j * size);\n            } else if (j > wallBoundary + 1 && j < tileH - 1) {\n                if (Math.random() > 0.8) {\n                    tilemap.tile('chest.png', i * size, j * size);\n\n                    if (Math.random() > 0.8) {\n                        // Animate between 2 tile textures. The x-offset\n                        // between them in the base-texture is 34px, i.e.\n                        // \"red_chest\" is exactly 34 pixels right in the atlas.\n                        tilemap.tileAnimX(34, 2);\n                    }\n                }\n            }\n        }\n    }\n\n    // Button does not appear in the atlas, but @pixi/tilemap won't surrender\n    // - it will create second layer for special for buttons and they will\n    // appear above all the other tiles.\n    tilemap.tile(PIXI.Assets.get('button'), 0, 0);\n}\n")))}m.isMDXComponent=!0}}]);