(window.webpackJsonp=window.webpackJsonp||[]).push([[565],{635:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),a=(n(0),n(763)),o={id:"update-activity-input",title:"updateActivityInput"},c={unversionedId:"v1/inputs/update-activity-input",id:"v1/inputs/update-activity-input",isDocsHomePage:!1,title:"updateActivityInput",description:"<span",source:"@site/docs/v1/inputs/update-activity-input.mdx",slug:"/v1/inputs/update-activity-input",permalink:"/v1/inputs/update-activity-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/update-activity-input.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"RoleInput",permalink:"/v1/inputs/role-input"},next:{title:"updateCategoryInput",permalink:"/v1/inputs/update-category-input"}},p=[{value:"Fields",id:"fields",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:p,Tag:u};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type updateActivityInput {\n  where: InputID\n  data: editActivityInput\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"where-inputid"},Object(a.b)("inlineCode",{parentName:"h4"},"where")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/inputs/input-id"},Object(a.b)("inlineCode",{parentName:"a"},"InputID")),")"),Object(a.b)("h4",{id:"data-editactivityinput"},Object(a.b)("inlineCode",{parentName:"h4"},"data")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/inputs/edit-activity-input"},Object(a.b)("inlineCode",{parentName:"a"},"editActivityInput")),")"))}l.isMDXComponent=!0},763:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),d=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,f=l["".concat(o,".").concat(b)]||l[b]||s[b]||a;return n?i.a.createElement(f,c(c({ref:t},u),{},{components:n})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);