/**
 * Payment Detail
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { strings } from '@app/strings';
import { selectDeliveryCharge } from '@app/modules/cart';
import { Label, Price } from '@app/components';
import { styles } from './styles';

type Props = {
  mrp: number;
  salePrice: number;
  couponDiscount: number;
  deliveryCharges: number;
};

const PaymentDetail = (props: Props) => {
  const { mrp, salePrice, couponDiscount = 0, deliveryCharges: deliveryCharge } = props;
  const totalPaid = salePrice + deliveryCharge - couponDiscount;

  return (
    <>
      <Label style={styles.paymentDetailLabel}>{strings.payment_detail}</Label>

      <View style={styles.paymentItem}>
        <Label style={styles.paymentLabelStyle}>{strings.mrp_total}</Label>
        <Price
          labelStyle={[styles.paymentLabelStyle, styles.priceStyle]}
          price={mrp.toFixed(2)}
        />
      </View>

      <View style={styles.paymentItem}>
        <Label style={styles.paymentLabelStyle}>
          {strings.product_discount}
        </Label>
        <Price
          labelStyle={[styles.paymentLabelStyle, styles.priceStyle]}
          price={(mrp - salePrice).toFixed(2)}
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
          price={totalPaid.toFixed(2)}
        />
      </View>

      <Label style={styles.savingLabelStyle}>
        {strings.you_save} {strings.common.rupee} {(mrp - salePrice).toFixed(2)}
      </Label>
    </>
  );
};

export { PaymentDetail };
