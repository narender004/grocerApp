/**
 * Root Saga
 * @format
 */

import { appBootstrapSagas } from '@app/modules/app-bootstrap';
import { authSagas } from '@app/modules/auth';
import { homeSagas } from '@app/modules/home';
import { productSagas } from '@app/modules/product';
import { cartSagas } from '@app/modules/cart';
import { addressSagas } from '@app/modules/user-address';
import { orderSagas } from '@app/modules/my-order';
import { categorySagas } from '@app/modules/categories';
import { profileSagas } from '@app/modules/my-profile';

const rootSaga = [
  appBootstrapSagas,
  authSagas,
  homeSagas,
  productSagas,
  cartSagas,
  addressSagas,
  orderSagas,
  categorySagas,
  profileSagas,
];

export { rootSaga };
