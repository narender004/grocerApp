/**
 * Define types for react native vector icon packages
 * @format
 */

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * Currently react-native-vector-icons not supporting
 * type prop for use different type of icons.
 * In app need to import different type of icons
 * set to use icons from different categories.
 * For overcome this importing, all types of icons
 * importing here and using type (custom prop) to identify
 * target icon set.
 */
const getIconByType = (type: string) => {
  switch (type) {
    case 'MaterialIcons':
      return MaterialIcons;
    case 'Ionicons':
      return Ionicons;
    default:
      return Ionicons;
  }
};

export { getIconByType };
