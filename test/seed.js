const mongoose = require('mongoose');
const User = require('../server/models/userSchema');
const Student = require('../server/models/studentSchema');
const DB = require('../server/config/connectDB'); // Adjust if your DB URI is elsewhere

async function seed() {
  try {
    // Connect to MongoDB
    await DB();
    console.log('Connected to MongoDB');

    // Check if user already exists
    let user = await User.findOne({ emailId: 'student1@example.com' });
    if (!user) {
      user = new User({
        emailId: 'student1@example.com',
        password: 'student123',
        name: 'Student One',
        schoolId: new mongoose.Types.ObjectId(), // Replace with a real schoolId if needed
        isStudent: true,
        isTeacher: false,
        isAdmin: false
      });
      await user.save();
      console.log('User created:', user);
    } else {
      console.log('User already exists:', user);
    }

    // Check if student already exists
    let student = await Student.findOne({ admissionNumber: 'ADM001' });
    if (!student) {
      student = new Student({
        admissionNumber: 'ADM001',
        userId: user._id,
        classId: new mongoose.Types.ObjectId(), // Replace with a real classId if needed
        parentPhoneNumber: '1234567890',
        Marks: [
          { subjectName: 'Math', marksObtained: 90 },
          { subjectName: 'Science', marksObtained: 85 }
        ]
      });
      await student.save();
      console.log('Student created:', student);
    } else {
      console.log('Student already exists:', student);
    }

    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (err) {
    console.error('Error seeding data:', err);
    mongoose.disconnect();
  }
}

seed();
