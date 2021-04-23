(window.webpackJsonp=window.webpackJsonp||[]).push([[663],{733:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return u})),n.d(e,"Tag",(function(){return p})),n.d(e,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(763)),i={id:"update-notification",title:"updateNotification"},c={unversionedId:"v1/mutations/update-notification",id:"v1/mutations/update-notification",isDocsHomePage:!1,title:"updateNotification",description:"<span",source:"@site/docs/v1/mutations/update-notification.mdx",slug:"/v1/mutations/update-notification",permalink:"/v1/mutations/update-notification",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/mutations/update-notification.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"updateLocation",permalink:"/v1/mutations/update-location"},next:{title:"updateOpeningHour",permalink:"/v1/mutations/update-opening-hour"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=function(t){var e=t.children,n=t.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e)},d={toc:u,Tag:p};function l(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"updateNotification(\n  input: updateNotificationInput\n): updateNotificationPayload\n\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"input-updatenotificationinput"},Object(a.b)("inlineCode",{parentName:"h4"},"input")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/inputs/update-notification-input"},Object(a.b)("inlineCode",{parentName:"a"},"updateNotificationInput")),")"),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("h4",{id:"updatenotificationpayload"},Object(a.b)("a",{parentName:"h4",href:"/v1/objects/update-notification-payload"},Object(a.b)("inlineCode",{parentName:"a"},"updateNotificationPayload"))))}l.isMDXComponent=!0},763:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=o.a.createContext({}),d=function(t){var e=o.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=d(t.components);return o.a.createElement(p.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},s=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),l=d(n),s=r,b=l["".concat(i,".").concat(s)]||l[s]||f[s]||a;return n?o.a.createElement(b,c(c({ref:e},p),{},{components:n})):o.a.createElement(b,c({ref:e},p))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);