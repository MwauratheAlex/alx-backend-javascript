const fs = require('fs');

/**
 * Counts the number of students and groups them by field of study.
 * @param {string} path - The path to the file containing student data.
 * @throws {Error} If the database file cannot be loaded.
 */
const countStudents = (path) => {
  if (!(fs.existsSync(path) && fs.statSync(path).isFile())) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
  const students = data.trim().split('\n');

  console.log(`Number of students: ${students.length - 1}`);

  const fieldFirstNames = {};

  for (let i = 1; i < students.length; i++) {
    const studentData = students[i].split(',');
    const field = studentData[studentData.length - 1];
    const firstname = studentData[0];
    if (!(field in fieldFirstNames)) fieldFirstNames[field] = [];
    fieldFirstNames[field].push(firstname);
  }

  for (const field of Object.keys(fieldFirstNames)) {
    const firstnames = fieldFirstNames[field].join(', ');
    const noStudents = fieldFirstNames[field].length;
    console.log(
      `Number of students in ${field}: ${noStudents}. List: ${firstnames}`
    );
  }
};

module.exports = countStudents;
