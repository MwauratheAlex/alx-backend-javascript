import AppController from '../controllers/AppController';
import StudentController from '../controllers/StudentController';

function mapRoutes(app) {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentController.getAllStudents);
  app.get('/students/*', StudentController.getAllStudentsByMajor);
}

export default mapRoutes;
