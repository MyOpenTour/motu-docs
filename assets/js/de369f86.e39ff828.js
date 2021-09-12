(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[83306],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},96096:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c},Tag:function(){return l},default:function(){return s}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],p={id:"opening-hour-input",title:"OpeningHourInput"},u={unversionedId:"v1/inputs/opening-hour-input",id:"v1/inputs/opening-hour-input",isDocsHomePage:!1,title:"OpeningHourInput",description:"<span",source:"@site/docs/v1/inputs/opening-hour-input.mdx",sourceDirName:"v1/inputs",slug:"/v1/inputs/opening-hour-input",permalink:"/v1/inputs/opening-hour-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/opening-hour-input.mdx",version:"current",frontMatter:{id:"opening-hour-input",title:"OpeningHourInput"},sidebar:"schemaSidebar",previous:{title:"NotificationInput",permalink:"/v1/inputs/notification-input"},next:{title:"OrderInput",permalink:"/v1/inputs/order-input"}},c=[{value:"Fields",id:"fields",children:[]}],l=function(e){var t=e.children,n=e.color;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:c,Tag:l};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type OpeningHourInput {\n  dayOfWeek: Int\n  open: Time\n  close: Time\n  validFrom: DateTime\n  validThrough: DateTime\n  published_at: DateTime\n  created_by: ID\n  updated_by: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"dayofweek-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"dayOfWeek")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"open-time"},(0,a.kt)("inlineCode",{parentName:"h4"},"open")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/time"},(0,a.kt)("inlineCode",{parentName:"a"},"Time")),")"),(0,a.kt)("h4",{id:"close-time"},(0,a.kt)("inlineCode",{parentName:"h4"},"close")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/time"},(0,a.kt)("inlineCode",{parentName:"a"},"Time")),")"),(0,a.kt)("h4",{id:"validfrom-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"validFrom")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"validthrough-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"validThrough")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"published_at-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"published_at")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"created_by-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"created_by")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"updated_by-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"updated_by")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);