(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{486:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return g})),t.d(r,"Tag",(function(){return b})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(758)),c={id:"order-aggregator",title:"OrderAggregator"},i={unversionedId:"v1/objects/order-aggregator",id:"v1/objects/order-aggregator",isDocsHomePage:!1,title:"OrderAggregator",description:"<span",source:"@site/docs/v1/objects/order-aggregator.mdx",slug:"/v1/objects/order-aggregator",permalink:"/v1/objects/order-aggregator",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/order-aggregator.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"Order",permalink:"/v1/objects/order"},next:{title:"OrderAggregatorAvg",permalink:"/v1/objects/order-aggregator-avg"}},g=[{value:"Fields",id:"fields",children:[]}],b=function(e){var r=e.children,t=e.color;return Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},d={toc:g,Tag:b};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type OrderAggregator {\n  count: Int\n  totalCount: Int\n  sum: OrderAggregatorSum\n  avg: OrderAggregatorAvg\n  min: OrderAggregatorMin\n  max: OrderAggregatorMax\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"count-int"},Object(o.b)("inlineCode",{parentName:"h4"},"count")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(o.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.b)("h4",{id:"totalcount-int"},Object(o.b)("inlineCode",{parentName:"h4"},"totalCount")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(o.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.b)("h4",{id:"sum-orderaggregatorsum"},Object(o.b)("inlineCode",{parentName:"h4"},"sum")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/order-aggregator-sum"},Object(o.b)("inlineCode",{parentName:"a"},"OrderAggregatorSum")),")"),Object(o.b)("h4",{id:"avg-orderaggregatoravg"},Object(o.b)("inlineCode",{parentName:"h4"},"avg")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/order-aggregator-avg"},Object(o.b)("inlineCode",{parentName:"a"},"OrderAggregatorAvg")),")"),Object(o.b)("h4",{id:"min-orderaggregatormin"},Object(o.b)("inlineCode",{parentName:"h4"},"min")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/order-aggregator-min"},Object(o.b)("inlineCode",{parentName:"a"},"OrderAggregatorMin")),")"),Object(o.b)("h4",{id:"max-orderaggregatormax"},Object(o.b)("inlineCode",{parentName:"h4"},"max")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/order-aggregator-max"},Object(o.b)("inlineCode",{parentName:"a"},"OrderAggregatorMax")),")"))}p.isMDXComponent=!0},758:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return s}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),d=function(e){var r=a.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=d(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},l=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=g(e,["components","mdxType","originalType","parentName"]),p=d(t),l=n,s=p["".concat(c,".").concat(l)]||p[l]||u[l]||o;return t?a.a.createElement(s,i(i({ref:r},b),{},{components:t})):a.a.createElement(s,i({ref:r},b))}));function s(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=l;var i={};for(var g in r)hasOwnProperty.call(r,g)&&(i[g]=r[g]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);