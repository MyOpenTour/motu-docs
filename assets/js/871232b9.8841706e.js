(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{407:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return u})),n.d(t,"Tag",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),c=(n(0),n(758)),o={id:"include",title:"include"},a={unversionedId:"v1/directives/include",id:"v1/directives/include",isDocsHomePage:!1,title:"include",description:"<span",source:"@site/docs/v1/directives/include.mdx",slug:"/v1/directives/include",permalink:"/v1/directives/include",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/directives/include.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"deprecated",permalink:"/v1/directives/deprecated"},next:{title:"skip",permalink:"/v1/directives/skip"}},u=[{value:"Arguments",id:"arguments",children:[]}],l=function(e){var t=e.children,n=e.color;return Object(c.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:u,Tag:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Directs the executor to include this field or fragment only when the ",Object(c.b)("inlineCode",{parentName:"p"},"if")," argument is true."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"directive @include(\n  if: Boolean!\n)\n")),Object(c.b)("h3",{id:"arguments"},"Arguments"),Object(c.b)("h4",{id:"if-boolean"},Object(c.b)("inlineCode",{parentName:"h4"},"if")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/scalars/boolean"},Object(c.b)("inlineCode",{parentName:"a"},"Boolean!")),")"),Object(c.b)("p",null,"Included when true."))}d.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,b=d["".concat(o,".").concat(f)]||d[f]||s[f]||c;return n?i.a.createElement(b,a(a({ref:t},l),{},{components:n})):i.a.createElement(b,a({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<c;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);