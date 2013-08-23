var express = require('express');

var env = process.env.NODE_ENV || 'development',
  config = require('./config/config')[env],
  mongoose = require('mongoose');

// Bootstrap database
mongoose.connect(config.db);

// Configure server
var app = express();
require('./config/express')(app);
require('./config/routes')(app);

// Start listening
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Application started on port ' + port);

module.exports = app;
