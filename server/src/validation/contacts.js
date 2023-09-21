const Joi = require('joi');

const { joiError, regExp } = require('../utils');
const { validateBody } = require('../decorators');

const groupList = ['private', 'work', 'sport'];

const addSchema = validateBody(
  Joi.object({
    firstName: Joi.string().min(4).pattern(regExp.name).required(),
    lastName: Joi.string().pattern(regExp.name),
    phone: Joi.string().pattern(regExp.phone),
    email: Joi.string().pattern(regExp.email).error(joiError.email),
    whatsapp: Joi.string().pattern(regExp.phone),
    viber: Joi.string().pattern(regExp.phone),
    telegram: Joi.string().pattern(regExp.telegram),
    linkedin: Joi.string().pattern(regExp.linkedin),
    github: Joi.string().pattern(regExp.github),
    address: Joi.string().pattern(regExp.name),
    birthday: Joi.string().pattern(regExp.date),
    notes: Joi.string(),
    group: Joi.string().valid(...groupList),
    favorite: Joi.boolean(),
  }),
);

const updateFavoriteSchema = validateBody(Joi.object({ favorite: Joi.boolean().required() }));

module.exports = { addSchema, updateFavoriteSchema };
