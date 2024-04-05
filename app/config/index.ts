/**
 * App Configurations
 * base url, libraries keys, env
 * @format
 */

import Configs from 'react-native-config';

export const API_TIMEOUT = 0;

export const BASE_URL = Configs.BASE_URL;
export const ENV = Configs.ENV;
export const IS_PROD = ENV === 'production';

export const TERMS_URL = 'http://www.grocer21.com/terms.html';

export const OTP_TIMEOUT = 60;
export const OTP_LENGTH = 6;
