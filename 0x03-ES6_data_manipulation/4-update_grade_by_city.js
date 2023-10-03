export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);

  const gradedStudents = cityStudents.map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: studentGrade[0] ? studentGrade[0].grade : 'N/A',
    };
  });

  return gradedStudents;
}
