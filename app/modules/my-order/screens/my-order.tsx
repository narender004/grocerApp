/**
 * My Order Screen
 * @format
 */

import React, { useEffect } from 'react';
import { View, Image, FlatList, RefreshControl } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import { Routes } from '@app/navigator';
import { MyOrderViewProps } from '../types';
import { OrderStatus } from '../constants';
import { ImageSource } from '@app/common';
import { getOrders } from '../slice';
import { selectIsGettingOrders, selectOrders } from '../selectors';
import { strings } from '@app/strings';
import { SearchBar, Label, Price, CacheImage, Button } from '@app/components';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const MyOrderScreen = (props: MyOrderViewProps) => {
  const { loading, orders } = props;

  const isScreenFocused = useIsFocused();

  const getData = () => {
    props.getOrders();
  };

  useEffect(() => {
    if (isScreenFocused) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScreenFocused]);

  const renderEmptyPlaceholder = () => {
    return (
      <View style={styles.flexCenterVH}>
        <Image
          source={ImageSource.emptyOrder}
          style={styles.placeholderImgStyle}
        />
      </View>
    );
  };

  const renderOrderItem = ({ item, index }: any) => {
    const { order, orderItems } = item;
    const { orderId, orderDate, orderStatusId } = order;

    const salePriceTotal = orderItems.reduce(
      (acc: any, { salePrice, qty }: any) => acc + salePrice * qty,
      0,
    );
    const mrpPriceTotal = orderItems.reduce(
      (acc: any, { mrp, qty }: any) => acc + mrp * qty,
      0,
    );

    return (
      <View
        style={[
          styles.orderContainer,
          (index + 1) % 2 === 0 && styles.orderContainerEven,
        ]}
      >
        <View style={styles.topContent}>
          <View>
            <Label style={[styles.labelStyle, styles.bold]}>#{orderId}</Label>

            <Label style={[styles.labelStyle, styles.grayLabel]}>
              {strings.order_date}:{' '}
              <Label style={styles.labelStyle}>
                {dayjs(orderDate).format('DD MMM, YYYY')}
              </Label>
            </Label>

            <Label style={[styles.labelStyle, styles.grayLabel]}>
              {strings.order_items}:{' '}
              <Label style={styles.labelStyle}>{orderItems?.length}</Label>
            </Label>

            <View style={styles.priceContainer}>
              <Price price={salePriceTotal} labelStyle={styles.priceStyle} />
              <Price
                price={mrpPriceTotal}
                labelStyle={[styles.priceStyle, styles.mrpPriceStyle]}
              />
            </View>
          </View>

          <View>
            <Label style={styles.savingStyle}>
              {strings.save}{' '}
              <Price
                labelStyle={styles.savingStyle}
                price={mrpPriceTotal - salePriceTotal}
              />
            </Label>

            <Label style={[styles.labelStyle, styles.grayLabel]}>
              {strings.order_status}:{' '}
              <Label style={styles.labelStyle}>
                {OrderStatus[orderStatusId]}
              </Label>
            </Label>
          </View>
        </View>

        <View style={styles.bottomContent}>
          <ScrollView horizontal style={styles.itemImgListStyle}>
            {orderItems?.map((orderItem: any) => (
              <View
                key={`${orderItem.productId}${orderItem.productVariantId}`}
                style={styles.productImgContainer}
              >
                <CacheImage
                  source={{ uri: orderItem.productImages[0]?.mediumImage }}
                  style={styles.productImgStyle}
                  resizeMode="center"
                  placeholderSource={ImageSource.placeholderSmall}
                />
              </View>
            ))}
          </ScrollView>

          <Button
            type="primary"
            title={strings.view_details}
            containerStyle={styles.viewDetailButtonStyle}
            titleStyle={styles.viewDetailLabelStyle}
            onPress={() => {
              props.navigation.navigate(Routes.OrderDetailScreen, { orderId });
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar />

      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        ListEmptyComponent={loading ? null : renderEmptyPlaceholder}
        contentContainerStyle={styles.flatListContentStyle}
        keyExtractor={(item) => item.order.orderId}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getData} />
        }
      />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  loading: selectIsGettingOrders(state),
  orders: selectOrders(state),
});

export default connect(mapStateToProps, { getOrders })(MyOrderScreen);
