const fs = require('fs');

function countStudents(path) {
  if (!(fs.existsSync(path) && fs.statSync(path).isFile())) {
    throw new Error('Cannot load the database');
  }
  const students = fs
    .readFileSync(path, { encoding: 'utf8' })
    .trim().split('\n');

  const studentField = {};
  console.log(`Number of students: ${students.length - 1}`);

  for (let i = 1; i < students.length; i += 1) {
    const studentData = students[i].trim().split(',');
    const field = studentData[studentData.length - 1];
    const firstname = studentData[0];

    if (!(field in studentField)) {
      studentField[field] = [];
    }
    studentField[field].push(firstname);
  }

  Object.keys(studentField).forEach((field) => {
    const fnames = studentField[field];
    const l = fnames.join(', ');

    console.log(
      `Number of students in ${field}: ${fnames.length}. List: ${l}`,
    );
  });
}

module.exports = countStudents;
