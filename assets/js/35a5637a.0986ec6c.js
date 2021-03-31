(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(758)),c={id:"categories-connection",title:"categoriesConnection"},i={unversionedId:"v1/queries/categories-connection",id:"v1/queries/categories-connection",isDocsHomePage:!1,title:"categoriesConnection",description:"<span",source:"@site/docs/v1/queries/categories-connection.mdx",slug:"/v1/queries/categories-connection",permalink:"/v1/queries/categories-connection",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/queries/categories-connection.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"categories",permalink:"/v1/queries/categories"},next:{title:"category",permalink:"/v1/queries/category"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:s,Tag:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"categoriesConnection(\n  sort: String\n  limit: Int = 0\n  start: Int = 0\n  where: JSON\n): CategoryConnection\n\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"sort-string"},Object(a.b)("inlineCode",{parentName:"h4"},"sort")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("h4",{id:"limit-int"},Object(a.b)("inlineCode",{parentName:"h4"},"limit")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(a.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(a.b)("h4",{id:"start-int"},Object(a.b)("inlineCode",{parentName:"h4"},"start")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(a.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(a.b)("h4",{id:"where-json"},Object(a.b)("inlineCode",{parentName:"h4"},"where")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/json"},Object(a.b)("inlineCode",{parentName:"a"},"JSON")),")"),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("h4",{id:"categoryconnection"},Object(a.b)("a",{parentName:"h4",href:"/v1/objects/category-connection"},Object(a.b)("inlineCode",{parentName:"a"},"CategoryConnection"))))}l.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||a;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);