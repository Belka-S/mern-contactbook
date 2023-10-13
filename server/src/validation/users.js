const Joi = require('joi');

const { joiError, regExp } = require('../utils');
const { validateBody } = require('../decorators');

const registerSchema = validateBody(
  Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().pattern(regExp.email).required().error(joiError.email),
    password: Joi.string().min(6).required().error(joiError.password),
  }),
);

const loginSchema = validateBody(
  Joi.object({
    email: Joi.string().email(regExp.email).required().error(joiError.email),
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
    email: Joi.string().email(regExp.email).required().error(joiError.email),
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

module.exports = { registerSchema, loginSchema, verifySchema, forgotSchema, resetSchema };
