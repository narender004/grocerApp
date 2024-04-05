/**
 * Variant Picker
 * @format
 */

import React, { useRef } from 'react';
import { View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import { strings } from '@app/strings';
import { Label, Icon, SizedBox, Radio, Price } from '@app/components';
import { VariantPickerSheet } from './variant-picker-sheet';
import { styles } from './styles';

type Props = {
  expanded?: boolean;
  hideLabel?: boolean;
  variants: Array<any>;
  selectedVariant: any;
  containerStyle?: StyleProp<ViewStyle>;
  onChangeVariant: Function;
};

const VariantPicker = (props: Props) => {
  const bottomSheetRef = useRef<any>(null);

  const {
    containerStyle,
    variants,
    selectedVariant,
    onChangeVariant,
    expanded,
    hideLabel,
  } = props;

  if (!selectedVariant) {
    return null;
  }

  const {
    color: selectedColor,
    size: selectedSize,
    productVariant,
  } = selectedVariant;
  const { name } = productVariant;

  // Color variants
  const colors = variants
    .map((variant) => variant.color?.color)
    .filter(Boolean)
    .filter((value, index, item) => item.indexOf(value) === index);

  // Size variants
  const sizes = variants
    .map((variant) => variant.size?.size)
    .filter(Boolean)
    .filter((value, index, item) => item.indexOf(value) === index);

  // Extend view of picker
  const renderExtendedView = () => {
    return (
      <>
        {/* Show colors only when there is option to choose */}
        {colors.length > 1 && (
          <>
            {hideLabel !== true && (
              <Label style={styles.headingStyle}>
                {strings.choose_a_color}
              </Label>
            )}
            <View style={styles.colorsContainer}>
              {colors.map((value) => {
                let colorVariant = variants.find(
                  (variant) =>
                    variant.size.size === selectedSize.size &&
                    value === variant.color?.color &&
                    variant.productVariant.stockAvailable,
                );
                // If match not found find nearest according to color
                if (!colorVariant) {
                  colorVariant = variants.find(
                    (variant) =>
                      value === variant.color?.color &&
                      variant.productVariant.stockAvailable,
                  );
                }

                return (
                  <TouchableOpacity
                    key={value}
                    style={styles.colorBoxOuter}
                    disabled={selectedColor.color === value}
                    onPress={() => onChangeVariant(colorVariant)}
                  >
                    <>
                      <View
                        style={[
                          styles.colorBoxInner,
                          selectedColor.color === value &&
                            styles.selectedColorBoxStyle,
                          { backgroundColor: value },
                        ]}
                      />
                    </>
                  </TouchableOpacity>
                );
              })}
            </View>
            <SizedBox height={hideLabel ? 10 : 20} />
          </>
        )}

        {/* Show sizes only when there is option to choose */}
        {sizes.length > 1 && (
          <>
            {hideLabel !== true && (
              <Label style={styles.headingStyle}>{strings.choose_a_size}</Label>
            )}
            {sizes.map((size) => {
              let sizeVariant = variants.find(
                (variant) =>
                  variant.size.size === size &&
                  selectedColor?.color === variant.color?.color,
              );

              const isVariantExist = sizeVariant;

              const isOutOfStock =
                isVariantExist &&
                sizeVariant.productVariant.stockAvailable === false;

              const { mrp, salePrice } = sizeVariant?.productVariant || {};

              return (
                <TouchableOpacity
                  key={size}
                  style={styles.sizeBoxStyle}
                  disabled={!isVariantExist}
                  onPress={() => onChangeVariant(sizeVariant)}
                >
                  <>
                    <View>
                      <Label>{size}</Label>
                      {/* If there is not any color choice we can display price */}
                      {colors.length <= 1 && (
                        <Price
                          mrp={mrp}
                          salePrice={salePrice}
                          showDiscount={false}
                        />
                      )}
                    </View>

                    <View style={styles.rightAligned}>
                      {!isVariantExist && (
                        <Label style={styles.outOfStockStyle}>
                          {strings.not_available}
                        </Label>
                      )}

                      {isOutOfStock && (
                        <Label style={styles.outOfStockStyle}>
                          {strings.out_of_stock}
                        </Label>
                      )}

                      <Radio
                        containerStyle={styles.radioButtonStyle}
                        selected={size === selectedSize.size}
                      />
                    </View>
                  </>
                </TouchableOpacity>
              );
            })}
          </>
        )}
      </>
    );
  };

  if (expanded) {
    return renderExtendedView();
  }

  return (
    <>
      {/* Picker button */}
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        disabled={colors.length < 2 && sizes.length < 2}
        onPress={() => {
          bottomSheetRef.current?.show();
        }}
      >
        <>
          {selectedColor.color != null && (
            <View
              style={[
                styles.colorBoxStyle,
                { backgroundColor: selectedColor.color },
              ]}
            />
          )}

          {selectedSize.size != null && (
            <Label numberOfLines={1} style={styles.sizeLabelStyle}>
              {`${selectedSize.size} - `}
            </Label>
          )}

          <Label numberOfLines={1} style={styles.nameLabelStyle}>
            {name}
          </Label>

          <Icon
            type="Ionicons"
            name="chevron-down"
            style={styles.arrowIconStyle}
          />
        </>
      </TouchableOpacity>

      <VariantPickerSheet
        sheetRef={bottomSheetRef}
        renderContent={renderExtendedView}
        selectedVariant={selectedVariant}
        onPressDone={() => {
          bottomSheetRef.current?.hide();
        }}
      />
    </>
  );
};

export { VariantPicker };
