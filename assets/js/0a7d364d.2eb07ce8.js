(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"Tag",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(758)),a={id:"questionary-connection-with-family",title:"QuestionaryConnectionWith_family"},c={unversionedId:"v1/objects/questionary-connection-with-family",id:"v1/objects/questionary-connection-with-family",isDocsHomePage:!1,title:"QuestionaryConnectionWith_family",description:"<span",source:"@site/docs/v1/objects/questionary-connection-with-family.mdx",slug:"/v1/objects/questionary-connection-with-family",permalink:"/v1/objects/questionary-connection-with-family",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/questionary-connection-with-family.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"QuestionaryConnectionWith_children",permalink:"/v1/objects/questionary-connection-with-children"},next:{title:"QuestionaryGroupBy",permalink:"/v1/objects/questionary-group-by"}},u=[{value:"Fields",id:"fields",children:[]}],l=function(e){var n=e.children,t=e.color;return Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},s={toc:u,Tag:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type QuestionaryConnectionWith_family {\n  key: Boolean\n  connection: QuestionaryConnection\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"key-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"key")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/boolean"},Object(i.b)("inlineCode",{parentName:"a"},"Boolean")),")"),Object(i.b)("h4",{id:"connection-questionaryconnection"},Object(i.b)("inlineCode",{parentName:"h4"},"connection")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/questionary-connection"},Object(i.b)("inlineCode",{parentName:"a"},"QuestionaryConnection")),")"))}p.isMDXComponent=!0},758:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},y=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),y=r,f=p["".concat(a,".").concat(y)]||p[y]||b[y]||i;return t?o.a.createElement(f,c(c({ref:n},l),{},{components:t})):o.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=y;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);