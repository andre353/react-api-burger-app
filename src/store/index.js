import { configureStore } from '@reduxjs/toolkit';
import category from './category/categorySlice';
import product from './product/productSlice';
import cart, { localStorageMiddleware } from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    category,
    product,
    cart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
