/**
 * Order Types
 * @format
 */

import { OrderScreenProps, Routes } from '@app/navigator';
import { getOrders, getOrderDetail } from './slice';

//--------------( My Order Screen )----------------
export type MyOrderScreenParams = undefined;
export type MyOrderNavProps = OrderScreenProps<Routes.MyOrderScreen>;

export type MyOrderViewProps = MyOrderNavProps & {
  getOrders: typeof getOrders;
  loading: boolean;
  orders: Array<any> | null;
};
//--------------------------------------------

//-------------( Order Detail Screen )-------------
export type OrderDetailScreenParams = { orderId: number };
export type OrderDetailNavProps = OrderScreenProps<Routes.OrderDetailScreen>;

export type OrderDetailViewProps = OrderDetailNavProps & {
  getOrderDetail: typeof getOrderDetail;
  orderDetail: any;
};
//------------------------------------------
