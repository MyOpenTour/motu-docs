(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[77103],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(m,c(c({ref:t},s),{},{components:n})):o.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99123:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},Tag:function(){return s},default:function(){return d}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),c=["components"],a={id:"location-connection-published-at",title:"LocationConnectionPublished_at"},l={unversionedId:"v1/objects/location-connection-published-at",id:"v1/objects/location-connection-published-at",isDocsHomePage:!1,title:"LocationConnectionPublished_at",description:"<span",source:"@site/docs/v1/objects/location-connection-published-at.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/location-connection-published-at",permalink:"/v1/objects/location-connection-published-at",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/location-connection-published-at.mdx",version:"current",frontMatter:{id:"location-connection-published-at",title:"LocationConnectionPublished_at"},sidebar:"schemaSidebar",previous:{title:"LocationConnectionProvider",permalink:"/v1/objects/location-connection-provider"},next:{title:"LocationConnectionStreetAddress",permalink:"/v1/objects/location-connection-street-address"}},u=[{value:"Fields",id:"fields",children:[]}],s=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:u,Tag:s};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type LocationConnectionPublished_at {\n  key: DateTime\n  connection: LocationConnection\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"key-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"key")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"connection-locationconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"connection")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/location-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"LocationConnection")),")"))}d.isMDXComponent=!0}}]);