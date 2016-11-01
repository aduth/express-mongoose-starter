var mongoose = require('mongoose'),
  env = process.env.NODE_ENV || 'development',
  config = require('../../config/config')[env],
  Schema = mongoose.Schema;

//=============================
// Schema
//=============================
var personSchema = new Schema({
  firstName: String,
  lastName: String,
});

//=============================
// Virtual properties
//=============================
personSchema.virtual('name').get(function() {
  return this.firstName + ' ' + this.lastName;
});

//=============================
// Methods
//=============================
personSchema.statics.findByName = function(name, cb) {
  this.find({ name: new RegExp(name, 'i') }, cb);
};


var Person = mongoose.model('Person', personSchema);

module.exports = Person

new Person({firstName: "Foo", lastName: "Bar"}).save();
