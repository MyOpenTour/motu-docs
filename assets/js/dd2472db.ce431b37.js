(window.webpackJsonp=window.webpackJsonp||[]).push([[581],{651:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"Tag",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(758)),c={id:"create-coupon-payload",title:"createCouponPayload"},p={unversionedId:"v1/objects/create-coupon-payload",id:"v1/objects/create-coupon-payload",isDocsHomePage:!1,title:"createCouponPayload",description:"<span",source:"@site/docs/v1/objects/create-coupon-payload.mdx",slug:"/v1/objects/create-coupon-payload",permalink:"/v1/objects/create-coupon-payload",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/create-coupon-payload.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"createCategoryPayload",permalink:"/v1/objects/create-category-payload"},next:{title:"createCurrencyPayload",permalink:"/v1/objects/create-currency-payload"}},i=[{value:"Fields",id:"fields",children:[]}],u=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:i,Tag:u};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type createCouponPayload {\n  coupon: Coupon\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"coupon-coupon"},Object(a.b)("inlineCode",{parentName:"h4"},"coupon")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/objects/coupon"},Object(a.b)("inlineCode",{parentName:"a"},"Coupon")),")"))}d.isMDXComponent=!0},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,f=d["".concat(c,".").concat(b)]||d[b]||s[b]||a;return r?o.a.createElement(f,p(p({ref:t},u),{},{components:r})):o.a.createElement(f,p({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);