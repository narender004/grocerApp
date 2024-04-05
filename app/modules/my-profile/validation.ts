/**
 * Profile schema
 * @format
 */

import * as yup from 'yup';

import { phoneNumberRegx } from '@app/utils';
import { strings } from '@app/strings';

export const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required(strings.validation.password_required),
  newPassword: yup
    .string()
    .required(strings.validation.password_required)
    .min(5, strings.validation.password_min),
  confirmPassword: yup
    .string()
    .required(strings.validation.password_mismatch)
    .oneOf(
      [yup.ref('newPassword'), null],
      strings.validation.password_mismatch,
    ),
});

export const updateProfileSchema = yup.object().shape({
  name: yup.string().required(strings.validation.name_required),
  email: yup
    .string()
    .required(strings.validation.email_required)
    .email(strings.validation.email_invalid),
  phone: yup
    .string()
    .required(strings.validation.phone_required)
    .matches(phoneNumberRegx, strings.validation.phone_invalid),
});
