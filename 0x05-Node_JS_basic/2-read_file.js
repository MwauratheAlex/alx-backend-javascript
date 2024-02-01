const fs = require('fs');

function countStudents(path) {
  if (!(fs.existsSync(path) && fs.statSync(path).isFile())) {
    throw new Error('Cannot load the database');
  }
  const students = fs
    .readFileSync(path, 'utf8')
    .trim()
    .split('\n');
  console.log(`Number of students: ${students.length - 1}`);

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
  for (const field of Object.keys(fieldStudents)) {
    const studentsInField = fieldStudents[field];
    const listOfFirstNames = studentsInField.join(', ');
    console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${listOfFirstNames}`);
  }
}

module.exports = countStudents;
