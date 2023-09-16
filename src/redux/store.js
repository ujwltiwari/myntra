import { configureStore } from '@reduxjs/toolkit';
import sizeReducer from './slices/size';
import userReducer from './reducer/userReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import cartReducer from './reducer/cartReducer';
import wishlistReducer from './reducer/wishlistReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  size: sizeReducer,
  user: persistReducer(persistConfig, userReducer), // user will be persisted
  cart: persistReducer(persistConfig, cartReducer), // cart will be persisted
  wishlist: persistReducer(persistConfig, wishlistReducer), // cart will be persisted
});

// const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);
