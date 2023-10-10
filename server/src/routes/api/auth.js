const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { authenticate, passport } = require('../../middlewares');

const router = express.Router();

router.post('/register', validate.users.registerSchema, ctrl.auth.register);
router.post('/login', validate.users.loginSchema, ctrl.auth.login);
router.post('/logout', authenticate, ctrl.auth.logout);
router.post('/verify', validate.users.verifySchema, ctrl.auth.verifyEmail);
router.get('/user', authenticate, ctrl.auth.getUser);
router.post('/refresh', ctrl.auth.refreshToken);

router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
router.get('/google/cb', passport.authenticate('google', { session: false }), ctrl.auth.google);

module.exports = router;
