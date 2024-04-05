/**
 * Login Screen
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginRequest, LoginViewProps } from '../types';
import { Routes } from '@app/navigator';
import { tryLogin } from '../slice';
import { strings } from '@app/strings';
import { loginSchema } from '../validation';
import { Label, Input, Icon, Button } from '@app/components';
import { AuthContainer } from './container';
import { styles } from './styles';

const LoginScreen = (props: LoginViewProps) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    getValues,
    setFocus,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data: LoginRequest) => {
    dispatch(tryLogin(data));
  };

  return (
    <AuthContainer headerProps={{ title: strings.header.login }}>
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
              onInputRef={field.ref}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
              keyboardType="email-address"
              error={errors.username?.message}
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => setFocus('password')}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              label={strings.auth.password}
              labelOffset={{ x1: -43, y1: -5 }}
              renderLeftAccessory={() => (
                <Icon
                  name="lock-outline"
                  type="MaterialIcons"
                  style={[
                    styles.leftIconStyle,
                    errors.password && styles.leftIconErrorStyle,
                  ]}
                />
              )}
              onInputRef={field.ref}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
              secureTextEntry
              error={errors.password?.message}
              returnKeyType="done"
            />
          )}
        />

        <Label
          style={styles.forgotPasswordLabel}
          onPress={() => {
            props.navigation.navigate(Routes.ForgotPasswordScreen, {
              username: getValues('username'),
            });
          }}
        >
          {strings.auth.forgot_password}
        </Label>

        <Button
          type="secondary"
          title={strings.auth.login.toUpperCase()}
          containerStyle={styles.buttonStyle}
          onPress={handleSubmit(onSubmit)}
        />
        <Label
          style={styles.otpLabelStyle}
          onPress={() => {
            props.navigation.navigate(Routes.LoginWithOtpScreen, {
              username: getValues('username'),
            });
          }}
        >
          {strings.auth.loginWithOtp}
        </Label>

        <Label style={styles.notHaveAccountLabel}>
          {`${strings.auth.not_have_account} `}
          <Label
            style={styles.linkColor}
            onPress={() => {
              props.navigation.navigate(Routes.SignupScreen);
            }}
          >
            {strings.auth.register}
          </Label>
        </Label>
      </View>
    </AuthContainer>
  );
};

export default LoginScreen;
