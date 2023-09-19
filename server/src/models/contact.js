const { Schema, model } = require('mongoose');

const { mongooseError, regExp } = require('../utils');

const required = [true, 'Required field!'];
const length = lgth => [lgth, `Must be at least ${lgth} characters long!`];
const regex = field => [regExp[field], `Invalid ${field}!`];

const groupList = ['work', 'sport', 'private'];

const contactSchema = new Schema(
  {
    name: { type: String, minlength: length(4), required },
    phone: { type: String, match: regex('phone'), required },
    email: { type: String, match: regex('email'), default: '' },
    whatsapp: { type: String, match: regex('phone'), default: '' },
    viber: { type: String, match: regex('phone'), default: '' },
    telegram: { type: String, match: regex('telegram'), default: '' },
    linkedin: { type: String, match: regex('linkedin'), default: '' },
    github: { type: String, match: regex('github'), default: '' },
    address: { type: String, match: regex('name'), default: '' },
    birthday: { type: String, match: regex('date'), default: '' },
    group: { type: String, enum: groupList, default: 'private' },
    favorite: { type: Boolean, default: false },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
contactSchema.post('save', mongooseError);

const Contact = model('Contact', contactSchema);

module.exports = { Contact };
