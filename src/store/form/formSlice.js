import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { clearOrder } from '../cart/cartSlice';
import { closeModal } from '../modalDelivery/modalDeliverySlice';

const initialState = {
  name: '',
  phone: '',
  format: 'delivery',
  address: '',
  floor: '',
  intercom: '',
  error: null,
  notifications: {}, /** notifications for each field */
  isFormTouched: false,
};

export const submitForm = createAsyncThunk(
  'form/submit',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://cloudy-slash-rubidium.glitch.me/api/order',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }
      dispatch(clearOrder());
      dispatch(closeModal());
      return await response.json();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormValue: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload
    },
    clearNotifications: (state) => {
      state.notifications = {};
    },
    changeIsFormTouched: (state) => {
      state.isFormTouched = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = 'loading';
        state.response = null;
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.status = 'success';
        state.response = action.payload;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { updateFormValue, setNotifications, clearNotifications, changeIsFormTouched } = formSlice.actions;
export default formSlice.reducer;
export const validateForm = () => (dispatch, getState) => {
  const form = getState().form;
  const notifications = {};

  if (!form.name) {
    notifications.name = 'Name is required'
  }
  if (!form.phone) {
    notifications.phone = 'Phone is required'
  }
  if (!form.address && form.format === 'delivery') {
    notifications.address = 'Address is required'
  }
  if (!form.floor && form.format === 'delivery') {
    notifications.floor = 'Floor is required'
  }
  if (!form.intercom && form.format === 'delivery') {
    notifications.intercom = 'Intercom is required'
  }
  if (form.format === 'pickup') {
    dispatch(updateFormValue({field: 'address', value: ''}))
    dispatch(updateFormValue({field: 'floor', value: ''}))
    dispatch(updateFormValue({field: 'intercom', value: ''}))
  }

  if (Object.keys(notifications).length) {
    dispatch(setNotifications(notifications))
  } else {
    dispatch(clearNotifications())
  }
}