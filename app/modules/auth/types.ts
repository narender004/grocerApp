/**
 * Auth Types
 * @format
 */

import { AuthScreenProps, Routes } from '@app/navigator';

export type LoginScreenParams = undefined;
export type LoginViewProps = AuthScreenProps<Routes.LoginScreen>;

export type LoginWithOtpScreenParams = { username?: string } | undefined;
export type LoginWithOtpViewProps = AuthScreenProps<Routes.LoginWithOtpScreen>;

export type VerificationScreenParams = { phone: string };
export type VerificationViewProps = AuthScreenProps<Routes.VerificationScreen>;

export type SignupScreenParams = undefined;
export type SignupViewProps = AuthScreenProps<Routes.SignupScreen>;

export type ForgotPasswordScreenParams = { username?: string } | undefined;
export type ForgotPasswordViewProps =
  AuthScreenProps<Routes.ForgotPasswordScreen>;

// Request types
export interface LoginRequest {
  username: string;
  password: string;
}
export interface SignupRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
}
export interface ForgotPasswordRequest {
  username: string;
}
export interface LoginWithPhoneRequest {
  phone: string;
}

export interface VerifyCodeRequest {
  phone: string;
  code: string;
}
