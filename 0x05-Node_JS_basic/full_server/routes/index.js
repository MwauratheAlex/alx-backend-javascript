const appController = require('../controllers/AppController');
const studentController = require('../controllers/StudentController');

function mapRoutes(app) {
  app.get('/', appController.getHomepage);
  app.get('/students', studentController.getAllStudents);
  app.get('/students/*', studentController.getAllStudentsByMajor);
}

module.exports = mapRoutes;
