var Application = require('../models/application.js');

var apiController = {
  success: function(req, res) {
    res.render('success');
  },
  applicants: function(req, res) {
    Application.find({}, function(err, apps){
      res.render('applicants', {
        applications: apps
      });
    });
  },
  userId: function(req, res) {
    Application.findById(req.params.userId, function(err, info){
      res.render('newapplicant', {
        info: info
      });
    });
  },
  addApplication: function(req, res){
    var newApp = new Application(req.body);
    newApp.save(function(err, result){
      res.redirect('/applicants');
    });
  },
  deleteApplication: function(req, res){
    Application.findByIdAndRemove(req.params.applicantId, function(err, results){
      res.redirect('/applicants');
    });
  }

};

module.exports = apiController;