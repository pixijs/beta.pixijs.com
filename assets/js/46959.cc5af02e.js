"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[46959],{99703:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),n=a(95999),r=a(32244);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&l.createElement(r.Z,{permalink:o,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},15289:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),n=a(44996),r=a(9460);function o(e){let{children:t,className:a}=e;const{frontMatter:o,assets:s}=(0,r.C)(),{withBaseUrl:i}=(0,n.C)(),m=s.image??o.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&l.createElement("meta",{itemProp:"image",content:i(m,{absolute:!0})}),t)}},99714:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(86010),r=a(18780),o=a(9460),s=a(83140);function i(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,o.C)();return l.createElement("div",{id:i?r.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(s.Z,null,t))}},12046:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(67294),n=a(86010),r=a(9460),o=a(84881),s=a(71526),i=a(87462),m=a(95999),c=a(39960);function u(){return l.createElement("b",null,l.createElement(m.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function d(e){const{blogPostTitle:t,...a}=e;return l.createElement(c.Z,(0,i.Z)({"aria-label":(0,m.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(u,null))}const g="blogPostFooterDetailsFull_mRVl";function p(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:i,editUrl:m,hasTruncateMarker:c}=e,u=!t&&c,p=a.length>0;return p||u||m?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&g)},p&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":u})},l.createElement(s.Z,{tags:a})),t&&m&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(o.Z,{editUrl:m})),u&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":p})},l.createElement(d,{blogPostTitle:i,to:e.permalink}))):null}},79224:(e,t,a)=>{a.d(t,{Z:()=>Z});var l=a(67294),n=a(86010),r=a(39960),o=a(9460);const s="title_f1Hy";function i(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,o.C)(),{permalink:m,title:c}=a,u=i?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(s,t),itemProp:"headline"},i?c:l.createElement(r.Z,{itemProp:"url",to:m},c))}var m=a(95999),c=a(88824);const u="container_mt6G";function d(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,c.c)();return t=>{const a=Math.ceil(t);return e(a,(0,m.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function g(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function p(){return l.createElement(l.Fragment,null," \xb7 ")}function h(e){let{className:t}=e;const{metadata:a}=(0,o.C)(),{date:r,formattedDate:s,readingTime:i}=a;return l.createElement("div",{className:(0,n.Z)(u,"margin-vert--md",t)},l.createElement(g,{date:r,formattedDate:s}),void 0!==i&&l.createElement(l.Fragment,null,l.createElement(p,null),l.createElement(d,{readingTime:i})))}function E(e){return e.href?l.createElement(r.Z,e):l.createElement(l.Fragment,null,e.children)}function f(e){let{author:t,className:a}=e;const{name:r,title:o,url:s,imageURL:i,email:m}=t,c=s||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},i&&l.createElement(E,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(E,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const b="authorCol_Hf19",v="imageOnlyAuthorRow_pa_O",P="imageOnlyAuthorCol_G86a";function N(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=(0,o.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",s?v:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!s&&"col col--6",s?P:b),key:t},l.createElement(f,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})))))}function Z(){return l.createElement("header",null,l.createElement(i,null),l.createElement(h,null),l.createElement(N,null))}},79985:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),n=a(9460),r=a(79972);function o(e){let{items:t,component:a=r.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},36624:(e,t,a)=>{a.d(t,{Z:()=>b});var l=a(67294),n=a(87524),r=a(86010),o=a(39960),s=a(95999);const i="sidebar_re4s",m="sidebarItemTitle_pO2u",c="sidebarItemList_Yudw",u="sidebarItem__DBe",d="sidebarItemLink_mo7H",g="sidebarItemLinkActive_I1ZP";function p(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(c,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:u},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title)))))))}var h=a(13102);function E(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return l.createElement(h.Zo,{component:E,props:e})}function b(e){let{sidebar:t}=e;const a=(0,n.i)();return t?.items.length?"mobile"===a?l.createElement(f,{sidebar:t}):l.createElement(p,{sidebar:t}):null}},9460:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var l=a(67294),n=a(902);const r=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},88824:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(67294),n=a(52263);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function m(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);