const express = require('express');
const initAuthController = require('../controllers/authController');

const router = express.Router();

const initRouter = ({ store, config }) => {
  const authController = initAuthController({
    store,
    config,
  });
  router.get('/config', (req, res) => (
    res.json(authController.getConfig())
  ));

  router.get('/oauth', (req, res) => {
    return res.json(authController.registerUser(req.query.code))
  });

  return router;
};

module.exports = initRouter;
