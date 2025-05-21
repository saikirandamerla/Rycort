const express = require('express');
const router = express.Router();
const School = require('../models/schoolSchema');

// Utility function to generate schoolId from school name
const generateSchoolId = async (name) => {
    // Step 1: Create base ID (e.g., acronym or camel-case-ish)
    const base = name
        .split(' ')
        .map(word => word[0].toUpperCase())
        .join(''); // "UHS" from "Unique High School"

    let schoolId = base + Math.floor(100 + Math.random() * 900); // "UHS123"
    let exists = await School.findOne({ schoolId });

    // Retry until unique ID found (or add timestamp fallback)
    while (exists) {
        schoolId = base + Math.floor(100 + Math.random() * 900); // Try new number
        exists = await School.findOne({ schoolId });
    }

    return schoolId;
};

// POST /api/schools — Add a new school
router.post('/', async (req, res) => {
    try {
        const { name, address, classesRegistered } = req.body;

        if (!name || !address) {
            return res.status(400).json({ error: 'Name and address are required' });
        }

        const schoolId = await generateSchoolId(name);

        const newSchool = new School({
            schoolId,
            name,
            address,
            classesRegistered: classesRegistered || []
        });

        await newSchool.save();
        res.status(201).json({ message: 'School added successfully', school: newSchool });
    } catch (error) {
        console.error('Error adding school:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
