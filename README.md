# @skypilot/github-tools

Tools for working with GitHub

[![npm stable](https://img.shields.io/npm/v/@skypilot/github-tools?label=stable)](https://www.npmjs.com/package/@skypilot/github-tools)
[![stable build](https://img.shields.io/github/workflow/status/skypilotcc/github-tools/Stable%20release?label=stable%20build)]()
[![npm next](https://img.shields.io/npm/v/@skypilot/github-tools/next?label=next)](https://www.npmjs.com/package/@skypilot/github-tools)
[![next build](https://img.shields.io/github/workflow/status/skypilotcc/github-tools/Prerelease?branch=next&label=next%20build)]()
[![license: ISC](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## How to install

```
$ yarn add @skypilot/github-tools

# or

$ npm add @skypilot/github-tools
```

## How to configure

Add a `.skypilot/github-tools.yaml` file to your project, replacing `OWNER` and `REPO_NAME` with the
names from the `OWNER/REPO_NAME` repository you want to work with.

```
gitHub:
  owner: <OWNER>
  graphQlEndpoint: 'https://api.github.com/graphql'
  repoName: <REPO_NAME>
  restEndpoint: 'https://api.github.com'
```

To work with a private repository, you must also add the name of one of your public repositories
from which your public key can be fetched:

```
  defaultOwner: <OWNER>
  defaultPublicRepoName: <REPO_NAME>
```

## Functionality

`fetchPublicKey`: Gets the user's public key from a GitHub repo  
`readOption`: Read an option from the config file  
`setSecret`: Create or update a secret in a GitHub repo  

\[Details to be added.\]
