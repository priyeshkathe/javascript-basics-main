# Part 5: Modern ES6+ Syntax

## 🎯 Learning Objectives
By the end of this part, you will be able to:
- Write arrow functions for cleaner code
- Use template literals for dynamic strings
- Apply destructuring for objects and arrays
- Understand `let`, `const`, and when to use them
- Use the spread operator and rest parameters

---

## 📘 Theory

### Arrow Functions
Arrow functions provide a shorter syntax for writing functions:

```javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => {
    return a + b;
};

// Short form (implicit return)
const add = (a, b) => a + b;

// Single parameter (no parentheses needed)
const double = x => x * 2;

// No parameters
const greet = () => 'Hello!';
```

### Arrow Functions with Event Listeners

```javascript
// Traditional
button.addEventListener('click', function(event) {
    console.log(event.target);
});

// Arrow function
button.addEventListener('click', (event) => {
    console.log(event.target);
});

// Short form
button.addEventListener('click', e => console.log(e.target));
```

### Template Literals
Use backticks (`) for strings with embedded expressions:

```javascript
const name = 'John';
const age = 25;

// Old way
const message = 'Hello, ' + name + '! You are ' + age + ' years old.';

// Template literal
const message = `Hello, ${name}! You are ${age} years old.`;

// Multi-line strings
const html = `
    <div class="card">
        <h2>${name}</h2>
        <p>Age: ${age}</p>
    </div>
`;

// Expressions inside ${}
const price = 19.99;
const tax = 0.1;
const total = `Total: $${(price * (1 + tax)).toFixed(2)}`;
```

### Destructuring

**Array Destructuring:**
```javascript
const colors = ['red', 'green', 'blue'];

// Old way
const first = colors[0];
const second = colors[1];

// Destructuring
const [first, second, third] = colors;

// Skip items
const [first, , third] = colors;

// With default values
const [a, b, c, d = 'yellow'] = colors;
```

**Object Destructuring:**
```javascript
const user = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

// Old way
const name = user.name;
const age = user.age;

// Destructuring
const { name, age, city } = user;

// Rename variables
const { name: userName, age: userAge } = user;

// Default values
const { name, country = 'USA' } = user;

// In function parameters
function greet({ name, age }) {
    return `Hello ${name}, age ${age}`;
}
greet(user);
```

### Spread Operator

```javascript
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1];

// Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };  // { a: 1, b: 2, c: 3, d: 4 }

// Override properties
const updated = { ...obj1, b: 10 };   // { a: 1, b: 10 }
```

### let vs const

| Keyword | Reassignable | Block Scoped | Use When |
|---------|-------------|--------------|----------|
| `let` | Yes | Yes | Value will change |
| `const` | No | Yes | Value won't change |
| `var` | Yes | No | Avoid using |

```javascript
const name = 'John';    // Won't change
let count = 0;          // Will change
count++;                // OK
// name = 'Jane';       // Error!

// Note: const objects/arrays can be modified
const user = { name: 'John' };
user.name = 'Jane';     // OK - modifying property, not reassigning
```

---

## 🛠️ Exercises

### Exercise 1: Arrow Functions
1. Convert traditional functions to arrow functions
2. Use arrow functions in array methods (map, filter, forEach)
3. Practice short-form arrow functions

### Exercise 2: Template Literals
1. Create dynamic HTML strings
2. Build a greeting message with multiple variables
3. Create a template for displaying user cards

### Exercise 3: Destructuring & Spread
1. Extract values from objects using destructuring
2. Use destructuring in function parameters
3. Combine arrays and objects using spread operator

---

## ✅ Checklist
- [ ] I can write arrow functions in different forms
- [ ] I understand when `this` behaves differently in arrow functions
- [ ] I can use template literals with expressions
- [ ] I can destructure arrays and objects
- [ ] I understand the spread operator for arrays and objects

---

## 📌 Tips
- Arrow functions don't have their own `this` - they inherit from parent scope
- Use template literals whenever you need string concatenation
- Destructuring makes code cleaner and more readable
- `const` doesn't mean immutable - object properties can still change
- Use spread operator to avoid mutating original arrays/objects

---

**Previous:** [Part 4 - State Management](../part-4/README.md)

**Next:** [Part 6 - Mini Project](../part-6/README.md)
