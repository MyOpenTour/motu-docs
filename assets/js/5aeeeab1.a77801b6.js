(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{297:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return s})),t.d(n,"Tag",(function(){return p})),t.d(n,"default",(function(){return l}));var o=t(3),r=t(7),c=(t(0),t(758)),i={id:"opening-hours-connection-close",title:"OpeningHoursConnectionClose"},a={unversionedId:"v1/objects/opening-hours-connection-close",id:"v1/objects/opening-hours-connection-close",isDocsHomePage:!1,title:"OpeningHoursConnectionClose",description:"<span",source:"@site/docs/v1/objects/opening-hours-connection-close.mdx",slug:"/v1/objects/opening-hours-connection-close",permalink:"/v1/objects/opening-hours-connection-close",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/opening-hours-connection-close.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"OpeningHoursConnection",permalink:"/v1/objects/opening-hours-connection"},next:{title:"OpeningHoursConnectionCreatedAt",permalink:"/v1/objects/opening-hours-connection-created-at"}},s=[{value:"Fields",id:"fields",children:[]}],p=function(e){var n=e.children,t=e.color;return Object(c.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:s,Tag:p};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"No description"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"type OpeningHoursConnectionClose {\n  key: ID\n  connection: OpeningHoursConnection\n}\n")),Object(c.b)("h3",{id:"fields"},"Fields"),Object(c.b)("h4",{id:"key-id"},Object(c.b)("inlineCode",{parentName:"h4"},"key")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(c.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(c.b)("h4",{id:"connection-openinghoursconnection"},Object(c.b)("inlineCode",{parentName:"h4"},"connection")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/objects/opening-hours-connection"},Object(c.b)("inlineCode",{parentName:"a"},"OpeningHoursConnection")),")"))}l.isMDXComponent=!0},758:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var o=t(0),r=t.n(o);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),d=o,f=l["".concat(i,".").concat(d)]||l[d]||b[d]||c;return t?r.a.createElement(f,a(a({ref:n},p),{},{components:t})):r.a.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);