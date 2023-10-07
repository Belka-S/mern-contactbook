const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const register = ctrlWrapper(async (req, res) => {
  const { name, email, password } = req.body;

  if (await User.findOne({ name })) {
    throw HttpError(409, 'Name already exists');
  }
  if (await User.findOne({ email })) {
    throw HttpError(409, 'Email already exists');
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);
  const verificationCode = (Math.random() * 100000).toFixed(0);

  // await sendEmail(email, verificationCode);

  const user = await User.create({
    ...req.body,
    password: hashPassword,
    avatarUrl,
    verificationCode,
  });

  const payload = { id: user._id };
  const token = jwt.sign(payload, ACCESS_SECRET_KEY, { expiresIn: '60s' });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, { expiresIn: '7d' });
  const newUser = await User.findByIdAndUpdate(user._id, { token, refreshToken }, { new: true });
  if (!newUser) throw HttpError(403, 'Failed to log in');
  res.status(201).json({ message: `Created: ${newUser.email} `, result: { user: newUser } });
});

module.exports = register;
