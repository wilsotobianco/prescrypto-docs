---
sidebar_position: 2
---

# Medic


## List Medics
This endpoint will list all medics created with your token.

**Query Parameters**

The following parameters may be included as part of a URL query string.


|Parameter	| Description|
|--|--|
|limit	|Number of results to return per page.|
|offset|	The initial index from which to return the results.|


```python title="GET /api/v2/medics"
import requests
import json
# Assign the necessary parameters for the request (url and parameters payload)
url = "/api/v2/medics/"

result = requests.get(url=url)
print(result.json())
```

### List a Medic
You can also get the information of an particular accoun

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
|cedula_prof|`int` number of the medical "Cédula Profesional" emited by the SEP|
|specialty_no|`int` number of the medical "Cédula Profesional" of Speciality emited by the SEP|
|specialty|`String` name of the medical branch that the medic practice|
|alma_mater|`String` name of the University|
|female|`boolean` Gender of the medic, will be used for medic title "Dr" or "Dra" |
|is_active|`boolean` to deactive or active accounts, this has nothing to do with cedula validation|
|campaign|`int` It assigns automatically a campaign to a medic, ask adminstrators to create a campaign first|
|is_admin_membership|`boolean` to indicate what kind of ownership the Medic has to an hospital, can be an "Admin" or a "Member", Admins can edit the Hospital, members only use it|

:::note

Save Medic token in your side as it will be needed to do create the Deeplink to login.

:::

## Update Medic


