(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{236:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"Tag",(function(){return p})),t.d(n,"default",(function(){return s}));var o=t(3),r=t(7),c=(t(0),t(758)),a={id:"upload-file-connection-formats",title:"UploadFileConnectionFormats"},i={unversionedId:"v1/objects/upload-file-connection-formats",id:"v1/objects/upload-file-connection-formats",isDocsHomePage:!1,title:"UploadFileConnectionFormats",description:"<span",source:"@site/docs/v1/objects/upload-file-connection-formats.mdx",slug:"/v1/objects/upload-file-connection-formats",permalink:"/v1/objects/upload-file-connection-formats",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/upload-file-connection-formats.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"UploadFileConnectionExt",permalink:"/v1/objects/upload-file-connection-ext"},next:{title:"UploadFileConnectionHash",permalink:"/v1/objects/upload-file-connection-hash"}},l=[{value:"Fields",id:"fields",children:[]}],p=function(e){var n=e.children,t=e.color;return Object(c.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:l,Tag:p};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"No description"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"type UploadFileConnectionFormats {\n  key: JSON\n  connection: UploadFileConnection\n}\n")),Object(c.b)("h3",{id:"fields"},"Fields"),Object(c.b)("h4",{id:"key-json"},Object(c.b)("inlineCode",{parentName:"h4"},"key")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/scalars/json"},Object(c.b)("inlineCode",{parentName:"a"},"JSON")),")"),Object(c.b)("h4",{id:"connection-uploadfileconnection"},Object(c.b)("inlineCode",{parentName:"h4"},"connection")," (",Object(c.b)("a",{parentName:"h4",href:"/v1/objects/upload-file-connection"},Object(c.b)("inlineCode",{parentName:"a"},"UploadFileConnection")),")"))}s.isMDXComponent=!0},758:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,b=s["".concat(a,".").concat(f)]||s[f]||d[f]||c;return t?r.a.createElement(b,i(i({ref:n},p),{},{components:t})):r.a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);