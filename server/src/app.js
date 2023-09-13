const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
require('dotenv').config();

const router = require('./routes');
const { logFile } = require('./utils');

const app = express();

// Write logs to file
app.use(logFile);
// Logging
const fotmatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(fotmatsLogger));
// Enable CORS
app.use(cors());
// Parse JSON
app.use(express.json());
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes handling
app.use('/api', router);

// Missing route error 404: 'Not Found',
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Global error 500: 'Internal Server Error',
app.use((err, req, res, next) => {
  const { status = 500, code, message = 'Server error!' } = err;
  res.status(status).json({ code, message });
});

module.exports = app;
