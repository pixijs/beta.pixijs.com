(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8144],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90814:(e,t,n)=>{"use strict";n.d(t,{Z:()=>q});var a=n(87462),o=n(67294),r=n(72389),l=n(86010),c=n(92949),s=n(86668);function i(){const{prism:e}=(0,s.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var u=n(35281),m=n(87594),d=n.n(m);const p=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function g(e,t){const n=e.map((e=>{const{start:n,end:a}=h[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function y(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:o,metastring:r}=t;if(r&&f.test(r)){const e=r.match(f).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,a=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);default:return g(Object.keys(h),t)}}(a,o),c=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<c.length;){const e=c[d].match(l);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${d},`:u[t]?s[u[t]].start=d:m[t]&&(s[m[t]].range+=`${s[m[t]].start}-${d-1},`),c.splice(d,1)}n=c.join("\n");const p={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{p[e]??=[],p[e].push(t)}))})),{lineClassNames:p,code:n}}const b="codeBlockContainer_Ckt0";function v(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,o]=e;const r=t[a];r&&"string"==typeof o&&(n[r]=o)})),n}(i());return o.createElement(t,(0,a.Z)({},n,{style:r,className:(0,l.Z)(n.className,b,u.k.common.codeBlock)}))}const E={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return o.createElement(v,{as:"pre",tabIndex:0,className:(0,l.Z)(E.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:E.codeBlockLines},t))}var N=n(902);const C={attributes:!0,characterData:!0,childList:!0,subtree:!0};function w(e,t){const[n,a]=(0,o.useState)(),r=(0,o.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,o.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=C);const a=(0,N.zX)(t),r=(0,N.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,r),()=>t.disconnect()}),[e,a,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const Z={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var T={Prism:n(87410).Z,theme:Z};function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}var _=/\r\n|\r|\n/,L=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},x=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},O=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=j({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=j({},n,{backgroundColor:null}),o};function S(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const P=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),B(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?O(e.theme,e.language):void 0;return t.themeDict=n})),B(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=j({},S(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?j({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),B(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(c))}})),B(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,l=j({},S(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?j({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),B(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,l=0,c=[],s=[c];l>-1;){for(;(r=a[l]++)<o[l];){var i=void 0,u=t[l],m=n[l][r];if("string"==typeof m?(u=l>0?u:["plain"],i=m):(u=x(u,m.type),m.alias&&(u=x(u,m.alias)),i=m.content),"string"==typeof i){var d=i.split(_),p=d.length;c.push({types:u,content:d[0]});for(var f=1;f<p;f++)L(c),s.push(c=[]),c.push({types:u,content:d[f]})}else l++,t.push(u),n.push(i),a.push(0),o.push(i.length)}l--,t.pop(),n.pop(),a.pop(),o.pop()}return L(c),s}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),z="codeLine_lJS_",A="codeLineNumber_Tfdd",I="codeLineContent_feaV";function M(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:c,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=c({line:t,className:(0,l.Z)(n,r&&z)}),u=t.map(((e,t)=>o.createElement("span",(0,a.Z)({key:t},s({token:e,key:t})))));return o.createElement("span",i,r?o.createElement(o.Fragment,null,o.createElement("span",{className:A}),o.createElement("span",{className:I},u)):u,o.createElement("br",null))}var D=n(95999);const H={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function V(e){let{code:t,className:n}=e;const[a,r]=(0,o.useState)(!1),c=(0,o.useRef)(void 0),s=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),o&&o.focus()}(t),r(!0),c.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),o.createElement("button",{type:"button","aria-label":a?(0,D.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,D.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,D.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,H.copyButton,a&&H.copyButtonCopied),onClick:s},o.createElement("span",{className:H.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:H.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:H.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const R="wordWrapButtonIcon_Bwma",$="wordWrapButtonEnabled_EoeP";function W(e){let{className:t,onClick:n,isEnabled:a}=e;const r=(0,D.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,a&&$),"aria-label":r,title:r},o.createElement("svg",{className:R,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function F(e){let{children:t,className:n="",metastring:r,title:c,showLineNumbers:u,language:m}=e;const{prism:{defaultLanguage:d,magicComments:f}}=(0,s.L)(),h=m??n.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")??d;const g=i(),b=function(){const[e,t]=(0,o.useState)(!1),[n,a]=(0,o.useState)(!1),r=(0,o.useRef)(null),l=(0,o.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),c=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");a(n)}),[r]);return w(r,c),(0,o.useEffect)((()=>{c()}),[e,c]),(0,o.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:l}}(),k=function(e){return e?.match(p)?.groups.title??""}(r)||c,{lineClassNames:N,code:C}=y(t,{metastring:r,language:h,magicComments:f}),Z=u??function(e){return Boolean(e?.includes("showLineNumbers"))}(r);return o.createElement(v,{as:"div",className:(0,l.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`)},k&&o.createElement("div",{className:E.codeBlockTitle},k),o.createElement("div",{className:E.codeBlockContent},o.createElement(P,(0,a.Z)({},T,{theme:g,code:C,language:h??"text"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:r}=e;return o.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,l.Z)(t,E.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,l.Z)(E.codeBlockLines,Z&&E.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(M,{key:t,line:e,getLineProps:a,getTokenProps:r,classNames:N[t],showLineNumbers:Z})))))})),o.createElement("div",{className:E.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&o.createElement(W,{className:E.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),o.createElement(V,{className:E.codeButton,code:C}))))}function q(e){let{children:t,...n}=e;const l=(0,r.Z)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof c?F:k;return o.createElement(s,(0,a.Z)({key:String(l)},n),c)}},84881:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(67294),o=n(95999),r=n(35281),l=n(87462),c=n(86010);const s="iconEdit_Z9Sw";function i(e){let{className:t,...n}=e;return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(s,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(i,null),a.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},92503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(87462),o=n(67294),r=n(86010),l=n(95999),c=n(86668);const s="anchorWithStickyNavbar_LWe7",i="anchorWithHideOnScrollNavbar_WYt5";function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:m}}=(0,c.L)();return"h1"!==t&&n?o.createElement(t,(0,a.Z)({},u,{className:(0,r.Z)("anchor",m?i:s),id:n}),u.children,o.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,a.Z)({},u,{id:void 0}))}},83140:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var a=n(67294),o=n(3905),r=n(87462),l=n(35742);var c=n(25889);var s=n(39960);var i=n(86010),u=n(72389),m=n(86043);const d="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q";function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function y(e){let{summary:t,children:n,...o}=e;const l=(0,u.Z)(),c=(0,a.useRef)(null),{collapsed:s,setCollapsed:y}=(0,m.u)({initialState:!o.open}),[b,v]=(0,a.useState)(o.open);return a.createElement("details",(0,r.Z)({},o,{ref:c,open:b,"data-collapsed":s,className:(0,i.Z)(d,l&&p,o.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&g(t,c.current)&&(e.preventDefault(),s?(y(!1),v(!0)):y(!0))}}),t??a.createElement("summary",null,"Details"),a.createElement(m.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{y(e),v(!e)}},a.createElement("div",{className:f},n)))}const b="details_b_Ee";function v(e){let{...t}=e;return a.createElement(y,(0,r.Z)({},t,{className:(0,i.Z)("alert alert--info",b,t.className)}))}var E=n(92503);function k(e){return a.createElement(E.Z,e)}const N="containsTaskList_mC6p";const C="img_ev3q";var w=n(35281),Z=n(95999);const T="admonition_LlT9",B="admonitionHeading_tbUL",j="admonitionIcon_kALy",_="admonitionContent_S0QG";const L={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(Z.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(Z.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(Z.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(Z.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(Z.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},x={secondary:"note",important:"info",success:"tip",warning:"danger"};function O(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}const S={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...o}=e.props;return a.createElement(e.props.originalType,o)}return e}(e):e));return a.createElement(l.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(c.Z,e)},a:function(e){return a.createElement(s.Z,e)},pre:function(e){return a.createElement(c.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(v,(0,r.Z)({},e,{summary:n}),o)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,i.Z)(t,t?.includes("contains-task-list")&&N))}));var t},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,i.Z)(t,C))}));var t},h1:e=>a.createElement(k,(0,r.Z)({as:"h1"},e)),h2:e=>a.createElement(k,(0,r.Z)({as:"h2"},e)),h3:e=>a.createElement(k,(0,r.Z)({as:"h3"},e)),h4:e=>a.createElement(k,(0,r.Z)({as:"h4"},e)),h5:e=>a.createElement(k,(0,r.Z)({as:"h5"},e)),h6:e=>a.createElement(k,(0,r.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:o,icon:r}=O(e),l=function(e){const t=x[e]??e,n=L[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),L.info)}(n),c=o??l.label,{iconComponent:s}=l,u=r??a.createElement(s,null);return a.createElement("div",{className:(0,i.Z)(w.k.common.admonition,w.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,T)},a.createElement("div",{className:B},a.createElement("span",{className:j},u),c),a.createElement("div",{className:_},t))},mermaid:()=>null};function P(e){let{children:t}=e;return a.createElement(o.Zo,{components:S},t)}},32244:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(67294),o=n(86010),r=n(39960);function l(e){const{permalink:t,title:n,subLabel:l,isNext:c}=e;return a.createElement(r.Z,{className:(0,o.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}},13008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294),o=n(86010),r=n(39960);const l="tag_zVej",c="tagRegular_sFm0",s="tagWithCount_h2kH";function i(e){let{permalink:t,label:n,count:i}=e;return a.createElement(r.Z,{href:t,className:(0,o.Z)(l,i?s:c)},n,i&&a.createElement("span",null,i))}},71526:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294),o=n(86010),r=n(95999),l=n(13008);const c="tags_jXut",s="tag_QGVx";function i(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,o.Z)(c,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:s},a.createElement(l.Z,{label:t,permalink:n}))}))))}},87594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);