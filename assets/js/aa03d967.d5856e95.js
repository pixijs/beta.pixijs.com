"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[36805],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},78482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={hide_table_of_contents:!0},i="Dissolve",l={unversionedId:"examples/plugin-picture/dissolve",id:"examples/plugin-picture/dissolve",title:"Dissolve",description:"",source:"@site/docs/examples/plugin-picture/dissolve.md",sourceDirName:"examples/plugin-picture",slug:"/examples/plugin-picture/dissolve",permalink:"/examples/plugin-picture/dissolve",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/plugin-picture/dissolve.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Blend Modes",permalink:"/examples/plugin-picture/blend-modes"},next:{title:"More blend modes",permalink:"/examples/plugin-picture/overlay"}},s={},p=[],c={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dissolve"},"Dissolve"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\n// Dissolve blending shader part\nconst DISSOLVE_FULL = `\n    // Noise function that generates a random number between 0 and 1\n    float rand = fract(sin(dot(\n        vTextureCoord.xy ,vec2(12.9898,78.233))) * 43758.5453);\n\n    if (rand < b_src.a) {\n        b_res = b_src;\n    }\n`;\n\n// Create a globally shared instance of the dissolve blending filter\nconst dissolveFilter = new PIXI.picture.BlendFilter({\n    blendCode: DISSOLVE_FULL,\n});\n\n// Setup app - autoStart false since we will render only once\n// to save battery life\nconst app = new PIXI.Application<HTMLCanvasElement>({\ndocument.body.appendChild(app.view);\n    autoStart: false,\n    backgroundAlpha: 0,\n});\n\n\n// Load assets\napp.loader\n    .add('bg_plane', 'https://v2-pixijs.com/assets/bg_plane.jpg')\n    .load(main);\n\n// Setup scene and then render once\nfunction main() {\n    const left = makeBlendSubscene();\n    const right = makeBlendSubscene();\n\n    // Add dissolve filter\n    left.fg.filters = [dissolveFilter];\n\n    // Move right column\n    right.container.x = app.renderer.screen.width / 2;\n\n    // Render scence once\n    app.render();\n}\n\nfunction makeBlendSubscene() {\n    // Black background\n    const bg = new PIXI.Sprite(PIXI.Texture.from('bg_plane'));\n\n    // Translucent white layer on top\n    const fg = new PIXI.Sprite(PIXI.Texture.WHITE);\n\n    bg.width = fg.width = app.renderer.screen.width / 2;\n    bg.height = fg.height = app.renderer.screen.height;\n    fg.alpha = 0.3;\n\n    const container = new PIXI.Container();\n\n    container.addChild(bg, fg);\n    app.stage.addChild(container);\n\n    return { container, bg, fg };\n}\n")))}d.isMDXComponent=!0}}]);