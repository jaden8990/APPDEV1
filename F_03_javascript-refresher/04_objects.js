const aboutMe = {
  name: "Janna",
  age: 20,
  course: "Information Technology",

  introduce() {
    console.log(
      `Hi! I'm ${this.name}, I'm ${this.age} years old, and I'm studying ${this.course}.`
    );
  }
};

aboutMe.hobby = "watching drama series";

aboutMe.introduce();

console.log("Hobby:", aboutMe.hobby);