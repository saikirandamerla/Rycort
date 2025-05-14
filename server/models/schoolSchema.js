const mongoose = require('mongoose');
// This schema defines the structure for storing school information, including the school name, address, and registered classes.
// admin registered schools and provide atleast one teacher in the school
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
    },
    classesRegistered:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }]
});

module.exports = mongoose.model('School', schoolSchema);

