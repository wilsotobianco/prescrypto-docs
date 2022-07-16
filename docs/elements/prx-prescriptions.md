---
sidebar_position: 2
---

# Rx History Component

A data table of the latest prescriptions, sorted by date.

## Quick Start

1. Register the `PrxPrescriptions` component:

    ```js
    customElements.define("prx-prescriptions", PrxPrescriptions);
    ```

2. Add the custom element to your HTML with the required attributes for `PrxPrescriptions`.

    ```html
    <prx-prescriptions token="my-prx-token"></prx-prescriptions>
    ```

## Attributes

| Attribute         | Required? |  Type  | Default | Description                                                 |
|-------------------|-----------|--------|---------|-------------------------------------------------------------|
| token             |     ✅    | string |   none  | An [authentication token][1] for Prescrypto.                |
| limit             |     ❌    | number |    10   | How many prescriptions to display in the table.             |
| offset            |     ❌    | number |    0    | Offset the results by an amount for pagination.             |
| search            |     ❌    | string |   none  | Filter the results by a search query.                       |
| externalPatientId |     ❌    | string |   none  | Filter the results by an external integration's patient id. |

[1]: ../intro.md
