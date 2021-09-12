(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[73066],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return s}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),l=p(t),s=o,m=l["".concat(c,".").concat(s)]||l[s]||u[s]||a;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function s(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var g={};for(var c in r)hasOwnProperty.call(r,c)&&(g[c]=r[c]);g.originalType=e,g.mdxType="string"==typeof e?e:o,i[1]=g;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},47296:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return g},metadata:function(){return c},toc:function(){return p},Tag:function(){return d},default:function(){return l}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i=["components"],g={id:"provider-aggregator",title:"ProviderAggregator"},c={unversionedId:"v1/objects/provider-aggregator",id:"v1/objects/provider-aggregator",isDocsHomePage:!1,title:"ProviderAggregator",description:"<span",source:"@site/docs/v1/objects/provider-aggregator.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/provider-aggregator",permalink:"/v1/objects/provider-aggregator",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/provider-aggregator.mdx",version:"current",frontMatter:{id:"provider-aggregator",title:"ProviderAggregator"},sidebar:"schemaSidebar",previous:{title:"Provider",permalink:"/v1/objects/provider"},next:{title:"ProviderAggregatorAvg",permalink:"/v1/objects/provider-aggregator-avg"}},p=[{value:"Fields",id:"fields",children:[]}],d=function(e){var r=e.children,t=e.color;return(0,a.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},u={toc:p,Tag:d};function l(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProviderAggregator {\n  count: Int\n  totalCount: Int\n  sum: ProviderAggregatorSum\n  avg: ProviderAggregatorAvg\n  min: ProviderAggregatorMin\n  max: ProviderAggregatorMax\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"count-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"count")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"totalcount-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"totalCount")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"sum-provideraggregatorsum"},(0,a.kt)("inlineCode",{parentName:"h4"},"sum")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/objects/provider-aggregator-sum"},(0,a.kt)("inlineCode",{parentName:"a"},"ProviderAggregatorSum")),")"),(0,a.kt)("h4",{id:"avg-provideraggregatoravg"},(0,a.kt)("inlineCode",{parentName:"h4"},"avg")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/objects/provider-aggregator-avg"},(0,a.kt)("inlineCode",{parentName:"a"},"ProviderAggregatorAvg")),")"),(0,a.kt)("h4",{id:"min-provideraggregatormin"},(0,a.kt)("inlineCode",{parentName:"h4"},"min")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/objects/provider-aggregator-min"},(0,a.kt)("inlineCode",{parentName:"a"},"ProviderAggregatorMin")),")"),(0,a.kt)("h4",{id:"max-provideraggregatormax"},(0,a.kt)("inlineCode",{parentName:"h4"},"max")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/objects/provider-aggregator-max"},(0,a.kt)("inlineCode",{parentName:"a"},"ProviderAggregatorMax")),")"))}l.isMDXComponent=!0}}]);