(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{280:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"Tag",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),i=r(7),o=(r(0),r(758)),a={id:"delete-provider-input",title:"deleteProviderInput"},p={unversionedId:"v1/inputs/delete-provider-input",id:"v1/inputs/delete-provider-input",isDocsHomePage:!1,title:"deleteProviderInput",description:"<span",source:"@site/docs/v1/inputs/delete-provider-input.mdx",slug:"/v1/inputs/delete-provider-input",permalink:"/v1/inputs/delete-provider-input",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/inputs/delete-provider-input.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"deleteOrderInput",permalink:"/v1/inputs/delete-order-input"},next:{title:"deleteQuestionaryInput",permalink:"/v1/inputs/delete-questionary-input"}},u=[{value:"Fields",id:"fields",children:[]}],c=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:u,Tag:c};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type deleteProviderInput {\n  where: InputID\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"where-inputid"},Object(o.b)("inlineCode",{parentName:"h4"},"where")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/inputs/input-id"},Object(o.b)("inlineCode",{parentName:"a"},"InputID")),")"))}d.isMDXComponent=!0},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),l=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,b=d["".concat(a,".").concat(f)]||d[f]||s[f]||o;return r?i.a.createElement(b,p(p({ref:t},c),{},{components:r})):i.a.createElement(b,p({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);