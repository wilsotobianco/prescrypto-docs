---
sidebar_position: 2
---

# Deeplink

This method consists of generating a link with params in order to send a medic from external services to the authenticated Prescrypto App with the prescription form auto-filled

The params specifications are below

| Param | Description |  i.e. |
| ----------- | -----------|-----------|
| token (required)     | Belongs to the medic who will be authenticated  |$token={{TOKEN}}|
| v2_redirect (required)   | This param will bring your medic to the version 2 of Prescrypto, the newest version at the moment, if you avoid this param the medic will be redirected to the version 1 who it will be deprecated soon.        |$v2_redirect=true|
|clinic|	ID for the location(clinic or hospital) of the medic, must've been created before in prescrypto, if this clinic is not present the prescription form will take the current medic's active hospital/clinic|&clinic=123|
|diagnosis|This is the text prescribed by the medic, if exists will be autofilled into the prescription form|$dianosis=A pill once per week|
|extras|	It would be required if the integration sends patient info to autocomplete our prescription form. this field is compound by four params as following: patient_email,  patient_dob, patient_name, external_patient_file| &external_patient_file=0011R &patient_email=some@mail.com &patient_name=Miguel    &patient_dob=71|
|additional_data|	This field is compound by any param your integrations would need, so you can allocate some extra data here and they will be saved in our Prescription Model|Some examples: $external_folio=1234 $external_medic_id=1234 $another_extra_field=Just like this|

There is an example below with deeplink for autologin and autofill prescription:

```shell
https://app.prescrypto.com/redirect/new/
?external_patient_file=< EXTERNAL-ID>
&patient_email=< EMAIL>
&patient_name=< NAME>
&patient_dob=< AGE(INT)>
&token=< TOKEN>
&clinic=< CLINIC-ID(INT)>
&diagnosis=< DIAGNOSIS>
&v2_redirect=true
```
**IMPORTANT NOTE: All the param values have to be URI ENCODED, otherwise, the link could not work as expected**