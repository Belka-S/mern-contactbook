const Joi = require('joi');

const { joiError, regExp } = require('../utils');

const registerSchema = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().pattern(regExp.email).required().error(joiError.email),
  password: Joi.string().min(6).required().error(joiError.password),
});

const loginSchema = Joi.object({
  email: Joi.string().email(regExp.email).required().error(joiError.email),
  password: Joi.string().min(6).required().error(joiError.password),
});

const emailVerificationSchema = Joi.object({
  email: Joi.string().email(regExp.email).required().error(joiError.email),
});

const schemas = { registerSchema, loginSchema, emailVerificationSchema };

module.exports = { schemas };
