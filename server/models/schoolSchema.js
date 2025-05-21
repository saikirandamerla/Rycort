// server/models/schoolSchema.js
const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  schoolId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  classesRegistered: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('School', schoolSchema);
