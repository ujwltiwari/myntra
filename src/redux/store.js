import { configureStore } from '@reduxjs/toolkit';
import sizeReducer from './slices/size';

export default configureStore({
  reducer: {
    size: sizeReducer,
  },
});
