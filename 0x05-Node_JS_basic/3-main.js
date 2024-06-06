const countStudents = require('./3-read_file_async');

countStudents('databse.csv')
  .then(() => {
    console.log('Done!');
  })
  .catch((error) => {
    console.log(error);
  });

console.log('after');
