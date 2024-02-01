import readDatabase from '../utils';

class StudentController {
  static getAllStudents(_, res) {
    const databaseFile = process.argv.length > 2 ? process.argv[2] : '';
    const cmpFxn = (a, b) => {
      if (a[0].toLowerCase() < b[0].toLowerCase()) {
        return -1;
      }
      if (a[0].toLowerCase() > b[0].toLowerCase()) {
        return 1;
      }
      return 0;
    };

    const title = 'This is the list of our students';
    readDatabase(databaseFile)
      .then((studentData) => {
        let studentDataString = '';
        for (const field of Object.keys(studentData).sort(cmpFxn)) {
          const noStudents = studentData[field].length;
          const studentList = studentData[field].join(', ');
          studentDataString
                += `\nNumber of students in ${field}: ${noStudents}. List: ${studentList}`;
        }
        res.status(200).send(`${title}${studentDataString}`);
      })
      .catch((err) => {
        res.status(500).send(`${err instanceof Error ? err.message : err.toString()}`);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { url } = req;
    const databaseFile = process.argv.length > 2 ? process.argv[2] : '';
    if (!(url.endsWith('CS') || url.endsWith('SWE'))) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(databaseFile)
      .then((studentData) => {
        if (url.endsWith('CS')) {
          res.status(200).send(`List: ${studentData.CS.join(', ')}`);
        } else {
          res.status(200).send(`List: ${studentData.SWE.join(', ')}`);
        }
      })
      .catch((err) => {
        res.status(500).send(`${err instanceof Error ? err.message : err.toString()}`);
      });
  }
}

export default StudentController;
