// server/models/studentSchema.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  admissionNumber: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section',
    required: true
  },
  attendancePercentage: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  parentPhoneNumber: {
    type: String,
    required: true,
    match: /^\d{10}$/ // Basic phone number format (India 10-digit)
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
