/**
 * Categories Tabs
 * @format
 */

import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { selectSubCategory } from '@app/modules/home';
import { Label, TouchableItem } from '@app/components';
import { styles } from './styles';

type OwnProps = {
  parentCategoryId: number;
  onChangeCategory: (categoryId: number) => void;
};
type StoreProps = {
  categories: Array<any> | undefined;
};
type Props = OwnProps & StoreProps;

type State = {
  selectedCategoryIndex: number;
};

class CategoryTabsComponent extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { selectedCategoryIndex: 0 };
  }

  componentDidMount() {
    const { categories, parentCategoryId } = this.props;
    const firstCategory = categories?.[0]?.category;

    this.props.onChangeCategory(firstCategory?.categoryId ?? parentCategoryId);
  }

  onPressCategory = (index: number, categoryId: number) => {
    this.setState({ selectedCategoryIndex: index });
    this.props.onChangeCategory(categoryId);
  };

  render() {
    const { categories } = this.props;
    const { selectedCategoryIndex } = this.state;

    if (!categories?.length) {
      return null;
    }

    return (
      <ScrollView
        horizontal
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContentStyle}
      >
        {categories?.map((category, index) => {
          const { categoryId, title } = category.category;
          const isSelected = index === selectedCategoryIndex;

          return (
            <TouchableItem
              key={categoryId}
              style={[styles.itemStyle, isSelected && styles.selectedItem]}
              disabled={isSelected}
              onPress={() => {
                this.onPressCategory(index, categoryId);
              }}
            >
              <Label
                style={[styles.labelStyle, isSelected && styles.selectedLabel]}
              >
                {title}
              </Label>
            </TouchableItem>
          );
        })}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: any, ownProps: OwnProps) => ({
  categories: selectSubCategory(state, ownProps.parentCategoryId),
});

const CategoryTabs = connect<StoreProps, {}, OwnProps>(
  mapStateToProps,
  {},
)(CategoryTabsComponent);

export { CategoryTabs };
