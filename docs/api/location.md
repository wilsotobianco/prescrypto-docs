---
sidebar_position: 8
---

# Location
A Medic can choose among the different [Hospitals](hospital.md) in which he has a [Memberhip](membership.md). 

The use of this endpoint it's focused on integrations where the Medic has access to Prescrypto's UI. 

## List all Locations
It will list the Hospitals in which the Medic has a Membership.

```python title="GET /api/v2/locations/"
import requests

url = "{{Base_URL}}api/v2/locations/"

payload={}
headers = {
  'Authorization': 'Token {{token}}'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

### Response
```json title="[StatusCode: 200]"
[
    {
        "hospital": {
            "name": "Clinica San Gregorio",
            "id": 23,
            "location": "Clzd Tlalpan #123, col. Portales, CDMX"
        },
        "default": true,
        "clinics": [
            {
                "id": null,
                "name": "Clinica San Gregorio",
                "location": "Clzd Tlalpan #123, col. Portales, CDMX"
            }
        ]
    },
    {
        "hospital": {
            "name": "Hospitals Las Animas",
            "id": 35,
            "location": "Ciudad de Mexico, 06500"
        },
        "default": false,
        "clinics": [
            {
                "id": null,
                "name": "Hospitals Las Animas",
                "location": "Ciudad de Mexico, 06500"
            }
        ]
    }
]
```

## Update Location
It will change the default "Active" Hospital for which the Medic will prescribe.

```python title="PATCH /api/v2/locations/update/"
import requests

url = "{{Base_URL}}api/v2/locations/update/"

payload={"hospital_id": 35}
headers = {
  'Authorization': 'Token {{token}}',
  'Content-Type': 'application/json'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

[EOF]