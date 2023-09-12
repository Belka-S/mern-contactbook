const { User } = require('../../models/user');
const { HttpError } = require('../../utils');

const verifyEmail = async (req, res) => {
  const { verificationCode } = req.params;
  const user = await User.findOne({ verificationCode });
  if (!user) throw HttpError(401, 'Email not verified');
  await User.findByIdAndUpdate(user._id, { verified: true, verificationCode: '' });
  res.json({ message: `Email ${user.email} verified` });
};

module.exports = verifyEmail;
