(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{678:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"Tag",(function(){return u})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),c=(n(0),n(763)),a={id:"location-connection",title:"LocationConnection"},i={unversionedId:"v1/objects/location-connection",id:"v1/objects/location-connection",isDocsHomePage:!1,title:"LocationConnection",description:"<span",source:"@site/docs/v1/objects/location-connection.mdx",slug:"/v1/objects/location-connection",permalink:"/v1/objects/location-connection",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/location-connection.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"LocationAggregatorSum",permalink:"/v1/objects/location-aggregator-sum"},next:{title:"LocationConnectionCity",permalink:"/v1/objects/location-connection-city"}},l=[{value:"Fields",id:"fields",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(c.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:l,Tag:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"No description"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"type LocationConnection {\n  values: [Location]\n  groupBy: LocationGroupBy\n  aggregate: LocationAggregator\n}\n")),Object(c.b)("h3",{id:"fields"},"Fields"),Object(c.b)("h4",{id:"values-location"},Object(c.b)("inlineCode",{parentName:"h4"},"values")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/objects/location"},Object(c.b)("inlineCode",{parentName:"a"},"[Location]")),")"),Object(c.b)("h4",{id:"groupby-locationgroupby"},Object(c.b)("inlineCode",{parentName:"h4"},"groupBy")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/objects/location-group-by"},Object(c.b)("inlineCode",{parentName:"a"},"LocationGroupBy")),")"),Object(c.b)("h4",{id:"aggregate-locationaggregator"},Object(c.b)("inlineCode",{parentName:"h4"},"aggregate")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/objects/location-aggregator"},Object(c.b)("inlineCode",{parentName:"a"},"LocationAggregator")),")"))}b.isMDXComponent=!0},763:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,f=b["".concat(a,".").concat(d)]||b[d]||s[d]||c;return n?r.a.createElement(f,i(i({ref:t},u),{},{components:n})):r.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);