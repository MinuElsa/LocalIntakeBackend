// cfenv provides access to your Cloud Foundry environment
 var cfenv = require('cfenv');
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
//
var port = appEnv.port || '6002';
var routeUrl =  appEnv.bind || 'localhost';
var mongoUrl = appEnv.getServiceURL('kaisermongodb');
var mongoService = appEnv.getService("kaisermongodb");

var mongoose = require('mongoose');
//mongoose.connect('mongodb://blueprintapp:c0gn1zant@172.31.200.51:27017/blueprint');
//mongoose.connect('mongodb://blueprintapp:c0gn1zant@52.203.126.123:27017/blueprint'); 
//mongoose.connect('mongodb://10.243.194.97:27017/test');

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
	}

//mongoose.connect('mongodb://localhost/intake');
module.exports = mongoose;
