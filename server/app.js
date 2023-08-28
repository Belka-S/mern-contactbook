const express = require('express');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const app = express();
const path = require('path');
const contactsRouter = require('./routes/api/contacts');
const usersRouter = require('./routes/api/users');
const authRouter = require('./routes/api/auth');
const feedbackRouter = require('./routes/feedback');
const fotmatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
const { logFile } = require('./helpers');

app.use(logger(fotmatsLogger)); // Write logs
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Write logs to file
app.use(logFile);

// Feedback form
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/contacts', contactsRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/feedback', feedbackRouter);

// Not found address error
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Send error
app.use((err, req, res, next) => {
  const { status = 500, code, message = 'Server error!' } = err;
  res.status(status).json({ message: err.message });
});

module.exports = app;
