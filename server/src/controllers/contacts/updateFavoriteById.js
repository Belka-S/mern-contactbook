const { HttpError } = require('../../utils');

const { Contact } = require('../../models/Contact');

const updateFavoriteById = async (req, res) => {
  const { id } = req.params;
  const newContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!newContact) throw HttpError(403);

  res.status(200).json({ status: 'success', code: 200, result: newContact });
};

module.exports = updateFavoriteById;
