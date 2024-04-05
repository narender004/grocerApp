/**
 * Cache Image Component
 * @format
 */

import React, { useState } from 'react';
import { Image, ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';

import { Colors } from '@app/styles';
import { styles } from './styles';

// Types
type Props = FastImageProps & {
  placeholderSource?: number;
  loaderShown?: boolean;
  loaderProps?: ActivityIndicatorProps;
};

const CacheImage = (props: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const { placeholderSource, loaderShown, source, loaderProps, style, onLoadEnd, ...rest } = props;

  const _onLoadEnd = () => {
    setLoading(false);
    onLoadEnd?.();
  };

  return (
    <FastImage
      source={source}
      style={style}
      onLoadStart={() => setLoading(true)}
      onLoad={() => setImageLoaded(true)}
      onLoadEnd={_onLoadEnd}
      {...rest}
    >
      {!imageLoaded && placeholderSource && (
        <Image source={placeholderSource} style={styles.placeholderImageStyle} />
      )}

      {loading && loaderShown && (
        <ActivityIndicator
          style={styles.loaderStyle}
          color={Colors.primary.brand}
          {...loaderProps}
        />
      )}
    </FastImage>
  );
};

export { CacheImage };
