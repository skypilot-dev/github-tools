import { GraphQLClient } from 'graphql-request';
import { readOption } from '../config/readOption';

const graphQlEndpoint = readOption<string>('gitHub.graphQlEndpoint');
const gitHubToken = readOption<string>('gitHub.token');

if (!graphQlEndpoint) {
  throw new Error('No GraphQL endpoint is set in the options file: src/config/github-tools.yml');
}

if (!gitHubToken) {
  throw new Error('No GitHub token is defined in the local options file: local/github-tools.yml');
}

export const graphQlClient = new GraphQLClient(graphQlEndpoint, {
  headers: {
    authorization: `bearer ${gitHubToken}`,
  },
});
