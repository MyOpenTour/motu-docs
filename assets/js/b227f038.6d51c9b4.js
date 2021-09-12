(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[1184],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,h=s["".concat(l,".").concat(u)]||s[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},12798:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d},Tag:function(){return m},default:function(){return s}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],p={id:"coupon",title:"Coupon"},l={unversionedId:"v1/objects/coupon",id:"v1/objects/coupon",isDocsHomePage:!1,title:"Coupon",description:"<span",source:"@site/docs/v1/objects/coupon.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/coupon",permalink:"/v1/objects/coupon",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/coupon.mdx",version:"current",frontMatter:{id:"coupon",title:"Coupon"},sidebar:"schemaSidebar",previous:{title:"CategoryGroupBy",permalink:"/v1/objects/category-group-by"},next:{title:"CouponAggregator",permalink:"/v1/objects/coupon-aggregator"}},d=[{value:"Fields",id:"fields",children:[]}],m=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},c={toc:d,Tag:m};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Coupon {\n  id: ID!\n  _id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  amount_off: Float\n  duration: ENUM_COUPON_DURATION\n  duration_in_months: Int\n  name: String\n  percent_off: Float\n  max_redemptions: Int\n  redeem_by: Date\n  times_redeemed: Int\n  valid: Boolean\n  currency: Currency\n  name_ru: String\n  name_en: String\n  published_at: DateTime\n  activities(\n    sort: String\n    limit: Int = 0\n    start: Int = 0\n    where: JSON\n  ): [Activity]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"_id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"_id")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"),(0,i.kt)("h4",{id:"amount_off-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"amount_off")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"duration-enum_coupon_duration"},(0,i.kt)("inlineCode",{parentName:"h4"},"duration")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/enums/enum-coupon-duration"},(0,i.kt)("inlineCode",{parentName:"a"},"ENUM_COUPON_DURATION")),")"),(0,i.kt)("h4",{id:"duration_in_months-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"duration_in_months")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"percent_off-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"percent_off")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"max_redemptions-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"max_redemptions")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"redeem_by-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"redeem_by")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("h4",{id:"times_redeemed-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"times_redeemed")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"valid-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"valid")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"currency-currency"},(0,i.kt)("inlineCode",{parentName:"h4"},"currency")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/currency"},(0,i.kt)("inlineCode",{parentName:"a"},"Currency")),")"),(0,i.kt)("h4",{id:"name_ru-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name_ru")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name_en-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name_en")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"published_at-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"published_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"activities-activity"},(0,i.kt)("inlineCode",{parentName:"h4"},"activities")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/activity"},(0,i.kt)("inlineCode",{parentName:"a"},"[Activity]")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"sort-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"limit-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"limit")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"start-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"start")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-json"},(0,i.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"JSON")),")"))))}s.isMDXComponent=!0}}]);