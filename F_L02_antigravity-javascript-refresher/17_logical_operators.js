const values = [0, "", "hello", null, undefined, [], {}];

for (const value of values) {
  if (value) {
    console.log(value, "is truthy");
  } else {
    console.log(value, "is falsy");
  }
}

const username = "Jaden";
const password = "8998";

const isAdmin = false;
const isSubscriber = true;

// Login check: both username AND password are required
const canLogin = username && password;

if (canLogin) {
  console.log("Login successful!");
} else {
  console.log("Login failed.");
}

// Can watch if the user is an admin OR a subscriber
const canWatch = isAdmin || isSubscriber;

console.log("Can watch:", canWatch);

// Short-circuiting
console.log('"" || "default":', "" || "default");
console.log('username && "Welcome!":', username && "Welcome!");