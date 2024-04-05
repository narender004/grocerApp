/**
 * Icon on top of react native vector icons
 * @flow
 * @format
 */

import React from 'react';
import { IconProps } from 'react-native-vector-icons/Icon';
import { getIconByType } from './icon-types';

type Props = IconProps & {
  // Set type of the icon
  type: 'Ionicons' | 'MaterialIcons';
};

const Icon = (props: Props) => {
  const { type } = props;
  const IconComponent = getIconByType(type);
  return <IconComponent {...props} />;
};

export { Icon };
