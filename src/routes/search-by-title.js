const controller = require('../controllers/search-by-title');
const Router = require('express').Router;
const router = new Router();

router.route('/')
  .get((...args) => controller.find(...args));

module.exports = router;