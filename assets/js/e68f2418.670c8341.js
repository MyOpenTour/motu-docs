(window.webpackJsonp=window.webpackJsonp||[]).push([[604],{674:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"Tag",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(758)),o={id:"questionary",title:"Questionary"},c={unversionedId:"v1/objects/questionary",id:"v1/objects/questionary",isDocsHomePage:!1,title:"Questionary",description:"<span",source:"@site/docs/v1/objects/questionary.mdx",slug:"/v1/objects/questionary",permalink:"/v1/objects/questionary",editUrl:"https://github.com/myopentour/motu-api-docs/edit/master/motu-api-docs/docs/docs/v1/objects/questionary.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"ProviderGroupBy",permalink:"/v1/objects/provider-group-by"},next:{title:"QuestionaryAggregator",permalink:"/v1/objects/questionary-aggregator"}},b=[{value:"Fields",id:"fields",children:[]}],s=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:b,Tag:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type Questionary {\n  id: ID!\n  _id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  users_permissions_user: UsersPermissionsUser\n  sex: ENUM_QUESTIONARY_SEX\n  bdate: Date\n  city: String\n  education: ENUM_QUESTIONARY_EDUCATION\n  interests: String\n  career_industry: String\n  career_position: ENUM_QUESTIONARY_CAREER_POSITION\n  purpose_of_visit: String\n  with_family: Boolean\n  with_children: Boolean\n  is_higher_education: Boolean\n  published_at: DateTime\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("h4",{id:"_id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"_id")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("h4",{id:"createdat-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"createdAt")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime!")),")"),Object(i.b)("h4",{id:"updatedat-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"updatedAt")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime!")),")"),Object(i.b)("h4",{id:"users_permissions_user-userspermissionsuser"},Object(i.b)("inlineCode",{parentName:"h4"},"users_permissions_user")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/objects/users-permissions-user"},Object(i.b)("inlineCode",{parentName:"a"},"UsersPermissionsUser")),")"),Object(i.b)("h4",{id:"sex-enum_questionary_sex"},Object(i.b)("inlineCode",{parentName:"h4"},"sex")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/enums/enum-questionary-sex"},Object(i.b)("inlineCode",{parentName:"a"},"ENUM_QUESTIONARY_SEX")),")"),Object(i.b)("h4",{id:"bdate-date"},Object(i.b)("inlineCode",{parentName:"h4"},"bdate")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date"},Object(i.b)("inlineCode",{parentName:"a"},"Date")),")"),Object(i.b)("h4",{id:"city-string"},Object(i.b)("inlineCode",{parentName:"h4"},"city")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"education-enum_questionary_education"},Object(i.b)("inlineCode",{parentName:"h4"},"education")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/enums/enum-questionary-education"},Object(i.b)("inlineCode",{parentName:"a"},"ENUM_QUESTIONARY_EDUCATION")),")"),Object(i.b)("h4",{id:"interests-string"},Object(i.b)("inlineCode",{parentName:"h4"},"interests")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"career_industry-string"},Object(i.b)("inlineCode",{parentName:"h4"},"career_industry")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"career_position-enum_questionary_career_position"},Object(i.b)("inlineCode",{parentName:"h4"},"career_position")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/enums/enum-questionary-career-position"},Object(i.b)("inlineCode",{parentName:"a"},"ENUM_QUESTIONARY_CAREER_POSITION")),")"),Object(i.b)("h4",{id:"purpose_of_visit-string"},Object(i.b)("inlineCode",{parentName:"h4"},"purpose_of_visit")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"with_family-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"with_family")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/boolean"},Object(i.b)("inlineCode",{parentName:"a"},"Boolean")),")"),Object(i.b)("h4",{id:"with_children-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"with_children")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/boolean"},Object(i.b)("inlineCode",{parentName:"a"},"Boolean")),")"),Object(i.b)("h4",{id:"is_higher_education-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"is_higher_education")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/boolean"},Object(i.b)("inlineCode",{parentName:"a"},"Boolean")),")"),Object(i.b)("h4",{id:"published_at-datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"published_at")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/date-time"},Object(i.b)("inlineCode",{parentName:"a"},"DateTime")),")"))}p.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(o,".").concat(u)]||p[u]||l[u]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);