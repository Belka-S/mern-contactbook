const { User } = require('../../models/User');
const { HttpError, sendEmail } = require('../../utils');

const resendVerificationEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, 'Email not found');
  if (user.verifiedEmail) throw HttpError(401, 'Email already verified');

  const newUser = await sendEmail(email, user.verificationCode);
  if (!newUser) throw HttpError(403);

  res.status(200).json({ message: `Email sent to ${email}` });
};

module.exports = resendVerificationEmail;
