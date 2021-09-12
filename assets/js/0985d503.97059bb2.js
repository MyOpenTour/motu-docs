(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[92593],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,f=m["".concat(d,".").concat(c)]||m[c]||s[c]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99145:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p},Tag:function(){return u},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={id:"edit-leg-input",title:"editLegInput"},d={unversionedId:"v1/inputs/edit-leg-input",id:"v1/inputs/edit-leg-input",isDocsHomePage:!1,title:"editLegInput",description:"<span",source:"@site/docs/v1/inputs/edit-leg-input.mdx",sourceDirName:"v1/inputs",slug:"/v1/inputs/edit-leg-input",permalink:"/v1/inputs/edit-leg-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/edit-leg-input.mdx",version:"current",frontMatter:{id:"edit-leg-input",title:"editLegInput"},sidebar:"schemaSidebar",previous:{title:"editItineraryInput",permalink:"/v1/inputs/edit-itinerary-input"},next:{title:"editLegalInput",permalink:"/v1/inputs/edit-legal-input"}},p=[{value:"Fields",id:"fields",children:[]}],u=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:p,Tag:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type editLegInput {\n  from: ID\n  to: ID\n  startTime: DateTime\n  endTime: DateTime\n  mode: ENUM_LEG_MODE\n  radius: Int\n  travellers: Int\n  users: [ID]\n  legState: ENUM_LEG_LEGSTATE\n  polyline: JSON\n  published_at: DateTime\n  created_by: ID\n  updated_by: ID\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"from-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"from")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"to-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"to")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"starttime-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"startTime")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"endtime-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"endTime")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"mode-enum_leg_mode"},(0,i.kt)("inlineCode",{parentName:"h4"},"mode")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/enums/enum-leg-mode"},(0,i.kt)("inlineCode",{parentName:"a"},"ENUM_LEG_MODE")),")"),(0,i.kt)("h4",{id:"radius-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"radius")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"travellers-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"travellers")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"users-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"users")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID]")),")"),(0,i.kt)("h4",{id:"legstate-enum_leg_legstate"},(0,i.kt)("inlineCode",{parentName:"h4"},"legState")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/enums/enum-leg-legstate"},(0,i.kt)("inlineCode",{parentName:"a"},"ENUM_LEG_LEGSTATE")),")"),(0,i.kt)("h4",{id:"polyline-json"},(0,i.kt)("inlineCode",{parentName:"h4"},"polyline")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"JSON")),")"),(0,i.kt)("h4",{id:"published_at-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"published_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"created_by-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"created_by")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"updated_by-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"updated_by")," (",(0,i.kt)("a",{parentName:"h4",href:"/v1/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}m.isMDXComponent=!0}}]);