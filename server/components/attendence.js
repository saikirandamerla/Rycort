const express = require('express');
const mongoose = require('mongoose');

// Define Models
const Attendance = require('../models/attendanceSchema');
const Student = require('../models/studentSchema');

// Create an Express Router
const router = express.Router();

// POST: Mark attendance and update percentage
router.post('/', async (req, res) => {
  try {
    const { classId, teacherId, records } = req.body;
    const date = new Date().toDateString(); // Ensure only one record per day

    // Check if attendance is already marked for the day and class
    const alreadyMarked = await Attendance.findOne({ date, classId });
    if (alreadyMarked) {
      return res.status(400).json({ message: 'Attendance already marked for this class today' });
    }

    // Save the attendance record
    const attendance = new Attendance({
      date,
      classId,
      teacherId,
      records
    });
    await attendance.save();

    // Update the attendance percentage for each student
    for (const record of records) {
      const studentId = record.studentId;

      const stats = await Attendance.aggregate([
        { $unwind: '$records' },
        { $match: { 'records.studentId': new mongoose.Types.ObjectId(studentId) } },
        {
          $group: {
            _id: '$records.studentId',
            totalDays: { $sum: 1 },
            presentDays: {
              $sum: { $cond: [{ $eq: ['$records.status', 'present'] }, 1, 0] }
            }
          }
        }
      ]);

      if (stats.length > 0) {
        const { totalDays, presentDays } = stats[0];
        const percentage = Math.round((presentDays / totalDays) * 100);
        await Student.findByIdAndUpdate(studentId, { attendancePercentage: percentage });
      }
    }

    res.status(201).json({ message: 'Attendance saved and percentages updated' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Export the router to use in server setup
module.exports = router;
