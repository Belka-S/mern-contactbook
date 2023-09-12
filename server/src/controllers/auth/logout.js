const { User } = require('../../models/user');
// const { HttpError } = require('../../utils');

const logout = async (req, res) => {
  const newUser = await User.findByIdAndUpdate(req.user._id, { token: null }, { new: true });
  // res.status(204); // .json({ message: 'Logged out' });
  res.json({ message: 'Logged out' });
};

module.exports = logout;
