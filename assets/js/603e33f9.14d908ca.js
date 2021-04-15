(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{306:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(758)),i={id:"upload-file-connection",title:"UploadFileConnection"},c={unversionedId:"v1/objects/upload-file-connection",id:"v1/objects/upload-file-connection",isDocsHomePage:!1,title:"UploadFileConnection",description:"<span",source:"@site/docs/v1/objects/upload-file-connection.mdx",slug:"/v1/objects/upload-file-connection",permalink:"/v1/objects/upload-file-connection",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/upload-file-connection.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"UploadFileAggregatorSum",permalink:"/v1/objects/upload-file-aggregator-sum"},next:{title:"UploadFileConnectionAlternativeText",permalink:"/v1/objects/upload-file-connection-alternative-text"}},l=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:l,Tag:p};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type UploadFileConnection {\n  values: [UploadFile]\n  groupBy: UploadFileGroupBy\n  aggregate: UploadFileAggregator\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"values-uploadfile"},Object(a.b)("inlineCode",{parentName:"h4"},"values")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/objects/upload-file"},Object(a.b)("inlineCode",{parentName:"a"},"[UploadFile]")),")"),Object(a.b)("h4",{id:"groupby-uploadfilegroupby"},Object(a.b)("inlineCode",{parentName:"h4"},"groupBy")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/objects/upload-file-group-by"},Object(a.b)("inlineCode",{parentName:"a"},"UploadFileGroupBy")),")"),Object(a.b)("h4",{id:"aggregate-uploadfileaggregator"},Object(a.b)("inlineCode",{parentName:"h4"},"aggregate")," (",Object(a.b)("a",{parentName:"h4",href:"/v1/objects/upload-file-aggregator"},Object(a.b)("inlineCode",{parentName:"a"},"UploadFileAggregator")),")"))}d.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,f=d["".concat(i,".").concat(s)]||d[s]||b[s]||a;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);