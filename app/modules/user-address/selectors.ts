/**
 * Address Selectors
 * @format
 */

import type { RootState } from '@app/redux';

const address = (state: RootState) => state.addressReducer;

export const selectAddresses = (state: RootState) => address(state).addresses;

export const selectIsGettingAddress = (state: RootState) =>
  address(state).loading;

export const selectAddress = (state: RootState, id: number | undefined) =>
  address(state).addresses?.find((item) => item.addressId === id);
