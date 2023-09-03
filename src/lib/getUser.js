// utils/auth.js
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: 'https://capital-satyr-58.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret':
      'dc2bpmvwvEpNGXI7gmAWxjyLY3D2sIYSvW8lvzF7lh344dZWaAwB98Nu99pRpIak',
  },
});

const GET_USER_DATA = gql`
  query GetSingleUser($email: String!) {
    users(where: { email: { _eq: $email } }) {
      id
      email
      password
    }
  }
`;

export async function handleUserRetrieval(email) {
  try {
    const result = await client.query({
      query: GET_USER_DATA,
      variables: { email },
    });

    // Handle the response data here
    console.log('User registered:', result);

    // Optionally, you can return or perform additional actions after registration.
    return result;
  } catch (error) {
    // Handle errors here
    console.error('Error registering user:', error);

    // Optionally, throw an error or return an error response.
    throw error;
  }
}
