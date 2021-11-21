const express = require('express');
const { errorFactory, CustomErrorTypes, tagError } = require('error-handler-module');
const initAuthController = require('../controllers/authController');

const router = express.Router();
const wrongInputError = errorFactory(CustomErrorTypes.WRONG_INPUT);

const initRouter = ({ store, config }) => {
  const authController = initAuthController({
    store,
    config,
  });
  router.get('/config', (req, res) => (
    res.json(authController.getConfig())
  ));

  router.get('/oauth', async (req, res, next) => {
    try {
      const { code } = req.query;
      if (!code) {
        throw wrongInputError('Code is required');
      }
      const response = await authController.registerUser(req.query.code)
      return res.json(response);
    } catch (error) {
      return next(tagError(error));
    }
  });

  return router;
};

module.exports = initRouter;
