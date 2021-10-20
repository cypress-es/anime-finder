const express = require('express');
const { join } = require('path');
const helmet = require('helmet');
const compression = require('compression');
const auth = require('./routes/auth');

const app = express();

app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(compression());

app.use('/api/auth', auth);

app.use(express.static('build'));
app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

module.exports = app;
