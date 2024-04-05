/**
 * Product detail screen
 * @format
 */

import React, { useEffect, useState, useRef } from 'react';
import { View, ScrollView, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { connect } from 'react-redux';

import { getDefaultVariant } from '@app/utils';
import { strings } from '@app/strings';
import { ProductDetailViewProps } from '../types';
import { getProductDetail } from '../slice';
import { selectProductDetail } from '../selectors';
import {
  SearchBar,
  LoadingGate,
  ImagesSlider,
  Label,
  Price,
  HeaderButton,
  Icon,
  CacheImage,
  SizedBox,
} from '@app/components';
import { VariantPicker, AddToCart } from '@app/modules/shared';
import { styles } from './styles';

const ProductDetailScreen = (props: ProductDetailViewProps) => {
  const { productDetail, route } = props;

  const [selectedVariant, onChangeVariant] = useState(
    route.params?.selectedVariant,
  );

  const {
    product,
    images: productImages,
    productVariants,
  } = productDetail ?? {};
  const { images: variantImages } = selectedVariant ?? {};

  // Preference - variant image => product image
  const images = variantImages?.length ? variantImages : productImages;

  const { name, mrp, salePrice, description, stockAvailable } =
    selectedVariant?.productVariant ?? product ?? {};

  const [imageViewerVisible, setImageViewerVisibility] = useState(false);
  const pressedImageIndex = useRef(0);

  useEffect(() => {
    props.getProductDetail({ productId: route.params?.productId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // if both id's are not same its mean old data still present
    if (route.params?.productId !== product?.productId) {
      return;
    }
    if (productVariants?.length > 0 && !selectedVariant) {
      // Set default variant
      onChangeVariant(getDefaultVariant(productVariants));
    }
  }, [productVariants, selectedVariant, route, product]);

  return (
    <View style={styles.container}>
      <SearchBar />

      <LoadingGate loading={!product}>
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <ImagesSlider
            images={images?.map((image: any) => image?.mediumImage)}
            resizeMode="center"
            containerStyle={styles.sliderStyle}
            onPress={(index) => {
              pressedImageIndex.current = index;
              setImageViewerVisibility(true);
            }}
            autoplay={false}
            loop={false}
          />

          <View style={styles.content}>
            <Label style={styles.nameStyle}>{name}</Label>
            <Price
              containerStyle={styles.priceContainer}
              labelStyle={styles.priceStyle}
              mrp={mrp}
              salePrice={salePrice}
            />

            {Boolean(selectedVariant) && (
              <>
                <SizedBox height={10} />
                <VariantPicker
                  variants={productVariants}
                  onChangeVariant={onChangeVariant}
                  selectedVariant={selectedVariant}
                  expanded
                  hideLabel
                />
                <SizedBox height={10} />
              </>
            )}
            {stockAvailable === true ? (
              <AddToCart
                productId={product?.productId}
                variantId={selectedVariant?.productVariant?.productVariantId}
              />
            ) : (
              <Label style={styles.nameoutofstockStyle}>
                {strings.out_of_stock}
              </Label>
            )}

            <Label style={styles.quickOverStyle}>
              {strings.quick_overview}
            </Label>
            <Label style={styles.descStyle}>{description}</Label>
          </View>
        </ScrollView>
      </LoadingGate>

      <Modal visible={imageViewerVisible} transparent>
        <ImageViewer
          onCancel={() => setImageViewerVisibility(false)}
          enableSwipeDown={true}
          index={pressedImageIndex.current}
          imageUrls={images?.map((image: any) => ({ url: image?.mediumImage }))}
          renderImage={(params) => <CacheImage {...params} />}
          renderHeader={() => (
            <HeaderButton
              style={styles.closeIconContainer}
              onPress={() => setImageViewerVisibility(false)}
            >
              <Icon
                name="close-sharp"
                type="Ionicons"
                style={styles.closeIconStyle}
              />
            </HeaderButton>
          )}
        />
      </Modal>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  productDetail: selectProductDetail(state),
});

export default connect(mapStateToProps, { getProductDetail })(
  ProductDetailScreen,
);
