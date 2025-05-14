const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/userSchema');
const Student = require('../models/studentSchema');
const Class = require('../models/classSchema');

const router = express.Router();

// API to add a student
router.post('/add-student', async (req, res) => {
    try {
        const { admissionNumber, 
            password, 
            className, 
            schoolId, 
            parentPhoneNumber, 
            emailId, 
            name } = req.body;

        // Validate input
        if (!admissionNumber || !password || !className || !schoolId || !parentPhoneNumber || !name) {
            return res.status(400).json({ message: 'All fields except emailId are required.' });
        }

        // Check if the class exists in the school
        const classData = await Class.findOne({ name: className, schoolId });
        if (!classData) {
            return res.status(404).json({ message: 'Class not found for the given school.' });
        }

        // Create a new user for the student
        const user = new User({
            emailId: emailId || null, // Set emailId to null if not provided
            password,
            name,
            schoolId,
            isStudent: true,
            isTeacher: false,
            isAdmin: false
        });
        await user.save();

        // Create a new student entry
        const student = new Student({
            admissionNumber,
            userId: user._id,
            classId: classData._id,
            parentPhoneNumber
        });
        await student.save();

        res.status(201).json({ message: 'Student added successfully.', student });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
 
// API to edit student details
router.put('/edit-student', async (req, res) => {
    try {
        const { admissionNumber, name, parentPhoneNumber, className, schoolId } = req.body;

        // Validate input
        if (!admissionNumber || !name || !parentPhoneNumber || !className || !schoolId) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Find the student by admission number
        const student = await Student.findOne({ admissionNumber });
        if (!student) {
            return res.status(404).json({ message: 'Student not found.' });
        }

        // Check if the class exists in the school
        const classData = await Class.findOne({ name: className, schoolId });
        if (!classData) {
            return res.status(404).json({ message: 'Class not found for the given school.' });
        }

        // Update student details
        student.name = name;
        student.parentPhoneNumber = parentPhoneNumber;
        student.classId = classData._id;
        await student.save();

        res.status(200).json({ message: 'Student details updated successfully.', student });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// API to delete student details
router.delete('/delete-student', async (req, res) => {
    try {
        const { admissionNumber } = req.body;

        // Validate input
        if (!admissionNumber) {
            return res.status(400).json({ message: 'Admission number is required.' });
        }

        // Find the student by admission number
        const student = await Student.findOneAndDelete({ admissionNumber });
        if (!student) {
            return res.status(404).json({ message: 'Student not found.' });
        }

        // Delete the associated user
        await User.findByIdAndDelete(student.userId);

        res.status(200).json({ message: 'Student and associated user deleted successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// API to get students of a particular class in a particular school
router.get('/students', async (req, res) => {
    try {
        const { className, schoolId } = req.query;

        // Validate input
        if (!className || !schoolId) {
            return res.status(400).json({ message: 'Class name and school ID are required.' });
        }

        // Find the class by name and school ID
        const classData = await Class.findOne({ name: className, schoolId });
        if (!classData) {
            return res.status(404).json({ message: 'Class not found for the given school.' });
        }

        // Find students in the class
        const students = await Student.find({ classId: classData._id }).populate('userId', 'name emailId');

        res.status(200).json({ message: 'Students retrieved successfully.', students });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

module.exports = router;
