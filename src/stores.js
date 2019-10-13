import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {gql} from 'apollo-boost';

import {getServiceUrl} from './utils/tools';

export const createClient = (config) => {
  const serviceUrl = getServiceUrl(config);

  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: serviceUrl,
  });

  return new ApolloClient({
    cache,
    link,
  });
};

/**
 * @function
 * @name createStore
 * @param {any} client
 * @return {
 *  {
 *    subscribe: {function},
 *    loadCustomers: {function}
 *  }
 * }
 */
export const fetchCustomers = (client) => client.query({
  query: gql`
  {
    customers {
      _id
      first_name
      last_name
      email
      ip_address
    }
  }
  `,
});
