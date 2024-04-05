/**
 * Address Slice
 * @format
 */

import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

import { AddAddressReq, UpdateAddress } from './types';

interface State {
  addresses: Array<any> | null;
  loading: boolean;
}

const initialState: State = {
  addresses: null,
  loading: false,
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    getAddresses(state) {
      state.loading = true;
    },
    setAddresses(state, action: PayloadAction<State['addresses']>) {
      state.addresses = action.payload;
      state.loading = false;
    },
  },
});

// Reducer )--------------------------------------
export const addressReducer = addressSlice.reducer;

// Actions )-------------------------------------
export const { getAddresses, setAddresses } = addressSlice.actions;

export const addAddress = createAction<AddAddressReq>('ADDRESS/ADD_ADDRESS');
export const updateAddress = createAction<UpdateAddress>(
  'ADDRESS/UPDATE_ADDRESS',
);
