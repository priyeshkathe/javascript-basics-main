/**
 * Part 2: Event Listeners
 *
 * In this file, you will practice handling various events
 * like clicks, input changes, and form submissions.
 *
 * Open index.html in your browser to test your code.
 */

// ============================================
// EXAMPLE: Basic Click Event
// ============================================

// This is how you add a click event listener
const exampleButton = document.querySelector('#alert-btn');

exampleButton.addEventListener('click', function() {
    alert('Hello! You clicked the button!');
});


// ============================================
// EXERCISE 1: Click Events
// ============================================

// Task 1.1: Color Change Button
// When clicked, change the button's background color to a random color

const colorBtn = document.querySelector('#color-btn');

// EXAMPLE CODE (working demo):
colorBtn.addEventListener('click', function() {
    // Generate random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    this.style.backgroundColor = randomColor;
    this.textContent = randomColor;
});

// Task 1.2: Counter
// - Clicking "Increase" should add 1 to the counter
// - Clicking "Decrease" should subtract 1 from the counter
// - Clicking "Reset" should set the counter back to 0

const counterDisplay = document.querySelector('#counter-display');
const incrementBtn = document.querySelector('#increment-btn');
const decrementBtn = document.querySelector('#decrement-btn');
const resetBtn = document.querySelector('#reset-btn');

// Create a variable to store the count
let count = 0;

// Function to update the display
function updateCounter() {
    counterDisplay.textContent = count;
}

// EXAMPLE CODE (working demo):
incrementBtn.addEventListener('click', function() {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', function() {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', function() {
    count = 0;
    updateCounter();
});


// ============================================
// EXERCISE 2: Input Events
// ============================================

// Task 2.1: Live Text Preview
// As the user types, show the text in the output div in real-time

const textInput = document.querySelector('#text-input');
const textOutput = document.querySelector('#text-output');

// EXAMPLE CODE (working demo):
textInput.addEventListener('input', function(event) {
    const text = event.target.value;
    if (text === '') {
        textOutput.textContent = 'Your text will appear here...';
    } else {
        textOutput.textContent = text;
    }
});


// Task 2.2: Character Counter
// Show how many characters have been typed (max 50)

const charInput = document.querySelector('#char-input');
const charCount = document.querySelector('#char-count');

// EXAMPLE CODE (working demo):
charInput.addEventListener('input', function(event) {
    const length = event.target.value.length;
    charCount.textContent = length;
});


// Task 2.3: Input Validation
// - If input is empty, show red border and message "This field is required"
// - If input has text, show green border and message "Looks good!"

const validateInput = document.querySelector('#validate-input');
const validationMessage = document.querySelector('#validation-message');

// EXAMPLE CODE (working demo):
validateInput.addEventListener('input', function(event) {
    const value = event.target.value;

    if (value === '') {
        this.style.borderColor = '#e74c3c';
        validationMessage.textContent = 'This field is required';
        validationMessage.style.color = '#e74c3c';
    } else {
        this.style.borderColor = '#27ae60';
        validationMessage.textContent = 'Looks good!';
        validationMessage.style.color = '#27ae60';
    }
});


// ============================================
// EXERCISE 3: Form Handling
// ============================================

// Task 3.1: Handle Form Submission
// - Prevent the default form submission (page reload)
// - Get values from all three inputs
// - Display the values in the form-output div

const userForm = document.querySelector('#user-form');
const formOutput = document.querySelector('#form-output');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const messageInput = document.querySelector('#message-input');

// EXAMPLE CODE (working demo):
userForm.addEventListener('submit', function(event) {
    // Prevent page reload
    event.preventDefault();

    // Get values
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Display the data
    formOutput.innerHTML = `
        <strong>Form Submitted!</strong><br>
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Message:</strong> ${message || '(no message)'}
    `;

    // Optional: Clear the form
    // userForm.reset();
});


// ============================================
// BONUS CHALLENGES
// ============================================

// Challenge 1: Double-click Event
// Add a double-click event to the counter display that multiplies the count by 2

// EXAMPLE CODE (working demo):
counterDisplay.addEventListener('dblclick', function() {
    count = count * 2;
    updateCounter();
});


// Challenge 2: Keyboard Event
// When user presses Enter in the text input, show an alert with the text

// EXAMPLE CODE (working demo):
textInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        alert('You typed: ' + this.value);
    }
});
