(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{357:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"Tag",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(758)),c={id:"feature",title:"Feature"},o={unversionedId:"v1/objects/feature",id:"v1/objects/feature",isDocsHomePage:!1,title:"Feature",description:"<span",source:"@site/docs/v1/objects/feature.mdx",slug:"/v1/objects/feature",permalink:"/v1/objects/feature",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/feature.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"deleteUserPayload",permalink:"/v1/objects/delete-user-payload"},next:{title:"FeatureAggregator",permalink:"/v1/objects/feature-aggregator"}},b=[{value:"Fields",id:"fields",children:[]}],d=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:b,Tag:d};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type Feature {\n  id: ID!\n  _id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  name_ru: String\n  name_en: String\n  category: Category\n  published_at: DateTime\n  providers(\n    sort: String\n    limit: Int = 0\n    start: Int = 0\n    where: JSON\n  ): [Provider]\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("h4",{id:"_id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"_id")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("h4",{id:"createdat-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"createdAt")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime!")),")"),Object(i.b)("h4",{id:"updatedat-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"updatedAt")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime!")),")"),Object(i.b)("h4",{id:"name_ru-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name_ru")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"name_en-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name_en")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"category-category"},Object(i.b)("inlineCode",{parentName:"h4"},"category")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/category"},Object(i.b)("inlineCode",{parentName:"a"},"Category")),")"),Object(i.b)("h4",{id:"published_at-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"published_at")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime")),")"),Object(i.b)("h4",{id:"providers-provider"},Object(i.b)("inlineCode",{parentName:"h4"},"providers")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/provider"},Object(i.b)("inlineCode",{parentName:"a"},"[Provider]")),")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h5",{parentName:"li",id:"sort-string"},Object(i.b)("inlineCode",{parentName:"h5"},"sort")," (",Object(i.b)("a",{parentName:"h5",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h5",{parentName:"li",id:"limit-int"},Object(i.b)("inlineCode",{parentName:"h5"},"limit")," (",Object(i.b)("a",{parentName:"h5",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h5",{parentName:"li",id:"start-int"},Object(i.b)("inlineCode",{parentName:"h5"},"start")," (",Object(i.b)("a",{parentName:"h5",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h5",{parentName:"li",id:"where-json"},Object(i.b)("inlineCode",{parentName:"h5"},"where")," (",Object(i.b)("a",{parentName:"h5",href:"/v1/scalars/json"},Object(i.b)("inlineCode",{parentName:"a"},"JSON")),")"))))}p.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,u=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return n?a.a.createElement(u,o(o({ref:t},d),{},{components:n})):a.a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var d=2;d<i;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);