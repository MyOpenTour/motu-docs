(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{399:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(3),u=n(7),a=(n(0),n(758)),i={id:"update-currency-input",title:"updateCurrencyInput"},c={unversionedId:"v1/inputs/update-currency-input",id:"v1/inputs/update-currency-input",isDocsHomePage:!1,title:"updateCurrencyInput",description:"<span",source:"@site/docs/v1/inputs/update-currency-input.mdx",slug:"/v1/inputs/update-currency-input",permalink:"/v1/inputs/update-currency-input",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/inputs/update-currency-input.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"updateCouponInput",permalink:"/v1/inputs/update-coupon-input"},next:{title:"updateFeatureInput",permalink:"/v1/inputs/update-feature-input"}},p=[{value:"Fields",id:"fields",children:[]}],o=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:p,Tag:o};function l(e){var t=e.components,n=Object(u.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type updateCurrencyInput {\n  where: InputID\n  data: editCurrencyInput\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"where-inputid"},Object(a.b)("inlineCode",{parentName:"h4"},"where")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/inputs/input-id"},Object(a.b)("inlineCode",{parentName:"a"},"InputID")),")"),Object(a.b)("h4",{id:"data-editcurrencyinput"},Object(a.b)("inlineCode",{parentName:"h4"},"data")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/inputs/edit-currency-input"},Object(a.b)("inlineCode",{parentName:"a"},"editCurrencyInput")),")"))}l.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),u=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var o=u.a.createContext({}),d=function(e){var t=u.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return u.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return u.a.createElement(u.a.Fragment,{},t)}},b=u.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||s[b]||a;return n?u.a.createElement(f,c(c({ref:t},o),{},{components:n})):u.a.createElement(f,c({ref:t},o))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<a;o++)i[o]=n[o];return u.a.createElement.apply(null,i)}return u.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);