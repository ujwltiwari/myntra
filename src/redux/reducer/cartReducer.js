import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
} from '../actions/cartActions';

const initialState = {
  cart: [], // Initially an empty array
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = { ...action.payload, quantity: 1 };
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === newItem.id // Use a unique identifier for your items
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increment its quantity
        const cart = state.cart.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        return {
          ...state,
          cart,
        };
      } else {
        // If it's a new item, add it to the cart
        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      }

    case DELETE_FROM_CART:
      const itemToDelete = action.payload;
      const newcart = state.cart.filter((item) => item.id !== itemToDelete);
      return {
        ...state,
        cart: [...newcart],
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
