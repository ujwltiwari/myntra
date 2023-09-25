export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const ADD_SELECTED_TO_WISHLIST = 'ADD_SELECTED_TO_WISHLIST';
export const DELETE_FROM_WISHLIST = 'DELETE_FROM_WISHLIST';
export const DELETE_SELECTED_FROM_WISHLIST = 'DELETE_SELECTED_FROM_WISHLIST';
export const CLEAR_WISHLIST = 'CLEAR_WISHLIST';

export const AddToWishlist = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: item,
});

export const AddSelectedToWishlist = (items) => ({
  type: ADD_SELECTED_TO_WISHLIST,
  payload: items,
});

export const DeleteFromWishlist = (itemId) => ({
  type: DELETE_FROM_WISHLIST,
  payload: itemId,
});

export const DeleteSelectedFromWishlist = (itemIds) => ({
  type: DELETE_SELECTED_FROM_WISHLIST,
  payload: itemIds,
});

export const ClearWishlist = () => ({
  type: CLEAR_WISHLIST,
});
