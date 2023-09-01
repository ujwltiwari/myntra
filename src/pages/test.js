import { gql, useQuery } from '@apollo/client';
import React from 'react';

const Test = () => {
  const { loading, error, data } = useQuery(GET_MY_TODOS);
  console.log('data', data);
  // Check for loading or error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Render the fetched data
  return (
    <div>
      {data.todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Test;

const GET_MY_TODOS = gql`
  query getMyTodos {
    todos(order_by: { created_at: desc }) {
      id
      title
      description
      created_at
      is_completed
    }
  }
`;
