"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[3181],{92503:(e,t,n)=>{n.d(t,{Z:()=>m});var l=n(87462),i=n(67294),s=n(86010),r=n(95999),a=n(86668),o=n(39960);const c="anchorWithStickyNavbar_LWe7",d="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:u}}=(0,a.L)();if("h1"===t||!n)return i.createElement(t,(0,l.Z)({},m,{id:void 0}));const p=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return i.createElement(t,(0,l.Z)({},m,{className:(0,s.Z)("anchor",u?d:c,m.className),id:n}),m.children,i.createElement(o.Z,{className:"hash-link",to:`#${n}`,"aria-label":p,title:p},"\u200b"))}},58511:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(39960),i=n(95999);const s=JSON.parse('[{"version":"dev","releaseNotes":"https://github.com/pixijs/pixijs/releases","build":"https://pixijs.download/dev/pixi.min.js","docs":"/api"},{"version":"7.2.x","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v7.2.0-beta","build":"https://pixijs.download/v7.2.0-beta/pixi.min.js","docs":"https://pixijs.download/v7.2.0-beta/docs/index.html"},{"version":"7.1.x","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v7.1.2","build":"https://pixijs.download/v7.1.2/pixi.min.js","docs":"https://pixijs.download/v7.1.2/docs/index.html"},{"version":"7.0.x","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v7.0.5","build":"https://pixijs.download/v7.0.5/pixi.min.js","docs":"https://pixijs.download/v7.0.5/docs/index.html"},{"version":"6.x","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v6.5.9","build":"https://pixijs.download/v6.5.9/pixi.min.js","docs":"https://pixijs.download/v6.5.9/docs/index.html"},{"version":"5.x","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v5.3.12","build":"https://pixijs.download/v5.3.12/pixi.min.js","docs":"https://pixijs.download/v5.3.12/docs/index.html"},{"version":"4.x","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v4.8.9","build":"https://pixijs.download/v4.8.9/pixi.min.js","docs":"https://pixijs.download/v4.8.9/docs/index.html"}]');var r=n(92503),a=n(71732),o=n(67294);function c(){return o.createElement(i.Z,{id:"versionsPage.versionEntry.link"},"Documentation")}function d(){return o.createElement(i.Z,{id:"versionsPage.versionEntry.build"},"Build")}function m(){return o.createElement(i.Z,{id:"versionsPage.versionEntry.releaseNotes"},"Release Notes")}function u(){const e=s,t=e[0],n=e[1].prerelease?e[2]:e[1],u=e.find((e=>e.prerelease)),p=e.slice(2);return o.createElement(a.Z,{title:"Versions",description:"PixiJS Versions page listing all API documentation versions"},o.createElement("main",{className:"container margin-vert--lg"},o.createElement(r.Z,{as:"h1"},o.createElement(i.Z,{id:"versionsPage.title"},"PixiJS API documentation versions")),o.createElement("div",{className:"margin-bottom--lg"},o.createElement(r.Z,{as:"h3",id:"next"},o.createElement(i.Z,{id:"versionsPage.current.title"},"Current version (Stable)")),o.createElement("p",null,o.createElement(i.Z,{id:"versionsPage.current.description"},"Here you can find the documentation for current released version.")),o.createElement("table",null,o.createElement("tbody",null,o.createElement("tr",null,o.createElement("th",null,n.version),o.createElement("td",null,o.createElement(l.Z,{to:n.docs},o.createElement(c,null))),o.createElement("td",null,o.createElement(l.Z,{to:n.build},o.createElement(d,null))),o.createElement("td",null,o.createElement(l.Z,{to:n.releaseNotes},o.createElement(m,null))))))),o.createElement("div",{className:"margin-bottom--lg"},o.createElement(r.Z,{as:"h3",id:"latest"},o.createElement(i.Z,{id:"versionsPage.next.title"},"Next version (Unreleased)")),o.createElement("p",null,o.createElement(i.Z,{id:"versionsPage.next.description"},"Here you can find the documentation for work-in-process unreleased version.")),o.createElement("table",null,o.createElement("tbody",null,o.createElement("tr",null,o.createElement("th",null,t.version),o.createElement("td",null,o.createElement(l.Z,{to:t.docs},o.createElement(c,null))),o.createElement("td",null,o.createElement(l.Z,{to:n.build},o.createElement(d,null))))))),null!=u&&o.createElement("div",{className:"margin-bottom--lg"},o.createElement(r.Z,{as:"h3",id:"latest"},o.createElement(i.Z,{id:"versionsPage.next.title"},"Prerelease version")),o.createElement("p",null,o.createElement(i.Z,{id:"versionsPage.next.description"},"Here you can find the documentation for the prerelease version.")),o.createElement("table",null,o.createElement("tbody",null,o.createElement("tr",null,o.createElement("th",null,t.version),o.createElement("td",null,o.createElement(l.Z,{to:t.docs},o.createElement(c,null))),o.createElement("td",null,o.createElement(l.Z,{to:n.build},o.createElement(d,null))))))),p.length>0&&o.createElement("div",{className:"margin-bottom--lg"},o.createElement(r.Z,{as:"h3",id:"archive"},o.createElement(i.Z,{id:"versionsPage.archived.title"},"Past versions (Not maintained anymore)")),o.createElement("p",null,o.createElement(i.Z,{id:"versionsPage.archived.description"},"Here you can find documentation for previous versions of PixiJS.")),o.createElement("table",null,o.createElement("tbody",null,p.map((e=>o.createElement("tr",{key:e.version},o.createElement("th",null,e.version),o.createElement("td",null,o.createElement(l.Z,{to:e.docs},o.createElement(c,null))),o.createElement("td",null,o.createElement(l.Z,{href:e.releaseNotes},o.createElement(m,null)))))))))))}}}]);