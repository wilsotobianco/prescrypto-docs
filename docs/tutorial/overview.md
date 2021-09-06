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
  "name": "Test Hospital(Short name)",
  "patron": "TEST HOSPITAL(Printed field)",
  "headline": "Slogan(Printed field)",
  "location": "My address(Printed field)",
  "contact": "2384094571, 557658394 hola@gmail.com(Printed field)"
  "page_size": 0,
  "picture": null,
  "university_logo": null,
  "is_active": true,
  "is_admin": true,
  "info": false
}
```
				
The pictures could be upload using the webform on the plataform or via postman forms alike. On our postman collection we have an example.


## Prescription and Medication models


### Understanding a Prescrition Flow


## Undestanding Management Memberships

### Membership model diagram
### Add new members, remove and reactivate members
