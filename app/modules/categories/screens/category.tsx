/**
 * Category Screen
 * @format
 */

import React from 'react';
import { View, Pressable, ScrollView, RefreshControl } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { connect } from 'react-redux';

import { Routes } from '@app/navigator';
import { strings } from '@app/strings';
import { ImageSource } from '@app/common';
import { CategoryViewProps, CategoryState } from '../types';
import { getCategories } from '../slice';
import { selectIsGettingCategories, selectCategories } from '../selectors';
import {
  Header,
  SearchBar,
  Label,
  Icon,
  CacheImage,
  LoadingGate,
} from '@app/components';
import { styles } from './styles';

class CategoryScreen extends React.Component<CategoryViewProps, CategoryState> {
  constructor(props: CategoryViewProps) {
    super(props);
    this.state = { activeSections: [] };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.getCategories();
  };

  onPressSection = (categoryId: number) => {
    const { activeSections } = this.state;
    let updatedActiveSection;

    if (activeSections.includes(categoryId)) {
      updatedActiveSection = activeSections.filter(
        (sectionId) => sectionId !== categoryId,
      );
    } else {
      activeSections.push(categoryId);
      updatedActiveSection = activeSections;
    }
    this.setState({ activeSections: updatedActiveSection });
  };

  isHaveSubCategory(categoryId: number) {
    const { categories } = this.props;
    return categories?.some(
      (item) => item.category.parentCategoryId === categoryId,
    );
  }

  renderCategory = (content: any, isActive: boolean) => {
    const { category, images } = content;
    const { categoryId, title } = category;
    const image = images?.[0]?.mediumImage;

    const hasSubCategories = this.isHaveSubCategory(categoryId);

    return (
      <Pressable
        style={[
          styles.categoryHeaderStyle,
          !hasSubCategories && styles.subCategoryHeaderStyle,
        ]}
        onPress={() => {
          if (!hasSubCategories) {
            this.props.navigation.navigate(Routes.ProductListScreen, {
              categoryId,
              headerTitle: title,
            });
            return;
          }
          this.onPressSection(categoryId);
        }}
      >
        <CacheImage
          source={{ uri: image }}
          placeholderSource={ImageSource.placeholderSmall}
          style={styles.categoryImgStyle}
          resizeMode="contain"
        />
        <Label style={styles.nameStyle}>{title}</Label>
        {hasSubCategories && (
          <Icon
            type="Ionicons"
            name={isActive ? 'chevron-up' : 'chevron-down'}
            style={styles.arrowIconStyle}
          />
        )}
      </Pressable>
    );
  };

  renderCategories(parentCategoryId: number) {
    const { categories } = this.props;
    const { activeSections } = this.state;

    const sectionList = categories?.filter(
      (item) => item.category.parentCategoryId === parentCategoryId,
    );

    if (!sectionList?.length) {
      return null;
    }

    return sectionList.map((item) => {
      const categoryId = item.category.categoryId;
      const isActive = activeSections.includes(categoryId);

      return (
        <View key={categoryId}>
          {this.renderCategory(item, isActive)}
          <Collapsible collapsed={!isActive}>
            {this.renderCategories(categoryId)}
          </Collapsible>
        </View>
      );
    });
  }

  render() {
    const { loading, categories } = this.props;

    return (
      <View style={styles.container}>
        <Header
          canAccessDrawer
          centerLogoShown
          cartShown
          title={strings.header.categories}
        />
        <SearchBar />

        <LoadingGate loading={!categories?.length}>
          <ScrollView
            contentContainerStyle={styles.scrollViewStyle}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={this.getData} />
            }
          >
            {this.renderCategories(0)}
          </ScrollView>
        </LoadingGate>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  loading: selectIsGettingCategories(state),
  categories: selectCategories(state),
});

export default connect(mapStateToProps, { getCategories })(CategoryScreen);
