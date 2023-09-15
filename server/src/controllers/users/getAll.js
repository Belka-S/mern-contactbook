const { User } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const getAll = ctrlWrapper(async (req, res) => {
  const user = await User.find();
  if (!user) throw HttpError(403);

  res.status(200).json({ status: 'success', code: 200, result: { user } });
});

module.exports = getAll;
