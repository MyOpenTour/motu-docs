(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[54609],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57818:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p},Tag:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],d={id:"edit-legal-input",title:"editLegalInput"},l={unversionedId:"v1/inputs/edit-legal-input",id:"v1/inputs/edit-legal-input",isDocsHomePage:!1,title:"editLegalInput",description:"<span",source:"@site/docs/v1/inputs/edit-legal-input.mdx",sourceDirName:"v1/inputs",slug:"/v1/inputs/edit-legal-input",permalink:"/v1/inputs/edit-legal-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/edit-legal-input.mdx",version:"current",frontMatter:{id:"edit-legal-input",title:"editLegalInput"},sidebar:"schemaSidebar",previous:{title:"editLegInput",permalink:"/v1/inputs/edit-leg-input"},next:{title:"editLikeInput",permalink:"/v1/inputs/edit-like-input"}},p=[{value:"Fields",id:"fields",children:[]}],s=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},c={toc:p,Tag:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type editLegalInput {\n  legal_address: String\n  mailing_address: String\n  legal_name: String\n  tax_id: Int\n  registration_id: Int\n  registration_cause_id: Int\n  bank_id: Int\n  checking_account: Int\n  provider: ID\n  published_at: DateTime\n  created_by: ID\n  updated_by: ID\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"legal_address-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"legal_address")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"mailing_address-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"mailing_address")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"legal_name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"legal_name")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"tax_id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"tax_id")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"registration_id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"registration_id")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"registration_cause_id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"registration_cause_id")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"bank_id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"bank_id")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"checking_account-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"checking_account")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"provider-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"provider")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"published_at-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"published_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"created_by-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"created_by")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"updated_by-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"updated_by")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}u.isMDXComponent=!0}}]);