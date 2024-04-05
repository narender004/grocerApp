/**
 * Api Endpoints
 * @format
 */

export const login = '/User/Authenticate';
export const register = '/User/SignUp';
export const reset_password = '/User/ForgetPassword?LoginId=';
export const login_with_phone = '/User/GenerateOTP';
export const verify_otp = '/User/VerifyOTP';

export const get_banners = '/Banner/Home1';
export const get_banners2 = '/Banner/Home2';

export const get_categories = '/Category';

export const search_products = '/Product/SearchIncludingCategory';
export const get_home_products = '/Product/HomePageProducts';
export const get_product_detail = '/Product/';
export const get_products_by_filter = '/Product/GetProductByFilter';

export const get_cart = '/Cart';
export const add_to_cart = '/Cart';
export const update_cart_item = '/Cart';
export const remove_cart_item = '/Cart';
export const get_delivery_charge = '/Setting/FreightCharges';

export const get_addresses = '/UserAddress';
export const add_address = '/UserAddress';
export const update_address = '/UserAddress';

export const submit_order = '/Order';
export const get_my_orders = '/Order';
export const get_order_detail = '/Order/';

export const get_my_profile = '/User/GetProfile';
export const update_profile = '/User/UpdateProfile';
export const change_password = '/User/ChangePassword';
export const upload_image = '/Image';

export const get_coupons = '/Discount/GetValidDiscounts';
export const try_coupon = '/Discount/GetDiscountAmount';

export const update_fcm_token = '/User/UpdateFCMToken';
