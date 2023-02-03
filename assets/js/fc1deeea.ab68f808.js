"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[2850],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(g,o(o({ref:n},l),{},{components:t})):a.createElement(g,o({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55656:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={hide_table_of_contents:!0},o="Eye Tracking",s={unversionedId:"examples/plugin-dragonbones/eyetracking",id:"examples/plugin-dragonbones/eyetracking",title:"Eye Tracking",description:"",source:"@site/docs/examples/plugin-dragonbones/eyetracking.md",sourceDirName:"examples/plugin-dragonbones",slug:"/examples/plugin-dragonbones/eyetracking",permalink:"/examples/plugin-dragonbones/eyetracking",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/plugin-dragonbones/eyetracking.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Robot",permalink:"/examples/plugin-dragonbones/robot"},next:{title:"Invert",permalink:"/examples/plugin-heaven/invert"}},p={},c=[],l={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eye-tracking"},"Eye Tracking"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ antialias: true, resizeTo: window });\ndocument.body.appendChild(app.view);\n\napp.stop();\n\nconst scale = 0.3;\nconst target = new PIXI.Point();\nlet armatureDisplay;\n\nconst animationNames = [\n    'PARAM_ANGLE_X',\n    'PARAM_ANGLE_Y',\n    'PARAM_ANGLE_Z',\n    'PARAM_EYE_BALL_X',\n    'PARAM_EYE_BALL_Y',\n    'PARAM_BODY_X',\n    'PARAM_BODY_Y',\n    'PARAM_BODY_Z',\n    'PARAM_BODY_ANGLE_X',\n    'PARAM_BODY_ANGLE_Y',\n    'PARAM_BODY_ANGLE_Z',\n    'PARAM_BREATH',\n];\n\n// load spine data\nPIXI.Loader.shared\n    .add('skeleton', 'https://v2-pixijs.com/assets/pixi-dragonbones/eyetracking/shizuku_ske.json')\n    .add('texture_png_0', 'https://v2-pixijs.com/assets/pixi-dragonbones/eyetracking/texture_00.png')\n    .add('texture_png_1', 'https://v2-pixijs.com/assets/pixi-dragonbones/eyetracking/texture_01.png')\n    .add('texture_png_2', 'https://v2-pixijs.com/assets/pixi-dragonbones/eyetracking/texture_02.png')\n    .add('texture_png_3', 'https://v2-pixijs.com/assets/pixi-dragonbones/eyetracking/texture_03.png')\n    .load(onAssetsLoaded);\n\nfunction onAssetsLoaded(loader, res) {\n    const factory = dragonBones.PixiFactory.factory;\n\n    factory.parseDragonBonesData(res.skeleton.data, 'shizuku');\n    factory.updateTextureAtlases([res.texture_png_0.texture, res.texture_png_1.texture, res.texture_png_2.texture, res.texture_png_3.texture], 'shizuku');\n    armatureDisplay = factory.buildArmatureDisplay('shizuku', 'shizuku');\n    armatureDisplay.animation.play('idle_00');\n    armatureDisplay.x = 400.0;\n    armatureDisplay.y = 500.0;\n    armatureDisplay.scale.set(scale, scale);\n    app.stage.addChild(armatureDisplay);\n\n    app.stage.interactive = true;\n    app.stage.on('touchmove', touchHandler);\n    app.stage.on('mousemove', touchHandler);\n\n    PIXI.Ticker.shared.add(enterFrameHandler);\n\n    app.start();\n}\n\nfunction touchHandler(event) {\n    const x = event.data.global.x;\n    const y = event.data.global.y;\n\n    target.x += ((x - app.stage.x - armatureDisplay.x) / 0.4 - target.x) * 0.3;\n    target.y += ((y - app.stage.y - armatureDisplay.y) / scale - target.y) * 0.3;\n}\n\nfunction enterFrameHandler(deltaTime) {\n    const armature = armatureDisplay.armature;\n    const animation = armatureDisplay.animation;\n    const canvas = armature.armatureData.canvas;\n\n    let p = 0.0;\n    const pX = Math.max(Math.min((target.x - canvas.x) / (canvas.width * 0.5), 1.0), -1.0);\n    const pY = -Math.max(Math.min((target.y - canvas.y) / (canvas.height * 0.5), 1.0), -1.0);\n    for (const animationName of animationNames) {\n        if (animation.hasAnimation(animationName)) {\n            let animationState = animation.getState(animationName, 1);\n            if (!animationState) {\n                animationState = animation.fadeIn(animationName, 0.1, 1, 1, animationName);\n                if (animationState) {\n                    animationState.resetToPose = false;\n                    animationState.stop();\n                }\n            }\n\n            if (animationState) {\n                switch (animationName) {\n                    case 'PARAM_ANGLE_X':\n                    case 'PARAM_EYE_BALL_X':\n                        p = (pX + 1.0) * 0.5;\n                        break;\n\n                    case 'PARAM_ANGLE_Y':\n                    case 'PARAM_EYE_BALL_Y':\n                        p = (pY + 1.0) * 0.5;\n                        break;\n\n                    case 'PARAM_ANGLE_Z':\n                        p = (-pX * pY + 1.0) * 0.5;\n                        break;\n\n                    case 'PARAM_BODY_X':\n                    case 'PARAM_BODY_ANGLE_X':\n                        p = (pX + 1.0) * 0.5;\n                        break;\n\n                    case 'PARAM_BODY_Y':\n                    case 'PARAM_BODY_ANGLE_Y':\n                        p = (-pX * pY + 1.0) * 0.5;\n                        break;\n\n                    case 'PARAM_BODY_Z':\n                    case 'PARAM_BODY_ANGLE_Z':\n                        p = (-pX * pY + 1.0) * 0.5;\n                        break;\n\n                    case 'PARAM_BREATH':\n                        p = (Math.sin(armature.clock.time) + 1.0) * 0.5;\n                        break;\n\n                    default:\n                        break;\n                }\n\n                animationState.currentTime = p * animationState.totalTime;\n            }\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);