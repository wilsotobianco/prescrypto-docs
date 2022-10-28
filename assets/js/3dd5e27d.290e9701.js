"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[953],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5006:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},s="Products",d={unversionedId:"products/overview",id:"products/overview",title:"Products",description:"StandardDrug Endpoint",source:"@site/docs/products/overview.md",sourceDirName:"products",slug:"/products/overview",permalink:"/prescrypto-docs/docs/products/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pharmacy",permalink:"/prescrypto-docs/docs/pharmacy/overview"},next:{title:"Quick Start",permalink:"/prescrypto-docs/docs/elements/overview"}},l=[{value:"Javascript - Payload",id:"javascript---payload",children:[],level:2},{value:"Curl - Payload",id:"curl---payload",children:[],level:2},{value:"Example of the response for medication <em>&quot;neomicida&quot;</em>",id:"example-of-the-response-for-medication-neomicida",children:[],level:2}],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"products"},"Products"),(0,o.kt)("p",null,"StandardDrug Endpoint"),(0,o.kt)("p",null,"This endpoint require to get new credentials to authenticate, so you can have a JWT Token, then look for a specific standard drug, we have sort of 25 thousands records of standard drugs."),(0,o.kt)("p",null,'We recommend you to use the data you get like an autocomplete UI interface so the client can easily look for medications, and the recomend fields to look for are the "package_description" and "molecula" combined so the search could be more acurate for the medic searching.'),(0,o.kt)("p",null,"The SD_ENDPOINT and the instructions of how to get the JWT token will be send to you by email."),(0,o.kt)("p",null,"Below there are some examples how to call the StandardDrug Enpoint and the response in its version 2."),(0,o.kt)("h2",{id:"javascript---payload"},"Javascript - Payload"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"$.ajax( {\nurl: '{{ SD_ENDPOINT }}' + '/api/v2/standarddrug?query_string=<MEDICATION_QUERY_STRING>',\n        dataType: \"json\",\n        method: 'GET',\n        headers: {\n            'Authorization':'JWT {{ jwt_token }}'\n        },\n        success: function( data ) {\n          console.log( data );\n        }\n      } );\n\n")),(0,o.kt)("h2",{id:"curl---payload"},"Curl - Payload"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \\\n  'https://{{ SD_ENDPOINT }}/api/v2/standarddrug?query_string=medication' \\\n  -H 'Authorization: JWT {{ jwt_token }}'\n")),(0,o.kt)("h2",{id:"example-of-the-response-for-medication-neomicida"},"Example of the response for medication ",(0,o.kt)("em",{parentName:"h2"},'"neomicida"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n    {\n        "package_detail_quantity": "0",\n        "package_desc": "Neomixen Neomicina 10 Tabletas Caja",\n        "description": "Neomicina 250 MG",\n        "molecule": "[\'neomicina\']",\n        "package_detail": "",\n        "brand": "",\n        "measure_units": "",\n        "image_url": "https://s3-us-west-2.amazonaws.com/drugs-catalog/all_drugs/7501125109706.png",\n        "retail_price": "90.50",\n        "uid": "64d2d603e682c0b4d63f4c9a242852b66df33da05d9654000aef8dc56ded3403",\n        "order_id": 1\n    },,\n    ...\n]\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note: Only 5 medications will be displayed on every search")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Besides exists the following param ",(0,o.kt)("inlineCode",{parentName:"p"},'"page"')," that it manage to navigate between the results  for example\n",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v2/standarddrug?query_string=medication&page=2")," gets the second page of the results for the searching"))),(0,o.kt)("p",null,"[EOF]"))}u.isMDXComponent=!0}}]);