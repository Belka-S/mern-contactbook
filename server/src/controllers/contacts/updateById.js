const createError = require('http-errors');

const { Contact } = require('../../models/contact');

const updateById = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!updatedContact) throw createError(404, `Contact id=${id} not found`);
  res.json({ status: 'success', code: 200, result: updatedContact });
};

module.exports = updateById;
