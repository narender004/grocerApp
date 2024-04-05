/**
 * App loader
 * @format
 */

import React from 'react';
import { View, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';

import { selectLoader } from '@app/modules/common';
import { Label } from '@app/components';
import { styles } from './styles';

const Loader = () => {
  const { id, message } = useSelector(selectLoader) ?? {};

  return (
    <Modal statusBarTranslucent transparent animationType="fade" visible={Boolean(id)}>
      <View style={styles.container}>
        <LottieView
          autoPlay
          loop
          source={require('@app/assets/animation/loading.json')}
          style={styles.lottieStyle}
          hardwareAccelerationAndroid
        />
        <Label style={styles.messageStyle}>{message}</Label>
      </View>
    </Modal>
  );
};

export { Loader };
