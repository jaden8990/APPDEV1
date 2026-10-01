const hobbies = ["Gaming", "watching drama", "Cooking"];

const hobbyMessages = hobbies.map((hobby) => `I like ${hobby}.`);

hobbyMessages.forEach((message) => {
  console.log(message);
});

const student = {
  name: "Janna",
  age: 20,
  course: "Information Technology"
};

const { name, age } = student;

console.log("Student Name:", name);
console.log("Student Age:", age);

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log("New array:", newNumbers);