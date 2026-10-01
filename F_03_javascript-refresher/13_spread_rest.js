const numbers = [10, 20, 30];

const newNumbers = [...numbers, 40, 50];

console.log("Original numbers:", numbers);
console.log("New numbers:", newNumbers);

const user = {
  name: "janessa",
  age: 20,
  course: "Information Technology"
};

const newUser = {
  ...user,
  hobby: "Gaming"
};

console.log("Original user:", user);
console.log("New user:", newUser);

function sum(...args) {
  return args.reduce((total, number) => total + number, 0);
}

console.log("Sum:", sum(10, 20, 30, 40));