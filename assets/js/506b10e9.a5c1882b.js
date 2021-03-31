(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{267:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(758)),c={id:"activity-input",title:"ActivityInput"},o={unversionedId:"v1/inputs/activity-input",id:"v1/inputs/activity-input",isDocsHomePage:!1,title:"ActivityInput",description:"<span",source:"@site/docs/v1/inputs/activity-input.mdx",slug:"/v1/inputs/activity-input",permalink:"/v1/inputs/activity-input",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/inputs/activity-input.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"PublicationState",permalink:"/v1/enums/publication-state"},next:{title:"CategoryInput",permalink:"/v1/inputs/category-input"}},b=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:b,Tag:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type ActivityInput {\n  name: String\n  description: String\n  image: [ID]\n  price: Float\n  provider: ID\n  name_ru: String\n  name_en: String\n  description_ru: String\n  description_en: String\n  sold_last_period: Int\n  published_at: DateTime\n  created_by: ID\n  updated_by: ID\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"name-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"description-string"},Object(i.b)("inlineCode",{parentName:"h4"},"description")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"image-id"},Object(i.b)("inlineCode",{parentName:"h4"},"image")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"[ID]")),")"),Object(i.b)("h4",{id:"price-float"},Object(i.b)("inlineCode",{parentName:"h4"},"price")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/float"},Object(i.b)("inlineCode",{parentName:"a"},"Float")),")"),Object(i.b)("h4",{id:"provider-id"},Object(i.b)("inlineCode",{parentName:"h4"},"provider")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(i.b)("h4",{id:"name_ru-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name_ru")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"name_en-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name_en")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"description_ru-string"},Object(i.b)("inlineCode",{parentName:"h4"},"description_ru")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"description_en-string"},Object(i.b)("inlineCode",{parentName:"h4"},"description_en")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"sold_last_period-int"},Object(i.b)("inlineCode",{parentName:"h4"},"sold_last_period")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(i.b)("h4",{id:"published_at-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"published_at")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime")),")"),Object(i.b)("h4",{id:"created_by-id"},Object(i.b)("inlineCode",{parentName:"h4"},"created_by")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(i.b)("h4",{id:"updated_by-id"},Object(i.b)("inlineCode",{parentName:"h4"},"updated_by")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID")),")"))}l.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=d(n),u=r,m=l["".concat(c,".").concat(u)]||l[u]||s[u]||i;return n?a.a.createElement(m,o(o({ref:t},p),{},{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);