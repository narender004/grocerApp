/**
 * Permissions handler
 * @format
 */

import { Platform } from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
  requestMultiple,
  Permission,
} from 'react-native-permissions';

const permissions = {
  camera:
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
  photo:
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
};

export function camera() {
  const permission = permissions.camera;

  return {
    check: () => check(permission),
    request: () => request(permission),
  };
}

async function isPermissionBlocked(permission: Permission) {
  const result = await check(permission);
  if (result === RESULTS.BLOCKED) {
    return true;
  }
  return false;
}

export {
  RESULTS,
  isPermissionBlocked,
  permissions,
  request,
  check,
  openSettings,
  requestMultiple,
};
