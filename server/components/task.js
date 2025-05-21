const express = require('express');
const router = express.Router();
const studentModel = require('../models/studentSchema');
const Task = require('../models/taskSchema');

// POST /api/tasks - Add a new task
router.post('/api/tasks', async (req, res) => {
    try {
        const { title, description, dueDate, schoolId, classId, sectionId, subject, teacherId } = req.body;
        if (!title || !description || !dueDate || !schoolId || !classId || !subject || !teacherId) {
            return res.status(400).json({ success: false, message: 'Missing required fields.' });
        }
        const newTask = new Task({
            title,
            description,
            dueDate,
            schoolId,
            classId,
            sectionId,
            subject,
            teacherId
        });
        await newTask.save();
        res.status(201).json({ success: true, message: 'Task created successfully.', task: newTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

// GET /api/tasks/section/:sectionId - Get all tasks for a section (for students in that section)
router.get('/api/tasks/section/:sectionId', async (req, res) => {
    try {
        const { sectionId } = req.params;
        if (!sectionId) {
            return res.status(400).json({ success: false, message: 'Section ID is required.' });
        }
        const tasks = await Task.find({ sectionId }).sort({ dueDate: 1 });
        res.status(200).json({ success: true, tasks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});
