(window.webpackJsonp=window.webpackJsonp||[]).push([[664],{734:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"Tag",(function(){return p})),t.d(r,"default",(function(){return b}));var n=t(3),a=t(7),o=(t(0),t(758)),i={id:"provider-aggregator-max",title:"ProviderAggregatorMax"},c={unversionedId:"v1/objects/provider-aggregator-max",id:"v1/objects/provider-aggregator-max",isDocsHomePage:!1,title:"ProviderAggregatorMax",description:"<span",source:"@site/docs/v1/objects/provider-aggregator-max.mdx",slug:"/v1/objects/provider-aggregator-max",permalink:"/v1/objects/provider-aggregator-max",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/provider-aggregator-max.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"ProviderAggregatorAvg",permalink:"/v1/objects/provider-aggregator-avg"},next:{title:"ProviderAggregatorMin",permalink:"/v1/objects/provider-aggregator-min"}},l=[{value:"Fields",id:"fields",children:[]}],p=function(e){var r=e.children,t=e.color;return Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},d={toc:l,Tag:p};function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type ProviderAggregatorMax {\n  rating: Float\n  discount: Float\n  average_price: Float\n  num_reviews: Float\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"rating-float"},Object(o.b)("inlineCode",{parentName:"h4"},"rating")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(o.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(o.b)("h4",{id:"discount-float"},Object(o.b)("inlineCode",{parentName:"h4"},"discount")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(o.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(o.b)("h4",{id:"average_price-float"},Object(o.b)("inlineCode",{parentName:"h4"},"average_price")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(o.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(o.b)("h4",{id:"num_reviews-float"},Object(o.b)("inlineCode",{parentName:"h4"},"num_reviews")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(o.b)("inlineCode",{parentName:"a"},"Float")),")"))}b.isMDXComponent=!0},758:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return g}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),d=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},b=function(e){var r=d(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=d(t),s=n,g=b["".concat(i,".").concat(s)]||b[s]||u[s]||o;return t?a.a.createElement(g,c(c({ref:r},p),{},{components:t})):a.a.createElement(g,c({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);