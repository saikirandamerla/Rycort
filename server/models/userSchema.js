const mongoose = require('mongoose');

// Check if the model already exists before defining it
const User = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
  emailId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    maxlength: 120,
  },
  name: {
    type: String,
    required: true,
  },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true,
  },
  isStudent: {
    type: Boolean,
    default: true,
  },
  isTeacher: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
}));

module.exports = User;
