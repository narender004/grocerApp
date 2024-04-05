/**
 * Address Types
 * @format
 */

import { MainScreenProps, Routes } from '@app/navigator';
import { getAddresses, addAddress, updateAddress } from './slice';

//------------ (AddEditAddress Screen) ----------------
export type AddEditAddressScreenParams = { addressId: number } | undefined;
export type AddEditAddressNavProps =
  MainScreenProps<Routes.AddEditAddressScreen>;

export type AddEditAddressViewProps = AddEditAddressNavProps & {
  addAddress: typeof addAddress;
  updateAddress: typeof updateAddress;
};
//----------------------------------------------------

//------------ (AddressList Screen) -----------------
export type AddressListScreenParams = { selectionMode: boolean } | undefined;
export type AddressListNavProps = MainScreenProps<Routes.AddressListScreen>;

export type AddressListViewProps = AddressListNavProps & {
  getAddresses: typeof getAddresses;
  addresses: Array<any> | null;
  loading: boolean;
};
export type AddressListState = {
  selectionMode: boolean;
  selectedIndex?: number;
};
//-------------------------------------------------

// Request types
export interface AddAddressReq {
  contactPerson: string;
  contactNo: string;
  houseFlatNo: string;
  society: string;
  areaSector: string;
  city: string;
  state: string;
  pinCode: string;
}

export interface UpdateAddress {
  addressId: number;
  contactPerson: string;
  contactNo: string;
  houseFlatNo: string;
  society: string;
  areaSector: string;
  city: string;
  state: string;
  pinCode: string;
}
