---
sidebar_position: 4
---

# Patient

The following parameters may be included as part of a URL query string.


|Parameter	| Description|
|--|--|
|limit	|Number of results to return per page.|
|offset|	The initial index from which to return the results.|

## List All Patients

#### GET All Patients
```python title="GET /api/v2/patient"
import requests
import json

url = "{{Base_URL}}/api/v2/patient/"

headers = {
  'Authorization': 'Token {{Token}}'
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

#### Response to List All Patients
```json title="[StatusCode: 200] "
[
    {
        "id": 1,
        "name": "George Constanza",
        "email": "hola@prescrypto.com",
        "date_of_birth": "1990-06-01",
        "external_patient_file": "",
        "gender": "M",
        "curp": "",
        "phone": "",
        "address": "",
        "state": "",
        "zip_code": "",
        "location": "",
        "uid": "b5555-5555-5555-5555-55555555"
    },
    {
        "id": 34,
        "name": "Homero Peréz",
        "email": "hola@prescrypto.com",
        "date_of_birth": "1990-08-10",
        "external_patient_file": "",
        "gender": "H",
        "curp": "",
        "phone": "",
        "address": "",
        "state": "",
        "zip_code": "",
        "location": "",
        "uid": "b4444-5555-5555-5555-55555555"
    }
]
```
```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```

## List a Singular Patient

You can also filter the information for a single patient, by adding the patient "uid" to the endpoint route.

#### GET List a Singular Patient
```python title="GET /api/v2/patient/{{Patient_uID}}"
import requests
import json

url = "{{Base_URL}}/api/v2/patient/{{Patient_uID}}"

headers = {
  'Authorization': 'Token {{Token}}'
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

#### Response to List All Patients
```json title="[StatusCode: 200] "
{
    "id": 1,
    "name": "George Constanza",
    "email": "hola@prescrypto.com",
    "date_of_birth": "1990-06-01",
    "external_patient_file": "",
    "gender": "M",
    "curp": "",
    "phone": "",
    "address": "",
    "state": "",
    "zip_code": "",
    "location": "",
    "uid": "b5555-5555-5555-5555-55555555"
}
```
```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```

## Create Patient
You can create as many Patients as needed.

### Body Fields
The request body should be a `application/json` encoded object, it may contain the following items.

|Parameter| Description|
|---|---|
|name `required`|`String` Name foofr patient|
|email|	`String` Identifier could be email/id_string > 4 characters|
|date_of_birth `required`|	`String` date format YYYY-MM-DD|
|external_patient_file|`String` can be the ID of the Patient of your platform|
|gender|`String` Gender of the Patient, can be either `M`ale, `F`emale or `O`ther, if none defined it will default to `M`|
|curp|	`String` CURP of the Patient|
|phone|	`String`|
|address|`String`	|
|state|	`String`|
|zip_code|`String`	|
|location|`String`	|
|uid|`String`Unique id of the patient, asigned by Prescrypto|


#### POST Create Patient
```python title="POST /api/v2/patient/"
import requests
import json

url = "{{Base_URL}}/api/v2/patient/"

payload = json.dumps({
  "name": "Algun Nombre",
  "date_of_birth": "1994-06-01"
})
headers = {
  'Authorization': 'Token {{Token}}',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

### Response to Create Patient

```json title="[StatusCode: 201] The patient has been created successfully"
{
    "id": 894,
    "name": "Algun Nombre",
    "email": "",
    "date_of_birth": "1994-06-01",
    "external_patient_file": "",
    "gender": "M",
    "curp": "",
    "phone": "",
    "address": "",
    "state": "",
    "zip_code": "",
    "location": "",
    "uid": "b5555-5555-5555-5555-55555555"
}
```

```json title="[Error: 400] The required field date_of_birth is missing"
{
    "field_name": [
        "This field is required."
    ]
}
```
```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```


## Update Patient
You can update partial data of a Patient already created.


## POST Update Patient
```python title="PATCH /api/v2/patient/{{patient_ID}}"
import requests
import json

url = "{{Base_URL}}/api/v2/patient/1/"

payload = json.dumps({
  "name": "Kosmo Kramer"
})
headers = {
  'Authorization': 'Token {{Token}}',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

#### Response to Update Patient
```json title="[StatusCode: 202] The patient has been updated successfully"
{
    "id": 1,
    "name": "Kosmo Kramer",
    "email": "",
    "date_of_birth": "1994-06-01",
    "external_patient_file": "",
    "gender": "M",
    "curp": "",
    "phone": "",
    "address": "",
    "state": "",
    "zip_code": "",
    "location": "",
    "uid": "b5555-5555-5555-5555-55555555"
}
```
```json title="[Error: 400] The required field field_name is missing"
{
    "field_name": [
        "This field is required"
    ]
}
```
```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```

[EOF]
