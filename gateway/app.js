const express = require('express');
const { join } = require('path');
const helmet = require('helmet');
const { handleHttpError } = require('error-handler-module');
const compression = require('compression');
const storeInstance = require('./store');
const mongodb = require('./mongodb');
const config = require('./config');
const logger = require('./lib/logger');
const auth = require('./routes/auth');

const app = express();

const startServer = async () => {
  const { client, dbInstance } = await mongodb(config.mongo);
  const store = await storeInstance({
    config: config.mongo,
    dbInstance,
  });
  app.use(helmet({
    contentSecurityPolicy: false,
  }));
  app.use(compression());

  app.use('/api/v1/auth', auth({
    store,
    config: config.auth,
  }));

  app.use(express.static('build'));
  app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'build', 'index.html'));
  });

  app.use(handleHttpError(logger));

  return { app, store, mongodb: client, dbInstance };
};

module.exports = startServer;
