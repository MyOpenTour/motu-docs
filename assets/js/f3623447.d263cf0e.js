(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{721:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return d})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),c=(n(0),n(758)),i={id:"activity-connection-updated-at",title:"ActivityConnectionUpdatedAt"},a={unversionedId:"v1/objects/activity-connection-updated-at",id:"v1/objects/activity-connection-updated-at",isDocsHomePage:!1,title:"ActivityConnectionUpdatedAt",description:"<span",source:"@site/docs/v1/objects/activity-connection-updated-at.mdx",slug:"/v1/objects/activity-connection-updated-at",permalink:"/v1/objects/activity-connection-updated-at",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/activity-connection-updated-at.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"ActivityConnectionSold_last_period",permalink:"/v1/objects/activity-connection-sold-last-period"},next:{title:"ActivityGroupBy",permalink:"/v1/objects/activity-group-by"}},p=[{value:"Fields",id:"fields",children:[]}],d=function(e){var t=e.children,n=e.color;return Object(c.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:p,Tag:d};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"No description"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"type ActivityConnectionUpdatedAt {\n  key: DateTime\n  connection: ActivityConnection\n}\n")),Object(c.b)("h3",{id:"fields"},"Fields"),Object(c.b)("h4",{id:"key-datetime"},Object(c.b)("inlineCode",{parentName:"h4"},"key")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(c.b)("inlineCode",{parentName:"a"},"DateTime")),")"),Object(c.b)("h4",{id:"connection-activityconnection"},Object(c.b)("inlineCode",{parentName:"h4"},"connection")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/objects/activity-connection"},Object(c.b)("inlineCode",{parentName:"a"},"ActivityConnection")),")"))}l.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),u=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,y=l["".concat(i,".").concat(b)]||l[b]||s[b]||c;return n?o.a.createElement(y,a(a({ref:t},d),{},{components:n})):o.a.createElement(y,a({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var d=2;d<c;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);