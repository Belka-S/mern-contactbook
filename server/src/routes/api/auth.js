const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { authenticate } = require('../../middlewares');

const router = express.Router();

router.post('/register', validate.users.registerSchema, ctrl.auth.register);
router.post('/login', validate.users.loginSchema, ctrl.auth.login);
router.post('/logout', authenticate, ctrl.auth.logout);

module.exports = router;
