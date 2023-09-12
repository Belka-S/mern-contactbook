const { Router } = require('express');

const router = Router();

const authRouter = require('./api/auth');
const usersRouter = require('./api/users');
const contactsRouter = require('./api/contacts');

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/contacts', contactsRouter);

module.exports = router;
