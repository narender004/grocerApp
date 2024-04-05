/**
 * Cart Sagas
 * @format
 */

import {
  takeLatest,
  takeEvery,
  all,
  call,
  put,
  select,
} from 'redux-saga/effects';

import { request, endpoints } from '@app/api';
import { showMessage } from '@app/global';
import { NavigationService } from '@app/utils';
import { Routes } from '@app/navigator';
import { strings } from '@app/strings';
import { createLoader } from '@app/modules/common';
import {
  getCart,
  getCoupons,
  setCart,
  setCoupons,
  setDeliveryCharge,
  updateCart,
  submitOrder,
  tryCoupon,
  setAppliedCoupon,
} from './slice';
import { selectAppliedCoupon, selectCartItems } from './selectors';

function* getCartSaga(): any {
  try {
    const cartItems = yield call(request.get, endpoints.get_cart);
    const deliveryCharge = yield call(
      request.get,
      endpoints.get_delivery_charge,
    );
    yield put(setCart(cartItems ?? []));
    yield put(setDeliveryCharge(deliveryCharge.value));
  } catch (error) {
    console.log('[Error: getCartSaga]', error);
  }
}

function* getCouponsSaga(): any {
  try {
    const coupons = yield call(request.get, endpoints.get_coupons);
    yield put(setCoupons(coupons));
  } catch (error) {
    console.log('[Error: getCouponsSaga]', error);
  }
}

function* updateCartSaga({ payload }: ReturnType<typeof updateCart>): any {
  try {
    const { productId, variantId, qty } = payload;
    const cartItems = yield select(selectCartItems);

    if (qty <= 0) {
      yield call(removeCartItemSaga, cartItems, { productId, variantId });
      yield call(reapplyCouponSaga);
      return;
    }

    // Is item already exist in cart
    const isAlreadyExist = cartItems.some((cartItem: any) => {
      if (variantId != null) {
        return (
          cartItem.productId === productId &&
          cartItem.productVariantId === variantId
        );
      }
      return cartItem.productId === productId;
    });
    if (isAlreadyExist) {
      yield call(updateCartItemSaga, cartItems, { productId, variantId }, qty);
      yield call(reapplyCouponSaga);
      return;
    }

    yield call(addToCartSaga, cartItems, { productId, variantId });

    // On change cart items reapply coupon.
    yield call(reapplyCouponSaga);
  } catch (error) {
    console.log('[Error: updateCartSaga]', error);
  }
}

function* addToCartSaga(
  cartItems: Array<any>,
  { productId, variantId }: any,
): any {
  const clonedCartItems = [...cartItems];

  clonedCartItems.push({ productId, productVariantId: variantId, qty: 1 });
  yield put(setCart(clonedCartItems));
  yield call(request.post, endpoints.add_to_cart, {
    productId,
    productVariantId: variantId,
    qty: 1,
  });
}

function* updateCartItemSaga(
  cartItems: Array<any>,
  { productId, variantId }: any,
  qty: number,
): any {
  const index = cartItems.findIndex((cartItem: any) => {
    if (variantId != null) {
      return (
        cartItem.productId === productId &&
        cartItem.productVariantId === variantId
      );
    }
    return cartItem.productId === productId;
  });

  const clonedCartItems = [...cartItems];
  clonedCartItems[index] = { ...clonedCartItems[index], qty };
  yield put(setCart(clonedCartItems));

  yield call(request.put, endpoints.update_cart_item, {
    productId,
    productVariantId: variantId,
    qty,
  });
}

function* removeCartItemSaga(
  cartItems: Array<any>,
  { productId, variantId }: any,
): any {
  const updatedCart = cartItems.filter((cartItem) => {
    if (variantId != null) {
      return !(
        cartItem.productVariantId === variantId &&
        cartItem.productId === productId
      );
    }
    return cartItem.productId !== productId;
  });
  yield put(setCart(updatedCart));

  yield call(request.delete, endpoints.remove_cart_item, {
    params: {
      productId,
      productVariantId: variantId,
    },
  });
}

function* submitOrderSaga({ payload }: ReturnType<typeof submitOrder>): any {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const { addressId } = payload;

    const cart = yield select(selectCartItems);
    const coupon = yield select(selectAppliedCoupon);

    const items = cart?.map(({ productId, productVariantId, qty }: any) => ({
      productId,
      productVariantId,
      qty,
    }));
    yield call(request.post, endpoints.submit_order, {
      orderId: 0,
      addressId,
      items,
      discountId: coupon?.discountId,
    });
    yield call(NavigationService.navigate, Routes.OrderSuccessScreen);
    yield call(getCartSaga);
  } catch (error) {
    console.log('[Error: submitOrderSaga]', error);
    showMessage({
      message: error.message,
      type: 'danger',
      duration: 5000,
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* tryCouponSaga({ payload }: ReturnType<typeof tryCoupon>): any {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const { coupon } = payload;
    const response = yield call(request.get, endpoints.try_coupon, {
      params: {
        DiscountCode: coupon.code,
      },
    });
    yield put(setAppliedCoupon({ ...coupon, amount: response }));
    yield call(showMessage, {
      message: strings.messages.coupon_applied,
      type: 'success',
    });
  } catch (error) {
    console.log('[Error: tryCouponSaga]', error);
  } finally {
    yield put(loader.dismiss());
  }
}

function* reapplyCouponSaga(): any {
  try {
    const appliedCoupon = yield select(selectAppliedCoupon);
    if (!appliedCoupon) {
      return;
    }
    const response = yield call(request.get, endpoints.try_coupon, {
      params: {
        DiscountCode: appliedCoupon.code,
      },
    });
    yield put(setAppliedCoupon({ ...appliedCoupon, amount: response }));
  } catch (error) {
    console.log('[Error: tryCouponSaga]', error);
  }
}

function* cartSagas() {
  yield all([
    takeLatest(getCart, getCartSaga),
    takeLatest(getCoupons, getCouponsSaga),
    takeEvery(updateCart, updateCartSaga),
    takeLatest(submitOrder, submitOrderSaga),
    takeLatest(tryCoupon, tryCouponSaga),
  ]);
}

export { cartSagas };
