(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{756:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(16),r=t(764),o=t(774),s=t(762),c=t(761);var m=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return i.a.createElement("nav",{className:"pagination-nav","aria-label":Object(c.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},i.a.createElement("div",{className:"pagination-nav__item"},t&&i.a.createElement(s.a,{className:"pagination-nav__link",to:t},i.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",i.a.createElement(c.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.a.createElement(s.a,{className:"pagination-nav__link",to:n},i.a.createElement("div",{className:"pagination-nav__label"},i.a.createElement(c.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},p=t(767);a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{siteConfig:{title:s}}=Object(l.default)(),{blogDescription:c,blogTitle:g,permalink:d}=a,v="/"===d?s:g;return i.a.createElement(r.a,{title:v,description:c,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_posts_list"}},i.a.createElement("div",{className:"container margin-vert--lg"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--3"},i.a.createElement(p.a,{sidebar:n})),i.a.createElement("main",{className:"col col--7"},t.map((({content:e})=>i.a.createElement(o.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},i.a.createElement(e,null)))),i.a.createElement(m,{metadata:a})))))}}}]);