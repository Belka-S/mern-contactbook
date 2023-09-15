const { User } = require('../../models');
const { HttpError, sendEmail } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const resendVerificationEmail = ctrlWrapper(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, 'Email not found');
  if (user.verifiedEmail) throw HttpError(401, 'Email already verified');

  const newUser = await sendEmail(email, user.verificationCode);
  if (!newUser) throw HttpError(403);

  res
    .status(200)
    .json({ status: 'success', code: 200, result: { message: `Email sent to ${email}` } });
});

module.exports = resendVerificationEmail;
