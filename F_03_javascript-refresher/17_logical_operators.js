const values = [0, "", "hello", null, undefined, [], {}];

for (const value of values) {
  if (value) {
    console.log(value, "is truthy");
  } else {
    console.log(value, "is falsy");
  }
}
