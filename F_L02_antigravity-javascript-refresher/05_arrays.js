const favoriteFoods = ["Bread", "Adobo", "Nilaga"];

favoriteFoods.push("Pancit");

favoriteFoods.shift();

console.log("favorite foods:");

for (const food of favoriteFoods) {
  console.log(food);
}

const foodMessages = favoriteFoods.map((food) => `I like ${food}`);
console.log(foodMessages);