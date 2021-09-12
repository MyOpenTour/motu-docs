(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[68764],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),g=o,f=m["".concat(l,".").concat(g)]||m[g]||p[g]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93567:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},Tag:function(){return s},default:function(){return m}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],c={id:"location-aggregator-sum",title:"LocationAggregatorSum"},l={unversionedId:"v1/objects/location-aggregator-sum",id:"v1/objects/location-aggregator-sum",isDocsHomePage:!1,title:"LocationAggregatorSum",description:"<span",source:"@site/docs/v1/objects/location-aggregator-sum.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/location-aggregator-sum",permalink:"/v1/objects/location-aggregator-sum",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/location-aggregator-sum.mdx",version:"current",frontMatter:{id:"location-aggregator-sum",title:"LocationAggregatorSum"},sidebar:"schemaSidebar",previous:{title:"LocationAggregatorMin",permalink:"/v1/objects/location-aggregator-min"},next:{title:"LocationConnection",permalink:"/v1/objects/location-connection"}},u=[{value:"Fields",id:"fields",children:[]}],s=function(e){var t=e.children,n=e.color;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:u,Tag:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type LocationAggregatorSum {\n  lat: Float\n  lng: Float\n  zipcode: Float\n  subwayDistance: Float\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"lat-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"lat")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"lng-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"lng")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"zipcode-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"zipcode")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"subwaydistance-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"subwayDistance")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"))}m.isMDXComponent=!0}}]);