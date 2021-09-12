(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[79923],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56966:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return l},Tag:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],d={id:"edit-location-input",title:"editLocationInput"},p={unversionedId:"v1/inputs/edit-location-input",id:"v1/inputs/edit-location-input",isDocsHomePage:!1,title:"editLocationInput",description:"<span",source:"@site/docs/v1/inputs/edit-location-input.mdx",sourceDirName:"v1/inputs",slug:"/v1/inputs/edit-location-input",permalink:"/v1/inputs/edit-location-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/edit-location-input.mdx",version:"current",frontMatter:{id:"edit-location-input",title:"editLocationInput"},sidebar:"schemaSidebar",previous:{title:"editLikeInput",permalink:"/v1/inputs/edit-like-input"},next:{title:"editNotificationInput",permalink:"/v1/inputs/edit-notification-input"}},l=[{value:"Fields",id:"fields",children:[]}],s=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},c={toc:l,Tag:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type editLocationInput {\n  lat: Float\n  lng: Float\n  streetAddress: String\n  formatedAddress: String\n  zipcode: Int\n  city: String\n  country: String\n  district: String\n  nearestSubway: String\n  provider: ID\n  subwayDistance: Float\n  sybwayLine: String\n  published_at: DateTime\n  created_by: ID\n  updated_by: ID\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"lat-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"lat")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"lng-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"lng")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"streetaddress-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"streetAddress")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"formatedaddress-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"formatedAddress")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"zipcode-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"zipcode")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"city-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"city")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"country-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"country")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"district-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"district")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"nearestsubway-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"nearestSubway")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"provider-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"provider")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"subwaydistance-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"subwayDistance")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"sybwayline-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"sybwayLine")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"published_at-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"published_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"created_by-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"created_by")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"updated_by-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"updated_by")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}u.isMDXComponent=!0}}]);