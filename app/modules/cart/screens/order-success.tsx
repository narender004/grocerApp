/**
 * Order Success Screen
 * @format
 */

import React from 'react';
import { View, Image } from 'react-native';
import { View as AnimatedView } from 'react-native-animatable';

import { strings } from '@app/strings';
import { Routes } from '@app/navigator';
import { ImageSource } from '@app/common';
import { Header, Label, Button } from '@app/components';
import { OrderSuccessScreenViewNavProps } from '../types';
import { styles } from './styles';

const OrderSuccessScreen = (props: OrderSuccessScreenViewNavProps) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Header safeAreaEnabled centerLogoShown />

      <View style={styles.orderSuccessContainer}>
        <AnimatedView animation="fadeIn">
          <Image
            source={ImageSource.orderConfirmed}
            style={styles.orderConfirmedImgStyle}
          />
        </AnimatedView>
        <Label style={styles.orderSuccessCaptionStyle}>
          {strings.messages.order_placed_caption}
        </Label>
        <Button
          type="outline"
          containerStyle={styles.statusButtonStyle}
          titleStyle={styles.statusButtonTitleStyle}
          title={strings.view_status}
          onPress={() => {
            navigation.navigate(Routes.OrderTab);
          }}
        />
        <Button
          containerStyle={styles.homeButtonStyle}
          title={strings.continue_shopping}
          onPress={() => {
            navigation.navigate(Routes.MainScreen);
          }}
        />
      </View>
    </View>
  );
};

export default OrderSuccessScreen;
