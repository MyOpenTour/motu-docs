(window.webpackJsonp=window.webpackJsonp||[]).push([[620],{690:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"Tag",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(758)),c={id:"feature-group-by",title:"FeatureGroupBy"},i={unversionedId:"v1/objects/feature-group-by",id:"v1/objects/feature-group-by",isDocsHomePage:!1,title:"FeatureGroupBy",description:"<span",source:"@site/docs/v1/objects/feature-group-by.mdx",slug:"/v1/objects/feature-group-by",permalink:"/v1/objects/feature-group-by",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/feature-group-by.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"FeatureConnectionUpdatedAt",permalink:"/v1/objects/feature-connection-updated-at"},next:{title:"Itinerary",permalink:"/v1/objects/itinerary"}},u=[{value:"Fields",id:"fields",children:[]}],b=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:u,Tag:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type FeatureGroupBy {\n  id: [FeatureConnectionId]\n  _id: [FeatureConnection_id]\n  createdAt: [FeatureConnectionCreatedAt]\n  updatedAt: [FeatureConnectionUpdatedAt]\n  name_ru: [FeatureConnectionName_ru]\n  name_en: [FeatureConnectionName_en]\n  category: [FeatureConnectionCategory]\n  published_at: [FeatureConnectionPublished_at]\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"id-featureconnectionid"},Object(o.b)("inlineCode",{parentName:"h4"},"id")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/feature-connection-id"},Object(o.b)("inlineCode",{parentName:"a"},"[FeatureConnectionId]")),")"),Object(o.b)("h4",{id:"_id-featureconnection_id"},Object(o.b)("inlineCode",{parentName:"h4"},"_id")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/feature-connection-id"},Object(o.b)("inlineCode",{parentName:"a"},"[FeatureConnection_id]")),")"),Object(o.b)("h4",{id:"createdat-featureconnectioncreatedat"},Object(o.b)("inlineCode",{parentName:"h4"},"createdAt")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/feature-connection-created-at"},Object(o.b)("inlineCode",{parentName:"a"},"[FeatureConnectionCreatedAt]")),")"),Object(o.b)("h4",{id:"updatedat-featureconnectionupdatedat"},Object(o.b)("inlineCode",{parentName:"h4"},"updatedAt")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/feature-connection-updated-at"},Object(o.b)("inlineCode",{parentName:"a"},"[FeatureConnectionUpdatedAt]")),")"),Object(o.b)("h4",{id:"name_ru-featureconnectionname_ru"},Object(o.b)("inlineCode",{parentName:"h4"},"name_ru")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/feature-connection-name-ru"},Object(o.b)("inlineCode",{parentName:"a"},"[FeatureConnectionName_ru]")),")"),Object(o.b)("h4",{id:"name_en-featureconnectionname_en"},Object(o.b)("inlineCode",{parentName:"h4"},"name_en")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/feature-connection-name-en"},Object(o.b)("inlineCode",{parentName:"a"},"[FeatureConnectionName_en]")),")"),Object(o.b)("h4",{id:"category-featureconnectioncategory"},Object(o.b)("inlineCode",{parentName:"h4"},"category")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/feature-connection-category"},Object(o.b)("inlineCode",{parentName:"a"},"[FeatureConnectionCategory]")),")"),Object(o.b)("h4",{id:"published_at-featureconnectionpublished_at"},Object(o.b)("inlineCode",{parentName:"h4"},"published_at")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/feature-connection-published-at"},Object(o.b)("inlineCode",{parentName:"a"},"[FeatureConnectionPublished_at]")),")"))}p.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,s=p["".concat(c,".").concat(f)]||p[f]||l[f]||o;return n?a.a.createElement(s,i(i({ref:t},b),{},{components:n})):a.a.createElement(s,i({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);