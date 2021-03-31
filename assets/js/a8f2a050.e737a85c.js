(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{512:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return g})),r.d(t,"Tag",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(758)),o={id:"activity-aggregator",title:"ActivityAggregator"},c={unversionedId:"v1/objects/activity-aggregator",id:"v1/objects/activity-aggregator",isDocsHomePage:!1,title:"ActivityAggregator",description:"<span",source:"@site/docs/v1/objects/activity-aggregator.mdx",slug:"/v1/objects/activity-aggregator",permalink:"/v1/objects/activity-aggregator",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/activity-aggregator.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"Activity",permalink:"/v1/objects/activity"},next:{title:"ActivityAggregatorAvg",permalink:"/v1/objects/activity-aggregator-avg"}},g=[{value:"Fields",id:"fields",children:[]}],b=function(e){var t=e.children,r=e.color;return Object(i.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:g,Tag:b};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type ActivityAggregator {\n  count: Int\n  totalCount: Int\n  sum: ActivityAggregatorSum\n  avg: ActivityAggregatorAvg\n  min: ActivityAggregatorMin\n  max: ActivityAggregatorMax\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"count-int"},Object(i.b)("inlineCode",{parentName:"h4"},"count")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(i.b)("h4",{id:"totalcount-int"},Object(i.b)("inlineCode",{parentName:"h4"},"totalCount")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(i.b)("h4",{id:"sum-activityaggregatorsum"},Object(i.b)("inlineCode",{parentName:"h4"},"sum")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/activity-aggregator-sum"},Object(i.b)("inlineCode",{parentName:"a"},"ActivityAggregatorSum")),")"),Object(i.b)("h4",{id:"avg-activityaggregatoravg"},Object(i.b)("inlineCode",{parentName:"h4"},"avg")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/activity-aggregator-avg"},Object(i.b)("inlineCode",{parentName:"a"},"ActivityAggregatorAvg")),")"),Object(i.b)("h4",{id:"min-activityaggregatormin"},Object(i.b)("inlineCode",{parentName:"h4"},"min")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/activity-aggregator-min"},Object(i.b)("inlineCode",{parentName:"a"},"ActivityAggregatorMin")),")"),Object(i.b)("h4",{id:"max-activityaggregatormax"},Object(i.b)("inlineCode",{parentName:"h4"},"max")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/activity-aggregator-max"},Object(i.b)("inlineCode",{parentName:"a"},"ActivityAggregatorMax")),")"))}u.isMDXComponent=!0},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=g(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,m=u["".concat(o,".").concat(s)]||u[s]||l[s]||i;return r?a.a.createElement(m,c(c({ref:t},b),{},{components:r})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var g in t)hasOwnProperty.call(t,g)&&(c[g]=t[g]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);