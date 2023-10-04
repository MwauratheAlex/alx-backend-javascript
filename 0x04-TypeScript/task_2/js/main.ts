interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak?(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak?(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }

  getToWork() {
    return "Getting a coffee break";
  }

  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }

  getCoffeeBreak() {
    return "Cannot have a break";
  }

  workTeacherTasks() {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") return "Teaching Math";

  return "Teaching History";
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
