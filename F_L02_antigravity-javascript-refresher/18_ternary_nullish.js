const grade = 87;

// Ternary for pass/fail
const result = grade >= 75 ? "Passed" : "Failed";

console.log(`Grade: ${grade} - ${result}`);

// Ternary for even/odd
const number = 10;

const evenOrOdd = number % 2 === 0 ? "even" : "odd";

console.log(`The number ${number} is ${evenOrOdd}.`);

const user = {
  name: "Jaden",
  age: 0
};

// Optional chaining
const city = user.address?.city;

console.log("City:", city);

// Nullish coalescing
const age = user.age ?? 21;

console.log("Age:", age);