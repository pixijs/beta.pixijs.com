"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[13109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={hide_table_of_contents:!0},o="Color Matrix",s={unversionedId:"examples/filters-basic/color-matrix",id:"examples/filters-basic/color-matrix",title:"Color Matrix",description:"",source:"@site/docs/examples/filters-basic/color-matrix.md",sourceDirName:"examples/filters-basic",slug:"/examples/filters-basic/color-matrix",permalink:"/examples/filters-basic/color-matrix",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/filters-basic/color-matrix.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Blur",permalink:"/examples/filters-basic/blur"},next:{title:"Displacement Map - Crawlies",permalink:"/examples/filters-basic/displacement-map-crawlies"}},c={},l=[],p={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"color-matrix"},"Color Matrix"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window });\ndocument.body.appendChild(app.view);\n\napp.stage.interactive = true;\n\nconst bg = PIXI.Sprite.from('https://v2-pixijs.com/assets/bg_rotate.jpg');\nbg.anchor.set(0.5);\n\nbg.x = app.screen.width / 2;\nbg.y = app.screen.height / 2;\n\nconst filter = new PIXI.filters.ColorMatrixFilter();\n\nconst container = new PIXI.Container();\ncontainer.x = app.screen.width / 2;\ncontainer.y = app.screen.height / 2;\n\nconst bgFront = PIXI.Sprite.from('https://v2-pixijs.com/assets/bg_scene_rotate.jpg');\nbgFront.anchor.set(0.5);\n\ncontainer.addChild(bgFront);\n\nconst light2 = PIXI.Sprite.from('https://v2-pixijs.com/assets/light_rotate_2.png');\nlight2.anchor.set(0.5);\ncontainer.addChild(light2);\n\nconst light1 = PIXI.Sprite.from('https://v2-pixijs.com/assets/light_rotate_1.png');\nlight1.anchor.set(0.5);\ncontainer.addChild(light1);\n\nconst panda = PIXI.Sprite.from('https://v2-pixijs.com/assets/panda.png');\npanda.anchor.set(0.5);\n\ncontainer.addChild(panda);\n\napp.stage.addChild(container);\n\napp.stage.filters = [filter];\n\nlet count = 0;\nlet enabled = true;\n\napp.stage.on('pointertap', () => {\n    enabled = !enabled;\n    app.stage.filters = enabled ? [filter] : null;\n});\n\nconst help = new PIXI.Text('Click or tap to turn filters on / off.', {\n    fontFamily: 'Arial',\n    fontSize: 12,\n    fontWeight: 'bold',\n    fill: 'white',\n});\nhelp.y = app.screen.height - 25;\nhelp.x = 10;\n\napp.stage.addChild(help);\n\napp.ticker.add((delta) => {\n    bg.rotation += 0.01;\n    bgFront.rotation -= 0.01;\n    light1.rotation += 0.02;\n    light2.rotation += 0.01;\n\n    panda.scale.x = 1 + Math.sin(count) * 0.04;\n    panda.scale.y = 1 + Math.cos(count) * 0.04;\n\n    count += 0.1;\n\n    const { matrix } = filter;\n\n    matrix[1] = Math.sin(count) * 3;\n    matrix[2] = Math.cos(count);\n    matrix[3] = Math.cos(count) * 1.5;\n    matrix[4] = Math.sin(count / 3) * 2;\n    matrix[5] = Math.sin(count / 2);\n    matrix[6] = Math.sin(count / 4);\n});\n")))}m.isMDXComponent=!0}}]);