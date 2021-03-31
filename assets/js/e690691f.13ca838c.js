(window.webpackJsonp=window.webpackJsonp||[]).push([[605],{675:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=(n(0),n(758)),c={id:"location-connection",title:"LocationConnection"},i={unversionedId:"v1/objects/location-connection",id:"v1/objects/location-connection",isDocsHomePage:!1,title:"LocationConnection",description:"<span",source:"@site/docs/v1/objects/location-connection.mdx",slug:"/v1/objects/location-connection",permalink:"/v1/objects/location-connection",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/location-connection.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"LocationAggregatorSum",permalink:"/v1/objects/location-aggregator-sum"},next:{title:"LocationConnectionCity",permalink:"/v1/objects/location-connection-city"}},l=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:l,Tag:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type LocationConnection {\n  values: [Location]\n  groupBy: LocationGroupBy\n  aggregate: LocationAggregator\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"values-location"},Object(a.b)("inlineCode",{parentName:"h4"},"values")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/objects/location"},Object(a.b)("inlineCode",{parentName:"a"},"[Location]")),")"),Object(a.b)("h4",{id:"groupby-locationgroupby"},Object(a.b)("inlineCode",{parentName:"h4"},"groupBy")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/objects/location-group-by"},Object(a.b)("inlineCode",{parentName:"a"},"LocationGroupBy")),")"),Object(a.b)("h4",{id:"aggregate-locationaggregator"},Object(a.b)("inlineCode",{parentName:"h4"},"aggregate")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/objects/location-aggregator"},Object(a.b)("inlineCode",{parentName:"a"},"LocationAggregator")),")"))}b.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=o,f=b["".concat(c,".").concat(d)]||b[d]||s[d]||a;return n?r.a.createElement(f,i(i({ref:t},p),{},{components:n})):r.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);