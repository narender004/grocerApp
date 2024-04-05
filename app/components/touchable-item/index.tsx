/**
 * Touchable Item
 * @format
 */

import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableHighlight,
  View,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';

export type TouchableItemProps = {
  pressColor?: string;
  disabled?: boolean | null;
  borderless?: boolean;
  delayPressIn?: number;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

const ANDROID_VERSION_LOLLIPOP = 21;

const TouchableItem = (props: TouchableItemProps) => {
  const { borderless = false, pressColor = 'rgba(0, 0, 0, .32)', style, children, ...rest } = props;

  /*
   * TouchableNativeFeedback.Ripple causes a crash on old Android versions,
   * therefore only enable it on Android Lollipop and above.
   *
   * All touchable on Android should have the ripple effect according to
   * platform design guidelines.
   * We need to pass the background prop to specify a borderless ripple effect.
   */
  if (Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP) {
    return (
      <TouchableNativeFeedback
        {...rest}
        useForeground={TouchableNativeFeedback.canUseNativeForeground()}
        background={TouchableNativeFeedback.Ripple(pressColor, borderless)}
      >
        <View style={style}>{React.Children.only(children)}</View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableHighlight {...rest} style={style}>
      {React.Children.only(children)}
    </TouchableHighlight>
  );
};

export { TouchableItem };
