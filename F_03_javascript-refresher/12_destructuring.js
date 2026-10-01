const person = {
  name: "Jaden ",
  age: 20,
  course: "Information Technology"
};

const { name, age } = person;

console.log("Name:", name);
console.log("Age:", age);

const hobbies = ["Gaming", "Photography", "Cooking"];

const [hobby1, hobby2] = hobbies;

console.log("Hobby 1:", hobby1);
console.log("Hobby 2:", hobby2);

function printName({ name }) {
  console.log("Person's name:", name);
}

printName(person);