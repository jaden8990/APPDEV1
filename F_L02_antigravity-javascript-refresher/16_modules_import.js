import greet, { studentInfo } from "./15_modules_export.js";

console.log(greet(studentInfo.name));

console.log(
  `${studentInfo.name} is ${studentInfo.age} years old and is taking ${studentInfo.course}.`
);