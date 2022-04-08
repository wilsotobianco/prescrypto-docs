---
sidebar_position: 1
---

# Changelog

This sections aims to provide updates about changes to the Prescrypto API, where they were and how the new change improve or add new features.

## Log

- (7 Apr, 2022) Removed unused parmateres mentions and references, cleaned some typos and compacted info from different pages into the same related ones.

- (24 Jan, 2022) Add the param `page` to products docs, it explains how to navigate in products results

- (4 Feb, 2022) Add the filter param `created_filter` for the endpoint `"api/v2/medics/"` It can be used to get the full list of created users, in order to see one medic details it has to be added to the url aswell.

- (4 Feb, 2022) Remove `token` and `password(encrypted)` for the endpoint `"api/v2/medics/"` They only will be appear on created response. In order to increase security.

- (18 Feb, 2022) Remove `medications` section, instead check our [`Products` api docs](products/overview.md).

- (1 Mar, 2022) Add `Patient landing page` endpoint documentation, on the new section [Prescription CTA endpoints](openendpoints/overview.md).

Important note for  integrators: After create a medic, don't forget to save the `id`, `token` fields given in the response.


## Notifications

- The v1 endpoints are deprecated, so we encourage to all our users to update to v2

[EOF]