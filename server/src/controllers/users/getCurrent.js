const getCurrent = async (req, res) => {
  const { name, email } = req.user;

  res.status(200).json({ status: 'success', code: 200, result: name, email });
};

module.exports = getCurrent;
