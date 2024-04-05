/**
 * Common Slice
 * @format
 */

import { AppSection } from '@app/navigator';
import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

interface Loader {
  id: string;
  message?: string;
}
interface State {
  activeSection: string;
  loaders: Array<Loader>;
  authToken: null | string;
}

const initialState: State = {
  activeSection: '',
  loaders: [],
  authToken: null,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    changeAppSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload;
    },
    presentLoader(state, action: PayloadAction<Loader>) {
      const { id, message } = action.payload;
      state.loaders.push({ id, message });
    },
    dismissLoader(state, action: PayloadAction<{ id: string }>) {
      state.loaders = state.loaders.filter(
        (loader) => loader.id !== action.payload.id,
      );
    },
    setAuthToken(state, action: PayloadAction<string>) {
      state.authToken = action.payload;
    },
    logout(state) {
      Object.entries(initialState).forEach(([key, value]) => {
        // Language preference & general settings shouldn't clear
        if (key !== 'activeSection') {
          state[key] = value;
        }
        state.activeSection = AppSection.AuthSection;
      });
    },
  },
});

// Reducer )--------------------------------------
export const commonReducer = commonSlice.reducer;

// Actions )-------------------------------------
export const {
  changeAppSection,
  presentLoader,
  dismissLoader,
  setAuthToken,
  logout,
} = commonSlice.actions;

// Create loader
export const createLoader = () => {
  const id = nanoid();
  return {
    present: (message?: string) => presentLoader({ id, message }),
    dismiss: () => dismissLoader({ id }),
  };
};
