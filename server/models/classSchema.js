// server/models/classSchema.js
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  schoolId: {
    type: String,
    required: true
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: false
  },
  subjects: [{
    name: {
      type: String,
      required: true
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher'
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Class', classSchema);
