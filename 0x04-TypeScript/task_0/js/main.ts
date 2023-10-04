interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mwaura",
  lastName: "Mbugua",
  age: 25,
  location: "Juja",
};

const student2: Student = {
  firstName: "Atieno",
  lastName: "Chege",
  age: 20,
  location: "Juja",
};

const studentsList: Student[] = [student1, student2];

const body = document.body;
const table = document.createElement("table");

studentsList.forEach((student) => {
  const tr = table.insertRow();

  const tdName = tr.insertCell();
  tdName.appendChild(document.createTextNode(student["firstName"]));

  const tdLocation = tr.insertCell();
  tdLocation.appendChild(document.createTextNode(student["location"]));
});

body.appendChild(table);
