const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { HttpError } = require('../../utils');

const { ACCESS_SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw HttpError(401);
  // if (!user.verifiedEmail) throw HttpError(401);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw HttpError(401);

  const payload = { id: user._id };
  const token = jwt.sign(payload, ACCESS_SECRET_KEY, { expiresIn: '23h' });
  const newUser = await User.findByIdAndUpdate(user._id, { token }, { new: true });
  if (!newUser) throw HttpError(403);

  res.status(200).json({ status: 'success', code: 201, result: { user: newUser } });
};

module.exports = login;
