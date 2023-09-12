const createError = require('http-errors');

const { Contact } = require('../../models/contact');

const getById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) throw createError(404, `Contact id=${id} not found`);
  res.json({ status: 'success', code: 200, result: contact });
};

module.exports = getById;
