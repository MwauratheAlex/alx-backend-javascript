interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacher {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacher = (firstName: string, lastName: string) => {
  return `${firstName[0]}. ${lastName}`;
};

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}
