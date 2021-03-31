(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{479:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return u})),n.d(e,"Tag",(function(){return p})),n.d(e,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(758)),o={id:"update-activity",title:"updateActivity"},c={unversionedId:"v1/mutations/update-activity",id:"v1/mutations/update-activity",isDocsHomePage:!1,title:"updateActivity",description:"<span",source:"@site/docs/v1/mutations/update-activity.mdx",slug:"/v1/mutations/update-activity",permalink:"/v1/mutations/update-activity",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/mutations/update-activity.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"resetPassword",permalink:"/v1/mutations/reset-password"},next:{title:"updateCategory",permalink:"/v1/mutations/update-category"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=function(t){var e=t.children,n=t.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e)},d={toc:u,Tag:p};function l(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"updateActivity(\n  input: updateActivityInput\n): updateActivityPayload\n\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"input-updateactivityinput"},Object(i.b)("inlineCode",{parentName:"h4"},"input")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/inputs/update-activity-input"},Object(i.b)("inlineCode",{parentName:"a"},"updateActivityInput")),")"),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("h4",{id:"updateactivitypayload"},Object(i.b)("a",{parentName:"h4",href:"/v1/objects/update-activity-payload"},Object(i.b)("inlineCode",{parentName:"a"},"updateActivityPayload"))))}l.isMDXComponent=!0},758:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=a.a.createContext({}),d=function(t){var e=a.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=d(t.components);return a.a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},y=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),l=d(n),y=r,b=l["".concat(o,".").concat(y)]||l[y]||s[y]||i;return n?a.a.createElement(b,c(c({ref:e},p),{},{components:n})):a.a.createElement(b,c({ref:e},p))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=y;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);