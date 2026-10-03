function greet(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

const square = (num) => num * num;

function calculator(numberOne, numberTwo) {
  return {
    sum: numberOne + numberTwo,
    product: numberOne * numberTwo
  };
}

console.log(greet("Janna"));
console.log("Square:", square(7));

const results = calculator(8, 4);
console.log("Sum:", results.sum);
console.log("Product:", results.product);