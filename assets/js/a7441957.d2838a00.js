(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{502:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"Tag",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(758)),c={id:"coupon-aggregator-avg",title:"CouponAggregatorAvg"},i={unversionedId:"v1/objects/coupon-aggregator-avg",id:"v1/objects/coupon-aggregator-avg",isDocsHomePage:!1,title:"CouponAggregatorAvg",description:"<span",source:"@site/docs/v1/objects/coupon-aggregator-avg.mdx",slug:"/v1/objects/coupon-aggregator-avg",permalink:"/v1/objects/coupon-aggregator-avg",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/coupon-aggregator-avg.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"CouponAggregator",permalink:"/v1/objects/coupon-aggregator"},next:{title:"CouponAggregatorMax",permalink:"/v1/objects/coupon-aggregator-max"}},p=[{value:"Fields",id:"fields",children:[]}],l=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:p,Tag:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type CouponAggregatorAvg {\n  amount_off: Float\n  duration_in_months: Float\n  percent_off: Float\n  max_redemptions: Float\n  times_redeemed: Float\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"amount_off-float"},Object(a.b)("inlineCode",{parentName:"h4"},"amount_off")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(a.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(a.b)("h4",{id:"duration_in_months-float"},Object(a.b)("inlineCode",{parentName:"h4"},"duration_in_months")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(a.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(a.b)("h4",{id:"percent_off-float"},Object(a.b)("inlineCode",{parentName:"h4"},"percent_off")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(a.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(a.b)("h4",{id:"max_redemptions-float"},Object(a.b)("inlineCode",{parentName:"h4"},"max_redemptions")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(a.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(a.b)("h4",{id:"times_redeemed-float"},Object(a.b)("inlineCode",{parentName:"h4"},"times_redeemed")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(a.b)("inlineCode",{parentName:"a"},"Float")),")"))}b.isMDXComponent=!0},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,f=b["".concat(c,".").concat(d)]||b[d]||s[d]||a;return r?o.a.createElement(f,i(i({ref:t},l),{},{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);