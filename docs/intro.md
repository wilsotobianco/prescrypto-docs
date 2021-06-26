---
sidebar_position: 1
---

# Prescrypto API Docs

Welcome to the complete reference of the Prescrypto REST API. Here you will find the information for all the calls, responses, and errors that are used in the API. All the responses of the API are in JSON.

## Authentication

Authentication keys are used to authenticate all of your API calls via HTTP Token Auth.
```json
Authentication : Token d3sjkT23Stks38jsnUk28012nIn
```
Keys can be retrieved and configured from within your [admin](https://prescrypto.com/contact) account. Each key is configured for production mode and either private use within serverside applications, or public use with javascript. Be careful about sharing private keys as they have very powerful privileges.

## Schema
The relationship among the different Models may be confusing, to dissipate possible doubts beneath you will find a schematic visual representation of those differente hierarchy.

```
Hospital  
├── Medic
    └── Prescription
    └── Patient

```
```
A Medic can create
├──Hospital
└──Patient
└──Prescription
```

## Difference between Basic Drugs and Free Medications
When you are creating the prescription payload you can notice that the medication field is a list of "Medication" objects, but these medications objects must be represented either a Basic Drug or Free Medication.

### Basic Drugs
A basic drug is a medication that is part of hospital or pharmacy's stock. It belongs to a Hospital entity and therefore might vary for every user. It can also be a "Study", laboratory or otherwise.

You can create, modify, enable or disable basic drugs using the basic drugs endpoint

```jsx
// Example for a medication with BASIC DRUG
{
  "presentation": "", // Notice that "presentation" is empty on basic drugs because the "drug" reference will fill it instead
  "instructions": "Tomesé cada 8 horas, instrucciones para Med de cuadro básico",
  "drug": 11 // Notice that "drug" field must be filled with basic drug id
}
``` 

### Free Medications
By definition, free medications are whatever isn't a Basic Drug, they are usually auto-completed with text from our product catalog.

Anything can be written on the "presentation" field

The free medications must contain the "presentation" and "instructions" fields

```jsx
// Example for a medication with FREE MEDICATION
{
  "presentation": "Algún Medicamento Libre", // Observe that "presentatio" field must be filled
  "instructions": "Instrucciones para un medicamento libre",
  "drug": null // Observe that "drug" field must be filled with "null"
}
```


## Versioning
Prescrypto's API it's currently in version 2 ```(api/v2/)``` nonetheless some endpoints are still existing in it's version1, please use v2 whenever possible, as those legacy endpoints are not longer supported and may not have the newest fucntionalities.

## Postman collection

**Download our [postman collection](https://s3-us-west-2.amazonaws.com/precript-collections/Prescrypto_Integration_Endpoints_V2.postman_collection.json) to test our api**