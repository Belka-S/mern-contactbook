const express = require('express');

const { contacts } = require('../../controllers');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, isValidId, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/contact');

const router = express.Router();

// GET
router.get('/', authenticate, ctrlWrapper(contacts.getAll));
router.get('/:id', authenticate, isValidId, ctrlWrapper(contacts.getById));

// POST
router.post('/', authenticate, validateBody(schemas.addSchema), ctrlWrapper(contacts.add));

// PUT
router.put(
  '/:id',
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(contacts.updateById),
);

// PATCH
router.patch(
  '/:id/favorite',
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(contacts.updateFavoriteById),
);

// DELETE
router.delete('/:id', isValidId, authenticate, ctrlWrapper(contacts.removeById));

module.exports = router;
