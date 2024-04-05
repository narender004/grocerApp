/**
 * Search Screen
 * @format
 */

import React from 'react';
import {
  View,
  TextInput,
  FlatList,
  RefreshControl,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { debounce } from 'throttle-debounce';

import { SearchViewProps, SearchViewState } from '../types';
import { Routes } from '@app/navigator';
import { delay } from '@app/utils';
import { strings } from '@app/strings';
import { request, endpoints } from '@app/api';
import { HeaderButton, Icon, Label, CacheImage } from '@app/components';
import { ProductCard } from '@app/modules/shared';
import { Colors } from '@app/styles';
import { styles } from './styles';

class SearchScreen extends React.Component<SearchViewProps, SearchViewState> {
  inputRef;

  constructor(props: SearchViewProps) {
    super(props);
    this.state = {
      searchedItems: [],
      loading: false,
      searchText: '',
    };

    this.inputRef = React.createRef<TextInput>();
    this.searchProducts = debounce(500, this.searchProducts);
  }

  async componentDidMount() {
    await delay(500);
    this.inputRef.current?.focus();
  }

  onChangeValue = (searchText: string) => {
    this.setState({ searchText });
    this.searchProducts(searchText);
  };

  searchProducts = async (searchText: string) => {
    if (!searchText) {
      this.setState({ searchedItems: [] });
      return;
    }
    try {
      this.setState({ loading: true });
      const response: any = await request.get(endpoints.search_products, {
        params: {
          searchText,
        },
      });
      this.setState({ searchedItems: response });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  goBack = () => {
    this.props.navigation.goBack();
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
        <Label numberOfLines={2} style={styles.categoryTitleStyle}>
          {title}
        </Label>
      </Pressable>
    );
  };

  renderItem = ({ item }: any) => {
    return <ProductCard containerStyle={styles.productCardStyle} item={item} />;
  };

  renderEmptyComponent = () => {
    const { categories, products } = this.state.searchedItems || {};

    if (categories?.length || products?.length) {
      return null;
    }

    return (
      <View style={styles.emptyContainerStyle}>
        <Icon type="Ionicons" name="search" style={styles.iconStyle} />
        <Label style={styles.whatSearchingLabelStyle}>
          {strings.what_are_you_searching}
        </Label>
        <Label style={styles.typeCommentLabelStyle}>
          {strings.type_product_name}
        </Label>
      </View>
    );
  };

  renderListHeader = () => {
    const { searchedItems } = this.state;

    return (
      <FlatList
        data={searchedItems?.categories}
        horizontal
        renderItem={this.renderCategory}
        keyExtractor={(item) => item.category?.title}
      />
    );
  };

  render() {
    const { loading, searchedItems, searchText } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerStyle}>
            <HeaderButton onPress={this.goBack}>
              <Icon
                type="Ionicons"
                name="arrow-back"
                style={styles.backIconStyle}
              />
            </HeaderButton>

            <TextInput
              ref={this.inputRef}
              placeholder={strings.search_product}
              value={searchText}
              onChangeText={this.onChangeValue}
              style={styles.inputStyle}
              placeholderTextColor={Colors.neutral.s400}
              underlineColorAndroid={Colors.transparent.clear}
              autoCapitalize="none"
            />
          </View>

          <FlatList
            data={searchedItems?.products}
            numColumns={2}
            renderItem={this.renderItem}
            ListHeaderComponent={this.renderListHeader}
            keyExtractor={(item: any) => item?.product.productId}
            keyboardShouldPersistTaps="handled"
            ListEmptyComponent={this.renderEmptyComponent}
            contentContainerStyle={styles.contentContainerStyle}
            refreshControl={<RefreshControl refreshing={loading} />}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default SearchScreen;
