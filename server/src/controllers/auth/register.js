const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');

const { User } = require('../../models/User');
const { HttpError, sendEmail } = require('../../utils');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (await User.findOne({ name })) {
    throw HttpError(409, 'Name already exists');
  }
  if (await User.findOne({ email })) {
    throw HttpError(409, 'Email already exists');
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);
  const verificationCode = nanoid();

  await sendEmail(email, verificationCode);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarUrl,
    verificationCode,
  });
  if (!newUser) throw HttpError(403);

  res.status(201).json({ name: newUser.name, email: newUser.email, avatarUrl: newUser.avatarUrl });
};

module.exports = register;
