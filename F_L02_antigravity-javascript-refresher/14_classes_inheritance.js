class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello! My name is ${this.name}.`);
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is to learn new things.`);
  }
}

const student = new Student("jaden");

student.sayHello();
student.study();