const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../utils');
const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const refresh = ctrlWrapper(async (req, res, next) => {
  const { refreshtoken } = req.headers; // const { refreshtoken } = req.body;
  try {
    const { id } = jwt.verify(refreshtoken, REFRESH_SECRET_KEY);
    const user = await User.findOne({ refreshToken: refreshtoken });

    if (!user || !user.refreshToken || user.refreshToken !== refreshtoken) {
      next(HttpError(403));
    }
    const token = jwt.sign({ id }, ACCESS_SECRET_KEY, { expiresIn: '30s' });
    const refreshToken = jwt.sign({ id }, REFRESH_SECRET_KEY, { expiresIn: '7d' });
    const newUser = await User.findByIdAndUpdate(user._id, { token, refreshToken }, { new: true });
    if (!newUser) throw HttpError(403);

    res.status(200).json({
      result: { user: { token: newUser.token, refreshToken: newUser.refreshToken } },
    });
  } catch {
    next(HttpError(403));
  }
});

module.exports = refresh;
