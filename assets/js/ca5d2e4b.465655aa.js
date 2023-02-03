"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[94392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||s;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={hide_table_of_contents:!0},o="Sprite",p={unversionedId:"examples/masks/sprite",id:"examples/masks/sprite",title:"Sprite",description:"",source:"@site/docs/examples/masks/sprite.md",sourceDirName:"examples/masks",slug:"/examples/masks/sprite",permalink:"/examples/masks/sprite",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/masks/sprite.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Graphics",permalink:"/examples/masks/graphics"},next:{title:"Filter",permalink:"/examples/masks/filter"}},i={},c=[],l={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sprite"},"Sprite"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window });\ndocument.body.appendChild(app.view);\n\napp.stage.interactive = true;\n\nconst bg = PIXI.Sprite.from('https://v2-pixijs.com/assets/bg_plane.jpg');\n\napp.stage.addChild(bg);\n\nconst cells = PIXI.Sprite.from('https://v2-pixijs.com/assets/cells.png');\n\ncells.scale.set(1.5);\n\nconst mask = PIXI.Sprite.from('https://v2-pixijs.com/assets/flowerTop.png');\nmask.anchor.set(0.5);\nmask.x = 310;\nmask.y = 190;\n\ncells.mask = mask;\n\napp.stage.addChild(mask, cells);\n\nconst target = new PIXI.Point();\n\nreset();\n\nfunction reset() {\n    target.x = Math.floor(Math.random() * 550);\n    target.y = Math.floor(Math.random() * 300);\n}\n\napp.ticker.add(() => {\n    mask.x += (target.x - mask.x) * 0.1;\n    mask.y += (target.y - mask.y) * 0.1;\n\n    if (Math.abs(mask.x - target.x) < 1) {\n        reset();\n    }\n});\n")))}m.isMDXComponent=!0}}]);