(window.webpackJsonp=window.webpackJsonp||[]).push([[594],{664:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return c})),t.d(r,"Tag",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),s=(t(0),t(758)),a={id:"users-permissions-user-aggregator",title:"UsersPermissionsUserAggregator"},i={unversionedId:"v1/objects/users-permissions-user-aggregator",id:"v1/objects/users-permissions-user-aggregator",isDocsHomePage:!1,title:"UsersPermissionsUserAggregator",description:"<span",source:"@site/docs/v1/objects/users-permissions-user-aggregator.mdx",slug:"/v1/objects/users-permissions-user-aggregator",permalink:"/v1/objects/users-permissions-user-aggregator",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/users-permissions-user-aggregator.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"UsersPermissionsUser",permalink:"/v1/objects/users-permissions-user"},next:{title:"UsersPermissionsUserConnection",permalink:"/v1/objects/users-permissions-user-connection"}},c=[{value:"Fields",id:"fields",children:[]}],u=function(e){var r=e.children,t=e.color;return Object(s.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},p={toc:c,Tag:u};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(s.b)("p",null,"No description"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-graphql"},"type UsersPermissionsUserAggregator {\n  count: Int\n  totalCount: Int\n}\n")),Object(s.b)("h3",{id:"fields"},"Fields"),Object(s.b)("h4",{id:"count-int"},Object(s.b)("inlineCode",{parentName:"h4"},"count")," (",Object(s.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(s.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(s.b)("h4",{id:"totalcount-int"},Object(s.b)("inlineCode",{parentName:"h4"},"totalCount")," (",Object(s.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(s.b)("inlineCode",{parentName:"a"},"Int")),")"))}l.isMDXComponent=!0},758:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),m=n,d=l["".concat(a,".").concat(m)]||l[m]||b[m]||s;return t?o.a.createElement(d,i(i({ref:r},u),{},{components:t})):o.a.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);