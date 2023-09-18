const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../utils');

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(HttpError(400, `ID ${id} is not valid`));
  }
  next();
};

module.exports = isValidId;