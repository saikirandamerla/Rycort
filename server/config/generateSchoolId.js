const School = require('../models/schoolSchema');

const generateSchoolId = async () => {
  let unique = false;
  let schoolId;

  while (!unique) {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    schoolId = `S${randomNum}`;
    const existing = await School.findOne({ schoolId });
    if (!existing) unique = true;
  }

  return schoolId;
};

module.exports = generateSchoolId;
