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
    birthday: { type: String, match: regex('date'), default: '' },
    group: { type: String, enum: groupList, default: 'private' },
    favorite: { type: Boolean, default: false },
    owner: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  },
  { versionKey: false, timestamps: true },
);

contactSchema.post('save', mongooseError); // Change error status

const Contact = model('contact', contactSchema);

module.exports = { Contact, groupList };
