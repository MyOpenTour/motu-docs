(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{647:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return u})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),i=(n(0),n(758)),c={id:"notification-connection",title:"NotificationConnection"},a={unversionedId:"v1/objects/notification-connection",id:"v1/objects/notification-connection",isDocsHomePage:!1,title:"NotificationConnection",description:"<span",source:"@site/docs/v1/objects/notification-connection.mdx",slug:"/v1/objects/notification-connection",permalink:"/v1/objects/notification-connection",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/notification-connection.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"NotificationAggregator",permalink:"/v1/objects/notification-aggregator"},next:{title:"NotificationConnectionContent",permalink:"/v1/objects/notification-connection-content"}},p=[{value:"Fields",id:"fields",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},f={toc:p,Tag:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type NotificationConnection {\n  values: [Notification]\n  groupBy: NotificationGroupBy\n  aggregate: NotificationAggregator\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"values-notification"},Object(i.b)("inlineCode",{parentName:"h4"},"values")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/notification"},Object(i.b)("inlineCode",{parentName:"a"},"[Notification]")),")"),Object(i.b)("h4",{id:"groupby-notificationgroupby"},Object(i.b)("inlineCode",{parentName:"h4"},"groupBy")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/notification-group-by"},Object(i.b)("inlineCode",{parentName:"a"},"NotificationGroupBy")),")"),Object(i.b)("h4",{id:"aggregate-notificationaggregator"},Object(i.b)("inlineCode",{parentName:"h4"},"aggregate")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/notification-aggregator"},Object(i.b)("inlineCode",{parentName:"a"},"NotificationAggregator")),")"))}b.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),f=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},b=function(e){var t=f(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=f(n),s=o,d=b["".concat(c,".").concat(s)]||b[s]||l[s]||i;return n?r.a.createElement(d,a(a({ref:t},u),{},{components:n})):r.a.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);