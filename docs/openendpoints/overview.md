---
sidebar_position: 1
---

# Overview

This sections aims to show developers the endpoints that will display info about how to delivery the prescriptions


### Patient Landing Page

Shows minimal prescription fields with campaigns objects, that could be useful for patients in order to get their medications.

Note: This endpoint will be public in future, for now the token is required in the request headers.


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
		"signature": "0194f15c10710492f5045e90637cf91dc4c24711b8ccb2fdabc9a5245435aab2",
		"raw_size": 391664,
		"created_at": "2021-11-03T07:38:59.688194Z",
		"medications": [
			{
				"id": 376,
				"presentation": "Prueba de Detección de SARS-CoV-2 (COVID-19)",
				"instructions": "Porfavor haga esta prueba",
				"drug": "Prueba de Deteccion de SARS-CoV-2 (COVID-19)",
				"cost": 0.0,
				"bought": false,
				"qty": 1001,
				"bought_qty": 0,
				"category": "standard_drug",
				"qty_label": "Sin suspender",
				"drug_upc": "83cd6128a7f3f50dab182b20cee7aa966a2255e77ba2d16b200f2c2d191430e4"
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
				"category": "standard_drug",
				"qty_label": "",
				"drug_upc": "745a7dfd39709c8cebee90ef32f1adca340e3a54fb509fd0331253d20d32bbdf"
			}
		],
		"medic": {
			"name": "Jesus Alvarado Garzon"
		}
	},
	"campaigns": [
		{
			"id": 5,
			"short_name": "prixz",
			"branches": [],
			"callback_redirect": "https://www.prescrypto.com/contact/",
			"main_site_redirect": "https://prixz.com/",
			"display_name": "Prixz",
			"display_phone": "55 8097 0039",
			"display_contact": "55 8097 0039 (Whatsapp) Entrega a domicilio en toda la república. Guadalajara, mty, cdmx mismo día, resto de la rep. Entre 24 y 48hrs",
			"cta_link": "https://staging.prescrypto.com/e/prixz/63"
		}
	],
	"default_campaign": {
		"id": 4,
		"short_name": "walmex",
		"branches": [
			{
				"Determinante": 3825,
				"name": "San Mateo",
				"Formato": "Walmart Express",
				"Estado": "Estado de México",
				"address": "Camino a San Mateo Nopala No.20 Col. Sta Cruz Acatlan 53240 Naucalpan, Estado de Mexico"
			}
		],
		"callback_redirect": "landing_view",
		"main_site_redirect": "landing_view",
		"display_name": "Walmart",
		"display_phone": "55 0000 0000",
		"display_contact": "Grupo Walmart",
		"cta_link": "https://staging.prescrypto.com/e/walmex/63"
	}
}

```


