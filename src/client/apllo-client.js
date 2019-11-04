import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { authLink } from './auth';

import { typeDefs } from './local';

const httpLink = createHttpLink({
  uri: 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql',
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
  typeDefs,
});

cache.writeData({
  data: {
    authenticated: !!localStorage.getItem('token'),
  },
});

export default client;
