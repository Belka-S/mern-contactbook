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

const emailVerificationSchema = validateBody(
  Joi.object({
    email: Joi.string().email(regExp.email).required().error(joiError.email),
  }),
);

module.exports = { registerSchema, loginSchema, emailVerificationSchema };
