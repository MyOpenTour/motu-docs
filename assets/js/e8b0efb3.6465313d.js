(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{681:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return u})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(758)),c={id:"activity-connection",title:"ActivityConnection"},a={unversionedId:"v1/objects/activity-connection",id:"v1/objects/activity-connection",isDocsHomePage:!1,title:"ActivityConnection",description:"<span",source:"@site/docs/v1/objects/activity-connection.mdx",slug:"/v1/objects/activity-connection",permalink:"/v1/objects/activity-connection",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/objects/activity-connection.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"ActivityAggregatorSum",permalink:"/v1/objects/activity-aggregator-sum"},next:{title:"ActivityConnectionCreatedAt",permalink:"/v1/objects/activity-connection-created-at"}},u=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:u,Tag:p};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type ActivityConnection {\n  values: [Activity]\n  groupBy: ActivityGroupBy\n  aggregate: ActivityAggregator\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"values-activity"},Object(o.b)("inlineCode",{parentName:"h4"},"values")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/activity"},Object(o.b)("inlineCode",{parentName:"a"},"[Activity]")),")"),Object(o.b)("h4",{id:"groupby-activitygroupby"},Object(o.b)("inlineCode",{parentName:"h4"},"groupBy")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/activity-group-by"},Object(o.b)("inlineCode",{parentName:"a"},"ActivityGroupBy")),")"),Object(o.b)("h4",{id:"aggregate-activityaggregator"},Object(o.b)("inlineCode",{parentName:"h4"},"aggregate")," (",Object(o.b)("a",{parentName:"h4",href:"/v1/objects/activity-aggregator"},Object(o.b)("inlineCode",{parentName:"a"},"ActivityAggregator")),")"))}l.isMDXComponent=!0},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},y=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=b(n),y=r,d=l["".concat(c,".").concat(y)]||l[y]||s[y]||o;return n?i.a.createElement(d,a(a({ref:t},p),{},{components:n})):i.a.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<o;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);