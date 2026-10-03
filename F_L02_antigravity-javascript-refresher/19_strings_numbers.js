const messyName = "  John Daniel  ";

const fullName = messyName.trim();
const [firstName, lastName] = fullName.split(" ");
const upperFirstName = firstName.toUpperCase();
const hasDaniel = fullName.includes("Daniel");

console.log("Full name:", fullName);
console.log("First name:", firstName);
console.log("Last name:", lastName);
console.log("Uppercase first name:", upperFirstName);
console.log('Includes "Daniel":', hasDaniel);


const pixels = parseInt("42px");

console.log("Parsed number:", pixels);

const roundedNumber = 19.9999.toFixed(2);

console.log("Rounded number:", roundedNumber);

const result = "abc" / 2;

console.log("Result:", result);
