const express = require('express');

class AppController {
  /**
   * Handles homepage
  * @param {express.Response} res
  */
  static getHomepage(_, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
