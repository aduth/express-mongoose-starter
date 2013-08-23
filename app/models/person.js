var mongoose = require('mongoose'),
  env = process.env.NODE_ENV || 'development',
  config = require('../../config/config')[env],
  Schema = mongoose.Schema;

//=============================
// Schema
//=============================
var PersonSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//=============================
// Validation
//=============================
PersonSchema.path('age').validate(function(value) {
  return value > 0;
}, 'A person\'s age must be positive');

//=============================
// Virtual properties
//=============================
PersonSchema.virtual('name').get(function() {
  return this.firstName + ' ' + this.lastName;
});

//=============================
// Methods
//=============================
PersonSchema.statics.findByName = function(name, cb) {
  this.find({ name: new RegExp(name, 'i') }, cb);
};

module.exports = mongoose.model('Person', PersonSchema);
