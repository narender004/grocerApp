/**
 * Add to cart button
 * @format
 */

import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { strings } from '@app/strings';
import { updateCart, selectProductQtyFromCart } from '@app/modules/cart';
import { Label } from '@app/components/label';
import { Icon } from '@app/components/icon';
import { styles } from './styles';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  productId: string;
  variantId?: string;
};

const AddToCart = (props: Props) => {
  const { containerStyle, productId, variantId } = props;

  const dispatch = useDispatch();

  const qty = useSelector((state: any) =>
    selectProductQtyFromCart(state, { productId, variantId }),
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {qty > 0 && (
        <Icon
          type="Ionicons"
          name="remove-circle"
          style={styles.iconStyle}
          onPress={() => {
            dispatch(updateCart({ productId, variantId, qty: qty - 1 }));
          }}
        />
      )}

      <Label style={styles.qtyLabelStyle}>
        {qty > 0 ? qty : strings.add_to_card}
      </Label>

      <Icon
        type="Ionicons"
        name="add-circle"
        style={styles.iconStyle}
        onPress={() => {
          dispatch(updateCart({ productId, variantId, qty: qty + 1 }));
        }}
      />
    </View>
  );
};

export { AddToCart };
