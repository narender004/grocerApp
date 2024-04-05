/**
 * Auth Slice
 * @format
 */

import { createAction } from '@reduxjs/toolkit';

import {
  LoginRequest,
  SignupRequest,
  ForgotPasswordRequest,
  LoginWithPhoneRequest,
  VerifyCodeRequest,
} from './types';

// Actions )-------------------------------------
export const tryLogin = createAction<LoginRequest>('AUTH/TRY_LOGIN');

export const signup = createAction<SignupRequest>('AUTH/SIGNUP');

export const requestResetPassword = createAction<ForgotPasswordRequest>(
  'AUTH/REQUEST_PASSWORD',
);

export const loginWithPhone = createAction<LoginWithPhoneRequest>(
  'AUTH/LOGIN_WITH_PHONE',
);

export const verifyCode = createAction<VerifyCodeRequest>('AUTH/VERIFY_CODE');
