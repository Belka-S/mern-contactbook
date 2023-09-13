const { HttpError } = require('../../utils');

const { Contact } = require('../../models/contact');

const removeById = async (req, res) => {
  const { id } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(id);
  if (!deletedContact) throw HttpError(403);

  res.status(200).json({ status: 'success', code: 200, result: deletedContact });
};

module.exports = removeById;
