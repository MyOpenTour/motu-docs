(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{412:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"Tag",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(7),o=(t(0),t(758)),a={id:"notifications-connection",title:"notificationsConnection"},c={unversionedId:"v1/queries/notifications-connection",id:"v1/queries/notifications-connection",isDocsHomePage:!1,title:"notificationsConnection",description:"<span",source:"@site/docs/v1/queries/notifications-connection.mdx",slug:"/v1/queries/notifications-connection",permalink:"/v1/queries/notifications-connection",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/queries/notifications-connection.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"notifications",permalink:"/v1/queries/notifications"},next:{title:"openingHour",permalink:"/v1/queries/opening-hour"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=function(e){var n=e.children,t=e.color;return Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},p={toc:s,Tag:u};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"notificationsConnection(\n  sort: String\n  limit: Int = 0\n  start: Int = 0\n  where: JSON\n): NotificationConnection\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"sort-string"},Object(o.b)("inlineCode",{parentName:"h4"},"sort")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String")),")"),Object(o.b)("h4",{id:"limit-int"},Object(o.b)("inlineCode",{parentName:"h4"},"limit")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(o.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.b)("h4",{id:"start-int"},Object(o.b)("inlineCode",{parentName:"h4"},"start")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(o.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.b)("h4",{id:"where-json"},Object(o.b)("inlineCode",{parentName:"h4"},"where")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/json"},Object(o.b)("inlineCode",{parentName:"a"},"JSON")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"notificationconnection"},Object(o.b)("a",{parentName:"h4",href:"/v1/objects/notification-connection"},Object(o.b)("inlineCode",{parentName:"a"},"NotificationConnection"))))}l.isMDXComponent=!0},758:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),p=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),f=r,d=l["".concat(a,".").concat(f)]||l[f]||b[f]||o;return t?i.a.createElement(d,c(c({ref:n},u),{},{components:t})):i.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);