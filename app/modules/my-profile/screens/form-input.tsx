/**
 * Profile Input
 * @format
 */

import React from 'react';
import { Controller } from 'react-hook-form';
import { TextFieldProps } from 'rn-material-ui-textfield';

import { Input } from '@app/components';
import { Colors, moderateScale } from '@app/styles';
import { styles } from './styles';

type InputProps = {
  control: any;
  name: string;
} & TextFieldProps;

const FormInput = ({
  control,
  name,
  onChangeText,
  defaultValue,
  ...rest
}: InputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Input
          onInputRef={field.ref}
          onBlur={field.onBlur}
          onChangeText={(text: string) => {
            field.onChange(text);
            onChangeText?.(text);
          }}
          value={field.value}
          defaultValue={defaultValue}
          error={fieldState.error?.message}
          baseColor={Colors.neutral.s500}
          tintColor={Colors.neutral.s500}
          textColor={Colors.neutral.s500}
          labelTextStyle={styles.inputLabelStyle}
          fontSize={moderateScale(14)}
          labelFontSize={moderateScale(11)}
          style={styles.inputLabelStyle}
          errorColor={Colors.error.s500}
          returnKeyType="next"
          blurOnSubmit={false}
          type="primary"
          {...rest}
        />
      )}
      defaultValue={defaultValue}
    />
  );
};

export { FormInput };
