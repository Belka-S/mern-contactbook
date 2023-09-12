const express = require('express');

const { auth } = require('../../controllers');
const { ctrlWrapper, validateBody } = require('../../decorators');
const { authenticate } = require('../../middlewares');
const { schemas } = require('../../models/user');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrlWrapper(auth.register));

router.post('/login', validateBody(schemas.loginSchema), ctrlWrapper(auth.login));

router.post('/logout', authenticate, ctrlWrapper(auth.logout));

module.exports = router;
