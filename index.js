/**
 * AppRegistry
 * @format
 */

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import { Main } from '@app/main';

AppRegistry.registerComponent(appName, () => Main);
