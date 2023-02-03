"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[56783],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>y});var r=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var u=r.createContext({}),c=function(t){var n=r.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):s(s({},n),t)),e},p=function(t){var n=c(t.components);return r.createElement(u.Provider,{value:n},t.children)},l="mdxType",m={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),l=c(e),d=o,y=l["".concat(u,".").concat(d)]||l[d]||m[d]||a;return e?r.createElement(y,s(s({ref:n},p),{},{components:e})):r.createElement(y,s({ref:n},p))}));function y(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var a=e.length,s=new Array(a);s[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=t,i[l]="string"==typeof t?t:o,s[1]=i;for(var c=2;c<a;c++)s[c]=e[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,e)}d.displayName="MDXCreateElement"},24878:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=e(87462),o=(e(67294),e(3905));const a={hide_table_of_contents:!0},s="Custom Hitarea",i={unversionedId:"examples/events/custom-hitarea",id:"examples/events/custom-hitarea",title:"Custom Hitarea",description:"",source:"@site/docs/examples/events/custom-hitarea.md",sourceDirName:"examples/events",slug:"/examples/events/custom-hitarea",permalink:"/examples/events/custom-hitarea",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/events/custom-hitarea.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Custom Mouse Cursor",permalink:"/examples/events/custom-mouse-icon"},next:{title:"Pointer Tracker",permalink:"/examples/events/pointer-tracker"}},u={},c=[],p={toc:c};function l(t){let{components:n,...e}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-hitarea"},"Custom Hitarea"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>(800, 600, { background: '#1099bb' });\ndocument.body.appendChild(app.view);\n\nconst yellowStar = PIXI.Texture.from('https://v2-pixijs.com/assets/yellowstar.png');\n\n// Standard Sprite Button\nconst starButton1 = new PIXI.Sprite(yellowStar);\n\nstarButton1.position.set(50, 200);\nstarButton1.cursor = 'pointer';\nstarButton1.interactive = true;\n\nstarButton1\n    .on('pointerdown', onClick, starButton1)\n    .on('pointerover', onPointerOver, starButton1)\n    .on('pointerout', onPointerOut, starButton1);\n\n// Custom Hitarea Button\nconst starButton2 = new PIXI.Sprite(yellowStar);\nstarButton2.position.set(250, 200);\n\n// Create a hitarea that matches the sprite, which will be used for point\n// intersection\nstarButton2.hitArea = new PIXI.Polygon([\n    80, 0,\n    100, 50,\n    160, 55,\n    115, 95,\n    130, 150,\n    80, 120,\n    30, 150,\n    45, 95,\n    0, 55,\n    60, 50,\n]);\nstarButton2.cursor = 'pointer';\nstarButton2.interactive = true;\n\nstarButton2\n    .on('pointerdown', onClick, starButton2)\n    .on('pointerover', onPointerOver, starButton2)\n    .on('pointerout', onPointerOut, starButton2);\n\n// With Mask, No Hit Area\nconst starButton3 = new PIXI.Sprite(yellowStar);\n\nstarButton3.position.set(450, 200);\nstarButton3.cursor = 'pointer';\nstarButton3.interactive = true;\n\nconst squareMask = new PIXI.Graphics()\n    .beginFill(0xFFFFFF)\n    .drawRect(starButton3.x, starButton3.y, 75, 200)\n    .endFill();\n\nstarButton3.mask = squareMask;\n\nstarButton3\n    .on('pointerdown', onClick, starButton3)\n    .on('pointerover', onPointerOver, starButton3)\n    .on('pointerout', onPointerOut, starButton3);\n\n// With a Mask and Hit Area\n// Hitareas ignore masks. You can still click on a button made in this way,\n// even from areas covered by a mask\nconst starButton4 = new PIXI.Sprite(yellowStar);\nstarButton4.position.set(600, 200);\n\nconst squareMask2 = new PIXI.Graphics()\n    .beginFill(0xFFFFFF)\n    .drawRect(starButton4.x, starButton4.y, 75, 200)\n    .endFill();\n\nstarButton4.mask = squareMask2;\n\n// Again, hitarea for intersection checks\nstarButton4.hitArea = new PIXI.Polygon([\n    80, 0,\n    100, 50,\n    160, 55,\n    115, 95,\n    130, 150,\n    80, 120,\n    30, 150,\n    45, 95,\n    0, 55,\n    60, 50,\n]);\nstarButton4.cursor = 'pointer';\nstarButton4.interactive = true;\n\nstarButton4\n    .on('pointerdown', onClick, starButton4)\n    .on('pointerover', onPointerOver, starButton4)\n    .on('pointerout', onPointerOut, starButton4);\n\nconst style = new PIXI.TextStyle({ fill: '#ffffff' });\n\nconst text1 = new PIXI.Text('Standard', style);\ntext1.x = starButton1.x + 25;\ntext1.y = starButton1.y + 170;\n\nconst text2 = new PIXI.Text('Hit Area', style);\ntext2.x = starButton2.x + 35;\ntext2.y = starButton2.y + 170;\n\nconst text3 = new PIXI.Text('Mask', style);\ntext3.x = starButton3.x + 10;\ntext3.y = starButton3.y + 170;\n\nconst text4 = new PIXI.Text('Mask + Hit Area', style);\ntext4.x = starButton4.x - 10;\ntext4.y = starButton4.y + 170;\n\n// Add to stage\napp.stage.addChild(\n    starButton2,\n    starButton1,\n    starButton3,\n    starButton4,\n    squareMask,\n    squareMask2,\n    text1,\n    text2,\n    text3,\n    text4,\n);\n\nfunction onClick() {\n    this.tint = 0x333333;\n}\n\nfunction onPointerOver() {\n    this.tint = 0x666666;\n}\n\nfunction onPointerOut() {\n    this.tint = 0xFFFFFF;\n}\n")))}l.isMDXComponent=!0}}]);