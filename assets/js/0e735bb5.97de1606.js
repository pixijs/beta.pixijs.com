"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[7136],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>m});var a=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},s=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=d(l),c=n,m=p["".concat(i,".").concat(c)]||p[c]||k[c]||r;return l?a.createElement(m,o(o({ref:t},s),{},{components:l})):a.createElement(m,o({ref:t},s))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,o=new Array(r);o[0]=c;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:n,o[1]=u;for(var d=2;d<r;d++)o[d]=l[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}c.displayName="MDXCreateElement"},28608:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var a=l(87462),n=(l(67294),l(3905));const r={id:"PIXI.StateSystem.pixi_core",title:"Class: PIXI.StateSystem",sidebar_label:"PIXI.StateSystem",custom_edit_url:null},o=void 0,u={unversionedId:"api/classes/PIXI.StateSystem.pixi_core",id:"api/classes/PIXI.StateSystem.pixi_core",title:"Class: PIXI.StateSystem",description:"@pixi/core.StateSystem",source:"@site/docs/api/classes/PIXI.StateSystem.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.StateSystem.pixi_core",permalink:"/api/classes/PIXI.StateSystem.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.StateSystem.pixi_core",title:"Class: PIXI.StateSystem",sidebar_label:"PIXI.StateSystem",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.State",permalink:"/api/classes/PIXI.State.pixi_core"},next:{title:"PIXI.StencilSystem",permalink:"/api/classes/PIXI.StencilSystem.pixi_core"}},i={},d=[{value:"new PIXI()",id:"new-pixi",level:3},{value:"Members",id:"members",level:2},{value:"blendMode: <span><code>BLEND_MODES</code></span>",id:"blendmode-blend_modes",level:3},{value:"polygonOffset: <span><code>number</code></span>",id:"polygonoffset-number",level:3},{value:"stateId: <span><code>number</code></span>",id:"stateid-number",level:3},{value:"_blendEq: <span><code>boolean</code></span>",id:"_blendeq-boolean",level:3},{value:"checks: <span><code>Array&lt;Function&gt;</code></span>",id:"checks-arrayfunction",level:3},{value:"defaultState: <span><code>State</code></span>",id:"defaultstate-state",level:3},{value:"gl: <span><code>WebGLRenderingContext</code></span>",id:"gl-webglrenderingcontext",level:3},{value:"map: <span><code>Array&lt;Function&gt;</code></span>",id:"map-arrayfunction",level:3},{value:"Methods",id:"methods",level:2},{value:"forceState: <span><code>(state: unknown) -&gt; void</code></span>",id:"forcestate-state-unknown---void",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"reset: <span><code>() -&gt; void</code></span>",id:"reset----void",level:3},{value:"set: <span><code>(state: unknown) -&gt; void</code></span>",id:"set-state-unknown---void",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"setBlend: <span><code>(value: boolean) -&gt; void</code></span>",id:"setblend-value-boolean---void",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"setBlendMode: <span><code>(value: number) -&gt; void</code></span>",id:"setblendmode-value-number---void",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"setCullFace: <span><code>(value: boolean) -&gt; void</code></span>",id:"setcullface-value-boolean---void",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"setDepthMask: <span><code>(value: boolean) -&gt; void</code></span>",id:"setdepthmask-value-boolean---void",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"setDepthTest: <span><code>(value: boolean) -&gt; void</code></span>",id:"setdepthtest-value-boolean---void",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"setFrontFace: <span><code>(value: boolean) -&gt; void</code></span>",id:"setfrontface-value-boolean---void",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"setOffset: <span><code>(value: boolean) -&gt; void</code></span>",id:"setoffset-value-boolean---void",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"setPolygonOffset: <span><code>(value: number, scale: number) -&gt; void</code></span>",id:"setpolygonoffset-value-number-scale-number---void",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"updateCheck: <span><code>(func: (system: this, state: State) =&gt; void, value: boolean) -&gt; void</code></span>",id:"updatecheck-func-system-this-state-state--void-value-boolean---void",level:3},{value:"Parameters:",id:"parameters-10",level:4}],s={toc:d};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".StateSystem"),(0,n.kt)("p",null,"System plugin to the renderer to manage WebGL state machines."),(0,n.kt)("p",null,"// TODO: @see"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"new-pixi"},"new PIXI()")),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"blendmode-blend_modes"},"blendMode: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"BLEND_MODES"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,n.kt)("code",null,"PIXI.BLEND_MODES.NONE"))),(0,n.kt)("p",null,"Blend mode")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"polygonoffset-number"},"polygonOffset: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"number"))),(0,n.kt)("p",null,"Polygon offset")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"stateid-number"},"stateId: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"number"))),(0,n.kt)("p",null,"State ID")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"_blendeq-boolean"},"_blendEq: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"boolean"))),(0,n.kt)("p",null,"Whether current blend equation is different")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"checks-arrayfunction"},"checks: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"Array","<","Function",">"))),(0,n.kt)("p",null,"Collection of check calls")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"defaultstate-state"},"defaultState: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"State"))),(0,n.kt)("p",null,"Default WebGL State")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"gl-webglrenderingcontext"},"gl: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"WebGLRenderingContext"))),(0,n.kt)("p",null,"GL context")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"map-arrayfunction"},"map: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"Array","<","Function",">"))),(0,n.kt)("p",null,"Collection of calls")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"forcestate-state-unknown---void"},"forceState: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(state",":"," unknown) -",">"," void"))),(0,n.kt)("p",null,"Sets the state, when previous state is unknown."),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"state"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"unknown")),(0,n.kt)("td",{parentName:"tr",align:null},"The state to set"))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"reset----void"},"reset: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"() -",">"," void"))),(0,n.kt)("p",null,"Resets all the logic and disables the VAOs.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"set-state-unknown---void"},"set: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(state",":"," unknown) -",">"," void"))),(0,n.kt)("p",null,"Sets the current state"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"state"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"unknown")),(0,n.kt)("td",{parentName:"tr",align:null},"The state to set."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"setblend-value-boolean---void"},"setBlend: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(value",":"," boolean) -",">"," void"))),(0,n.kt)("p",null,"Sets whether to enable or disable blending."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"Turn on or off WebGl blending."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"setblendmode-value-number---void"},"setBlendMode: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(value",":"," number) -",">"," void"))),(0,n.kt)("p",null,"Sets the blend mode."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"The blend mode to set to."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"setcullface-value-boolean---void"},"setCullFace: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(value",":"," boolean) -",">"," void"))),(0,n.kt)("p",null,"Sets whether to enable or disable cull face."),(0,n.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"Turn on or off webgl cull face."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"setdepthmask-value-boolean---void"},"setDepthMask: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(value",":"," boolean) -",">"," void"))),(0,n.kt)("p",null,"Sets whether to enable or disable depth mask."),(0,n.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"Turn on or off webgl depth mask."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"setdepthtest-value-boolean---void"},"setDepthTest: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(value",":"," boolean) -",">"," void"))),(0,n.kt)("p",null,"Sets whether to enable or disable depth test."),(0,n.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"Turn on or off webgl depth testing."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"setfrontface-value-boolean---void"},"setFrontFace: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(value",":"," boolean) -",">"," void"))),(0,n.kt)("p",null,"Sets the gl front face."),(0,n.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"true is clockwise and false is counter-clockwise"))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"setoffset-value-boolean---void"},"setOffset: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(value",":"," boolean) -",">"," void"))),(0,n.kt)("p",null,"Sets whether to enable or disable polygon offset fill."),(0,n.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"Turn on or off webgl polygon offset testing."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"setpolygonoffset-value-number-scale-number---void"},"setPolygonOffset: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(value",":"," number, scale",":"," number) -",">"," void"))),(0,n.kt)("p",null,"Sets the polygon offset."),(0,n.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the polygon offset")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"scale"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the polygon offset scale"))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"updatecheck-func-system-this-state-state--void-value-boolean---void"},"updateCheck: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(func",":"," (system",":"," this, state",":"," State) =",">"," void, value",":"," boolean) -",">"," void"))),(0,n.kt)("p",null,"Checks to see which updates should be checked based on which settings have been activated.\nFor example, if blend is enabled then we should check the blend modes each time the state is changed or if polygon fill is activated then we need to check if the polygon offset changes. The idea is that we only check what we have too."),(0,n.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"func"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"(system",":"," this, state",":"," State) =",">"," void")),(0,n.kt)("td",{parentName:"tr",align:null},"the checking function to add or remove")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"should the check function be added or removed."))))),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);