const controller = require('./initial-load.controller');
const Router = require('express').Router;
const router = new Router();

router.route('/')
    .get((...args) => controller.insertMany(...args));

module.exports = router;