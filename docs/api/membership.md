---
sidebar_position: 3
---

# Membership
The kind of permissions that a Medic can have with an Hospital can be defined by Membership. It can be either "Admin" or "Member".

A Member of an Hospital can only prescribe from that Hospital but he is unable to edit it.

An Admin of an Hospital can Edit its content.

# List Memberships
It will display the Medics members of a singular Hospital, you need to be ADMIN of the Hospital to send this request.

```python title="GET /api/v2/memberships/{{Hospital_ID}}/"
import requests

url = "{{Base_URL}}/api/v2/memberships/1/"

payload={}
headers = {
  'Authorization': 'Token {{Token}}'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)


```

### Response

```json title="[StatusCode: 200] Here are the Medics members of this Hospital"
[
    {
        "medic": {
            "name": "Sir Alexander Fleming",
            "email": "hola@prescrypto.com"
        },
        "type_membership": "MEMBER",
        "is_active": true,
        "date_joined": "1928-02-26T17:32:48.760785Z"
    },
    {
        "medic": {
            "name": "Helen Brooke Taussig",
            "email": "hola@prescrypto.com"
        },
        "type_membership": "ADMIN",
        "is_active": true,
        "date_joined": "1902-11-04T01:12:12.017392Z"
    }
]
```

:::note

At this moment ony List memberhips is enabled, we are adding the feature to Create and modify current memberships.

:::

[EOF]