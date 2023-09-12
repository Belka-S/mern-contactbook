const getAll = require('./getAll');
const getCurrent = require('./getCurrent');
const updateSubscriptionById = require('./updateSubscriptionById');
const updateAvatar = require('./updateAvatar');
const verifyEmail = require('./verifyEmail');
const resendVerificationEmail = require('./resendVerificationEmail');

module.exports = {
  getAll,
  getCurrent,
  updateSubscriptionById,
  updateAvatar,
  verifyEmail,
  resendVerificationEmail,
};
