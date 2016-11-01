var Person = require('../models/person.js');

//=============================
// List
//=============================
exports.index = function(req, res) {
  res.render('people', {name: "Lexsa"});
};

//=============================
// Show
//=============================
exports.show = function(req, res) {
  var id = req.params.id;
  console.log(id);

  Person.findOne({ _id: id }, function(err, person) {
    if (err) throw err;

    res.render('person', {firstName: person.firstName});
  });
};

//=============================
// Create
//=============================
exports.create = function(req, res) {
  new Person(req.body).save(function(err, person) {
    if (err) throw err;

    res.send(person);
  });
};

//=============================
// Update
//=============================
exports.update = function(req, res) {
  var id = req.params.id;

  Person.findOneAndUpdate({ _id: id }, req.body, function(err, person) {
    if (err) throw err;

    res.send(person);
  });
};

//=============================
// Delete
//=============================
exports.delete = function(req, res) {
  var id = req.params.id;

  Person.remove({ _id: id }, function (err) {
    if (err) throw err;

    res.send(200);
  });
};
