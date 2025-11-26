const message = document.getElementById("message");

let grades = [];
let average = 0;
let numSubjects = parseInt(prompt("How many subjects did you do?"), 10);

while (isNaN(numSubjects)) {
  numSubjects = parseInt(prompt("Please enter a valid number of subjects."));
}

for (let i = 0; i < numSubjects; ++i) {
  let grade = Number(prompt("What grade did you get on subject " + (i + 1)));
  while (isNaN(numSubjects)) {
    grade = Number(prompt("Please enter a valid grade for subject " + (i + 1)));
  }
  grades.push(grade);
  average += grade;
}

average /= numSubjects;

for (let [idx, grade] of grades.entries()) {
  message.innerHTML +=
    "Your grade for subject " +
    (idx + 1) +
    " was " +
    grade.toFixed(2) +
    "</br>";
}
message.innerHTML += "Your average grade was " + average.toFixed(2);
