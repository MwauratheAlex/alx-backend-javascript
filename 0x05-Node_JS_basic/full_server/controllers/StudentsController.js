/* eslint-disable-next-line no-unused-vars */
const express = require('express');
const readDatabase = require('../utils');

class StudentsController {
  /**
  * GET /students
  * @param {express.Request} req
  * @param {express.Response} res
  */
  static async getAllStudents(_, res) {
    const db = process.argv.length > 2 ? process.argv[2] : '';
    await readDatabase(db)
      .then((data) => {
        let message = 'This is the list of our students';
        Object.keys(data).forEach((field) => {
          const fnames = data[field];
          const fnamelist = fnames.join(', ');
          message += `\nNumber of students in ${field}: ${fnames.length}. `;
          message += `List: ${fnamelist}`;
        });
        res.status(200).send(message);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  /**
  * GET /students/:Major
  * @param {express.Request} req
  * @param {express.Response} res
  */
  static async getAllStudentsByMajor(req, res) {
    const db = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    const acceptedMajors = ['CS', 'SWE'];

    if (!major || acceptedMajors.indexOf(major) === -1) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    await readDatabase(db)
      .then((data) => {
        const fnames = data[major].join(', ');
        res.status(200).send(`List: ${fnames}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
