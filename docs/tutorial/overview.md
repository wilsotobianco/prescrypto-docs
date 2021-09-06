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

:::tip TIP: What about "is_admin_membership"

If the field is settled TRUE, the medic user can edit the hospital or invite new members to it, otherwise, the medic will be only a member, who can create prescriptions from that location or remove their own membership. In the Membership Section there is more explanation.

:::


Response
```
{
  "id": 3253,
  "token": "ee8c126a9b21ea73b4444d55b3e933f6a9644fef2",
  "name": "Test Doctor Who",
  "password": "pbkdf2_sha256$150000$seSHVhCcpeF0$Lt7E9e9hpXYg5iG4Z7nGa5YWTb6LIjRzP8FIkiskWT0=",
  "email": "testemailing@email.com",
  "hospital": 6,
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
				
:::tip TIP: Notice the field "specialty_verified"

We verify the metadata of every medic on our plataform, if the medic has not specialty verified, shamely that medic couldn't create any prescription. So please let us know if your integrations has not specialty verified users.

:::


## Prescription and Medication models


### Understanding a Prescrition Flow


## Undestanding Management Memberships

### Membership model diagram
### Add new members, remove and reactivate members
