import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

type Props = {
  onWillFocus?: () => void;
  onDidFocus?: () => void;
  onWillBlur?: () => void;
};

const NavigationEvents = ({ onWillFocus, onDidFocus, onWillBlur }: Props) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      if (onWillFocus && typeof onWillFocus === 'function') {
        onWillFocus();
      }
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      if (onWillBlur && typeof onWillBlur === 'function') {
        onWillBlur();
      }
    });

    if (onDidFocus && typeof onDidFocus === 'function') {
      onDidFocus();
    }

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation, onWillFocus, onDidFocus, onWillBlur]);

  return null;
};

export { NavigationEvents };
