/**
 * Profile Selectors
 * @format
 */

import type { RootState } from '@app/redux';

const profile = (state: RootState) => state.profileReducer;

export const selectProfile = (state: RootState) => profile(state).user;
