var env = process.env.NODE_ENV || 'development',
  config = require('./config')[env];

module.exports = function (app, passport) {
  //=============================
  // Static
  //=============================
  app.get('/', function(req, res) {
    res.sendfile('/index.html', { root: config.rootPath });
  });

  //=============================
  // Bookmark
  //=============================
  var PersonController = require('../app/controllers/person');
  app.get('/person/', PersonController.index);
  app.get('/person/:id', PersonController.show);
  app.post('/person/', PersonController.create);
  app.put('/person/', PersonController.update);
  app.del('/person/:id', PersonController.delete);
};
