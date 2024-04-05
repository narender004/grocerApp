/**
 * Payment Screen
 * @format
 */

import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { strings } from '@app/strings';
import { Routes } from '@app/navigator';
import { PaymentViewProps } from '../types';
import { submitOrder } from '../slice';
import { getAddresses } from '@app/modules/user-address';
import { selectCartItems } from '../selectors';
import { selectAddresses } from '@app/modules/user-address';
import { Header, Label, TouchableItem, AddressItem } from '@app/components';
import { LineItem, PaymentDetail, StickyFooter } from '../container';
import { styles } from './styles';

class PaymentScreen extends React.Component<PaymentViewProps> {
  componentDidMount() {
    this.props.getAddresses();
  }

  getAddressId = () => {
    const { route, addresses } = this.props;
    return route.params?.addressId ?? addresses?.[0]?.addressId;
  };

  onPressSubmit = () => {
    const addressId = this.getAddressId();
    this.props.submitOrder({ addressId });
  };

  renderAddress(addressId: number) {
    const { addresses, navigation } = this.props;
    const address = addresses?.find((item) => item.addressId === addressId);

    return (
      <AddressItem
        item={address}
        showChangeButton
        containerStyle={styles.addressCardStyle}
        onPressChange={() => {
          navigation.navigate(Routes.AddressListScreen, {
            selectionMode: true,
          });
        }}
      />
    );
  }

  renderHeader = () => {
    const addressId = this.getAddressId();

    return (
      <View style={styles.addressHeader}>
        <Label style={styles.deliveryLabelStyle}>
          {strings.select_delivery_address}
        </Label>
        {!addressId && (
          <TouchableItem
            style={styles.addAddressButton}
            onPress={() => {
              this.props.navigation.navigate(Routes.AddEditAddressScreen);
            }}
          >
            <Label style={styles.addAddressLabel}>{strings.add_address}</Label>
          </TouchableItem>
        )}

        {addressId && this.renderAddress(addressId)}
      </View>
    );
  };

  renderCartItem = ({ item }: any) => {
    return <LineItem item={item} editable={false} />;
  };

  renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <PaymentDetail />
      </View>
    );
  };

  renderStickFooter() {
    const addressId = this.getAddressId();

    return (
      <StickyFooter
        buttonTitle={strings.submit_order}
        disabled={!addressId}
        onPressButton={this.onPressSubmit}
      />
    );
  }

  render() {
    const { cart } = this.props;

    return (
      <View style={styles.container}>
        <Header safeAreaEnabled canGoBack centerLogoShown />

        <FlatList
          data={cart}
          renderItem={this.renderCartItem}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          contentContainerStyle={styles.flatListContentStyle}
          ListFooterComponentStyle={styles.listFooterStyle}
          keyExtractor={(item) => `${item.productId}${item.productVariantId}`}
        />

        {this.renderStickFooter()}
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  cart: selectCartItems(state),
  addresses: selectAddresses(state),
});

export default connect(mapStateToProps, { submitOrder, getAddresses })(
  PaymentScreen,
);
