function fetchUserMock(callback) {
  setTimeout(() => {
    const user = {
      name: "Jaden",
      age: 21,
      course: "Information Technology"
    };

    callback(user);
  }, 1000);
}

function displayUser(user) {
  console.log("User fetched:", user);
}

console.log("Fetching user with callback...");

fetchUserMock(displayUser);


function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        name: "Jaden",
        age: 21,
        course: "Information Technology"
      };

      resolve(user);
    }, 1000);
  });
}

async function getUser() {
  try {
    const user = await fetchUser();

    console.log("User fetched with async/await:", user);
    console.log(`Hello, ${user.name}!`);
  } catch (error) {
    console.log("Failed to fetch user:", error.message);
  }
}

getUser();