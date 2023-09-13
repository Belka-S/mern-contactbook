const { Contact } = require('../../models/contact');
const { HttpError } = require('../../utils');

const getAll = async (req, res) => {
  const owner = req.user._id;
  const { page = 1, limit = 5, ...query } = req.query;
  const projection = '-createdAt -updatedAt';
  const skip = (page - 1) * limit;

  const contacts = await Contact.find({ owner, ...query }, projection, { skip, limit }).populate(
    'owner',
    'name email',
  );
  if (!contacts) throw HttpError(403);

  const total = await Contact.countDocuments({ owner, ...query });

  res.status(200).json({ status: `success`, code: 200, result: contacts });
};

module.exports = getAll;
