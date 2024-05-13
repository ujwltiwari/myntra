// src/providers/CartStoreProvider.jsx

import React, { createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';
import {createCartStore, initCartStore} from '@/zustand/cart/store'; // Assuming you have a cart store

export const CartStoreContext = createContext(null);

export const CartStoreProvider = ({ children }) => {
  const storeRef = useRef(null);
  console.log("storeRef", storeRef)
  if (!storeRef.current) {
    storeRef.current = createCartStore(initCartStore()); // Assuming you have a createCartStore function
  }

  return (
      <CartStoreContext.Provider value={storeRef.current}>
        {children}
      </CartStoreContext.Provider>
  );
};

export const useCartStore = (selector) => {
  const cartStoreContext = useContext(CartStoreContext);

  if (!cartStoreContext) {
    throw new Error('useCartStore must be used within CartStoreProvider');
  }

  return useStore(cartStoreContext, selector);
};
