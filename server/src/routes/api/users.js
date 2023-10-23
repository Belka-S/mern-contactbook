const express = require('express');

const ctrl = require('../../controllers');
// const validate = require('../../validation');
const { authenticate, upload } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.patch('/profile', upload.single('avatar'), ctrl.users.updateProfile);
router.delete('/delete', ctrl.users.deleteProfile);

module.exports = router;
