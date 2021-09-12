(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[19746],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=s(t),u=a,h=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return t?r.createElement(h,o(o({ref:n},l),{},{components:t})):r.createElement(h,o({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},72199:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s},Tag:function(){return l},default:function(){return c}});var r=t(22122),a=t(19756),i=(t(67294),t(3905)),o=["components"],p={id:"edit-provider-input",title:"editProviderInput"},d={unversionedId:"v1/inputs/edit-provider-input",id:"v1/inputs/edit-provider-input",isDocsHomePage:!1,title:"editProviderInput",description:"<span",source:"@site/docs/v1/inputs/edit-provider-input.mdx",sourceDirName:"v1/inputs",slug:"/v1/inputs/edit-provider-input",permalink:"/v1/inputs/edit-provider-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/edit-provider-input.mdx",version:"current",frontMatter:{id:"edit-provider-input",title:"editProviderInput"},sidebar:"schemaSidebar",previous:{title:"editOrderInput",permalink:"/v1/inputs/edit-order-input"},next:{title:"editQuestionaryInput",permalink:"/v1/inputs/edit-questionary-input"}},s=[{value:"Fields",id:"fields",children:[]}],l=function(e){var n=e.children,t=e.color;return(0,i.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},m={toc:s,Tag:l};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type editProviderInput {\n  name: String\n  description: String\n  web: String\n  image: [ID]\n  phone: String\n  price: ENUM_PROVIDER_PRICE\n  category: ID\n  reviews: [ID]\n  activities: [ID]\n  user: ID\n  legal: ID\n  rating: Float\n  discount: Float\n  average_price: Int\n  description_ru: String\n  description_en: String\n  name_ru: String\n  name_en: String\n  features: [ID]\n  vk_url: String\n  fb_url: String\n  instagram_url: String\n  opening_hours_specifications: [ID]\n  num_reviews: Int\n  brandname_ru: String\n  brandname_en: String\n  location: ID\n  average_time: Int\n  business_status: ENUM_PROVIDER_BUSINESS_STATUS\n  similar: String\n  published_at: DateTime\n  created_by: ID\n  updated_by: ID\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"web-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"web")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"image-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"image")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID]")),")"),(0,i.kt)("h4",{id:"phone-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"phone")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"price-enum_provider_price"},(0,i.kt)("inlineCode",{parentName:"h4"},"price")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/enums/enum-provider-price"},(0,i.kt)("inlineCode",{parentName:"a"},"ENUM_PROVIDER_PRICE")),")"),(0,i.kt)("h4",{id:"category-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"category")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"reviews-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"reviews")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID]")),")"),(0,i.kt)("h4",{id:"activities-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"activities")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID]")),")"),(0,i.kt)("h4",{id:"user-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"legal-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"legal")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"rating-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"rating")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"discount-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"discount")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"average_price-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"average_price")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"description_ru-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description_ru")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"description_en-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description_en")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name_ru-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name_ru")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name_en-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name_en")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"features-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"features")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID]")),")"),(0,i.kt)("h4",{id:"vk_url-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"vk_url")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"fb_url-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"fb_url")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"instagram_url-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"instagram_url")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"opening_hours_specifications-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"opening_hours_specifications")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID]")),")"),(0,i.kt)("h4",{id:"num_reviews-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"num_reviews")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"brandname_ru-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"brandname_ru")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"brandname_en-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"brandname_en")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"location-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"location")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"average_time-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"average_time")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"business_status-enum_provider_business_status"},(0,i.kt)("inlineCode",{parentName:"h4"},"business_status")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/enums/enum-provider-business-status"},(0,i.kt)("inlineCode",{parentName:"a"},"ENUM_PROVIDER_BUSINESS_STATUS")),")"),(0,i.kt)("h4",{id:"similar-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"similar")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"published_at-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"published_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"created_by-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"created_by")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"updated_by-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"updated_by")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}c.isMDXComponent=!0}}]);