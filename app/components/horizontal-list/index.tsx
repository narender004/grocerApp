import React from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  FlatListProps,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { Icon } from '../icon';
import { Colors, Outlines } from '@app/styles';

type Props = FlatListProps<any> & {};

const HorizontalList = (props: Props) => {
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);
  const flatListRef = React.useRef<FlatList>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentSizeWidth = event.nativeEvent.contentSize.width;
    const layoutMeasurementWidth = event.nativeEvent.layoutMeasurement.width;

    setShowLeftArrow(contentOffsetX > 0);
    setShowRightArrow(
      contentOffsetX < contentSizeWidth - layoutMeasurementWidth - 20,
    );
  };

  const scrollToLeft = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  };

  const scrollToRight = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <View style={styles.container}>
      {showLeftArrow && (
        <TouchableOpacity onPress={scrollToLeft} style={styles.iconContainer}>
          <Icon
            type="Ionicons"
            name="chevron-back-outline"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      )}

      {showRightArrow && (
        <TouchableOpacity
          onPress={scrollToRight}
          style={[styles.iconContainer, styles.rightIconStyle]}
        >
          <Icon
            type="Ionicons"
            name="chevron-forward-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      )}

      <FlatList
        ref={flatListRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        horizontal
        {...props}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    left: '2@ms',
    top: '45%',
    zIndex: 10,
    width: '30@ms',
    height: '30@ms',
    borderRadius: '15@ms',
    backgroundColor: Colors.neutral.s200,
    ...Outlines.shadow.base,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconStyle: {
    left: undefined,
    right: '2@ms',
  },
  iconStyle: {
    fontSize: '22@ms',
    color: Colors.neutral.s700,
  },
});

export { HorizontalList };
