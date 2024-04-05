/**
 * Order Detail Screen
 * @format
 */

import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import { strings } from '@app/strings';
import { OrderStatus } from '../constants';
import { OrderDetailViewProps } from '../types';
import { getOrderDetail } from '../slice';
import { selectOrder } from '../selectors';
import { Label, Price, LoadingGate, AddressItem } from '@app/components';
import { LineItem } from '@app/modules/cart';
import { PaymentDetail } from './payment-detail';
import { styles } from './styles';

const OrderDetailScreen = (props: OrderDetailViewProps) => {
  const { route, orderDetail } = props;

  useEffect(() => {
    props.getOrderDetail({ orderId: route.params?.orderId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { order, orderItems = [] } = orderDetail ?? {};
  const { orderId, orderDate, orderStatusId, discountAmount,discountDescription,discountCode, deliveryCharges } = order ?? {};

  const salePriceTotal = orderItems.reduce(
    (acc: any, { salePrice, qty }: any) => acc + salePrice * qty,
    0,
  );
  const mrpPriceTotal = orderItems.reduce(
    (acc: any, { mrp, qty }: any) => acc + mrp * qty,
    0,
  );

  const orderStatus = OrderStatus[orderStatusId];

  return (
    <View style={styles.container}>
      <LoadingGate loading={!orderId}>
        <ScrollView contentContainerStyle={styles.flatListContentStyle}>
          <View style={styles.titleContainer}>
            <Label style={styles.titleLabelStyle}>
              {strings.order_summary}
            </Label>
          </View>

          <View style={styles.orderDetailContent}>
            <Label style={[styles.labelStyle, styles.bold]}>#{orderId}</Label>

            <View style={styles.rowBetweenSpace}>
              <Label style={[styles.labelStyle, styles.grayLabel]}>
                {strings.order_date}:{' '}
                <Label style={styles.labelStyle}>
                  {dayjs(orderDate).format('DD MMM, YYYY')}
                </Label>
              </Label>

              <Label style={[styles.labelStyle, styles.grayLabel]}>
                {strings.order_status}:{' '}
                <Label style={styles.labelStyle}>{orderStatus}</Label>
              </Label>
            </View>

            <Label style={[styles.labelStyle, styles.grayLabel]}>
              {strings.payment_mode}:{' '}
              <Label style={styles.labelStyle}>{'Cash on delivery'}</Label>
            </Label>

            <View style={styles.priceContainer}>
              <Price price={salePriceTotal} labelStyle={styles.priceStyle} />
              <Price
                price={mrpPriceTotal}
                labelStyle={[styles.priceStyle, styles.mrpPriceStyle]}
              />
            </View>
          </View>
          
          {discountCode &&(<View style={styles.titleContainer}>
              <Label style={styles.couponHeaderLabel}>
            {strings.applied_Coupon}:{' '} <Label style={styles.labelStyle}>
            {discountCode}
            </Label>
            </Label>
           {discountDescription &&(<Label style={styles.couponDescStyle}>{discountDescription}</Label>)}
            </View>)}

          <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
              <Label style={[styles.titleLabelStyle, styles.primary]}>
                {strings.items_in_order} ({orderItems.length})
              </Label>
            </View>
            
            {orderItems?.map((item: any) => (
              <LineItem
                key={item.orderItemId}
                item={item}
                editable={false}
                orderId={orderId}
                orderStatusId={orderStatusId}
              />
            ))}
          </View>

          <View style={styles.paymentDetailContainer}>
            <PaymentDetail
              mrp={mrpPriceTotal}
              salePrice={salePriceTotal}
              couponDiscount={discountAmount}
              deliveryCharges={deliveryCharges}
            />
          </View>

          <View style={styles.bottomContentContainer}>
            <View style={styles.titleContainer}>
              <Label style={styles.headingStyle}>
                {strings.delivery_address}
              </Label>
            </View>

            <AddressItem
              containerStyle={styles.addressItemStyle}
              item={order}
            />
          </View>
        </ScrollView>
      </LoadingGate>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  orderDetail: selectOrder(state),
});

export default connect(mapStateToProps, { getOrderDetail })(OrderDetailScreen);
