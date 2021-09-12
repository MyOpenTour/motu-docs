(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[29630],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=p(r),f=o,m=g["".concat(l,".").concat(f)]||g[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},59098:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},Tag:function(){return u},default:function(){return g}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],c={id:"coupon-aggregator-avg",title:"CouponAggregatorAvg"},l={unversionedId:"v1/objects/coupon-aggregator-avg",id:"v1/objects/coupon-aggregator-avg",isDocsHomePage:!1,title:"CouponAggregatorAvg",description:"<span",source:"@site/docs/v1/objects/coupon-aggregator-avg.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/coupon-aggregator-avg",permalink:"/v1/objects/coupon-aggregator-avg",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/coupon-aggregator-avg.mdx",version:"current",frontMatter:{id:"coupon-aggregator-avg",title:"CouponAggregatorAvg"},sidebar:"schemaSidebar",previous:{title:"CouponAggregator",permalink:"/v1/objects/coupon-aggregator"},next:{title:"CouponAggregatorMax",permalink:"/v1/objects/coupon-aggregator-max"}},p=[{value:"Fields",id:"fields",children:[]}],u=function(e){var t=e.children,r=e.color;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:p,Tag:u};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CouponAggregatorAvg {\n  amount_off: Float\n  duration_in_months: Float\n  percent_off: Float\n  max_redemptions: Float\n  times_redeemed: Float\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"amount_off-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"amount_off")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"duration_in_months-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"duration_in_months")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"percent_off-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"percent_off")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"max_redemptions-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"max_redemptions")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"times_redeemed-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"times_redeemed")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"))}g.isMDXComponent=!0}}]);