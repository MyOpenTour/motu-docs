(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{437:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"Tag",(function(){return p})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(763)),i={id:"upload-file-aggregator",title:"UploadFileAggregator"},l={unversionedId:"v1/objects/upload-file-aggregator",id:"v1/objects/upload-file-aggregator",isDocsHomePage:!1,title:"UploadFileAggregator",description:"<span",source:"@site/docs/v1/objects/upload-file-aggregator.mdx",slug:"/v1/objects/upload-file-aggregator",permalink:"/v1/objects/upload-file-aggregator",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/upload-file-aggregator.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"UploadFile",permalink:"/v1/objects/upload-file"},next:{title:"UploadFileAggregatorAvg",permalink:"/v1/objects/upload-file-aggregator-avg"}},c=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:c,Tag:p};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},g,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type UploadFileAggregator {\n  count: Int\n  totalCount: Int\n  sum: UploadFileAggregatorSum\n  avg: UploadFileAggregatorAvg\n  min: UploadFileAggregatorMin\n  max: UploadFileAggregatorMax\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"count-int"},Object(o.b)("inlineCode",{parentName:"h4"},"count")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(o.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.b)("h4",{id:"totalcount-int"},Object(o.b)("inlineCode",{parentName:"h4"},"totalCount")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(o.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.b)("h4",{id:"sum-uploadfileaggregatorsum"},Object(o.b)("inlineCode",{parentName:"h4"},"sum")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/upload-file-aggregator-sum"},Object(o.b)("inlineCode",{parentName:"a"},"UploadFileAggregatorSum")),")"),Object(o.b)("h4",{id:"avg-uploadfileaggregatoravg"},Object(o.b)("inlineCode",{parentName:"h4"},"avg")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/upload-file-aggregator-avg"},Object(o.b)("inlineCode",{parentName:"a"},"UploadFileAggregatorAvg")),")"),Object(o.b)("h4",{id:"min-uploadfileaggregatormin"},Object(o.b)("inlineCode",{parentName:"h4"},"min")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/upload-file-aggregator-min"},Object(o.b)("inlineCode",{parentName:"a"},"UploadFileAggregatorMin")),")"),Object(o.b)("h4",{id:"max-uploadfileaggregatormax"},Object(o.b)("inlineCode",{parentName:"h4"},"max")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/upload-file-aggregator-max"},Object(o.b)("inlineCode",{parentName:"a"},"UploadFileAggregatorMax")),")"))}u.isMDXComponent=!0},763:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),g=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=g(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=g(r),d=a,s=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?n.a.createElement(s,l(l({ref:t},p),{},{components:r})):n.a.createElement(s,l({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);