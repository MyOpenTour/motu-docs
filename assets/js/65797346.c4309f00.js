(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{322:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return l})),t.d(n,"Tag",(function(){return p})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),c=(t(0),t(758)),i={id:"leg-connection-end-time",title:"LegConnectionEndTime"},a={unversionedId:"v1/objects/leg-connection-end-time",id:"v1/objects/leg-connection-end-time",isDocsHomePage:!1,title:"LegConnectionEndTime",description:"<span",source:"@site/docs/v1/objects/leg-connection-end-time.mdx",slug:"/v1/objects/leg-connection-end-time",permalink:"/v1/objects/leg-connection-end-time",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/leg-connection-end-time.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"LegConnectionCreatedAt",permalink:"/v1/objects/leg-connection-created-at"},next:{title:"LegConnectionFrom",permalink:"/v1/objects/leg-connection-from"}},l=[{value:"Fields",id:"fields",children:[]}],p=function(e){var n=e.children,t=e.color;return Object(c.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:l,Tag:p};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"No description"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"type LegConnectionEndTime {\n  key: DateTime\n  connection: LegConnection\n}\n")),Object(c.b)("h3",{id:"fields"},"Fields"),Object(c.b)("h4",{id:"key-datetime"},Object(c.b)("inlineCode",{parentName:"h4"},"key")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(c.b)("inlineCode",{parentName:"a"},"DateTime")),")"),Object(c.b)("h4",{id:"connection-legconnection"},Object(c.b)("inlineCode",{parentName:"h4"},"connection")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/objects/leg-connection"},Object(c.b)("inlineCode",{parentName:"a"},"LegConnection")),")"))}d.isMDXComponent=!0},758:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||s[b]||c;return t?o.a.createElement(m,a(a({ref:n},p),{},{components:t})):o.a.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=b;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<c;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);