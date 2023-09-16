import {
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  CLEAR_WISHLIST,
} from '../actions/wishlistActions';

const initialState = {
  wishlist: [], // Initially an empty array
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const newItem = action.payload;
      const existingItemIndex = state.wishlist.findIndex(
        (item) => item.id === newItem.id // Use a unique identifier for your items
      );

      if (existingItemIndex === -1) {
        // If it's a new item, add it to the cart
        return {
          ...state,
          wishlist: [...state.wishlist, newItem],
        };
      }

    case DELETE_FROM_WISHLIST:
      const itemToDelete = action.payload;
      const newWishlist = state.wishlist.filter(
        (item) => item.id !== itemToDelete
      );
      return {
        ...state,
        wishlist: [...newWishlist],
      };

    case CLEAR_WISHLIST:
      return {
        ...state,
        wishlist: [],
      };

    default:
      return state;
  }
};

export default wishlistReducer;
