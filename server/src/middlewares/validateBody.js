const HttpError = require('../helpers/HttpError');

const validateBody = schema => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, 'Validation error'));
    }
    next();
  };
};

module.exports = validateBody;
