/**
 * Cart Types
 * @format
 */

import { MainScreenProps, Routes } from '@app/navigator';
import { getAddresses } from '@app/modules/user-address';
import {
  getCart,
  getCoupons,
  updateCart,
  tryCoupon,
  removeAppliedCoupon,
  submitOrder,
} from './slice';

//--------------( Cart Screen )----------------
export type CartScreenParams = undefined;
export type CartNavProps = MainScreenProps<Routes.CartScreen>;

export type CartViewProps = CartNavProps & {
  getCart: typeof getCart;
  getCoupons: typeof getCoupons;
  updateCart: typeof updateCart;
  tryCoupon: typeof tryCoupon;
  removeAppliedCoupon: typeof removeAppliedCoupon;
  loading: boolean;
  cart: Array<any>;
  coupons: Array<any> | null;
  appliedCoupon: any;
  cartPrices: CartPrices;
};

export interface UpdateCart {
  productId: string;
  variantId?: string;
  qty: number;
}
//--------------------------------------------

//-------------( Payment Screen )-------------
export type PaymentScreenParams = { addressId: number } | undefined;
export type PaymentNavProps = MainScreenProps<Routes.PaymentScreen>;

export type PaymentViewProps = PaymentNavProps & {
  submitOrder: typeof submitOrder;
  getAddresses: typeof getAddresses;
  cart: Array<any> | null;
  addresses: Array<any> | null;
};

export interface OrderRequest {
  addressId: number;
}

export interface CouponRequest {
  code: string;
}
//------------------------------------------

export interface CouponRequest {
  coupon: any;
}

export interface CartPrices {
  mrpTotal: number;
  SalePriceTotal: number;
  couponDiscount: number;
  deliveryCharge: number;
  payableTotal: number;
}

//-------------( Order Success Screen )-------------
export type OrderSuccessScreenParams = {} | undefined;
export type OrderSuccessScreenViewNavProps =
  MainScreenProps<Routes.OrderSuccessScreen>;
