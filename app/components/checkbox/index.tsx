/**
 * Checkbox
 * @format
 */

import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';

import { Icon } from '@app/components/icon';
import { Label } from '@app/components/label';
import { styles } from './styles';

// Types
type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: any;
  checked: boolean;
  labelComponent: React.ReactNode | undefined;
  onPress: () => void;
  error: string | undefined;
  iconProps?: { type: any; checkedIcon: string; uncheckedIcon: string };
};

const CheckBox = (props: Props) => {
  const {
    containerStyle,
    iconStyle,
    checked,
    labelComponent,
    onPress,
    error,
    iconProps = {
      type: 'MaterialIcons',
      checkedIcon: 'check-box',
      uncheckedIcon: 'check-box-outline-blank',
    },
  } = props;

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <Icon
          name={checked ? iconProps.checkedIcon : iconProps.uncheckedIcon}
          type={iconProps.type}
          onPress={onPress}
          style={[styles.iconStyle, iconStyle]}
        />
        {labelComponent}
      </View>
      {!!error && <Label style={styles.errorStyle}>{error}</Label>}
    </>
  );
};

export { CheckBox };
