(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[33823],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25814:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},Tag:function(){return l},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],c={id:"email-confirmation",title:"emailConfirmation"},s={unversionedId:"v1/mutations/email-confirmation",id:"v1/mutations/email-confirmation",isDocsHomePage:!1,title:"emailConfirmation",description:"<span",source:"@site/docs/v1/mutations/email-confirmation.mdx",sourceDirName:"v1/mutations",slug:"/v1/mutations/email-confirmation",permalink:"/v1/mutations/email-confirmation",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/mutations/email-confirmation.mdx",version:"current",frontMatter:{id:"email-confirmation",title:"emailConfirmation"},sidebar:"schemaSidebar",previous:{title:"deleteUser",permalink:"/v1/mutations/delete-user"},next:{title:"forgotPassword",permalink:"/v1/mutations/forgot-password"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},m={toc:u,Tag:l};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"emailConfirmation(\n  confirmation: String!\n): UsersPermissionsLoginPayload\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"confirmation-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"confirmation")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"userspermissionsloginpayload"},(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/users-permissions-login-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"UsersPermissionsLoginPayload"))))}p.isMDXComponent=!0}}]);