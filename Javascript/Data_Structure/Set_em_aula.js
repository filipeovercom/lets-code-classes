const fruits = ["banana", "apple", "grape", "lemon", "lemon", "orange"];

console.log("Should have 6 fruits: ", fruits.length === 6);

const uniqueFruits = new Set(fruits);

console.log("Should have 5 unique fruits: ", uniqueFruits.size === 5);

console.log("Entries: ", uniqueFruits.entries());
console.log("Keys: ", uniqueFruits.keys());
console.log("Values: ", uniqueFruits.values());

uniqueFruits.add("lemon");

console.log("New Values: ", uniqueFruits.values());

console.log("Has lemon: ", uniqueFruits.has("lemon"));

console.log("Has strawberry: ", uniqueFruits.has("strawberry"));