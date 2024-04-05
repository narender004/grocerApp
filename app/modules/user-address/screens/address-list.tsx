/**
 * Address List Screen
 * @format
 */

import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';

import { Routes } from '@app/navigator';
import { ImageSource } from '@app/common';
import { AddressListViewProps, AddressListState } from '../types';
import { getAddresses } from '../slice';
import { selectAddresses, selectIsGettingAddress } from '../selectors';
import {
  Header,
  LoadingGate,
  AddressItem,
  Icon,
  TouchableItem,
} from '@app/components';
import { styles } from './styles';
import { strings } from '@app/strings';

class AddressListScreen extends React.Component<
  AddressListViewProps,
  AddressListState
> {
  constructor(props: AddressListViewProps) {
    super(props);
    const isSelectionMode = Boolean(this.props.route.params?.selectionMode);
    this.state = {
      selectionMode: isSelectionMode,
      selectedIndex: isSelectionMode ? 0 : -1,
    };
  }

  componentDidMount() {
    this.props.getAddresses();
  }

  onPressAddress(index: number) {
    this.setState({ selectedIndex: index });
  }

  renderAddress = ({ item, index }: any) => {
    const { selectedIndex, selectionMode } = this.state;
    const { navigation } = this.props;

    return (
      <AddressItem
        containerStyle={styles.addressCardStyle}
        item={item}
        onPress={selectionMode ? () => this.onPressAddress(index) : undefined}
        showEditButton
        onPressEdit={() => {
          navigation.navigate(Routes.AddEditAddressScreen, {
            addressId: item.addressId,
          });
        }}
        selected={index === selectedIndex}
        onPressDeliver={() => {
          navigation.navigate(Routes.PaymentScreen, {
            addressId: item.addressId,
          });
        }}
      />
    );
  };

  renderEmptyPlaceholder = () => {
    return (
      <View style={styles.emptyPlaceholderContainer}>
        <Image
          source={ImageSource.emptyAddress}
          style={styles.placeholderImgStyle}
        />
      </View>
    );
  };

  render() {
    const { loading, addresses, navigation } = this.props;
    const { selectedIndex } = this.state;

    return (
      <View style={styles.container}>
        <Header safeAreaEnabled canGoBack title={strings.header.my_address} />
        <LoadingGate loading={loading}>
          <FlatList
            data={addresses}
            renderItem={this.renderAddress}
            keyExtractor={(item) => item?.addressId}
            contentContainerStyle={styles.listStyle}
            extraData={selectedIndex}
            ListEmptyComponent={this.renderEmptyPlaceholder}
          />
        </LoadingGate>

        <TouchableItem
          style={styles.addButtonStyle}
          onPress={() => {
            navigation.navigate(Routes.AddEditAddressScreen);
          }}
        >
          <Icon type="Ionicons" name="add" style={styles.addIconStyle} />
        </TouchableItem>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  loading: selectIsGettingAddress(state),
  addresses: selectAddresses(state),
});

export default connect(mapStateToProps, {
  getAddresses,
})(AddressListScreen);
