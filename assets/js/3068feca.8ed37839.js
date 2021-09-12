(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[20712],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77636:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},Tag:function(){return l},default:function(){return d}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],c={id:"admin-user",title:"AdminUser"},s={unversionedId:"v1/objects/admin-user",id:"v1/objects/admin-user",isDocsHomePage:!1,title:"AdminUser",description:"<span",source:"@site/docs/v1/objects/admin-user.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/admin-user",permalink:"/v1/objects/admin-user",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/admin-user.mdx",version:"current",frontMatter:{id:"admin-user",title:"AdminUser"},sidebar:"schemaSidebar",previous:{title:"ActivityGroupBy",permalink:"/v1/objects/activity-group-by"},next:{title:"Category",permalink:"/v1/objects/category"}},u=[{value:"Fields",id:"fields",children:[]}],l=function(e){var t=e.children,r=e.color;return(0,i.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:u,Tag:l};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type AdminUser {\n  id: ID!\n  username: String\n  firstname: String!\n  lastname: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"username-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"username")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"firstname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"firstname")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"lastname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"lastname")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"))}d.isMDXComponent=!0}}]);