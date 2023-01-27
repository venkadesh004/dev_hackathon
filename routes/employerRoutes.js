const express = require('express');
const Router = express.Router();

const { getEmployer, addEmployer, updateWorks, getLogin } = require('../controllers/employerControllers');

Router.route('/:username').get(getEmployer);
Router.route('/addEmployer').post(addEmployer);
Router.route('/updateWork').patch(updateWorks);
Router.route('/login/:username').get(getLogin);

module.exports = Router;