let students = [];

function addStudent() {
  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let math = parseInt(document.getElementById("math").value);
  let science = parseInt(document.getElementById("science").value);
  let english = parseInt(document.getElementById("english").value);

  let student = { name, roll, math, science, english };
  students.push(student);
  document.getElementById("output").innerHTML = `<p>Student ${name} added successfully!</p>`;
}

function displayStudents() {
  let output = "<h3>All Students:</h3>";
  for (let student of students) {
    output += `<div class="student">
      Name: ${student.name}, Roll: ${student.roll}, 
      Math: ${student.math}, Science: ${student.science}, English: ${student.english}
    </div>`;
  }
  document.getElementById("output").innerHTML = output;
}

function calculateTotals() {
  let output = "<h3>Total Marks:</h3>";
  for (let student of students) {
    let total = student.math + student.science + student.english;
    output += `<div class="student">${student.name} (Roll: ${student.roll}) - Total: ${total}</div>`;
  }
  document.getElementById("output").innerHTML = output;
}

function calculateAverages() {
  let output = "<h3>Average Marks:</h3>";
  for (let student of students) {
    let avg = (student.math + student.science + student.english) / 3;
    output += `<div class="student">${student.name} (Roll: ${student.roll}) - Average: ${avg.toFixed(2)}</div>`;
  }
  document.getElementById("output").innerHTML = output;
}

function displayAbove80() {
  let output = "<h3>Students with Average > 80:</h3>";
  for (let student of students) {
    let avg = (student.math + student.science + student.english) / 3;
    if (avg > 80) {
      output += `<div class="student">${student.name} - Average: ${avg.toFixed(2)}</div>`;
    }
  }
  document.getElementById("output").innerHTML = output;
}

function displayFailed() {
  let output = "<h3>Failed Students (Average < 40):</h3>";
  for (let student of students) {
    let avg = (student.math + student.science + student.english) / 3;
    if (avg < 40) {
      output += `<div class="student">${student.name} - Average: ${avg.toFixed(2)}</div>`;
    }
  }
  document.getElementById("output").innerHTML = output;
}

function countStudents() {
  document.getElementById("output").innerHTML = `<h3>Total Students: ${students.length}</h3>`;
}