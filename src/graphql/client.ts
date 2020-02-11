import path from 'path';
import { GraphQLClient } from 'graphql-request';
import { findPackageFileDir } from '@skypilot/sugarbowl';
import { readYamlFile } from '../utils/readYamlFile';


const pathToLocalConfig = path.resolve(findPackageFileDir(), 'local/github-tools.yml');
const config = readYamlFile({ pathToFile: pathToLocalConfig });

const endpoint = 'https://api.github.com/graphql';
const { gitHubToken } = config;

export const graphQlClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `bearer ${gitHubToken}`,
  },
});
