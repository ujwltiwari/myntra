import { gql } from '@apollo/client';
import client from '../../../apollo';

export const FETCH_USER_DETAILS_REQUEST = 'FETCH_USER_DETAILS_REQUEST';
export const FETCH_USER_DETAILS_SUCCESS = 'FETCH_USER_DETAILS_SUCCESS';
export const FETCH_USER_DETAILS_FAILURE = 'FETCH_USER_DETAILS_FAILURE';

export const SET_USER_DETAILS = 'SET_USER_DETAILS';
export const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS';
export const DELETE_USER_DETAILS = 'DELETE_USER_DETAILS';

export const fetchUserDetailsRequest = () => ({
  type: FETCH_USER_DETAILS_REQUEST,
});

export const fetchUserDetailsSuccess = (user) => ({
  type: FETCH_USER_DETAILS_SUCCESS,
  payload: user,
});

export const fetchUserDetailsFailure = (error) => ({
  type: FETCH_USER_DETAILS_FAILURE,
  payload: error,
});

/************************************************************************************/

export const setUserDetails = (user) => ({
  type: SET_USER_DETAILS,
  payload: user,
});

export const updatedUserDetails = (updatedUser) => ({
  type: UPDATE_USER_DETAILS,
  payload: updatedUser,
});

export const deleteUserDetails = (user) => ({
  type: DELETE_USER_DETAILS,
});

// Thunk action creator to fetch user details using GraphQL
export const fetchUserDetails = (uid) => {
  return async (dispatch) => {
    dispatch(fetchUserDetailsRequest());

    try {
      // Define your GraphQL query using gql
      const GET_USER_DETAILS = gql`
        query GetSingleUser($userId: uuid!) {
          users(where: { id: { _eq: $userId } }) {
            id
            name
            email
          }
        }
      `;

      // Execute the GraphQL query using Apollo Client
      const { data } = await client.query({
        query: GET_USER_DETAILS,
        variables: { userId: uid },
      });

      // Extract user details from the response
      const user = data.users[0];

      // Dispatch the success action with the user details
      dispatch(fetchUserDetailsSuccess(user));
    } catch (error) {
      // Dispatch the failure action with the error message
      console.error('Error fetching user details:', error); // Add a console.error statement for error handling
      dispatch(fetchUserDetailsFailure(error.message));
    }
  };
};
