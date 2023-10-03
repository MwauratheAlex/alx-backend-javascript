export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradesMap = new Map();
  newGrades.forEach((grade) => gradesMap.set(grade.studentId, grade.grade));

  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: gradesMap.has(student.id) ? gradesMap.get(student.id) : 'N/A',
    }));
}
