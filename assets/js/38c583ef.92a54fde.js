(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[64312],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,y=s["".concat(i,".").concat(m)]||s[m]||d[m]||c;return r?n.createElement(y,u(u({ref:t},p),{},{components:r})):n.createElement(y,u({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,u=new Array(c);u[0]=s;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<c;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},49886:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l},Tag:function(){return p},default:function(){return s}});var n=r(22122),o=r(19756),c=(r(67294),r(3905)),u=["components"],a={id:"delete-currency",title:"deleteCurrency"},i={unversionedId:"v1/mutations/delete-currency",id:"v1/mutations/delete-currency",isDocsHomePage:!1,title:"deleteCurrency",description:"<span",source:"@site/docs/v1/mutations/delete-currency.mdx",sourceDirName:"v1/mutations",slug:"/v1/mutations/delete-currency",permalink:"/v1/mutations/delete-currency",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/mutations/delete-currency.mdx",version:"current",frontMatter:{id:"delete-currency",title:"deleteCurrency"},sidebar:"schemaSidebar",previous:{title:"deleteCoupon",permalink:"/v1/mutations/delete-coupon"},next:{title:"deleteFeature",permalink:"/v1/mutations/delete-feature"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=function(e){var t=e.children,r=e.color;return(0,c.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:l,Tag:p};function s(e){var t=e.components,r=(0,o.Z)(e,u);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteCurrency(\n  input: deleteCurrencyInput\n): deleteCurrencyPayload\n\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"input-deletecurrencyinput"},(0,c.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,c.kt)("a",{parentName:"h4",href:"/v1/inputs/delete-currency-input"},(0,c.kt)("inlineCode",{parentName:"a"},"deleteCurrencyInput")),")"),(0,c.kt)("h3",{id:"type"},"Type"),(0,c.kt)("h4",{id:"deletecurrencypayload"},(0,c.kt)("a",{parentName:"h4",href:"/v1/objects/delete-currency-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"deleteCurrencyPayload"))))}s.isMDXComponent=!0}}]);