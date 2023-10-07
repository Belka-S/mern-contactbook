const jwt = require('jsonwebtoken');

const { User } = require('../../models/user');
const { HttpError } = require('../../utils');
const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY, NODE_ENV, FRONT_URL_DEV, FRONT_URL_PROD } =
  process.env;

const frontUrl = NODE_ENV === 'development' ? FRONT_URL_DEV : FRONT_URL_PROD;

const google = async (req, res) => {
  const { _id: id } = req.user;
  const token = jwt.sign({ id }, ACCESS_SECRET_KEY, { expiresIn: '60s' });
  const refreshToken = jwt.sign({ id }, REFRESH_SECRET_KEY, { expiresIn: '7d' });
  const newUser = await User.findByIdAndUpdate(id, { token, refreshToken });
  if (!newUser) throw HttpError(403, 'Failed to log in');

  res.redirect(`${frontUrl}/google?token=${token}&refreshToken=${refreshToken}`);
};

module.exports = google;
