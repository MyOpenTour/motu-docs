(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[56972],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,m=s["".concat(d,".").concat(f)]||s[f]||l[f]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=s;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},72342:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return d},toc:function(){return p},Tag:function(){return u},default:function(){return s}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),c=["components"],a={id:"provider-connection-updated-at",title:"ProviderConnectionUpdatedAt"},d={unversionedId:"v1/objects/provider-connection-updated-at",id:"v1/objects/provider-connection-updated-at",isDocsHomePage:!1,title:"ProviderConnectionUpdatedAt",description:"<span",source:"@site/docs/v1/objects/provider-connection-updated-at.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/provider-connection-updated-at",permalink:"/v1/objects/provider-connection-updated-at",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/provider-connection-updated-at.mdx",version:"current",frontMatter:{id:"provider-connection-updated-at",title:"ProviderConnectionUpdatedAt"},sidebar:"schemaSidebar",previous:{title:"ProviderConnectionSimilar",permalink:"/v1/objects/provider-connection-similar"},next:{title:"ProviderConnectionUser",permalink:"/v1/objects/provider-connection-user"}},p=[{value:"Fields",id:"fields",children:[]}],u=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:p,Tag:u};function s(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProviderConnectionUpdatedAt {\n  key: DateTime\n  connection: ProviderConnection\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"key-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"key")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"connection-providerconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"connection")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/provider-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"ProviderConnection")),")"))}s.isMDXComponent=!0}}]);