(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{541:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"Tag",(function(){return p})),t.d(r,"default",(function(){return d}));var a=t(3),n=t(7),o=(t(0),t(763)),i={id:"provider-aggregator-avg",title:"ProviderAggregatorAvg"},c={unversionedId:"v1/objects/provider-aggregator-avg",id:"v1/objects/provider-aggregator-avg",isDocsHomePage:!1,title:"ProviderAggregatorAvg",description:"<span",source:"@site/docs/v1/objects/provider-aggregator-avg.mdx",slug:"/v1/objects/provider-aggregator-avg",permalink:"/v1/objects/provider-aggregator-avg",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/provider-aggregator-avg.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"ProviderAggregator",permalink:"/v1/objects/provider-aggregator"},next:{title:"ProviderAggregatorMax",permalink:"/v1/objects/provider-aggregator-max"}},l=[{value:"Fields",id:"fields",children:[]}],p=function(e){var r=e.children,t=e.color;return Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},b={toc:l,Tag:p};function d(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type ProviderAggregatorAvg {\n  rating: Float\n  discount: Float\n  average_price: Float\n  num_reviews: Float\n  average_time: Float\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"rating-float"},Object(o.b)("inlineCode",{parentName:"h4"},"rating")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(o.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(o.b)("h4",{id:"discount-float"},Object(o.b)("inlineCode",{parentName:"h4"},"discount")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(o.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(o.b)("h4",{id:"average_price-float"},Object(o.b)("inlineCode",{parentName:"h4"},"average_price")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(o.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(o.b)("h4",{id:"num_reviews-float"},Object(o.b)("inlineCode",{parentName:"h4"},"num_reviews")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(o.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(o.b)("h4",{id:"average_time-float"},Object(o.b)("inlineCode",{parentName:"h4"},"average_time")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(o.b)("inlineCode",{parentName:"a"},"Float")),")"))}d.isMDXComponent=!0},763:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return u}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),b=function(e){var r=n.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=b(e.components);return n.a.createElement(p.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},s=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(t),s=a,u=d["".concat(i,".").concat(s)]||d[s]||g[s]||o;return t?n.a.createElement(u,c(c({ref:r},p),{},{components:t})):n.a.createElement(u,c({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);