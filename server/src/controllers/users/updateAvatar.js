const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const { User } = require('../../models/user');
const { HttpError } = require('../../utils');

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const fileName = `${req.user._id}_${originalname}`;
  const resultUpload = path.join(__dirname, '..', 'public', 'avatars', fileName);

  try {
    await sharp(tempUpload).resize(200, 200, { fit: sharp.fit.cover }).toFile(resultUpload);
    await fs.unlink(tempUpload);
    const avatarUrl = path.join('public', 'avatars', fileName);

    const user = await User.findByIdAndUpdate(req.user._id, { avatarUrl }, { new: true });
    if (!user) throw HttpError(403);
    
    res.status(200).json({ status: 'success', code: 200, result: user });
  } catch (error) {
    return error;
  }
};

module.exports = updateAvatar;
