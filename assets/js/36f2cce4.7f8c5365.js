(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{212:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return u})),r.d(n,"Tag",(function(){return s})),r.d(n,"default",(function(){return l}));var t=r(3),c=r(7),i=(r(0),r(758)),o={id:"currencies-connection",title:"currenciesConnection"},a={unversionedId:"v1/queries/currencies-connection",id:"v1/queries/currencies-connection",isDocsHomePage:!1,title:"currenciesConnection",description:"<span",source:"@site/docs/v1/queries/currencies-connection.mdx",slug:"/v1/queries/currencies-connection",permalink:"/v1/queries/currencies-connection",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/queries/currencies-connection.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"currencies",permalink:"/v1/queries/currencies"},next:{title:"currency",permalink:"/v1/queries/currency"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s=function(e){var n=e.children,r=e.color;return Object(i.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},p={toc:u,Tag:s};function l(e){var n=e.components,r=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"currenciesConnection(\n  sort: String\n  limit: Int = 0\n  start: Int = 0\n  where: JSON\n): CurrencyConnection\n\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"sort-string"},Object(i.b)("inlineCode",{parentName:"h4"},"sort")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"limit-int"},Object(i.b)("inlineCode",{parentName:"h4"},"limit")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(i.b)("h4",{id:"start-int"},Object(i.b)("inlineCode",{parentName:"h4"},"start")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(i.b)("h4",{id:"where-json"},Object(i.b)("inlineCode",{parentName:"h4"},"where")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/json"},Object(i.b)("inlineCode",{parentName:"a"},"JSON")),")"),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("h4",{id:"currencyconnection"},Object(i.b)("a",{parentName:"h4",href:"/v1/objects/currency-connection"},Object(i.b)("inlineCode",{parentName:"a"},"CurrencyConnection"))))}l.isMDXComponent=!0},758:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return m}));var t=r(0),c=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,c=function(e,n){if(null==e)return{};var r,t,c={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(c[r]=e[r]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),p=function(e){var n=c.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=p(e.components);return c.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),d=t,m=l["".concat(o,".").concat(d)]||l[d]||b[d]||i;return r?c.a.createElement(m,a(a({ref:n},s),{},{components:r})):c.a.createElement(m,a({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:t,o[1]=a;for(var s=2;s<i;s++)o[s]=r[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);