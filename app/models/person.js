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
  age: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//=============================
// Validation
//=============================
personSchema.path('age').validate(function(value) {
  return value > 0;
}, 'A person\'s age must be positive');

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

module.exports = mongoose.model('Person', personSchema);
