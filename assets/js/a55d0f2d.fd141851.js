(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{490:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return g})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"Tag",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(758)),g={id:"leg-aggregator",title:"LegAggregator"},c={unversionedId:"v1/objects/leg-aggregator",id:"v1/objects/leg-aggregator",isDocsHomePage:!1,title:"LegAggregator",description:"<span",source:"@site/docs/v1/objects/leg-aggregator.mdx",slug:"/v1/objects/leg-aggregator",permalink:"/v1/objects/leg-aggregator",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/leg-aggregator.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"Leg",permalink:"/v1/objects/leg"},next:{title:"LegAggregatorAvg",permalink:"/v1/objects/leg-aggregator-avg"}},i=[{value:"Fields",id:"fields",children:[]}],l=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:i,Tag:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type LegAggregator {\n  count: Int\n  totalCount: Int\n  sum: LegAggregatorSum\n  avg: LegAggregatorAvg\n  min: LegAggregatorMin\n  max: LegAggregatorMax\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"count-int"},Object(o.b)("inlineCode",{parentName:"h4"},"count")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(o.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.b)("h4",{id:"totalcount-int"},Object(o.b)("inlineCode",{parentName:"h4"},"totalCount")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(o.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.b)("h4",{id:"sum-legaggregatorsum"},Object(o.b)("inlineCode",{parentName:"h4"},"sum")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/leg-aggregator-sum"},Object(o.b)("inlineCode",{parentName:"a"},"LegAggregatorSum")),")"),Object(o.b)("h4",{id:"avg-legaggregatoravg"},Object(o.b)("inlineCode",{parentName:"h4"},"avg")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/leg-aggregator-avg"},Object(o.b)("inlineCode",{parentName:"a"},"LegAggregatorAvg")),")"),Object(o.b)("h4",{id:"min-legaggregatormin"},Object(o.b)("inlineCode",{parentName:"h4"},"min")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/leg-aggregator-min"},Object(o.b)("inlineCode",{parentName:"a"},"LegAggregatorMin")),")"),Object(o.b)("h4",{id:"max-legaggregatormax"},Object(o.b)("inlineCode",{parentName:"h4"},"max")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/leg-aggregator-max"},Object(o.b)("inlineCode",{parentName:"a"},"LegAggregatorMax")),")"))}p.isMDXComponent=!0},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,g=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(r),s=n,m=p["".concat(g,".").concat(s)]||p[s]||u[s]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,g=new Array(o);g[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,g[1]=c;for(var l=2;l<o;l++)g[l]=r[l];return a.a.createElement.apply(null,g)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);