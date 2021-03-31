(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{606:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(758)),o={id:"multiple-upload",title:"multipleUpload"},l={unversionedId:"v1/mutations/multiple-upload",id:"v1/mutations/multiple-upload",isDocsHomePage:!1,title:"multipleUpload",description:"<span",source:"@site/docs/v1/mutations/multiple-upload.mdx",slug:"/v1/mutations/multiple-upload",permalink:"/v1/mutations/multiple-upload",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/mutations/multiple-upload.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"login",permalink:"/v1/mutations/login"},next:{title:"register",permalink:"/v1/mutations/register"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:c,Tag:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"multipleUpload(\n  refId: ID = 0\n  ref: String\n  field: String\n  source: String\n  files: [Upload]!\n): [UploadFile]!\n\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"refid-id"},Object(i.b)("inlineCode",{parentName:"h4"},"refId")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(i.b)("h4",{id:"ref-string"},Object(i.b)("inlineCode",{parentName:"h4"},"ref")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"field-string"},Object(i.b)("inlineCode",{parentName:"h4"},"field")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"source-string"},Object(i.b)("inlineCode",{parentName:"h4"},"source")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"files-upload"},Object(i.b)("inlineCode",{parentName:"h4"},"files")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/upload"},Object(i.b)("inlineCode",{parentName:"a"},"[Upload]!")),")"),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("h4",{id:"uploadfile"},Object(i.b)("a",{parentName:"h4",href:"/v1/objects/upload-file"},Object(i.b)("inlineCode",{parentName:"a"},"UploadFile"))))}d.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||s[b]||i;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);