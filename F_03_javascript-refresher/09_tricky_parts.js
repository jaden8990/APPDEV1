console.log(5 == "5");   
console.log(5 === "5");


let notDefined;
let empty = null;

console.log("notDefined:", notDefined);
console.log("Empty:", empty);

const student = {
  name: "Janna",

  regularMethod: function () {
    console.log("Regular method this.name:", this.name);
  },

  arrowMethod: () => {
    console.log("Arrow method this.name:", this.name); 
  }
};

student.regularMethod();
student.arrowMethod();

// Reference vs. copy
const originalNumbers = [1, 2, 3];

const referenceCopy = originalNumbers;
referenceCopy.push(4);

console.log("Original after reference copy:", originalNumbers);
console.log("Reference copy:", referenceCopy);

// Spread creates a new array
const spreadCopy = [...originalNumbers];
spreadCopy.push(5);

console.log("Original after spread copy:", originalNumbers);
console.log("Spread copy:", spreadCopy);