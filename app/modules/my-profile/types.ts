/**
 * Profile Types
 * @format
 */

import { ProfileScreenProps, Routes } from '@app/navigator';
import { logout } from '@app/modules/common';
import { getMyProfile, updateProfile, changePassword } from './slice';

//----------------( My Profile / Screen )----------------
export type MyProfileScreenParams = undefined;
export type MyProfileScreenNavProps =
  ProfileScreenProps<Routes.MyProfileScreen>;

export type MyProfileViewProps = MyProfileScreenNavProps & {
  getMyProfile: typeof getMyProfile;
  logout: typeof logout;
  profile: any;
};
//-----------------------------------------------------

//---------------( Change Password Screen )------------
export type ChangePasswordScreenParams = undefined;
export type ChangeScreenNavProps =
  ProfileScreenProps<Routes.ChangePasswordScreen>;

export type ChangePasswordViewProps = ChangeScreenNavProps & {
  changePassword: typeof changePassword;
};
//-----------------------------------------------------

//---------------( Change Password Screen )------------
export type UpdateProfileScreenParams = undefined;

export type UpdateProfileViewProps = {
  updateProfile: typeof updateProfile;
  profile: any;
};
//-----------------------------------------------------

export interface ChangePasswordReq {
  oldPassword: string;
  newPassword: string;
}

export interface UpdateProfileReq {
  userId: number;
  imageId: number;
  image: any;
  name: string;
  email: string;
  phone: string;
}
