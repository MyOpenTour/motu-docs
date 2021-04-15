(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{411:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"Tag",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(3),o=n(7),a=(n(0),n(758)),i={id:"email-confirmation",title:"emailConfirmation"},c={unversionedId:"v1/mutations/email-confirmation",id:"v1/mutations/email-confirmation",isDocsHomePage:!1,title:"emailConfirmation",description:"<span",source:"@site/docs/v1/mutations/email-confirmation.mdx",slug:"/v1/mutations/email-confirmation",permalink:"/v1/mutations/email-confirmation",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/mutations/email-confirmation.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"deleteUser",permalink:"/v1/mutations/delete-user"},next:{title:"forgotPassword",permalink:"/v1/mutations/forgot-password"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:s,Tag:u};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"emailConfirmation(\n  confirmation: String!\n): UsersPermissionsLoginPayload\n\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"confirmation-string"},Object(a.b)("inlineCode",{parentName:"h4"},"confirmation")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("h4",{id:"userspermissionsloginpayload"},Object(a.b)("a",{parentName:"h4",href:"/v1/objects/users-permissions-login-payload"},Object(a.b)("inlineCode",{parentName:"a"},"UsersPermissionsLoginPayload"))))}m.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);