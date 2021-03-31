(window.webpackJsonp=window.webpackJsonp||[]).push([[669],{739:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return p})),t.d(n,"Tag",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),i=(t(0),t(758)),c={id:"review-connection-provider",title:"ReviewConnectionProvider"},a={unversionedId:"v1/objects/review-connection-provider",id:"v1/objects/review-connection-provider",isDocsHomePage:!1,title:"ReviewConnectionProvider",description:"<span",source:"@site/docs/v1/objects/review-connection-provider.mdx",slug:"/v1/objects/review-connection-provider",permalink:"/v1/objects/review-connection-provider",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/review-connection-provider.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"ReviewConnectionNote",permalink:"/v1/objects/review-connection-note"},next:{title:"ReviewConnectionPublished_at",permalink:"/v1/objects/review-connection-published-at"}},p=[{value:"Fields",id:"fields",children:[]}],u=function(e){var n=e.children,t=e.color;return Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},l={toc:p,Tag:u};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type ReviewConnectionProvider {\n  key: ID\n  connection: ReviewConnection\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"key-id"},Object(i.b)("inlineCode",{parentName:"h4"},"key")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(i.b)("h4",{id:"connection-reviewconnection"},Object(i.b)("inlineCode",{parentName:"h4"},"connection")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/review-connection"},Object(i.b)("inlineCode",{parentName:"a"},"ReviewConnection")),")"))}d.isMDXComponent=!0},758:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return v}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,v=d["".concat(c,".").concat(b)]||d[b]||s[b]||i;return t?o.a.createElement(v,a(a({ref:n},u),{},{components:t})):o.a.createElement(v,a({ref:n},u))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=b;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);