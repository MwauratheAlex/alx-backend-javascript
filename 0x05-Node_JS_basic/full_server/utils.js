const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      const students = data.trim().split('\n');
      const fieldStudents = {};
      for (let i = 1; i < students.length; i += 1) {
        const row = students[i].trim().split(',');
        const firstname = row[0];
        const field = row[row.length - 1];

        if (!(field in fieldStudents)) {
          fieldStudents[field] = [];
        }
        fieldStudents[field].push(firstname);
      }
      resolve(fieldStudents);
    });
  });
}

module.exports = readDatabase;
