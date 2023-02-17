"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[1772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,c=d["".concat(s,".").concat(k)]||d[k]||m[k]||l;return n?r.createElement(c,o(o({ref:t},u),{},{components:n})):r.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},26105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={id:"PIXI.EventSystem.pixi_events",title:"Class: PIXI.EventSystem",sidebar_label:"PIXI.EventSystem",custom_edit_url:null},o=void 0,i={unversionedId:"api/classes/PIXI.EventSystem.pixi_events",id:"api/classes/PIXI.EventSystem.pixi_events",title:"Class: PIXI.EventSystem",description:"@pixi/events.EventSystem",source:"@site/docs/api/classes/PIXI.EventSystem.pixi_events.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.EventSystem.pixi_events",permalink:"/api/classes/PIXI.EventSystem.pixi_events",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.EventSystem.pixi_events",title:"Class: PIXI.EventSystem",sidebar_label:"PIXI.EventSystem",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.EventBoundary",permalink:"/api/classes/PIXI.EventBoundary.pixi_events"},next:{title:"PIXI.EventsTickerClass",permalink:"/api/classes/PIXI.EventsTickerClass.pixi_events"}},s={},p=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"defaultEventMode",id:"defaulteventmode",level:3},{value:"autoPreventDefault",id:"autopreventdefault",level:3},{value:"cursorStyles",id:"cursorstyles",level:3},{value:"domElement",id:"domelement",level:3},{value:"renderer",id:"renderer",level:3},{value:"resolution",id:"resolution",level:3},{value:"rootBoundary",id:"rootboundary",level:3},{value:"supportsPointerEvents",id:"supportspointerevents",level:3},{value:"supportsTouchEvents",id:"supportstouchevents",level:3},{value:"Methods",id:"methods",level:2},{value:"destroy",id:"destroy",level:3},{value:"mapPositionToPoint",id:"mappositiontopoint",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"setCursor",id:"setcursor",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"setTargetElement",id:"settargetelement",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"normalizeWheelEvent",id:"normalizewheelevent",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Returns:",id:"returns",level:4},{value:"onWheel",id:"onwheel",level:3},{value:"Parameters:",id:"parameters-5",level:4}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"package-name"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_events"},"@pixi/events"),".EventSystem")),(0,a.kt)("p",null,"The system for handling UI events."),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"constructor"},"Constructor:"),(0,a.kt)("h4",null,(0,a.kt)("code",null,"new PIXI.EventSystem(renderer: PIXI.Renderer) ")),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"renderer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"PIXI.Renderer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:null}))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"defaulteventmode"},"defaultEventMode"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"PIXI.EventMode")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The default interaction mode for all display objects.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"autopreventdefault"},"autoPreventDefault"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,a.kt)("code",null,"true")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Should default browser actions automatically be prevented. Does not apply to pointer events for backwards compatibility preventDefault on pointer events stops mouse events from firing Thus, for every pointer event, there will always be either a mouse of touch event alongside it.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"cursorstyles"},"cursorStyles"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"Record","<","string, string ","|"," ((mode",":"," string) =",">"," void) ","|"," CSSStyleDeclaration",">")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Dictionary of how different cursor modes are handled. Strings are handled as CSS cursor values, objects are handled as dictionaries of CSS values for ",(0,a.kt)("inlineCode",{parentName:"p"},"domElement"),", and functions are called instead of changing the CSS. Default CSS cursor values are provided for 'default' and 'pointer' modes.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"domelement"},"domElement"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"HTMLElement")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,a.kt)("code",null,"undefined")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The DOM element to which the root event listeners are bound. This is automatically set to the renderer's ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.Renderer.pixi_core#view"},"view"),".")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"renderer"},"renderer"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"IRenderer")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The renderer managing this ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.EventSystem.pixi_events"},"PIXI.EventSystem"),".")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"resolution"},"resolution"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,a.kt)("code",null,"1")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The resolution used to convert between the DOM client space into world space.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"rootboundary"},"rootBoundary"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"EventBoundary")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.EventBoundary.pixi_events"},"PIXI.EventBoundary")," for the stage.\nThe ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.EventBoundary.pixi_events#rootTarget"},"rootTarget")," of this root boundary is automatically set to the last rendered object before any event processing is initiated. This means the main scene needs to be rendered atleast once before UI events will start propagating."),(0,a.kt)("p",null,"The root boundary should only be changed during initialization. Otherwise, any state held by the event boundary may be lost (like hovered & pressed DisplayObjects).")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"supportspointerevents"},"supportsPointerEvents"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"unknown")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,a.kt)("code",null,"--")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Does the device support pointer events https",":","//",(0,a.kt)("a",{parentName:"p",href:"http://www.w3.org/Submission/pointer-events/"},"www.w3.org/Submission/pointer-events/"))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"supportstouchevents"},"supportsTouchEvents"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"unknown")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Does the device support touch events https",":","//",(0,a.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/touch-events/"},"www.w3.org/TR/touch-events/"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"destroy"},"destroy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"() -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Destroys all event listeners and detaches the renderer.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"mappositiontopoint"},"mapPositionToPoint"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(point",":"," PIXI.IPointData, x",":"," number, y",":"," number) -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Maps x and y coords from a DOM object and maps them correctly to the PixiJS view. The resulting value is stored in the point. This takes into account the fact that the DOM element could be scaled and positioned anywhere on the screen."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"point"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"PIXI.IPointData")),(0,a.kt)("td",{parentName:"tr",align:null},"the point that the result will be stored in")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"the x coord of the position to map")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"the y coord of the position to map"))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"setcursor"},"setCursor"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(mode",":"," string) -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Sets the current cursor mode, handling any callbacks or CSS style changes."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"cursor mode, a key from the cursorStyles dictionary"))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"settargetelement"},"setTargetElement"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(element",":"," HTMLElement) -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Sets the ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.EventSystem.pixi_events#domElement"},"domElement")," and binds event listeners.\nTo deregister the current DOM element without setting a new one, pass ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"element"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"HTMLElement")),(0,a.kt)("td",{parentName:"tr",align:null},"The new DOM element."))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"normalizewheelevent"},"normalizeWheelEvent"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(nativeEvent",":"," WheelEvent) -",">"," FederatedWheelEvent")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Normalizes the native ",(0,a.kt)("a",{parentName:"p",href:"https://w3c.github.io/uievents/#interface-wheelevent"},"WheelEvent"),".\nThe returned ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.FederatedWheelEvent.pixi_events"},"PIXI.FederatedWheelEvent")," is a shared instance. It will not persist across multiple native wheel events."),(0,a.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nativeEvent"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"WheelEvent")),(0,a.kt)("td",{parentName:"tr",align:null},"The native wheel event that occurred on the canvas.")))),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"FederatedWheelEvent")),(0,a.kt)("td",{parentName:"tr",align:null},"A federated wheel event."))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"onwheel"},"onWheel"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(nativeEvent",":"," WheelEvent) -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Passive handler for ",(0,a.kt)("inlineCode",{parentName:"p"},"wheel")," events on ",(0,a.kt)("a",{parentName:"p",href:"../classes/PIXI.EventSystem.pixi_events#domElement"},"this.domElement"),"."),(0,a.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nativeEvent"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"WheelEvent")),(0,a.kt)("td",{parentName:"tr",align:null},"The native wheel event."))))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);