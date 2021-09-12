(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[35629],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return s}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=a.createContext({}),p=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,g=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),s=n,f=d["".concat(g,".").concat(s)]||d[s]||u[s]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50878:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return g},toc:function(){return p},Tag:function(){return c},default:function(){return d}});var a=r(22122),n=r(19756),o=(r(67294),r(3905)),i=["components"],l={id:"upload-file-aggregator",title:"UploadFileAggregator"},g={unversionedId:"v1/objects/upload-file-aggregator",id:"v1/objects/upload-file-aggregator",isDocsHomePage:!1,title:"UploadFileAggregator",description:"<span",source:"@site/docs/v1/objects/upload-file-aggregator.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/upload-file-aggregator",permalink:"/v1/objects/upload-file-aggregator",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/upload-file-aggregator.mdx",version:"current",frontMatter:{id:"upload-file-aggregator",title:"UploadFileAggregator"},sidebar:"schemaSidebar",previous:{title:"UploadFile",permalink:"/v1/objects/upload-file"},next:{title:"UploadFileAggregatorAvg",permalink:"/v1/objects/upload-file-aggregator-avg"}},p=[{value:"Fields",id:"fields",children:[]}],c=function(e){var t=e.children,r=e.color;return(0,o.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:p,Tag:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UploadFileAggregator {\n  count: Int\n  totalCount: Int\n  sum: UploadFileAggregatorSum\n  avg: UploadFileAggregatorAvg\n  min: UploadFileAggregatorMin\n  max: UploadFileAggregatorMax\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"count-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"count")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"totalcount-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"totalCount")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"sum-uploadfileaggregatorsum"},(0,o.kt)("inlineCode",{parentName:"h4"},"sum")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/objects/upload-file-aggregator-sum"},(0,o.kt)("inlineCode",{parentName:"a"},"UploadFileAggregatorSum")),")"),(0,o.kt)("h4",{id:"avg-uploadfileaggregatoravg"},(0,o.kt)("inlineCode",{parentName:"h4"},"avg")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/objects/upload-file-aggregator-avg"},(0,o.kt)("inlineCode",{parentName:"a"},"UploadFileAggregatorAvg")),")"),(0,o.kt)("h4",{id:"min-uploadfileaggregatormin"},(0,o.kt)("inlineCode",{parentName:"h4"},"min")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/objects/upload-file-aggregator-min"},(0,o.kt)("inlineCode",{parentName:"a"},"UploadFileAggregatorMin")),")"),(0,o.kt)("h4",{id:"max-uploadfileaggregatormax"},(0,o.kt)("inlineCode",{parentName:"h4"},"max")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/objects/upload-file-aggregator-max"},(0,o.kt)("inlineCode",{parentName:"a"},"UploadFileAggregatorMax")),")"))}d.isMDXComponent=!0}}]);