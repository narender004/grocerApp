/**
 * Address form schema
 * @format
 */

import * as yup from 'yup';

import { strings } from '@app/strings';

export const addressSchema = yup.object().shape({
  contactPerson: yup.string().required(strings.validation.name_required),
  contactNo: yup
    .string()
    .required(strings.validation.phone_required)
    .min(10, strings.validation.phone_invalid),
  pinCode: yup
    .string()
    .required(strings.validation.pin_code_required)
    .min(6, strings.validation.pin_code_invalid),
  areaSector: yup.string().required(strings.validation.area_required),
  landMark: yup.string().required(strings.validation.landmark_required),
  city: yup.string().required(strings.validation.city_required),
  state: yup.string().required(strings.validation.state_required),
});
