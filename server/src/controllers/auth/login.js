const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const login = ctrlWrapper(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw HttpError(401);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw HttpError(401);

  if (!user.verifiedEmail) {
    res.status(200).json({ message: `Action required: verify ${user.email}`, result: { user } });
  } else {
    const id = user._id;
    const accessToken = jwt.sign({ id }, ACCESS_SECRET_KEY, { expiresIn: '60s' });
    const refreshToken = jwt.sign({ id }, REFRESH_SECRET_KEY, { expiresIn: '7d' });

    const newUser = await User.findByIdAndUpdate(id, { accessToken, refreshToken }, { new: true });
    if (!newUser) throw HttpError(403);

    res.status(200).json({ message: `Logged in: ${newUser.email}`, result: { user: newUser } });
  }
});

module.exports = login;
