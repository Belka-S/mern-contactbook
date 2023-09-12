const express = require('express');

const { users } = require('../../controllers');
const { ctrlWrapper, validateBody } = require('../../decorators');
const { isValidId, authenticate, upload } = require('../../middlewares');
const { schemas } = require('../../models/user');

const router = express.Router();

router.get('/', ctrlWrapper(users.getAll));
router.get('/current', authenticate, ctrlWrapper(users.getCurrent));
router.patch('/avatars', authenticate, upload.single('avatar'), ctrlWrapper(users.updateAvatar));
router.patch(
  '/:id',
  isValidId,
  validateBody(schemas.updateSubscriptionSchema),
  ctrlWrapper(users.updateSubscriptionById),
);
router.get('/verify/:verificationCode', ctrlWrapper(users.verifyEmail));
router.post(
  '/verify',
  validateBody(schemas.emailVerificationSchema),
  ctrlWrapper(users.resendVerificationEmail),
);

module.exports = router;
