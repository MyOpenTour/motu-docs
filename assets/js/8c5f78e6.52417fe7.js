(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{422:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return d})),r.d(t,"Tag",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(758)),i={id:"delete-provider",title:"deleteProvider"},c={unversionedId:"v1/mutations/delete-provider",id:"v1/mutations/delete-provider",isDocsHomePage:!1,title:"deleteProvider",description:"<span",source:"@site/docs/v1/mutations/delete-provider.mdx",slug:"/v1/mutations/delete-provider",permalink:"/v1/mutations/delete-provider",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/mutations/delete-provider.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"deleteOrder",permalink:"/v1/mutations/delete-order"},next:{title:"deleteQuestionary",permalink:"/v1/mutations/delete-questionary"}},d=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:d,Tag:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"deleteProvider(\n  input: deleteProviderInput\n): deleteProviderPayload\n\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"input-deleteproviderinput"},Object(a.b)("inlineCode",{parentName:"h4"},"input")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/inputs/delete-provider-input"},Object(a.b)("inlineCode",{parentName:"a"},"deleteProviderInput")),")"),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("h4",{id:"deleteproviderpayload"},Object(a.b)("a",{parentName:"h4",href:"/v1/objects/delete-provider-payload"},Object(a.b)("inlineCode",{parentName:"a"},"deleteProviderPayload"))))}l.isMDXComponent=!0},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,m=l["".concat(i,".").concat(b)]||l[b]||s[b]||a;return r?o.a.createElement(m,c(c({ref:t},p),{},{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);