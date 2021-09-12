(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[97709],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(n),f=i,m=s["".concat(c,".").concat(f)]||s[f]||l[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},98338:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d},Tag:function(){return u},default:function(){return s}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],p={id:"edit-notification-input",title:"editNotificationInput"},c={unversionedId:"v1/inputs/edit-notification-input",id:"v1/inputs/edit-notification-input",isDocsHomePage:!1,title:"editNotificationInput",description:"<span",source:"@site/docs/v1/inputs/edit-notification-input.mdx",sourceDirName:"v1/inputs",slug:"/v1/inputs/edit-notification-input",permalink:"/v1/inputs/edit-notification-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/edit-notification-input.mdx",version:"current",frontMatter:{id:"edit-notification-input",title:"editNotificationInput"},sidebar:"schemaSidebar",previous:{title:"editLocationInput",permalink:"/v1/inputs/edit-location-input"},next:{title:"editOpeningHourInput",permalink:"/v1/inputs/edit-opening-hour-input"}},d=[{value:"Fields",id:"fields",children:[]}],u=function(e){var t=e.children,n=e.color;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:d,Tag:u};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type editNotificationInput {\n  sender: ID\n  receiver: ID\n  type: String\n  content: String\n  is_read: Boolean\n  published_at: DateTime\n  created_by: ID\n  updated_by: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"sender-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"sender")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"receiver-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"receiver")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"type-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"content-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"content")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"is_read-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"is_read")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"published_at-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"published_at")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"created_by-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"created_by")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"updated_by-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"updated_by")," (",(0,a.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);