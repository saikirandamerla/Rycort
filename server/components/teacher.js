const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Teacher = require('../models/teacherSchema');
const User = require('../models/userSchema');
const School = require('../models/schoolSchema');

router.post('/create', async (req, res) => {
  const { emailId, password, name, schoolId, subject, phone, experience } = req.body;

  // Field validation
  if (!emailId || !password || !name || !schoolId || !subject || !phone || !experience) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // 1. Check for existing user
    const existingUser = await User.findOne({ emailId });
    console.log(existingUser);
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }
    const existingSchool=await School.findOne({schoolId:schoolId})
    if(!existingSchool){
        return res.status(409).json({message:'School does not exist'})
    }
    console.log(existingSchool);

    // 2. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Create the user
    console.log(emailId);
    console.log(name);
    const newUser = new User({
      emailId,
      password: hashedPassword,
      name,
      schoolId:existingSchool._id,
      role: "teacher",
    });
    await newUser.save();
    console.log(JSON.stringify(newUser, null, 2));

    // 4. Create the teacher
    const newTeacher = await Teacher.create({
      userId: newUser._id,
      subjects: subject,
      phone,
      experience,
      notes: [],
      tasks: []
    });

    res.status(201).json({
      message: 'Teacher created successfully',
      user: newUser,
      teacher: newTeacher
    });

  } catch (error) {
    console.error('Error creating teacher:', error);
    res.status(500).json({
      message: 'Failed to create teacher',
      error: error.message
    });
  }
});

module.exports = router;
