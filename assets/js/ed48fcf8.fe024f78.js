(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{698:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"Tag",(function(){return d})),t.d(r,"default",(function(){return b}));var n=t(3),o=t(7),i=(t(0),t(758)),a={id:"provider-connection",title:"ProviderConnection"},c={unversionedId:"v1/objects/provider-connection",id:"v1/objects/provider-connection",isDocsHomePage:!1,title:"ProviderConnection",description:"<span",source:"@site/docs/v1/objects/provider-connection.mdx",slug:"/v1/objects/provider-connection",permalink:"/v1/objects/provider-connection",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/provider-connection.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"ProviderAggregatorSum",permalink:"/v1/objects/provider-aggregator-sum"},next:{title:"ProviderConnectionAverage_price",permalink:"/v1/objects/provider-connection-average-price"}},p=[{value:"Fields",id:"fields",children:[]}],d=function(e){var r=e.children,t=e.color;return Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},u={toc:p,Tag:d};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type ProviderConnection {\n  values: [Provider]\n  groupBy: ProviderGroupBy\n  aggregate: ProviderAggregator\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"values-provider"},Object(i.b)("inlineCode",{parentName:"h4"},"values")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/provider"},Object(i.b)("inlineCode",{parentName:"a"},"[Provider]")),")"),Object(i.b)("h4",{id:"groupby-providergroupby"},Object(i.b)("inlineCode",{parentName:"h4"},"groupBy")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/provider-group-by"},Object(i.b)("inlineCode",{parentName:"a"},"ProviderGroupBy")),")"),Object(i.b)("h4",{id:"aggregate-provideraggregator"},Object(i.b)("inlineCode",{parentName:"h4"},"aggregate")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/provider-aggregator"},Object(i.b)("inlineCode",{parentName:"a"},"ProviderAggregator")),")"))}b.isMDXComponent=!0},758:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return v}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),u=function(e){var r=o.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},b=function(e){var r=u(e.components);return o.a.createElement(d.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},s=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),b=u(t),s=n,v=b["".concat(a,".").concat(s)]||b[s]||l[s]||i;return t?o.a.createElement(v,c(c({ref:r},d),{},{components:t})):o.a.createElement(v,c({ref:r},d))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);