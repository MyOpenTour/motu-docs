(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{341:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"Tag",(function(){return p})),t.d(n,"default",(function(){return g}));var r=t(3),a=t(7),o=(t(0),t(758)),c={id:"legal-connection",title:"LegalConnection"},i={unversionedId:"v1/objects/legal-connection",id:"v1/objects/legal-connection",isDocsHomePage:!1,title:"LegalConnection",description:"<span",source:"@site/docs/v1/objects/legal-connection.mdx",slug:"/v1/objects/legal-connection",permalink:"/v1/objects/legal-connection",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/legal-connection.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"LegalAggregatorSum",permalink:"/v1/objects/legal-aggregator-sum"},next:{title:"LegalConnectionBank_id",permalink:"/v1/objects/legal-connection-bank-id"}},l=[{value:"Fields",id:"fields",children:[]}],p=function(e){var n=e.children,t=e.color;return Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:l,Tag:p};function g(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type LegalConnection {\n  values: [Legal]\n  groupBy: LegalGroupBy\n  aggregate: LegalAggregator\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"values-legal"},Object(o.b)("inlineCode",{parentName:"h4"},"values")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/legal"},Object(o.b)("inlineCode",{parentName:"a"},"[Legal]")),")"),Object(o.b)("h4",{id:"groupby-legalgroupby"},Object(o.b)("inlineCode",{parentName:"h4"},"groupBy")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/legal-group-by"},Object(o.b)("inlineCode",{parentName:"a"},"LegalGroupBy")),")"),Object(o.b)("h4",{id:"aggregate-legalaggregator"},Object(o.b)("inlineCode",{parentName:"h4"},"aggregate")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/legal-aggregator"},Object(o.b)("inlineCode",{parentName:"a"},"LegalAggregator")),")"))}g.isMDXComponent=!0},758:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(t),s=r,d=g["".concat(c,".").concat(s)]||g[s]||b[s]||o;return t?a.a.createElement(d,i(i({ref:n},p),{},{components:t})):a.a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);