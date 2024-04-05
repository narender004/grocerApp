/**
 * Address Item
 * @format
 */

import React from 'react';
import { View, StyleProp, ViewStyle, Pressable } from 'react-native';

import { strings } from '@app/strings';
import { Label } from '@app/components/label';
import { TouchableItem } from '@app/components/touchable-item';
import { styles } from './styles';

type Props = {
  item: {
    contactPerson: string;
    contactNo: string;
    houseFlatNo: string;
    society: string;
    areaSector: string;
    city: string;
    state: string;
    pinCode: string;
    landMark: string;
  } | null;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  showChangeButton?: boolean;
  onPressChange?: () => void;
  showEditButton?: boolean;
  onPressEdit?: () => void;
  onPressDeliver?: () => void;
  selected?: boolean;
};

const AddressItem = (props: Props) => {
  const {
    item,
    containerStyle,
    onPress,
    showChangeButton,
    onPressChange,
    showEditButton,
    onPressEdit,
    onPressDeliver,
    selected,
  } = props;
  const {
    contactPerson,
    landMark,
    areaSector,
    city,
    state,
    pinCode,
    contactNo,
  } = item ?? {};

  const renderChangeButton = () => {
    return (
      <TouchableItem style={styles.buttonStyle} onPress={onPressChange}>
        <Label style={styles.buttonLabelStyle}>{strings.change}</Label>
      </TouchableItem>
    );
  };

  const renderEditButton = () => {
    return (
      <TouchableItem style={styles.buttonStyle} onPress={onPressEdit}>
        <Label style={styles.buttonLabelStyle}>{strings.edit}</Label>
      </TouchableItem>
    );
  };

  const renderDeliverButton = () => {
    return (
      <TouchableItem
        style={[styles.deliverButtonStyle]}
        onPress={onPressDeliver}
      >
        <Label style={styles.deliverLabelStyle}>{strings.deliver_here}</Label>
      </TouchableItem>
    );
  };

  return (
    <Pressable
      style={[
        styles.container,
        selected && styles.selectedContainer,
        containerStyle,
      ]}
      disabled={!onPress}
      onPress={onPress}
    >
      <>
        <View style={styles.content}>
          <Label style={styles.nameStyle}>{contactPerson}</Label>
          <Label style={styles.labelStyle}>{areaSector},</Label>
          <Label style={styles.labelStyle}>{landMark},</Label>
          <Label style={styles.labelStyle}>
            {pinCode} - {city}, {state}
          </Label>
          <Label style={styles.labelStyle}>{contactNo}</Label>

          {showChangeButton && renderChangeButton()}

          {showEditButton && renderEditButton()}
        </View>

        {selected && renderDeliverButton()}
      </>
    </Pressable>
  );
};

export { AddressItem };
