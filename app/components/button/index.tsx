/**
 * Button
 * @format
 */

import React from 'react';
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';

import { TouchableItem } from '../touchable-item';
import { Label } from '../label';
import { styles } from './styles';

type Props = {
  /**
   * Should show a loading indicator or not.
   */
  loading?: boolean;
  /**
   * Whether the button is disabled.
   */
  disabled?: boolean;

  children?: React.ReactNode;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Title of button
   */
  title: string;
  /**
   * Styles of button.
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Style for the button title.
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * Button Type
   */
  type?: 'primary' | 'secondary' | 'outline';
};

const Button = ({
  containerStyle,
  titleStyle,
  disabled,
  loading,
  children,
  title,
  type = 'primary',
  ...rest
}: Props) => {
  return (
    <TouchableItem
      {...rest}
      style={[
        styles.container,
        type === 'primary' && styles.primaryBackground,
        containerStyle,
        disabled && styles.disableStyle,
      ]}
      disabled={loading || disabled}
    >
      <>
        {(() => {
          if (loading) {
            return <ActivityIndicator />;
          }

          if (children) {
            return children;
          }

          return (
            <Label
              style={[
                styles.titleStyle,
                type === 'primary' && styles.primaryTitleStyle,
                titleStyle,
              ]}
            >
              {title}
            </Label>
          );
        })()}
      </>
    </TouchableItem>
  );
};

export { Button };
