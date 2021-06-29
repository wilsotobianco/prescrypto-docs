---
sidebar_position: 1
---

# Create a Medic

As an admin with the required rights you can create Medics with or without indicating their "Hospital" id, but in order for that Medic to be able to generate eRx he will need to be asociated with at least 1 "Hospital".

All interactions for an specified Medic account will be done using the Medic Token, so remember to store the Medic token in your side as consulting it afterwards may not be available.



## Medic properties
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

