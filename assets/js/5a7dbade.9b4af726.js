(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return d})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(758)),o={id:"edit-opening-hour-input",title:"editOpeningHourInput"},c={unversionedId:"v1/inputs/edit-opening-hour-input",id:"v1/inputs/edit-opening-hour-input",isDocsHomePage:!1,title:"editOpeningHourInput",description:"<span",source:"@site/docs/v1/inputs/edit-opening-hour-input.mdx",slug:"/v1/inputs/edit-opening-hour-input",permalink:"/v1/inputs/edit-opening-hour-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/edit-opening-hour-input.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"editNotificationInput",permalink:"/v1/inputs/edit-notification-input"},next:{title:"editOrderInput",permalink:"/v1/inputs/edit-order-input"}},p=[{value:"Fields",id:"fields",children:[]}],d=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:p,Tag:d};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type editOpeningHourInput {\n  dayOfWeek: Int\n  open: Time\n  close: Time\n  validFrom: DateTime\n  validThrough: DateTime\n  published_at: DateTime\n  created_by: ID\n  updated_by: ID\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"dayofweek-int"},Object(a.b)("inlineCode",{parentName:"h4"},"dayOfWeek")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(a.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(a.b)("h4",{id:"open-time"},Object(a.b)("inlineCode",{parentName:"h4"},"open")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/time"},Object(a.b)("inlineCode",{parentName:"a"},"Time")),")"),Object(a.b)("h4",{id:"close-time"},Object(a.b)("inlineCode",{parentName:"h4"},"close")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/time"},Object(a.b)("inlineCode",{parentName:"a"},"Time")),")"),Object(a.b)("h4",{id:"validfrom-datetime"},Object(a.b)("inlineCode",{parentName:"h4"},"validFrom")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(a.b)("inlineCode",{parentName:"a"},"DateTime")),")"),Object(a.b)("h4",{id:"validthrough-datetime"},Object(a.b)("inlineCode",{parentName:"h4"},"validThrough")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(a.b)("inlineCode",{parentName:"a"},"DateTime")),")"),Object(a.b)("h4",{id:"published_at-datetime"},Object(a.b)("inlineCode",{parentName:"h4"},"published_at")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(a.b)("inlineCode",{parentName:"a"},"DateTime")),")"),Object(a.b)("h4",{id:"created_by-id"},Object(a.b)("inlineCode",{parentName:"h4"},"created_by")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(a.b)("h4",{id:"updated_by-id"},Object(a.b)("inlineCode",{parentName:"h4"},"updated_by")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID")),")"))}b.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),u=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,s=b["".concat(o,".").concat(m)]||b[m]||l[m]||a;return n?i.a.createElement(s,c(c({ref:t},d),{},{components:n})):i.a.createElement(s,c({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);