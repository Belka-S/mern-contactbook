const { User } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const logout = ctrlWrapper(async (req, res) => {
  const newUser = await User.findByIdAndUpdate(req.user._id, { token: null }, { new: true });
  if (!newUser) throw HttpError(403);

  res.status(200).json({ status: 'success', code: 200, result: { message: 'Logged out' } });
});

module.exports = logout;
