(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[28507],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),m=o,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},21371:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p},Tag:function(){return u},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],s={id:"reset-password",title:"resetPassword"},c={unversionedId:"v1/mutations/reset-password",id:"v1/mutations/reset-password",isDocsHomePage:!1,title:"resetPassword",description:"<span",source:"@site/docs/v1/mutations/reset-password.mdx",sourceDirName:"v1/mutations",slug:"/v1/mutations/reset-password",permalink:"/v1/mutations/reset-password",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/mutations/reset-password.mdx",version:"current",frontMatter:{id:"reset-password",title:"resetPassword"},sidebar:"schemaSidebar",previous:{title:"register",permalink:"/v1/mutations/register"},next:{title:"updateActivity",permalink:"/v1/mutations/update-activity"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=function(e){var t=e.children,r=e.color;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:p,Tag:u};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"resetPassword(\n  password: String!\n  passwordConfirmation: String!\n  code: String!\n): UsersPermissionsLoginPayload\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"password-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"password")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"passwordconfirmation-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"passwordConfirmation")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"code-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"code")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"userspermissionsloginpayload"},(0,a.kt)("a",{parentName:"h4",href:"/v1/objects/users-permissions-login-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"UsersPermissionsLoginPayload"))))}l.isMDXComponent=!0}}]);