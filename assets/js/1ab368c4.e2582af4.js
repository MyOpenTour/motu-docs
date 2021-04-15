(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(758)),o={id:"notification-input",title:"NotificationInput"},c={unversionedId:"v1/inputs/notification-input",id:"v1/inputs/notification-input",isDocsHomePage:!1,title:"NotificationInput",description:"<span",source:"@site/docs/v1/inputs/notification-input.mdx",slug:"/v1/inputs/notification-input",permalink:"/v1/inputs/notification-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/notification-input.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"LocationInput",permalink:"/v1/inputs/location-input"},next:{title:"OpeningHourInput",permalink:"/v1/inputs/opening-hour-input"}},p=[{value:"Fields",id:"fields",children:[]}],b=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:p,Tag:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type NotificationInput {\n  sender: ID\n  receiver: ID\n  type: String\n  content: String\n  is_read: Boolean\n  published_at: DateTime\n  created_by: ID\n  updated_by: ID\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"sender-id"},Object(a.b)("inlineCode",{parentName:"h4"},"sender")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(a.b)("h4",{id:"receiver-id"},Object(a.b)("inlineCode",{parentName:"h4"},"receiver")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(a.b)("h4",{id:"type-string"},Object(a.b)("inlineCode",{parentName:"h4"},"type")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("h4",{id:"content-string"},Object(a.b)("inlineCode",{parentName:"h4"},"content")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("h4",{id:"is_read-boolean"},Object(a.b)("inlineCode",{parentName:"h4"},"is_read")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/boolean"},Object(a.b)("inlineCode",{parentName:"a"},"Boolean")),")"),Object(a.b)("h4",{id:"published_at-datetime"},Object(a.b)("inlineCode",{parentName:"h4"},"published_at")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(a.b)("inlineCode",{parentName:"a"},"DateTime")),")"),Object(a.b)("h4",{id:"created_by-id"},Object(a.b)("inlineCode",{parentName:"h4"},"created_by")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(a.b)("h4",{id:"updated_by-id"},Object(a.b)("inlineCode",{parentName:"h4"},"updated_by")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID")),")"))}u.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),d=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,f=u["".concat(o,".").concat(s)]||u[s]||l[s]||a;return n?i.a.createElement(f,c(c({ref:t},b),{},{components:n})):i.a.createElement(f,c({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<a;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);