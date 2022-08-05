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

## Styles

Prescrypto's custom elements are [encapsulated in Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM). Due to this reason, you can not apply styles with `.class` o `#id`, instead you must use [`::part()`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part). Below you can see the DOM nodes used to render `PrxPrescriptions`. Note the `part` attributes corresponding to the different elements.

```html
<table part="table">
  <thead part="thead">
    <tr part="tr trhead">
      <th part="th">ID</th>
      <th part="th">Patient</th>
      <th part="th">Email</th>
      <th part="th">Diagnosis</th>
      <th part="th">Date</th>
    </tr>
  </thead>
  <tbody part="tbody">
    <tr part="tr trbody">
      <td part="td td-id">{{ id }}</td>
      <td part="td td-name">{{ patient.name }}</td>
      <td part="td td-email">{{ patient.email }}</td>
      <td part="td td-diagnosis">{{ diagnosis }}</td>
      <td part="td td-creater">{{ created_at }}</td>
    </tr>
  </tbody>
</table>
```

To style the `PrxPrescriptions` component, those parts can be addressed via pseudo-selectors. Assuming you registered the custom element as `<prx-prescriptions>`:

```css
prx-prescriptions {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

/* Styles for the <table> element */
prx-prescriptions::part(table) {
  border-collapse: collapse;
  text-overflow: ellipsis;
}

/* Styles for the <tr> element */
prx-prescriptions::part(tr) {
  white-space: nowrap;
}

/* Styles for the <thead> element */
prx-prescriptions::part(thead) {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  color: #627282;
  text-transform: uppercase;
  text-align: left;
}

/* Styles for the <th> element */
prx-prescriptions::part(th) {
  padding: 13px;
}

/* Styles for the <tr> element inside of <thead> */
prx-prescriptions::part(trhead) {
  border-bottom: 1px solid #edeff2;
}

/* Styles for the <tr> element inside of <tbhody> */
prx-prescriptions::part(trbody) {
  border-bottom: 1px solid #dcdfe3;
}

/* Styles for the <td> element */
prx-prescriptions::part(td) {
  color: #1b2734;
  line-height: 1.5;
  padding: 13px;
}

/* Style for the <td> with the id */
prx-prescriptions::part(td-id) {
  font-weight: 700;
}

/* Style for the <td> with the name */
prx-prescriptions::part(td-name) {
  font-weight: 700;
}
```
