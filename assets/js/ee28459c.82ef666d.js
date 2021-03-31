(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{702:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"Tag",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(758)),o={id:"update-provider-input",title:"updateProviderInput"},p={unversionedId:"v1/inputs/update-provider-input",id:"v1/inputs/update-provider-input",isDocsHomePage:!1,title:"updateProviderInput",description:"<span",source:"@site/docs/v1/inputs/update-provider-input.mdx",slug:"/v1/inputs/update-provider-input",permalink:"/v1/inputs/update-provider-input",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/inputs/update-provider-input.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"updateOrderInput",permalink:"/v1/inputs/update-order-input"},next:{title:"updateQuestionaryInput",permalink:"/v1/inputs/update-questionary-input"}},u=[{value:"Fields",id:"fields",children:[]}],c=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:u,Tag:c};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type updateProviderInput {\n  where: InputID\n  data: editProviderInput\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"where-inputid"},Object(a.b)("inlineCode",{parentName:"h4"},"where")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/inputs/input-id"},Object(a.b)("inlineCode",{parentName:"a"},"InputID")),")"),Object(a.b)("h4",{id:"data-editproviderinput"},Object(a.b)("inlineCode",{parentName:"h4"},"data")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/inputs/edit-provider-input"},Object(a.b)("inlineCode",{parentName:"a"},"editProviderInput")),")"))}l.isMDXComponent=!0},758:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=d(r),b=n,f=l["".concat(o,".").concat(b)]||l[b]||s[b]||a;return r?i.a.createElement(f,p(p({ref:t},c),{},{components:r})):i.a.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);