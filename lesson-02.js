"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

const shopName = "Maison Sarah"; // const because the shop name is permanent
let totalOrders = 45; // let because order count changes daily
const ownerName = "Sarah"; // const because the owner don't changes
let isOpen = true; // let because the shop opens and closes each day
let orderFulfilledRate = 0.99; // let because the number recount every day

console.log(shopName);
console.log(totalOrders);
console.log(ownerName);
console.log(isOpen);
console.log(orderFulfilledRate);

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

console.log(typeof shopName); // string
console.log(typeof totalOrders); // number
console.log(typeof ownerName); // string
console.log(typeof isOpen); // boolean
console.log(typeof orderFulfilledRate); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined
/* The typeof null returning "object" is the famous historical bug in JavaScript.*/

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

let uninitializedVariable; // variable declared but not assigned a value
let nullVariable = null; // variable explicitly assigned to null

console.log(uninitializedVariable); // undefined
console.log(nullVariable); // null
console.log(typeof uninitializedVariable); // undefined
console.log(typeof nullVariable); // object
/* The difference between `undefined` and `null` is that `undefined` means a variable has been declared but not assigned a value, while `null` is a value that can be assigned to a variable to indicate that it has no value. */

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

let priceNumber = Number(priceText); // convert string to number
let countNumber = Number(countText); // convert string to number
let flagBoolean = Boolean(flagText); // convert string to boolean
let myNumber = 42;
let myNumberString = String(myNumber); // convert number to string
let myString = "not-a-number";
let myStringNumber = Number(myString); // convert string to number

console.log(priceNumber, typeof priceNumber); // 4.5, number
console.log(countNumber, typeof countNumber); // 12, number
console.log(flagBoolean, typeof flagBoolean); // true, boolean
console.log(myNumberString, typeof myNumberString); // "42", string
console.log(myStringNumber, typeof myStringNumber); // NaN, number
/* The conversion that would produce `NaN` is `Number("not-a-number")` */

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
let bakeryName = "Maison Sarah"; // changed const to let to allow reassignment
bakeryName = "The Corner Bakery";
let openingHour = 7; // declared openingHour with let to fix assignment to undeclared variable
let loafCount = 12; // declared loafCount with let to fix assignment to undeclared variable
console.log(loafCount); // moved the console.log statement after the declaration of loafCount to fix reading before declaration

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

let a = 5;
let b = 10;
console.log(a, b); // 5, 10
let temp = a;
a = b;
b = temp;
console.log(a, b); // 10, 5
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
