import { graphQlClient } from '../graphql/client';


export const numberOfReposQuery = `
  query GetNumberOfRepos($number_of_repos:Int!) {
    viewer {
      name
      repositories(last: $number_of_repos) {
        nodes {
          name
        }
      }
    }
  }
`;
const variables = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  number_of_repos: 3,
};

graphQlClient.request(numberOfReposQuery, variables)
  .then(data => console.log('data:', data))
  .catch(e => console.error(e));
