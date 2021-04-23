(window.webpackJsonp=window.webpackJsonp||[]).push([[668],{738:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return c})),t.d(n,"Tag",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(763)),i={id:"enum-provider-business-status",title:"ENUM_PROVIDER_BUSINESS_STATUS"},u={unversionedId:"v1/enums/enum-provider-business-status",id:"v1/enums/enum-provider-business-status",isDocsHomePage:!1,title:"ENUM_PROVIDER_BUSINESS_STATUS",description:"<span",source:"@site/docs/v1/enums/enum-provider-business-status.mdx",slug:"/v1/enums/enum-provider-business-status",permalink:"/v1/enums/enum-provider-business-status",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/enums/enum-provider-business-status.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"ENUM_LEG_MODE",permalink:"/v1/enums/enum-leg-mode"},next:{title:"ENUM_PROVIDER_PRICE",permalink:"/v1/enums/enum-provider-price"}},c=[{value:"Values",id:"values",children:[]}],s=function(e){var n=e.children,t=e.color;return Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},p={toc:c,Tag:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"enum ENUM_PROVIDER_BUSINESS_STATUS {\n  OPERATIONAL\n  CLOSED_TEMPORARILY\n  CLOSED_PERMANENTLY\n}\n")),Object(a.b)("h3",{id:"values"},"Values"),Object(a.b)("h4",{id:"operational"},Object(a.b)("inlineCode",{parentName:"h4"},"OPERATIONAL")),Object(a.b)("h4",{id:"closed_temporarily"},Object(a.b)("inlineCode",{parentName:"h4"},"CLOSED_TEMPORARILY")),Object(a.b)("h4",{id:"closed_permanently"},Object(a.b)("inlineCode",{parentName:"h4"},"CLOSED_PERMANENTLY")))}l.isMDXComponent=!0},763:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(t),m=r,b=l["".concat(i,".").concat(m)]||l[m]||d[m]||a;return t?o.a.createElement(b,u(u({ref:n},s),{},{components:t})):o.a.createElement(b,u({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);