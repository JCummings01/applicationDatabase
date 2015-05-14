var mongoose = require('mongoose');

var applicationSchema = mongoose.Schema({
  name: String,
  bio: String,
  skills: [String],
  years: Number,
  why: String
});

var Application = mongoose.model('application', applicationSchema);

module.exports = Application;