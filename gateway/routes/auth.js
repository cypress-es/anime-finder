const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/config', (req, res) => (
  res.json(authController.getConfig())
));

module.exports = router;
