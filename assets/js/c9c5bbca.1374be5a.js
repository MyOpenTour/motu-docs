(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[29177],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(t),f=o,y=s["".concat(l,".").concat(f)]||s[f]||u[f]||a;return t?n.createElement(y,c(c({ref:r},p),{},{components:t})):n.createElement(y,c({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=s;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=t[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},69139:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d},Tag:function(){return p},default:function(){return s}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),c=["components"],i={id:"create-order-payload",title:"createOrderPayload"},l={unversionedId:"v1/objects/create-order-payload",id:"v1/objects/create-order-payload",isDocsHomePage:!1,title:"createOrderPayload",description:"<span",source:"@site/docs/v1/objects/create-order-payload.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/create-order-payload",permalink:"/v1/objects/create-order-payload",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/create-order-payload.mdx",version:"current",frontMatter:{id:"create-order-payload",title:"createOrderPayload"},sidebar:"schemaSidebar",previous:{title:"createOpeningHourPayload",permalink:"/v1/objects/create-opening-hour-payload"},next:{title:"createProviderPayload",permalink:"/v1/objects/create-provider-payload"}},d=[{value:"Fields",id:"fields",children:[]}],p=function(e){var r=e.children,t=e.color;return(0,a.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},u={toc:d,Tag:p};function s(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type createOrderPayload {\n  order: Order\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"order-order"},(0,a.kt)("inlineCode",{parentName:"h4"},"order")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/objects/order"},(0,a.kt)("inlineCode",{parentName:"a"},"Order")),")"))}s.isMDXComponent=!0}}]);