"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[879],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,g=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:1},l="Changelog",u={unversionedId:"changelog/overview",id:"changelog/overview",title:"Changelog",description:"This sections aims to provide updates about changes to the Prescrypto API, where they were and how the new change improve or add new features.",source:"@site/docs/changelog/overview.md",sourceDirName:"changelog",slug:"/changelog/overview",permalink:"/prescrypto-docs/docs/changelog/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Prescrypto Tutorial",permalink:"/prescrypto-docs/docs/tutorial/overview"}},p=[{value:"Log",id:"log",children:[],level:2},{value:"Notifications",id:"notifications",children:[],level:2}],s={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"changelog"},"Changelog"),(0,i.kt)("p",null,"This sections aims to provide updates about changes to the Prescrypto API, where they were and how the new change improve or add new features."),(0,i.kt)("h2",{id:"log"},"Log"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(24 Jan, 2022) Add it to docs the param ",(0,i.kt)("inlineCode",{parentName:"li"},"page")," for navigate in products endpoint")),(0,i.kt)("h2",{id:"notifications"},"Notifications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The v1 endpoints are deprecated, so we encourage to all our users to update to v2"),(0,i.kt)("li",{parentName:"ul"},"The clinic field of the prescription payload will be deprecated soon, for now fill it up with ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),".")))}d.isMDXComponent=!0}}]);