/**
 * Update Profile Screen
 * @format
 */

import React, { useRef, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { strings } from '@app/strings';
import { UpdateProfileViewProps, UpdateProfileReq } from '../types';
import { ImageSource } from '@app/common';
import { updateProfileSchema } from '../validation';
import { updateProfile } from '../slice';
import { selectProfile } from '../selectors';
import {
  Button,
  CacheImage,
  TouchableItem,
  Icon,
  ImagePicker,
} from '@app/components';
import { FormInput } from './form-input';
import { styles } from './styles';

const imagePickerOptions = {
  width: 500,
  height: 500,
};

const UpdateProfileScreen = (props: UpdateProfileViewProps) => {
  const { profile } = props;
  const { user, profileImage } = profile ?? {};
  const { userId, firstName, email, mobileNo } = user ?? {};
  const { imageId, mediumImage } = profileImage ?? {};

  const imagePickerRef = useRef<ImagePicker>(null);
  const [pickedImage, setImage] = useState<any>(null);

  const { control, handleSubmit, setFocus } = useForm({
    resolver: yupResolver(updateProfileSchema),
  });

  const onSubmit = (data: UpdateProfileReq) => {
    const { name, email: typedEmail, phone } = data;
    props.updateProfile({
      name,
      email: typedEmail,
      phone,
      userId,
      imageId,
      image: pickedImage,
    });
  };

  const onImagePicked = (image: any) => {
    setImage(image);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={[styles.profileContentContainer, styles.centerAlignContent]}
        >
          <View>
            <CacheImage
              source={{ uri: pickedImage?.path ?? mediumImage }}
              style={styles.userImgStyle}
              placeholderSource={ImageSource.userAvatar}
              loaderShown
            />
            <TouchableItem
              style={[styles.editButton, styles.editButtonBadge]}
              onPress={() => {
                imagePickerRef.current?.showImagePicker(imagePickerOptions);
              }}
            >
              <Icon
                type="MaterialIcons"
                name="edit"
                style={[styles.pencilIconStyle, styles.primaryColor]}
              />
            </TouchableItem>
          </View>
        </View>

        <View style={styles.changePasswordContent}>
          <FormInput
            name="name"
            control={control}
            label={strings.profile.name}
            defaultValue={firstName ?? ''}
            returnKeyType="next"
            onSubmitEditing={() => setFocus('email')}
          />
          <FormInput
            name="email"
            control={control}
            label={strings.profile.email}
            defaultValue={email}
            returnKeyType="next"
            onSubmitEditing={() => setFocus('phone')}
          />
          <FormInput
            name="phone"
            control={control}
            label={strings.profile.phone}
            defaultValue={mobileNo}
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

      <ImagePicker ref={imagePickerRef} onImagePicked={onImagePicked} />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  profile: selectProfile(state),
});

export default connect(mapStateToProps, { updateProfile })(UpdateProfileScreen);
