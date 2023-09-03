import {
  FETCH_USER_DETAILS_REQUEST,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_DETAILS_FAILURE,
  SET_USER_DETAILS,
  UPDATE_USER_DETAILS,
  DELETE_USER_DETAILS,
} from '../actions/userActions';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };

    case FETCH_USER_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case SET_USER_DETAILS:
      return {
        ...state,
        user: action.payload,
      };

    case UPDATE_USER_DETAILS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };

    case DELETE_USER_DETAILS:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default userReducer;
