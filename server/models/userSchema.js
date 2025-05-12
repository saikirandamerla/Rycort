const mongoose = require('mongoose');

// This schema defines the structure for storing user information, including their email, password, role, and associated school.
const UserSchema = new mongoose.Schema({
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
        maxlength: 120
    },
    name: {
        type: String,
        required: true
    },
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School',
        required: true
    },
    isStudent: {
        type: Boolean,
        default: true
    },
    isTeacher: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;