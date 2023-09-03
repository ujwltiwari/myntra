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

const REGISTER_USER_MUTATION = gql`
  mutation RegisterUser($email: String!, $password: String!, $name: String!) {
    insert_users_one(
      object: { email: $email, password: $password, name: $name }
    ) {
      id
      email
      name
    }
  }
`;

export async function handleRegistration(email, password, name) {
  try {
    const result = await client.mutate({
      mutation: REGISTER_USER_MUTATION,
      variables: { email, password, name },
    });

    // Handle the response data here
    console.log('User registered:', result.data.insert_users_one);

    // Optionally, you can return or perform additional actions after registration.
    return result.data.insert_users_one;
  } catch (error) {
    // Handle errors here
    console.error('Error registering user:', error);

    // Optionally, throw an error or return an error response.
    throw error;
  }
}
