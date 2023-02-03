"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[56915],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=p(r),u=a,h=l["".concat(c,".").concat(u)]||l[u]||m[u]||s;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71280:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={hide_table_of_contents:!0},o="Star Warp",i={unversionedId:"examples/demos-advanced/star-warp",id:"examples/demos-advanced/star-warp",title:"Star Warp",description:"",source:"@site/docs/examples/demos-advanced/star-warp.md",sourceDirName:"examples/demos-advanced",slug:"/examples/demos-advanced/star-warp",permalink:"/examples/demos-advanced/star-warp",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/demos-advanced/star-warp.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Mouse Trail",permalink:"/examples/demos-advanced/mouse-trail"},next:{title:"Screenshot",permalink:"/examples/demos-advanced/screenshot"}},c={},p=[],d={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"star-warp"},"Star Warp"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// Get the texture for star.\nconst starTexture = PIXI.Texture.from('https://v2-pixijs.com/assets/star.png');\n\nconst starAmount = 1000;\nlet cameraZ = 0;\nconst fov = 20;\nconst baseSpeed = 0.025;\nlet speed = 0;\nlet warpSpeed = 0;\nconst starStretch = 5;\nconst starBaseSize = 0.05;\n\n// Create the stars\nconst stars = [];\nfor (let i = 0; i < starAmount; i++) {\n    const star = {\n        sprite: new PIXI.Sprite(starTexture),\n        z: 0,\n        x: 0,\n        y: 0,\n    };\n    star.sprite.anchor.x = 0.5;\n    star.sprite.anchor.y = 0.7;\n    randomizeStar(star, true);\n    app.stage.addChild(star.sprite);\n    stars.push(star);\n}\n\nfunction randomizeStar(star, initial) {\n    star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;\n\n    // Calculate star positions with radial random coordinate so no star hits the camera.\n    const deg = Math.random() * Math.PI * 2;\n    const distance = Math.random() * 50 + 1;\n    star.x = Math.cos(deg) * distance;\n    star.y = Math.sin(deg) * distance;\n}\n\n// Change flight speed every 5 seconds\nsetInterval(() => {\n    warpSpeed = warpSpeed > 0 ? 0 : 1;\n}, 5000);\n\n// Listen for animate update\napp.ticker.add((delta) => {\n    // Simple easing. This should be changed to proper easing function when used for real.\n    speed += (warpSpeed - speed) / 20;\n    cameraZ += delta * 10 * (speed + baseSpeed);\n    for (let i = 0; i < starAmount; i++) {\n        const star = stars[i];\n        if (star.z < cameraZ) randomizeStar(star);\n\n        // Map star 3d position to 2d with really simple projection\n        const z = star.z - cameraZ;\n        star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;\n        star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;\n\n        // Calculate star scale & rotation.\n        const dxCenter = star.sprite.x - app.renderer.screen.width / 2;\n        const dyCenter = star.sprite.y - app.renderer.screen.height / 2;\n        const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);\n        const distanceScale = Math.max(0, (2000 - z) / 2000);\n        star.sprite.scale.x = distanceScale * starBaseSize;\n        // Star is looking towards center so that y axis is towards center.\n        // Scale the star depending on how fast we are moving, what the stretchfactor is and depending on how far away it is from the center.\n        star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;\n        star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;\n    }\n});\n")))}l.isMDXComponent=!0}}]);