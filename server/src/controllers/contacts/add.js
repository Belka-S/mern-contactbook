const { Contact } = require('../../models/contact');
const { HttpError } = require('../../utils');

const add = async (req, res) => {
  console.log('req: ', req.body);
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  if (!newContact) throw HttpError(403);

  res.status(201).json({ status: 'success', code: 201, result: newContact });
};

module.exports = add;
