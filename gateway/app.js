const express = require('express');
const { join } = require('path');
const helmet = require('helmet');
const compression = require('compression');
const storeInstance = require('./store');
const config = require('./config');
const auth = require('./routes/auth');

const app = express();

const startServer = async () => {
  const store = await storeInstance({
    config: config.mongo,
  });
  app.use(helmet({
    contentSecurityPolicy: false,
  }));
  app.use(compression());

  app.use('/api/auth', auth({
    store,
    config: config.auth,
  }));

  app.use(express.static('build'));
  app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'build', 'index.html'));
  });

  return app;
};

module.exports = startServer;
