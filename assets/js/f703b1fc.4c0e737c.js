(window.webpackJsonp=window.webpackJsonp||[]).push([[661],{731:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"Tag",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(758)),a={id:"login",title:"login"},s={unversionedId:"v1/mutations/login",id:"v1/mutations/login",isDocsHomePage:!1,title:"login",description:"<span",source:"@site/docs/v1/mutations/login.mdx",slug:"/v1/mutations/login",permalink:"/v1/mutations/login",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/mutations/login.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"forgotPassword",permalink:"/v1/mutations/forgot-password"},next:{title:"multipleUpload",permalink:"/v1/mutations/multiple-upload"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=function(e){var n=e.children,t=e.color;return Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},p={toc:c,Tag:u};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"login(\n  input: UsersPermissionsLoginInput!\n): UsersPermissionsLoginPayload!\n\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"input-userspermissionslogininput"},Object(i.b)("inlineCode",{parentName:"h4"},"input")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/inputs/users-permissions-login-input"},Object(i.b)("inlineCode",{parentName:"a"},"UsersPermissionsLoginInput!")),")"),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("h4",{id:"userspermissionsloginpayload"},Object(i.b)("a",{parentName:"h4",href:"/v1/objects/users-permissions-login-payload"},Object(i.b)("inlineCode",{parentName:"a"},"UsersPermissionsLoginPayload"))))}l.isMDXComponent=!0},758:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),d=r,b=l["".concat(a,".").concat(d)]||l[d]||m[d]||i;return t?o.a.createElement(b,s(s({ref:n},u),{},{components:t})):o.a.createElement(b,s({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);