"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[53237],{77496:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var i=a(67294),n=a(52263),l=a(334),s=a(86010);const r="heroBackground_QArt",o="heroBanner_pQnV",c="heroLogo_EYQj";var d=a(39960);const p="button_sPMG",m="buttonShadow_o7NZ",u="outline_NKzY",g="white_flyO";function h(e){let t=p;return e.white&&(t+=` ${g}`),e.outline&&(t+=` ${u}`),i.createElement(d.Z,{className:t,to:e.link},i.createElement("div",{className:m},i.createElement("div",null)),i.createElement("span",null,e.label),i.createElement("svg",{className:"next",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 23 14",xmlSpace:"preserve"},i.createElement("line",{x1:"22",y1:"7",x2:"16",y2:"1"}),i.createElement("line",{x1:"22",y1:"7",x2:"16",y2:"13"}),i.createElement("line",{x1:"0",y1:"7",x2:"23",y2:"7"})))}function f(){return i.createElement("header",{className:(0,s.Z)("hero hero--dark",o)},i.createElement("iframe",{className:r,src:"https://pixijs.com/header/index.html"}),i.createElement("div",{className:"container"},i.createElement("img",{className:c,src:"/images/logo.svg",alt:""}),i.createElement("h1",{className:"hero__subtitle"},"The HTML5 Creation Engine"),i.createElement("h4",{className:"hero__subsubtitle"},"Create beautiful digital content with the fastest, most flexible 2D WebGL renderer."),i.createElement("div",{className:"buttonRow"},i.createElement(h,{label:"Download",link:"https://github.com/pixijs/pixijs/releases"}),"\xa0",i.createElement(h,{label:"Get Started",link:"/tutorial",white:!0,outline:!0}))))}const x="testimonialsSection_PtYd",v="carouselText_jMN2",b="carouselWrapper_fl0O",y="carousel_ikfF",E="carouselItem_GpMR";function w(){const e=["adobe","20th_century_fox","barclays","bbc","bose","cartoon_network","disney","google","hbo","hm","lego","lucasfilm","marvel","mcdonalds","orange","pbs","rayban","redbull","spotify","steam","tedx","toyota","ubisoft","volkswagen","youtube"];return i.createElement("div",{className:`${x} padding-vert--lg`},i.createElement("p",{className:v},"A mature solution for hundreds of global brands"),i.createElement("div",{style:{"--carousel-amount":e.length},className:b},i.createElement("div",{className:`col col--12 ${y}`},[...e,...e].map(((e,t)=>i.createElement("div",{key:t,className:E},i.createElement("img",{src:`/images/brand-logos/${e}.png`})))))))}const N="highlights_dgss",k="devices_MMUi",_=JSON.parse('[{"heading":"Fast","description":"PixiJS\' strength is speed. When it comes to 2D rendering, PixiJS is the fastest there is."},{"heading":"Flexible","description":"Friendly, feature-rich API lets PixiJS take care of the fundamentals whilst you focus on producing incredible multiplatform experiences."},{"heading":"Free","description":"PixiJS is and always will be Open Source, with a large and supportive community pushing its growth and evolution."}]'),S=JSON.parse('{"U":"/images/devices/device-background.png","H":[{"img":"/images/devices/device-desktop.png","alt":"Desktop","styles":{"left":"50%","width":"386px","top":0,"zIndex":1,"marginLeft":"-193px"},"canvas":{"left":"19px","top":"28px","width":"348px","height":"198px"}},{"img":"/images/devices/device-ipad.png","alt":"iPad","styles":{"left":"60.79%","width":"155px","top":"138px","zIndex":2},"canvas":{"left":"17px","top":"16px","width":"124px","height":"164px"}},{"img":"/images/devices/device-iphone.png","alt":"iPhone","styles":{"left":"75.35%","width":"92px","top":"177px","zIndex":3},"canvas":{"left":"10px","top":"18px","width":"72px","height":"126px"}},{"img":"/images/devices/device-phone.png","alt":"Phone","styles":{"width":"170px","right":0,"bottom":0,"zIndex":4},"canvas":{"left":"20px","top":"9px","width":"132px","height":"80px"}},{"img":"/images/devices/device-laptop.png","alt":"Laptop","styles":{"left":"6.16%","width":"355px","top":"127px","zIndex":2},"canvas":{"left":"46px","top":"16px","width":"264px","height":"166px"}},{"img":"/images/devices/device-tablet.png","alt":"Tablet","styles":{"left":0,"width":"195px","bottom":0,"zIndex":4},"canvas":{"left":"17px","top":"15px","width":"160px","height":"95px"}}]}');function P(){return i.createElement("div",{className:`padding-vert--lg ${N}`},i.createElement("div",{className:"container flex"},_.map(((e,t)=>i.createElement("div",{key:t,className:"col col--4 padding-vert--md"},i.createElement("span",null,`0${t+1}`),i.createElement("h2",{className:"underline"},e.heading),i.createElement("p",null,e.description))))),i.createElement("div",{className:k},S.H.map(((e,t)=>i.createElement("div",{key:t,style:{position:"absolute",...e.styles}},i.createElement("img",{src:e.img,alt:e.alt}),i.createElement("canvas",{style:{position:"absolute",background:`#ecedf1 url(${S.U}) center center`,border:"1px solid #b1b8c4",...e.canvas}}))))))}const A="wrapper_BtuJ",T="title_xi1R",$="features_wn1h",I="feature_N9w0",J=JSON.parse('[{"icon":"/images/features/feature-multiplatform.png","heading":"Multi-platform Support","description":"Interactive, visually compelling content on desktop, mobile and beyond, all reached with a single codebase to deliver transferable experiences."},{"icon":"/images/features/feature-type.png","heading":"Advanced Text Rendering","description":"Beautiful anti-aliased text at native and retina resolutions means that Pixi copy is as easy on the eye as it is on any other delivery method."},{"icon":"/images/features/feature-tinting-blending.png","heading":"Tinting & Blending Modes","description":"Designers and clients will be thrilled by Photoshop quality blending and colour modes."},{"icon":"/images/features/feature-scenegraph.png","heading":"Full Scene Graph","description":"Organise your objects in hierarchical trees, with parent-child relationships."},{"icon":"/images/features/feature-sprite-sheet.png","heading":"Sprite Sheet Support","description":"PixiJS caters for a range of sprite sheet formats and includes advanced support for features like trimming and rotational packing."},{"icon":"/images/features/feature-canvas.png","heading":"Renderer Auto-detect","description":"Certain, older platforms may not be able to use WebGL. Not a problem with PixiJS as Canvas fallback is seamless and automated."},{"icon":"/images/features/feature-asset-loader.png","heading":"Asset Loader","description":"Sprite-sheets, graphics, fonts, animation data (soon to have Adobe Animate support). All your incoming assets can be loaded and handled by PixiJS."},{"icon":"/images/features/feature-apps.png","heading":"Deploy into Apps","description":"Use technologies such as Cordova to rapidly deploy your Pixi project as an App. Superb for both concepting and full delivery."},{"icon":"/images/features/feature-api.png","heading":"Easy API","description":"Designed to be intuitive and easy to pick up. Developers old and new will find themselves right at home with its simple yet powerful API."},{"icon":"/images/features/feature-accessibility.png","heading":"Accessibility","description":"PixiJS is an inclusive technology and all content can be made to be screen reader accessible with ease. The only WebGL renderer out there that does."},{"icon":"/images/features/feature-filters.png","heading":"WebGL Filters","description":"Use and create your own spectacular WebGL filters and shaders to give your projects next-level visual fidelity and performance."},{"icon":"/images/features/feature-multitouch.png","heading":"Multi-touch Interactivity","description":"True multi-touch input and tracking means that you can create interactions such as pinch-to-scale that give audiences native feeling experiences."}]');function L(){return i.createElement("div",{className:`${A} padding--md padding-vert--xl`},i.createElement("div",{className:"col col--12 margin-bottom--lg"},i.createElement("h2",{className:`${T} underline`},"PixiJS Features")),i.createElement("div",{className:`row ${$}`},J.map(((e,t)=>i.createElement("div",{key:t,className:`${I} col col--6`},i.createElement("img",{src:e.icon}),i.createElement("div",null,i.createElement("h6",null,e.heading),i.createElement("p",null,e.description)))))))}const M="closing_TUKb";function j(){return i.createElement("div",{className:`${M} padding-vert--xl`},i.createElement("div",null,i.createElement("h3",null,"Elevate your Traditional HTML5 Techniques"),i.createElement("h5",null,"Unbeatable performance, intuitive API, globally used and battle\xadtested."),i.createElement("div",{className:"buttonRow"},i.createElement(h,{label:"Download",link:"https://github.com/pixijs/pixijs/releases"}),"\xa0",i.createElement(h,{label:"Get Started",link:"/tutorial",outline:!0}))))}function D(){const{siteConfig:e}=(0,n.Z)();return i.createElement(l.Z,{title:`${e.title} | The HTML5 Creation Engine`,description:"Description will go into a meta tag in <head />"},i.createElement("main",null,i.createElement("div",{className:"text--center"},i.createElement(f,null),i.createElement(w,null),i.createElement(P,null),i.createElement(L,null),i.createElement(j,null))))}function G(){return i.createElement(D,null)}}}]);