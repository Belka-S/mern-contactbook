const { User } = require('../../models/user');
const { HttpError } = require('../../utils');

const updateSubscriptionById = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) throw HttpError(404, 'User not found');
  res.json({ status: 'success', code: 200, result: user });
};

module.exports = updateSubscriptionById;
