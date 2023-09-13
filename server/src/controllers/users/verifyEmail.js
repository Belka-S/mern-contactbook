const { User } = require('../../models/user');
const { HttpError } = require('../../utils');

const verifyEmail = async (req, res) => {
  const { verificationCode } = req.params;
  const user = await User.findOne({ verificationCode });
  if (!user) throw HttpError(401, 'Email not verified');
  const newUser = await User.findByIdAndUpdate(user._id, { verified: true, verificationCode: '' });
  if (!newUser) throw HttpError(403);

  res.json({ message: `Email ${user.email} verified` });
};

module.exports = verifyEmail;
