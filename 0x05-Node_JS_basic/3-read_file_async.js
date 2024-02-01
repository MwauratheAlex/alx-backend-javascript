const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const students = data.trim().split('\n');
        let studentReport = '';
        studentReport += `Number of students: ${students.length - 1}\n`;
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
          const noStudentsInFeild = studentsInField.length;
          const studentList = studentsInField.join(', ');
          studentReport += `Number of students in ${field}: ${noStudentsInFeild}. List: ${studentList}\n`;
        }
        console.log(studentReport);
        resolve(studentReport);
      }
    });
  });
}

module.exports = countStudents;
