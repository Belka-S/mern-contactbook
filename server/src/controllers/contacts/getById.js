const { HttpError } = require('../../utils');

const { Contact } = require('../../models/Contact');

const getById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) throw HttpError(403);

  res.status(200).json({ status: 'success', code: 200, result: { contact } });
};

module.exports = getById;
