(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[88283],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||c;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84621:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l},Tag:function(){return u},default:function(){return d}});var o=t(22122),r=t(19756),c=(t(67294),t(3905)),i=["components"],a={id:"location-connection-zipcode",title:"LocationConnectionZipcode"},p={unversionedId:"v1/objects/location-connection-zipcode",id:"v1/objects/location-connection-zipcode",isDocsHomePage:!1,title:"LocationConnectionZipcode",description:"<span",source:"@site/docs/v1/objects/location-connection-zipcode.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/location-connection-zipcode",permalink:"/v1/objects/location-connection-zipcode",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/location-connection-zipcode.mdx",version:"current",frontMatter:{id:"location-connection-zipcode",title:"LocationConnectionZipcode"},sidebar:"schemaSidebar",previous:{title:"LocationConnectionUpdatedAt",permalink:"/v1/objects/location-connection-updated-at"},next:{title:"LocationGroupBy",permalink:"/v1/objects/location-group-by"}},l=[{value:"Fields",id:"fields",children:[]}],u=function(e){var n=e.children,t=e.color;return(0,c.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},s={toc:l,Tag:u};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type LocationConnectionZipcode {\n  key: Int\n  connection: LocationConnection\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"key-int"},(0,c.kt)("inlineCode",{parentName:"h4"},"key")," (",(0,c.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,c.kt)("h4",{id:"connection-locationconnection"},(0,c.kt)("inlineCode",{parentName:"h4"},"connection")," (",(0,c.kt)("a",{parentName:"h4",href:"/v1/objects/location-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"LocationConnection")),")"))}d.isMDXComponent=!0}}]);