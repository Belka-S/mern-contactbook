const { User } = require('../../models/user');
const { ctrlWrapper } = require('../../decorators');
const { cloudinary, HttpError, restrictedAccess } = require('../../utils');

const updateProfile = ctrlWrapper(async (req, res) => {
  const { _id } = req.user;
  if (restrictedAccess.userId.includes(_id)) throw HttpError(403);

  // Update avatar
  if (req.file) {
    const { avatarId } = req.user;
    if (avatarId) await cloudinary.destroy(avatarId);
    // eslint-disable-next-line camelcase
    const { url, public_id } = await cloudinary.upload(req.file.path);
    const avatar = { avatarUrl: url, avatarId: public_id };

    const newUser = await User.findByIdAndUpdate(_id, avatar);
    if (!newUser) throw HttpError(403, 'Failed to update avatar');
  }
  // Update user data
  const newUser = await User.findByIdAndUpdate(_id, req.body, { new: true });
  if (!newUser) throw HttpError(403, 'Failed to update user profile');

  res.status(200).json({ message: 'Profile updated', result: { user: newUser } });
});

module.exports = updateProfile;
