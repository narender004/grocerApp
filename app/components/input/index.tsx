/**
 * Input
 * @format
 */

import React, { useState } from 'react';
import { TextField, TextFieldProps } from 'rn-material-ui-textfield';

import { Colors, moderateScale } from '@app/styles';
import { Icon } from '../icon';
import { styles } from './styles';

// Types
type Props = TextFieldProps & {
  onInputRef?: Function;
  type?: 'primary' | 'secondary';
};
const Input = (props: Props) => {
  const { secureTextEntry, onInputRef, type, ...rest } = props;
  const [secureInput, setSecureInput] = useState(secureTextEntry);

  const eyeIcon = () => {
    return (
      <Icon
        type="Ionicons"
        name={secureInput ? 'ios-eye-off-outline' : 'eye-outline'}
        style={[
          styles.eyeIconStyle,
          type === 'primary' && styles.eyeIconPrimaryStyle,
        ]}
        onPress={() => setSecureInput(!secureInput)}
      />
    );
  };

  return (
    <TextField
      ref={onInputRef}
      secureTextEntry={secureInput}
      renderRightAccessory={secureTextEntry ? eyeIcon : undefined}
      {...rest}
    />
  );
};

Input.defaultProps = {
  baseColor: Colors.neutral.white,
  textColor: Colors.neutral.white,
  tintColor: Colors.neutral.white,
  errorColor: Colors.danger.s400,
  underlineColorAndroid: 'transparent',
  autoCorrect: false,
  spellCheck: false,
  autoCapitalize: 'none',
  fontSize: moderateScale(15),
  labelFontSize: moderateScale(12),
};

export { Input };
