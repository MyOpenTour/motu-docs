(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"Tag",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(758)),i={id:"update-category-input",title:"updateCategoryInput"},p={unversionedId:"v1/inputs/update-category-input",id:"v1/inputs/update-category-input",isDocsHomePage:!1,title:"updateCategoryInput",description:"<span",source:"@site/docs/v1/inputs/update-category-input.mdx",slug:"/v1/inputs/update-category-input",permalink:"/v1/inputs/update-category-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/update-category-input.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"updateActivityInput",permalink:"/v1/inputs/update-activity-input"},next:{title:"updateCouponInput",permalink:"/v1/inputs/update-coupon-input"}},u=[{value:"Fields",id:"fields",children:[]}],c=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:u,Tag:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type updateCategoryInput {\n  where: InputID\n  data: editCategoryInput\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"where-inputid"},Object(o.b)("inlineCode",{parentName:"h4"},"where")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/inputs/input-id"},Object(o.b)("inlineCode",{parentName:"a"},"InputID")),")"),Object(o.b)("h4",{id:"data-editcategoryinput"},Object(o.b)("inlineCode",{parentName:"h4"},"data")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/inputs/edit-category-input"},Object(o.b)("inlineCode",{parentName:"a"},"editCategoryInput")),")"))}l.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||s[b]||o;return n?a.a.createElement(f,p(p({ref:t},c),{},{components:n})):a.a.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);