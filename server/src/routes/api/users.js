const express = require('express');

const ctrl = require('../../controllers');
// const validate = require('../../validation');
const { authenticate, upload } = require('../../middlewares');

const router = express.Router();

router.patch('/avatars', authenticate, upload.single('avatar'), ctrl.users.updateAvatar);
// router.get('/verify/:verificationCode', ctrl.users.verifyEmail);

module.exports = router;
