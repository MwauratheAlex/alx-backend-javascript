const fs = require('fs');

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err || !data) {
        reject(new Error('Error reading file'));
        return;
      }
      const students = data.trim().split('\n');
      const studentObject = {};
      for (let i = 1; i < students.length; i += 1) {
        const studentData = students[i].trim().split(',');
        const field = studentData[studentData.length - 1];
        const fname = studentData[0];

        if (!(field in studentObject)) {
          studentObject[field] = [];
        }
        studentObject[field].push(fname);
      }

      resolve(studentObject);
    });
  });
}

module.exports = readDatabase;
