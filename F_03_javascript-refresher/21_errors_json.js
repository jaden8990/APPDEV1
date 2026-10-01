function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return a / b;
}

try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.log("Sorry, the calculation is failed:", error.message);
}

const user = {
  name: "Jaden",
  age: 21,
  course: "Information Technology"
};

// Convert object to JSON string
const jsonUser = JSON.stringify(user);

console.log("JSON string:", jsonUser);

// Convert JSON string back to an object
const parsedUser = JSON.parse(jsonUser);

console.log("User name:", parsedUser.name);