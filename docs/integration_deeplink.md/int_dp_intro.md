---
sidebar_position: 1
---


# Intro

For this kind of integration the Medic user will access Prescrypto through a "Deeplink", this link will autolog the user and can pre-fill certaing fields as the patient data.


## Medic
The request body should be a "application/json" encoded object.


## POST /api/v2/medics/

```python mdx title="POST /api/v2/medics/"
import requests
import json
# Assign the necessary parameters for the request (url and parameters payload)
url = "/api/v2/medics/"

headers = {'content-type': 'application/json'}
payload = {
    "name": <name>,
    "password": <password>,
    "email": <email>,
    "hospital": <hospital>,
    "date_of_birth": <date_of_birth>,
    "cedula_prof": <cedula_prof>,
    "specialty_no": <specialty_no>,
    "specialty": <specialty>,
    "alma_mater": <alma_mater>,
    "female": <female>,
    "is_active": <is_active>,
}
# Execute the request and get the result
result = requests.post(url=url, data=json.dumps(payload), headers=headers)
print(result.json())

```

