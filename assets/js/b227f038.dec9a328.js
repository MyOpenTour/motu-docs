(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{545:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"Tag",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(763)),c={id:"coupon",title:"Coupon"},o={unversionedId:"v1/objects/coupon",id:"v1/objects/coupon",isDocsHomePage:!1,title:"Coupon",description:"<span",source:"@site/docs/v1/objects/coupon.mdx",slug:"/v1/objects/coupon",permalink:"/v1/objects/coupon",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/coupon.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"CategoryGroupBy",permalink:"/v1/objects/category-group-by"},next:{title:"CouponAggregator",permalink:"/v1/objects/coupon-aggregator"}},b=[{value:"Fields",id:"fields",children:[]}],d=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:b,Tag:d};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type Coupon {\n  id: ID!\n  _id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  amount_off: Float\n  duration: ENUM_COUPON_DURATION\n  duration_in_months: Int\n  name: String\n  percent_off: Float\n  max_redemptions: Int\n  redeem_by: Date\n  times_redeemed: Int\n  valid: Boolean\n  currency: Currency\n  name_ru: String\n  name_en: String\n  published_at: DateTime\n  activities(\n    sort: String\n    limit: Int = 0\n    start: Int = 0\n    where: JSON\n  ): [Activity]\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("h4",{id:"_id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"_id")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("h4",{id:"createdat-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"createdAt")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime!")),")"),Object(i.b)("h4",{id:"updatedat-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"updatedAt")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime!")),")"),Object(i.b)("h4",{id:"amount_off-float"},Object(i.b)("inlineCode",{parentName:"h4"},"amount_off")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(i.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(i.b)("h4",{id:"duration-enum_coupon_duration"},Object(i.b)("inlineCode",{parentName:"h4"},"duration")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/enums/enum-coupon-duration"},Object(i.b)("inlineCode",{parentName:"a"},"ENUM_COUPON_DURATION")),")"),Object(i.b)("h4",{id:"duration_in_months-int"},Object(i.b)("inlineCode",{parentName:"h4"},"duration_in_months")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(i.b)("h4",{id:"name-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"percent_off-float"},Object(i.b)("inlineCode",{parentName:"h4"},"percent_off")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(i.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(i.b)("h4",{id:"max_redemptions-int"},Object(i.b)("inlineCode",{parentName:"h4"},"max_redemptions")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(i.b)("h4",{id:"redeem_by-date"},Object(i.b)("inlineCode",{parentName:"h4"},"redeem_by")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date"},Object(i.b)("inlineCode",{parentName:"a"},"Date")),")"),Object(i.b)("h4",{id:"times_redeemed-int"},Object(i.b)("inlineCode",{parentName:"h4"},"times_redeemed")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(i.b)("h4",{id:"valid-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"valid")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/boolean"},Object(i.b)("inlineCode",{parentName:"a"},"Boolean")),")"),Object(i.b)("h4",{id:"currency-currency"},Object(i.b)("inlineCode",{parentName:"h4"},"currency")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/currency"},Object(i.b)("inlineCode",{parentName:"a"},"Currency")),")"),Object(i.b)("h4",{id:"name_ru-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name_ru")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"name_en-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name_en")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"published_at-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"published_at")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime")),")"),Object(i.b)("h4",{id:"activities-activity"},Object(i.b)("inlineCode",{parentName:"h4"},"activities")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/activity"},Object(i.b)("inlineCode",{parentName:"a"},"[Activity]")),")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h5",{parentName:"li",id:"sort-string"},Object(i.b)("inlineCode",{parentName:"h5"},"sort")," (",Object(i.b)("a",{parentName:"h5",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h5",{parentName:"li",id:"limit-int"},Object(i.b)("inlineCode",{parentName:"h5"},"limit")," (",Object(i.b)("a",{parentName:"h5",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h5",{parentName:"li",id:"start-int"},Object(i.b)("inlineCode",{parentName:"h5"},"start")," (",Object(i.b)("a",{parentName:"h5",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h5",{parentName:"li",id:"where-json"},Object(i.b)("inlineCode",{parentName:"h5"},"where")," (",Object(i.b)("a",{parentName:"h5",href:"/v1/scalars/json"},Object(i.b)("inlineCode",{parentName:"a"},"JSON")),")"))))}l.isMDXComponent=!0},763:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),l=p(n),s=a,O=l["".concat(c,".").concat(s)]||l[s]||m[s]||i;return n?r.a.createElement(O,o(o({ref:t},d),{},{components:n})):r.a.createElement(O,o({ref:t},d))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var d=2;d<i;d++)c[d]=n[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);