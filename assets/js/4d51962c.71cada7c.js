(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[95707],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),g=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=g(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=g(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var g=2;g<o;g++)i[g]=r[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},56736:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return g},Tag:function(){return s},default:function(){return p}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={id:"legal-aggregator-min",title:"LegalAggregatorMin"},c={unversionedId:"v1/objects/legal-aggregator-min",id:"v1/objects/legal-aggregator-min",isDocsHomePage:!1,title:"LegalAggregatorMin",description:"<span",source:"@site/docs/v1/objects/legal-aggregator-min.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/legal-aggregator-min",permalink:"/v1/objects/legal-aggregator-min",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/legal-aggregator-min.mdx",version:"current",frontMatter:{id:"legal-aggregator-min",title:"LegalAggregatorMin"},sidebar:"schemaSidebar",previous:{title:"LegalAggregatorMax",permalink:"/v1/objects/legal-aggregator-max"},next:{title:"LegalAggregatorSum",permalink:"/v1/objects/legal-aggregator-sum"}},g=[{value:"Fields",id:"fields",children:[]}],s=function(e){var t=e.children,r=e.color;return(0,o.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:g,Tag:s};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type LegalAggregatorMin {\n  tax_id: Float\n  registration_id: Float\n  registration_cause_id: Float\n  bank_id: Float\n  checking_account: Float\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"tax_id-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"tax_id")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"registration_id-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"registration_id")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"registration_cause_id-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"registration_cause_id")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"bank_id-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"bank_id")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"checking_account-float"},(0,o.kt)("inlineCode",{parentName:"h4"},"checking_account")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"))}p.isMDXComponent=!0}}]);