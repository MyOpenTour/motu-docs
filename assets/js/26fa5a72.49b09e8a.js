(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{175:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return p})),r.d(t,"Tag",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),o=(r(0),r(763)),c={id:"skip",title:"skip"},a={unversionedId:"v1/directives/skip",id:"v1/directives/skip",isDocsHomePage:!1,title:"skip",description:"<span",source:"@site/docs/v1/directives/skip.mdx",slug:"/v1/directives/skip",permalink:"/v1/directives/skip",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/directives/skip.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"include",permalink:"/v1/directives/include"},next:{title:"specifiedBy",permalink:"/v1/directives/specified-by"}},p=[{value:"Arguments",id:"arguments",children:[]}],u=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:p,Tag:u};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Directs the executor to skip this field or fragment when the ",Object(o.b)("inlineCode",{parentName:"p"},"if")," argument is true."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"directive @skip(\n  if: Boolean!\n)\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"if-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"if")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/scalars/boolean"},Object(o.b)("inlineCode",{parentName:"a"},"Boolean!")),")"),Object(o.b)("p",null,"Skipped when true."))}l.isMDXComponent=!0},763:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),f=n,b=l["".concat(c,".").concat(f)]||l[f]||d[f]||o;return r?i.a.createElement(b,a(a({ref:t},u),{},{components:r})):i.a.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);