"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[66749],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>g});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?t.createElement(g,i(i({ref:n},c),{},{components:r})):t.createElement(g,i({ref:n},c))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},31388:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=r(87462),a=(r(67294),r(3905));const o={hide_table_of_contents:!0},i="Sharing Shader",s={unversionedId:"examples/mesh-and-shaders/shared-shader",id:"examples/mesh-and-shaders/shared-shader",title:"Sharing Shader",description:"",source:"@site/docs/examples/mesh-and-shaders/shared-shader.md",sourceDirName:"examples/mesh-and-shaders",slug:"/examples/mesh-and-shaders/shared-shader",permalink:"/examples/mesh-and-shaders/shared-shader",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/mesh-and-shaders/shared-shader.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Sharing Geometry",permalink:"/examples/mesh-and-shaders/sharing-geometry"},next:{title:"Merging Geometry",permalink:"/examples/mesh-and-shaders/merging-geometry"}},l={},p=[],c={toc:p};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sharing-shader"},"Sharing Shader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ resizeTo: window });\ndocument.body.appendChild(app.view);\n\nconst geometry = new PIXI.Geometry()\n    .addAttribute('aVertexPosition', // the attribute name\n        [-100, -100, // x, y\n            100, -100, // x, y\n            100, 100]) // x, y\n\n    .addAttribute('aUvs', // the attribute name\n        [0, 0, // u, v\n            1, 0, // u, v\n            1, 1]); // u, v\n\nconst shader = PIXI.Shader.from(`\n\n    precision mediump float;\n\n    attribute vec2 aVertexPosition;\n    attribute vec2 aUvs;\n\n    uniform mat3 translationMatrix;\n    uniform mat3 projectionMatrix;\n\n    varying vec2 vUvs;\n\n    void main() {\n\n        vUvs = aUvs;\n        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    }`,\n\n`precision mediump float;\n\n    varying vec2 vUvs;\n\n    uniform sampler2D uSampler2;\n\n    void main() {\n\n        gl_FragColor = texture2D(uSampler2, vUvs);\n    }\n\n`,\n{\n    uSampler2: PIXI.Texture.from('https://v2-pixijs.com/assets/bg_scene_rotate.jpg'),\n});\n\nconst shader2 = PIXI.Shader.from(`\n\n    precision mediump float;\n\n    attribute vec2 aVertexPosition;\n    attribute vec2 aUvs;\n\n    uniform mat3 translationMatrix;\n    uniform mat3 projectionMatrix;\n\n    varying vec2 vUvs;\n\n    void main() {\n\n        vUvs = aUvs;\n        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    }`,\n\n`precision mediump float;\n\n    varying vec2 vUvs;\n\n    uniform sampler2D uSampler2;\n\n    void main() {\n\n        gl_FragColor = texture2D(uSampler2, vUvs);\n        gl_FragColor.r += (abs(sin(gl_FragCoord.x * 0.06)) * 0.5) * 2.;\n        gl_FragColor.g += (abs(cos(gl_FragCoord.y * 0.06)) * 0.5) * 2.;\n    }\n\n`,\n{\n    uSampler2: PIXI.Texture.from('https://v2-pixijs.com/assets/bg_scene_rotate.jpg'),\n});\n\nconst triangle = new PIXI.Mesh(geometry, shader);\n\nconst triangle2 = new PIXI.Mesh(geometry, shader2);\n\ntriangle.position.set(400, 300);\ntriangle.scale.set(2);\n\ntriangle2.position.set(500, 400);\ntriangle2.scale.set(3);\n\napp.stage.addChild(triangle2, triangle);\n\napp.ticker.add((delta) => {\n    triangle.rotation += 0.01;\n    triangle2.rotation -= 0.005;\n});\n")))}m.isMDXComponent=!0}}]);