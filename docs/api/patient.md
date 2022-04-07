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

```python title="GET /api/v2/patient"
import requests
import json

url = "{{Base_URL}}/api/v2/patient/"

payload={}
headers = {
  'Authorization': 'Token {{Token}}',
  'Content-Type': 'application/json'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

### Response
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
    }
]
```

## List a Singular Patient

You can also filter the information for a single patient, by adding the patient "id" or the "uid" to the endpoint route.

```python title="GET /api/v2/patient/{{Patient_ID}}"
{{Base_URL}}/api/v2/patient/1/
```
```python title="GET /api/v2/patient/{{Patient_uID}}"
{{Base_URL}}/api/v2/patient/b5555-5555-5555-5555-55555555/
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

### Response

```json title="[StatusCode: 201] The Patient has been created successfully"
{
    "id": 1,
    "name": "George Constanza",
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
    "uid": "1231231-123123-12313-123-123123123"
}
```

```json title="[Error: 400] The required field date_of_birth is missing"
{
    "date_of_birth": [
        "Este campo es requerido."
    ]
}
```




## Update Patient
You can update partial data of a Patient already created.


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

### Response
```json title="[StatusCode: 202] The Medic has been updated successfully"
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
    "uid": "1231231-123123-12313-123-123123123"
}
```

