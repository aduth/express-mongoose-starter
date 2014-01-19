var env = process.env.NODE_ENV || 'development',
  config = require('./config')[env];

module.exports = function (app) {
  //=============================
  // Static
  //=============================
  app.get('/', function(req, res) {
    res.sendfile('/index.html', { root: config.rootPath });
  });

  //=============================
  // Bookmark
  //=============================
  var person = require('../app/controllers/person');
  app.get('/person/', person.index);
  app.get('/person/:id', person.show);
  app.post('/person/', person.create);
  app.put('/person/:id', person.update);
  app.del('/person/:id', person.delete);
};
