/**
 * Profile Slice
 * @format
 */

import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ChangePasswordReq, UpdateProfileReq } from './types';

interface State {
  user: any;
}

const initialState: State = {
  user: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getMyProfile() {},
    setMyProfile(state, action: PayloadAction<State['user']>) {
      state.user = action.payload;
    },
  },
});

// Reducer )--------------------------------------
export const profileReducer = profileSlice.reducer;

// Actions )-------------------------------------
export const { getMyProfile, setMyProfile } = profileSlice.actions;

export const updateProfile = createAction<UpdateProfileReq>(
  'PROFILE/UPDATE_PROFILE',
);

export const changePassword = createAction<ChangePasswordReq>(
  'PROFILE/CHANGE_PASSWORD',
);
