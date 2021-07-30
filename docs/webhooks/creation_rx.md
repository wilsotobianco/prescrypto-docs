---
sidebar_position: 2
title: Creation of a prescription
---

Prescrypto sends a simple json that indicates the creation of a Prescription, only from your registered medic users.


Let's assume that your webhook URL is: 

- "mycompany.com/prescrypto-webhooks/"

Everytime a user that belongs to your integration, you will receive a webhook notification event;
What you will receive is the following request:

```bash
# Event: Post Rx(prescripttion) creation
POST mycompany.com/prescrypto-webhooks/

{
	"signature": "<signature-str>"
}

```
