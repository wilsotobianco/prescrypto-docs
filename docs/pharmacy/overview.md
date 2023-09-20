---
sidebar_position: 1
---

# Pharmacy

Pharmacy tokens are limited to be used on the Pharmacy endpoints which are contained in this page. Trying to use this token in other edpoints will result in error of permisions.

A Pharmacy token can search, download, reject a prescription, and indicate when a medication has been sold.

The "sello electronico" in an eRx it's it unique identificator, from now on it will be mentioned as "Signature", with this you can search an eRx in the platform.

Be careful with the routes of the Pharmacy endpoints, some are in v1 others in v2!!!.

## Response Fields Explanation
|Field|Description|
|--|--|
|Diagnosis| `String` The diagnosis of the eRx|
|Medications | `String` It will contain the information of each medication that has been prescribed |
|extras|`String` General indications that are not tied to a specific medication, ex: "Fiebre 38ºC, tomar abundate agua,.."|
|signature|`String` uniuqe identifier of the eRx|
|created_at| `String` date of creation of the eRx, format: YYYY-MM-DD|
|sent|`Boolean` indicates if the eRX has been sent by email, true=the eRx has been sent|
|rejected|`Boolean` indicates if the eRX has been canceled, true=the eRx has been Canceled|
|transaction_url| `String` Link where it can be verified the compliance of this individual eRx with the NOM151-SCFI-2016 |


Medications inner Fields

|Field|	Description|
|--|--|
|id|`Int` the id of the medication, get this id from the Search endpoint|
|presentation| `String` The commercial name of the Medication, eg: "Aspirina"|
|instructions| `String` "Posología" for that specific medication|
|cost| `Int` [WIP]|
|bought| `Boolean` Indicates if this medication can still be sold, if `true` it means all prescribed quantities have been sold.|
|qty|`Int` Number of this medication that has been prescribed|
|bought_qty|`Int` the number of medication that has been sold, calculate the amount that you can sell based on the available qty (`qty`-`qty_bought`)|
|qty_label| `String` IT can be used for non-controlled medications, the Medic will indicate either "A la discreción del farmaceutico" or "Sin Suspender" so the pharmacyst determines the amount to be sold based on `instructions` (n.pills x hour x days of treatment) |




## Search an eRx
The first element that you will have from an eRx, it's the "Signature" or "Sello electrónico", with this value you can search for it in Prescrypto and get a `json` with the relevant data of the eRx including the SKU of the medications.

#### GET Search an eRx
```python title="GET /api/v2/pharmacy/rx/{{eRx_signature}}"
import requests

url = "{{Base_URL}}/api/v2/pharmacy/rx/{{eRx_signature}}"

headers = {
  'Authorization': 'Token {{Token}}',
  'Content-Type': 'application/json'
}

response = requests.request("GET", url, headers=headers)

print(response.text)

```
#### Response to Search an eRx

```json title="[200] Success, here is the detail of the eRx"
{
    "id": 1837,
    "hospital": {
        "id": 162,
        "patron": "Consultorio Demo",
        "location": "Nombre de la Calle, Colonia, CP, Alcaldia, Estado"
    },
    "clinic": null,
    "medic": "hola@prescrypto.com",
    "patient": {
        "uid": "1234567890",
        "name": "Pedro Sánchez",
        "email": "pedro@email.com",
        "date_of_birth": "1973-03-01",
        "gender": "M"
    },
    "diagnosis": "Gripe por virus de la gripe estacional identificado",
    "medications": [
        {
            "id": 2156,
            "presentation": "Actron 10 Cápsulas Caja (ibuprofeno 400 mg)",
            "instructions": "Tomar 1 pastilla cada  8 horas",
            "cost": 0.0,
            "bought": false,
            "qty": 1,
            "bought_qty": 0,
            "drug_upc": "1234567890",
            "order_id": 0,
            "category": "",
            "ad_id": "",
            "qty_label": "",
            "sku": "1234567890"
        },
        {
            "id": 2155,
            "presentation": "Aspirina Protect 28 Tabletas Caja (acetilsalicilico 100 mg)",
            "instructions": "Tomar 1 pastilla cada  8 horas",
            "cost": 0.0,
            "bought": false,
            "qty": 1,
            "bought_qty": 0,
            "drug_upc": "1234567890",
            "order_id": 0,
            "category": "",
            "ad_id": "",
            "qty_label": "",
            "sku": "1234567890"
        }
    ],
    "extras": "",
    "signature": "1234567890",
    "created_at": "2022-07-28",
    "sent": null,
    "send_rx": true,
    "show_diagnosis": false,
    "bought": false,
    "rejected": false,
    "cta_link": "",
    "transaction_url": "https://www.rexchain.io/hash/1234567890"
}
```
```json title="[Error: 404] Rx not found"
{
    "error": "rx not found"
}
```
```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```


## Burn Medication
When a medication has been bought by the patient, the status can be changed through the api.


|Field|	Description|
|--|--|
|sales_code| `String` Can be an internal identifier of the Pharmacy, example: the Sales Ticket|
|medications| `String` nested arrays of the Medications QTY that will be modified|

Medications inner Fields

|Field|	Description|
|--|--|
|id|`Int` the id of the medication, get this id from the Search endpoint|
|bought_qty|`Int` the number of medication that will be sold, calculate the amount that you can sell based on the available qty (`qty`-`qty_bought`)|

#### POST Burn Medication
```python title="POST api/v1/prescriptions/burn/{{eRx_Signature}}/"
import requests
import json

url = "{{Base_URL}}api/v1/prescriptions/burn/{{eRx_Signature}}"

payload = json.dumps({
  "sales_code": "PHX12345",
  "medications": [
    {
      "id": 2874,
      "bought_qty": 1
    }
  ]
})
headers = {
  'Authorization': 'Token {{Token}}',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

```

#### Response to Burn Medication

```json title="here are some examples Status Codes that you can get"
{"status": "202 OK"} // Everthing went fine 
{"status": "400 Bad Response"} // Something is bad in your JSON "Body".
{"status": "500 Server Error"} // There has been an issue on our side please contact us.
```

## Reject
A prescription can be rejected by a Medic or Pharmacy, once a prescription has been rejected it cannot be used or modified again, be very careful with this procedure.

### Body Fields

|Field|	Description|
|--|--|
|`rejected`| `true`|
|`reason_of_rejected`|	`String` Description of the reason for the rejection|


```json title="JSON body example"
{
    "rejected": true,
    "reason_of_rejected": "Does not have the Medic information"

}
```

#### POST Reject
```python title="POST /api/v1/prescriptions/reject/{{eRx_Signature}}"
import requests
import json

url = "{{Base_URL}}/api/v1/prescriptions/reject/{{eRx_Signature}}"

payload = json.dumps({
  "rejected": True,
  "reason_of_rejected": "Does not have the Medic information"
})
headers = {
  'Authorization': 'Token {{Token}}',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

```

#### Response to Reject
```json title="[StatusCode: 200] Success! "
{
    "status": "202 OK"
}
```
```json title="[Error: 404] Rx not found"
{
    "status": "400 Bad Response",
    "error": "rx not found"
}
```
```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```

## Download PDF (in base64)
Prescriptions can be downloaded in their PDF representation with this endpoint, the response will be in base64, which will be needed to decode from base64 to PDF.

#### GET Download PDF
```python title="GET /api/v2/rx/pdf/{{eRx_Signature}}/"
import requests

url = "{{Base_URL}}/api/v2/rx/pdf/{{eRx_Signature}}/"

headers = {
  'Authorization': 'Token {{Token}}',
  'Content-Type': 'application/json'
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```
#### Respose to Download PDF
```json title="[StatusCode: 200] Success! "
{
    "pdf": "pdf_in_base_64"
}
```
```json title="[Error: 404] Rx not found"
{
    "error": "rx not found"
}
```
```json title="[Error: 401] Invalid Token"
{
    "message": "Invalid Token"
}
```
[EOF]