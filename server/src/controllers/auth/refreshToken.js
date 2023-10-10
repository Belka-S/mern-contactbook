const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../utils');
const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const refreshToken = ctrlWrapper(async (req, res, next) => {
  const { refreshtoken } = req.headers; // const { refreshtoken } = req.body;
  try {
    const { id } = jwt.verify(refreshtoken, REFRESH_SECRET_KEY);
    const user = await User.findOne({ refreshToken: refreshtoken });

    const candidate = { accessToken: null, refreshToken: null };

    if (!user || !user.verifiedEmail || !user.refreshToken || user.refreshToken !== refreshtoken) {
      res.status(403).json({ message: 'Forbidden', result: { user: candidate } });
    } else {
      candidate.accessToken = jwt.sign({ id }, ACCESS_SECRET_KEY, { expiresIn: '60s' });
      candidate.refreshToken = jwt.sign({ id }, REFRESH_SECRET_KEY, { expiresIn: '7d' });

      const newUser = await User.findByIdAndUpdate(user._id, candidate, { new: true });
      if (!newUser) throw HttpError(403);

      res.status(200).json({ result: { user: candidate } });
    }
  } catch {
    next(HttpError(403));
  }
});

module.exports = refreshToken;
