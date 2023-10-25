const Joi = require('joi');

const { joiError, regExp } = require('../utils');
const { validateBody } = require('../decorators');

const registerSchema = validateBody(
  Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().pattern(regExp.EMAIL.pattern).required().error(joiError.email),
    password: Joi.string().min(6).required().error(joiError.password),
  }),
);

const updateSchema = validateBody(
  Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().pattern(regExp.EMAIL.pattern).required().error(joiError.email),
    whatsApp: Joi.string().pattern(regExp.PHONE.pattern),
    telegram: Joi.string().pattern(regExp.TELEGRAM.pattern),
    location: Joi.string().pattern(regExp.ADDRESS.pattern),
    socialLink: Joi.string().pattern(regExp.HTTP_LINK.pattern),
    birthday: Joi.string().pattern(regExp.DATE.pattern),
    about: Joi.string(),
  }),
);

const loginSchema = validateBody(
  Joi.object({
    email: Joi.string().email(regExp.EMAIL.pattern).required().error(joiError.email),
    password: Joi.string().min(6).required().error(joiError.password),
  }),
);

const verifySchema = validateBody(
  Joi.object({
    verificationCode: Joi.number().required(),
  }),
);

const forgotSchema = validateBody(
  Joi.object({
    email: Joi.string().email(regExp.EMAIL.pattern).required().error(joiError.email),
  }),
);

const resetSchema = validateBody(
  Joi.object({
    id: Joi.string().required(),
    pwdToken: Joi.string().required(),
    newPass: Joi.string().min(6).required().error(joiError.password),
    confirmPass: Joi.any()
      .equal(Joi.ref('newPass'))
      .required()
      .label('Confirm password')
      .error(joiError.password),
    // .messages({ 'any.only': '{{#label}} does not match' }),
  }),
);

module.exports = {
  registerSchema,
  loginSchema,
  updateSchema,
  verifySchema,
  forgotSchema,
  resetSchema,
};
