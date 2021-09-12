(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[37821],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,u(u({ref:t},l),{},{components:r})):n.createElement(d,u({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var p=2;p<o;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},53197:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p},Tag:function(){return l},default:function(){return f}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),u=["components"],c={id:"create-feature",title:"createFeature"},i={unversionedId:"v1/mutations/create-feature",id:"v1/mutations/create-feature",isDocsHomePage:!1,title:"createFeature",description:"<span",source:"@site/docs/v1/mutations/create-feature.mdx",sourceDirName:"v1/mutations",slug:"/v1/mutations/create-feature",permalink:"/v1/mutations/create-feature",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/mutations/create-feature.mdx",version:"current",frontMatter:{id:"create-feature",title:"createFeature"},sidebar:"schemaSidebar",previous:{title:"createCurrency",permalink:"/v1/mutations/create-currency"},next:{title:"createItinerary",permalink:"/v1/mutations/create-itinerary"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l=function(e){var t=e.children,r=e.color;return(0,o.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:p,Tag:l};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"createFeature(\n  input: createFeatureInput\n): createFeaturePayload\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"input-createfeatureinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/inputs/create-feature-input"},(0,o.kt)("inlineCode",{parentName:"a"},"createFeatureInput")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"createfeaturepayload"},(0,o.kt)("a",{parentName:"h4",href:"/v1/objects/create-feature-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"createFeaturePayload"))))}f.isMDXComponent=!0}}]);