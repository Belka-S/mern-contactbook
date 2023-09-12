const { Contact } = require('../../models/contact');

const getAll = async (req, res) => {
  const owner = req.user._id;
  const { page = 1, limit = 5, ...query } = req.query;
  const projection = '-createdAt -updatedAt';
  const skip = (page - 1) * limit;

  const contacts = await Contact.find({ owner, ...query }, projection, { skip, limit }).populate(
    'owner',
    'name email',
  );
  const total = await Contact.countDocuments({ owner, ...query });
  res.json({ status: `success, ${total} contacts`, code: 200, result: contacts });
};

module.exports = getAll;
