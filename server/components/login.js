const express = require('express');
const router = express.Router();
const User = require('../models/userSchema'); // Adjust this path as per your project structure
const Student = require('../models/studentSchema');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'yoyo123'; // Use env variable in production

// POST 
// POST /
router.post('/', async (req, res) => {
  const { identifier, password } = req.body;

  if (!identifier || !password) {
    return res.json({ success: false, message: 'Please enter both identifier and password.' });
  }

  try {
    let user = await User.findOne({ emailId: identifier.trim() });

    if (!user) {
      // If not found by email, try admission number in studentSchema
    
      const student = await Student.findOne({ admissionNumber: identifier.trim() }).populate('userId');
      if (student && student.userId) {
        user = student.userId;
      }
    }

    if (!user) {
      return res.json({ success: false, message: 'User not found.' });
    }

    if (user.password !== password) {
      return res.json({ success: false, message: 'Invalid credentials.' });
    }

    let role = null;
    const userObj = user.toObject ? user.toObject() : user;
    if (userObj.isStudent)  role = 'student';
    else if (userObj.isTeacher) role = 'teacher';
    else if (userObj.isAdmin) role = 'administrator';

    if (!role) {
      return res.json({ success: false, message: 'User role not defined.' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role }, JWT_SECRET, { expiresIn: '1d' });

    return res.json({ success: true, role, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

module.exports = router;
