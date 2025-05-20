// server/models/teacherSchema.js
const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  subjects: [{
    type: String
  }],
  phone: {
    type: String,
    match: /^\d{10}$/ // 10-digit validation (customize as needed)
  },
  experience: {
    type: String // e.g., "5 years", "3.5 years"
  },
  notes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note'
  }],
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Teacher', teacherSchema);
