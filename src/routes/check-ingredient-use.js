const controller = require('../controllers/check-ingredient-use');
const Router = require('express').Router;
const router = new Router();

router.route('/')
  .get((...args) => controller.find(...args));

module.exports = router;