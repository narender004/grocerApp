/**
 * Price Component
 * @format
 */

import React from 'react';
import { View, StyleProp, ViewStyle, TextStyle } from 'react-native';

import { strings } from '@app/strings';
import { Label } from '@app/components/label';
import { styles } from './styles';

type Props = {
  mrp?: number;
  salePrice?: number;
  price?: number | string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  type?: 1 | 2;
  showDiscount?: boolean;
};

const Price = (props: Props) => {
  const {
    mrp = 0,
    salePrice = 0,
    price,
    containerStyle,
    labelStyle,
    type = 1,
    showDiscount = true,
  } = props;

  if (price) {
    return (
      <Label style={labelStyle}>
        {strings.common.rupee} {price}
      </Label>
    );
  }

  const saving = mrp - salePrice;

  const priceValue = (value: number) => {
    if (Number.isInteger(value)) {
      return value.toFixed(2);
    }

    return value;
  };

  if (saving < 1) {
    return (
      <View style={[styles.container, containerStyle]}>
        <Label style={[styles.priceStyle, labelStyle]}>
          {`${strings.common.rupee} ${priceValue(salePrice)}`}
        </Label>
      </View>
    );
  }

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <Label style={[styles.priceStyle, labelStyle]}>
          {`${strings.common.rupee} ${priceValue(salePrice)}`}
        </Label>

        <Label style={[styles.priceStyle, styles.throughLine, labelStyle]}>
          {`${strings.common.rupee} ${priceValue(mrp)}`}
        </Label>

        {type === 1 && showDiscount && (
          <Label style={[styles.priceStyle, styles.discountStyle, labelStyle]}>
            {`${strings.save} ${strings.common.rupee} ${priceValue(saving)}`}
          </Label>
        )}
      </View>

      {/**
       * Using type prop to handle overflowing text in small card
       * can use flex wrap also but its creating problem in some device
       * ex: OnePlus
       */}
      {type === 2 && showDiscount && (
        <Label
          style={[
            styles.priceStyle,
            styles.discountStyle,
            { marginLeft: 0 },
            labelStyle,
          ]}
        >
          {`${strings.save} ${strings.common.rupee} ${priceValue(saving)}`}
        </Label>
      )}
    </>
  );
};

export { Price };
