---
sidebar_position: 8
---

# Location
A Medic can choose among the different [Hospitals](hospital.md) in which he has a [Memberhip](membership.md). 

The use of this endpoint it's focused on integrations where the Medic has access to Prescrypto's UI. 

## List all Locations
It will list the Hospitals in which the Medic has a Membership.

#### GET List all Locations
```python title="GET /api/v2/locations/"
import requests

url = "{{Base_URL}}api/v2/locations/"

headers = {
  'Authorization': 'Token {{token}}'
}

response = requests.request("GET", url, headers=headers)

print(response.text)

```

#### Response to List all Locations
```json title="[StatusCode: 200]"
[
    {
        "hospital": {
            "name": "Hospital 1",
            "id": 23,
            "location": "Nombre de la Calle, Colonia, CP, Alcaldia, Estado"
        },
        "default": true,
        "clinics": [
            {
                "id": null,
                "name": "Clínica 1 del Hospital 2",
                "location": "Nombre de la Calle, Colonia, CP, Alcaldia, Estado"
            }
        ]
    },
    {
        "hospital": {
            "name": "Hospital 2",
            "id": 35,
            "location": "Nombre de la Calle, Colonia, CP, Alcaldia, Estado"
        },
        "default": false,
        "clinics": [
            {
                "id": null,
                "name": "Clínica 1 del Hospital 2",
                "location": "Nombre de la Calle, Colonia, CP, Alcaldia, Estado"
            }
        ]
    }
]
```
```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```

## Update Locations

It will change the default "Active" Hospital for which the Medic will prescribe.

#### PATCH Update Locations
```python title="PATCH /api/v2/locations/update/"
import requests

url = "{{Base_URL}}api/v2/locations/update/"

payload={
  "hospital_id": 35
}

headers = {
  'Authorization': 'Token {{token}}',
  'Content-Type': 'application/json'
}

response = requests.request("PATCH", url, headers=headers, data=payload)

print(response.text)

```
#### Response to List all Locations
```json title="[StatusCode: 200]"
{
    "message": "Hopsital Update Successful"
}
```

```json title="[Error: 404] Hospital not found"
{
    "message": "Hopsital not found"
}
```
```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```

[EOF]
