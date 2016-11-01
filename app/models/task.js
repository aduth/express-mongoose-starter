/** 
* module dependencies
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.ENV["MONGODB_URI"] || "mongodb://localhost/sunflower");

/** 
* schema definition
*/
var userSchema = new Schema({
  user_id: Number,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  user_joined: Date
});

var taskSchema = new Schema({
  task_id: Number,
  task_description: String 
});

var taskProgressSchema = new Schema({
  user_id: Number,
  task_id: Number,
  progress: Boolean
});

/** 
*schema model
*/
var Users = mongoose.model('Users', userSchema);
var Tasks = mongoose.model('Tasks', taskSchema);
var Progress = mongoose.model('Progress', taskProgressSchema);

/** 
*make model available to  users in Node applications
*/
module.exports = Users;
module.exports = Tasks;
module.exports = Progress;


// create 10 new tasks
var Task1 = new Tasks({
  task_description: 'Buy coffee for the next person in line',
  task_id: 1
});

var Task2 = new Tasks({
  task_description: 'Write a letter to a friend',
  task_id: 2
});

var Task3 = new Tasks({
  task_description: 'Call your parents to say hi',
  task_id: 3
});

var Task4 = new Tasks({
  task_description: 'Compliment a stranger',
  task_id: 4
});

var Task5 = new Tasks({
  task_description: 'Tell a friend something you really appreciate about them',
  task_id: 5
});

var Task6 = new Tasks({
  task_description: 'Go to a dance class',
  task_id: 6
});

var Task7 = new Tasks({
  task_description: 'Go for a walk with a friend',
  task_id: 7
});

var Task8 = new Tasks({
  task_description: 'Make dinner for a friend',
  task_id: 8
});

var Task9 = new Tasks({
  task_description: 'Hold the door for the next person',
  task_id: 9
});

var Task10 = new Tasks({
  task_description: 'Email a friend you haven\'t spoken to in a year just to say hi',
  task_id: 10
});

/** 
*save the tasks
*/

Task1.save(function(err) {
  if (err) throw err;
  
  console.log('Task created!');
});

Task2.save(function(err) {
  if (err) throw err;

  console.log('Task created!');
});

Task3.save(function(err) {
  if (err) throw err;

  console.log('Task created!');
});

Task4.save(function(err) {
  if (err) throw err;

  console.log('Task created!');
});

Task5.save(function(err) {
  if (err) throw err;

  console.log('Task created!');
});

Task6.save(function(err) {
  if (err) throw err;

  console.log('Task created!');
});

Task7.save(function(err) {
  if (err) throw err;

  console.log('Task created!');
});

Task8.save(function(err) {
  if (err) throw err;

  console.log('Task created!');
});

Task9.save(function(err) {
  if (err) throw err;

  console.log('Task created!');
});

Task10.save(function(err) {
  if (err) throw err;

  console.log('Task created!');
});

/** 
*get and display all the tasks
*/
Tasks.find({}, function(err, tasks) {
  if (err) throw err;

/** 
*object of all the tasks
*/
  console.log(tasks);
});
