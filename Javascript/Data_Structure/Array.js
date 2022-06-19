console.log("Defining an array with fruits");
const fruitsBox = ["🍌", "🍎", "🍌", "🟠", "🍌"];
console.log("Fruits box: ", fruitsBox);

console.log("Inserting a pineapple at the end of the fruitsBox");
fruitsBox.push("🍍");

console.log("Inserting a grape at the begining of the fruitsBox");
fruitsBox.unshift("🍇");

console.log("Fruits box now: ", fruitsBox);

console.log("Get and remove the last element in the array");
const pineapple = fruitsBox.pop();
console.log("Pineapple: ", pineapple);

console.log("Get and remove the first element in the array");
const grape = fruitsBox.shift();
console.log("Grape: ", grape);

console.log("Fruits box now: ", fruitsBox);

console.log("Filtering and getting a new array of bananas");
const bananasBox = fruitsBox.filter(fruit => fruit === "🍌");
console.log("Fruits box: ", fruitsBox);
console.log("Bananas box: ", bananasBox);

console.log("Transforming fruits and getting a new array of strawberries");
const strawberriesBox = fruitsBox.map(fruit => "🍓");
console.log("Fruits box: ", fruitsBox);
console.log("Bananas box: ", bananasBox);
console.log("Strawberries box: ", strawberriesBox);

console.log("Getting a juice of strawberry");
const strawberriesJuice = strawberriesBox.reduce((previous, current, index, result) => previous + index + current);
console.log("Fruits box: ", fruitsBox);
console.log("Bananas box: ", bananasBox);
console.log("Strawberries box: ", strawberriesBox);
console.log("Strawberry juice: ", strawberriesJuice);
