(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[10668],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57066:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c},Tag:function(){return p},default:function(){return d}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),s=["components"],u={id:"update-user-payload",title:"updateUserPayload"},i={unversionedId:"v1/objects/update-user-payload",id:"v1/objects/update-user-payload",isDocsHomePage:!1,title:"updateUserPayload",description:"<span",source:"@site/docs/v1/objects/update-user-payload.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/update-user-payload",permalink:"/v1/objects/update-user-payload",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/update-user-payload.mdx",version:"current",frontMatter:{id:"update-user-payload",title:"updateUserPayload"},sidebar:"schemaSidebar",previous:{title:"updateRolePayload",permalink:"/v1/objects/update-role-payload"},next:{title:"UploadFile",permalink:"/v1/objects/upload-file"}},c=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,r=e.color;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:c,Tag:p};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type updateUserPayload {\n  user: UsersPermissionsUser\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"user-userspermissionsuser"},(0,a.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/objects/users-permissions-user"},(0,a.kt)("inlineCode",{parentName:"a"},"UsersPermissionsUser")),")"))}d.isMDXComponent=!0}}]);