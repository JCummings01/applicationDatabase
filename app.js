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

app.get('/success', apiController.success);
// displays a list of applicants
app.get('/applicants', apiController.applicants);
app.get('/delete/:applicantId', apiController.deleteApplication);
app.get('/newApplicant/:userId', apiController.userId);
  // Here is where you need to get the data
  // from the post body and store it in the database
app.post('/addApplication', apiController.addApplication);

var server = app.listen(8441, function() {
  console.log('Express server listening on port ' + server.address().port);
});