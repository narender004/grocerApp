/**
 * Auth Container
 * @format
 */

import React from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

import { ImageSource } from '@app/common';
import { Label } from '@app/components';
import { gradient } from '@app/styles/colors';
import { styles } from './styles';
import { strings } from '@app/strings';
import useKeyboardVisibility from '@app/hook/use-keyboard-hook';

interface Props {
  children: React.ReactNode;
  headerProps: { title: string; canGoBack?: boolean };
}

const AuthContainer = ({ children }: Props) => {
  const { visible, height } = useKeyboardVisibility();

  return (
    <>
      <LinearGradient
        colors={gradient.login}
        style={styles.fillGradient}
        useAngle
        angle={110}
      />

      <SafeAreaView style={styles.container} edges={['bottom']}>
        <KeyboardAwareScrollView
          enableOnAndroid={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.flexGrow1}
        >
          <View style={[styles.authBgContainer]}>
            <Image source={ImageSource.authBg} style={styles.authBgStyle} />
            <Image source={ImageSource.logo} style={styles.logoStyle} />
          </View>
          <Label style={styles.appNameStyle}>{strings.common.appName}</Label>
          <Label style={styles.headlineStyle}>{strings.common.headline}</Label>

          <View
            style={[styles.contentStyle, visible && { paddingBottom: height }]}
          >
            {children}
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export { AuthContainer };
