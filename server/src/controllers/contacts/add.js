const { Contact } = require('../../models/Contact');
const { HttpError } = require('../../utils');

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  if (!newContact) throw HttpError(403);

  res.status(201).json({ status: 'success', code: 201, result: { contact: newContact } });
};

module.exports = add;
