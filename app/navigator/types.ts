/**
 * Navigator Types
 * @format
 */

import { StackScreenProps, StackHeaderProps } from '@react-navigation/stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { Routes } from './constants';
import {
  LoginScreenParams,
  LoginWithOtpScreenParams,
  SignupScreenParams,
  ForgotPasswordScreenParams,
  VerificationScreenParams,
} from '@app/modules/auth';
import { SearchScreenParams } from '@app/modules/search';
import {
  ProductDetailScreenParams,
  ProductListScreenParams,
} from '@app/modules/product';
import {
  CartScreenParams,
  PaymentScreenParams,
  OrderSuccessScreenParams,
} from '@app/modules/cart';
import {
  AddressListScreenParams,
  AddEditAddressScreenParams,
} from '@app/modules/user-address';
import {
  MyOrderScreenParams,
  OrderDetailScreenParams,
} from '@app/modules/my-order';
import {
  MyProfileScreenParams,
  UpdateProfileScreenParams,
  ChangePasswordScreenParams,
} from '@app/modules/my-profile';

// Navigator view props
export interface Props {
  restored: boolean;
}
// Navigation header view props
export type HeaderProps = StackHeaderProps;

// Auth stack types ................................................
export type AuthStackParamsList = {
  [Routes.LoginScreen]: LoginScreenParams;
  [Routes.SignupScreen]: SignupScreenParams;
  [Routes.ForgotPasswordScreen]: ForgotPasswordScreenParams;
  [Routes.LoginWithOtpScreen]: LoginWithOtpScreenParams;
  [Routes.VerificationScreen]: VerificationScreenParams;
};
export type AuthScreenProps<RouteName extends keyof AuthStackParamsList> =
  StackScreenProps<AuthStackParamsList, RouteName>;
//..................................................................

// Main stack types ................................................
export type MainStackParamsList = {
  [Routes.MainScreen]: undefined;
  [Routes.SearchScreen]: SearchScreenParams;
  [Routes.CartScreen]: CartScreenParams;
  [Routes.AddressListScreen]: AddressListScreenParams;
  [Routes.AddEditAddressScreen]: AddEditAddressScreenParams;
  [Routes.PaymentScreen]: PaymentScreenParams;
  [Routes.ProductDetailScreen]: ProductDetailScreenParams;
  [Routes.ProductListScreen]: ProductListScreenParams;
  [Routes.OrderSuccessScreen]: OrderSuccessScreenParams;
};
export type MainScreenProps<RouteName extends keyof MainStackParamsList> =
  StackScreenProps<MainStackParamsList, RouteName>;
//..................................................................

// Main stack types ................................................
export type BottomTabParamsList = HomeStackParamsList & {
  [Routes.HomeTab]: undefined;
  [Routes.CategoriesTab]: undefined;
  [Routes.OrderTab]: undefined;
  [Routes.HelpTab]: undefined;
  [Routes.ProfileTab]: undefined;
};
export type BottomTabsScreenProps<RouteName extends keyof BottomTabParamsList> =
  BottomTabScreenProps<BottomTabParamsList, RouteName>;
//..................................................................

// Home stack types ................................................
export type HomeStackParamsList = {
  [Routes.HomeScreen]: undefined;
};
export type HomeScreenProps<RouteName extends keyof HomeStackParamsList> =
  StackScreenProps<HomeStackParamsList, RouteName>;
//..................................................................

// Order stack types ................................................
export type OrderStackParamsList = {
  [Routes.MyOrderScreen]: MyOrderScreenParams;
  [Routes.OrderDetailScreen]: OrderDetailScreenParams;
};
export type OrderScreenProps<RouteName extends keyof OrderStackParamsList> =
  StackScreenProps<OrderStackParamsList, RouteName>;
//..................................................................

// Order stack types ................................................
export type ProfileStackParamsList = MainStackParamsList & {
  [Routes.MyProfileScreen]: MyProfileScreenParams;
  [Routes.ChangePasswordScreen]: ChangePasswordScreenParams;
  [Routes.UpdateProfileScreen]: UpdateProfileScreenParams;
};
export type ProfileScreenProps<RouteName extends keyof ProfileStackParamsList> =
  StackScreenProps<ProfileStackParamsList, RouteName>;
//..................................................................
