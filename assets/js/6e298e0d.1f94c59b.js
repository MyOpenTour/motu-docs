(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{345:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(758)),c={id:"feature-input",title:"FeatureInput"},o={unversionedId:"v1/inputs/feature-input",id:"v1/inputs/feature-input",isDocsHomePage:!1,title:"FeatureInput",description:"<span",source:"@site/docs/v1/inputs/feature-input.mdx",slug:"/v1/inputs/feature-input",permalink:"/v1/inputs/feature-input",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/inputs/feature-input.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"editUserInput",permalink:"/v1/inputs/edit-user-input"},next:{title:"FileInfoInput",permalink:"/v1/inputs/file-info-input"}},p=[{value:"Fields",id:"fields",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:p,Tag:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type FeatureInput {\n  name_ru: String\n  name_en: String\n  providers: [ID]\n  category: ID\n  published_at: DateTime\n  created_by: ID\n  updated_by: ID\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"name_ru-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name_ru")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"name_en-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name_en")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"providers-id"},Object(i.b)("inlineCode",{parentName:"h4"},"providers")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"[ID]")),")"),Object(i.b)("h4",{id:"category-id"},Object(i.b)("inlineCode",{parentName:"h4"},"category")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(i.b)("h4",{id:"published_at-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"published_at")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime")),")"),Object(i.b)("h4",{id:"created_by-id"},Object(i.b)("inlineCode",{parentName:"h4"},"created_by")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(i.b)("h4",{id:"updated_by-id"},Object(i.b)("inlineCode",{parentName:"h4"},"updated_by")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID")),")"))}d.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=b(n),s=r,m=d["".concat(c,".").concat(s)]||d[s]||l[s]||i;return n?a.a.createElement(m,o(o({ref:t},u),{},{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);