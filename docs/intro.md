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

Authentication keys will be provided through direct comunication, feel free to [contact us](https://prescrypto.com/contact).
They are configured for production mode by default and can either be private for server-side usage or public for use in a browser. Be careful about sharing private keys as they have very powerful privileges.

## Difference between Basic Drugs and Free Medications
When you are creating the prescription payload you can notice that the medication field is a list of "Medication" objects, but these medications objects must be represented either a Basic Drug or Free Medication.

### Basic Drugs
A basic drug is a medication that is part of hospital or pharmacy's stock. Basically every medication with a "drug_upc". It can also be a "auxiliary_test" or "basic_drug", you can check more details in "category" field.


```jsx
// Example for a basic drug medication
{
  "presentation": "Algún Medicamento Libre",
  "instructions": "Instrucciones para un medicamento libre",
  "category": "basic_drug"
}
```

Note: When the medication has de "drug_upc" means that the medication was selected by the medic using our product catalog.

### Free Medications
They are usually text manually by the doctor, without using our product catalog.

Anything can be written on the "presentation" field.

The free medications must contain the "presentation" and "instructions" fields.

Additionally, it is recommended adding the category "unstructured_drug"

```jsx
// Example for a free medication
{
  "presentation": "Algún Medicamento Libre", // Observe that "presentatio" field must be filled
  "instructions": "Instrucciones para un medicamento libre",
  "category": "unstructured_drug"
}
```


## Versioning
Prescrypto's API it's currently in version 2 ```(api/v2/)``` nonetheless some endpoints are still existing in it's version1, please use v2 whenever possible, as the legacy endpoints are not longer supported and may not have the newest fucntionalities.

## Postman collection

**Download our [postman collection](https://s3-us-west-2.amazonaws.com/precript-collections/Prescrypto_Integration_Endpoints_V2.postman_collection.json) to test our API**

## Need more information???
We are rebuilding this documentation page, so some entries are still a work in progress. If something is missing from the documentation, feel free to [Contact us](https://www.prescrypto.com/contact/).
