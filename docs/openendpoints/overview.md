---
sidebar_position: 1
---

# Overview

This section aims to show developers the endpoints that will display info about how to fulfill a prescription.


### Patient Landing Endpoint

Shows necessary prescription fields with that could be useful for patients in order to purchase their medications.

Note: This endpoint might be public in future, for now standard auth is required.


Request example:

```

curl --request GET \
  --url <BASE>/api/v2/rx/patient-landing/<SIGNATURE>/ \
  --header 'Authorization: Token <TOKEN>' \
  --header 'Content-Type: application/json'
```


Response:


```
{
	"rx": {
		"signature": "1234567890",
		"raw_size": 1234567890,
		"created_at": "2021-11-03T07:38:59.688194Z",
		"medic": {
			"name": "Matilde Montoya"
		},
		"extras": "Indicaciones Extras",
		"medications": [
			{
				"id": 376,
				"presentation": "Prueba de Detección de SARS-CoV-2 (COVID-19)",
				"instructions": "Porfavor haga esta prueba",
				"drug": "Prueba de Deteccion de SARS-CoV-2 (COVID-19)",
				"cost": 0.0,
				"bought": false,
				"qty": 1,
				"bought_qty": 0,
				"category": "s",
				"qty_label": "",
				"drug_upc": "1234567890"
			},
			{
				"id": 375,
				"presentation": "Kriadex 10 ML Solución Gotero (clonazepam 2.5 mg)",
				"instructions": "test",
				"drug": "Kriadex 10 ML Solucion Gotero (clonazepam 2.5 mg)",
				"cost": 0.0,
				"bought": false,
				"qty": 3,
				"bought_qty": 0,
				"category": "",
				"qty_label": "",
				"drug_upc": "0987654321"
			}
		],
		"status": [
            "rejected",
            "Rechazada"
        ],
        "available_status": [
            false,
            "No puedes surtir esta receta"
        ],
        "transaction_url": "",
        "qr_link": ""

	},
	"campaigns": [
		{
			"id": 5,
			"short_name": "",
			"branches": [],
			"callback_redirect": "https://www.prescrypto.com/contact/",
			"main_site_redirect": "",
			"display_name": "",
			"display_phone": "55 5555 5555",
			"display_contact": "",
			"cta_link": ""
		}
	]
}

```


