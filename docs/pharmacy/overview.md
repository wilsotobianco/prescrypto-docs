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

```python title="GET /api/v2/pharmacy/rx/{{eRx_signature}}"
import requests
import json

url = "{{Base_URL}}/api/v2/pharmacy/rx/eb2bd28dfac8f64207f7ad356d30a461741fc728ad55fe84c321ccd1e32634b3"

payload = json.dumps({})
headers = {
  'Authorization': 'Token {{Token}}',
  'Content-Type': 'application/json'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```
### Response

```json title="[200] Success, here is the detail of the eRx"
{
    "id": 1837,
    "hospital": {
        "id": 162,
        "patron": "Consultorio Demo",
        "location": "Paseo de la reforma 369, 06500, CDMX"
    },
    "clinic": null,
    "medic": "jason@prescrypto.com",
    "patient": {
        "uid": "3ffda616-259b-44bf-a2f5-1333b21a6af0",
        "name": "Jorge García",
        "email": "jason@prescrypto.com",
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
            "qty": 4,
            "bought_qty": 0,
            "drug_upc": "c703973dce484643feadb053f617bfcf6ae4aa4cfa73e3a6ded4bbf109369270",
            "order_id": 0,
            "category": "standard_drug",
            "ad_id": "",
            "qty_label": "4",
            "sku": "750131860890"
        },
        {
            "id": 2155,
            "presentation": "Aspirina Protect 28 Tabletas Caja (acetilsalicilico 100 mg)",
            "instructions": "Tomar 1 pastilla cada  8 horas",
            "cost": 0.0,
            "bought": false,
            "qty": 3,
            "bought_qty": 0,
            "drug_upc": "702de9b4e3fdd0b2af67cf1765ddcf8e48723146b07da8770a87a1c008ec5f4b",
            "order_id": 0,
            "category": "standard_drug",
            "ad_id": "",
            "qty_label": "3",
            "sku": "7501318612655"
        }
    ],
    "extras": "",
    "signature": "33c97b082e5bd0cf5b8e316a2bb2083138e391e9c7288de0672265917e7d05ee",
    "created_at": "2021-07-28",
    "sent": null,
    "send_rx": true,
    "show_diagnosis": false,
    "bought": false,
    "rejected": false,
    "cta_link": "https://www.prescrypto.com/r/Td",
    "transaction_url": "https://www.rexchain.io/hash/67faef326ddf281ed278f6501b21804a60d671cbfa0c8e28e6d879c0836cd12e"
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

```python title="POST api/v1/prescriptions/burn/{{eRx_Signature}}/"
import requests
import json

url = "{{Base_URL}}api/v1/prescriptions/burn/5b08a4d000d9203e36394202d94be41a41ee7675c1731ff96a59705da36c3dd8"

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

### Responses

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



```python title="POST /api/v1/prescriptions/reject/{{eRx_Signature}}"
import requests
import json

url = "{{Base_URL}}/api/v1/prescriptions/reject/eb2bd28dfac8f64207f7ad356d30a461741fc728ad55fe84c321ccd1e32634b3"

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


## Download PDF (in base64)
Prescriptions can be downloaded in their PDF representation with this endpoint, the response will be in base64, which will be needed to decode from base64 to PDF.

```python title="GET /api/v2/rx/pdf/{{eRx_Signature}}/"
import requests
import json

url = "{{Base_URL}}/api/v2/rx/pdf/eb2bd28dfac8f64207f7ad356d30a461741fc728ad55fe84c321ccd1e32634b3/"

payload = json.dumps({})
headers = {
  'Authorization': 'Token {{Token}}',
  'Content-Type': 'application/json'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

