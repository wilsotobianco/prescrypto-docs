---
sidebar_position: 7
---

# Medication

## List all Medications

```python title="GET /api/v2/medications/"
import requests
import json

url = "{{Base_URL}}/api/v2/medications/"

payload={}
headers = {
  'Authorization': 'Token {{Token}}',
  'Content-Type': 'application/json'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

### Response
```json title="[200]"
{
    "count": 661,
    "next": "https://www.prescrypto.com/api/v2/medications/?limit=15&offset=15",
    "previous": null,
    "results": [
        {
            "id": 2872,
            "presentation": "aspirina",
            "instructions": "tomar 1 pastilla cada 8 horas durante 7 dias",
            "drug": "aspirina",
            "cost": 0.0,
            "bought": false,
            "qty": 3,
            "bought_qty": 0,
            "drug_upc": "", // This field will have a hash of the real upc of the medication
            "order_id": 0,
            "category": "unstructured_drug",
            "ad_id": "",
            "qty_label": "3"
        }

```

### List a Single Medication
You can also filter the information for a single Medication, by adding the Medication id to the endpoint route.

```python title="GET /api/v2/medications/{{Medication_ID}}"
{{Base_URL}}/api/v2/medication/1/
```

[WIP]

[EOF]
