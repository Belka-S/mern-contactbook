const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrl.contacts.getAll);
router.get('/:id', isValidId, ctrl.contacts.getById);
router.post('/', validate.contacts.addSchema, ctrl.contacts.add);
router.put('/:id', isValidId, validate.contacts.addSchema, ctrl.contacts.updateById);
router.patch(
  '/:id/favorite',
  isValidId,
  validate.contacts.updateFavoriteSchema,
  ctrl.contacts.updateFavoriteById,
);
router.delete('/:id', isValidId, ctrl.contacts.removeById);

module.exports = router;
