// server/models/sectionSchema.js
const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  sectionId: {
    type: String,
    required: true,
    unique: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true
  },
  inchargeTeacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Assuming the teacher also has a User profile
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Referencing User documents (students)
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Section', sectionSchema);
