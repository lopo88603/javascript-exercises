"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.

const shopName = "Maison Sarah";
const openingHour = 8;
const closingHour = 18;

console.log(
  `Welcome to ${shopName}! We are open from ${openingHour} to ${closingHour}.`,
);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";
let cleaned = messy
  .trim() // trim() removes whitespace from both ends of a string.
  .replace("Maison   Sarah", "Maison Sarah") // replace() replaces the specified substring with a new one.
  .toUpperCase(); // toUpperCase() converts all characters in a string to uppercase.

console.log(cleaned);

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

console.log(product.length); // Logs the length of the product string.
console.log(product.indexOf("Loaf")); // Logs the position at which the word "Loaf" begins.
console.log(product.slice(10, 14)); // Logs a slice containing the word "Loaf".
const flavors = flavorList.split(","); // split() splits a string into an array of substrings based on the specified delimiter (comma in this case).
console.log(flavors); // Logs the resulting array of flavors.

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

const finalPrice = netPrice * (1 + taxRate);
console.log(`The final price is $${finalPrice.toFixed(2)}.`); // toFixed(2) formats the number to two decimal places. This formatting step must come last because it converts the number to a string, and we want to perform calculations on the numeric value before formatting it for display.

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.

let randomNumber = Math.floor(Math.random() * 6) + 1; // Generates a random whole number from 1 to 6.
console.log(randomNumber);

let randomNumber10to20 = Math.floor(Math.random() * 11) + 10; // Generates a random whole number from 10 to 20 by multiplying Math.random() by 11 (the range size) and adding 10 (the minimum value).
console.log(randomNumber10to20);

// Explanation: The adaptation involves changing the multiplier to 11 (the range size from 10 to 20) and adding 10 to shift the range from starting at 0 to starting at 10, thus producing a random number between 10 and 20 inclusive.

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.

let exampleString = "Hello, world!";
console.log(exampleString.charAt(7)); // charAt() returns the character at the specified index in a string. In this case, it returns the character at index 7, which is "w".

const fullNumber = "+49 123-4567-2016";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");
console.log(maskedNumber);
// padStart() pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. In this case, it pads the last 4 digits of the phone number with asterisks to mask the rest of the number.

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.

let firstName = "Max";
let lastName = "Mustermann";
let username = (firstName[0] + lastName).toLowerCase();
console.log(username);

let adjective = "fluffy";
let noun = "cat";
let verb = "jumps";
let place = "chimney";

console.log(`Yesterday the ${adjective} ${noun} ${verb} on the ${place}.`);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
