(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{359:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(758)),u={id:"update-role",title:"updateRole"},i={unversionedId:"v1/mutations/update-role",id:"v1/mutations/update-role",isDocsHomePage:!1,title:"updateRole",description:"<span",source:"@site/docs/v1/mutations/update-role.mdx",slug:"/v1/mutations/update-role",permalink:"/v1/mutations/update-role",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/mutations/update-role.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"updateReview",permalink:"/v1/mutations/update-review"},next:{title:"updateUser",permalink:"/v1/mutations/update-user"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],c=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:p,Tag:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Update an existing role"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"updateRole(\n  input: updateRoleInput\n): updateRolePayload\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"input-updateroleinput"},Object(o.b)("inlineCode",{parentName:"h4"},"input")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/inputs/update-role-input"},Object(o.b)("inlineCode",{parentName:"a"},"updateRoleInput")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"updaterolepayload"},Object(o.b)("a",{parentName:"h4",href:"/v1/objects/update-role-payload"},Object(o.b)("inlineCode",{parentName:"a"},"updateRolePayload"))))}d.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(u,".").concat(b)]||d[b]||s[b]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var c=2;c<o;c++)u[c]=n[c];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);