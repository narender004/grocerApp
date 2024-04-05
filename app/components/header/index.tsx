/**
 * Header
 * @format
 */

import React from 'react';
import { View, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { selectCartCount } from '@app/modules/cart';
import { NavigationService } from '@app/utils';
import { Routes } from '@app/navigator';
import { ImageSource } from '@app/common';
import { Icon } from '@app/components/icon';
import { HeaderButton } from '@app/components/header-button';
import { Label } from '@app/components/label';
import { styles } from './styles';

// Header types
type Props = {
  safeAreaEnabled?: boolean;
  canGoBack?: boolean;
  canAccessDrawer?: boolean;
  title?: string;
  centerLogoShown?: boolean;
  cartShown?: boolean;
};

const CartButton = () => {
  const cartCount = useSelector(selectCartCount);

  return (
    <HeaderButton
      style={styles.cartButtonStyle}
      onPress={() => NavigationService.navigate(Routes.CartScreen)}
    >
      <>
        {cartCount > 0 && (
          <View style={styles.cartBadgeStyle}>
            <Label style={styles.carCountStyle}>{cartCount}</Label>
          </View>
        )}
        <Icon
          type="Ionicons"
          name="cart-outline"
          style={styles.cartIconStyle}
        />
      </>
    </HeaderButton>
  );
};

const BackButton = () => {
  return (
    <HeaderButton onPress={() => NavigationService.goBack()}>
      <Icon type="Ionicons" name="arrow-back" style={styles.backIconStyle} />
    </HeaderButton>
  );
};

const DrawerButton = () => {
  return (
    <HeaderButton
      style={styles.drawerButtonStyle}
      onPress={() => NavigationService.openDrawer()}
    >
      <Icon
        type="Ionicons"
        name="menu-outline"
        style={styles.drawerIconStyle}
      />
    </HeaderButton>
  );
};

const Header = (props: Props) => {
  const {
    canGoBack,
    canAccessDrawer,
    title,
    centerLogoShown,
    safeAreaEnabled = true,
    cartShown,
  } = props;

  return (
    <SafeAreaView
      edges={safeAreaEnabled ? ['top', 'left', 'right'] : []}
      style={[styles.container, safeAreaEnabled && styles.safeAreaStyle]}
    >
      {/* In android remove statusbar background color */}
      <StatusBar backgroundColor="transparent" translucent />

      <View style={styles.content}>
        {!title && centerLogoShown && (
          <View style={styles.logoContainer}>
            <Image source={ImageSource.headerLogo} style={styles.logoStyle} />
          </View>
        )}

        {!!title && (
          <Label numberOfLines={1} style={styles.titleStyle}>
            {title}
          </Label>
        )}

        {canGoBack && <BackButton />}

        {!canGoBack && canAccessDrawer && <DrawerButton />}

        {cartShown && <CartButton />}
      </View>
    </SafeAreaView>
  );
};

export { Header };
