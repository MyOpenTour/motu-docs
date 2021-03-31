(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{352:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return a})),n.d(r,"toc",(function(){return c})),n.d(r,"Tag",(function(){return p})),n.d(r,"default",(function(){return u}));var t=n(3),o=n(7),s=(n(0),n(758)),i={id:"users-permissions-login-payload",title:"UsersPermissionsLoginPayload"},a={unversionedId:"v1/objects/users-permissions-login-payload",id:"v1/objects/users-permissions-login-payload",isDocsHomePage:!1,title:"UsersPermissionsLoginPayload",description:"<span",source:"@site/docs/v1/objects/users-permissions-login-payload.mdx",slug:"/v1/objects/users-permissions-login-payload",permalink:"/v1/objects/users-permissions-login-payload",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/users-permissions-login-payload.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"UserPermissionsPasswordPayload",permalink:"/v1/objects/user-permissions-password-payload"},next:{title:"UsersPermissionsMe",permalink:"/v1/objects/users-permissions-me"}},c=[{value:"Fields",id:"fields",children:[]}],p=function(e){var r=e.children,n=e.color;return Object(s.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},l={toc:c,Tag:p};function u(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(s.b)("p",null,"No description"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-graphql"},"type UsersPermissionsLoginPayload {\n  jwt: String\n  user: UsersPermissionsMe!\n}\n")),Object(s.b)("h3",{id:"fields"},"Fields"),Object(s.b)("h4",{id:"jwt-string"},Object(s.b)("inlineCode",{parentName:"h4"},"jwt")," (",Object(s.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(s.b)("inlineCode",{parentName:"a"},"String")),")"),Object(s.b)("h4",{id:"user-userspermissionsme"},Object(s.b)("inlineCode",{parentName:"h4"},"user")," (",Object(s.b)("a",{parentName:"h4",href:"/v1/objects/users-permissions-me"},Object(s.b)("inlineCode",{parentName:"a"},"UsersPermissionsMe!")),")"))}u.isMDXComponent=!0},758:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=t,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return n?o.a.createElement(b,a(a({ref:r},p),{},{components:n})):o.a.createElement(b,a({ref:r},p))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:t,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);