(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[77502],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(t),m=o,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=s;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},25590:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l},Tag:function(){return p},default:function(){return s}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),c=["components"],a={id:"itinerary-connection-end-time",title:"ItineraryConnectionEndTime"},u={unversionedId:"v1/objects/itinerary-connection-end-time",id:"v1/objects/itinerary-connection-end-time",isDocsHomePage:!1,title:"ItineraryConnectionEndTime",description:"<span",source:"@site/docs/v1/objects/itinerary-connection-end-time.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/itinerary-connection-end-time",permalink:"/v1/objects/itinerary-connection-end-time",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/itinerary-connection-end-time.mdx",version:"current",frontMatter:{id:"itinerary-connection-end-time",title:"ItineraryConnectionEndTime"},sidebar:"schemaSidebar",previous:{title:"ItineraryConnectionCreatedAt",permalink:"/v1/objects/itinerary-connection-created-at"},next:{title:"ItineraryConnection_id",permalink:"/v1/objects/itinerary-connection-id"}},l=[{value:"Fields",id:"fields",children:[]}],p=function(e){var n=e.children,t=e.color;return(0,i.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},d={toc:l,Tag:p};function s(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ItineraryConnectionEndTime {\n  key: DateTime\n  connection: ItineraryConnection\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"key-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"key")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"connection-itineraryconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"connection")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/itinerary-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"ItineraryConnection")),")"))}s.isMDXComponent=!0}}]);