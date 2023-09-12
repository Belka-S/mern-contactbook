const { Contact } = require('../../models/contact');

const add = async (req, res) => {
  console.log('req: ', req.body);
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json({ status: 'success', code: 201, result: newContact });
};

module.exports = add;
