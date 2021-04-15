(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"Tag",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),o=(t(0),t(758)),a={id:"likes-connection",title:"likesConnection"},c={unversionedId:"v1/queries/likes-connection",id:"v1/queries/likes-connection",isDocsHomePage:!1,title:"likesConnection",description:"<span",source:"@site/docs/v1/queries/likes-connection.mdx",slug:"/v1/queries/likes-connection",permalink:"/v1/queries/likes-connection",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/queries/likes-connection.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"likes",permalink:"/v1/queries/likes"},next:{title:"location",permalink:"/v1/queries/location"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s=function(e){var n=e.children,t=e.color;return Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:l,Tag:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"likesConnection(\n  sort: String\n  limit: Int = 0\n  start: Int = 0\n  where: JSON\n): LikeConnection\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"sort-string"},Object(o.b)("inlineCode",{parentName:"h4"},"sort")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String")),")"),Object(o.b)("h4",{id:"limit-int"},Object(o.b)("inlineCode",{parentName:"h4"},"limit")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(o.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.b)("h4",{id:"start-int"},Object(o.b)("inlineCode",{parentName:"h4"},"start")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(o.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(o.b)("h4",{id:"where-json"},Object(o.b)("inlineCode",{parentName:"h4"},"where")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/json"},Object(o.b)("inlineCode",{parentName:"a"},"JSON")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"likeconnection"},Object(o.b)("a",{parentName:"h4",href:"/v1/objects/like-connection"},Object(o.b)("inlineCode",{parentName:"a"},"LikeConnection"))))}p.isMDXComponent=!0},758:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return t?i.a.createElement(m,c(c({ref:n},s),{},{components:t})):i.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);