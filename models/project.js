var dbJs = require('./db.js');

var mongoose  = require('mongoose');

var projectSchema = mongoose.Schema({
//    name: String,
//    funding: String,
//    desc: String,
//    remedy: String
    name: String,
    priority: String,
    fundingApproved: String,
    requestorName: String,
	requestorEmail: String,
	submittedDate: String,
	details: [{
		anticipatedBudget: String,
		requestedStartDate: String,
        requestedEndDate: String,
        projectType: String,
        kpaAlignedStrategicInitiative: String,
        scope: String,
        reason: String,
        executiveSponsor: String,
        businessSponsor: String,
		applicationsImpacted:[String],
		departmentImpacted:[String],
		regionsImpacted:[String],
		servicesImpacted:[String]
	}],
	assessment: [{
		emtLead: String,
		emtPrimaryOwner: String,
		emtTeamsImpacted:[String],
		projectType: String,
		budget: [
			{
				benefitAmount: String,
				benefitDescription: String
			}
		]
	}],
	comments: [{
		desc: String,
		commentDate: String,
		commenter: String
	}]
});

module.exports = mongoose.model('Project',projectSchema);
