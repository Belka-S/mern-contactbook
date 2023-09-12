const express = require('express');

const { contacts } = require('../../controllers');
const { ctrlWrapper, validateBody } = require('../../decorators');
const { isValidId, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/contact');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrlWrapper(contacts.getAll));
router.get('/:id', isValidId, ctrlWrapper(contacts.getById));
router.post('/', validateBody(schemas.addSchema), ctrlWrapper(contacts.add));
router.put('/:id', isValidId, validateBody(schemas.addSchema), ctrlWrapper(contacts.updateById));
router.patch(
  '/:id/favorite',
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(contacts.updateFavoriteById),
);
router.delete('/:id', isValidId, ctrlWrapper(contacts.removeById));

module.exports = router;
