---
sidebar_position: 3
---

# Membership
The relatión between the Medic with an Hospital are defined by Membership. It could be either "Admin" or "Member".

A MEMBER of an [Hospital](hospital.md) can only prescribe from that Hospital but he is unable to edit it.

An ADMIN of an [Hospital](hospital.md) can Edit its content, view, add and remove the Medics linked to the Hospital.

## List all Memberships
It will display the [Hospitals](hospital.md) in which the Medic has a Membership.

#### GET List all Memberships
```python title="GET /api/v2/management/memberships/"
import requests

url = "{{BASE_URL}}/api/v2/management/memberships/"

headers = {
  'Authorization': 'Token {{YOUR_TOKEN}}'
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

#### Response List all Memberships
```json title="[StatusCode: 200] Success here are all your memberships created"
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

```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```

### List a singular Membership
You can obtain the detail for a single Membership, by adding the Membership ID to the endpoint route.

#### GET to singular Membership
```python title="GET /api/v2/management/memberships/{{Membership_ID}}"
import requests

url = "{{BASE_URL}}/api/v2/management/memberships/{{MEMBERSHIP_ID}}"

headers = {
  'Authorization': 'Token {{YOUR_TOKEN}}'
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

#### Response to singular Membership
```json title="[StatusCode: 200] Success here are the details of the memberships of choice"
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
}
```

```json title="[Error: 404] Membership not found or your token do not created the membership"
{
    "message": "Not found"
}
```

## List Medics Memberships for a singular Hospital
This endpoint will respond with the list of the Medics who has a Membership in the Hospital indicated.

```python title="GET /api/v2/memberships/{{Hospital_ID}}"
import requests

url = "{{BASE_URL}}/api/v2/memberships/{{Hospital_ID}}"

headers = {
  'Authorization': 'Token {{YOUR_TOKEN}}'
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

### Response to List Medics Memberships

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
            "name": "Matilde Montoya",
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
```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```
```json title="[Error: 401] Invalid Token to make the consult"
{
    "message": "Unauthorized Medic"
}
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

#### POST Create Membership
```python title="POST /api/v2/management/memberships/"
import requests
import json

url = "{{Base_URL}}/api/v2/management/memberships/"

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
#### Response to Create Membership
```json title="[StatusCode: 201] Success for create membership"
{
    "medic": 330,
    "type_membership": "ADMIN"
}
```
```json title="[Error: 409] Duplicate Membership"
{
    "message": "Membership already exists please edit instead of trying to create it again."
}
```
```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```
```json title="[Error: 401] Invalid Token to make the consult"
{
    "message": "Unauthorized Medic"
}
```

## Delete Membership
It will generate a "soft_delete" for the membership, the medic will not see anymore the Hospital from the UI. This can be undone by updating the field "is_deleted" to "false" with a PATCH Request.

#### DELETE Membership
```python title="DELETE /api/v2/management/memberships/{{Memberhip_ID}}"
import requests

url = "{{Base_URL}}}/api/v2/management/memberships/{{Memberhip_ID}}"

headers = {
  'Authorization': 'Token {{token}}'
}

response = requests.request("DELETE", url, headers=headers)

print(response.text)
```
#### Response to Delete Membership
```json title="[StatusCode: 201] Success for delete membership"
{
    "id": 10,
    "medic": {
        "id": 21,
        "email": "hola@prescrypto.com",
        "name": "Ely"
    },
    "hospital": 7,
    "type_membership": "ADMIN",
    "is_active": true,
    "is_deleted": true,
    "date_joined": "YYYY-MM-DDT00:00:00.00000Z"
}
```
```json title="[Error: 404] Membership not found"
{
    "message": "Not found"
}
```
```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```
```json title="[Error: 401] Invalid Token to make the consult"
{
    "message": "Unauthorized Medic"
}
```

## Update Membership
This will allow you to update your "type of Membership" from ADMIN to MEMBER and undo the soft_deletion of the Membership.

#### PATCH Update Membership
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

response = requests.request("PATCH", url, headers=headers, data=payload)

print(response.text)
```

#### Response to Delete Membership
```json title="[StatusCode: 201] Success for update a membership"
{
    "id": 14,
    "medic": {
        "id": 20,
        "email": "hola@prescrypto.com",
        "name": "Ely"
    },
    "hospital": 9,
    "type_membership": "Member",
    "is_active": true,
    "is_deleted": false,
    "date_joined": "YYYY-MM-DDT00:00:00.00000Z"
}
```
```json title="[Error: 404] Membership not found"
{
    "message": "Not found"
}
```
```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```
```json title="[Error: 401] Invalid Token to make the consult"
{
    "message": "Unauthorized Medic"
}
```

[EOF]
