/**
 * Product Card
 * @format
 */

import React from 'react';
import { View, Pressable, StyleProp, ViewStyle } from 'react-native';

import { NavigationService } from '@app/utils';
import { Routes } from '@app/navigator';
import { ImageSource } from '@app/common';
import { getDefaultVariant } from '@app/utils';
import { CacheImage, Label, Price } from '@app/components';
import { VariantPicker, AddToCart } from '@app/modules/shared';
import { styles } from './styles';
import { strings } from '@app/strings';
import { Text } from 'react-native-animatable';

type Props = {
  item: any;
  containerStyle?: StyleProp<ViewStyle>;
};

type State = {
  selectedVariant: any;
};

class ProductCard extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { selectedVariant: undefined };

    if (props.item?.productVariants?.length) {
      const defaultSelectedVariant = getDefaultVariant(
        props.item.productVariants,
      );

      this.state = { selectedVariant: defaultSelectedVariant };
    }
  }

  onChangeVariant = (variant: any) => {
    this.setState({ selectedVariant: variant });
  };

  render() {
    const { selectedVariant } = this.state;

    const { item, containerStyle } = this.props;
    const { product, images, productVariants } = item;

    // Preference - variant image => product image
    const { mediumImage } = selectedVariant?.images?.[0] ?? images?.[0] ?? {};
    const { productId, name, mrp, salePrice, stockAvailable } =
      selectedVariant?.productVariant ?? product;

    return (
      <Pressable
        style={[styles.container, containerStyle]}
        onPress={() => {
          NavigationService.navigate(Routes.ProductDetailScreen, {
            productId,
            selectedVariant,
          });
        }}
      >
        <>
          <View style={styles.productImgContainer}>
            <CacheImage
              source={{ uri: mediumImage }}
              style={styles.productImgStyle}
              resizeMode="contain"
              loaderShown
              placeholderSource={ImageSource.placeholderSmall}
            />
          </View>

          <View style={styles.content}>
            <Label numberOfLines={1} style={styles.nameLabelStyle}>
              {name}
            </Label>

            {/* Variant picker */}
            {Boolean(selectedVariant) && (
              <VariantPicker
                variants={productVariants}
                selectedVariant={selectedVariant}
                onChangeVariant={this.onChangeVariant}
              />
            )}

            <Price
              containerStyle={styles.priceContainer}
              type={2}
              mrp={mrp}
              salePrice={salePrice}
            />
          </View>

          {stockAvailable === true ? (
            <AddToCart
              containerStyle={styles.addToCartButtonStyle}
              productId={product?.productId}
              variantId={selectedVariant?.productVariant?.productVariantId}
            />
          ) : (
            <Text style={styles.nameoutofstockStyle}>
              {strings.out_of_stock}
            </Text>
          )}
        </>
      </Pressable>
    );
  }
}

export { ProductCard };
