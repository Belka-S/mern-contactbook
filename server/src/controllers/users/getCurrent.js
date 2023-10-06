const { ctrlWrapper } = require('../../decorators');

const getCurrent = ctrlWrapper(async (req, res) => {
  const { user } = req;

  res.status(200).json({ result: { user } });
});

module.exports = getCurrent;
