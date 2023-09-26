---
sidebar_position: 1
---

# Medic
Medics are the basic pilars that can perform all different actions in the platform from creating Prescriptions, Patients, to Hospitals. For all the actions that the Medic will perform, use the Medic's Token for Autorization.

## List Medics
This endpoint will list all medics created with your token.

**Query Parameters**

The following parameters may be included as part of a URL query string.


|Parameter	| Description|
|--|--|
|limit	|Number of results to return per page.|
|offset|	The initial index from which to return the results.|

#### GET Medics List 
```python title="GET /api/v2/medics"
import requests
import json
# Assign the necessary parameters for the request (url and parameters payload)
url = "{{BASE_URL}}/api/v2/medics/"
headers = {
  'Authorization': 'Token {{YOUR_TOKEN}}'
}

result = requests.get(url=url, headers=headers)
print(result.json())
```

#### Response to Medics List

```json title="[StatusCode: 200] Success there's the list of your Medics Created"
{
    "count": 2,
    "next": "{{Base_URL}}/api/v2/medics/?limit=15&offset=15",
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "Elizabeth Blackwell",
            "email": "hola@prescrypto.com",
            "hospital": 7,
            "date_of_birth": "1821-02-03",
            "cedula_prof": "123123123",
            "specialty_no": "123123123",
            "specialty": "Medico Cirujano",
            "alma_mater": "Geneva College",
            "female": true,
            "is_active": true,
            "specialty_verified": false,
            "campaign": "",
            "is_admin_membership": true
        },
        {
            "id": 11,
            "name": "Matilde Montoya",
            "email": "test@prescrypto.com",
            "hospital": 7,
            "date_of_birth": "1957-03-14",
            "cedula_prof": "123123123",
            "specialty_no": "123123123",
            "specialty": "Medico Cirujano",
            "alma_mater": " Escuela Nacional de Medicina",
            "female": false,
            "is_active": true,
            "specialty_verified": false,
            "campaign": "",
            "is_admin_membership": false
        }
    ]
}
```

```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```

#### GET Detail Medic
You can also filter the information for a single account, by adding the Medic id to the endpoint route.

```python title="GET /api/v2/medics/{{Medic_ID}}/"
import requests
import json
# Assign the necessary parameters for the request (url and parameters payload)
url = "{{BASE_URL}}/api/v2/medics/{{MEDIC_ID}}"
headers = {
  'Authorization': f'Token {{YOUR_TOKEN}}'
}

result = requests.get(url=url, headers=headers)
print(result.json())
```

#### Response to Detail Medic
```json title="[StatusCode: 200] Success there's json with medic's detail"
{
    "id": 1,
    "name": "Elizabeth Blackwell",
    "email": "hola@prescrypto.com",
    "hospital": 7,
    "date_of_birth": "1821-02-03",
    "cedula_prof": "123123123",
    "specialty_no": "123123123",
    "specialty": "Medico Cirujano",
    "alma_mater": "Geneva College",
    "female": true,
    "is_active": true,
    "specialty_verified": false,
    "campaign": "",
    "is_admin_membership": true
}
```

```json title="[Error: 404] Medical not found or your token do not created the medic"
{
    "message": "Not found"
}
```

## Create Medic
You can create as many Medics as needed. A Medic requires to be a member of an "Hospital" which can be created during or after the creation of the Medic, usually creating the "Hospital" after is what is best suited for most of integrations.

### Body Fields
|Parameter| Description|
|---|---|
|name `required`| `String` for medic name|
|password `required`|`String` for medic password, can only take effect during medic creation|
|email `required`| `String` 'Email address has to be unique or you'll get an error|
|hospital |`int` , (Optional) Token user has to be the ADMIN of the Hospital id|
|date_of_birth|format: yyyy-mm-dd  eg 1990-12-31|
|cedula_prof|`int` number of the medical "Cédula Profesional" emited by the SEP ("Secretaría de Educación Pública")|
|specialty_no|`int` number of the medical "Cédula Profesional" of Speciality emited by the SEP|
|specialty|`String` name of the medical branch that the medic practice|
|alma_mater|`String` name of the University|
|female|`boolean` Gender of the medic, will be used for medic title "Dr" or "Dra" |
|is_active|`boolean` to deactive or active accounts, this has nothing to do with cedula validation|
|campaign|`String` Assigns a campaign to a Medic, if you need a specific campaign ask an admin to create it first|
|is_admin_membership|`boolean` to indicate what kind of ownership the Medic has to an hospital, can be an "Admin" or a "Member", Admins can edit the Hospital, members only use it|

:::note

Don’t forget to save your medic token, as you’ll need it later to create a Deeplink for logging in.

:::

#### POST Create Medic
```python title="POST /api/v2/medics/"
import requests
import json

url = "{{BASE_URL}}/api/v2/medics/"

payload = json.dumps({
  "name": "Nombre del Medico",
  "password": "Password del Medico",
  "email": "name@domain.com",
  "date_of_birth": "1992-09-22",
  "cedula_prof": "123456789",
  "specialty_no": "",
  "specialty": "Medicina General",
  "alma_mater": "Universidad Nacional Autónoma de México",
  "female": False,
  "is_active": True,
  "campaign": "PalabraClaveAsociadaAUnaCampaña"
})
headers = {
  'Authorization': 'Token {{YOUR_TOKEN}}',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```
:::note

If you want to add this Medic to an Hospital that you have created, you can add the "Hospital: {id}" to the body.

:::

#### Response to Create Medic

```json title="[StatusCode: 201] The Medic has been created successfully"
{
    "id": 1,
    "token": "eaeaeaeaeae123eaeaedummyToken",
    "name": "Algun Nombre",
    "password": "pbkdf2_sha256$150000$X1Very36lhLongZ9GnBAStringnI5KWOnrnVQ=",
    "email": "name@domain.com",
    "hospital": null,
    "date_of_birth": "1992-09-22",
    "cedula_prof": "123456789",
    "specialty_no": "",
    "specialty": "Medicina General",
    "alma_mater": "Universidad Nacional Autónoma de México",
    "female": false,
    "is_active": true,
    "specialty_verified": false,
    "campaign": "PalabraClaveAsociadaAUnaCampaña",
    "is_admin_membership": null
}
```

```json title="[Error: 400] You are not the admin of the Hospital id"
{
    "message": "You do not have sufficient permissions to assign this hospital: 1"
}
```

```json title="[Error: 400] The email already exists in Prescrypto, you need to use a new one"
[
    "duplicate key value violates unique constraint \"medics_medic_email_c4aaaa6a_uniq\"\nDETAIL:  Key (email)=(name@domain.com) already exists.\n"
]
```

## Update Medic
You can update partial data of a Medic already created.

### Request Body
The request body should be a "application/json" encoded object, containing the following items.

|Parameter| Description|
|---|---|
|name | `String` for medic name|
|email| `String` 'Email address has to be unique or you'll get an error|
|hospital |`int` , Token user has to be the ADMIN of the Hospital id|
|date_of_birth|format: yyyy-mm-dd  eg 1990-12-31|
|cedula_prof|`int` number of the medical "Cédula Profesional" emited by the SEP|
|specialty_no|`int` number of the medical "Cédula Profesional" of Speciality emited by the SEP|
|specialty|`String` name of the medical branch that the medic practice|
|alma_mater|`String` name of the University|
|female|`boolean` Gender of the medic, will be used for medic title "Dr" or "Dra" |
|is_active|`boolean` to deactive or active accounts, this has nothing to do with cedula validation|
|campaign|`String` Assigns a campaign to a Medic, if you need a specific campaign ask an admin to create it first|
|is_admin_membership|`boolean` to indicate what kind of ownership the Medic has to an hospital, can be an "Admin" or a "Member", Admins can edit the Hospital, members only use it|

#### PATCH Update Medic
```python title="PATCH /api/v2/medics/{{Medic_ID}}"
import requests
import json

url = "{{BASE_URL}}/api/v2/medics/{{Medic_ID}}/"

payload = json.dumps({
  "name": "Daniel Hale Williams"
})
headers = {
  'Authorization': 'Token {{YOUR_TOKEN}}',
  'Content-Type': 'application/json'
}

response = requests.request("PATCH", url, headers=headers, data=payload)

print(response.text)
```

#### Response to Update Medic
```json title="[StatusCode: 202] The Medic has been updated successfully"
{
    "id": 1,
    "name": "Daniel Hale Williams",
    "email": "hola@prescrypto.com",
    "hospital": 1,
    "date_of_birth": "1956-01-18",
    "cedula_prof": "123456789",
    "specialty_no": "",
    "specialty": "Medicina General",
    "alma_mater": "Chicago Medical College",
    "female": false,
    "is_active": true,
    "specialty_verified": false,
    "campaign": "",
    "is_admin_membership": null
}
```

```json title="[Error: 404] Medical not found or your token do not created the medic"
{
    "message": "Not found"
}
```

[EOF]
