(window.webpackJsonp=window.webpackJsonp||[]).push([[503],{573:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(763)),a={id:"notification",title:"notification"},c={unversionedId:"v1/queries/notification",id:"v1/queries/notification",isDocsHomePage:!1,title:"notification",description:"<span",source:"@site/docs/v1/queries/notification.mdx",slug:"/v1/queries/notification",permalink:"/v1/queries/notification",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/queries/notification.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"me",permalink:"/v1/queries/me"},next:{title:"notifications",permalink:"/v1/queries/notifications"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:u,Tag:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"notification(\n  id: ID!\n  publicationState: PublicationState\n): Notification\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"id-id"},Object(o.b)("inlineCode",{parentName:"h4"},"id")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.b)("h4",{id:"publicationstate-publicationstate"},Object(o.b)("inlineCode",{parentName:"h4"},"publicationState")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/enums/publication-state"},Object(o.b)("inlineCode",{parentName:"a"},"PublicationState")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"notification"},Object(o.b)("a",{parentName:"h4",href:"/v1/objects/notification"},Object(o.b)("inlineCode",{parentName:"a"},"Notification"))))}s.isMDXComponent=!0},763:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),f=r,d=s["".concat(a,".").concat(f)]||s[f]||b[f]||o;return n?i.a.createElement(d,c(c({ref:t},p),{},{components:n})):i.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);