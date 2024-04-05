/**
 * My Profile Screen
 * @format
 */

import React, { useEffect } from 'react';
import { View, Pressable, ScrollView, Linking } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { connect } from 'react-redux';

import { TERMS_URL } from '@app/config';
import { Routes } from '@app/navigator';
import { strings } from '@app/strings';
import { ImageSource } from '@app/common';
import { MyProfileViewProps } from '../types';
import { logout } from '@app/modules/common';
import { getMyProfile } from '../slice';
import { selectProfile } from '../selectors';
import {
  Label,
  Icon,
  CacheImage,
  TouchableItem,
  LoadingGate,
} from '@app/components';
import { styles } from './styles';

const MyProfileScreen = (props: MyProfileViewProps) => {
  const { profile, navigation } = props;
  const { user, profileImage } = profile ?? {};
  const { firstName, mobileNo } = user ?? {};
  const userImage = profileImage?.mediumImage;

  const isScreenFocused = useIsFocused();

  useEffect(() => {
    if (isScreenFocused) {
      props.getMyProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScreenFocused]);

  const renderLink = (title: string, cb: () => void) => {
    return (
      <Pressable style={styles.linkContainer} onPress={cb}>
        <Label style={styles.linkLabelStyle}>{title}</Label>
        <Icon
          type="Ionicons"
          name="chevron-forward"
          style={styles.arrowIconStyle}
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <LoadingGate loading={!user}>
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <View style={styles.profileContentContainer}>
            <CacheImage
              source={{ uri: userImage }}
              style={styles.userImgStyle}
              placeholderSource={ImageSource.userAvatar}
              loaderShown
            />

            <View style={styles.profileInfo}>
              <Label style={styles.nameStyle}>{firstName}</Label>
              <Label style={styles.phnStyle}>
                <Icon
                  type="Ionicons"
                  name="call-outline"
                  style={styles.phnIconStyle}
                />{' '}
                {mobileNo ?? strings.profile.mobile_no}
              </Label>
            </View>

            <TouchableItem
              style={styles.editButton}
              onPress={() => {
                navigation.navigate(Routes.UpdateProfileScreen);
              }}
            >
              <Icon
                type="MaterialIcons"
                name="edit"
                style={styles.pencilIconStyle}
              />
            </TouchableItem>
          </View>

          {renderLink(strings.profile.add_edit_address, () => {
            navigation.navigate(Routes.AddressListScreen);
          })}

          {/* {renderLink(strings.profile.terms_and_condition, () => {
            Linking.openURL(TERMS_URL);å
          })} */}

          {renderLink(strings.profile.logout, () => {
            props.logout();
          })}
        </ScrollView>
      </LoadingGate>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  profile: selectProfile(state),
});

export default connect(mapStateToProps, { getMyProfile, logout })(
  MyProfileScreen,
);
