const express = require('express');

const ctrl = require('../../controllers');
// const validate = require('../../validation');
const { authenticate, upload } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.patch('/avatar', upload.single('avatar'), ctrl.users.updateAvatar);
router.delete('/delete', ctrl.users.deleteProfile);

module.exports = router;
