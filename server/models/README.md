# Database Schemas Overview

This document provides the full, up-to-date Mongoose schema definitions for all models in the `server/models` directory. Each schema is shown as it is currently implemented in code.

---

## 1. User Schema (`userSchema.js`)
```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  emailId: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/ // email format validation
  },
  password: {
    type: String,
    required: true,
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
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    required: true,
    default: 'student'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
```

---

## 2. Attendance Schema (`attendanceSchema.js`)
```js
const mongoose = require('mongoose');

const attendanceRecordSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  status: {
    type: String,
    enum: ['present', 'absent'],
    required: true
  }
});

const attendanceSchema = new mongoose.Schema({
  date: {
    type: String, // Consider Date type if you want date operations
    required: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  records: [attendanceRecordSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Attendance', attendanceSchema);
```

---

## 3. Class Schema (`classSchema.js`)
```js
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  subjects: [{
    name: {
      type: String,
      required: true
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher'
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Class', classSchema);
```

---

## 4. Notes Schema (`notesSchema.js`)
```js
const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Note', notesSchema);
```

---

## 5. School Schema (`schoolSchema.js`)
```js
const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  schoolId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  classesRegistered: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('School', schoolSchema);
```

---

## 6. Section Schema (`sectionSchema.js`)
```js
const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  sectionId: {
    type: String,
    required: true,
    unique: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true
  },
  inchargeTeacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Assuming the teacher also has a User profile
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Referencing User documents (students)
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Section', sectionSchema);
```

---

## 7. Student Schema (`studentSchema.js`)
```js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  admissionNumber: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section',
    required: true
  },
  attendancePercentage: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  parentPhoneNumber: {
    type: String,
    required: true,
    match: /^\d{10}$/ // Basic phone number format (India 10-digit)
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
```

---

## 8. Task Schema (`taskSchema.js`)
```js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
```

---

## 9. Teacher Schema (`teacherSchema.js`)
```js
const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  subjects: [{
    type: String
  }],
  phone: {
    type: String,
    match: /^\d{10}$/ // 10-digit validation (customize as needed)
  },
  experience: {
    type: String // e.g., "5 years", "3.5 years"
  },
  notes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note'
  }],
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Teacher', teacherSchema);
```

---

> For the most up-to-date schema definitions, refer to the respective files in `server/models/`.
