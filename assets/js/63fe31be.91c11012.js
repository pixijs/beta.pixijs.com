"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[89321],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,d=u["".concat(s,".").concat(m)]||u[m]||y[m]||p;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,a=new Array(p);a[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<p;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13516:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const p={hide_table_of_contents:!0},a="Spineboy Walking",o={unversionedId:"examples/plugin-spine/spineboy",id:"examples/plugin-spine/spineboy",title:"Spineboy Walking",description:"",source:"@site/docs/examples/plugin-spine/spineboy.md",sourceDirName:"examples/plugin-spine",slug:"/examples/plugin-spine/spineboy",permalink:"/examples/plugin-spine/spineboy",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/plugin-spine/spineboy.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Pixie",permalink:"/examples/plugin-spine/pixie"},next:{title:"Spineboy Pro",permalink:"/examples/plugin-spine/spineboy-pro"}},s={},l=[],c={toc:l};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spineboy-walking"},"Spineboy Walking"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// load spine data\napp.loader\n    .add('spineboy', 'https://v2-pixijs.com/assets/pixi-spine/spineboy.json')\n    .load(onAssetsLoaded);\n\napp.stage.interactive = true;\n\nfunction onAssetsLoaded(loader, res) {\n    // create a spine boy\n    const spineBoy = new PIXI.spine.Spine(res.spineboy.spineData);\n\n    // set the position\n    spineBoy.x = app.screen.width / 2;\n    spineBoy.y = app.screen.height;\n\n    spineBoy.scale.set(1.5);\n\n    // set up the mixes!\n    spineBoy.stateData.setMix('walk', 'jump', 0.2);\n    spineBoy.stateData.setMix('jump', 'walk', 0.4);\n\n    // play animation\n    spineBoy.state.setAnimation(0, 'walk', true);\n\n    app.stage.addChild(spineBoy);\n\n    app.stage.on('pointerdown', () => {\n        spineBoy.state.setAnimation(0, 'jump', false);\n        spineBoy.state.addAnimation(0, 'walk', true, 0);\n    });\n}\n")))}u.isMDXComponent=!0}}]);