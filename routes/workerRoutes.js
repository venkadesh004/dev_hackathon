const express = require('express');
const Router = express.Router();

const { getWorker, addWorker, updateExperience, getLogin } = require('../controllers/workerControllers');

Router.route('/:username').get(getWorker);
Router.route('/addWorker').post(addWorker);
Router.route('/experience').patch(updateExperience);
Router.route('/login/:username').get(getLogin);

module.exports = Router;    