(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[863],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||c;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24736:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},Tag:function(){return p},default:function(){return d}});var r=n(22122),o=n(19756),c=(n(67294),n(3905)),i=["components"],a={id:"leg-connection-created-at",title:"LegConnectionCreatedAt"},l={unversionedId:"v1/objects/leg-connection-created-at",id:"v1/objects/leg-connection-created-at",isDocsHomePage:!1,title:"LegConnectionCreatedAt",description:"<span",source:"@site/docs/v1/objects/leg-connection-created-at.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/leg-connection-created-at",permalink:"/v1/objects/leg-connection-created-at",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/leg-connection-created-at.mdx",version:"current",frontMatter:{id:"leg-connection-created-at",title:"LegConnectionCreatedAt"},sidebar:"schemaSidebar",previous:{title:"LegConnection",permalink:"/v1/objects/leg-connection"},next:{title:"LegConnectionEndTime",permalink:"/v1/objects/leg-connection-end-time"}},u=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,n=e.color;return(0,c.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:u,Tag:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type LegConnectionCreatedAt {\n  key: DateTime\n  connection: LegConnection\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"key-datetime"},(0,c.kt)("inlineCode",{parentName:"h4"},"key")," (",(0,c.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,c.kt)("h4",{id:"connection-legconnection"},(0,c.kt)("inlineCode",{parentName:"h4"},"connection")," (",(0,c.kt)("a",{parentName:"h4",href:"/v1/objects/leg-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"LegConnection")),")"))}d.isMDXComponent=!0}}]);