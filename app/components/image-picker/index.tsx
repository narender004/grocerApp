/**
 * Image Picker
 * @format
 */

import React from 'react';
import RNImagePicker from 'react-native-image-crop-picker';
import ActionSheet from '@alessiocancian/react-native-actionsheet';

import { strings } from '@app/strings';
import * as PermissionHandler from '@app/utils/permission-handler';
import { showAlert } from '@app/global';
import { SetPermission } from '@app/components/set-permission';
import { Colors } from '@app/styles';

const defaultOptions = {
  cropping: true,
  cropperStatusBarColor: Colors.primary.s600,
  cropperToolbarColor: Colors.primary.brand,
  cropperToolbarWidgetColor: Colors.neutral.white,
  freeStyleCropEnabled: true,
  mediaType: 'photo',
};

type Props = {
  onImagePicked: (image: any) => void;
};

class ImagePicker extends React.Component<Props> {
  static defaultProps = {
    onImagePicked: () => {},
  };

  actionSheetRef;
  blockedPermissionPopupRef;
  pickerOptions: any;

  constructor(props: Props) {
    super(props);

    this.actionSheetRef = React.createRef<ActionSheet>();
    this.blockedPermissionPopupRef = React.createRef<SetPermission>();
    this.pickerOptions = {};
  }

  showImagePicker(options = {}) {
    this.pickerOptions = { ...defaultOptions, ...options };
    this.actionSheetRef.current?.show();
  }

  onSelectOption = async (optionIndex: number) => {
    try {
      let image;

      const isTakePhotoSelected = optionIndex === 0;
      if (isTakePhotoSelected) {
        const cameraPermission = PermissionHandler.permissions.camera;
        const photoPermission = PermissionHandler.permissions.photo;

        const isCameraPermissionBlocked =
          await PermissionHandler.isPermissionBlocked(cameraPermission);
        if (isCameraPermissionBlocked) {
          this.blockedPermissionPopupRef.current?.show('Camera');
          return;
        }

        const isPhotoPermissionBlocked =
          await PermissionHandler.isPermissionBlocked(photoPermission);
        if (isPhotoPermissionBlocked) {
          this.blockedPermissionPopupRef.current?.show('Photo');
          return;
        }

        const result = await PermissionHandler.requestMultiple([
          cameraPermission,
          photoPermission,
        ]);

        if (
          result[cameraPermission] === PermissionHandler.RESULTS.GRANTED &&
          result[photoPermission] === PermissionHandler.RESULTS.GRANTED
        ) {
          image = await RNImagePicker.openCamera(this.pickerOptions);
        }
      }

      const isPickFromGallerySelected = optionIndex === 1;
      if (isPickFromGallerySelected) {
        const permission = PermissionHandler.permissions.photo;
        const isPermissionBlocked = await PermissionHandler.isPermissionBlocked(
          permission,
        );
        if (isPermissionBlocked) {
          this.blockedPermissionPopupRef.current?.show('Photo');
          return;
        }
        await PermissionHandler.request(permission);

        image = await RNImagePicker.openPicker(this.pickerOptions);
      }

      image && this.props.onImagePicked(image);
    } catch (e) {
      if (e.code !== 'E_PICKER_CANCELLED') {
        showAlert('', e.message);
      }
    }
  };

  render() {
    return (
      <>
        <ActionSheet
          ref={this.actionSheetRef}
          theme="ios"
          title={strings.common.select_option}
          options={[
            strings.common.take_photo,
            strings.common.choose_from_gallery,
            strings.common.cancel,
          ]}
          cancelButtonIndex={2}
          onPress={this.onSelectOption}
        />
        <SetPermission ref={this.blockedPermissionPopupRef} />
      </>
    );
  }
}

export { ImagePicker };
