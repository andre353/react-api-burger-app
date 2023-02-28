import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URI, POSTFIX } from '../../consts';
import { calcTotal } from '../utils/calcTotal';

const initialState = {
  cartList: JSON.parse(localStorage.getItem('cart') || '[]'), // [{id: "8818264880", count: 1}, {id: "3184803604", count: 1}]
  cartGoods: [], // сами товары со счетчиком
  totalPrice: 0,
  totalCount: 0,
  error: [],
};

export const localStorageMiddleware = (store) => (next) => (action) => {
  const nextAction = next(action);

  if (nextAction.type.startsWith('cart/')) {
    const cartList = store.getState().cart.cartList;
    localStorage.setItem('cart', JSON.stringify(cartList));
  }
  return nextAction;
};

export const cartRequestAsync = createAsyncThunk(
  'cart/fetch', 
  (_, { getState }) => {
    const idsList = getState().cart.cartList.map((item) => item.id);
    // вернули из базы
    return fetch(`${API_URI}${POSTFIX}?list=${idsList}`)
      .then((req) => req.json())
      .catch((error) => ({ error }));
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // after addProduct, localStorageMiddleware adds goods to the localStorage
    addProduct: (state, action) => {
      const productCartList = state.cartList.find(
        (item) => item.id === action.payload.id,
      );

      if (productCartList) {
        productCartList.count += 1;

        const productCartGoods = state.cartGoods.find(item =>
          item.id === action.payload.id);
          // актуализируем count в cartGoods
        productCartGoods.count = productCartList.count;
        [state.totalCount, state.totalPrice] = calcTotal(state.cartGoods); 
      } else {
        // добавили в базу
        state.cartList.push({ ...action.payload, count: 1 });
      }
    },
    removeProduct: (state, action) => {
      const productCartList = state.cartList.find(
        (item) => item.id === action.payload.id,
      );

      if (productCartList.count > 1) {
        productCartList.count -= 1;

        const productCartGoods = state.cartGoods.find(item =>
          item.id === action.payload.id);
          // актуализируем count в cartGoods
        productCartGoods.count = productCartList.count;
        [state.totalCount, state.totalPrice] = calcTotal(state.cartGoods); 
      } else {
        // добавили в базу
        state.cartList = state.cartList.filter(item => item.id !== action.payload.id);
      }
    },
    clearOrder: (state) => {
      state.cartList = [];
      state.cartGoods = [];
    }
  },
  extraReducers: builder => {
    builder
      .addCase(cartRequestAsync.pending, (state) => {
        state.error = '';
      })
      .addCase(cartRequestAsync.fulfilled, (state, {payload}) => {
        // находим товар, содержащийся в cartList [{id: "8818264880", count: 1}, {id: "3184803604", count: 1}]
        // каждый item находим по id и добавляем к нему свойство count
        const cartProducts = state.cartList.map(item => {
          const product = payload
            .find(product => product.id === item.id);

          product.count = item.count;
          // console.log("product count: ", product.count);
          return product;
        })
        state.error = '';
        state.cartGoods = cartProducts;
        state.totalCount = 0;
        [state.totalCount, state.totalPrice] = calcTotal(state.cartGoods);      
        // state.totalCount = state.cartGoods.reduce(
        //   (acc, item) => acc + item.count, 0);
        // state.totalPrice = state.cartGoods.reduce(
        //   (acc, item) => acc + item.count * item.price, 0);       
      })
      .addCase(cartRequestAsync.rejected, (state, {payload}) => {
        state.error = payload.error;
      })
  }
});

export const { addProduct, removeProduct, clearOrder } = cartSlice.actions;
export default cartSlice.reducer;
