const mongoose = require('mongoose');

var Schema = mongoose.Schema({
  title: String,
  detail: String,
  priority: String,
  gitUrl: String,
  isComplete: String
});

module.exports = mongoose.model('Project', Schema);
