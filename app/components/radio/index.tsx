/**
 * Radio
 * @format
 */

import React from 'react';
import { TouchableOpacity, ViewStyle, StyleProp } from 'react-native';
import { View as AnimatedView } from 'react-native-animatable';

import { Icon } from '@app/components/icon';
import { styles } from './styles';

type Props = {
  selected?: boolean;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

const Radio = (props: Props) => {
  const { selected, onPress, containerStyle } = props;

  return (
    <AnimatedView
      style={containerStyle}
      animation={selected ? 'bounceIn' : 'pulse'}
      duration={1500}
    >
      <TouchableOpacity disabled={!onPress} onPress={onPress} activeOpacity={1}>
        <Icon
          type="Ionicons"
          name={selected ? 'radio-button-on' : 'radio-button-off-outline'}
          style={[styles.iconStyle, selected && styles.activeIconStyle]}
        />
      </TouchableOpacity>
    </AnimatedView>
  );
};

export { Radio };
