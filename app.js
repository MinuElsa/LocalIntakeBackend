/*eslint-env node*/
//------------------------------------------------------------------------------
// node.js BACKEND API Starter example for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
var express = require('express');

var routes = require('./routes/routes.js'); // BAS - 5/10/2016
// create a new express server
var app = express();
// body parser
var bodyParser = require('body-parser');
var path = require('path');
//Added for checking jsonwebtoken
var jwt        = require("jsonwebtoken");

// cfenv provides access to your Cloud Foundry environment
 var cfenv = require('cfenv');
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
//
var port = appEnv.port || '6002';
var routeUrl =  appEnv.bind || 'localhost';
var mongoUrl = appEnv.getServiceURL('kaisermongodb');
var mongoService = appEnv.getService("kaisermongodb");

/*var port =  '6002';
var routeUrl =  'localhost';
var mongoUrl = null;
var mongoService = null;*/

//Testing credentials for Compose
//console.log("mongo:user=" + mongoService.credentials.user);
//console.log("mongo:password=" + mongoService.credentials.password);
//console.log("mongo:uri=" + mongoService.credentials.uri);
//console.log("mongo:port=" + mongoService.credentials.port);

//Bind mongodb connection
/*var mongoose = require('mongoose');
if (mongoUrl == null) {
  //local development
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/project');
} else {
  //Bluemix cloud foundry - Compose service connection
  var mongooseUrl = 'mongodb://' + mongoService.credentials.user + ':' + mongoService.credentials.password + '@' + mongoService.credentials.uri + ':' + mongoService.credentials.port + '/project';
  //console.log('mongooseUrl:' + mongooseUrl);
  mongoose.Promise = global.Promise;
  mongoose.connect(mongooseUrl);
}*/

//JSON body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));
// For index.html
app.use(express.static(path.join(__dirname, 'www')));

app.use('/', routes);

//project
//var project =  require('./routes/project.js')(app);
//

// start server on the specified port and binding host
app.listen(port, routeUrl, function() {
  console.log("server starting on " + routeUrl + ":" + port);
});
