(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[369],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6572:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:8},l="Location",c={unversionedId:"api/location",id:"api/location",isDocsHomePage:!1,title:"Location",description:"A Medic can choose among the different Hospitals in which he has a Memberhip.",source:"@site/docs/api/location.md",sourceDirName:"api",slug:"/api/location",permalink:"/prescrypto-docs/docs/api/location",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Medication",permalink:"/prescrypto-docs/docs/api/medication"},next:{title:"Webhooks",permalink:"/prescrypto-docs/docs/api/webhooks"}},p=[{value:"List all Locations",id:"list-all-locations",children:[{value:"Response",id:"response",children:[]}]},{value:"Update Locations",id:"update-locations",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"location"},"Location"),(0,a.kt)("p",null,"A Medic can choose among the different ",(0,a.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/hospital"},"Hospitals")," in which he has a ",(0,a.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/membership"},"Memberhip"),". "),(0,a.kt)("p",null,"The use of this endpoint it's focused on integrations where the Medic has access to Prescrypto's UI. "),(0,a.kt)("h2",{id:"list-all-locations"},"List all Locations"),(0,a.kt)("p",null,"It will list the Hospitals in which the Medic has a Membership."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/locations/"',title:'"GET','/api/v2/locations/"':!0},"import requests\n\nurl = \"{{Base_URL}}api/v2/locations/\"\n\npayload={}\nheaders = {\n  'Authorization': 'Token {{token}}'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload)\n\nprint(response.text)\n\n")),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 200]"',title:'"[StatusCode:','200]"':!0},'[\n    {\n        "hospital": {\n            "name": "Clinica San Gregorio",\n            "id": 23,\n            "location": "Clzd Tlalpan #123, col. Portales, CDMX"\n        },\n        "default": true,\n        "clinics": [\n            {\n                "id": null,\n                "name": "Clinica San Gregorio",\n                "location": "Clzd Tlalpan #123, col. Portales, CDMX"\n            }\n        ]\n    },\n    {\n        "hospital": {\n            "name": "Hospitals Las Animas",\n            "id": 35,\n            "location": "Ciudad de Mexico, 06500"\n        },\n        "default": false,\n        "clinics": [\n            {\n                "id": null,\n                "name": "Hospitals Las Animas",\n                "location": "Ciudad de Mexico, 06500"\n            }\n        ]\n    }\n]\n')),(0,a.kt)("h2",{id:"update-locations"},"Update Locations"),(0,a.kt)("p",null,'It will change the default "Active" Hospital for which the Medic will prescribe.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="PATCH /api/v2/locations/update/"',title:'"PATCH','/api/v2/locations/update/"':!0},"import requests\n\nurl = \"{{Base_URL}}api/v2/locations/update/\"\n\npayload={\"hospital_id\": 35}\nheaders = {\n  'Authorization': 'Token {{token}}',\n  'Content-Type': 'application/json'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload)\n\nprint(response.text)\n\n")),(0,a.kt)("p",null,"[EOF]"))}d.isMDXComponent=!0}}]);