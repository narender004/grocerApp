/**
 * Product Types
 * @format
 */

import { HomeScreenProps, Routes } from '@app/navigator';
import { updateCart } from '@app/modules/cart';
import { getProductDetail, getProducts } from './slice';

/*---------( Product Detail )--------- */
export type ProductDetailScreenParams = { productId: number };
export type ProductDetailNavProps = HomeScreenProps<Routes.ProductDetailScreen>;

export type ProductDetailViewProps = ProductDetailNavProps & {
  getProductDetail: typeof getProductDetail;
  updateCart: typeof updateCart;
  productDetail: any;
  qtyInCart: number;
};

export interface ProductDetailRequest {
  productId: number;
  selectedVariant?: any;
}
//-------------------------------------

/*---------( Product List )---------- */
export type ProductListScreenParams = {
  categoryId: number;
  headerTitle?: string;
};
export type ProductListNavProps = HomeScreenProps<Routes.ProductListScreen>;

export type ProductListViewProps = ProductListNavProps & {
  getProducts: typeof getProducts;
  loading: boolean;
  products: Array<any> | null;
};

export interface ProductListRequest {
  categoryId: number;
}
//-------------------------------------
