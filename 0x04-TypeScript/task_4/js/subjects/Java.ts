namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  class Java extends Subjects.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher() {
      if (
        this.teacher.experienceTeachingJava &&
        this.teacher.experienceTeachingJava <= 0
      ) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
