// server/models/attendanceSchema.js
const mongoose = require('mongoose');

const attendanceRecordSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  status: {
    type: String,
    enum: ['present', 'absent'],
    required: true
  }
});

const attendanceSchema = new mongoose.Schema({
  date: {
    type: String, // Consider Date type if you want date operations
    required: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  records: [attendanceRecordSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Attendance', attendanceSchema);
