(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[78111],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||u;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,i=new Array(u);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<u;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84581:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p},Tag:function(){return s},default:function(){return f}});var n=r(22122),o=r(19756),u=(r(67294),r(3905)),i=["components"],a={id:"create-user-input",title:"createUserInput"},c={unversionedId:"v1/inputs/create-user-input",id:"v1/inputs/create-user-input",isDocsHomePage:!1,title:"createUserInput",description:"<span",source:"@site/docs/v1/inputs/create-user-input.mdx",sourceDirName:"v1/inputs",slug:"/v1/inputs/create-user-input",permalink:"/v1/inputs/create-user-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/create-user-input.mdx",version:"current",frontMatter:{id:"create-user-input",title:"createUserInput"},sidebar:"schemaSidebar",previous:{title:"createRoleInput",permalink:"/v1/inputs/create-role-input"},next:{title:"CurrencyInput",permalink:"/v1/inputs/currency-input"}},p=[{value:"Fields",id:"fields",children:[]}],s=function(e){var t=e.children,r=e.color;return(0,u.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:p,Tag:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,u.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"No description"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-graphql"},"type createUserInput {\n  data: UserInput\n}\n")),(0,u.kt)("h3",{id:"fields"},"Fields"),(0,u.kt)("h4",{id:"data-userinput"},(0,u.kt)("inlineCode",{parentName:"h4"},"data")," (",(0,u.kt)("a",{parentName:"h4",href:"/v1/inputs/user-input"},(0,u.kt)("inlineCode",{parentName:"a"},"UserInput")),")"))}f.isMDXComponent=!0}}]);