# Website

Prescrypto Docs is a static website for documentation, tutorials, integrations and relative topics.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Deployment happens automatically whenever a PR is merged to ```main```.

### Manual deployment

If for whatever reason, you need to deploy manually, the following command will deploy your currently checked out branch:

```console
yarn deploy
```

You **should** be using SSH, but if you are not, you need to define:

```console
GIT_USER=<Your GitHub username>
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and pushes the necessary contents to the deployment branch.

Important note: When ask for the pass, use your personal access token(PAT) from github.
