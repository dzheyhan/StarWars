import { setContext } from 'apollo-link-context';
import { gql } from 'apollo-boost';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

export { authLink, AUTHENTICATED_QUERY };
