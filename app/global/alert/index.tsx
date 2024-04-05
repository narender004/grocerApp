/**
 * Global Alert
 * @format
 */

import React from 'react';
import { View as AnimatedView } from 'react-native-animatable';
import { View, Pressable, BackHandler } from 'react-native';

import { RefHelper } from '@app/utils';
import { strings } from '@app/strings';
import { Label } from '@app/components';
import { styles } from './styles';

const key = 'global-alert';

type Props = {};
type State = {
  visible: boolean;
};
type ButtonType = 'default' | 'success' | 'danger';
type Buttons = Array<{ title: string; type?: ButtonType; onPress: Function }>;

class Alert extends React.Component<Props, State> {
  title: string = '';
  message: string = '';
  buttons: Buttons;

  constructor(props: Props) {
    super(props);
    this.state = { visible: false };
    this.buttons = this.getDefaultButtons();
  }

  componentDidMount() {
    // Add alert reference to global refs
    RefHelper.addRef(key, this);
  }

  onBackPress = () => {
    const { visible } = this.state;
    if (visible) {
      this.hide();
      return true;
    }
    return false;
  };

  componentWillUnmount() {
    RefHelper.removeRef(key);
  }

  getDefaultButtons() {
    return [
      {
        title: strings.common.ok,
        onPress: this.hide,
      },
    ];
  }

  show(title: string, message: string, buttons: Buttons) {
    if (this.state.visible) {
      return;
    }

    this.title = title;
    this.message = typeof message === 'string' ? message : '';
    this.buttons = buttons || this.getDefaultButtons();
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    this.setState({ visible: true });
  }

  hide = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    this.setState({ visible: false });
  };

  shouldShowColumnButtons() {
    return this.buttons?.length > 2;
  }

  renderButton = (label: string, onPress: Function, type: ButtonType = 'default') => {
    return (
      <Pressable
        key={label}
        style={[styles.buttonStyle, this.shouldShowColumnButtons() && styles.columnButtonStyle]}
        onPress={() => {
          this.hide();
          onPress?.();
        }}
      >
        <Label numberOfLines={1} style={[styles.buttonLabelStyle, styles[type]]}>
          {label}
        </Label>
      </Pressable>
    );
  };

  render() {
    const { visible } = this.state;

    if (!visible) {
      return null;
    }

    return (
      <View style={styles.container}>
        <AnimatedView animation="zoomIn" duration={200} style={styles.alertBox}>
          {!!this.title && (
            <Label numberOfLines={2} style={styles.titleStyle}>
              {this.title}
            </Label>
          )}
          {!!this.message && (
            <Label numberOfLines={15} style={styles.messageStyle}>
              {this.message}
            </Label>
          )}

          <View
            style={[
              styles.buttonContainer,
              this.shouldShowColumnButtons() && styles.columnButtonContainer,
            ]}
          >
            {this.buttons?.map(({ title, onPress, type }) => {
              return this.renderButton(title, onPress, type);
            })}
          </View>
        </AnimatedView>
      </View>
    );
  }
}

/**
 * Show alert
 */
export const showAlert = (title: string, message: string, buttons?: Buttons) => {
  const ref = RefHelper.getRef(key);
  // calling function of GlobalAlert class through reference
  ref && ref.show(title, message, buttons);
};

export { Alert };
