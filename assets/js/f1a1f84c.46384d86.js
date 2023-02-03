"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[2896],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>b});var o=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)e=s[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)e=s[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var a=o.createContext({}),c=function(t){var n=o.useContext(a),e=n;return t&&(e="function"==typeof t?t(n):u(u({},n),t)),e},p=function(t){var n=c(t.components);return o.createElement(a.Provider,{value:n},t.children)},l="mdxType",m={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(t,n){var e=t.components,r=t.mdxType,s=t.originalType,a=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),l=c(e),d=r,b=l["".concat(a,".").concat(d)]||l[d]||m[d]||s;return e?o.createElement(b,u(u({ref:n},p),{},{components:e})):o.createElement(b,u({ref:n},p))}));function b(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var s=e.length,u=new Array(s);u[0]=d;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=t,i[l]="string"==typeof t?t:r,u[1]=i;for(var c=2;c<s;c++)u[c]=e[c];return o.createElement.apply(null,u)}return o.createElement.apply(null,e)}d.displayName="MDXCreateElement"},82917:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=e(87462),r=(e(67294),e(3905));const s={hide_table_of_contents:!0},u="Custom Mouse Cursor",i={unversionedId:"examples/events/custom-mouse-icon",id:"examples/events/custom-mouse-icon",title:"Custom Mouse Cursor",description:"",source:"@site/docs/examples/events/custom-mouse-icon.md",sourceDirName:"examples/events",slug:"/examples/events/custom-mouse-icon",permalink:"/examples/events/custom-mouse-icon",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/events/custom-mouse-icon.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Dragging",permalink:"/examples/events/dragging"},next:{title:"Custom Hitarea",permalink:"/examples/events/custom-hitarea"}},a={},c=[],p={toc:c};function l(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,o.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-mouse-cursor"},"Custom Mouse Cursor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ background: '#1099bb', resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// Css style for icons\nconst defaultIcon = \"url('https://v2-pixijs.com/assets/bunny.png'),auto\";\nconst hoverIcon = \"url('https://v2-pixijs.com/assets/bunny_saturated.png'),auto\";\n\n// Add custom cursor styles\napp.renderer.events.cursorStyles.default = defaultIcon;\napp.renderer.events.cursorStyles.hover = hoverIcon;\n\n// create a background...\nconst background = PIXI.Sprite.from('https://v2-pixijs.com/assets/bg_button.jpg');\nbackground.width = app.screen.width;\nbackground.height = app.screen.height;\n// add background to stage...\napp.stage.addChild(background);\n\n// create some textures from an image path\nconst textureButton = PIXI.Texture.from('https://v2-pixijs.com/assets/button.png');\nconst textureButtonDown = PIXI.Texture.from('https://v2-pixijs.com/assets/button_down.png');\nconst textureButtonOver = PIXI.Texture.from('https://v2-pixijs.com/assets/button_over.png');\n\nconst buttons = [];\n\nconst buttonPositions = [\n    175, 75,\n    655, 75,\n    410, 325,\n    150, 465,\n    685, 445,\n];\n\nfor (let i = 0; i < 5; i++) {\n    const button = new PIXI.Sprite(textureButton);\n    button.cursor = 'hover';\n\n    button.anchor.set(0.5);\n    button.x = buttonPositions[i * 2];\n    button.y = buttonPositions[i * 2 + 1];\n\n    // make the button interactive...\n    button.interactive = true;\n\n    button\n        .on('pointerdown', onButtonDown)\n        .on('pointerup', onButtonUp)\n        .on('pointerupoutside', onButtonUp)\n        .on('pointerover', onButtonOver)\n        .on('pointerout', onButtonOut);\n\n    // add it to the stage\n    app.stage.addChild(button);\n\n    // add button to array\n    buttons.push(button);\n}\n\n// set some silly values...\nbuttons[0].scale.set(1.2);\nbuttons[2].rotation = Math.PI / 10;\nbuttons[3].scale.set(0.8);\nbuttons[4].scale.set(0.8, 1.2);\nbuttons[4].rotation = Math.PI;\n\nfunction onButtonDown() {\n    this.isdown = true;\n    this.texture = textureButtonDown;\n    this.alpha = 1;\n}\n\nfunction onButtonUp() {\n    this.isdown = false;\n    if (this.isOver) {\n        this.texture = textureButtonOver;\n    } else {\n        this.texture = textureButton;\n    }\n}\n\nfunction onButtonOver() {\n    this.isOver = true;\n    if (this.isdown) {\n        return;\n    }\n    this.texture = textureButtonOver;\n}\n\nfunction onButtonOut() {\n    this.isOver = false;\n    if (this.isdown) {\n        return;\n    }\n    this.texture = textureButton;\n}\n")))}l.isMDXComponent=!0}}]);