/**
 * Images Slider
 * @format
 */

import React from 'react';
import { TouchableWithoutFeedback, Image } from 'react-native';
import Swiper, { SwiperProps } from 'react-native-swiper';
import { FastImageProps } from 'react-native-fast-image';

import { ImageSource } from '@app/common';
import { CacheImage } from '@app/components/cache-image';
import { Colors } from '@app/styles';
import { styles } from './styles';

type Props = SwiperProps & {
  images: Array<string>;
  resizeMode?: FastImageProps['resizeMode'];
  onPress?: (index: number, type: number) => void;
  type: number;
};

const ImagesSlider = (props: Props) => {
  const { images, resizeMode, onPress, type, ...rest } = props;

  if (!images?.length) {
    // Placeholder in case of not have any image for slider
    return (
      <Image
        source={ImageSource.placeholderLarge}
        style={[styles.imageStyle, { resizeMode }]}
      />
    );
  }

  return (
    <Swiper
      style={styles.swiperStyle}
      autoplay
      dotColor={Colors.neutral.s400}
      activeDotColor={Colors.primary.brand}
      paginationStyle={styles.paginationStyle}
      removeClippedSubviews={false}
      {...rest}
    >
      {images.map((image, index) => (
        <TouchableWithoutFeedback
          key={index + image}
          onPress={() => onPress?.(index, type)}
        >
          <CacheImage
            loaderShown
            loaderProps={{ size: 'large' }}
            placeholderSource={ImageSource.placeholderLarge}
            source={{ uri: image }}
            style={styles.imageStyle}
            resizeMode={resizeMode}
          />
        </TouchableWithoutFeedback>
      ))}
    </Swiper>
  );
};

export { ImagesSlider };
