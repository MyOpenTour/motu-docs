(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{452:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"Tag",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(763)),o={id:"delete-activity",title:"deleteActivity"},c={unversionedId:"v1/mutations/delete-activity",id:"v1/mutations/delete-activity",isDocsHomePage:!1,title:"deleteActivity",description:"<span",source:"@site/docs/v1/mutations/delete-activity.mdx",slug:"/v1/mutations/delete-activity",permalink:"/v1/mutations/delete-activity",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/mutations/delete-activity.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"createUser",permalink:"/v1/mutations/create-user"},next:{title:"deleteCategory",permalink:"/v1/mutations/delete-category"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:u,Tag:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"deleteActivity(\n  input: deleteActivityInput\n): deleteActivityPayload\n\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"input-deleteactivityinput"},Object(a.b)("inlineCode",{parentName:"h4"},"input")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/inputs/delete-activity-input"},Object(a.b)("inlineCode",{parentName:"a"},"deleteActivityInput")),")"),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("h4",{id:"deleteactivitypayload"},Object(a.b)("a",{parentName:"h4",href:"/v1/objects/delete-activity-payload"},Object(a.b)("inlineCode",{parentName:"a"},"deleteActivityPayload"))))}d.isMDXComponent=!0},763:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},y=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(n),y=r,b=d["".concat(o,".").concat(y)]||d[y]||s[y]||a;return n?i.a.createElement(b,c(c({ref:t},l),{},{components:n})):i.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=y;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);