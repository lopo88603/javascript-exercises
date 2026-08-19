"use strict";

// Lesson 05 exercise: Functions
// In your exercise repository, create a branch named `lesson-05-exercise` and switch to it,
// then open `lesson-05.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Take the order pricing chain from the previous exercise, which the file provides again, and
// wrap it in a declared function that receives the order size as a parameter. Call the
// function with four different sizes and log each result.

// * The pricing chain from the previous exercise, provided again:
const orderSize = 14;
if (orderSize > 12) {
  console.log("Large order, call the bakery ahead");
} else if (orderSize > 6) {
  console.log("Medium order, ready in an hour");
} else {
  console.log("Small order, walk right in");
}

function getOrderMessage(orderSize) {
  if (orderSize > 12) {
    console.log("Large order, call the bakery ahead");
  } else if (orderSize > 6) {
    console.log("Medium order, ready in an hour");
  } else {
    console.log("Small order, walk right in");
  }
}

console.log(getOrderMessage(14)); // Large order, call the bakery ahead
console.log(getOrderMessage(10)); // Medium order, ready in an hour
console.log(getOrderMessage(5)); // Small order, walk right in

// TODO: Part two.
// Change the function so that it returns its message instead of printing inside the body, and
// move every `console.log` to the call site. Add a one-sentence comment on why the returning
// version is more reusable.

function getOrderMessage(orderSize) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead"; // ← change to return!
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour"; // ← change to return!
  } else {
    return "Small order, walk right in"; // ← change to return!
  }
}

console.log(getOrderMessage(14)); // Large order, call the bakery ahead
console.log(getOrderMessage(10)); // Medium order, ready in an hour
console.log(getOrderMessage(5)); // Small order, walk right in

// The returning version is more reusable because it allows the caller to decide what to do with the message, such as logging it, storing it, or using it in further computations, rather than being limited to printing it immediately.

// TODO: Part three.
// The file provides two small declared helper functions. Convert the first into a function
// expression and the second into a one-line arrow function with an implicit return, and prove
// with logged calls that the behavior of both is unchanged.

// * The two provided helpers, convert the first to a function expression,
// * the second to a one-line arrow function with an implicit return:
// function double(n) {
//   return n * 2;
// }
// function shout(text) {
//   return `${text.toUpperCase()}!`;
// }

const double = function (n) {
  return n * 2;
};
const shout = (text) => `${text.toUpperCase()}!`;

console.log(double(5)); // 10
console.log(shout("hello")); // "HELLO!"

// TODO: Part four.
// Give your pricing function a default parameter value, and log one call that supplies the
// argument and one call that relies on the default.

function getOrderMessage(orderSize = 0) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}

console.log(getOrderMessage(14)); // Large order, call the bakery ahead
console.log(getOrderMessage()); // Small order, walk right in

// TODO: Part five.
// Write a function named `repeat` that receives a callback and a count, and calls the callback
// that many times using the counting pattern provided in the file's starter comments. Pass it
// an arrow function of your own and run it.

// * The starter counting pattern for repeat(callback, count):
// * let i = 1;
// * while (i <= count) { call the callback here; i = i + 1; }

function repeat(callback, count) {
  let i = 1;
  while (i <= count) {
    callback();
    i = i + 1;
  }
}

repeat(() => console.log("Hello!"), 3); // Logs "Hello!" three times
repeat((num) => console.log(`Count: ${num}`), 5); // Logs "Count: undefined" five times, since the callback doesn't receive an argument

// TODO: Part six.
// The file contains a short program with global, function, and block declarations, including
// one shadowed name. Before running it, write a comment predicting each logged line; then run
// it, correct your misses, and leave both prediction and result visible.

// * The provided scope program, predict every logged line before running:
const shopName = "Maison Sarah";
function greet(customer) {
  const shopName = "The Corner Bakery";
  return `Welcome to ${shopName}, ${customer}`;
}
console.log(greet("Anna")); // prediction: Welcome to The Corner Bakery, Anna, actually: Welcome to The Corner Bakery, Anna
console.log(shopName); // prediction: Maison Sarah, actually: Maison Sarah
if (true) {
  const insideIf = "visible in here";
  console.log(insideIf); // prediction: visible in here, actually: visible in here
}
// console.log(insideIf); // prediction first, then uncomment to verify:

// TODO: Part seven.
// Write the classic temperature converter as two functions, one converting Celsius to
// Fahrenheit and one converting back, each returning its result. Log a small table of three
// conversions in each direction, formatted with template literals and `toFixed`.

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log("Celsius to Fahrenheit:");
console.log(`0°C = ${celsiusToFahrenheit(0).toFixed(2)}°F`);
console.log(`25°C = ${celsiusToFahrenheit(25).toFixed(2)}°F`);
console.log(`100°C = ${celsiusToFahrenheit(100).toFixed(2)}°F`);

console.log("Fahrenheit to Celsius:");
console.log(`32°F = ${fahrenheitToCelsius(32).toFixed(2)}°C`);
console.log(`77°F = ${fahrenheitToCelsius(77).toFixed(2)}°C`);
console.log(`212°F = ${fahrenheitToCelsius(212).toFixed(2)}°C`);

// Log a small table of three conversions in each direction
console.log("Celsius to Fahrenheit:");
console.log(`0°C = ${celsiusToFahrenheit(0).toFixed(2)}°F`);
console.log(`25°C = ${celsiusToFahrenheit(25).toFixed(2)}°F`);
console.log(`100°C = ${celsiusToFahrenheit(100).toFixed(2)}°F`);

console.log("Fahrenheit to Celsius:");
console.log(`32°F = ${fahrenheitToCelsius(32).toFixed(2)}°C`);
console.log(`77°F = ${fahrenheitToCelsius(77).toFixed(2)}°C`);
console.log(`212°F = ${fahrenheitToCelsius(212).toFixed(2)}°C`);

// TODO: Part eight.
// The file provides a line that throws a TypeError when run. Wrap it in `try` and `catch`, log
// a friendly sentence that contains the error's message, and log one further line after the
// block to prove the program survived.

// ! This line throws a TypeError. Keep it commented until this part,
// ! then uncomment it and wrap it in try and catch:
try {
  const answer = 42;
  console.log(answer.toUpperCase()); // This will throw a TypeError because `answer` is a number, not a string.
} catch (error) {
  console.log("An error occurred:", error.message);
}
console.log("Program survived the error.");

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
