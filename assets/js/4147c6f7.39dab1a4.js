"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[17412],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var d=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);n&&(d=d.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,d)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,d,r=function(e,n){if(null==e)return{};var t,d,r={},o=Object.keys(e);for(d=0;d<o.length;d++)t=o[d],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(d=0;d<o.length;d++)t=o[d],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=d.createContext({}),u=function(e){var n=d.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return d.createElement(i.Provider,{value:n},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return d.createElement(d.Fragment,{},n)}},m=d.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,h=p["".concat(i,".").concat(m)]||p[m]||l[m]||o;return t?d.createElement(h,a(a({ref:n},c),{},{components:t})):d.createElement(h,a({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return d.createElement.apply(null,a)}return d.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var d=t(87462),r=(t(67294),t(3905));const o={hide_table_of_contents:!0},a="BlendModes",s={unversionedId:"examples/demos-basic/blendmodes",id:"examples/demos-basic/blendmodes",title:"BlendModes",description:"",source:"@site/docs/examples/demos-basic/blendmodes.md",sourceDirName:"examples/demos-basic",slug:"/examples/demos-basic/blendmodes",permalink:"/examples/demos-basic/blendmodes",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/demos-basic/blendmodes.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Particle Container",permalink:"/examples/demos-basic/particle-container"},next:{title:"SimplePlane",permalink:"/examples/demos-basic/simpleplane"}},i={},u=[],c={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,d.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blendmodes"},"BlendModes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// create a new background sprite\nconst background = PIXI.Sprite.from('https://v2-pixijs.com/assets/bg_rotate.jpg');\nbackground.width = app.screen.width;\nbackground.height = app.screen.height;\napp.stage.addChild(background);\n\n// create an array to store a reference to the dudes\nconst dudeArray = [];\n\nconst totaldudes = 20;\n\nfor (let i = 0; i < totaldudes; i++) {\n    // create a new Sprite that uses the image name that we just generated as its source\n    const dude = PIXI.Sprite.from('https://v2-pixijs.com/assets/flowerTop.png');\n\n    dude.anchor.set(0.5);\n\n    // set a random scale for the dude\n    dude.scale.set(0.8 + Math.random() * 0.3);\n\n    // finally let's set the dude to be at a random position...\n    dude.x = Math.floor(Math.random() * app.screen.width);\n    dude.y = Math.floor(Math.random() * app.screen.height);\n\n    // The important bit of this example, this is how you change the default blend mode of the sprite\n    dude.blendMode = PIXI.BLEND_MODES.ADD;\n\n    // create some extra properties that will control movement\n    dude.direction = Math.random() * Math.PI * 2;\n\n    // this number will be used to modify the direction of the dude over time\n    dude.turningSpeed = Math.random() - 0.8;\n\n    // create a random speed for the dude between 0 - 2\n    dude.speed = 2 + Math.random() * 2;\n\n    // finally we push the dude into the dudeArray so it it can be easily accessed later\n    dudeArray.push(dude);\n\n    app.stage.addChild(dude);\n}\n\n// create a bounding box for the little dudes\nconst dudeBoundsPadding = 100;\n\nconst dudeBounds = new PIXI.Rectangle(\n    -dudeBoundsPadding,\n    -dudeBoundsPadding,\n    app.screen.width + dudeBoundsPadding * 2,\n    app.screen.height + dudeBoundsPadding * 2,\n);\n\napp.ticker.add(() => {\n    // iterate through the dudes and update the positions\n    for (let i = 0; i < dudeArray.length; i++) {\n        const dude = dudeArray[i];\n        dude.direction += dude.turningSpeed * 0.01;\n        dude.x += Math.sin(dude.direction) * dude.speed;\n        dude.y += Math.cos(dude.direction) * dude.speed;\n        dude.rotation = -dude.direction - Math.PI / 2;\n\n        // wrap the dudes by testing their bounds...\n        if (dude.x < dudeBounds.x) {\n            dude.x += dudeBounds.width;\n        } else if (dude.x > dudeBounds.x + dudeBounds.width) {\n            dude.x -= dudeBounds.width;\n        }\n\n        if (dude.y < dudeBounds.y) {\n            dude.y += dudeBounds.height;\n        } else if (dude.y > dudeBounds.y + dudeBounds.height) {\n            dude.y -= dudeBounds.height;\n        }\n    }\n});\n")))}p.isMDXComponent=!0}}]);