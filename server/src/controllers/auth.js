const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');

const { User } = require('../models/user');
const { HttpError, sendEmail } = require('../helpers');

const { ACCESS_SECRET_KEY } = process.env;

// Register // SignUp
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
  res.status(201).json({ name: newUser.name, email: newUser.email, avatarUrl: newUser.avatarUrl });
};

// Login // SignIn
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw HttpError(401);
  // if (user.verified) throw HttpError(401);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw HttpError(401);

  const payload = { id: user._id };
  const token = jwt.sign(payload, ACCESS_SECRET_KEY, { expiresIn: '23h' });
  const newUser = await User.findByIdAndUpdate(user._id, { token }, { new: true });

  res.json({ name: newUser.name, token: newUser.token });
};

// Logout
const logout = async (req, res) => {
  const newUser = await User.findByIdAndUpdate(req.user._id, { token: null }, { new: true });
  // res.status(204); // .json({ message: 'Logged out' });
  res.json({ message: 'Logged out' });
};

module.exports = { register, login, logout };
