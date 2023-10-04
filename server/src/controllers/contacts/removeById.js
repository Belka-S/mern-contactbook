const { HttpError } = require('../../utils');

const { Contact } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { restrictedAccess } = require('../../utils');

const removeById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  if (restrictedAccess.contactId.includes(id)) throw HttpError(403);

  const deletedContact = await Contact.findByIdAndDelete(id);
  if (!deletedContact) throw HttpError(403);

  res.status(200).json({ status: 'success', code: 200, result: { contact: deletedContact } });
});

module.exports = removeById;
