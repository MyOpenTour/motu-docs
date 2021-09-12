(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[63678],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93627:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c},Tag:function(){return s},default:function(){return d}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],u={id:"delete-user",title:"deleteUser"},l={unversionedId:"v1/mutations/delete-user",id:"v1/mutations/delete-user",isDocsHomePage:!1,title:"deleteUser",description:"<span",source:"@site/docs/v1/mutations/delete-user.mdx",sourceDirName:"v1/mutations",slug:"/v1/mutations/delete-user",permalink:"/v1/mutations/delete-user",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/mutations/delete-user.mdx",version:"current",frontMatter:{id:"delete-user",title:"deleteUser"},sidebar:"schemaSidebar",previous:{title:"deleteRole",permalink:"/v1/mutations/delete-role"},next:{title:"emailConfirmation",permalink:"/v1/mutations/email-confirmation"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s=function(e){var t=e.children,r=e.color;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:c,Tag:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Delete an existing user"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteUser(\n  input: deleteUserInput\n): deleteUserPayload\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"input-deleteuserinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/inputs/delete-user-input"},(0,a.kt)("inlineCode",{parentName:"a"},"deleteUserInput")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"deleteuserpayload"},(0,a.kt)("a",{parentName:"h4",href:"/v1/objects/delete-user-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"deleteUserPayload"))))}d.isMDXComponent=!0}}]);