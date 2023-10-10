const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const google = require('./google');
const verify = require('./verify');
const refreshToken = require('./refreshToken');
const getCurrent = require('./getCurrent');

module.exports = { register, login, logout, google, verify, refreshToken, getCurrent };
