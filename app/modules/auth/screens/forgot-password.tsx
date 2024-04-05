/**
 * Forgot Password Screen
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ForgotPasswordRequest, ForgotPasswordViewProps } from '../types';
import { requestResetPassword } from '../slice';
import { strings } from '@app/strings';
import { forgotPasswordSchema } from '../validation';
import { Label, Input, Icon, Button } from '@app/components';
import { AuthContainer } from './container';
import { styles } from './styles';

const ForgotPasswordScreen = (props: ForgotPasswordViewProps) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(forgotPasswordSchema) });

  const onSubmit = (data: ForgotPasswordRequest) => {
    dispatch(requestResetPassword(data));
  };

  return (
    <AuthContainer
      headerProps={{ title: strings.header.forgot_password, canGoBack: true }}
    >
      <View style={styles.contentContainer}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input
              label={strings.auth.email_or_phone}
              labelOffset={{ x1: -43, y1: -5 }}
              renderLeftAccessory={() => (
                <Icon
                  name="mail-outline"
                  type="MaterialIcons"
                  style={[
                    styles.leftIconStyle,
                    errors.username && styles.leftIconErrorStyle,
                  ]}
                />
              )}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
              keyboardType="email-address"
              error={errors.username?.message}
            />
          )}
          defaultValue={props.route.params?.username}
        />

        <Label style={styles.captionStyle}>
          {strings.auth.reset_password_will_send}
        </Label>

        <Button
          type="secondary"
          title={strings.auth.submit.toUpperCase()}
          containerStyle={styles.buttonStyle}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </AuthContainer>
  );
};

export default ForgotPasswordScreen;
