const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    subject: [{
        type: String
    }],
    phone: {
        type: String
    },
    experience: {
        type: String
    }
});

module.exports = mongoose.model('Teacher', teacherSchema);