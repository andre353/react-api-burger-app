import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URI, POSTFIX } from '../../consts';

const initialState = {
  products: [],
  flagProducts: false,
  error: '',
};

export const productRequestAsync = createAsyncThunk(
  'product/fetch',
  (_, {getState}) => {
    const {categories, activeCategoryIndex} = getState().category;

    return fetch(`${API_URI}${POSTFIX}?category=${categories[activeCategoryIndex].title}`)
      .then((req) => req.json())
      .catch((error) => ({ error }));
  }
);

const productsSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(productRequestAsync.pending, (state) => {
        state.error = '';
        state.flagProducts = false;
      })
      .addCase(productRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.products = action.payload;
        state.flagProducts = true;
      })
      .addCase(productRequestAsync.rejected, (state, { payload }) => {
        state.error = payload.error;
      });
  },
});

export default productsSlice.reducer;
