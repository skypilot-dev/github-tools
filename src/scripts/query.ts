import { graphQlClient } from '../graphql/client';

const query = `
  {
    rates(currency: "USD") {
      currency
    }
  }
`;

graphQlClient.request(query)
  .then(data => console.log('data:', data));
