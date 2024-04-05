/**
 * Login With OTP Screen
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginWithPhoneRequest, LoginWithOtpViewProps } from '../types';
import { loginWithPhone } from '../slice';
import { isPhoneNumber } from '@app/utils';
import { strings } from '@app/strings';
import { loginWithPhoneScheme } from '../validation';
import { Label, Input, Icon, Button } from '@app/components';
import { AuthContainer } from './container';
import { styles } from './styles';
import { Colors } from '@app/styles';

const LoginWithOtpScreen = (props: LoginWithOtpViewProps) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginWithPhoneScheme) });

  const onSubmit = (data: LoginWithPhoneRequest) => {
    dispatch(loginWithPhone(data));
  };

  return (
    <AuthContainer headerProps={{ title: strings.header.login }}>
      <View style={styles.contentContainer}>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input
              type="primary"
              baseColor={Colors.primary.brand}
              textColor={Colors.primary.brand}
              tintColor={Colors.primary.brand}
              errorColor={Colors.error.s500}
              label={strings.auth.phone}
              labelOffset={{ x1: -43, y1: -5 }}
              renderLeftAccessory={() => (
                <Icon
                  name="smartphone"
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
              keyboardType="phone-pad"
              error={errors.phone?.message}
            />
          )}
          defaultValue={
            isPhoneNumber(props.route.params?.username)
              ? props.route.params?.username
              : ''
          }
        />

        <Label style={styles.captionStyle}>
          {strings.auth.login_with_phone_caption}
        </Label>

        <Button
          type="secondary"
          title={strings.auth.submit.toUpperCase()}
          containerStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </AuthContainer>
  );
};

export default LoginWithOtpScreen;
