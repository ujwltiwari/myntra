export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const DELETE_SELECTED_FROM_CART = 'DELETE_SELECTED_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const SELECT_CART_ITEMS = 'SELECT_CART_ITEMS'
export const SELECT_ALL_CART_ITEMS = 'SELECT_ALL_CART_ITEMS'
export const DESELECT_CART_ITEMS = 'DESELECT_CART_ITEMS'
export const DESELECT_ALL_CART_ITEMS = 'DESELECT_ALL_CART_ITEMS'
export const CLEAR_SELECTED_CART_ITEMS = 'CLEAR_SELECTED_CART_ITEMS'

// cartActions
export const AddToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
})

export const DeleteFromCart = (itemId) => ({
  type: DELETE_FROM_CART,
  payload: itemId,
})

export const DeleteSelectedFromCart = (itemIds) => ({
  type: DELETE_SELECTED_FROM_CART,
  payload: itemIds,
})

export const ClearCart = () => ({
  type: CLEAR_CART,
})

// Selected Cart Items Action

export const selectCartItems = (item) => ({
  type: SELECT_CART_ITEMS,
  payload: item,
})

export const selectAllCartItems = (items) => ({
  type: SELECT_ALL_CART_ITEMS,
  payload: items,
})

export const DeSelectCartItems = (itemId) => ({
  type: DESELECT_CART_ITEMS,
  payload: itemId,
})

export const ClearSelectedCartItems = () => ({
  type: CLEAR_SELECTED_CART_ITEMS,
})
