"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

const menu = [
  "Sourdough Bread",
  "Croissant",
  "Danish Pastry",
  "Baguette",
  "Focaccia",
];

console.log(menu); // Log the whole array
console.log(menu[0]); // Log the first item
console.log(menu[menu.length - 1]); // Log the last item using length minus 1
console.log(menu.length); // Log the array's length

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

menu.push("Bagel"); // Adds to the end of the array
console.log(menu); // Log after push

menu.unshift("Croissant"); // Adds to the beginning of the array
console.log(menu); // Log after unshift

menu.pop(); // Removes from the end of the array
console.log(menu); // Log after pop

menu.shift(); // Removes from the beginning of the array
console.log(menu); // Log after shift

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

console.log("Using a counting for loop:");
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

console.log("Using a for...of loop:");
for (const item of menu) {
  console.log(item);
}

// I would choose a counting for loop when I need the index for additional logic or calculations, and a for...of loop when I only need to access the values directly without concern for their indices.

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

const displayStrings = prices.map((price) => `€${price.toFixed(2)}`);
console.log(displayStrings); // Logs an array of display strings

const affordableItems = prices.filter((price) => price < 5);
console.log(affordableItems); // Logs an array of prices under five euros

const expensiveItem = prices.find((price) => price > 10);
console.log(expensiveItem); // Logs the first price over ten euros

// `forEach` would have returned `undefined` in their place, as it doesn't return a value.
// This is the well-known trap of `forEach` - it's often misused when a method like `map` or `filter` is more appropriate.

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];

// Loop and log cards
console.log("Artists:");
for (let artist of artists) {
  console.log(`Artist: ${artist}`);
  console.log(`Check out the latest hits from ${artist}!\n`);
  console.log("---");
}

// Add a new artist
artists.push("Dido");
console.log("\nAfter adding Dido:");

for (let artist of artists) {
  console.log(`Artist: ${artist}`);
  console.log(`Check out the latest hits from ${artist}!\n`);
  console.log("---");
}

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

const menuCopy = menu; // Shared reference
menuCopy.push("Muffin");
console.log("Original menu after pushing to menuCopy:", menu); // ["Sourdough Bread", "Croissant", "Danish Pastry", "Baguette", "Focaccia", "Muffin"]
console.log("menuCopy:", menuCopy); // ["Sourdough Bread", "Croissant", "Danish Pastry", "Baguette", "Focaccia", "Muffin"]

// Create a spread copy
const menuSpreadCopy = [...menu];
menuSpreadCopy.push("Scone");
console.log("Original menu after pushing to menuSpreadCopy:", menu); // ["Sourdough Bread", "Croissant", "Danish Pastry", "Baguette", "Focaccia", "Muffin"]
console.log("menuSpreadCopy:", menuSpreadCopy); // ["Sourdough Bread", "Croissant", "Danish Pastry", "Baguette", "Focaccia", "Muffin", "Scone"]
console.log("Length of original menu:", menu.length); // 6
console.log("Length of menuSpreadCopy:", menuSpreadCopy.length); // 7

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

// FizzBuzz implementation
console.log("FizzBuzz from 1 to 100:");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Compute the sum of the numbers array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum of numbers:", sum);

// Find the largest value in the numbers array
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("Largest number:", largest);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i].toLowerCase();
  }
  return reversed;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("cAr")); // "rac"
console.log(reverseString("JavaScript")); // "tpircSavaj"

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello")); // 2
console.log(countVowels("cAr")); // 1
console.log(countVowels("JavaScript")); // 3

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
