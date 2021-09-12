(self.webpackChunkmotu_api_docs=self.webpackChunkmotu_api_docs||[]).push([[16445],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3915:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={id:"versioning",title:"Versioning and releases"},s={unversionedId:"en/versioning",id:"en/versioning",isDocsHomePage:!1,title:"Versioning and releases",description:"Changes in the API are inevitable since we are exploring a new field and knowledge and experience improves.",source:"@site/docs/en/versioning.md",sourceDirName:"en",slug:"/en/versioning",permalink:"/en/versioning",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/en/versioning.md",version:"current",frontMatter:{id:"versioning",title:"Versioning and releases"},sidebar:"docs",previous:{title:"MOTU",permalink:"/en/introduction"},next:{title:"Process Flows",permalink:"/en/process-flow"}},c=[],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Changes in the API are inevitable since we are exploring a new field and knowledge and experience improves.\nThese changes are controlled using milestones and semantic versioning.\nVersion refer to new capabilities of the API at a point in time. The most recent version contains all functional aspects of a MOTU journey, (operator information, planning, booking, travel, payment, support).\nFor developers and implementors of MOTU API, semantic versioning is used. Semantic versioning means that by looking at our version number, you can quickly identify what has changed and how much work goes into changing your own implementation."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/administering-a-repository/about-releases"},"Github docs about releases")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://semver.org/#semantic-versioning-200"},"Official page of Semantic Versioning 2.0.0")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/about-semantic-versioning"},"NPM about semantic versioning")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Code status"),(0,i.kt)("th",{parentName:"tr",align:null},"Stage"),(0,i.kt)("th",{parentName:"tr",align:null},"Rule"),(0,i.kt)("th",{parentName:"tr",align:null},"Example version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"First release"),(0,i.kt)("td",{parentName:"tr",align:null},"New product"),(0,i.kt)("td",{parentName:"tr",align:null},"Start with 1.0.0"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Backward compatible bug fixes"),(0,i.kt)("td",{parentName:"tr",align:null},"Patch release"),(0,i.kt)("td",{parentName:"tr",align:null},"Increment the third digit"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Backward compatible new features"),(0,i.kt)("td",{parentName:"tr",align:null},"Minor release"),(0,i.kt)("td",{parentName:"tr",align:null},"Increment the middle digit and reset last digit to zero"),(0,i.kt)("td",{parentName:"tr",align:null},"1.1.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Changes that break backward compatibility"),(0,i.kt)("td",{parentName:"tr",align:null},"Major release"),(0,i.kt)("td",{parentName:"tr",align:null},"Increment the first digit and reset middle and last digits to zero"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.0")))))}u.isMDXComponent=!0}}]);