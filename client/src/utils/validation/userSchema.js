import { object, string, number } from 'yup';

import { NAME, EMAIL } from 'utils/constants';

const name = string()
  .min(4, 'is too short')
  .matches(NAME.regExp, NAME.msg)
  .required('is required');
const email = string().matches(EMAIL.regExp, EMAIL.msg).required('is required');
const password = string().min(4, 'is too short').required('is required');
const code = number().required('is required').typeError('must be a number');

export const signupSchema = object().shape({ name, email, password });
export const signinSchema = object().shape({ email, password });
export const verifySchema = object().shape({ verificationCode: code });
export const forgotSchema = object().shape({ email });
