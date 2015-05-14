var Application = require('../models/application.js');

var indexController = {
  index: function(req, res) {
    res.render('index');
  }
};

module.exports = indexController;