import { configureStore } from '@reduxjs/toolkit';
import category from './categories/categorySlice';
import product from './products/productSlice';
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
