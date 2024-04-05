/**
 * Variant info view
 * @format
 */
import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

import { Label } from '@app/components/label';
import { styles } from './styles';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  color?: string;
  size?: string;
};

const VariantInfo = (props: Props) => {
  const { containerStyle, color, size } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      {color != null && (
        <View style={[styles.colorBoxStyle, { backgroundColor: color }]} />
      )}
      {size != null && <Label style={styles.sizeStyle}>{size}</Label>}
    </View>
  );
};

export { VariantInfo };
