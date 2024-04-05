/**
 * Auth schema
 * @format
 */

import * as yup from 'yup';

import { phoneNumberRegx } from '@app/utils';
import { strings } from '@app/strings';

export const loginSchema = yup.object().shape({
  username: yup.string().required(strings.validation.email_or_phone_required),
  password: yup.string().required(strings.validation.password_required),
});

export const signupSchema = yup.object().shape({
  name: yup.string().required(strings.validation.name_required),
  email: yup
    .string()
    .required(strings.validation.email_required)
    .email(strings.validation.email_invalid),
  phone: yup
    .string()
    .required(strings.validation.phone_required)
    .matches(phoneNumberRegx, strings.validation.phone_invalid),
  password: yup
    .string()
    .required(strings.validation.password_required)
    .min(5, strings.validation.password_min),
  confirmPassword: yup
    .string()
    .required(strings.validation.password_mismatch)
    .oneOf([yup.ref('password'), null], strings.validation.password_mismatch),
  termsAccepted: yup
    .bool()
    .required(strings.validation.accept_terms)
    .oneOf([true], strings.validation.accept_terms),
});

export const forgotPasswordSchema = yup.object().shape({
  username: yup.string().required(strings.validation.email_or_phone_required),
});

export const loginWithPhoneScheme = yup.object().shape({
  phone: yup
    .string()
    .required(strings.validation.phone_required)
    .matches(phoneNumberRegx, strings.validation.phone_invalid),
});
