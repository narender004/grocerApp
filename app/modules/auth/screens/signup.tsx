/**
 * Signup Screen
 * @format
 */

import React from 'react';
import { Linking, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { SignupRequest, SignupViewProps } from '../types';
import { TERMS_URL } from '@app/config';
import { Routes } from '@app/navigator';
import { signup } from '../slice';
import { strings } from '@app/strings';
import { signupSchema } from '../validation';
import { Label, Input, Icon, CheckBox, Button } from '@app/components';
import { AuthContainer } from './container';
import { styles } from './styles';

const SignupScreen = (props: SignupViewProps) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });

  const onSubmit = (data: SignupRequest) => {
    dispatch(signup(data));
  };

  return (
    <AuthContainer
      headerProps={{ title: strings.header.register, canGoBack: true }}
    >
      <View style={styles.signupContainer}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              label={strings.auth.name}
              labelOffset={{ x1: -43, y1: -5 }}
              renderLeftAccessory={() => (
                <Icon
                  name="person-outline"
                  type="MaterialIcons"
                  style={[
                    styles.leftIconStyle,
                    errors.name && styles.leftIconErrorStyle,
                  ]}
                />
              )}
              onInputRef={field.ref}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
              autoCapitalize="words"
              error={errors.name?.message}
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => setFocus('email')}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              label={strings.auth.email}
              labelOffset={{ x1: -43, y1: -5 }}
              renderLeftAccessory={() => (
                <Icon
                  name="mail-outline"
                  type="MaterialIcons"
                  style={[
                    styles.leftIconStyle,
                    errors.email && styles.leftIconErrorStyle,
                  ]}
                />
              )}
              onInputRef={field.ref}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
              keyboardType="email-address"
              error={errors.email?.message}
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => setFocus('phone')}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input
              label={strings.auth.phone}
              labelOffset={{ x1: -43, y1: -5 }}
              renderLeftAccessory={() => (
                <Icon
                  name="phone-iphone"
                  type="MaterialIcons"
                  style={[
                    styles.leftIconStyle,
                    errors.phone && styles.leftIconErrorStyle,
                  ]}
                />
              )}
              onInputRef={field.ref}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
              keyboardType="phone-pad"
              error={errors.phone?.message}
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
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => setFocus('confirmPassword')}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <Input
              label={strings.auth.confirm_password}
              labelOffset={{ x1: -43, y1: -5 }}
              renderLeftAccessory={() => (
                <Icon
                  name="lock-outline"
                  type="MaterialIcons"
                  style={[
                    styles.leftIconStyle,
                    errors.confirmPassword && styles.leftIconErrorStyle,
                  ]}
                />
              )}
              onInputRef={field.ref}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
              secureTextEntry={true}
              error={errors.confirmPassword?.message}
              returnKeyType="done"
            />
          )}
        />
        <Controller
          name="termsAccepted"
          control={control}
          render={({ field }) => (
            <CheckBox
              containerStyle={styles.checkBoxContainer}
              checked={field.value}
              labelComponent={
                <Label
                  onPress={() => {
                    field.onChange(!field.value);
                  }}
                  style={[styles.linkColor, styles.iAgreeToLabel]}
                >
                  {`${strings.auth.i_agree_to} `}
                  <Label
                    style={styles.linkColor}
                    onPress={() => {
                      Linking.openURL(TERMS_URL);
                    }}
                  >
                    {strings.auth.terms_and_conditions}
                  </Label>
                </Label>
              }
              onPress={() => {
                field.onChange(!field.value);
              }}
              error={errors.termsAccepted?.message}
            />
          )}
        />

        <Button
          type="secondary"
          title={strings.auth.signup.toUpperCase()}
          containerStyle={styles.buttonStyle}
          onPress={handleSubmit(onSubmit)}
        />

        <Label style={styles.notHaveAccountLabel}>
          {`${strings.auth.already_have_account} `}
          <Label
            style={styles.linkColor}
            onPress={() => {
              props.navigation.navigate(Routes.LoginScreen);
            }}
          >
            {strings.auth.login}
          </Label>
        </Label>
      </View>
    </AuthContainer>
  );
};

export default SignupScreen;
