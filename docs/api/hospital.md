---
sidebar_position: 2
---

# Hospital
An Hospital it's the place from where the [Medic](medic.md) is practicing, it can be literally an Hospital, a "Consultorio" or even a clinic.
Hospitals can be created by a [Medic](medic.md)  or API Admin, a [Medic](medic.md)  can be part to multiple Hospitals, either as Admin or Member, we call that memberhsips.
A [Medic](medic.md)  needs an Hospital in order to create an eRx.
The information of the Hospital is used for the header and footer of the eRx, it contains legal requirements as the address of the place from where the [Medic](medic.md)  practice, information that has to be complete, as if not, it can be a reason for pharmacies to reject the eRx.


## Fields of a Hospital
|Field|Description|
|--|--|
|id|`Int` ID of the Hospital, is obtained after it has been created|
|created_at|`String` date in which the Hospital has been created|
|name|`String` Name of the Hospital|
|patron|`String` Name of the Hospital, this one will appear on the printed versión of the eRx|
|location|`String` Adress of the Hospital, it has to be completed, with Postal code, State, etc|
|contact|`String` email or Phone for contact|
|headline|`String` Subtitle where more information can be displayed, like the moto of Hospital|
|page_size|`Boolean` true= US Letter, false= Half US Letter|
|picture|This can only be used by sending the body as a form, it only accepts filetype:".jpg" and size:<2MB|
|university_logo|This can only be used by sending the body as a form, it only accepts filetype:".jpg" and size:<2MB|
|is_active|`Boolean` Indicates if this Hospital will be shown to the Members or not|
|is_admin|`Boolean` indicates what is the Membership of the Medic for this Hospital|
|info|`Boolean` Adds an additional information page to the PDF of the prescription|
|location_lat|`String` Latitude of the Hospital and size :<32, we recommend using Google Maps latitude.|
|location_lon|`String` Longitude of the Hospital and size :<32, we recommend using Google Maps longitude.|
|zip_code|`String` Postal code of the Hospital and size:<32.|

## List all Hospitals
The following parameters should be included as part of a URL query string.

|Parameter|	Description|
|--|--|
|limit|	Number of results to return per page.|
|offset| The initial index from which to return the results.|

#### GET List all Hospitals
```python title="GET /api/v2/hospital"
import requests
import json
# Assign the necessary parameters for the request (url and parameters payload)
url = "{{Base_URL}}/api/v2/hospital/"

headers = {
  'Authorization': 'Token {{YOUR_TOKEN}}'
}

result = requests.get(url=url, headers=headers)
print(result.json())
```

#### Response to List all Hospitals
```json title="[StatusCode: 200] Success here are all your Hospitals created"
{   
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "created_at": "2016-01-01T04:22:12Z",
            "name": "Consultorio de la Dra. Matilde Montoya",
            "patron": "Consultorio de la Dra. Matilde Montoya",
            "location": "Nombre de la Calle, Colonia, CP, Alcaldia, Estado",
            "contact": "hola@prescrypto.com",
            "headline": "",
            "page_size": false,
            "page_template": "classic",
            "picture": "https://www.prescrypto.com/media/logo.jpg",
            "university_logo": "https://www.prescrypto.com/media/university.jpg",
            "is_active": true,
            "is_admin": true,
            "info": true,
            "send_emails": true,
            "zip_code": "06500",
            "location_lat": "00.0000000000000",
            "location_lon": "00.0000000000000",
            "google_place_id": ""
        }
    ]    
}
```

```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```

You can also filter the information for a single Hospital, by adding the Hospital id to the endpoint route.

#### GET Single Hospital
```python title="GET /api/v2/hospital/{{Hospital_ID}}"
import requests
import json
# Assign the necessary parameters for the request (url and parameters payload)
url = "{{Base_URL}}/api/v2/hospital/{{Hospital_ID}}"

headers = {
  'Authorization': 'Token {{YOUR_TOKEN}}'
}

result = requests.get(url=url, headers=headers)
print(result.json())
```

#### Response to Single Hospital
```json title="[StatusCode: 200] Success here are the details of the Hospital of choice"
{
    "id": 1,
    "created_at": "2016-01-01T04:22:12Z",
    "name": "Consultorio de la Dra. Matilde Montoya",
    "patron": "Consultorio de la Dra. Matilde Montoya",
    "location": "Nombre de la Calle, Colonia, CP, Alcaldia, Estado",
    "contact": "hola@prescrypto.com",
    "headline": "",
    "page_size": false,
    "page_template": "classic",
    "picture": "https://domain.com/logo.jpg",
    "university_logo": "https://domain.com/university.jpg",
    "is_active": true,
    "is_admin": true,
    "info": true,
    "send_emails": true,
    "zip_code": "06500",
    "location_lat": "00.0000000000000",
    "location_lon": "00.0000000000000",
    "google_place_id": ""
}
```

```json title="[Error: 404] Hospital not found or you don't have access to it."
{
    "message": "Not found"
}
```

## Create Hospital
The Request Body can either be sent as `application/json` or `application/form-data`. 
This are the required fields to create an Hospital.

|Field|Description|
|--|--|
|name `required`|`String` Name of the Hospital|
|patron `required`|`String` Name of the Hospital|
|location `required`|`String` Adress of the Hospital, it has to be completed, with Postal code, State, etc|
|contact `required`|`String` email or Phone for contact|

#### POST Create Hospital
```python title="POST /api/v2/hospital/"
import requests
import json

url = "{{BASE_URL}}/api/v2/hospital/"

payload = json.dumps({
  "name": "Hospital de Prueba",
  "patron": "Hospital de Prueba S.A. de C.V.",
  "location": "Nombre de la Calle, Colonia, CP, Alcaldia, Estado",
  "contact": "hola@prescrypto.com",
  "is_admin": True
})
headers = {
  'Authorization': 'Token {{YOUR_TOKEN}}',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

```
:::note

If you create an Hospital with the Token of the Medic, it will  automatically link the Medic and the Hospital as "Admin" by default. 
Add "is_admin: false" if you want to specify a Memberhip of "member" instead of admin.

:::


#### Response to Create Hospital

```python title="[StatusCode: 201] Success the Hospital has been created"
{
    "id": 1,
    "created_at": "2016-01-30T00:49:09.790586Z",
    "name": "Hospital Test",
    "patron": "Hospital Test S.A. de C.V.",
    "location": "Nombre de la Calle, Colonia, CP, Alcaldia, Estado",
    "contact": "hola@prescrypto.com",
    "headline": "",
    "page_size": false,
    "page_template": "classic",
    "picture": null,
    "university_logo": null,
    "is_active": true,
    "is_admin": true,
    "info": false,
    "send_emails": true,
    "zip_code": "",
    "location_lat": "",
    "location_lon": "",
    "google_place_id": ""
}
```

## Update Hospital
Only Admins can modify an hospital

The following parameters should be included in the URL path.

|Parameter|	Description|
|--|--|
|id `required`|	`Int` The unique integer value identifying this hospital|

#### PATCH Update Hospital

```python title="PATCH /api/v2/hospital/{{Hospital_ID}}"
import requests
import json

url = "{{BASE_URL}}/api/v2/hospital/{{Hospital_ID}}/"

payload = json.dumps({
  "contact": "nuevo_hola@prescrypto.com"

})
headers = {
  'Authorization': 'Token {{Token}}',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

#### Response to Update Hospital
```python title="[StatusCode: 201] Success updated Hospital"
{
    "id": 1,
    "created_at": "2016-01-30T00:49:09.790586Z",
    "name": "Hospital Test",
    "patron": "Hospital Test S.A. de C.V.",
    "location": "Nombre de la Calle, Colonia, CP, Alcaldia, Estado",
    "contact": "nuevo_hola@prescrypto.com",
    "headline": "",
    "page_size": false,
    "page_template": "classic",
    "picture": null,
    "university_logo": null,
    "is_active": true,
    "is_admin": true,
    "info": false,
    "send_emails": true,
    "zip_code": "",
    "location_lat": "",
    "location_lon": "",
    "google_place_id": ""
}
```

```json title="[Error: 404] Hospital not found or your token do not created the Hospital"
{
    "message": "Not found"
}
```

[EOF]
