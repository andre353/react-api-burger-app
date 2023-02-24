import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URI, POSTFIX } from '../../consts';

const initialState = {
  products: [],
  error: '',
};

export const productRequestAsync = createAsyncThunk(
  'product/fetch',
  (_, {getState}) => {
    const {categories, activeCategory} = getState().category;

    return fetch(`${API_URI}${POSTFIX}?category=${categories[activeCategory].title}`)
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
      })
      .addCase(productRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.products = action.payload;
      })
      .addCase(productRequestAsync.rejected, (state, { payload }) => {
        state.error = payload.error;
      });
  },
});

export default productsSlice.reducer;
