const getCurrent = async (req, res) => {
  const { user } = req;

  res.status(200).json({ status: 'success', code: 200, result: { user } });
};

module.exports = getCurrent;
