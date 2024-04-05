/**
 * Product list screen
 * @format
 */

import React, { useRef } from 'react';
import { View, FlatList, Image, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

import { ProductListViewProps } from '../types';
import { getProducts } from '../slice';
import { selectIsGettingProducts, selectProducts } from '../selectors';
import { ImageSource } from '@app/common';
import { SearchBar, LoadingGate } from '@app/components';
import { ProductCard, CategoryTabs } from '@app/modules/shared';
import { styles } from './styles';

const ProductListScreen = (props: ProductListViewProps) => {
  const { loading, products, route } = props;
  const categoryId = route.params?.categoryId;
  const currentSelectedId = useRef<number>(categoryId);

  const renderEmptyPlaceholder = () => {
    return (
      <View style={styles.emptyPlaceholderContainer}>
        <Image
          source={ImageSource.emptyProduct}
          style={styles.placeholderImgStyle}
        />
      </View>
    );
  };

  const getData = (id: number) => {
    currentSelectedId.current = id;
    props.getProducts({ categoryId: id });
  };

  const refreshData = () => {
    props.getProducts({ categoryId: currentSelectedId.current });
  };

  return (
    <View style={styles.container}>
      <SearchBar />
      <CategoryTabs parentCategoryId={categoryId} onChangeCategory={getData} />

      <LoadingGate loading={loading}>
        <FlatList
          data={products}
          numColumns={2}
          contentContainerStyle={styles.productListContentStyle}
          renderItem={({ item }) => {
            return (
              <ProductCard
                containerStyle={styles.productCardStyle}
                item={item}
              />
            );
          }}
          keyExtractor={(item) => item.product?.productId}
          ListEmptyComponent={renderEmptyPlaceholder}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={refreshData} />
          }
        />
      </LoadingGate>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  loading: selectIsGettingProducts(state),
  products: selectProducts(state),
});

export default connect(mapStateToProps, { getProducts })(ProductListScreen);
