const { User } = require('../../models/user');

const getAll = async (req, res) => {
  const user = await User.find();
  res.json({ status: 'success', code: 200, result: user });
};

module.exports = getAll;
