# API Error Codes Guide

This section outlines the general error codes you might encounter when interacting with our API. Each code is accompanied by a brief description to assist you in understanding the nature of the error. In cases where an error arises, our API responses will often include additional details to guide you towards resolving the issue.


| Status code     | Reason phrase          | Description                                                                                                                 |
|:---------------:|:----------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
| 400             | Bad Request            | The request could not be understood or was missing required parameters.                                                     |
| 401             | Unauthorized           | Authentication failed or the user doesn't have permissions for the requested operation.                                     |
| 403             | Forbidden              | Authentication succeeded, but the authenticated user doesn't have access to the requested resource.                         |
| 404             | Not Found              | The requested resource could not be found.                                                                                  |
| 405             | Method Not Allowed     | The HTTP method used is not supported for this resource.                                                                    |
| 406             | Not Acceptable         | The server can't produce a response matching the list of acceptable values defined in the request's headers.                |
| 409             | Conflict               | The request could not be completed due to a conflict with the current state of the target resource.                         |
| 415             | Unsupported Media Type | The media type of the provided data is not supported.                                                                       |
| 429             | Too Many Requests      | Too many requests were made in a given amount of time. Rate limiting has been applied.                                      |
| 500             | Internal Server Error  | An error occurred on the server.                                                                                            |
| 502             | Bad Gateway            | The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed.            |
| 503             | Service Unavailable    | The server is currently unavailable (because it is overloaded or down for maintenance).                                     |
| 504             | Gateway Timeout        | The server, while acting as a gateway or proxy, did not receive a timely response from another server or some other source. |

