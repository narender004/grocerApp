/**
 * Payment Detail
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { strings } from '@app/strings';
import { selectPrices } from '../../selectors';
import { Label, Price } from '@app/components';
import { styles } from './styles';

const PaymentDetail = () => {
  const prices = useSelector(selectPrices);

  const {
    mrpTotal,
    SalePriceTotal,
    couponDiscount,
    deliveryCharge,
    payableTotal,
  } = prices;

  return (
    <>
      <Label style={styles.paymentDetailLabel}>{strings.payment_detail}</Label>

      <View style={styles.paymentItem}>
        <Label style={styles.paymentLabelStyle}>{strings.mrp_total}</Label>
        <Price
          labelStyle={[styles.paymentLabelStyle, styles.priceStyle]}
          price={mrpTotal.toFixed(2)}
        />
      </View>

      <View style={styles.paymentItem}>
        <Label style={styles.paymentLabelStyle}>
          {strings.product_discount}
        </Label>
        <Price
          labelStyle={[styles.paymentLabelStyle, styles.priceStyle]}
          price={(mrpTotal - SalePriceTotal).toFixed(2)}
        />
      </View>

      {!!couponDiscount && (
        <View style={styles.paymentItem}>
          <Label style={styles.paymentLabelStyle}>
            {strings.coupon_discount}
          </Label>
          <Price
            labelStyle={[styles.paymentLabelStyle, styles.priceStyle]}
            price={couponDiscount.toFixed(2)}
          />
        </View>
      )}

      <View style={styles.paymentItem}>
        <Label style={styles.paymentLabelStyle}>
          {strings.delivery_charge}
        </Label>
        <Price
          labelStyle={[styles.paymentLabelStyle, styles.priceStyle]}
          price={deliveryCharge.toFixed(2)}
        />
      </View>

      <View style={styles.paymentItem}>
        <Label style={[styles.paymentLabelStyle, styles.bold]}>
          {strings.total_amount}
        </Label>
        <Price
          labelStyle={[
            styles.paymentLabelStyle,
            styles.priceStyle,
            styles.bold,
          ]}
          price={payableTotal.toFixed(2)}
        />
      </View>

      <Label style={styles.savingLabelStyle}>
        {strings.you_save} {strings.common.rupee}{' '}
        {(mrpTotal - SalePriceTotal).toFixed(2)}
      </Label>
    </>
  );
};

export { PaymentDetail };
