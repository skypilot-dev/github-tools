import { graphQlClient } from '../graphql/client';

const query = `
  {
    viewer {
      login
    }
  }
`;

graphQlClient.request(query)
  .then(data => console.log('data:', data))
  .catch(e => console.error(e));
