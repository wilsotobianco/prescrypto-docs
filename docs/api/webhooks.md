
# Webhooks


In order to catch responses from certain actions on our platform, we allow you to receive data on webhooks.

Currently we have 3 specific moments, that we can let you track events, and each of them have the next recommendations:


Requirements and recommendations:

- Create an endpoint, that receive a POST METHOD
- Save the response

## Creation of a prescription

Prescrypto sends a simple json that indicates the creation of a Prescription, only from your registered medic users.


Let's assume that your webhook URL is: 

- "https://mycompany.com/prescrypto-webhooks/"

Everytime a user that belongs to your integration create a prescription, you will receive a webhook notification event;
You will receive the following request:

```bash
# Event: Post Rx(prescripttion) creation
POST https://mycompany.com/prescrypto-webhooks/
HEADERS 'Content-Type': 'application/json; chartset=UTF-8'

{
	"signature": "<signature-str>"
}

```

