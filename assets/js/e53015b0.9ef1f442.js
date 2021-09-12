(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[35301],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89549:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},Tag:function(){return u},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={id:"legals",title:"legals"},c={unversionedId:"v1/queries/legals",id:"v1/queries/legals",isDocsHomePage:!1,title:"legals",description:"<span",source:"@site/docs/v1/queries/legals.mdx",sourceDirName:"v1/queries",slug:"/v1/queries/legals",permalink:"/v1/queries/legals",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/queries/legals.mdx",version:"current",frontMatter:{id:"legals",title:"legals"},sidebar:"schemaSidebar",previous:{title:"legal",permalink:"/v1/queries/legal"},next:{title:"legalsConnection",permalink:"/v1/queries/legals-connection"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:s,Tag:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"legals(\n  sort: String\n  limit: Int = 0\n  start: Int = 0\n  where: JSON\n  publicationState: PublicationState\n): [Legal]\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"sort-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"limit-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"limit")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"start-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"start")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"where-json"},(0,i.kt)("inlineCode",{parentName:"h4"},"where")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"JSON")),")"),(0,i.kt)("h4",{id:"publicationstate-publicationstate"},(0,i.kt)("inlineCode",{parentName:"h4"},"publicationState")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/enums/publication-state"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicationState")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"legal"},(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/legal"},(0,i.kt)("inlineCode",{parentName:"a"},"Legal"))))}m.isMDXComponent=!0}}]);