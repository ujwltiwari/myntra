import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  DELETE_SELECTED_FROM_CART,
  SELECT_CART_ITEMS,
  DESELECT_CART_ITEMS,
  CLEAR_SELECTED_CART_ITEMS,
  SELECT_ALL_CART_ITEMS, MOVE_TO_WISHLIST,
} from '../actions/cartActions'

const initialState = {
  cart: [], // Initially an empty array
  selectedCartItems: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = { ...action.payload, quantity: 1 }
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === newItem.id // Use an unique identifier for your items
      )

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increment its quantity
        const cart = state.cart.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }
          return item
        })
        return {
          // ...state,
          cart,
        }
      } else {
        // If it's a new item, add it to the cart
        return {
          ...state,
          cart: [...state.cart, newItem],
        }
      }

    case DELETE_FROM_CART:
      const itemToDelete = action.payload
      const newcart = state.cart.filter((item) => item.id !== itemToDelete)
      return {
        // ...state,
        cart: [...newcart],
      }

    case DELETE_SELECTED_FROM_CART:
      const filteredCart = action.payload
      console.log('Deleting from cart:', filteredCart)
      return {
        ...state,
        cart: [...filteredCart],
      }

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      }

    // Selected Items Reducer
    case SELECT_CART_ITEMS:
      const isItemExists = state.selectedCartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (isItemExists === -1) {
        return {
          ...state,
          selectedCartItems: [...state.selectedCartItems, action.payload],
        }
      }

    case SELECT_ALL_CART_ITEMS:
      return {
        ...state,
        selectedCartItems: [...state.cart],
      }

    case DESELECT_CART_ITEMS:
      const filteredSelectedItems = state.selectedCartItems.filter(
        (item) => item.id !== action.payload.id
      )
      console.log('selectedFor state', filteredSelectedItems)
      return {
        ...state,
        selectedCartItems: [...filteredSelectedItems],
      }

    case CLEAR_SELECTED_CART_ITEMS:
      return {
        ...state,
        selectedCartItems: [],
      }

    case MOVE_TO_WISHLIST:
      console.log("MOVE_TO_WISHLIST")
      const selectedCartItems = action.payload
      const itemsToMove = state.cart.filter((item) => selectedCartItems.includes(item.id))
      const cartItems = state.cart.filter(item => !selectedCartItems.includes(item.id))
      const updatedWishlist = state.wishlist.length > 0 ? [...state.wishlist] : state.wishlist

      return {
        ...state,
        wishlist: [...updatedWishlist, ...itemsToMove],
        cart: [...cartItems]
      }

    default:
      return state
  }
}

export default cartReducer
