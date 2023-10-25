import * as Yup from 'yup';

import { regExp } from 'utils/constants';

const pattern = regExp => [regExp.pattern, regExp.msg];

const name = Yup.string()
  .min(4, 'is too short')
  .required('is required')
  .matches(...pattern(regExp.NAME));

const email = Yup.string()
  .required('is required')
  .matches(...pattern(regExp.EMAIL));

const password = Yup.string().min(6, 'is too short').required('is required');
const code = Yup.number().required('is required').typeError('must be a number');

export const signupSchema = Yup.object().shape({ name, email, password });
export const signinSchema = Yup.object().shape({ email, password });
export const verifySchema = Yup.object().shape({ verificationCode: code });
export const forgotSchema = Yup.object().shape({ email });
export const resetSchema = Yup.object().shape({
  newPass: password,
  confirmPass: password.oneOf([Yup.ref('newPass')], 'must match'),
});

export const profileSchema = Yup.object().shape({
  name,
  email,
  whatsApp: Yup.string().matches(...pattern(regExp.PHONE)),
  telegram: Yup.string().matches(...pattern(regExp.TELEGRAM)),
  location: Yup.string().matches(...pattern(regExp.ADDRESS)),
  socialLink: Yup.string().matches(...pattern(regExp.HTTP_LINK)),
  birthday: Yup.string().matches(...pattern(regExp.DATE)),
  about: Yup.string(),
  avatarUrl: Yup.string(),
});
