(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{535:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"Tag",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),c=(t(0),t(758)),a={id:"questionary-connection-bdate",title:"QuestionaryConnectionBdate"},i={unversionedId:"v1/objects/questionary-connection-bdate",id:"v1/objects/questionary-connection-bdate",isDocsHomePage:!1,title:"QuestionaryConnectionBdate",description:"<span",source:"@site/docs/v1/objects/questionary-connection-bdate.mdx",slug:"/v1/objects/questionary-connection-bdate",permalink:"/v1/objects/questionary-connection-bdate",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/questionary-connection-bdate.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"QuestionaryConnection",permalink:"/v1/objects/questionary-connection"},next:{title:"QuestionaryConnectionCareer_industry",permalink:"/v1/objects/questionary-connection-career-industry"}},u=[{value:"Fields",id:"fields",children:[]}],s=function(e){var n=e.children,t=e.color;return Object(c.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},p={toc:u,Tag:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"No description"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"type QuestionaryConnectionBdate {\n  key: ID\n  connection: QuestionaryConnection\n}\n")),Object(c.b)("h3",{id:"fields"},"Fields"),Object(c.b)("h4",{id:"key-id"},Object(c.b)("inlineCode",{parentName:"h4"},"key")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(c.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(c.b)("h4",{id:"connection-questionaryconnection"},Object(c.b)("inlineCode",{parentName:"h4"},"connection")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/objects/questionary-connection"},Object(c.b)("inlineCode",{parentName:"a"},"QuestionaryConnection")),")"))}l.isMDXComponent=!0},758:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return y}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(t),d=r,y=l["".concat(a,".").concat(d)]||l[d]||b[d]||c;return t?o.a.createElement(y,i(i({ref:n},s),{},{components:t})):o.a.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);