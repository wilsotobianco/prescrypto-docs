(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[349],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),h=o(n),c=r,u=h["".concat(l,".").concat(c)]||h[c]||d[c]||i;return n?a.createElement(u,s(s({ref:t},m),{},{components:n})):a.createElement(u,s({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1493:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return m},default:function(){return h}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),s=["components"],p={sidebar_position:3},l="Membership",o={unversionedId:"api/membership",id:"api/membership",isDocsHomePage:!1,title:"Membership",description:'The relati\xf3n between the Medic with an Hospital are defined by Membership. It could be either "Admin" or "Member".',source:"@site/docs/api/membership.md",sourceDirName:"api",slug:"/api/membership",permalink:"/prescrypto-docs/docs/api/membership",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hospital",permalink:"/prescrypto-docs/docs/api/hospital"},next:{title:"Patient",permalink:"/prescrypto-docs/docs/api/patient"}},m=[{value:"List all Memberships",id:"list-all-memberships",children:[{value:"Response",id:"response",children:[]}]},{value:"List a singular Membership",id:"list-a-singular-membership",children:[]},{value:"List Medics Memberships for a singular Hospital",id:"list-medics-memberships-for-a-singular-hospital",children:[{value:"Response",id:"response-1",children:[]}]},{value:"Create Membership",id:"create-membership",children:[{value:"Fields of a Membership",id:"fields-of-a-membership",children:[]}]},{value:"Delete Membership",id:"delete-membership",children:[]},{value:"Update Membership",id:"update-membership",children:[]}],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"membership"},"Membership"),(0,i.kt)("p",null,'The relati\xf3n between the Medic with an Hospital are defined by Membership. It could be either "Admin" or "Member".'),(0,i.kt)("p",null,"A MEMBER of an ",(0,i.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/hospital"},"Hospital")," can only prescribe from that Hospital but he is unable to edit it."),(0,i.kt)("p",null,"An ADMIN of an ",(0,i.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/hospital"},"Hospital")," can Edit its content, view, add and remove the Medics linked to the Hospital."),(0,i.kt)("h2",{id:"list-all-memberships"},"List all Memberships"),(0,i.kt)("p",null,"It will display the ",(0,i.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/hospital"},"Hospitals")," in which the Medic has a Membership."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/management/memberships/"',title:'"GET','/api/v2/management/memberships/"':!0},"import requests\nimport json\n\nurl = \"{{Base_URL}}api/v2/management/memberships/\"\n\npayload={}\nheaders = {\n  'Authorization': 'Token {{Token}}'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload)\n\nprint(response.text)\n\n\n\n")),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 200]"',title:'"[StatusCode:','200]"':!0},'{\n    "count": 2,\n    "next": null,\n    "previous": null,\n    "results": [\n        {\n            "id": 191,\n            "medic": {\n                "name": "Alexander Flemming",\n                "email": "hola@prescrypto.com"\n            },\n            "hospital": 99,\n            "type_membership": "ADMIN",\n            "is_active": true,\n            "is_deleted": false,\n            "date_joined": "2020-11-04T01:12:12.017392Z"\n        },\n        {\n            "id": 203,\n            "medic": {\n                "name": "Alexander Flemming",\n                "email": "hola@prescrypto.com"\n            },\n            "hospital": 108,\n            "type_membership": "MEMBER",\n            "is_active": true,\n            "is_deleted": false,\n            "date_joined": "2020-21-04T01:15:12.017992Z"\n        }\n    ]\n}\n')),(0,i.kt)("h2",{id:"list-a-singular-membership"},"List a singular Membership"),(0,i.kt)("p",null,"You can obtain the detail for a single Membership, by adding the Membership ID to the endpoint route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/management/memberships/{{Membership_ID}}"',title:'"GET','/api/v2/management/memberships/{{Membership_ID}}"':!0},"{{Base_URL}}/api/v2/management/memberships/108\n")),(0,i.kt)("h2",{id:"list-medics-memberships-for-a-singular-hospital"},"List Medics Memberships for a singular Hospital"),(0,i.kt)("p",null,"This endpoint will respond with the list of the Medics who has a Membership in the Hospital indicated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/memberships/{{Hospital_ID}}"',title:'"GET','/api/v2/memberships/{{Hospital_ID}}"':!0},"{{Base_URL}}/api/v2/memberships/44\n")),(0,i.kt)("h3",{id:"response-1"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 200]"',title:'"[StatusCode:','200]"':!0},'[\n    {\n        "id": 344,\n        "medic": {\n            "name": "Alexander Fleming",\n            "email": "hola@prescrypto.com"\n        },\n        "hospital": 44,\n        "type_membership": "ADMIN",\n        "is_active": false,\n        "is_deleted": false,\n        "date_joined": "2021-08-11T04:52:38.327771Z"\n    },\n    {\n        "id": 343,\n        "medic": {\n            "name": "Garfield the Cat",\n            "email": "hola@prescrypto.com"\n        },\n        "hospital": 44,\n        "type_membership": "MEMBER",\n        "is_active": false,\n        "is_deleted": false,\n        "date_joined": "2021-08-11T04:51:37.863184Z"\n    },\n    {\n        "id": 342,\n        "medic": {\n            "name": "Elizabeth Blackwell",\n            "email": "hola@prescrypto.com"\n        },\n        "hospital": 44,\n        "type_membership": "ADMIN",\n        "is_active": false,\n        "is_deleted": false,\n        "date_joined": "2021-08-11T04:46:09.314508Z"\n    }\n]\n')),(0,i.kt)("h2",{id:"create-membership"},"Create Membership"),(0,i.kt)("p",null,"You can create a relatioship between a Medic and a Hospital trough a Membership"),(0,i.kt)("h3",{id:"fields-of-a-membership"},"Fields of a Membership"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"medic"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Int")," ID of the Medic for whom the Membership will be created")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hospital"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Int")," ID of the Hospital to which the Medic will be added, you need to be have an ADMIN Membership to this Hospital")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type_membership"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")," Can be ",(0,i.kt)("a",{parentName:"td",href:"/prescrypto-docs/docs/api/membership"},"ADMIN")," or ",(0,i.kt)("a",{parentName:"td",href:"/prescrypto-docs/docs/api/membership"},"MEMBER"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_active"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")," indicates if it's the current active hospital for the Medic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_deleted"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")," determines if the Medic can see or select the hospital from the UI")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="POST /api/v2/management/memberships/"',title:'"POST','/api/v2/management/memberships/"':!0},'import requests\nimport json\n\nurl = "{{Base_URL}}}/api/v2/management/memberships/"\n\npayload = json.dumps({\n  "medic": 33,  \n  "hospital": 1,\n  "type_membership": "ADMIN"\n})\nheaders = {\n  \'Authorization\': \'Token {{token}}\',\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("POST", url, headers=headers, data=payload)\n\nprint(response.text)\n\n')),(0,i.kt)("h2",{id:"delete-membership"},"Delete Membership"),(0,i.kt)("p",null,'It will generate a "soft_delete" for the membership, the medic will not see anymore the Hospital from the UI. This can be undone by updating the field "is_deleted" to "false" with a PATCH Request.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="DELETE /api/v2/management/memberships/{{Memberhip_ID}}"',title:'"DELETE','/api/v2/management/memberships/{{Memberhip_ID}}"':!0},"import requests\n\nurl = \"{{Base_URL}}}/api/v2/management/memberships/301\"\n\npayload = {}\nheaders = {\n  'Authorization': 'Token {{token}}'\n}\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload)\n\nprint(response.text)\n\n")),(0,i.kt)("h2",{id:"update-membership"},"Update Membership"),(0,i.kt)("p",null,'This will allow you to update your "type of Membership" from ADMIN to MEMBER and undo the soft_deletion of the Membership.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="PATCH /api/v2/management/memberships/{{Memberhip_ID}}"',title:'"PATCH','/api/v2/management/memberships/{{Memberhip_ID}}"':!0},'import requests\nimport json\n\nurl = "{{Base_URL}}}/api/v2/management/memberships/{{Memberhip_ID}}"\n\npayload = json.dumps({\n  "is_deleted": false,\n  "type_membership": "MEMBER"\n})\nheaders = {\n  \'Authorization\': \'Token {{token}}\',\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("POST", url, headers=headers, data=payload)\n\nprint(response.text)\n\n')),(0,i.kt)("p",null,"[EOF]"))}h.isMDXComponent=!0}}]);