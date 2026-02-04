/**
 * Part 5: Modern ES6+ Syntax
 *
 * In this file, you will practice modern JavaScript features:
 * - Arrow functions
 * - Template literals
 * - Destructuring
 * - Spread operator
 */

// ============================================
// EXERCISE 1: Arrow Functions
// ============================================

// ----- 1.1: Convert Functions -----

// EXAMPLE: Traditional function vs Arrow function
// Traditional:
function addTraditional(a, b) {
    return a + b;
}

// Arrow function:
const addArrow = (a, b) => a + b;

// Converted arrow functions:
const multiply = (a, b) => a * b;
const isEven = (num) => num % 2 === 0;
const greet = (name) => `Hello, ${name}!`;

const runArrowDemo = document.querySelector('#run-arrow-demo');
const arrowOutput = document.querySelector('#arrow-output');

// EXAMPLE CODE (working demo):
runArrowDemo.addEventListener('click', () => {
    let output = '';

    output += `addTraditional(5, 3) = ${addTraditional(5, 3)}\n`;
    output += `addArrow(5, 3) = ${addArrow(5, 3)}\n`;
    output += `multiply(4, 5) = ${multiply(4, 5)}\n`;
    output += `isEven(4) = ${isEven(4)}\n`;
    output += `isEven(7) = ${isEven(7)}\n`;
    output += `greet('Alice') = ${greet('Alice')}`;

    arrowOutput.textContent = output;
});


// ----- 1.2: Array Methods with Arrow Functions -----

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayOutput = document.querySelector('#array-output');

// EXAMPLE CODE (working demo):
document.querySelector('#double-numbers').addEventListener('click', () => {
    const doubled = numbers.map(n => n * 2);
    arrayOutput.textContent = `Doubled: [${doubled.join(', ')}]`;
});

document.querySelector('#filter-even').addEventListener('click', () => {
    const evens = numbers.filter(n => n % 2 === 0);
    arrayOutput.textContent = `Even numbers: [${evens.join(', ')}]`;
});

document.querySelector('#sum-all').addEventListener('click', () => {
    const sum = numbers.reduce((total, n) => total + n, 0);
    arrayOutput.textContent = `Sum: ${sum}`;
});


// ----- 1.3: Arrow Function in Event Listener -----

let clickCount = 0;
const counterBtn = document.querySelector('#arrow-counter-btn');
const countDisplay = document.querySelector('#arrow-count');

// EXAMPLE CODE (working demo):
counterBtn.addEventListener('click', () => {
    clickCount++;
    countDisplay.textContent = clickCount;
});


// ============================================
// EXERCISE 2: Template Literals
// ============================================

// ----- 2.1: Dynamic Greeting -----

const nameInput = document.querySelector('#name-input');
const ageInput = document.querySelector('#age-input');
const greetBtn = document.querySelector('#greet-btn');
const greetingOutput = document.querySelector('#greeting-output');

// EXAMPLE CODE (working demo):
greetBtn.addEventListener('click', () => {
    const name = nameInput.value || 'Guest';
    const age = ageInput.value || '??';
    const birthYear = age !== '??' ? 2024 - parseInt(age) : '??';

    const greeting = `Hello, ${name}!
You are ${age} years old.
You were born around ${birthYear}.`;

    greetingOutput.textContent = greeting;
});


// ----- 2.2: User Card Generator -----

const cardName = document.querySelector('#card-name');
const cardRole = document.querySelector('#card-role');
const cardEmail = document.querySelector('#card-email');
const generateCardBtn = document.querySelector('#generate-card-btn');
const cardsContainer = document.querySelector('#cards-container');

// EXAMPLE CODE (working demo):
generateCardBtn.addEventListener('click', () => {
    const name = cardName.value || 'Unknown';
    const role = cardRole.value || 'Member';
    const email = cardEmail.value || 'no-email@example.com';

    const cardHTML = `
        <div class="user-card">
            <h4>${name}</h4>
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Email:</strong> ${email}</p>
        </div>
    `;
    cardsContainer.innerHTML += cardHTML;

    // Clear inputs
    cardName.value = '';
    cardRole.value = '';
    cardEmail.value = '';
});


// ----- 2.3: Math Expression -----

const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const calcBtn = document.querySelector('#calc-btn');
const calcOutput = document.querySelector('#calc-output');

// EXAMPLE CODE (working demo):
calcBtn.addEventListener('click', () => {
    const a = Number(num1Input.value);
    const b = Number(num2Input.value);

    const result = `${a} + ${b} = ${a + b}
${a} - ${b} = ${a - b}
${a} × ${b} = ${a * b}
${a} ÷ ${b} = ${(a / b).toFixed(2)}`;

    calcOutput.textContent = result;
});


// ============================================
// EXERCISE 3: Destructuring & Spread
// ============================================

// ----- 3.1: Object Destructuring -----

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const destructDemo = document.querySelector('#destruct-demo');
const destructOutput = document.querySelector('#destruct-output');

// EXAMPLE CODE (working demo):
destructDemo.addEventListener('click', () => {
    // Basic destructuring
    const { firstName, lastName, age } = user;

    // Nested destructuring
    const { address: { city, country } } = user;

    let output = `Name: ${firstName} ${lastName}
Age: ${age}
City: ${city}
Country: ${country}`;

    destructOutput.textContent = output;
});


// ----- 3.2: Spread Operator -----

const spreadDemo = document.querySelector('#spread-demo');
const spreadOutput = document.querySelector('#spread-output');

// EXAMPLE CODE (working demo):
spreadDemo.addEventListener('click', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    // Combine arrays
    const combined = [...arr1, ...arr2];

    // Add element in middle
    const withMiddle = [...arr1, 'middle', ...arr2];

    // Copy and modify object
    const original = { name: 'Alice', age: 25 };
    const updated = { ...original, age: 26, city: 'Boston' };

    let output = `arr1: [${arr1.join(', ')}]
arr2: [${arr2.join(', ')}]
combined: [${combined.join(', ')}]
withMiddle: [${withMiddle.join(', ')}]

original: ${JSON.stringify(original)}
updated: ${JSON.stringify(updated)}`;

    spreadOutput.textContent = output;
});


// ----- 3.3: Combine Arrays -----

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combineOutput = document.querySelector('#combine-output');

// EXAMPLE CODE (working demo):
document.querySelector('#combine-arrays').addEventListener('click', () => {
    const combined = [...array1, ...array2];
    combineOutput.textContent = `Combined: [${combined.join(', ')}]`;
});

document.querySelector('#copy-array').addEventListener('click', () => {
    const copy = [...array1];
    copy.push(99);  // Modify the copy
    combineOutput.textContent = `Original: [${array1.join(', ')}]\nCopy (modified): [${copy.join(', ')}]`;
});


// ----- 3.4: Live Object Builder -----

let myObject = {};
const objKeyInput = document.querySelector('#obj-key');
const objValueInput = document.querySelector('#obj-value');
const addPropertyBtn = document.querySelector('#add-property');
const resetObjectBtn = document.querySelector('#reset-object');
const objectOutput = document.querySelector('#object-output');

// Function to display object
const displayObject = () => {
    objectOutput.textContent = JSON.stringify(myObject, null, 2);
};

// EXAMPLE CODE (working demo):
addPropertyBtn.addEventListener('click', () => {
    const key = objKeyInput.value.trim();
    const value = objValueInput.value.trim();

    if (key) {
        // Add property using spread operator to create new object
        myObject = { ...myObject, [key]: value };

        objKeyInput.value = '';
        objValueInput.value = '';
        displayObject();
    }
});

resetObjectBtn.addEventListener('click', () => {
    myObject = {};
    displayObject();
});


// ============================================
// BONUS: Combining All ES6+ Features
// ============================================

// Example of using all features together:
const users = [
    { id: 1, name: 'Alice', score: 85 },
    { id: 2, name: 'Bob', score: 92 },
    { id: 3, name: 'Charlie', score: 78 }
];

// Arrow function + destructuring + template literal
const formatUser = ({ name, score }) => `${name}: ${score} points`;

// Map with arrow function
const formatted = users.map(formatUser);
console.log('Formatted users:', formatted);

// Filter + destructuring in parameter
const highScorers = users.filter(({ score }) => score >= 80);
console.log('High scorers:', highScorers);

// Spread to add new user
const newUsers = [...users, { id: 4, name: 'Diana', score: 95 }];
console.log('With new user:', newUsers);
