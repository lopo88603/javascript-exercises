"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

const menuItem = {
  name: "Sourdough Bread",
  price: 3.5,
  isVegetarian: true,
  ingredients: ["flour", "water", "salt", "yeast"],
};

// Log two properties with dot notation
console.log(menuItem.name); // Sourdough Bread
console.log(menuItem.price); // 3.5
// Log one property through bracket notation with the key held in a variable
const key = "isVegetarian";
console.log("isVegetarian:", menuItem[key]);
// Brackets were required here because the property name is stored in a variable, and we need to evaluate that variable to access the property dynamically.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

const menuItemWithDescribe = {
  name: "Sourdough Bread",
  price: 3.5,
  isVegetarian: true,
  ingredients: ["flour", "water", "salt", "yeast"],
  describe: function () {
    return `This is a ${this.name} priced at €${this.price.toFixed(2)}, and is ${this.isVegetarian ? "vegetarian" : "not vegetarian"}.`;
  },
};

// Log the result of calling the describe method
console.log(menuItemWithDescribe.describe()); // This is a Sourdough Bread priced at €3.50, and is vegetarian.

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

const menuItems = [
  { name: "Sourdough Bread", price: 3.5, isVegetarian: true },
  { name: "Croissant", price: 2.0, isVegetarian: true },
  { name: "Muffin", price: 2.5, isVegetarian: true },
  { name: "Bagel", price: 2.25, isVegetarian: true },
  { name: "Donut", price: 1.75, isVegetarian: false },
];

// Walk the array with `for...of` and log a formatted line for each item
for (const item of menuItems) {
  console.log(
    `${item.name} - €${item.price.toFixed(2)} - ${item.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}`,
  );
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

// Filter vegetarian items and map to their names
const vegetarianItemNames = menuItems
  .filter((item) => item.isVegetarian)
  .map((item) => item.name);

console.log("Vegetarian Items:", vegetarianItemNames);

// Fetch the first item cheaper than three euros
const cheapItem = menuItems.find((item) => item.price < 3.0);
console.log("Cheap Item:", cheapItem);
// If `find` returns nothing (i.e., no item matches the condition), it will return `undefined`.

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

const sampleItem = menuItems[0]; // Taking the first menu item as a sample

// Log its keys
console.log("Keys:", Object.keys(sampleItem));

// Log its values
console.log("Values:", Object.values(sampleItem));

// Log every pair through a `for...of` loop over its entries
console.log("Entries:");
for (const [key, value] of Object.entries(sampleItem)) {
  console.log(`  ${key}: ${value}`);
}

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

const originalItem = menuItems[0]; // Taking the first menu item as the original
const sharedReferenceItem = originalItem;
sharedReferenceItem.price = 4.0; // Change the price through the second name
console.log(
  "Original Item after price change through shared reference:",
  originalItem,
); // Price will be 4.0

// Build a spread copy that overrides only the price
const spreadCopyItem = { ...originalItem, price: 5.0 };
console.log("Spread Copy Item:", spreadCopyItem); // Price will be 5.0
console.log("Original Item after creating spread copy:", originalItem); // Price will still be 4.0

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:const sentence =
("the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams");

const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";
const words = sentence.split(" ");
const wordFrequencyCounter = {};

for (const word of words) {
  wordFrequencyCounter[word] = (wordFrequencyCounter[word] || 0) + 1;
}

console.log("Word Frequency Counter:", wordFrequencyCounter);

// Optional: Log the entries ordered by frequency
const sortedEntries = Object.entries(wordFrequencyCounter).sort(
  (a, b) => b[1] - a[1],
);
console.log("Sorted Word Frequencies:");
for (let [word, count] of sortedEntries) {
  console.log(`${word}: ${count}`);
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
