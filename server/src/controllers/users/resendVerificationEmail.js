const { User } = require('../../models/user');
const { HttpError, sendEmail } = require('../../utils');

const resendVerificationEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, 'Email not found');
  if (user.verified) throw HttpError(401, 'Email already verified');
  await sendEmail(email, user.verificationCode);
  res.json({ message: `Email sent to ${email}` });
};

module.exports = resendVerificationEmail;
