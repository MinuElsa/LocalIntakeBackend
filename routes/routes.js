/**
 * http://usejsdoc.org/
 */

var router = require('express').Router();

var routeUserAuthenticate = require('./routeUserAuthentication');
var routeUserAuth = require('./routeUserAuthorization');
var routeProject = require('./routeProjects');

router.post('/project',routeProject.createProject);
router.get('/projects',routeProject.getAllProjects);
router.get('/project/:id',routeProject.getProjectById);
router.put('/project/:id',routeProject.putProjectById);

router.post('/authenticate',routeUserAuthenticate.authenticate);

module.exports = router;