const { User } = require('../../models/user');
const { ctrlWrapper } = require('../../decorators');
const { cloudinary, HttpError, filterValues } = require('../../utils');

const updateProfile = ctrlWrapper(async (req, res) => {
  const { name, location, socialLink, whatsApp, telegram, birthday, about } = req.body;
  const { _id } = req.user;
  let avatarUrl = req.user.avatarUrl;

  // Update avatar
  if (req.file) {
    const { avatarId } = req.user;
    if (avatarId) await cloudinary.destroy(avatarId);
    const { url, public_id } = await cloudinary.upload(req.file.path);
    avatarUrl = url;

    const avatar = { avatarUrl: url, avatarId: public_id };
    const newUser = await User.findByIdAndUpdate(_id, avatar);
    if (!newUser) throw HttpError(403, 'Failed to update avatar');
  }
  const profileData = { name, location, socialLink, whatsApp, telegram, birthday, about };

  // Update user data
  const newUser = await User.findByIdAndUpdate(_id, profileData, { new: true });
  if (!newUser) throw HttpError(403, 'Failed to update user profile');

  res.status(200).json({
    message: 'Profile updated',
    result: { user: { ...req.user, ...filterValues(profileData), avatarUrl } },
  });
});

module.exports = updateProfile;
