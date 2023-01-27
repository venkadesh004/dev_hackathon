const express = require('express');
const Router = express.Router();

const { getCategory } = require('../controllers/categoryControllers');

Router.route('/cate').get(getCategory);

module.exports = Router;