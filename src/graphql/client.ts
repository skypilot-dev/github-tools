import { GraphQLClient } from 'graphql-request';

export const ENDPOINT = 'https://48p1r2roz4.sse.codesandbox.io';

export const graphQlClient = new GraphQLClient(ENDPOINT, {});
