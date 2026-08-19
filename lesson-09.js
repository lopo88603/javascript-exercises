"use strict";

// Lesson 09 exercise: The DOM and forms
// In your exercise repository, create a branch named `lesson-09-exercise` and switch to it.
// This lesson works with two provided files: open `lesson-09.html` with Live Server and keep
// the DevTools Console open, and write all JavaScript in `lesson-09.js`, which the page
// already loads with `defer`. The questions wait as comments in the JavaScript file.

// TODO: Part one.
// Log one sentence to the console, then log `document.title`, and confirm that both appear in
// the DevTools Console rather than in a terminal. In a comment, state what the `defer`
// attribute prevented.

console.log("Lesson 09: The DOM and forms");
console.log("Document title:", document.title);
// The `defer` attribute prevented the script from blocking the HTML parsing and ensured that the script runs after the document has been fully parsed, allowing access to the DOM elements.

// TODO: Part two.
// Select the page's `h1` with `querySelector` and replace its `textContent` with a label name
// of your choosing. Select the tagline by its class and change its text, then add the provided
// highlight class to it through `classList`.

// Select the page's `h1` and change its text content
const h1Element = document.querySelector("h1");
h1Element.textContent = "My Custom Label";

// Select the tagline by its class and change its text
const taglineElement = document.querySelector(".tagline");
taglineElement.textContent = "A collection of amazing artists";

// Add the highlight class to the tagline
taglineElement.classList.add("highlight");

// TODO: Part three.
// The file provides the artists as an array of objects. Loop over it, create an `article`
// containing an `h3` for the name and a `p` for the genre and total runtime, fill both through
// dot notation and a template literal, and append each finished card into the element that
// carries the cards class. Reload the page and confirm that five cards stand on it.

// * The artists, provided:
const artists = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

// Select the container for the artist cards
const cardsContainer = document.querySelector(".cards");

function renderCards() {
  cardsContainer.innerHTML = ""; // Clear existing cards
  // Loop over the artists array and create cards
  for (const artist of artists) {
    // Create an article element for the card
    const card = document.createElement("article");
    // Create the h3 element for the artist's name
    const nameElement = document.createElement("h3");
    nameElement.textContent = artist.name;
    // Create the p element for the artist's genre and total runtime
    const infoElement = document.createElement("p");
    infoElement.textContent = `${artist.genre} (${artist.total})`;
    // Append the elements to the card
    card.appendChild(nameElement);
    card.appendChild(infoElement);
    // Append the card to the container
    cardsContainer.appendChild(card);
  }
}

// TODO: Part four.
// Add a sixth artist object of your own invention to the array and reload. Confirm that the
// sixth card exists, and state in a comment what you did not have to change, compared with the
// five hand-copied cards this course opened on.

artists.push({ name: "Taylor Swift", genre: "Pop", total: "12:34" });

renderCards(); // Call the function to render the cards
// I did not have to change the card rendering logic or the HTML structure; the loop automatically handled the new artist object and created a card for it without any additional code changes.

// TODO: Part five.
// The page provides a button with the shuffle class and an element with the featured class. On
// click, pick a random artist using the random recipe with `Math.floor`, and write a featured
// sentence into the featured element with a template literal.

const shuffleButton = document.querySelector(".shuffle");
const featuredElement = document.querySelector(".featured");

shuffleButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * artists.length);
  const randomArtist = artists[randomIndex];
  featuredElement.textContent = `Featured Artist: ${randomArtist.name} - ${randomArtist.genre} (${randomArtist.total})`;
});

// TODO: Part six.
// The page provides a form with the signup class and a text input with the artist-name id. On
// submit, call `preventDefault` on the event, read the input's `value`, and, when the value is
// truthy, push a new artist object built from it into the array and append one new card for
// it, reusing your card-building code from part three, ideally as a function that both parts
// call. An empty submission does nothing; name in a comment which falsy value makes that check
// work. As a stretch, clear the input by assigning it an empty string after each successful
// addition.

const signupForm = document.querySelector(".signup");
const artistNameInput = document.getElementById("artist-name");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const artistName = artistNameInput.value;
  if (artistName) {
    artists.push({ name: artistName, genre: "Unknown", total: "0:00" });

    // Re-render the cards to include the new artist
    renderCards();
    // Clear the input field after successful addition
    artistNameInput.value = "";

    console.log(`Added new artist: ${artistName}`);
  }
});
// The falsy value that makes the check work is an empty string ("").

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main. This is the final exercise of the course, and the reviewed merge closes it.
// TODO: Submit the link to the pull request for review.
