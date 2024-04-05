/**
 * Cart Selectors
 * @format
 */

import type { RootState } from '@app/redux';

import { CartPrices } from './types';

const cart = (state: RootState) => state.cartReducer;

export const selectCartItems = (state: RootState) => cart(state).items || [];

export const selectIsGettingItems = (state: RootState) =>
  cart(state).gettingItems;

export const selectProductQtyFromCart = (
  state: RootState,
  { productId, variantId }: any,
) => {
  if (variantId != null) {
    return (
      cart(state).items.find(
        (item) =>
          item.productId === productId && item.productVariantId === variantId,
      )?.qty ?? 0
    );
  }

  return (
    cart(state).items.find((item) => item.productId === productId)?.qty ?? 0
  );
};

export const selectCartCount = (state: RootState) =>
  cart(state).items?.length ?? 0;

export const selectDeliveryCharge = (state: RootState) =>
  +cart(state).deliveryCharge;

export const selectCoupons = (state: RootState) => cart(state).coupons;

export const selectAppliedCoupon = (state: RootState) =>
  cart(state).appliedCoupon;

export const selectPrices = (state: RootState) => {
  const cartItems = selectCartItems(state);
  const prices: CartPrices = {
    mrpTotal: 0,
    SalePriceTotal: 0,
    couponDiscount: 0,
    deliveryCharge: 0,
    payableTotal: 0,
  };

  // Total of items (mrp price)
  prices.mrpTotal = cartItems?.reduce((acc, item) => {
    const { mrp, qty } = item;
    return acc + mrp * qty;
  }, 0);

  // Total of items (sale price)
  prices.SalePriceTotal = cartItems?.reduce((acc, item) => {
    const { salePrice, qty } = item;
    return acc + salePrice * qty;
  }, 0);

  // Delivery charge
  prices.deliveryCharge = selectDeliveryCharge(state) ?? 0;

  // Coupon discount
  prices.couponDiscount = selectAppliedCoupon(state)?.amount ?? 0;

  // Total payable price
  prices.payableTotal =
    prices.SalePriceTotal + prices.deliveryCharge - prices.couponDiscount;

  return prices;
};
