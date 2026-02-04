/**
 * Part 1: DOM Selection Basics
 *
 * In this file, you will practice selecting DOM elements
 * using various methods.
 *
 * Open index.html in your browser and check the console (F12)
 * to see the results of your code.
 */

// ============================================
// EXAMPLE: How to select and log elements
// ============================================

// Selecting by ID
const titleExample = document.getElementById('title');
console.log('Example - Title element:', titleExample);

// Selecting by query selector
const firstParagraph = document.querySelector('p');
console.log('Example - First paragraph text:', firstParagraph.textContent);


// ============================================
// EXERCISE 1: Basic Selection
// ============================================

// Task 1.1: Select the element with ID 'list-title' and log it
// Your code here:


// Task 1.2: Select the first element with class 'box' and log it
// Your code here:


// Task 1.3: Select ALL list items and log how many there are
// Hint: Use querySelectorAll and .length property
// Your code here:



// ============================================
// EXERCISE 2: Exploring Properties
// ============================================

// Task 2.1: Select the image (id="sample-image") and log its 'src' attribute
// Hint: Use getAttribute('src') or .src property
// Your code here:


// Task 2.2: Select the link (id="sample-link") and log its 'href' attribute
// Your code here:


// Task 2.3: Select the shopping list (id="shopping-list") and log its innerHTML
// Your code here:



// ============================================
// EXERCISE 3: Multiple Selections
// ============================================

// Task 3.1: Select all elements with class 'highlight'
// Your code here:


// Task 3.2: Loop through all highlighted elements and log each text content
// Hint: Use forEach() method
// Your code here:


// Task 3.3: Select all list items and log each item's text in uppercase
// Hint: Use .toUpperCase() method on textContent
// Your code here:



// ============================================
// BONUS CHALLENGE
// ============================================

// Challenge: Select the container div and count how many child elements it has
// Hint: Use .children.length
// Your code here:

