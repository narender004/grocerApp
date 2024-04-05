/**
 * SizedBox
 * @format
 */
import React from 'react';
import { View } from 'react-native';

import { moderateScale } from '@app/styles';

type Props = {
  height?: number;
  width?: number;
  children?: React.ReactNode;
};

const SizedBox = (props: Props) => {
  const { height, width, children } = props;

  return (
    <View
      style={[
        height != null && { height: moderateScale(height) },
        width != null && { width: moderateScale(width) },
      ]}
    >
      {children}
    </View>
  );
};

export { SizedBox };
