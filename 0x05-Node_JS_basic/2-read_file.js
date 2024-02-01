const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const students = data.trim().split('\n');
    const noOfStudents = students.length - 1;
    const fieldStudents = {};
    for (let i = 1; i < students.length; i += 1) {
      const studentData = students[i].trim().split(',');
      const firstName = studentData[0];
      const field = studentData[studentData.length - 1];
      if (!(field in fieldStudents)) {
        fieldStudents[field] = [];
      }
      fieldStudents[field].push(firstName);
    }
    console.log(`Number of students: ${noOfStudents}`);
    for (const field of Object.keys(fieldStudents)) {
      const studentsInField = fieldStudents[field];
      const noStudents = studentsInField.length;
      const studentsStr = studentsInField.join(', ');
      console.log(`Number of students in ${field}: ${noStudents}. List: ${studentsStr}`);
    }
  });
}

module.exports = countStudents;
