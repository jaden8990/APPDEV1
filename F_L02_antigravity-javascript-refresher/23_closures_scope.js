if (true) {
  let message = "Hello from inside the block";

  console.log("Inside block:", message);
}

try {
  console.log("Outside block:", message);
} catch (error) {
  console.log("Error:", error.message);
}


function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    return count;
  };
}

const counterA = createCounter();
const counterB = createCounter();

console.log("Counter A:", counterA());
console.log("Counter A:", counterA());

console.log("Counter B:", counterB());
console.log("Counter B:", counterB());