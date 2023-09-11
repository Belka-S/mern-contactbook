const mongoose = require('mongoose');

const app = require('./app');

const { PORT = 3001, DB_HOST } = process.env;

// Run server
mongoose
  .connect(DB_HOST)
  .then(console.info('  -> Connected to MongoDB!'))
  .then(app.listen(PORT, () => console.log(`  -> Server:  http://localhost:${PORT}/`)))
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
