(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{348:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"Tag",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),i=(t(0),t(758)),o={id:"enum-itinerary-itinerarystate",title:"ENUM_ITINERARY_ITINERARYSTATE"},c={unversionedId:"v1/enums/enum-itinerary-itinerarystate",id:"v1/enums/enum-itinerary-itinerarystate",isDocsHomePage:!1,title:"ENUM_ITINERARY_ITINERARYSTATE",description:"<span",source:"@site/docs/v1/enums/enum-itinerary-itinerarystate.mdx",slug:"/v1/enums/enum-itinerary-itinerarystate",permalink:"/v1/enums/enum-itinerary-itinerarystate",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/enums/enum-itinerary-itinerarystate.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"ENUM_COUPON_DURATION",permalink:"/v1/enums/enum-coupon-duration"},next:{title:"ENUM_LEG_LEGSTATE",permalink:"/v1/enums/enum-leg-legstate"}},u=[{value:"Values",id:"values",children:[]}],l=function(e){var n=e.children,t=e.color;return Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},p={toc:u,Tag:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"enum ENUM_ITINERARY_ITINERARYSTATE {\n  START\n  PLANNED\n  PAID\n  ACTIVATED\n  CANCELLED\n  CANCELLED_WITH_ERRORS\n  FINISHED\n}\n")),Object(i.b)("h3",{id:"values"},"Values"),Object(i.b)("h4",{id:"start"},Object(i.b)("inlineCode",{parentName:"h4"},"START")),Object(i.b)("h4",{id:"planned"},Object(i.b)("inlineCode",{parentName:"h4"},"PLANNED")),Object(i.b)("h4",{id:"paid"},Object(i.b)("inlineCode",{parentName:"h4"},"PAID")),Object(i.b)("h4",{id:"activated"},Object(i.b)("inlineCode",{parentName:"h4"},"ACTIVATED")),Object(i.b)("h4",{id:"cancelled"},Object(i.b)("inlineCode",{parentName:"h4"},"CANCELLED")),Object(i.b)("h4",{id:"cancelled_with_errors"},Object(i.b)("inlineCode",{parentName:"h4"},"CANCELLED_WITH_ERRORS")),Object(i.b)("h4",{id:"finished"},Object(i.b)("inlineCode",{parentName:"h4"},"FINISHED")))}s.isMDXComponent=!0},758:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||i;return t?a.a.createElement(m,c(c({ref:n},l),{},{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);