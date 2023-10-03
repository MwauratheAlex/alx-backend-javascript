export default function getStudentIdsSum(students) {
  if (Array.isArray(students) === false) return 0;

  return students.reduce((accumulator, currentStudent) => accumulator + currentStudent.id, 0);
}
