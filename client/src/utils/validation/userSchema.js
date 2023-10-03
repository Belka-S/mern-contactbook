import { object, string } from 'yup';

import { NAME, EMAIL } from 'utils/constants';

const name = string()
  .min(4, 'is too short')
  .matches(NAME.regExp, NAME.msg)
  .required('is required');
const email = string().matches(EMAIL.regExp, EMAIL.msg).required('is required');
const password = string().min(4, 'is too short').required('is required');

export const signupSchema = object().shape({ name, email, password });
export const signinSchema = object().shape({ email, password });
