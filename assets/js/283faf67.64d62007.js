(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{179:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return s})),r.d(n,"Tag",(function(){return p})),r.d(n,"default",(function(){return d}));var t=r(3),o=r(7),i=(r(0),r(758)),a={id:"orders-connection",title:"ordersConnection"},c={unversionedId:"v1/queries/orders-connection",id:"v1/queries/orders-connection",isDocsHomePage:!1,title:"ordersConnection",description:"<span",source:"@site/docs/v1/queries/orders-connection.mdx",slug:"/v1/queries/orders-connection",permalink:"/v1/queries/orders-connection",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/queries/orders-connection.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"orders",permalink:"/v1/queries/orders"},next:{title:"provider",permalink:"/v1/queries/provider"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=function(e){var n=e.children,r=e.color;return Object(i.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:s,Tag:p};function d(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"ordersConnection(\n  sort: String\n  limit: Int = 0\n  start: Int = 0\n  where: JSON\n): OrderConnection\n\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"sort-string"},Object(i.b)("inlineCode",{parentName:"h4"},"sort")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"limit-int"},Object(i.b)("inlineCode",{parentName:"h4"},"limit")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(i.b)("h4",{id:"start-int"},Object(i.b)("inlineCode",{parentName:"h4"},"start")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(i.b)("h4",{id:"where-json"},Object(i.b)("inlineCode",{parentName:"h4"},"where")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/json"},Object(i.b)("inlineCode",{parentName:"a"},"JSON")),")"),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("h4",{id:"orderconnection"},Object(i.b)("a",{parentName:"h4",href:"/v1/objects/order-connection"},Object(i.b)("inlineCode",{parentName:"a"},"OrderConnection"))))}d.isMDXComponent=!0},758:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},d=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),b=t,m=d["".concat(a,".").concat(b)]||d[b]||l[b]||i;return r?o.a.createElement(m,c(c({ref:n},p),{},{components:r})):o.a.createElement(m,c({ref:n},p))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);