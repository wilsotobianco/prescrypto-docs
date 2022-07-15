---
sidebar_position: 1
---

# Quick Start

A collection of [custom elements](https://web.dev/custom-elements-v1/) for implementing Prescrypto functionality on your site. Prescrypto Elements can be used with a `<script>` tag or with your bundler of choice (Vite, Webpack, Rollup, etc).

## CDN

```html
<!-- 1. Load PrescryptoElements into the global scope  -->
<script src="https://unpkg.com/prescrypto-elements@^1/dist/prescrypto-elements.umd.js"></script>

<!-- 2. Register a custom element. In this example, the Rx history widget "PrxPrescriptions" -->
<script type="text/javascript">
  customElements.define("prx-prescriptions", PrescryptoElements.PrxPrescriptions);
</script>

<!-- 3. Add the custom element to your HTML with the required attributes -->
<prx-prescriptions token="my-prx-token"></prx-prescriptions>
```

## Library

1. Install [`prescrypto-elements`](https://www.npmjs.com/package/prescrypto-elements). from NPM.

    ```sh
    # NPM
    npm install prescrypto-elements --save

    # Yarn
    yarn add prescrypto-elements
    ```

2. Add a DOM element to contain `PrxPrescriptions`.

    ```html
    <body>
      <div id="prx-app"></div>
    </body>
    ```

3. Import, register and add the custom element.

    ```js
    import { PrxPrescriptions } from "prescrypto-elements";

    // This must be run in the browser, as customElements is a method of window
    customElements.define("prx-prescriptions", PrxPrescriptions);

    // Crear instancia del custom element con el API de JavaScript
    // Create an instance of the custom element with the JavaScript class API
    const prx = new PrxPrescriptions({ token: "mi-token-prescrypto" });

    // Add the element to the DOM container
    document.getElementById("prx-app").appendChild(prx);
    ```
