(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[534],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(a,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,u(u({ref:t},l),{},{components:n})):r.createElement(m,u({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,u=new Array(o);u[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,u[1]=p;for(var c=2;c<o;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81599:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return a},toc:function(){return c},Tag:function(){return l},default:function(){return d}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),u=["components"],p={id:"delete-review-input",title:"deleteReviewInput"},a={unversionedId:"v1/inputs/delete-review-input",id:"v1/inputs/delete-review-input",isDocsHomePage:!1,title:"deleteReviewInput",description:"<span",source:"@site/docs/v1/inputs/delete-review-input.mdx",sourceDirName:"v1/inputs",slug:"/v1/inputs/delete-review-input",permalink:"/v1/inputs/delete-review-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/delete-review-input.mdx",version:"current",frontMatter:{id:"delete-review-input",title:"deleteReviewInput"},sidebar:"schemaSidebar",previous:{title:"deleteQuestionaryInput",permalink:"/v1/inputs/delete-questionary-input"},next:{title:"deleteRoleInput",permalink:"/v1/inputs/delete-role-input"}},c=[{value:"Fields",id:"fields",children:[]}],l=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:c,Tag:l};function d(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type deleteReviewInput {\n  where: InputID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"where-inputid"},(0,o.kt)("inlineCode",{parentName:"h4"},"where")," (",(0,o.kt)("a",{parentName:"h4",href:"/v1/inputs/input-id"},(0,o.kt)("inlineCode",{parentName:"a"},"InputID")),")"))}d.isMDXComponent=!0}}]);