var exphbs  = require('express-handlebars'),
  express = require('express'),
  env = process.env.NODE_ENV || 'development',
  config = require('./config')[env];

var hbs = exphbs.create({
  layout: 'layout'
});

module.exports = function(app) {
  app.use(express.static(config.rootPath + '/public'));
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  app.use(express.compress());
  app.use(express.methodOverride());
  app.use(express.bodyParser());
};
