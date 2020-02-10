/*
import { request } from 'graphql-request';
import { ENDPOINT } from '../graphql/client';
*/
import { graphQlClient } from '../graphql/client';

const query = `
  {
    rates(currency: "USD") {
      currency
    }
  }
`;

/* This code is equivalent to using `graphQlClient`
request(ENDPOINT, query)
  .then(data => console.log('data:', data));
*/

graphQlClient.request(query)
  .then(data => console.log('data:', data));
