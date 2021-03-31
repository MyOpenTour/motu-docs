(window.webpackJsonp=window.webpackJsonp||[]).push([[533],{604:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"Tag",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),i=(r(0),r(758)),o={id:"like",title:"Like"},c={unversionedId:"v1/objects/like",id:"v1/objects/like",isDocsHomePage:!1,title:"Like",description:"<span",source:"@site/docs/v1/objects/like.mdx",slug:"/v1/objects/like",permalink:"/v1/objects/like",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/like.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"LegalGroupBy",permalink:"/v1/objects/legal-group-by"},next:{title:"LikeAggregator",permalink:"/v1/objects/like-aggregator"}},b=[{value:"Fields",id:"fields",children:[]}],s=function(e){var t=e.children,r=e.color;return Object(i.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:b,Tag:s};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type Like {\n  id: ID!\n  _id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  author: UsersPermissionsUser\n  review: Review\n  published_at: DateTime\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("h4",{id:"_id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"_id")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("h4",{id:"createdat-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"createdAt")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime!")),")"),Object(i.b)("h4",{id:"updatedat-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"updatedAt")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime!")),")"),Object(i.b)("h4",{id:"author-userspermissionsuser"},Object(i.b)("inlineCode",{parentName:"h4"},"author")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/users-permissions-user"},Object(i.b)("inlineCode",{parentName:"a"},"UsersPermissionsUser")),")"),Object(i.b)("h4",{id:"review-review"},Object(i.b)("inlineCode",{parentName:"h4"},"review")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/review"},Object(i.b)("inlineCode",{parentName:"a"},"Review")),")"),Object(i.b)("h4",{id:"published_at-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"published_at")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime")),")"))}d.isMDXComponent=!0},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,m=d["".concat(o,".").concat(u)]||d[u]||l[u]||i;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);