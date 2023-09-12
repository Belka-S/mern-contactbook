const createError = require('http-errors');

const { Contact } = require('../../models/contact');

const removeById = async (req, res) => {
  const { id } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(id);
  if (!deletedContact) throw createError(404, `Contact id=${id} not found`);
  res.json({ status: 'success', code: 200, result: deletedContact });
};

module.exports = removeById;
