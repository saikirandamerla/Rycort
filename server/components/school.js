const express = require('express');
const router = express.Router();
const School = require('../models/schoolSchema');
const Class = require('../models/classSchema');
const generateSchoolId = require('../config/generateSchoolId');

// Create a new school
router.post('/create', async (req, res) => {
  const { name, address, classesRegistered } = req.body;

  if (!name || !address) {
    return res.status(400).json({ message: 'Name and address are required' });
  }

  const schoolId = await generateSchoolId();

  try {
    // Step 1: Create class documents
    const classDocs = await Class.insertMany(
      (classesRegistered || []).map(className => ({
        name: className,
        schoolId,  // Use generated schoolId (string), not _id
        subjects: []
      }))
    );

    // Step 2: Extract ObjectIds of created classes
    const classIds = classDocs.map(cls => cls._id);

    // Step 3: Create school with class ObjectIds
    const newSchool = new School({
      schoolId,
      name,
      address,
      classesRegistered: classIds
    });

    const savedSchool = await newSchool.save();

    res.status(201).json({
      message: 'School created successfully',
      school: savedSchool,
      classes: classDocs
    });

  } catch (err) {
    console.error('Error creating school:', err);
    res.status(500).json({
      message: 'Failed to create school',
      error: err.message
    });
  }
});

module.exports = router;
