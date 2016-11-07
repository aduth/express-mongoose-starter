var env = process.env.NODE_ENV || 'development',
  config = require('./config')[env];

module.exports = function (app) {
  //=============================
  // Routes and controllers for tasks
  //=============================
  var taskControllers = require('../app/controllers/task');
  app.get('/', function(req, res) {
    res.send('woot kyle is here');
  });
  app.get('/tasks', taskControllers.showTasks);

  //=============================
  // Bookmark
  //=============================
  // var person = require('../app/controllers/person');
  // app.get('/person/', person.index);
  // app.get('/person/:id', person.show);
  // app.post('/person/', person.create);
  // app.put('/person/:id', person.update);
  // app.del('/person/:id', person.delete);
};
