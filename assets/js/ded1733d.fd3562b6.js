(window.webpackJsonp=window.webpackJsonp||[]).push([[584],{654:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"Tag",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),a=(r(0),r(758)),o={id:"providers",title:"providers"},c={unversionedId:"v1/queries/providers",id:"v1/queries/providers",isDocsHomePage:!1,title:"providers",description:"<span",source:"@site/docs/v1/queries/providers.mdx",slug:"/v1/queries/providers",permalink:"/v1/queries/providers",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/queries/providers.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"provider",permalink:"/v1/queries/provider"},next:{title:"providersConnection",permalink:"/v1/queries/providers-connection"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:p,Tag:s};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"providers(\n  sort: String\n  limit: Int = 0\n  start: Int = 0\n  where: JSON\n  publicationState: PublicationState\n): [Provider]\n\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"sort-string"},Object(a.b)("inlineCode",{parentName:"h4"},"sort")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("h4",{id:"limit-int"},Object(a.b)("inlineCode",{parentName:"h4"},"limit")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(a.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(a.b)("h4",{id:"start-int"},Object(a.b)("inlineCode",{parentName:"h4"},"start")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/int"},Object(a.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(a.b)("h4",{id:"where-json"},Object(a.b)("inlineCode",{parentName:"h4"},"where")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/json"},Object(a.b)("inlineCode",{parentName:"a"},"JSON")),")"),Object(a.b)("h4",{id:"publicationstate-publicationstate"},Object(a.b)("inlineCode",{parentName:"h4"},"publicationState")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/enums/publication-state"},Object(a.b)("inlineCode",{parentName:"a"},"PublicationState")),")"),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("h4",{id:"provider"},Object(a.b)("a",{parentName:"h4",href:"/v1/objects/provider"},Object(a.b)("inlineCode",{parentName:"a"},"Provider"))))}u.isMDXComponent=!0},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||l[d]||a;return r?i.a.createElement(m,c(c({ref:t},s),{},{components:r})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);