"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5929],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>s});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),k=o(a),c=l,s=k["".concat(p,".").concat(c)]||k[c]||m[c]||r;return a?n.createElement(s,i(i({ref:e},d),{},{components:a})):n.createElement(s,i({ref:e},d))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=c;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u[k]="string"==typeof t?t:l,i[1]=u;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45867:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var n=a(87462),l=(a(67294),a(3905));const r={id:"PIXI.Rectangle.pixi_math",title:"Class: PIXI.Rectangle",sidebar_label:"PIXI.Rectangle",custom_edit_url:null},i=void 0,u={unversionedId:"api/classes/PIXI.Rectangle.pixi_math",id:"api/classes/PIXI.Rectangle.pixi_math",title:"Class: PIXI.Rectangle",description:"@pixi/math.Rectangle",source:"@site/docs/api/classes/PIXI.Rectangle.pixi_math.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.Rectangle.pixi_math",permalink:"/api/classes/PIXI.Rectangle.pixi_math",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.Rectangle.pixi_math",title:"Class: PIXI.Rectangle",sidebar_label:"PIXI.Rectangle",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.QuadUv",permalink:"/api/classes/PIXI.QuadUv.pixi_core"},next:{title:"PIXI.RenderTexture",permalink:"/api/classes/PIXI.RenderTexture.pixi_core"}},p={},o=[{value:"new PIXI.Rectangle: <span><code>(x: string | number, y: string | number, width: string | number, height: string | number) </code></span>",id:"new-pixirectangle-x-string--number-y-string--number-width-string--number-height-string--number-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"EMPTY: <span><code>Rectangle</code></span>",id:"empty-rectangle",level:3},{value:"bottom: <span><code>number</code></span>",id:"bottom-number",level:3},{value:"height: <span><code>number</code></span>",id:"height-number",level:3},{value:"left: <span><code>number</code></span>",id:"left-number",level:3},{value:"right: <span><code>number</code></span>",id:"right-number",level:3},{value:"top: <span><code>number</code></span>",id:"top-number",level:3},{value:"type: <span><code>SHAPES.RECT</code></span>",id:"type-shapesrect",level:3},{value:"width: <span><code>number</code></span>",id:"width-number",level:3},{value:"x: <span><code>number</code></span>",id:"x-number",level:3},{value:"y: <span><code>number</code></span>",id:"y-number",level:3},{value:"Methods",id:"methods",level:2},{value:"ceil: <span><code>(resolution: number, eps: number) -&gt; this</code></span>",id:"ceil-resolution-number-eps-number---this",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"clone: <span><code>() -&gt; Rectangle</code></span>",id:"clone----rectangle",level:3},{value:"Returns:",id:"returns-1",level:4},{value:"contains: <span><code>(x: number, y: number) -&gt; boolean</code></span>",id:"contains-x-number-y-number---boolean",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-2",level:4},{value:"containsRect: <span><code>(other: Rectangle) -&gt; boolean</code></span>",id:"containsrect-other-rectangle---boolean",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Returns:",id:"returns-3",level:4},{value:"copyFrom: <span><code>(rectangle: Rectangle) -&gt; Rectangle</code></span>",id:"copyfrom-rectangle-rectangle---rectangle",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Returns:",id:"returns-4",level:4},{value:"copyTo: <span><code>(rectangle: Rectangle) -&gt; Rectangle</code></span>",id:"copyto-rectangle-rectangle---rectangle",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"Returns:",id:"returns-5",level:4},{value:"enlarge: <span><code>(rectangle: Rectangle) -&gt; this</code></span>",id:"enlarge-rectangle-rectangle---this",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"Returns:",id:"returns-6",level:4},{value:"equals: <span><code>(other: Rectangle) -&gt; boolean</code></span>",id:"equals-other-rectangle---boolean",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"Returns:",id:"returns-7",level:4},{value:"fit: <span><code>(rectangle: Rectangle) -&gt; this</code></span>",id:"fit-rectangle-rectangle---this",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"Returns:",id:"returns-8",level:4},{value:"intersection: <span><code>(other: Rectangle, outRect: Rectangle) -&gt; Rectangle</code></span>",id:"intersection-other-rectangle-outrect-rectangle---rectangle",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"Returns:",id:"returns-9",level:4},{value:"intersects: <span><code>(other: Rectangle, transform: Matrix) -&gt; boolean</code></span>",id:"intersects-other-rectangle-transform-matrix---boolean",level:3},{value:"Parameters:",id:"parameters-10",level:4},{value:"Returns:",id:"returns-10",level:4},{value:"pad: <span><code>(paddingX: number, paddingY: ) -&gt; this</code></span>",id:"pad-paddingx-number-paddingy----this",level:3},{value:"Parameters:",id:"parameters-11",level:4},{value:"Returns:",id:"returns-11",level:4},{value:"union: <span><code>(other: Rectangle, outRect: Rectangle) -&gt; Rectangle</code></span>",id:"union-other-rectangle-outrect-rectangle---rectangle",level:3},{value:"Parameters:",id:"parameters-12",level:4},{value:"Returns:",id:"returns-12",level:4}],d={toc:o};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/pixi_math"},"@pixi/math"),".Rectangle"),(0,l.kt)("p",null,"Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and by its width and its height."),(0,l.kt)("p",null,"// TODO: @see"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"new-pixirectangle-x-string--number-y-string--number-width-string--number-height-string--number-"},"new PIXI.Rectangle: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(x",":"," string ","|"," number, y",":"," string ","|"," number, width",":"," string ","|"," number, height",":"," string ","|"," number) "))),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string ","|"," number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{parentName:"tr",align:null},"The X coordinate of the upper-left corner of the rectangle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string ","|"," number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{parentName:"tr",align:null},"The Y coordinate of the upper-left corner of the rectangle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string ","|"," number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{parentName:"tr",align:null},"The overall width of the rectangle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string ","|"," number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{parentName:"tr",align:null},"The overall height of the rectangle"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"empty-rectangle"},"EMPTY: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"Rectangle"))),(0,l.kt)("p",null,"A constant empty rectangle.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"bottom-number"},"bottom: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"Returns the bottom edge of the rectangle.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"height-number"},"height: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"0")))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"left-number"},"left: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"Returns the left edge of the rectangle.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"right-number"},"right: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"Returns the right edge of the rectangle.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"top-number"},"top: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("p",null,"Returns the top edge of the rectangle.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"type-shapesrect"},"type: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"SHAPES.RECT"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"PIXI.SHAPES.RECT"))),(0,l.kt)("p",null,"The type of the object, mainly used to avoid ",(0,l.kt)("inlineCode",{parentName:"p"},"instanceof")," checks")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"width-number"},"width: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"0")))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"x-number"},"x: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"0")))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"y-number"},"y: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"0")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"ceil-resolution-number-eps-number---this"},"ceil: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(resolution",":"," number, eps",":"," number) -",">"," this"))),(0,l.kt)("p",null,"Enlarges rectangle that way its corners lie on grid"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resolution"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"resolution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eps"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"precision")))),(0,l.kt)("h4",{id:"returns"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"this")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns itself."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"clone----rectangle"},"clone: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"() -",">"," Rectangle"))),(0,l.kt)("p",null,"Creates a clone of this Rectangle"),(0,l.kt)("h4",{id:"returns-1"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"a copy of the rectangle"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"contains-x-number-y-number---boolean"},"contains: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(x",":"," number, y",":"," number) -",">"," boolean"))),(0,l.kt)("p",null,"Checks whether the x and y coordinates given are contained within this Rectangle"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The X coordinate of the point to test")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The Y coordinate of the point to test")))),(0,l.kt)("h4",{id:"returns-2"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the x/y coordinates are within this Rectangle"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"containsrect-other-rectangle---boolean"},"containsRect: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(other",":"," Rectangle) -",">"," boolean"))),(0,l.kt)("p",null,"Determines whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"other")," Rectangle is contained within ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," Rectangle object. Rectangles that occupy the same space are considered to be containing each other. Rectangles without area (width or height equal to zero) can't contain anything, not even other arealess rectangles."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"other"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"The Rectangle to fit inside ",(0,l.kt)("inlineCode",{parentName:"td"},"this"),".")))),(0,l.kt)("h4",{id:"returns-3"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A value of ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if ",(0,l.kt)("inlineCode",{parentName:"td"},"this")," Rectangle contains ",(0,l.kt)("inlineCode",{parentName:"td"},"other"),"; otherwise ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),"."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"copyfrom-rectangle-rectangle---rectangle"},"copyFrom: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(rectangle",":"," Rectangle) -",">"," Rectangle"))),(0,l.kt)("p",null,"Copies another rectangle to this one."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rectangle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"The rectangle to copy from.")))),(0,l.kt)("h4",{id:"returns-4"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns itself."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"copyto-rectangle-rectangle---rectangle"},"copyTo: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(rectangle",":"," Rectangle) -",">"," Rectangle"))),(0,l.kt)("p",null,"Copies this rectangle to another one."),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rectangle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"The rectangle to copy to.")))),(0,l.kt)("h4",{id:"returns-5"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns given parameter."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"enlarge-rectangle-rectangle---this"},"enlarge: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(rectangle",":"," Rectangle) -",">"," this"))),(0,l.kt)("p",null,"Enlarges this rectangle to include the passed rectangle."),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rectangle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"The rectangle to include.")))),(0,l.kt)("h4",{id:"returns-6"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"this")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns itself."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"equals-other-rectangle---boolean"},"equals: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(other",":"," Rectangle) -",">"," boolean"))),(0,l.kt)("p",null,"Accepts ",(0,l.kt)("inlineCode",{parentName:"p"},"other")," Rectangle and returns true if the given Rectangle is equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," Rectangle.\n",(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"other"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"The Rectangle to compare with ",(0,l.kt)("inlineCode",{parentName:"td"},"this"))))),(0,l.kt)("h4",{id:"returns-7"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if all ",(0,l.kt)("inlineCode",{parentName:"td"},"x"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"y"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"width"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"height")," are equal."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"fit-rectangle-rectangle---this"},"fit: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(rectangle",":"," Rectangle) -",">"," this"))),(0,l.kt)("p",null,"Fits this rectangle around the passed one."),(0,l.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rectangle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"The rectangle to fit.")))),(0,l.kt)("h4",{id:"returns-8"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"this")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns itself."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"intersection-other-rectangle-outrect-rectangle---rectangle"},"intersection: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(other",":"," Rectangle, outRect",":"," Rectangle) -",">"," Rectangle"))),(0,l.kt)("p",null,"If the area of the intersection between the Rectangles ",(0,l.kt)("inlineCode",{parentName:"p"},"other")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," is not zero, returns the area of intersection as a Rectangle object. Otherwise, return an empty Rectangle with its properties set to zero. Rectangles without area (width or height equal to zero) can't intersect or be intersected and will always return an empty rectangle with its properties set to zero."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"other"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"The Rectangle to intersect with ",(0,l.kt)("inlineCode",{parentName:"td"},"this"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outRect"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"A Rectangle object in which to store the value, optional (otherwise will create a new Rectangle).")))),(0,l.kt)("h4",{id:"returns-9"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"The intersection of ",(0,l.kt)("inlineCode",{parentName:"td"},"this")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"other"),"."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"intersects-other-rectangle-transform-matrix---boolean"},"intersects: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(other",":"," Rectangle, transform",":"," Matrix) -",">"," boolean"))),(0,l.kt)("p",null,"Determines whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"other")," Rectangle transformed by ",(0,l.kt)("inlineCode",{parentName:"p"},"transform")," intersects with ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," Rectangle object. Returns true only if the area of the intersection is ",">","0, this means that Rectangles sharing a side are not overlapping. Another side effect is that an arealess rectangle (width or height equal to zero) can't intersect any other rectangle."),(0,l.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"other"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"The Rectangle to intersect with ",(0,l.kt)("inlineCode",{parentName:"td"},"this"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transform"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Matrix")),(0,l.kt)("td",{parentName:"tr",align:null},"The transformation matrix of ",(0,l.kt)("inlineCode",{parentName:"td"},"other"),".")))),(0,l.kt)("h4",{id:"returns-10"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A value of ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if the transformed ",(0,l.kt)("inlineCode",{parentName:"td"},"other")," Rectangle intersects with ",(0,l.kt)("inlineCode",{parentName:"td"},"this"),"; otherwise ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),"."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"pad-paddingx-number-paddingy----this"},"pad: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(paddingX",":"," number, paddingY",":"," ) -",">"," this"))),(0,l.kt)("p",null,"Pads the rectangle making it grow in all directions. If paddingY is omitted, both paddingX and paddingY will be set to paddingX."),(0,l.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"paddingX"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The horizontal padding amount.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"paddingY"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The vertical padding amount.")))),(0,l.kt)("h4",{id:"returns-11"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"this")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns itself."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"union-other-rectangle-outrect-rectangle---rectangle"},"union: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(other",":"," Rectangle, outRect",":"," Rectangle) -",">"," Rectangle"))),(0,l.kt)("p",null,"Adds ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"other")," Rectangles together to create a new Rectangle object filling the horizontal and vertical space between the two rectangles."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"parameters-12"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"other"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"The Rectangle to unite with ",(0,l.kt)("inlineCode",{parentName:"td"},"this"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outRect"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"A Rectangle object in which to store the value, optional (otherwise will create a new Rectangle).")))),(0,l.kt)("h4",{id:"returns-12"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Rectangle")),(0,l.kt)("td",{parentName:"tr",align:null},"The union of ",(0,l.kt)("inlineCode",{parentName:"td"},"this")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"other"),"."))))),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);