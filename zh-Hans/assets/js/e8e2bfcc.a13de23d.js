"use strict";(self.webpackChunkpostgres_doc=self.webpackChunkpostgres_doc||[]).push([[6390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7334:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,description:"\u63cf\u8ff0\u4e86\u4e00\u4e9b\u6b64\u6cd5\u7ed3\u6784"},s="4.1 \u8bcd\u6cd5\u7ed3\u6784",i={unversionedId:"II.The_SQL_Language/sql-syntax/lexical-structure",id:"II.The_SQL_Language/sql-syntax/lexical-structure",title:"4.1 \u8bcd\u6cd5\u7ed3\u6784",description:"\u63cf\u8ff0\u4e86\u4e00\u4e9b\u6b64\u6cd5\u7ed3\u6784",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/II.The_SQL_Language/sql-syntax/lexical-structure.md",sourceDirName:"II.The_SQL_Language/sql-syntax",slug:"/II.The_SQL_Language/sql-syntax/lexical-structure",permalink:"/zh-Hans/docs/II.The_SQL_Language/sql-syntax/lexical-structure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/II.The_SQL_Language/sql-syntax/lexical-structure.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u63cf\u8ff0\u4e86\u4e00\u4e9b\u6b64\u6cd5\u7ed3\u6784"},sidebar:"tutorialSidebar",previous:{title:"SQL \u8bed\u6cd5",permalink:"/zh-Hans/docs/category/sql-\u8bed\u6cd5"},next:{title:"4.2 \u503c\u8868\u8fbe\u5f0f",permalink:"/zh-Hans/docs/II.The_SQL_Language/sql-syntax/value-expressions"}},c={},l=[{value:"4.1.1 \u4fdd\u7559\u5b57\u548c\u5173\u952e\u5b57 Identifiers and Key Words",id:"411-\u4fdd\u7559\u5b57\u548c\u5173\u952e\u5b57-identifiers-and-key-words",level:2},{value:"4.1.2 \u5e38\u91cf Constants",id:"412-\u5e38\u91cf-constants",level:2},{value:"4.1.3 \u64cd\u4f5c\u7b26 Operators",id:"413-\u64cd\u4f5c\u7b26-operators",level:2},{value:"4.1.4 \u7279\u6b8a\u5b57\u7b26",id:"414-\u7279\u6b8a\u5b57\u7b26",level:2},{value:"4.1.5 \u6ce8\u91ca",id:"415-\u6ce8\u91ca",level:2},{value:"4.1.6 \u4f18\u5148\u7ea7",id:"416-\u4f18\u5148\u7ea7",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"41-\u8bcd\u6cd5\u7ed3\u6784"},"4.1 \u8bcd\u6cd5\u7ed3\u6784"),(0,a.kt)("h2",{id:"411-\u4fdd\u7559\u5b57\u548c\u5173\u952e\u5b57-identifiers-and-key-words"},"4.1.1 \u4fdd\u7559\u5b57\u548c\u5173\u952e\u5b57 Identifiers and Key Words"),(0,a.kt)("h2",{id:"412-\u5e38\u91cf-constants"},"4.1.2 \u5e38\u91cf Constants"),(0,a.kt)("h2",{id:"413-\u64cd\u4f5c\u7b26-operators"},"4.1.3 \u64cd\u4f5c\u7b26 Operators"),(0,a.kt)("h2",{id:"414-\u7279\u6b8a\u5b57\u7b26"},"4.1.4 \u7279\u6b8a\u5b57\u7b26"),(0,a.kt)("h2",{id:"415-\u6ce8\u91ca"},"4.1.5 \u6ce8\u91ca"),(0,a.kt)("h2",{id:"416-\u4f18\u5148\u7ea7"},"4.1.6 \u4f18\u5148\u7ea7"))}p.isMDXComponent=!0}}]);