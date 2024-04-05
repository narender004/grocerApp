/**
 * Cart Screen
 * @format
 */

import React from 'react';
import { View, FlatList, Image, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

import { Routes } from '@app/navigator';
import { CartViewProps } from '../types';
import {
  getCart,
  getCoupons,
  updateCart,
  tryCoupon,
  removeAppliedCoupon,
} from '../slice';
import {
  selectCartItems,
  selectCoupons,
  selectAppliedCoupon,
  selectPrices,
  selectIsGettingItems,
} from '../selectors';
import { strings } from '@app/strings';
import { ImageSource } from '@app/common';
import {
  Header,
  SearchBar,
  Label,
  Price,
  Button,
  Icon,
  LoadingGate,
  NavigationEvents,
} from '@app/components';
import { LineItem, PaymentDetail, StickyFooter } from '../container';
import { styles } from './styles';

class CartScreen extends React.Component<CartViewProps> {
  getData = () => {
    this.props.getCart();
    this.props.getCoupons();
  };

  applyCoupon(coupon: Object) {
    this.props.tryCoupon({ coupon });
  }

  getItemsCount() {
    return this.props.cart?.length;
  }

  renderHeader = () => {
    return (
      <View style={styles.listHeader}>
        <View style={styles.row}>
          <Label style={styles.headerLabelStyle}>{strings.my_basket}</Label>
          <Label
            style={styles.headerTotalItemStyle}
          >{` (${this.getItemsCount()} ${strings.items})`}</Label>
        </View>

        <Price
          labelStyle={[styles.headerLabelStyle, styles.headerTotalAmountStyle]}
          price={this.props.cartPrices.SalePriceTotal.toFixed(2)}
        />
      </View>
    );
  };

  renderCartItem = ({ item }: any) => {
    return <LineItem item={item} updateCart={this.props.updateCart} />;
  };

  renderDiscounts = () => {
    const { coupons, appliedCoupon } = this.props;
    if (!coupons?.length) {
      return null;
    }

    return (
      <View style={styles.couponsContainer}>
        <View style={styles.couponHeaderStyle}>
          <Label style={styles.couponHeaderLabel}>
            {strings.coupon_for_you.toUpperCase()}
          </Label>
        </View>

        {coupons?.map((item) => {
          const {
            discountId,
            code,
            maxDiscountAmount,
            minimumPurchaseValue,
            value,
            discountType,
            discountDescription,
          } = item;

          const isApplied = discountId === appliedCoupon?.discountId;

          return (
            <View key={code} style={styles.couponItemContainer}>
              <View style={styles.leftCouponContainer}>
                <Label style={styles.couponStyle}>{code}</Label>
                <Label style={styles.couponDescStyle}>
                  {discountType == 1
                    ? minimumPurchaseValue > 0
                      ? `Get ${value}% off (max ${maxDiscountAmount}rs) on spend ${minimumPurchaseValue}rs`
                      : `Get ${value}% off (max ${maxDiscountAmount}rs)`
                    : `${discountDescription}`}
                </Label>
              </View>

              <Button
                type="outline"
                disabled={isApplied}
                title={isApplied ? strings.applied : strings.apply}
                containerStyle={[
                  styles.couponButtonStyle,
                  isApplied && styles.appliedCouponButtonStyle,
                ]}
                titleStyle={styles.couponButtonTitleStyle}
                onPress={() => this.applyCoupon(item)}
              />
              {isApplied && (
                <Icon
                  name="close-circle"
                  type="Ionicons"
                  onPress={this.props.removeAppliedCoupon}
                  style={styles.couponRemoveIcon}
                />
              )}
            </View>
          );
        })}
      </View>
    );
  };

  renderFooter = () => {
    return (
      <>
        {this.renderDiscounts()}
        <View style={styles.footerContainer}>
          <PaymentDetail />
        </View>
      </>
    );
  };

  renderStickFooter() {
    const { navigation } = this.props;

    return (
      <StickyFooter
        buttonTitle={strings.place_order}
        onPressButton={() => {
          navigation.navigate(Routes.PaymentScreen);
        }}
      />
    );
  }

  renderEmptyPlaceholder = () => {
    return (
      <View style={styles.flexCenterVH}>
        <Image
          source={ImageSource.emptyCart}
          style={styles.placeholderImgStyle}
        />
      </View>
    );
  };

  render() {
    const { cart, loading } = this.props;
    const hasItems = Boolean(cart?.length);

    return (
      <View style={styles.container}>
        <Header safeAreaEnabled canGoBack title={strings.header.my_cart} />
        <SearchBar />

        <LoadingGate loading={loading}>
          <>
            <FlatList
              data={cart}
              renderItem={this.renderCartItem}
              ListEmptyComponent={this.renderEmptyPlaceholder}
              ListHeaderComponent={hasItems ? this.renderHeader : null}
              ListFooterComponent={hasItems ? this.renderFooter : null}
              contentContainerStyle={styles.flatListContentStyle}
              ListFooterComponentStyle={styles.listFooterStyle}
              keyExtractor={(item) =>
                `${item.productId}${item.productVariantId}`
              }
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={this.getData} />
              }
            />

            {hasItems && this.renderStickFooter()}
          </>
        </LoadingGate>

        <NavigationEvents onWillFocus={this.getData} />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  cart: selectCartItems(state),
  coupons: selectCoupons(state),
  appliedCoupon: selectAppliedCoupon(state),
  cartPrices: selectPrices(state),
  loading: selectIsGettingItems(state),
});

export default connect(mapStateToProps, {
  getCart,
  getCoupons,
  updateCart,
  tryCoupon,
  removeAppliedCoupon,
})(CartScreen);
