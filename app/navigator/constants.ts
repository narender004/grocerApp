/**
 * App Constants
 * @format
 */

/**
 * App routes constants for define
 * screen key in navigator and use
 * them for navigate to that screen
 */
enum Routes {
  // Auth stack
  LoginScreen = 'LoginScreen',
  LoginWithOtpScreen = 'LoginWithOtpScreen',
  VerificationScreen = 'VerificationScreen',
  SignupScreen = 'SignupScreen',
  ForgotPasswordScreen = 'ForgotPasswordScreen',

  // Main stack
  MainScreen = 'MainScreen',
  SearchScreen = 'SearchScreen',
  CartScreen = 'CartScreen',
  PaymentScreen = 'PaymentScreen',
  OrderSuccessScreen = 'OrderSuccessScreen',
  AddEditAddressScreen = 'AddEditAddressScreen',
  AddressListScreen = 'AddressListScreen',

  // Home stack
  HomeScreen = 'HomeScreen',
  ProductListScreen = 'ProductListScreen',
  ProductDetailScreen = 'ProductDetailScreen',

  // Order stack
  MyOrderScreen = 'MyOrderScreen',
  OrderDetailScreen = 'OrderDetailScreen',

  // Profile stack
  MyProfileScreen = 'MyProfileScreen',
  ChangePasswordScreen = 'ChangePasswordScreen',
  UpdateProfileScreen = 'UpdateProfileScreen',

  // Tabs
  HomeTab = 'HomeTab',
  CategoriesTab = 'CategoriesTab',
  OrderTab = 'OrderTab',
  ProfileTab = 'ProfileTab',
  HelpTab = 'HelpTab',
}

/**
 * App section constants for
 * switch between app section
 * like: (Auth, Onboarding, Main)
 */
enum AppSection {
  AuthSection = 'AuthSection',
  MainSection = 'MainSection',
}

export { Routes, AppSection };
