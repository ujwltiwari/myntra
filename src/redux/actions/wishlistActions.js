export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const DELETE_FROM_WISHLIST = 'DELETE_FROM_WISHLIST';
export const CLEAR_WISHLIST = 'CLEAR_WISHLIST';

export const AddToWishlist = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: item,
});

export const DeleteFromWishlist = (itemId) => ({
  type: DELETE_FROM_WISHLIST,
  payload: itemId,
});

export const ClearWishlist = () => ({
  type: CLEAR_WISHLIST,
});
