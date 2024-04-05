/**
 * Fallback data
 * @format
 */

import { endpoints } from './';
const banners = require('@app/fixtures/banners');
const categories = require('@app/fixtures/categories');
const homePageProducts = require('@app/fixtures/home-page-products');
const productDetail = require('@app/fixtures/product-details');

const fallbackData: any = {
  [endpoints.get_banners]: banners,
  [endpoints.get_banners2]: banners,
  [endpoints.get_categories]: categories,
  [endpoints.get_home_products]: homePageProducts,
  [endpoints.get_product_detail]: productDetail,
};

const getFallbackData = (url: string = '') => {
  return fallbackData[url];
};

export { fallbackData, getFallbackData };
