/**
 * http://usejsdoc.org/
 */
exports.authenticate = function authenticate(req,res){
	console.log("Authenticated.."+req.body.userName+" , "+req.body.password);
	res.json({info: 'Authenticated'});
}