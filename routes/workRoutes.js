const express = require('express');
const Router = express.Router();

const { getWorks, addWork, updateWorkers, getCategoryWorks, getApplications, updateApplication } = require('../controllers/workControllers');

Router.route('/:workID').get(getWorks);
Router.route('/addWork').post(addWork);
Router.route('/updateWorkers').patch(updateWorkers);
Router.route('/getCategoryWorks/:category').get(getCategoryWorks);
Router.route('/getApplications/:workID').get(getApplications);
Router.route('/updateApplication/:username').patch(updateApplication);

module.exports = Router;