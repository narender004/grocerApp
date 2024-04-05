/**
 * Change Password Screen
 * @format
 */

import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { strings } from '@app/strings';
import { ChangePasswordViewProps, ChangePasswordReq } from '../types';
import { changePasswordSchema } from '../validation';
import { changePassword } from '../slice';
import { Button } from '@app/components';
import { FormInput } from './form-input';
import { styles } from './styles';

const ChangePasswordScreen = (props: ChangePasswordViewProps) => {
  const { control, handleSubmit, setFocus } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit = (data: ChangePasswordReq) => {
    props.changePassword(data);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.changePasswordContent}>
          <FormInput
            name="oldPassword"
            control={control}
            label={strings.profile.old_password}
            secureTextEntry
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => setFocus('newPassword')}
          />
          <FormInput
            name="newPassword"
            control={control}
            label={strings.profile.new_password}
            secureTextEntry
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => setFocus('confirmPassword')}
          />
          <FormInput
            name="confirmPassword"
            control={control}
            label={strings.profile.confirm_password}
            secureTextEntry
            blurOnSubmit={true}
            returnKeyType="done"
          />

          <Button
            containerStyle={styles.submitButtonStyle}
            title={strings.profile.submit.toUpperCase()}
            type="primary"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default connect(null, { changePassword })(ChangePasswordScreen);
