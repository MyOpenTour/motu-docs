(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{227:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return p})),r.d(n,"Tag",(function(){return u})),r.d(n,"default",(function(){return g}));var t=r(3),o=r(7),i=(r(0),r(758)),a={id:"opening-hours-connection",title:"OpeningHoursConnection"},c={unversionedId:"v1/objects/opening-hours-connection",id:"v1/objects/opening-hours-connection",isDocsHomePage:!1,title:"OpeningHoursConnection",description:"<span",source:"@site/docs/v1/objects/opening-hours-connection.mdx",slug:"/v1/objects/opening-hours-connection",permalink:"/v1/objects/opening-hours-connection",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/opening-hours-connection.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"OpeningHoursAggregatorSum",permalink:"/v1/objects/opening-hours-aggregator-sum"},next:{title:"OpeningHoursConnectionClose",permalink:"/v1/objects/opening-hours-connection-close"}},p=[{value:"Fields",id:"fields",children:[]}],u=function(e){var n=e.children,r=e.color;return Object(i.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},s={toc:p,Tag:u};function g(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type OpeningHoursConnection {\n  values: [OpeningHours]\n  groupBy: OpeningHoursGroupBy\n  aggregate: OpeningHoursAggregator\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"values-openinghours"},Object(i.b)("inlineCode",{parentName:"h4"},"values")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/opening-hours"},Object(i.b)("inlineCode",{parentName:"a"},"[OpeningHours]")),")"),Object(i.b)("h4",{id:"groupby-openinghoursgroupby"},Object(i.b)("inlineCode",{parentName:"h4"},"groupBy")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/opening-hours-group-by"},Object(i.b)("inlineCode",{parentName:"a"},"OpeningHoursGroupBy")),")"),Object(i.b)("h4",{id:"aggregate-openinghoursaggregator"},Object(i.b)("inlineCode",{parentName:"h4"},"aggregate")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/opening-hours-aggregator"},Object(i.b)("inlineCode",{parentName:"a"},"OpeningHoursAggregator")),")"))}g.isMDXComponent=!0},758:function(e,n,r){"use strict";r.d(n,"a",(function(){return g})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},g=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(r),b=t,d=g["".concat(a,".").concat(b)]||g[b]||l[b]||i;return r?o.a.createElement(d,c(c({ref:n},u),{},{components:r})):o.a.createElement(d,c({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);