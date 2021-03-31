(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{283:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(758)),c={id:"location-aggregator-min",title:"LocationAggregatorMin"},i={unversionedId:"v1/objects/location-aggregator-min",id:"v1/objects/location-aggregator-min",isDocsHomePage:!1,title:"LocationAggregatorMin",description:"<span",source:"@site/docs/v1/objects/location-aggregator-min.mdx",slug:"/v1/objects/location-aggregator-min",permalink:"/v1/objects/location-aggregator-min",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/location-aggregator-min.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"LocationAggregatorMax",permalink:"/v1/objects/location-aggregator-max"},next:{title:"LocationAggregatorSum",permalink:"/v1/objects/location-aggregator-sum"}},l=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:l,Tag:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type LocationAggregatorMin {\n  lat: Float\n  lng: Float\n  zipcode: Float\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"lat-float"},Object(a.b)("inlineCode",{parentName:"h4"},"lat")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(a.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(a.b)("h4",{id:"lng-float"},Object(a.b)("inlineCode",{parentName:"h4"},"lng")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(a.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(a.b)("h4",{id:"zipcode-float"},Object(a.b)("inlineCode",{parentName:"h4"},"zipcode")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(a.b)("inlineCode",{parentName:"a"},"Float")),")"))}b.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),g=r,d=b["".concat(c,".").concat(g)]||b[g]||s[g]||a;return n?o.a.createElement(d,i(i({ref:t},p),{},{components:n})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);