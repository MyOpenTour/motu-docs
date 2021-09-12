(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[57242],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=m(n),h=a,N=k["".concat(l,".").concat(h)]||k[h]||d[h]||i;return n?r.createElement(N,s(s({ref:t},p),{},{components:n})):r.createElement(N,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var m=2;m<i;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},17109:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m},Tag:function(){return p},default:function(){return k}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),s=["components"],o={id:"users-permissions-user",title:"UsersPermissionsUser"},l={unversionedId:"v1/objects/users-permissions-user",id:"v1/objects/users-permissions-user",isDocsHomePage:!1,title:"UsersPermissionsUser",description:"<span",source:"@site/docs/v1/objects/users-permissions-user.mdx",sourceDirName:"v1/objects",slug:"/v1/objects/users-permissions-user",permalink:"/v1/objects/users-permissions-user",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/users-permissions-user.mdx",version:"current",frontMatter:{id:"users-permissions-user",title:"UsersPermissionsUser"},sidebar:"schemaSidebar",previous:{title:"UsersPermissionsRoleGroupBy",permalink:"/v1/objects/users-permissions-role-group-by"},next:{title:"UsersPermissionsUserAggregator",permalink:"/v1/objects/users-permissions-user-aggregator"}},m=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:m,Tag:p};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type UsersPermissionsUser {\n  id: ID!\n  _id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  username: String!\n  email: String!\n  provider: String\n  confirmed: Boolean\n  blocked: Boolean\n  role: UsersPermissionsRole\n  questionary: Questionary\n  user_category: ENUM_USERSPERMISSIONSUSER_USER_CATEGORY!\n  reviews(sort: String, limit: Int = 0, start: Int = 0, where: JSON): [Review]\n  likes(sort: String, limit: Int = 0, start: Int = 0, where: JSON): [Like]\n  img(sort: String, limit: Int = 0, start: Int = 0, where: JSON): [UploadFile]\n  providers(\n    sort: String\n    limit: Int = 0\n    start: Int = 0\n    where: JSON\n  ): [Provider]\n  favourites(\n    sort: String\n    limit: Int = 0\n    start: Int = 0\n    where: JSON\n  ): [Provider]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"_id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"_id")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"),(0,i.kt)("h4",{id:"username-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"username")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"email-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"provider-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"provider")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"confirmed-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"confirmed")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"blocked-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"blocked")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"role-userspermissionsrole"},(0,i.kt)("inlineCode",{parentName:"h4"},"role")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/users-permissions-role"},(0,i.kt)("inlineCode",{parentName:"a"},"UsersPermissionsRole")),")"),(0,i.kt)("h4",{id:"questionary-questionary"},(0,i.kt)("inlineCode",{parentName:"h4"},"questionary")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/questionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Questionary")),")"),(0,i.kt)("h4",{id:"user_category-enum_userspermissionsuser_user_category"},(0,i.kt)("inlineCode",{parentName:"h4"},"user_category")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/enums/enum-userspermissionsuser-user-category"},(0,i.kt)("inlineCode",{parentName:"a"},"ENUM_USERSPERMISSIONSUSER_USER_CATEGORY!")),")"),(0,i.kt)("h4",{id:"reviews-review"},(0,i.kt)("inlineCode",{parentName:"h4"},"reviews")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/review"},(0,i.kt)("inlineCode",{parentName:"a"},"[Review]")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"sort-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"limit-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"limit")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"start-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"start")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-json"},(0,i.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"JSON")),")"))),(0,i.kt)("h4",{id:"likes-like"},(0,i.kt)("inlineCode",{parentName:"h4"},"likes")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/like"},(0,i.kt)("inlineCode",{parentName:"a"},"[Like]")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"sort-string-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"limit-int-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"limit")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"start-int-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"start")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-json-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"JSON")),")"))),(0,i.kt)("h4",{id:"img-uploadfile"},(0,i.kt)("inlineCode",{parentName:"h4"},"img")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/upload-file"},(0,i.kt)("inlineCode",{parentName:"a"},"[UploadFile]")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"sort-string-2"},(0,i.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"limit-int-2"},(0,i.kt)("inlineCode",{parentName:"h5"},"limit")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"start-int-2"},(0,i.kt)("inlineCode",{parentName:"h5"},"start")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-json-2"},(0,i.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"JSON")),")"))),(0,i.kt)("h4",{id:"providers-provider"},(0,i.kt)("inlineCode",{parentName:"h4"},"providers")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/provider"},(0,i.kt)("inlineCode",{parentName:"a"},"[Provider]")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"sort-string-3"},(0,i.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"limit-int-3"},(0,i.kt)("inlineCode",{parentName:"h5"},"limit")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"start-int-3"},(0,i.kt)("inlineCode",{parentName:"h5"},"start")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-json-3"},(0,i.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"JSON")),")"))),(0,i.kt)("h4",{id:"favourites-provider"},(0,i.kt)("inlineCode",{parentName:"h4"},"favourites")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/objects/provider"},(0,i.kt)("inlineCode",{parentName:"a"},"[Provider]")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"sort-string-4"},(0,i.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"limit-int-4"},(0,i.kt)("inlineCode",{parentName:"h5"},"limit")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"start-int-4"},(0,i.kt)("inlineCode",{parentName:"h5"},"start")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-json-4"},(0,i.kt)("inlineCode",{parentName:"h5"},"where")," (",(0,i.kt)("a",{parentName:"h5",href:"/v1/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"JSON")),")"))))}k.isMDXComponent=!0}}]);