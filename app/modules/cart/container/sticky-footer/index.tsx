/**
 * Sticky Footer
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { Label, TouchableItem, Price } from '@app/components';
import { selectPrices } from '../../selectors';
import { strings } from '@app/strings';
import { styles } from './styles';

type Props = {
  buttonTitle: string;
  disabled?: boolean;
  onPressButton: () => void;
};

const StickyFooter = ({ buttonTitle, disabled, onPressButton }: Props) => {
  const prices = useSelector(selectPrices);
  const { payableTotal } = prices;

  return (
    <View style={styles.stickyFooter}>
      <View style={styles.stickFooterLeftContent}>
        <Label style={styles.paymentLabelStyle}>{strings.payable_amount}</Label>

        <Price
          price={payableTotal.toFixed(2)}
          labelStyle={[styles.priceStyle, styles.bold]}
        />
      </View>

      <TouchableItem
        style={[styles.placeOrderButtonStyle, disabled && styles.disabledStyle]}
        onPress={onPressButton}
        disabled={disabled}
      >
        <Label style={styles.placeOrderLabelStyle}>{buttonTitle}</Label>
      </TouchableItem>
    </View>
  );
};

export { StickyFooter };
