const students = [
  { name: "Jaden", grade: 85 },
  { name: "Janessa", grade: 92 },
  { name: "Daniel", grade: 55 },
  { name: "Jacob", grade: 68 }
];

// Filter passing students
const passingStudents = students.filter((student) => student.grade >= 60);

console.log("Passing students:", passingStudents);

// Find Janessa
const janessa = students.find((student) => student.name === "Janessa");

console.log("Janessa:", janessa);

// Check if some student failed
const hasFailedStudent = students.some((student) => student.grade < 60);

console.log("Some student failed:", hasFailedStudent);

// Sort students by grade, highest to lowest
const sortedStudents = [...students].sort((a, b) => b.grade - a.grade);

console.log("Students sorted by grade:", sortedStudents);