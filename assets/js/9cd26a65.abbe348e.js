(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{472:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var i=t(3),r=t(7),o=(t(0),t(758)),a={id:"introduction",title:"MOTU",sidebar_label:"Introduction"},s={unversionedId:"en/introduction",id:"en/introduction",isDocsHomePage:!1,title:"MOTU",description:"Introduction",source:"@site/docs/en/introduction.md",slug:"/en/introduction",permalink:"/en/introduction",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/en/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Versioning and releases",permalink:"/en/versioning"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Who is involved?",id:"who-is-involved",children:[]},{value:"What is in this version?",id:"what-is-in-this-version",children:[]},{value:"Versioning and releases",id:"versioning-and-releases",children:[]}],c={toc:l};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"With MOTU travellers can plan, book, involve in loyalty program and execute their trips using any available pay for all of them via integrated apps. For MOTU to be successful, providers are required to share their services and availability of their assets in a digital form. To facilitate MOTU providers and thus enable the deployment of MOTU services, providers are also required to standardize the digital form to facilitate access to their information. The MOTU-API (MyOpenTour - Application Programming Interface) is a standardized and technical interface between MOTU, users, providers and other MOTU services."),Object(o.b)("p",null,"Concept of having a standard-based Application Programming Interface (API) from MOTU to or from services and applications. It allows all participating companies to communicate about planning, booking, execution, support, general information and payments of end-user specific iternerary. Using the MOTU-API enhances the interoperability between parties in the tourism ecosystem."),Object(o.b)("p",null,"In this document for the MOTU-API we look into the necessary functional requirements for the interoperability between involved roles and MOTU. The goal of this document is to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Define the necessary scope for full interoperability between roles for the deployment of MOTU services, always keeping the customer journey in mind to determine which API calls are needed between MOTU services and other involved roles."),Object(o.b)("li",{parentName:"ul"},"Define the necessary parameters and values to fulfil this scope."),Object(o.b)("li",{parentName:"ul"},"Define the available parameters in various already available APIs and propose amendments where applicable.")),Object(o.b)("h2",{id:"who-is-involved"},"Who is involved?"),Object(o.b)("p",null,"This document has been written to consolidate the work of the MOTU web services. The MOTU is a company started in the Russian Federation in 2020. The goal of envolved persons is to provide standardised APIs to facilitate the development of the MOTU. MOTU-API will be used as standard for the several MOTU pilots in The Russian Federation."),Object(o.b)("h2",{id:"what-is-in-this-version"},"What is in this version?"),Object(o.b)("p",null,"The first implementations of the MOTU-API will took place in a couple of months. The API is now capable of describing a full MOTU journey."),Object(o.b)("p",null,"These results are especially reflected in a simplified object model in the planning phase and a new endpoint with self-describing facilities was created. This last one is needed for (inter)national scale-up, to be informed of what the addressed providers is capable of."),Object(o.b)("h2",{id:"versioning-and-releases"},"Versioning and releases"),Object(o.b)("p",null,"Changes in the API are inevitable since we are exploring a new field and knowledge and experience improves.\nThese changes are controlled using milestones and semantic versioning.\nFirst, the product owners defines functional milestones for the API.\nThe milestones refer to new capabilities of the API at a point in time.\nThe most recent version of this document contains all functional aspects of a MOTU journey, (provider information, planning, booking, iternarary, payment, support).\nMilestones have simple enumerated number names.\nSecondly, for developers and implementors of MOTU services, semantic versioning is used.\nSemantic versioning means that by looking at our version number, you can quickly identify what has changed and how much work goes into changing your own implementation."))}d.isMDXComponent=!0},758:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var i=t(0),r=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),d=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),f=i,h=u["".concat(a,".").concat(f)]||u[f]||p[f]||o;return t?r.a.createElement(h,s(s({ref:n},c),{},{components:t})):r.a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);