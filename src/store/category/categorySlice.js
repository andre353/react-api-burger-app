import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URI, POSTFIX } from '../../consts';

const initialState = {
  categories: [],
  error: '',
  activeCategory: 0,
};

export const categoryRequestAsync = createAsyncThunk(
  'category/fetch', 
  () =>
  fetch(`${API_URI}${POSTFIX}category`)
    .then((req) => req.json())
    .catch((error) => ({ error })),
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory(state, action) {
      // console.log('action', action);
      // console.log('state', state);
      state.activeCategory = action.payload.indexCategory;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryRequestAsync.pending, (state) => {
        state.error = '';
      })
      .addCase(categoryRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.categories = action.payload;
      })
      .addCase(categoryRequestAsync.rejected, (state, { payload }) => {
        state.error = payload.error;
      });
  },
});
export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
