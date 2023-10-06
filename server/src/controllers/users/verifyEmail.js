const { User } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const verifyEmail = ctrlWrapper(async (req, res) => {
  const { verificationCode } = req.params;
  const user = await User.findOne({ verificationCode });
  if (!user) throw HttpError(401, 'Email not verified');
  const newUser = await User.findByIdAndUpdate(user._id, {
    verifiedEmail: true,
    verificationCode: '',
  });
  if (!newUser) throw HttpError(403);

  res.status(200).json({ message: `Email ${user.email} verified` });
});

module.exports = verifyEmail;
