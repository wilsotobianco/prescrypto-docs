---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **prescrypto in less than 5 minutes**.

## Getting Started

Get started by **creating a new medic**.

Or **try prescrypto immediately** with **[app.prescrypto.com](https://app.prescrypto.com)**.

## Generate a new Prescription

Generate a new prescription using the **medic api token**:

```shell
curl --location --request POST '<BASE_URL>/api/v2/rx-endpoint/' \
--header 'Authorization: Token <TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "hospital": <HOSPITAL_ID OR NULL TO TAKE THE MEDIC DEFAULT>,
    "clinic": <CLINIC_ID OR NULL>,
    "patient": {
        "uid": "<PATIENT_UID>"
    },
    "diagnosis": "Diagnostico de prueba!",
    "medications": [
        {
            "presentation": "Spiolto Respimat Solución Cartucho de 4ML 30 Dosis Caja (tiotropio 0.226 mg, clorhidrato de olodaterol 0.226 mg)",
            "instructions": "O mejor conocidas como indicaciones en México",
            "qty": 2,
            "drug_upc": "<PRODUCT.id FROM_PRODUCTS_ENDPOINT or empty",
            "category": "<PRODUCT.category>"
        },
        {
            "presentation": "Prueba de Detección de SARS-CoV-2 (COVID-19)",
            "instructions": "Indicaciones de prueba de covid",
            "qty": 1,
            "drug_upc": "<PRODUCT.id>",
            "category": "<PRODUCT.category>",
        }
    ],
    "extras": "Indicaciones extras para el paciente u observaciones",
    "show_diagnosis": true
}'
```
