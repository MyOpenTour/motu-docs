(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[73414],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),f=c(n),s=i,m=f["".concat(p,".").concat(s)]||f[s]||l[s]||o;return n?r.createElement(m,a(a({ref:e},d),{},{components:n})):r.createElement(m,a({ref:e},d))}));function s(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=f;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76248:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c},Tag:function(){return d},default:function(){return f}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a=["components"],u={id:"update-notification-input",title:"updateNotificationInput"},p={unversionedId:"v1/inputs/update-notification-input",id:"v1/inputs/update-notification-input",isDocsHomePage:!1,title:"updateNotificationInput",description:"<span",source:"@site/docs/v1/inputs/update-notification-input.mdx",sourceDirName:"v1/inputs",slug:"/v1/inputs/update-notification-input",permalink:"/v1/inputs/update-notification-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/update-notification-input.mdx",version:"current",frontMatter:{id:"update-notification-input",title:"updateNotificationInput"},sidebar:"schemaSidebar",previous:{title:"updateLocationInput",permalink:"/v1/inputs/update-location-input"},next:{title:"updateOpeningHourInput",permalink:"/v1/inputs/update-opening-hour-input"}},c=[{value:"Fields",id:"fields",children:[]}],d=function(t){var e=t.children,n=t.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e)},l={toc:c,Tag:d};function f(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type updateNotificationInput {\n  where: InputID\n  data: editNotificationInput\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"where-inputid"},(0,o.kt)("inlineCode",{parentName:"h4"},"where")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/inputs/input-id"},(0,o.kt)("inlineCode",{parentName:"a"},"InputID")),")"),(0,o.kt)("h4",{id:"data-editnotificationinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"data")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/inputs/edit-notification-input"},(0,o.kt)("inlineCode",{parentName:"a"},"editNotificationInput")),")"))}f.isMDXComponent=!0}}]);