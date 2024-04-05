/**
 * Label on top of RN Text
 * @format
 */

import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

type Props = React.ComponentProps<typeof Text> & {
  children: string | React.ReactNode;
};

const Label = ({ style, ...rest }: Props) => {
  return <Text {...rest} style={[styles.text, style]} />;
};

export { Label };
