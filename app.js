var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/applicationMon');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', indexController.index);

app.get('/applicants', apiController.applicants);
app.get('/delete/:applicantId', apiController.deleteApplication);
app.get('/newApplicant/:userId', apiController.userId);
app.post('/addApplication', apiController.addApplication);

var server = app.listen(8441, function() {
  console.log('Express server listening on port ' + server.address().port);
});