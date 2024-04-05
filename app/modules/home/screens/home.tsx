/**
 * Home Screen
 * @format
 */

import React from 'react';
import { View, FlatList, Pressable, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

import { SourceType } from '@app/common';
import { Routes } from '@app/navigator';
import { strings } from '@app/strings';
import { HomeViewProps } from '../types';
import {
  getBanners,
  getBanners2,
  getCategories,
  getHomeProducts,
} from '../slice';
import {
  selectBanners,
  selectBanners2,
  selectHomeCategories,
  selectHomeProducts,
} from '../selectors';
import {
  SearchBar,
  ImagesSlider,
  Label,
  CacheImage,
  LoadingGate,
  HorizontalList,
} from '@app/components';
import { ProductCard } from '@app/modules/shared';
import { styles } from './styles';

class HomeScreen extends React.Component<HomeViewProps> {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.getBanners();
    this.props.getBanners2();
    this.props.getCategories();
    this.props.getHomeProducts();
  };

  onPressBanner = (index: number, type: number) => {
    const { banners, banners2, navigation } = this.props;
    const {
      banner: { sourceId, sourceType },
    } = (type == 1 ? banners?.[index] : banners2?.[index]) || {};

    if (sourceType === SourceType.Category) {
      navigation.navigate(Routes.ProductListScreen, {
        categoryId: sourceId,
      });
      return;
    }
    if (sourceType === SourceType.Product) {
      navigation.navigate(Routes.ProductDetailScreen, { productId: sourceId });
      return;
    }
  };

  renderProduct = ({ item }: any) => <ProductCard item={item} />;

  renderCategoryWithProducts = ({ item, index }: any) => {
    const { category, products } = item;
    const { categoryId, title } = category;

    return (
      <View
        style={[
          styles.catProductContainer,
          (index + 1) % 2 === 0 && styles.evenCatProductContainer,
        ]}
      >
        <View style={styles.categoryHeader}>
          <Label style={styles.categoryLabelStyle}>{title}</Label>
          <Label
            style={[styles.categoryLabelStyle, styles.underline]}
            onPress={() => {
              this.props.navigation.navigate(Routes.ProductListScreen, {
                categoryId,
                headerTitle: title,
              });
            }}
          >
            {strings.view_all}
          </Label>
        </View>

        <HorizontalList
          data={products}
          renderItem={this.renderProduct}
          keyExtractor={(data) => data.product?.productId}
          contentContainerStyle={styles.productListStyle}
        />
      </View>
    );
  };

  renderCategory = ({ item }: any) => {
    const { category, images } = item;
    const { title, categoryId } = category ?? {};
    const { mediumImage } = images?.[0] ?? {};

    return (
      <Pressable
        style={styles.categoryContainer}
        onPress={() => {
          this.props.navigation.navigate(Routes.ProductListScreen, {
            categoryId,
            headerTitle: title,
          });
        }}
      >
        <View style={styles.categoryImageContainer}>
          <CacheImage
            source={{ uri: mediumImage }}
            style={styles.categoryImageStyle}
            resizeMode="contain"
            loaderShown
          />
        </View>
        <Label style={styles.categoryTitleStyle}>{title}</Label>
      </Pressable>
    );
  };

  renderListAboveContent = () => {
    const { banners, categories, banners2 } = this.props;

    return (
      <>
        <View style={styles.divider} />

        {!!banners && (
          <ImagesSlider
            images={banners.map((banner) => banner.image?.mediumImage)}
            resizeMode="center"
            containerStyle={styles.sliderStyle}
            onPress={this.onPressBanner}
            type={1}
          />
        )}

        <View style={styles.categoryListViewStyle}>
          <FlatList
            data={categories}
            renderItem={this.renderCategory}
            keyExtractor={(item) => item.category?.title}
            contentContainerStyle={styles.categoryListStyle}
            numColumns={3}
          />
        </View>

        {!!banners2 && (
          <ImagesSlider
            images={banners2.map((banner2) => banner2.image?.mediumImage)}
            resizeMode="center"
            containerStyle={styles.sliderStyle}
            onPress={this.onPressBanner}
            type={2}
          />
        )}
      </>
    );
  };

  render() {
    const { products, categories } = this.props;

    return (
      <View style={styles.container}>
        <SearchBar />

        <LoadingGate loading={!categories}>
          <FlatList
            data={products}
            contentContainerStyle={styles.scrollViewStyle}
            renderItem={this.renderCategoryWithProducts}
            ListHeaderComponent={this.renderListAboveContent}
            keyExtractor={(item) => item.category?.title}
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={this.getData} />
            }
          />
        </LoadingGate>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  banners: selectBanners(state),
  banners2: selectBanners2(state),
  categories: selectHomeCategories(state),
  products: selectHomeProducts(state),
});

export default connect(mapStateToProps, {
  getBanners,
  getBanners2,
  getCategories,
  getHomeProducts,
})(HomeScreen);
