export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const AddToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const DeleteFromCart = (itemId) => ({
  type: DELETE_FROM_CART,
  payload: itemId,
});

export const ClearCart = () => ({
  type: CLEAR_CART,
});
