(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[85336],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12768:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p},Tag:function(){return u},default:function(){return d}});var t=r(22122),o=r(19756),i=(r(67294),r(3905)),a=["components"],c={id:"providers-connection",title:"providersConnection"},s={unversionedId:"v1/queries/providers-connection",id:"v1/queries/providers-connection",isDocsHomePage:!1,title:"providersConnection",description:"<span",source:"@site/docs/v1/queries/providers-connection.mdx",sourceDirName:"v1/queries",slug:"/v1/queries/providers-connection",permalink:"/v1/queries/providers-connection",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/queries/providers-connection.mdx",version:"current",frontMatter:{id:"providers-connection",title:"providersConnection"},sidebar:"schemaSidebar",previous:{title:"providers",permalink:"/v1/queries/providers"},next:{title:"questionaries",permalink:"/v1/queries/questionaries"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=function(e){var n=e.children,r=e.color;return(0,i.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},l={toc:p,Tag:u};function d(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"providersConnection(\n  sort: String\n  limit: Int = 0\n  start: Int = 0\n  where: JSON\n): ProviderConnection\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"sort-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"limit-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"limit")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"start-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"start")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"where-json"},(0,i.kt)("inlineCode",{parentName:"h4"},"where")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"JSON")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"providerconnection"},(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/provider-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"ProviderConnection"))))}d.isMDXComponent=!0}}]);