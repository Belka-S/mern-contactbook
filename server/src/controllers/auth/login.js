const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const login = ctrlWrapper(async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });
  if (!user) throw HttpError(401);
  console.log('user: ', user);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw HttpError(401);

  const candidate = { accessToken: null, refreshToken: null };
  user = { ...user._doc, ...candidate };

  if (!user.verifiedEmail) {
    res.status(200).json({ message: `Action required: verify ${user.email}`, result: { user } });
  } else {
    candidate.accessToken = jwt.sign({ id: user._id }, ACCESS_SECRET_KEY, { expiresIn: '60s' });
    candidate.refreshToken = jwt.sign({ id: user._id }, REFRESH_SECRET_KEY, { expiresIn: '7d' });

    const newUser = await User.findByIdAndUpdate(user._id, candidate, { new: true });
    if (!newUser) throw HttpError(403);

    res.status(200).json({ message: `Logged in: ${newUser.email}`, result: { user: newUser } });
  }
});

module.exports = login;
