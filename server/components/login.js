const express = require('express');
const router = express.Router();
const User = require('../models/userSchema'); // Adjust this path as per your project structure

// POST 
// POST /
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body);
  if (!email || !password) {
    return res.json({ success: false, message: 'Please enter both email and password.' });
  }

  // TEMP: insert fake data for testing (remove this in production)
 

  try {
    const emailTrimmed = email.trim();
console.log("Email being searched for:", emailTrimmed);
const user = await User.findOne({ emailId: emailTrimmed });

    console.log("hi");
    console.log("user",user);
    if (!user) {
      return res.json({ success: false, message: 'User not found.' });
    }

    if (user.password !== password) {
      return res.json({ success: false, message: 'Invalid credentials.' });
    }
   
    let role = null;
    console.log(role)
    const userObj = user.toObject();
    console.log("isStudent:", typeof userObj.isStudent, userObj.isStudent);
    console.log("isTeacher:", typeof userObj.isTeacher, userObj.isTeacher);
    console.log("isAdmin:", typeof userObj.isAdmin, userObj.isAdmin);
    
    if (userObj.isStudent)  role = 'student';
    else if (userObj.isTeacher) role = 'teacher';
    else if (userObj.isAdmin) role = 'administrator';
    console.log(role)

    if (!role) {
      
      return res.json({ success: false, message: 'User role not defined.' });
    }

    return res.json({ success: true, role });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

module.exports = router;
