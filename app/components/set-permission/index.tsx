/**
 * Set Permission
 * @format
 */

import React from 'react';
import { View, Modal, TouchableWithoutFeedback, Linking } from 'react-native';

import { Label, Button, Icon } from '@app/components';
import { styles } from './styles';
import { strings } from '@app/strings';

type State = {
  visible: boolean;
  blockedPermissionFor?: 'Camera' | 'Photo';
};

class SetPermission extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { visible: false };
  }

  show = (blockedPermissionFor: State['blockedPermissionFor']) => {
    this.setState({ visible: true, blockedPermissionFor });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  openSetting = async () => {
    await Linking.openSettings();
    this.setState({ visible: false });
  };

  getPermissionStrings(blockedPermissionFor: State['blockedPermissionFor']) {
    if (blockedPermissionFor === 'Camera') {
      return {
        title: strings.permission.blocked_camera_title,
        message: strings.permission.blocked_camera_message,
      };
    }
    if (blockedPermissionFor === 'Photo') {
      return {
        title: strings.permission.blocked_photo_title,
        message: strings.permission.blocked_photo_message,
      };
    }

    return { title: '', message: '' };
  }

  render() {
    const { visible, blockedPermissionFor } = this.state;
    const permission = this.getPermissionStrings(blockedPermissionFor);

    return (
      <Modal
        visible={visible}
        animationType="fade"
        transparent
        statusBarTranslucent
      >
        <View style={styles.container}>
          <Icon
            type="MaterialIcons"
            name="perm-media"
            style={styles.iconStyle}
          />
          <Label style={styles.titleStyle}>{permission.title}</Label>
          <Label style={styles.messageStyle}>{permission.message}</Label>
          <Button
            type="secondary"
            containerStyle={styles.buttonStyle}
            title={strings.common.open_setting}
            onPress={this.openSetting}
          />
        </View>

        <TouchableWithoutFeedback onPress={this.hide}>
          <View style={styles.absoluteFill} />
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export { SetPermission };
