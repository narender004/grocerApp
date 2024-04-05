/**
 * Header button
 * @format
 */

import React from 'react';

import { TouchableItem } from '@app/components/touchable-item';
import { ScaledSheet } from '@app/styles';

type Props = {
  children: React.ReactNode;
  onPress: Function;
  style?: ScaledSheet;
};

const HeaderButton = ({ children, onPress, style, ...rest }: Props) => {
  return (
    <TouchableItem
      {...rest}
      delayPressIn={0}
      onPress={onPress}
      hitSlop={{ top: 16, right: 16, bottom: 16, left: 16 }}
      style={[styles.buttonStyle, style]}
      borderless
    >
      {children}
    </TouchableItem>
  );
};

// Header button styles
const styles = ScaledSheet.create({
  buttonStyle: {
    height: '40@ms',
    width: '40@ms',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20@ms',
    overflow: 'hidden',
    padding: '2@ms',
    marginHorizontal: '5@ms',
  },
});

export { HeaderButton };
