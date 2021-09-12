(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[79285],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return u}});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=i.createContext({}),d=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=d(t.components);return i.createElement(p.Provider,{value:e},t.children)},v={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},l=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),l=d(n),u=o,y=l["".concat(p,".").concat(u)]||l[u]||v[u]||r;return n?i.createElement(y,c(c({ref:e},s),{},{components:n})):i.createElement(y,c({ref:e},s))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,c=new Array(r);c[0]=l;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a.mdxType="string"==typeof t?t:o,c[1]=a;for(var d=2;d<r;d++)c[d]=n[d];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}l.displayName="MDXCreateElement"},77444:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return d},Tag:function(){return s},default:function(){return l}});var i=n(22122),o=n(19756),r=(n(67294),n(3905)),c=["components"],a={id:"activity-group-by",title:"ActivityGroupBy"},p={unversionedId:"v1/objects/activity-group-by",id:"v1/objects/activity-group-by",isDocsHomePage:!1,title:"ActivityGroupBy",description:"<span",source:"@site/docs/v1/objects/activity-group-by.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/activity-group-by",permalink:"/v1/objects/activity-group-by",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/activity-group-by.mdx",version:"current",frontMatter:{id:"activity-group-by",title:"ActivityGroupBy"},sidebar:"schemaSidebar",previous:{title:"ActivityConnectionUpdatedAt",permalink:"/v1/objects/activity-connection-updated-at"},next:{title:"AdminUser",permalink:"/v1/objects/admin-user"}},d=[{value:"Fields",id:"fields",children:[]}],s=function(t){var e=t.children,n=t.color;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e)},v={toc:d,Tag:s};function l(t){var e=t.components,n=(0,o.Z)(t,c);return(0,r.kt)("wrapper",(0,i.Z)({},v,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivityGroupBy {\n  id: [ActivityConnectionId]\n  _id: [ActivityConnection_id]\n  createdAt: [ActivityConnectionCreatedAt]\n  updatedAt: [ActivityConnectionUpdatedAt]\n  name: [ActivityConnectionName]\n  description: [ActivityConnectionDescription]\n  price: [ActivityConnectionPrice]\n  provider: [ActivityConnectionProvider]\n  name_ru: [ActivityConnectionName_ru]\n  name_en: [ActivityConnectionName_en]\n  description_ru: [ActivityConnectionDescription_ru]\n  description_en: [ActivityConnectionDescription_en]\n  sold_last_period: [ActivityConnectionSold_last_period]\n  published_at: [ActivityConnectionPublished_at]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"id-activityconnectionid"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-id"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnectionId]")),")"),(0,r.kt)("h4",{id:"_id-activityconnection_id"},(0,r.kt)("inlineCode",{parentName:"h4"},"_id")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-id"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnection_id]")),")"),(0,r.kt)("h4",{id:"createdat-activityconnectioncreatedat"},(0,r.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-created-at"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnectionCreatedAt]")),")"),(0,r.kt)("h4",{id:"updatedat-activityconnectionupdatedat"},(0,r.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-updated-at"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnectionUpdatedAt]")),")"),(0,r.kt)("h4",{id:"name-activityconnectionname"},(0,r.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-name"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnectionName]")),")"),(0,r.kt)("h4",{id:"description-activityconnectiondescription"},(0,r.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-description"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnectionDescription]")),")"),(0,r.kt)("h4",{id:"price-activityconnectionprice"},(0,r.kt)("inlineCode",{parentName:"h4"},"price")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-price"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnectionPrice]")),")"),(0,r.kt)("h4",{id:"provider-activityconnectionprovider"},(0,r.kt)("inlineCode",{parentName:"h4"},"provider")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnectionProvider]")),")"),(0,r.kt)("h4",{id:"name_ru-activityconnectionname_ru"},(0,r.kt)("inlineCode",{parentName:"h4"},"name_ru")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-name-ru"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnectionName_ru]")),")"),(0,r.kt)("h4",{id:"name_en-activityconnectionname_en"},(0,r.kt)("inlineCode",{parentName:"h4"},"name_en")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-name-en"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnectionName_en]")),")"),(0,r.kt)("h4",{id:"description_ru-activityconnectiondescription_ru"},(0,r.kt)("inlineCode",{parentName:"h4"},"description_ru")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-description-ru"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnectionDescription_ru]")),")"),(0,r.kt)("h4",{id:"description_en-activityconnectiondescription_en"},(0,r.kt)("inlineCode",{parentName:"h4"},"description_en")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-description-en"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnectionDescription_en]")),")"),(0,r.kt)("h4",{id:"sold_last_period-activityconnectionsold_last_period"},(0,r.kt)("inlineCode",{parentName:"h4"},"sold_last_period")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-sold-last-period"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnectionSold_last_period]")),")"),(0,r.kt)("h4",{id:"published_at-activityconnectionpublished_at"},(0,r.kt)("inlineCode",{parentName:"h4"},"published_at")," (",(0,r.kt)("a",{parentName:"h4",href:"/v1/objects/activity-connection-published-at"},(0,r.kt)("inlineCode",{parentName:"a"},"[ActivityConnectionPublished_at]")),")"))}l.isMDXComponent=!0}}]);