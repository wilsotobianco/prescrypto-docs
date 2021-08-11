---
sidebar_position: 3
---

# Membership
The relatión between the Medic with an Hospital are defined by Membership. It could be either "Admin" or "Member".

A MEMBER of an [Hospital](hospital.md) can only prescribe from that Hospital but he is unable to edit it.

An ADMIN of an [Hospital](hospital.md) can Edit its content, view, add and remove the Medics linked to the Hospital.

## List all Memberships
It will display the [Hospitals](hospital.md) in which the Medic has a Membership.

```python title="GET /api/v2/management/memberships/"
import requests
import json

url = "{{Base_URL}}api/v2/management/memberships/"

payload={}
headers = {
  'Authorization': 'Token {{Token}}'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)



```



### Response

```json title="[StatusCode: 200]"
{
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 191,
            "medic": {
                "name": "Alexander Flemming",
                "email": "hola@prescrypto.com"
            },
            "hospital": 99,
            "type_membership": "ADMIN",
            "is_active": true,
            "is_deleted": false,
            "date_joined": "2020-11-04T01:12:12.017392Z"
        },
        {
            "id": 203,
            "medic": {
                "name": "Alexander Flemming",
                "email": "hola@prescrypto.com"
            },
            "hospital": 108,
            "type_membership": "MEMBER",
            "is_active": true,
            "is_deleted": false,
            "date_joined": "2020-21-04T01:15:12.017992Z"
        }
    ]
}
```


## List a singular Membership
You can obtain the detail for a single Membership, by adding the Membership ID to the endpoint route.

```python title="GET /api/v2/management/memberships/{{Membership_ID}}"
{{Base_URL}}/api/v2/management/memberships/108
```

## List Medics Memberships for a singular Hospital
This endpoint will respond with the list of the Medics who has a Membership in the Hospital indicated.

```python title="GET /api/v2/memberships/{{Hospital_ID}}"
{{Base_URL}}/api/v2/memberships/44
```

### Response

```json title="[StatusCode: 200]"
[
    {
        "id": 344,
        "medic": {
            "name": "Alexander Fleming",
            "email": "hola@prescrypto.com"
        },
        "hospital": 44,
        "type_membership": "ADMIN",
        "is_active": false,
        "is_deleted": false,
        "date_joined": "2021-08-11T04:52:38.327771Z"
    },
    {
        "id": 343,
        "medic": {
            "name": "Garfield the Cat",
            "email": "hola@prescrypto.com"
        },
        "hospital": 44,
        "type_membership": "MEMBER",
        "is_active": false,
        "is_deleted": false,
        "date_joined": "2021-08-11T04:51:37.863184Z"
    },
    {
        "id": 342,
        "medic": {
            "name": "Elizabeth Blackwell",
            "email": "hola@prescrypto.com"
        },
        "hospital": 44,
        "type_membership": "ADMIN",
        "is_active": false,
        "is_deleted": false,
        "date_joined": "2021-08-11T04:46:09.314508Z"
    }
]
```


## Create Membership
You can create a relatioship between a Medic and a Hospital trough a Membership

### Fields of a Membership
|Field|Description|
|--|--|
|medic|`Int` ID of the Medic for whom the Membership will be created|
|hospital|`Int` ID of the Hospital to which the Medic will be added, you need to be have an ADMIN Membership to this Hospital|
|type_membership|`String` Can be [ADMIN](membership.md) or [MEMBER](membership.md)|
|is_active|`Boolean` indicates if it's the current active hospital for the Medic|
|is_deleted|`Boolean` determines if the Medic can see or select the hospital from the UI|

```python title="POST /api/v2/management/memberships/"
import requests
import json

url = "{{Base_URL}}}/api/v2/management/memberships/"

payload = json.dumps({
  "medic": 33,  
  "hospital": 1,
  "type_membership": "ADMIN"
})
headers = {
  'Authorization': 'Token {{token}}',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

```



## Delete Membership
It will generate a "soft_delete" for the membership, the medic will not see anymore the Hospital from the UI. This can be undone by updating the field "is_deleted" to "false" with a PATCH Request.

```python title="DELETE /api/v2/management/memberships/{{Memberhip_ID}}"
import requests

url = "{{Base_URL}}}/api/v2/management/memberships/301"

payload = {}
headers = {
  'Authorization': 'Token {{token}}'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

```


## Update Membership
This will allow you to update your "type of Membership" from ADMIN to MEMBER and undo the soft_deletion of the Membership.

```python title="PATCH /api/v2/management/memberships/{{Memberhip_ID}}"
import requests
import json

url = "{{Base_URL}}}/api/v2/management/memberships/{{Memberhip_ID}}"

payload = json.dumps({
  "is_deleted": false,
  "type_membership": "MEMBER"
})
headers = {
  'Authorization': 'Token {{token}}',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

```
[EOF]