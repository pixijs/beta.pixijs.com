"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={hide_table_of_contents:!0},a="Video",p={unversionedId:"examples/sprite/video",id:"examples/sprite/video",title:"Video",description:"",source:"@site/docs/examples/sprite/video.md",sourceDirName:"examples/sprite",slug:"/examples/sprite/video",permalink:"/examples/sprite/video",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/sprite/video.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Tiling Sprite",permalink:"/examples/sprite/tiling-sprite"},next:{title:"Bitmap Text",permalink:"/examples/text/bitmap-text"}},s={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"video"},"Video"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"const app = new PIXI.Application<HTMLCanvasElement>({ backgroundAlpha: 0, resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// Create play button that can be used to trigger the video\nconst button = new PIXI.Graphics()\n    .beginFill(0x0, 0.5)\n    .drawRoundedRect(0, 0, 100, 100, 10)\n    .endFill()\n    .beginFill(0xffffff)\n    .moveTo(36, 30)\n    .lineTo(36, 70)\n    .lineTo(70, 50);\n\n// Position the button\nbutton.x = (app.screen.width - button.width) / 2;\nbutton.y = (app.screen.height - button.height) / 2;\n\n// Enable interactivity on the button\nbutton.interactive = true;\nbutton.cursor = 'pointer';\n\n// Add to the stage\napp.stage.addChild(button);\n\n// Listen for a click/tap event to start playing the video\n// this is useful for some mobile platforms. For example:\n// ios9 and under cannot render videos in PIXI without a\n// polyfill - https://github.com/bfred-it/iphone-inline-video\n// ios10 and above require a click/tap event to render videos\n// that contain audio in PIXI. Videos with no audio track do\n// not have this requirement\nbutton.on('pointertap', onPlayVideo);\n\nfunction onPlayVideo() {\n    // Don't need the button anymore\n    button.destroy();\n\n    // create a video texture from a path\n    const texture = PIXI.Texture.from('https://beta.pixijs.com/assets/video.mp4');\n\n    // create a new Sprite using the video texture (yes it's that easy)\n    const videoSprite = new PIXI.Sprite(texture);\n\n    // Stetch the fullscreen\n    videoSprite.width = app.screen.width;\n    videoSprite.height = app.screen.height;\n\n    app.stage.addChild(videoSprite);\n}\n")))}u.isMDXComponent=!0}}]);