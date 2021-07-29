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
|drug| `String` [WIP]|
|cost| `Int` [WIP]|
|bought| `Boolean` Indicates if this medication can still be sold, if `true` it means all prescribed quantities have been sold.|
|qty|`Int` Number of this medication that has been prescribed|
|bought_qty|`Int` the number of medication that has been sold, calculate the amount that you can sell based on the available qty (`qty`-`qty_bought`)|
|qty_label| `String` IT can be used for non-controlled medications, the Medic will indicate either "A la discreción del farmaceutico" or "Sin Suspender" so the pharmacyst determines the amount to be sold based on `instructions` (n.pills x hour x days of treatment) |




## Search an eRx
As first element that you will have from an eRx, it's its "Signature", with this value you can search for it in Prescrypto and get a `json` with the relevant data of the eRx.

```python title="GET /api/v1/prescriptions/search/?query={{eRx_signature}}"
import requests
import json

url = "{{Base_URL}}/api/v1/prescriptions/search/?query=eb2bd28dfac8f64207f7ad356d30a461741fc728ad55fe84c321ccd1e32634b3"

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
[
    {
        "id": 123,
        "clinic": null,
        "medic": "jason@prescrypto.com",
        "patient": {
            "id": 179,
            "name": "jason",
            "email": "jason",
            "date_of_birth": "1997-04-01",
            "uid": "c3d77ee1-aa49-123-123-123123123",
            "external_patient_file": ""
        },
        "diagnosis": "Este es mi diagnostico, porfavor cuidate!",
        "medications": [
            {
                "id": 2882,
                "presentation": "Algun Medicamento",
                "instructions": "Eliptic Ofteno",
                "drug": "Algun Medicamento",
                "cost": 0.0,
                "bought": false,
                "qty": 1,
                "bought_qty": 0,
                "qty_label": ""
            },
            {
                "id": 2881,
                "presentation": "",
                "instructions": "Adulto",
                "drug": "n1 (f1)",
                "cost": 0.0,
                "bought": false,
                "qty": 1,
                "bought_qty": 0,
                "qty_label": ""
            }
        ],
        "extras": "Indicaciones Extra Dude!",
        "signature": "eb2bd28dfac8f64207f7ad356d30a461741fc728ad55fe84c321ccd1e32634b3",
        "created_at": "2021-06-30",
        "sent": false,
        "rejected": false,
        "transaction_url": "https://www.prescrypto.com/hash/78626d018604549f5fddedee2b303bcd80f39604362ed50216acd13e278027bc"
    }
]
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
A Medic or Pharmacy can reject an eRx if they consider that the eRx does not meet the legal requirements.

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
Prescriptions can be downloaded in their PDF format, for it this endpoint has been enabled, from which the response will be in base64, get this response and decode from base64 to PDF.

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


[EOF]
