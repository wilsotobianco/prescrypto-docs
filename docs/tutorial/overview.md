---
sidebar_position: 1
---

# Prescrypto Tutorial

This page explains how developers can get started using Prescrypto APIs.

If you are using Prescrypto APIs for the first time, you can follow the steps in this guide to call the APIs using curl commands. You can use curl commands to experiment with an API before you develop your application.


## Creating the main Models

Below we can see the main models to start using the API. Hospitals, and Medics. 

![Base Models Diagram](/tutorial/base_models.png)


### Creating an Hospital

First we recommend create a place to work. So the endpoint [hospital](api/hospital.md) will be the first to hint!

Example Request

```
curl --request POST \
  --url <BASE>/api/v2/hospital/ \
  --header 'Authorization: Token <TOKEN>' \
  --header 'Content-Type: application/json' \
  --data '{
      "name": "Test Hospital(Short name)",
      // PRINTED FIELDS
      "patron": "TEST HOSPITAL",
      "headline": "Slogan",
      "location": "My address",
      "contact": "2384094571, 557658394 hola@gmail.com",
      // Optional fields
      "page_size": 0, // DEFAULT LETTER '0', HALF PAGE '1'
      "info": false // DEFAULT false, whether shows extra info or not in the prescription pdf
}'
```

Response
```
{
  "id": 9<HOSPITAL_ID>,
  "created_at": "2021-07-21T23:00:30.278678Z",
  "name": "Test Hospital",
  "patron": "TEST HOSPITAL",
  "headline": "Slogan",
  "location": "My address",
  "contact": "5551111222, hola@gmail.com"
  "page_size": 0,
  "picture": null,
  "university_logo": null,
  "is_active": true,
  "is_admin": true,
  "info": false
}
```
				
The pictures could be upload using the webform on the plataform or via postman forms alike. On our postman collection we have an example.

:::tip TIP: Pay attention to required and non required fields

Also what the default configurations means, these fields affect the medic workflow alongside Prescrypto platform.

:::


### Creating Medics

So having the HOSPITAL_ID (9) we can proceed to create new medic users. Lets create two medics, one with the hospital recently created and other without hospital.

So we will use the endpoint [medics](api/medic.md)

Example Request

```
curl --request POST \
  --url <BASE>/api/v2/medics/ \
  --header 'Authorization: Token <TOKEN>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Test Doctor Who",
    "password": "SomeRandomPASS",
    "email": "testemailing@email.com",
    "date_of_birth": "1991-09-03",
    "cedula_prof": "ABC1234",
    "specialty_no": "ABC12345",
    "specialty": "Oftalmólogo",
    "alma_mater": "Testing University",
    "female": false,
    "specialty_verified": true,
    "hospital": 9,
    // Optional fields
    "is_active": true, // Default true
    "is_admin_membership": true // Default false
}'
```

:::note Note: What about "is_admin_membership"

If the field is settled TRUE, the medic user can edit the hospital or invite new members to it, otherwise, the medic will be only a member, who can create prescriptions from that location or remove their own membership. In the Membership Section there is more explanation.

:::


Response
```
{
  "id": 3253,
  "token": "ee8c126TEST",
  "name": "Test Doctor Who",
  "password": "pbkdf2_sha256$150000$seSHVhCcpeF0$Lt7E9e9hpXYg5iG4Z7nGa5YWTb6LIjRzP8FIkiskWT0=",
  "email": "testemailing@email.com",
  "hospital": 9,
  "date_of_birth": "1991-09-03",
  "cedula_prof": "ABC1234",
  "specialty_no": "ABC1234",
  "specialty": "Oftalmólogo",
  "alma_mater": "Testing University",
  "female": false,
  "is_active": true,
  "specialty_verified": true,
  "campaign": null,
  "is_admin_membership": false
}
```
				
:::info INFO: Save the medic id on your own database

We highly recommend you to save the ID's of the doctors you have create. In order to have a better integration.

:::

> We verify the metadata of every medic on our plataform, if the medic has not specialty verified, shamely that medic couldn't create any prescription. So please let us know if your integrations has not specialty verified users.


## Creating Prescriptions

So the next step is create the first prescription

Regarding the before steps, we have the following data:

| LABEL | value |
| - | - |
| HOSPITAL_ID | 9 |
| MEDIC_ID | 3253 | 
| MEDIC_TOKEN | ee8c126TEST |


### Creating a Patient

> Important: Look up that the following instructions you will use the medic token instead of the admin user token

You can see the [patient endpoint](api/patient.md) aswell, in order to have more details about patient model.
Before create a prescription, the patient ID is required, you have to create or search for the patient, as follows:


Search patient
```
// "search_word" could be email or name

curl --location 
  --request GET '<BASE>/api/v2/patient/?search=<SEARCH_WORD>' \
  --header 'Authorization: Token <MEDIC_TOKEN>'

```

Response

```
[
    {
        "id": 180,
        "name": "Jesus Alvarado",
        "email": "testPatient@email.com",
        "date_of_birth": "1990-01-18",
        "external_patient_file": "",
        "gender": "M",
        "curp": "ABCTEST",
        "phone": "555123456",
        "address": "",
        "state": "",
        "zip_code": "",
        "location": "CDMX, Ciudad de México",
        "uid": "da59b2a8-5473-4b6c-b67e-06b07b6602e7". // <PATIENT_ID>
    }
]

```
:::info

So the important field is `uid`. Save it.

:::



### Adding Medications

The medication object has a lot of useful fields, but in this tutorial only we take care of the needed in order to create a prescription. For more details see the [medication api](api/medication.md) section

Example of a simple medication

```
{
    "presentation": "Spiolto Respimat Solución Cartucho de 4ML 30 Dosis Caja (tiotropio 0.226 mg, clorhidrato de olodaterol 0.226 mg)",
    "instructions": "Una vez cada 8 horas",
    "qty": 3,
    "drug_upc": "0b7949396af3a5c03d68f22b267b0d85f5175b23f8533ad1ff261c0d5bd5191e",
    "category": "standard_drug"
}
```

:::info

Notice that the field `drug_upc` and `category` are special. See the following table to know how to fullfil those fields. 

:::
| Whether you have  this field | MUST | Optional |
| - | - | - |
| `drug_upc`: "from your catalog" | category: `"basic_drug"` | - |
| `drug_upc`: "from our catalog"| category: `"from our catalog category"` We send you the correct category for the product| category: `"basic_drug"` Could be `basic_drug` if it belong to your catalog too |
|`drug_upc`: `""` | - | - |

> See the [products endpoint](products/overview.md) to see more details about how to find medications from our catalog

### Create prescription

Now the process of create a prescription is as follow:

First we have to create the payload adding the before values:


```
curl --location --request POST '<BASE>/api/v2/rx-endpoint/' \
--header 'Authorization: Token <MEDIC_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "hospital": 9,  // <HOSPITAL_ID>
    "clinic": null,
    "patient": {
        "uid": "cba292ec-2a76-47d7-b746-902c9d41a9f4" // <PATIENT_UID> 
    },
    "diagnosis": "Diagnostico de prueba!",
    "medications": [
        {
            "presentation": "Spiolto Respimat Solución Cartucho de 4ML 30 Dosis Caja (tiotropio 0.226 mg, clorhidrato de olodaterol 0.226 mg)",
            "instructions": "Spiolto Med",
            "qty": 1,
            "drug_upc": "0b7949396af3a5c03d68f22b267b0d85f5175b23f8533ad1ff261c0d5bd5191e",
            "category": "standard_drug"
        },
        {
            "presentation": "Prueba de Detección de SARS-CoV-2 (COVID-19)",
            "instructions": "Porfavor haga esta prueba",
            "qty": 3,
            "drug_upc": "83cd6128a7f3f50dab182b20cee7aa966a2255e77ba2d16b200f2c2d191430e4",
            "category": "standard_drug",
        }
    ],
    "extras": "Indicaciones extras para el paciente u observaciones",
    "show_diagnosis": true,
    "send_rx": true, // if set false, the rx won't sent
}'

```

The response is as follow:

```
{
  "id": 2136,
  "hospital": 9,
  "clinic": null,
  "medic": "<MEDIC_EMAIL>",
  "patient": {
    "uid": "<PATIENT_UID>",
    "name": "<PATIENT_NAME>",
    "email": "<PATIENT_EMAIL>"
  },
  "diagnosis": "Prueba para medicamentos , pharmacy",
  "medications": [
    {
      "id": 439,
      "presentation": "Prueba de Detección de SARS-CoV-2 (COVID-19)",
      "instructions": "Porfavor haga esta prueba",
      "drug": "Prueba de Deteccion de SARS-CoV-2 (COVID-19)",
      "cost": 0.0,
      "bought": false,
      "qty": 1,
      "bought_qty": 0,
      "drug_upc": "<DRUG_UPC>",
      "order_id": 0,
      "category": "standard_drug",
      "qty_label": "Sin suspender"
    },
    {
      "id": 438,
      "presentation": "Spiolto Respimat Solución Cartucho de 4ML 30 Dosis Caja (tiotropio 0.226 mg, clorhidrato de olodaterol 0.226 mg)",
      "instructions": "Spiolto Med",
      "drug": "Spiolto Respimat Solucion Cartucho de 4ML 30 Dosis Caja (tiotropio 0.226 mg, clorhidrato de olodaterol 0.226 mg)",
      "cost": 0.0,
      "bought": false,
      "qty": 3,
      "bought_qty": 0,
      "drug_upc": "0b7949396af3a5c03d68f22b267b0d85f5175b23f8533ad1ff261c0d5bd5191e",
      "order_id": 0,
      "category": "standard_drug",
      "qty_label": "A la discreción del farmacéutico(a)"
    }
  ],
  "extras": "Indicaciones extras para el paciente u observaciones",
  "signature": "c3096f28b4df5f19f04bcf39ba8cc0b81ce38068dd03a98c7eb37a8be38fdfd7", // <RX_ID>
  "created_at": "2021-08-14",
  "sent": null, // The API sent the email in async way, that means that the status will be update after some minutes
  "send_rx": true,
  "additional_data": {},
  "show_diagnosis": true,
  "rejected": false,
  "bought": false,
  "cta_link": "<BASE_URL>/r/4q" // Link that redirect the user to our patient landing, where can found an external service to get the medications
}

```

:::info

The important field is the `signature` field and the status of the rx about bought medications. So you can see details of the prescription everytime using the [prescription detail endpoint](api/prescription.md)

:::

### Listening webhooks

The webhooks are important in cases where you have external services who need to know when a prescription is made by one of your medics.

You must define a POST Endpoint where we can send the information. And give us the list of the medics by email or the hospitals that you manage, so whenever a medic listed before made a prescription we send a post request to your webhook endpoint. 

Lets see an example:



## Management Memberships

Below we can see the main use cases to start using the membership endpoints. 

![Base Models Diagram](/tutorial/membership_diagram.png)

### See list of memberships from one hospital
### See list of memberships that admin user can manage
### Modify memberships
### Delete or remove memberships

