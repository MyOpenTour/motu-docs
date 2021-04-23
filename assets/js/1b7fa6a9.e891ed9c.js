(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(763)),a={id:"process-flow",title:"Process Flows"},s={unversionedId:"en/process-flow",id:"en/process-flow",isDocsHomePage:!1,title:"Process Flows",description:"Together with the MOTU project team, process flows for the customer journey have been defined. This helps to scope the necessary functions required in the API building blocks. The goal is to accommodate different business models and variations of Tourist scenarious within these functional flows.",source:"@site/docs/en/process-flow.md",slug:"/en/process-flow",permalink:"/en/process-flow",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/en/process-flow.md",version:"current",sidebar:"docs",previous:{title:"Versioning and releases",permalink:"/en/versioning"},next:{title:"Authentication",permalink:"/en/authentication"}},c=[{value:"MOTU-API-Architecture",id:"motu-api-architecture",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Together with the MOTU project team, process flows for the customer journey have been defined. This helps to scope the necessary functions required in the API building blocks. The goal is to accommodate different business models and variations of Tourist scenarious within these functional flows."),Object(i.b)("h2",{id:"motu-api-architecture"},"MOTU-API-Architecture"),Object(i.b)("p",null,Object(i.b)("img",{alt:"MOTU_Architecture",src:n(776).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Operator Information / General Information: Gives static information on the provider according to the MOTU standard."),Object(i.b)("li",{parentName:"ul"},"Privacy and Registration"),Object(i.b)("li",{parentName:"ul"},"Planning: Gives information about availability, estimated travel time and costs."),Object(i.b)("li",{parentName:"ul"},"Booking: Allows reservation of specific assets for a specific place, time and date."),Object(i.b)("li",{parentName:"ul"},"Trip Execution: Allows access to the asset(s) and travel during the booked period."),Object(i.b)("li",{parentName:"ul"},"Payment: Allows settlement between Provider and Tourist. Supports different business models (i.e., pay-as-you-go or subscription-based)."),Object(i.b)("li",{parentName:"ul"},"Support: Assists users in the solution of operational troubles encountered during any part of the process. Connects with optional support modules."),Object(i.b)("li",{parentName:"ul"},"Asset Information: Is defined as a separate module that can be used by other modules to supplement API calls with specific asset information where applicable."),Object(i.b)("li",{parentName:"ul"},"Optional modules: The more dynamic functional blocks have additional optional modules which are used for the execution of sub-processes derived from the main functions which might not be desired or required depending on the scope of the Business Models.")))}u.isMDXComponent=!0},763:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},776:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/MOTU_Architecture-3c1e2e2e5da2fa9c244f6c0f5803cbc5.png"}}]);