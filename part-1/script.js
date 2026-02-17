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

// EXERCISE 1: Basic Selection

const listTitle = document.getElementById('list-title');
console.log('Task 1.1 - List Title:', listTitle);

const firstBox = document.querySelector('.box');
console.log('Task 1.2 - First Box:', firstBox);

const listItems = document.querySelectorAll('.list-item');
console.log('Task 1.3 - Total list items:', listItems.length);

// EXERCISE 2: Exploring Properties

const image = document.getElementById('sample-image');
console.log('Task 2.1 - Image src (getAttribute):', image.getAttribute('src'));
console.log('Task 2.1 - Image src (.src):', image.src);

const link = document.getElementById('sample-link');
console.log('Task 2.2 - Link href (getAttribute):', link.getAttribute('href'));
console.log('Task 2.2 - Link href (.href):', link.href);

const shoppingList = document.getElementById('shopping-list');
console.log('Task 2.3 - Shopping List innerHTML:', shoppingList.innerHTML);


// EXERCISE 3: Multiple Selections

const highlightedElements = document.querySelectorAll('.highlight');

highlightedElements.forEach((element) => {
    console.log('Task 3.2 - Highlight text:', element.textContent);
});

const listItemsUpper = document.querySelectorAll('.list-item');

listItemsUpper.forEach((item) => {
    console.log('Task 3.3 - List item uppercase:', item.textContent.toUpperCase());
});



// ============================================
// BONUS CHALLENGE
// ============================================

// Challenge: Select the container div and count how many child elements it has
// Hint: Use .children.length
// Your code here:

