(window.webpackJsonp=window.webpackJsonp||[]).push([[657],{727:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"Tag",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),u=(n(0),n(763)),i={id:"update-feature-input",title:"updateFeatureInput"},p={unversionedId:"v1/inputs/update-feature-input",id:"v1/inputs/update-feature-input",isDocsHomePage:!1,title:"updateFeatureInput",description:"<span",source:"@site/docs/v1/inputs/update-feature-input.mdx",slug:"/v1/inputs/update-feature-input",permalink:"/v1/inputs/update-feature-input",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/inputs/update-feature-input.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"updateCurrencyInput",permalink:"/v1/inputs/update-currency-input"},next:{title:"updateItineraryInput",permalink:"/v1/inputs/update-itinerary-input"}},o=[{value:"Fields",id:"fields",children:[]}],c=function(e){var t=e.children,n=e.color;return Object(u.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:o,Tag:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("p",null,"No description"),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-graphql"},"type updateFeatureInput {\n  where: InputID\n  data: editFeatureInput\n}\n")),Object(u.b)("h3",{id:"fields"},"Fields"),Object(u.b)("h4",{id:"where-inputid"},Object(u.b)("inlineCode",{parentName:"h4"},"where")," (",Object(u.b)("a",{parentName:"h4",href:"/v1/inputs/input-id"},Object(u.b)("inlineCode",{parentName:"a"},"InputID")),")"),Object(u.b)("h4",{id:"data-editfeatureinput"},Object(u.b)("inlineCode",{parentName:"h4"},"data")," (",Object(u.b)("a",{parentName:"h4",href:"/v1/inputs/edit-feature-input"},Object(u.b)("inlineCode",{parentName:"a"},"editFeatureInput")),")"))}l.isMDXComponent=!0},763:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=d(n),f=r,b=l["".concat(i,".").concat(f)]||l[f]||s[f]||u;return n?a.a.createElement(b,p(p({ref:t},c),{},{components:n})):a.a.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,i=new Array(u);i[0]=f;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<u;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);