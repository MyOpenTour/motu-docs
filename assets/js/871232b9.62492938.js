(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[70708],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=l(r),f=i,m=s["".concat(u,".").concat(f)]||s[f]||p[f]||o;return r?n.createElement(m,c(c({ref:t},d),{},{components:r})):n.createElement(m,c({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},14604:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l},Tag:function(){return d},default:function(){return s}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),c=["components"],a={id:"include",title:"include"},u={unversionedId:"v1/directives/include",id:"v1/directives/include",isDocsHomePage:!1,title:"include",description:"<span",source:"@site/docs/v1/directives/include.mdx",sourceDirName:"v1/directives",slug:"/v1/directives/include",permalink:"/v1/directives/include",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/directives/include.mdx",version:"current",frontMatter:{id:"include",title:"include"},sidebar:"schemaSidebar",previous:{title:"deprecated",permalink:"/v1/directives/deprecated"},next:{title:"skip",permalink:"/v1/directives/skip"}},l=[{value:"Arguments",id:"arguments",children:[]}],d=function(e){var t=e.children,r=e.color;return(0,o.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:l,Tag:d};function s(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Directs the executor to include this field or fragment only when the ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," argument is true."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @include(\n  if: Boolean!\n)\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"if-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"if")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,o.kt)("p",null,"Included when true."))}s.isMDXComponent=!0}}]);