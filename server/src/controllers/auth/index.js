const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const google = require('./google');
const verifyEmail = require('./verifyEmail');
const refreshToken = require('./refreshToken');
const getUser = require('./getUser');
const forgotPass = require('./forgotPass');
const resetPass = require('./resetPass');

module.exports = {
  register,
  login,
  logout,
  google,
  verifyEmail,
  refreshToken,
  getUser,
  forgotPass,
  resetPass,
};
