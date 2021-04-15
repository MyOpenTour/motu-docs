(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{481:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"Tag",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),i=(t(0),t(758)),a={id:"edit-component-opening-hours-opening-hour-input",title:"editComponentOpeningHoursOpeningHourInput"},p={unversionedId:"v1/inputs/edit-component-opening-hours-opening-hour-input",id:"v1/inputs/edit-component-opening-hours-opening-hour-input",isDocsHomePage:!1,title:"editComponentOpeningHoursOpeningHourInput",description:"<span",source:"@site/docs/v1/inputs/edit-component-opening-hours-opening-hour-input.mdx",slug:"/v1/inputs/edit-component-opening-hours-opening-hour-input",permalink:"/v1/inputs/edit-component-opening-hours-opening-hour-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/edit-component-opening-hours-opening-hour-input.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"editCategoryInput",permalink:"/v1/inputs/edit-category-input"},next:{title:"editCouponInput",permalink:"/v1/inputs/edit-coupon-input"}},c=[{value:"Fields",id:"fields",children:[]}],u=function(e){var n=e.children,t=e.color;return Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},s={toc:c,Tag:u};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type editComponentOpeningHoursOpeningHourInput {\n  id: ID\n  day_interval: String\n  opening_hour: Time\n  closing_hour: Time\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(i.b)("h4",{id:"day_interval-string"},Object(i.b)("inlineCode",{parentName:"h4"},"day_interval")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"opening_hour-time"},Object(i.b)("inlineCode",{parentName:"h4"},"opening_hour")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/time"},Object(i.b)("inlineCode",{parentName:"a"},"Time")),")"),Object(i.b)("h4",{id:"closing_hour-time"},Object(i.b)("inlineCode",{parentName:"h4"},"closing_hour")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/time"},Object(i.b)("inlineCode",{parentName:"a"},"Time")),")"))}d.isMDXComponent=!0},758:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),b=r,m=d["".concat(a,".").concat(b)]||d[b]||l[b]||i;return t?o.a.createElement(m,p(p({ref:n},u),{},{components:t})):o.a.createElement(m,p({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);