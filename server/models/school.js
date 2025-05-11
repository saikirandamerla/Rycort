const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    schoolId: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('School', schoolSchema);