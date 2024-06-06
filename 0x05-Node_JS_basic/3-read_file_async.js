const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err || !data) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = data.trim().split('\n');
      const studentField = {};
      for (let i = 1; i < students.length; i += 1) {
        const studentData = students[i].split(',');
        const field = studentData[studentData.length - 1];

        if (!(field in studentField)) studentField[field] = [];
        studentField[field].push(studentData[0]);
      }

      let out = '';
      out += `Number of students: ${students.length - 1}`;
      console.log(`Number of students: ${students.length - 1}`);

      Object.keys(studentField).forEach((field) => {
        const l = studentField[field].join(', ');
        const noStudents = studentField[field].length;
        out += `\nNumber of students in ${field}: ${noStudents}. List: ${l}`;
        console.log(
          `Number of students in ${field}: ${noStudents}. List: ${l}`,
        );
      });

      resolve(out);
    });
  });
}

module.exports = countStudents;
