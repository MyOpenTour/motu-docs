(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{143:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return d})),t.d(r,"toc",(function(){return i})),t.d(r,"Tag",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),a=(t(0),t(758)),c={id:"update-order-payload",title:"updateOrderPayload"},d={unversionedId:"v1/objects/update-order-payload",id:"v1/objects/update-order-payload",isDocsHomePage:!1,title:"updateOrderPayload",description:"<span",source:"@site/docs/v1/objects/update-order-payload.mdx",slug:"/v1/objects/update-order-payload",permalink:"/v1/objects/update-order-payload",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/update-order-payload.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"updateOpeningHourPayload",permalink:"/v1/objects/update-opening-hour-payload"},next:{title:"updateProviderPayload",permalink:"/v1/objects/update-provider-payload"}},i=[{value:"Fields",id:"fields",children:[]}],p=function(e){var r=e.children,t=e.color;return Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},u={toc:i,Tag:p};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type updateOrderPayload {\n  order: Order\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"order-order"},Object(a.b)("inlineCode",{parentName:"h4"},"order")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/objects/order"},Object(a.b)("inlineCode",{parentName:"a"},"Order")),")"))}l.isMDXComponent=!0},758:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(t),b=n,f=l["".concat(c,".").concat(b)]||l[b]||s[b]||a;return t?o.a.createElement(f,d(d({ref:r},p),{},{components:t})):o.a.createElement(f,d({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,c[1]=d;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);