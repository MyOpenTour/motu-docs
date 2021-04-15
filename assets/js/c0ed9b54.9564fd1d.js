(window.webpackJsonp=window.webpackJsonp||[]).push([[516],{586:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"Tag",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(758)),o={id:"update-order-input",title:"updateOrderInput"},p={unversionedId:"v1/inputs/update-order-input",id:"v1/inputs/update-order-input",isDocsHomePage:!1,title:"updateOrderInput",description:"<span",source:"@site/docs/v1/inputs/update-order-input.mdx",slug:"/v1/inputs/update-order-input",permalink:"/v1/inputs/update-order-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/update-order-input.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"updateOpeningHourInput",permalink:"/v1/inputs/update-opening-hour-input"},next:{title:"updateProviderInput",permalink:"/v1/inputs/update-provider-input"}},u=[{value:"Fields",id:"fields",children:[]}],c=function(e){var t=e.children,r=e.color;return Object(i.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:u,Tag:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type updateOrderInput {\n  where: InputID\n  data: editOrderInput\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"where-inputid"},Object(i.b)("inlineCode",{parentName:"h4"},"where")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/inputs/input-id"},Object(i.b)("inlineCode",{parentName:"a"},"InputID")),")"),Object(i.b)("h4",{id:"data-editorderinput"},Object(i.b)("inlineCode",{parentName:"h4"},"data")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/inputs/edit-order-input"},Object(i.b)("inlineCode",{parentName:"a"},"editOrderInput")),")"))}l.isMDXComponent=!0},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=d(r),b=n,f=l["".concat(o,".").concat(b)]||l[b]||s[b]||i;return r?a.a.createElement(f,p(p({ref:t},c),{},{components:r})):a.a.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);