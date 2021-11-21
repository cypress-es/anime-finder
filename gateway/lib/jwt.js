const jwt = require('jsonwebtoken');

const signToken = (payload, secret, options = {}) => (
  jwt.sign(payload, secret, options)
);

const verify = (payload, secret) => (
  jwt.verify(payload, secret)
);

module.exports = {
  signToken,
  verify,
};
