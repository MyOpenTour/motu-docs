(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{495:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"Tag",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(763)),o={id:"questionary",title:"questionary"},c={unversionedId:"v1/queries/questionary",id:"v1/queries/questionary",isDocsHomePage:!1,title:"questionary",description:"<span",source:"@site/docs/v1/queries/questionary.mdx",slug:"/v1/queries/questionary",permalink:"/v1/queries/questionary",editUrl:"https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/docs/v1/queries/questionary.mdx",version:"current",sidebar:"schemaSidebar",previous:{title:"questionariesConnection",permalink:"/v1/queries/questionaries-connection"},next:{title:"review",permalink:"/v1/queries/review"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:u,Tag:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"questionary(\n  id: ID!\n  publicationState: PublicationState\n): Questionary\n\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("h4",{id:"publicationstate-publicationstate"},Object(i.b)("inlineCode",{parentName:"h4"},"publicationState")," (",Object(i.b)("a",{parentName:"h4",href:"/v1/enums/publication-state"},Object(i.b)("inlineCode",{parentName:"a"},"PublicationState")),")"),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("h4",{id:"questionary"},Object(i.b)("a",{parentName:"h4",href:"/v1/objects/questionary"},Object(i.b)("inlineCode",{parentName:"a"},"Questionary"))))}l.isMDXComponent=!0},763:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,m=l["".concat(o,".").concat(d)]||l[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);