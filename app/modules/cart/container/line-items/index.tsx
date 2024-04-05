/**
 * Line Item
 * @format
 */

import React from 'react';
import { View, Image } from 'react-native';

import { strings } from '@app/strings';
import { ImageSource } from '@app/common';
import { OrderStatus } from '@app/modules/my-order';
import { Label, CacheImage, Price, VariantInfo } from '@app/components';
import { AddToCart } from '@app/modules/shared';
import { styles } from './styles';

type Props = {
  item: any;
  editable?: boolean;
  orderId?: number;
  orderStatusId?: number;
};

const LineItem = (props: Props) => {
  const { item, editable = true, orderId, orderStatusId } = props;
  const {
    productImages,
    salePrice,
    mrp,
    qty,
    name,
    productName,
    stockAvailable,
    size,
    color,
  } = item;
  const { mediumImage } = productImages?.[0] ?? {};

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <CacheImage
          style={styles.imgStyle}
          placeholderSource={ImageSource.placeholderSmall}
          source={{ uri: mediumImage }}
          resizeMode="center"
        />
      </View>
      <View style={styles.rightContent}>
        <Label style={styles.nameStyle}>{name || productName}</Label>
        <VariantInfo color={color?.color} size={size?.size} />
        <Price
          containerStyle={styles.priceContainerStyle}
          mrp={mrp}
          salePrice={salePrice}
          type={2}
        />

        <View style={styles.row}>
          {!stockAvailable === true && (
            <Label style={styles.nameoutofstockStyle}>
              {strings.out_of_stock}
            </Label>
          )}
          {editable && (
            <AddToCart
              containerStyle={styles.addToCartButtonStyle}
              productId={item.productId}
              variantId={item.productVariantId}
            />
          )}
        </View>
        <View style={styles.row}>
          {!editable && (
            <Label style={styles.qtyStyle}>
              {strings.qty}: {qty}
            </Label>
          )}

          {!!orderId && (
            <Label style={[styles.orderIdStyle, styles.gray]}>
              {strings.orderId}:{' '}
              <Label style={styles.orderIdStyle}>#{orderId}</Label>
            </Label>
          )}
        </View>

        {!!orderId && orderStatusId === OrderStatus.delivered && (
          <View style={styles.statusContainer}>
            <Image
              source={ImageSource.deliveredIcon}
              style={styles.deliveredIconStyle}
            />
            <Label style={styles.statusLabelStyle}>{strings.delivered}</Label>
          </View>
        )}
      </View>
    </View>
  );
};

export { LineItem };
