/**
 * Add/Edit Address Screen
 * @format
 */

import React from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TextFieldProps } from 'rn-material-ui-textfield';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { strings } from '@app/strings';
import { AddAddressReq, AddEditAddressViewProps } from '../types';
import { addressSchema } from '../validation';
import { addAddress, updateAddress } from '../slice';
import { selectAddress } from '../selectors';
import { searchByPin } from '../request';
import { Header, Input, Button } from '@app/components';
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
          {...rest}
        />
      )}
      defaultValue={defaultValue}
    />
  );
};

const AddEditAddressScreen = (props: AddEditAddressViewProps) => {
  const { route } = props;
  const addressId = route.params?.addressId;

  const dispatch = useDispatch();
  const address = useSelector((state: any) => selectAddress(state, addressId));
  const {
    contactPerson,
    contactNo,
    pinCode,
    houseFlatNo,
    society,
    areaSector,
    city,
    state,
    landMark,
  } = address ?? {};

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
    setFocus,
  } = useForm({ resolver: yupResolver(addressSchema) });

  const onSubmit = (data: AddAddressReq) => {
    if (addressId) {
      dispatch(updateAddress({ ...data, addressId }));
      return;
    }
    dispatch(addAddress(data));
  };

  const onChangePinCode = (postCode: string) => {
    if (postCode?.length === 6) {
      searchByPin(postCode).then((res) => {
        setValue('city', res?.city);
        setValue('state', res?.state);
        clearErrors(['city', 'state']);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header
        safeAreaEnabled
        canGoBack
        title={
          addressId ? strings.header.update_address : strings.header.add_address
        }
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        keyboardShouldPersistTaps="handled"
      >
        <FormInput
          name="contactPerson"
          control={control}
          label={strings.address.name}
          defaultValue={contactPerson}
          onSubmitEditing={() => setFocus('contactNo')}
        />
        <FormInput
          name="contactNo"
          control={control}
          label={strings.address.phone}
          keyboardType="phone-pad"
          defaultValue={contactNo}
          onSubmitEditing={() => setFocus('pinCode')}
        />
        <FormInput
          name="pinCode"
          control={control}
          error={errors.pinCode?.message}
          label={strings.address.pin_code}
          keyboardType="number-pad"
          maxLength={6}
          onChangeText={onChangePinCode}
          defaultValue={pinCode}
          onSubmitEditing={() => setFocus('houseFlatNo')}
        />
        <FormInput
          name="houseFlatNo"
          control={control}
          error={errors.houseFlatNo?.message}
          label={strings.address.house_flat_no}
          defaultValue={houseFlatNo}
          onSubmitEditing={() => setFocus('society')}
        />
        <FormInput
          name="society"
          control={control}
          label={strings.address.society}
          defaultValue={society}
          onSubmitEditing={() => setFocus('areaSector')}
        />
        <FormInput
          name="areaSector"
          control={control}
          error={errors.areaSector?.message}
          label={strings.address.area_sector}
          defaultValue={areaSector}
          onSubmitEditing={() => setFocus('landMark')}
        />
        <FormInput
          name="landMark"
          control={control}
          error={errors.landMark?.message}
          label={strings.address.land_mark}
          defaultValue={landMark}
          onSubmitEditing={() => setFocus('city')}
        />
        <FormInput
          name="city"
          control={control}
          error={errors.city?.message}
          label={strings.address.city}
          defaultValue={city}
          onSubmitEditing={() => setFocus('state')}
        />
        <FormInput
          name="state"
          control={control}
          error={errors.state?.message}
          label={strings.address.state}
          defaultValue={state}
          returnKeyType="done"
          blurOnSubmit={true}
        />

        <Button
          containerStyle={styles.saveButtonStyle}
          title={strings.address.save_address}
          type="primary"
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </View>
  );
};

export default AddEditAddressScreen;
