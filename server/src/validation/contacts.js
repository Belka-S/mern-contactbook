const Joi = require('joi');

const { regExp } = require('../utils');
const { validateBody } = require('../decorators');

const groupList = ['private', 'work', 'sport'];

const addSchema = validateBody(
  Joi.object({
    firstName: Joi.string().pattern(regExp.name).required(),
    lastName: Joi.string().pattern(regExp.name).allow(''),
    phone: Joi.string().pattern(regExp.phone).allow(''),
    email: Joi.string().pattern(regExp.email).allow(''),
    whatsapp: Joi.string().pattern(regExp.phone).allow(''),
    viber: Joi.string().pattern(regExp.phone).allow(''),
    telegram: Joi.string().pattern(regExp.telegram).allow(''),
    linkedin: Joi.string().pattern(regExp.linkedin).allow(''),
    github: Joi.string().pattern(regExp.github).allow(''),
    address: Joi.string().pattern(regExp.name).allow(''),
    birthday: Joi.string().pattern(regExp.date).allow(''),
    notes: Joi.string().allow(''),
    group: Joi.string().valid(...groupList),
    favorite: Joi.boolean(),
  }),
);

const updateFavoriteSchema = validateBody(Joi.object({ favorite: Joi.boolean().required() }));

module.exports = { addSchema, updateFavoriteSchema };
